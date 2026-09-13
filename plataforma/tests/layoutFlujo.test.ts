import { describe, expect, it } from "vitest";
import { marketData } from "@/data/marketData";
import { MEDIDAS, construirDiagrama, dentroDelPerimetro } from "@/lib/layoutFlujo";

describe("layout del diagrama", () => {
  it("posiciona todos los nodos no reguladores dentro del viewBox", () => {
    for (const esc of marketData.escenarios) {
      const d = construirDiagrama(esc.nodos, esc.enlaces);
      expect(d.nodos.length).toBe(esc.nodos.filter((n) => !n.roles.includes("regulador")).length);
      for (const n of d.nodos) {
        expect(n.x).toBeGreaterThanOrEqual(0);
        expect(n.y).toBeGreaterThanOrEqual(MEDIDAS.bandaSuperior);
        expect(n.x + n.ancho).toBeLessThanOrEqual(d.ancho);
        expect(n.y + n.alto).toBeLessThanOrEqual(d.alto);
      }
    }
  });

  it("traza un enlace por cada enlace declarado, con path válido", () => {
    for (const esc of marketData.escenarios) {
      const d = construirDiagrama(esc.nodos, esc.enlaces);
      expect(d.enlaces.length).toBe(esc.enlaces.length);
      for (const e of d.enlaces) expect(e.d).toMatch(/^M [\d.-]+ [\d.-]+ C /);
    }
  });

  it("el perímetro regulado excluye al inversionista y a los actores fuera de la jurisdicción", () => {
    for (const esc of marketData.escenarios) {
      const d = construirDiagrama(esc.nodos, esc.enlaces);
      expect(d.perimetro).not.toBeNull();
      for (const n of d.nodos) {
        const dentro = dentroDelPerimetro(n);
        if (n.roles.includes("inversionista") || n.fueraDelPerimetro) expect(dentro, `${esc.id}:${n.id}`).toBe(false);
        if (dentro && d.perimetro) {
          expect(n.x).toBeGreaterThanOrEqual(d.perimetro.x);
          expect(n.x + n.ancho).toBeLessThanOrEqual(d.perimetro.x + d.perimetro.ancho);
        }
      }
    }
  });

  it("enlaces de ida y vuelta entre los mismos nodos no comparten trazo", () => {
    const esc = marketData.escenarios.find((e) => e.id === "cl-hoy");
    expect(esc).toBeDefined();
    if (!esc) return;
    const d = construirDiagrama(esc.nodos, esc.enlaces);
    const ida = d.enlaces.find((e) => e.de === "inversionista" && e.a === "agf");
    const vuelta = d.enlaces.find((e) => e.de === "agf" && e.a === "inversionista");
    expect(ida?.d).not.toBe(vuelta?.d);
  });
});
