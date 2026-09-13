import type { Cifra, Evidencia, Fuente, NivelEvidencia } from "@/data/schema";

/**
 * Reglas de la casa sobre evidencia (constelacion/voz-de-la-casa.md, regla 8 y
 * gate S07 de eval_sitio.py): una cifra se publica como dato solo si tiene
 * doble fuente o viene del documento fuente. Una cifra "de oído" se muestra
 * como orden de magnitud con su marca visible. Una cifra "pendiente" no se
 * muestra como número. La UI lee estas reglas desde acá, no las improvisa.
 */

export interface DescripcionNivel {
  etiqueta: string;
  corta: string;
  explicacion: string;
  /** Peso para ordenar de más a menos sólido. */
  solidez: number;
}

export const NIVELES: Record<NivelEvidencia, DescripcionNivel> = {
  "documento-fuente": {
    etiqueta: "Documento fuente",
    corta: "documento",
    explicacion:
      "El dato sale del documento original (por ejemplo, un registro exportado del regulador) archivado en este repositorio. Cualquiera puede contar las filas.",
    solidez: 5,
  },
  "doble-fuente": {
    etiqueta: "Doble fuente",
    corta: "doble fuente",
    explicacion:
      "Dos fuentes independientes sostienen el dato. Es el estándar para publicar una cifra como tal.",
    solidez: 4,
  },
  "de-oido": {
    etiqueta: "De oído · orden de magnitud",
    corta: "de oído",
    explicacion:
      "La fuente se cita pero no se abrió: lo que hay es un resumen leído por búsqueda. Se muestra como orden de magnitud, nunca como cifra exacta, y se declara qué no sostiene.",
    solidez: 2,
  },
  ilustrativo: {
    etiqueta: "Ilustrativo",
    corta: "ilustrativo",
    explicacion:
      "Estimación o supuesto del autor, declarado como tal. Sirve para dimensionar, no para afirmar.",
    solidez: 1,
  },
  pendiente: {
    etiqueta: "Por verificar",
    corta: "pendiente",
    explicacion:
      "Todavía no hay fuente abierta. La plataforma reserva el lugar del dato y muestra el marcador en vez de un número.",
    solidez: 0,
  },
};

/** Una cifra es publicable como número si tiene valor y no está pendiente. */
export function esPublicable(cifra: Cifra): boolean {
  return cifra.valor !== null && cifra.evidencia.nivel !== "pendiente";
}

/** Una cifra es "dura" si su evidencia alcanza el estándar de publicación. */
export function esDura(cifra: Cifra): boolean {
  return (
    cifra.evidencia.nivel === "doble-fuente" || cifra.evidencia.nivel === "documento-fuente"
  );
}

export function describirNivel(nivel: NivelEvidencia): DescripcionNivel {
  return NIVELES[nivel];
}

/** Resuelve los ids de fuente de una evidencia contra el catálogo. */
export function fuentesDe(evidencia: Evidencia, catalogo: readonly Fuente[]): Fuente[] {
  const porId = new Map(catalogo.map((f) => [f.id, f] as const));
  return evidencia.fuentes.flatMap((id) => {
    const fuente = porId.get(id);
    return fuente ? [fuente] : [];
  });
}

/** Ordena niveles de más a menos sólido (para leyendas y tablas). */
export const ORDEN_NIVELES: readonly NivelEvidencia[] = (
  Object.keys(NIVELES) as NivelEvidencia[]
).sort((a, b) => NIVELES[b].solidez - NIVELES[a].solidez);
