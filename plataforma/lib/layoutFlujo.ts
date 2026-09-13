import type { EnlaceFlujo, NodoFlujo } from "@/data/schema";

/**
 * Layout determinista del diagrama de cadena de valor.
 *
 * Los nodos declaran (columna, fila); esta función los traduce a coordenadas
 * dentro de un viewBox fijo. El regulador no ocupa celda: se dibuja como el
 * rótulo del perímetro regulado que encierra a los actores supervisados.
 * Separar el layout del componente permite testearlo sin DOM.
 */

export const MEDIDAS = {
  margenX: 14,
  margenY: 14,
  /** Banda superior para el rótulo del perímetro y los arcos largos. */
  bandaSuperior: 58,
  /** Banda inferior para el rótulo del perímetro regulado. */
  bandaInferior: 30,
  nodoAncho: 212,
  nodoAlto: 64,
  gapX: 88,
  gapY: 40,
  perimetroPad: 14,
} as const;

export interface NodoPosicionado extends NodoFlujo {
  x: number;
  y: number;
  ancho: number;
  alto: number;
  cx: number;
  cy: number;
}

export interface Perimetro {
  x: number;
  y: number;
  ancho: number;
  alto: number;
}

export type AnclajeEtiqueta = "start" | "middle" | "end";

export interface EnlaceTrazado extends EnlaceFlujo {
  id: string;
  d: string;
  etiquetaX: number;
  etiquetaY: number;
  anclaje: AnclajeEtiqueta;
}

export interface Diagrama {
  ancho: number;
  alto: number;
  nodos: NodoPosicionado[];
  regulador: NodoFlujo | undefined;
  perimetro: Perimetro | null;
  enlaces: EnlaceTrazado[];
}

function esRegulador(n: NodoFlujo): boolean {
  return n.roles.includes("regulador");
}

/** Un nodo queda dentro del perímetro si el supervisor local lo regula. */
export function dentroDelPerimetro(n: NodoFlujo): boolean {
  if (esRegulador(n) || n.fueraDelPerimetro) return false;
  return !n.roles.includes("inversionista");
}

export function posicionarNodos(nodos: readonly NodoFlujo[]): NodoPosicionado[] {
  const { margenX, margenY, bandaSuperior, nodoAncho, nodoAlto, gapX, gapY } = MEDIDAS;
  return nodos
    .filter((n) => !esRegulador(n))
    .map((n) => {
      const x = margenX + n.columna * (nodoAncho + gapX);
      const y = margenY + bandaSuperior + n.fila * (nodoAlto + gapY);
      return { ...n, x, y, ancho: nodoAncho, alto: nodoAlto, cx: x + nodoAncho / 2, cy: y + nodoAlto / 2 };
    });
}

export function calcularPerimetro(nodos: readonly NodoPosicionado[]): Perimetro | null {
  const dentro = nodos.filter(dentroDelPerimetro);
  if (dentro.length === 0) return null;
  const pad = MEDIDAS.perimetroPad;
  const minX = Math.min(...dentro.map((n) => n.x)) - pad;
  const maxX = Math.max(...dentro.map((n) => n.x + n.ancho)) + pad;
  const minY = Math.min(...dentro.map((n) => n.y)) - pad;
  const maxY = Math.max(...dentro.map((n) => n.y + n.alto)) + pad;
  return { x: minX, y: minY, ancho: maxX - minX, alto: maxY - minY };
}

interface Trazo {
  d: string;
  etiquetaX: number;
  etiquetaY: number;
  anclaje: AnclajeEtiqueta;
}

function trazar(de: NodoPosicionado, a: NodoPosicionado, desplazamiento: number): Trazo {
  const dCol = a.columna - de.columna;
  const dFila = a.fila - de.fila;

  // misma columna: vertical entre bordes
  if (dCol === 0) {
    const abajo = dFila > 0;
    const x = de.cx + desplazamiento;
    const y1 = abajo ? de.y + de.alto : de.y;
    const y2 = abajo ? a.y : a.y + a.alto;
    const my = (y1 + y2) / 2;
    const aLaIzquierda = desplazamiento < 0;
    return {
      d: `M ${x} ${y1} C ${x} ${my}, ${x} ${my}, ${x} ${y2}`,
      etiquetaX: aLaIzquierda ? x - 9 : x + 9,
      etiquetaY: my + 3,
      anclaje: aLaIzquierda ? "end" : "start",
    };
  }

  // misma fila y a dos o más columnas: arco por arriba para no cruzar el nodo intermedio
  if (dFila === 0 && Math.abs(dCol) >= 2) {
    const x1 = de.cx;
    const x2 = a.cx;
    const y = de.y;
    const altura = 46 + Math.abs(desplazamiento);
    return {
      d: `M ${x1} ${y} C ${x1} ${y - altura}, ${x2} ${y - altura}, ${x2} ${y}`,
      etiquetaX: (x1 + x2) / 2,
      etiquetaY: y - altura * 0.72,
      anclaje: "middle",
    };
  }

  // resto: curva en S entre el borde derecho de uno y el izquierdo del otro
  const derecha = dCol > 0;
  const x1 = derecha ? de.x + de.ancho : de.x;
  const x2 = derecha ? a.x : a.x + a.ancho;
  const y1 = de.cy + desplazamiento;
  const y2 = a.cy + desplazamiento;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  return {
    d: `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`,
    etiquetaX: mx,
    etiquetaY: desplazamiento > 0 ? my + 14 : my - 6,
    anclaje: "middle",
  };
}

/** Desplaza pares de enlaces en sentidos opuestos para que no se superpongan. */
function desplazamientoDe(enlace: EnlaceFlujo, todos: readonly EnlaceFlujo[]): number {
  const inverso = todos.some((e) => e.de === enlace.a && e.a === enlace.de);
  if (!inverso) return 0;
  return enlace.de < enlace.a ? -11 : 11;
}

export function trazarEnlaces(
  enlaces: readonly EnlaceFlujo[],
  nodos: readonly NodoPosicionado[],
): EnlaceTrazado[] {
  const porId = new Map(nodos.map((n) => [n.id, n] as const));
  return enlaces.flatMap((e) => {
    const de = porId.get(e.de);
    const a = porId.get(e.a);
    if (!de || !a) return [];
    const t = trazar(de, a, desplazamientoDe(e, enlaces));
    return [{ ...e, id: `${e.de}->${e.a}:${e.tipo}`, d: t.d, etiquetaX: t.etiquetaX, etiquetaY: t.etiquetaY, anclaje: t.anclaje }];
  });
}

export function construirDiagrama(nodos: readonly NodoFlujo[], enlaces: readonly EnlaceFlujo[]): Diagrama {
  const { margenX, margenY, bandaSuperior, bandaInferior, nodoAncho, nodoAlto, gapX, gapY } = MEDIDAS;
  const posicionados = posicionarNodos(nodos);
  const columnas = Math.max(0, ...posicionados.map((n) => n.columna)) + 1;
  const filas = Math.max(0, ...posicionados.map((n) => n.fila)) + 1;
  return {
    ancho: margenX * 2 + columnas * nodoAncho + (columnas - 1) * gapX,
    alto: margenY * 2 + bandaSuperior + bandaInferior + filas * nodoAlto + (filas - 1) * gapY,
    nodos: posicionados,
    regulador: nodos.find(esRegulador),
    perimetro: calcularPerimetro(posicionados),
    enlaces: trazarEnlaces(enlaces, posicionados),
  };
}
