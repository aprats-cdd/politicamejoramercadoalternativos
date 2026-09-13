import type { Cifra, Unidad } from "@/data/schema";

const LOCALE = "es-CL";

/** Formatea un entero con separador de miles chileno (punto). */
export function formatearEntero(valor: number): string {
  return new Intl.NumberFormat(LOCALE, { maximumFractionDigits: 0 }).format(valor);
}

/** Formatea con decimales fijos, coma decimal. */
export function formatearDecimal(valor: number, decimales = 1): string {
  return new Intl.NumberFormat(LOCALE, {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  }).format(valor);
}

/**
 * Convierte un monto expresado en millones a una etiqueta compacta legible
 * para una audiencia no técnica: "USD 320 mil millones", "EUR 5,9 billones".
 * En español "billón" = millón de millones; se usa la escala larga a propósito
 * y se explica en el glosario.
 */
export function formatearMonto(valorEnMillones: number, moneda: "USD" | "EUR"): string {
  const abs = Math.abs(valorEnMillones);
  if (abs >= 1_000_000) {
    return `${moneda} ${formatearDecimal(valorEnMillones / 1_000_000, 1)} billones`;
  }
  if (abs >= 1_000) {
    return `${moneda} ${formatearEntero(valorEnMillones / 1_000)} mil millones`;
  }
  return `${moneda} ${formatearEntero(valorEnMillones)} millones`;
}

/** Etiqueta corta para ejes y tooltips: "320 mil M", "5,9 B". */
export function formatearMontoCorto(valorEnMillones: number): string {
  const abs = Math.abs(valorEnMillones);
  if (abs >= 1_000_000) return `${formatearDecimal(valorEnMillones / 1_000_000, 1)} B`;
  if (abs >= 1_000) return `${formatearEntero(valorEnMillones / 1_000)} mil M`;
  return `${formatearEntero(valorEnMillones)} M`;
}

function monedaDeUnidad(unidad: Unidad): "USD" | "EUR" | null {
  if (unidad === "USD-M") return "USD";
  if (unidad === "EUR-M") return "EUR";
  return null;
}

/**
 * Presenta una cifra según su unidad y su nivel de evidencia.
 * Una cifra `pendiente` nunca se presenta como número: devuelve el marcador
 * "por verificar". Una cifra aproximada lleva el prefijo "~".
 */
export function presentarCifra(cifra: Cifra): string {
  if (cifra.valor === null) {
    if (cifra.rango) return presentarRango(cifra.rango, cifra.unidad);
    return "por verificar";
  }
  const base = presentarValor(cifra.valor, cifra.unidad);
  const prefijo = cifra.aproximado ? "~" : "";
  return `${prefijo}${base}${cifra.sufijo ?? ""}`;
}

/**
 * Un rango comparte moneda y escala cuando ambos extremos caen en la misma:
 * "USD 88–101 mil millones" en vez de repetir la unidad dos veces.
 */
export function presentarRango([a, b]: [number, number], unidad: Unidad): string {
  const moneda = monedaDeUnidad(unidad);
  if (moneda) {
    const escala = (v: number) => (Math.abs(v) >= 1_000_000 ? 2 : Math.abs(v) >= 1_000 ? 1 : 0);
    if (escala(a) === escala(b)) {
      switch (escala(a)) {
        case 2:
          return `${moneda} ${formatearDecimal(a / 1_000_000, 1)}–${formatearDecimal(b / 1_000_000, 1)} billones`;
        case 1:
          return `${moneda} ${formatearEntero(a / 1_000)}–${formatearEntero(b / 1_000)} mil millones`;
        default:
          return `${moneda} ${formatearEntero(a)}–${formatearEntero(b)} millones`;
      }
    }
  }
  return `${presentarValor(a, unidad)} – ${presentarValor(b, unidad)}`;
}

export function presentarValor(valor: number, unidad: Unidad): string {
  const moneda = monedaDeUnidad(unidad);
  if (moneda) return formatearMonto(valor, moneda);
  switch (unidad) {
    case "veces-PIB":
      return `${formatearDecimal(valor, valor < 1 ? 1 : 0)}×`;
    case "entidades":
      return formatearEntero(valor);
    case "habitantes":
      return valor >= 1_000_000
        ? `${formatearDecimal(valor / 1_000_000, 1)} millones`
        : `${formatearEntero(valor / 1_000)} mil`;
    case "porcentaje":
      return `${formatearDecimal(valor, 0)}%`;
    default:
      return formatearEntero(valor);
  }
}

/** Nombre largo de la unidad para leyendas y tablas. */
export function nombreUnidad(unidad: Unidad): string {
  switch (unidad) {
    case "USD-M":
      return "millones de USD";
    case "EUR-M":
      return "millones de EUR";
    case "veces-PIB":
      return "veces el PIB";
    case "entidades":
      return "entidades";
    case "habitantes":
      return "habitantes";
    case "porcentaje":
      return "%";
  }
}
