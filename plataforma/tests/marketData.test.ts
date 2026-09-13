import { describe, expect, it } from "vitest";
import { marketData } from "@/data/marketData";
import type { Cifra } from "@/data/schema";

/**
 * Integridad del dato: estas pruebas son la versión ejecutable de la regla de
 * la casa. Si alguien mete una cifra sin evidencia, o una cifra pendiente con
 * número, el harness lo rechaza antes de que llegue a la página.
 */

const idsFuentes = new Set(marketData.fuentes.map((f) => f.id));

function todasLasCifras(): Array<{ ruta: string; cifra: Cifra }> {
  const lista: Array<{ ruta: string; cifra: Cifra }> = [];
  for (const j of Object.values(marketData.jurisdicciones)) {
    lista.push({ ruta: `jurisdicciones.${j.id}.poblacion`, cifra: j.poblacion });
    lista.push({ ruta: `jurisdicciones.${j.id}.pib`, cifra: j.pib });
  }
  for (const s of marketData.subMercados) lista.push({ ruta: `subMercados.${s.id}.aum`, cifra: s.aum });
  for (const i of marketData.indicadores) {
    lista.push({ ruta: `indicadores.${i.id}.CL`, cifra: i.porJurisdiccion.CL });
    lista.push({ ruta: `indicadores.${i.id}.LU`, cifra: i.porJurisdiccion.LU });
  }
  return lista;
}

describe("cifras y evidencia", () => {
  it("una cifra pendiente nunca trae número", () => {
    for (const { ruta, cifra } of todasLasCifras()) {
      if (cifra.evidencia.nivel === "pendiente") {
        expect(cifra.valor, ruta).toBeNull();
        expect(cifra.rango, ruta).toBeUndefined();
      }
    }
  });

  it("una cifra con número o rango declara al menos una fuente", () => {
    for (const { ruta, cifra } of todasLasCifras()) {
      if (cifra.valor !== null || cifra.rango) {
        expect(cifra.evidencia.fuentes.length, ruta).toBeGreaterThan(0);
      }
    }
  });

  it("toda cifra de oído dice qué no sostiene", () => {
    for (const { ruta, cifra } of todasLasCifras()) {
      if (cifra.evidencia.nivel === "de-oido") {
        expect(cifra.evidencia.noSostiene, ruta).toBeTruthy();
      }
    }
  });

  it("doble fuente exige dos fuentes distintas", () => {
    for (const { ruta, cifra } of todasLasCifras()) {
      if (cifra.evidencia.nivel === "doble-fuente") {
        expect(new Set(cifra.evidencia.fuentes).size, ruta).toBeGreaterThanOrEqual(2);
      }
    }
  });

  it("toda fuente referenciada existe en el catálogo", () => {
    const referencias: Array<{ ruta: string; fuentes: string[] }> = [
      ...todasLasCifras().map(({ ruta, cifra }) => ({ ruta, fuentes: cifra.evidencia.fuentes })),
      ...marketData.entidades.map((e) => ({ ruta: `entidades.${e.id}`, fuentes: e.evidencia.fuentes })),
      ...marketData.escenarios.map((e) => ({ ruta: `escenarios.${e.id}`, fuentes: e.evidencia.fuentes })),
      ...marketData.obligaciones.flatMap((o) => [
        { ruta: `obligaciones.${o.id}.chile`, fuentes: o.chile.evidencia.fuentes },
        { ruta: `obligaciones.${o.id}.luxemburgo`, fuentes: o.luxemburgo.evidencia.fuentes },
        ...(o.chileProyecto ? [{ ruta: `obligaciones.${o.id}.chileProyecto`, fuentes: o.chileProyecto.evidencia.fuentes }] : []),
      ]),
    ];
    for (const { ruta, fuentes } of referencias) {
      for (const id of fuentes) expect(idsFuentes.has(id), `${ruta} → ${id}`).toBe(true);
    }
  });

  it("los ids de fuentes son únicos", () => {
    expect(idsFuentes.size).toBe(marketData.fuentes.length);
  });
});

describe("roles y entidades", () => {
  const idsRoles = new Set(marketData.roles.map((r) => r.id));
  const idsEntidades = new Set(marketData.entidades.map((e) => e.id));

  it("los siete roles existen una sola vez", () => {
    expect(idsRoles.size).toBe(7);
    expect(marketData.roles.length).toBe(7);
  });

  it("toda entidad usa roles conocidos y su equivalente existe en la otra jurisdicción", () => {
    for (const e of marketData.entidades) {
      for (const r of e.roles) expect(idsRoles.has(r), `${e.id} → ${r}`).toBe(true);
      if (e.equivalenteEn) {
        const eq = marketData.entidades.find((x) => x.id === e.equivalenteEn);
        expect(eq, `${e.id} → ${e.equivalenteEn}`).toBeDefined();
        expect(eq?.jurisdiccion, e.id).not.toBe(e.jurisdiccion);
      }
    }
    expect(idsEntidades.size).toBe(marketData.entidades.length);
  });

  it("las figuras propuestas no se declaran obligatorias hoy", () => {
    for (const e of marketData.entidades.filter((x) => x.propuesta)) {
      expect(e.obligatoria, e.id).toBe(false);
    }
  });
});

describe("escenarios de la cadena de valor", () => {
  it("cada enlace conecta nodos existentes del mismo escenario", () => {
    for (const esc of marketData.escenarios) {
      const ids = new Set(esc.nodos.map((n) => n.id));
      for (const en of esc.enlaces) {
        expect(ids.has(en.de), `${esc.id}: ${en.de}`).toBe(true);
        expect(ids.has(en.a), `${esc.id}: ${en.a}`).toBe(true);
      }
    }
  });

  it("cada escenario tiene exactamente un regulador, un inversionista y tres puntos clave", () => {
    for (const esc of marketData.escenarios) {
      expect(esc.nodos.filter((n) => n.roles.includes("regulador")).length, esc.id).toBe(1);
      expect(esc.nodos.filter((n) => n.roles.includes("inversionista")).length, esc.id).toBe(1);
      expect(esc.puntosClave.length, esc.id).toBe(3);
    }
  });

  it("dos nodos no comparten celda", () => {
    for (const esc of marketData.escenarios) {
      const celdas = esc.nodos.filter((n) => !n.roles.includes("regulador")).map((n) => `${n.columna},${n.fila}`);
      expect(new Set(celdas).size, esc.id).toBe(celdas.length);
    }
  });
});

describe("sub-mercados", () => {
  it("parteDe y equivalente apuntan a sub-mercados existentes", () => {
    const ids = new Set(marketData.subMercados.map((s) => s.id));
    for (const s of marketData.subMercados) {
      if (s.parteDe) expect(ids.has(s.parteDe), s.id).toBe(true);
      if (s.equivalente) {
        const eq = marketData.subMercados.find((x) => x.id === s.equivalente);
        expect(eq, s.id).toBeDefined();
        expect(eq?.jurisdiccion, s.id).not.toBe(s.jurisdiccion);
      }
    }
  });
});
