import { describe, expect, it } from "vitest";
import type { Cifra } from "@/data/schema";
import { formatearMonto, presentarCifra } from "@/lib/format";

const base = { fuentes: [] as string[] };

describe("presentación de cifras", () => {
  it("una cifra pendiente se presenta como marcador, nunca como número", () => {
    const c: Cifra = { valor: null, unidad: "USD-M", evidencia: { nivel: "pendiente", ...base } };
    expect(presentarCifra(c)).toBe("por verificar");
  });

  it("usa la escala larga en español", () => {
    expect(formatearMonto(5_900_000, "EUR")).toBe("EUR 5,9 billones");
    expect(formatearMonto(320_000, "USD")).toBe("USD 320 mil millones");
    expect(formatearMonto(5_000, "USD")).toBe("USD 5 mil millones");
  });

  it("marca aproximaciones y sufijos", () => {
    const c: Cifra = { valor: 150, unidad: "entidades", sufijo: "+", evidencia: { nivel: "doble-fuente", fuentes: ["a", "b"] } };
    expect(presentarCifra(c)).toBe("150+");
    const d: Cifra = { valor: 75, unidad: "veces-PIB", aproximado: true, evidencia: { nivel: "de-oido", fuentes: ["a"], noSostiene: "x" } };
    expect(presentarCifra(d)).toBe("~75×");
    const e: Cifra = { valor: 0.5, unidad: "veces-PIB", evidencia: { nivel: "de-oido", fuentes: ["a"], noSostiene: "x" } };
    expect(presentarCifra(e)).toBe("0,5×");
  });

  it("presenta rangos cuando la fuente da dispersión", () => {
    const c: Cifra = { valor: null, rango: [87_500, 101_000], unidad: "USD-M", evidencia: { nivel: "de-oido", fuentes: ["a"], noSostiene: "x" } };
    expect(presentarCifra(c)).toBe("USD 88–101 mil millones");
  });
});
