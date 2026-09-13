/**
 * Esquema de datos de la plataforma Chile ↔ Luxemburgo.
 *
 * Principio: la evidencia viaja con el dato. Toda cifra lleva su nivel de
 * evidencia, sus fuentes y qué NO sostiene, porque la UI decide cómo
 * mostrarla a partir de eso (ver lib/evidencia.ts). El registro canónico de
 * evidencia del repositorio es constelacion/evidencia/registro-sitio.yaml;
 * cuando un dato viene de ahí, `claimRegistro` lo referencia.
 */

export type Jurisdiccion = "CL" | "LU";

export type NivelEvidencia =
  | "documento-fuente"
  | "doble-fuente"
  | "de-oido"
  | "ilustrativo"
  | "pendiente";

export type TipoFuente = "primaria" | "secundaria" | "archivo-repositorio";

export interface Fuente {
  id: string;
  nombre: string;
  organismo: string;
  tipo: TipoFuente;
  /** Fecha del documento o del dato, texto libre ("dic. 2025", "12-sep-2026"). */
  fecha?: string;
  /** Ruta dentro del repositorio cuando el archivo está commiteado. */
  archivo?: string;
  /** URL pública cuando existe y es estable. */
  url?: string;
}

export interface Evidencia {
  nivel: NivelEvidencia;
  /** Ids del catálogo `fuentes`. Vacío solo si nivel = pendiente. */
  fuentes: string[];
  /** Encabezado del claim en constelacion/evidencia/registro-sitio.yaml. */
  claimRegistro?: string;
  /** Fecha a la que corresponde el dato. */
  fechaDato?: string;
  /** Qué NO habilita afirmar este dato. Obligatorio si nivel = de-oido. */
  noSostiene?: string;
  nota?: string;
}

export type Unidad =
  | "USD-M"
  | "EUR-M"
  | "veces-PIB"
  | "entidades"
  | "habitantes"
  | "porcentaje";

export interface Cifra {
  /** `null` cuando la cifra está pendiente o solo existe como rango. */
  valor: number | null;
  /** Dispersión declarada entre fuentes. */
  rango?: [number, number];
  unidad: Unidad;
  /** "del orden de": la UI antepone "~". */
  aproximado?: boolean;
  /** Sufijo textual, p. ej. "+" en "150+". */
  sufijo?: string;
  evidencia: Evidencia;
}

/* ───────────── Jurisdicciones ───────────── */

export interface Regulador {
  sigla: string;
  nombre: string;
  explicacion: string;
}

export interface PerfilJurisdiccion {
  id: Jurisdiccion;
  nombre: string;
  gentilicio: string;
  moneda: "USD" | "EUR";
  regulador: Regulador;
  /** Cuerpo legal que organiza la industria de fondos. */
  leyMarco: string;
  poblacion: Cifra;
  pib: Cifra;
  /** Qué distingue a esta jurisdicción, en una frase para no especialistas. */
  enUnaFrase: string;
}

/* ───────────── Sub-mercados y tamaño ───────────── */

export type CategoriaSubMercado =
  | "pensiones"
  | "seguros"
  | "fondos-mutuos"
  | "fondos-inversion"
  | "fondos-privados"
  | "deuda-privada"
  | "ucits"
  | "aif-regulado"
  | "aif-no-supervisado";

export interface SubMercado {
  id: string;
  jurisdiccion: Jurisdiccion;
  categoria: CategoriaSubMercado;
  nombre: string;
  nombreCorto: string;
  /** Qué es, en lenguaje simple. */
  explicacion: string;
  /** Id del sub-mercado análogo en la otra jurisdicción, si existe. */
  equivalente?: string;
  /** Id del sub-mercado que lo contiene (evita sumar dos veces). */
  parteDe?: string;
  /** Activos bajo administración (AUM). */
  aum: Cifra;
}

/* ───────────── Roles y entidades ───────────── */

export type RolId =
  | "inversionista"
  | "gestor"
  | "administrador"
  | "custodio"
  | "valorizador"
  | "auditor"
  | "regulador";

export type IconoRol =
  | "wallet"
  | "compass"
  | "clipboard-list"
  | "vault"
  | "scale"
  | "search-check"
  | "gavel";

export interface Rol {
  id: RolId;
  nombre: string;
  /** La pregunta que este rol contesta: "¿Quién decide?" */
  pregunta: string;
  queHace: string;
  analogia: string;
  porQueImporta: string;
  icono: IconoRol;
}

export type SiglaRegulador = "CMF" | "CSSF" | "SP" | "extranjero" | "ninguno";
export type Independencia = "exigida" | "no-exigida" | "parcial";

export interface Entidad {
  id: string;
  jurisdiccion: Jurisdiccion;
  nombre: string;
  sigla?: string;
  roles: RolId[];
  regulador: SiglaRegulador;
  /** ¿La ley obliga a que exista este actor en todo fondo? */
  obligatoria: boolean;
  /** ¿Debe ser una persona jurídica distinta de la que decide las inversiones? */
  independencia: Independencia;
  /** Qué hace, en lenguaje simple. */
  descripcion: string;
  normaBase: string;
  /** Id de la entidad análoga en la otra jurisdicción. */
  equivalenteEn?: string;
  /** Solo existe si se aprueba el proyecto de ley. */
  propuesta?: boolean;
  evidencia: Evidencia;
}

/* ───────────── Cadena de valor (flujo) ───────────── */

export type EscenarioId = "cl-hoy" | "cl-proyecto" | "lu";
export type TipoFlujo = "dinero" | "mandato" | "control" | "informacion";
export type TonoNodo = "neutro" | "chile" | "propuesta" | "referencia";

export interface NodoFlujo {
  id: string;
  etiqueta: string;
  subtitulo?: string;
  roles: RolId[];
  /** Posición lógica; el layout la traduce a coordenadas. */
  columna: number;
  fila: number;
  tono: TonoNodo;
  /** Actor opcional en el escenario (línea discontinua). */
  opcional?: boolean;
  /** Puede estar fuera de la jurisdicción. */
  puedeEstarFuera?: boolean;
  /** No lo regula el supervisor local: se dibuja fuera del perímetro regulado. */
  fueraDelPerimetro?: boolean;
  /** Ficha didáctica del nodo en este escenario. */
  explicacion: string;
}

export interface EnlaceFlujo {
  de: string;
  a: string;
  tipo: TipoFlujo;
  etiqueta?: string;
}

export interface Escenario {
  id: EscenarioId;
  jurisdiccion: Jurisdiccion;
  titulo: string;
  resumen: string;
  /** Tres ideas que el lector debe llevarse de este escenario. */
  puntosClave: string[];
  nodos: NodoFlujo[];
  enlaces: EnlaceFlujo[];
  evidencia: Evidencia;
}

/* ───────────── Regulación comparada ───────────── */

export type EstadoNorma = "vigente" | "proyecto" | "no-existe" | "por-verificar";

export interface CeldaRegulatoria {
  texto: string;
  norma?: string;
  estado: EstadoNorma;
  evidencia: Evidencia;
}

export interface ObligacionRegulatoria {
  id: string;
  tema: string;
  /** La pregunta que un no especialista se haría. */
  pregunta: string;
  explicacion: string;
  chile: CeldaRegulatoria;
  chileProyecto?: CeldaRegulatoria;
  luxemburgo: CeldaRegulatoria;
}

/* ───────────── Indicadores para tarjetas y cifras ───────────── */

export interface Indicador {
  id: string;
  etiqueta: string;
  explicacion: string;
  porJurisdiccion: Record<Jurisdiccion, Cifra>;
  /** ¿Miden lo mismo en ambos países? Si no, la UI los muestra por separado. */
  comparable: boolean;
  notaComparabilidad?: string;
}

/* ───────────── Glosario ───────────── */

export interface Termino {
  id: string;
  termino: string;
  definicion: string;
}

/* ───────────── Raíz ───────────── */

export interface MarketData {
  version: string;
  fecha: string;
  jurisdicciones: Record<Jurisdiccion, PerfilJurisdiccion>;
  fuentes: Fuente[];
  subMercados: SubMercado[];
  roles: Rol[];
  entidades: Entidad[];
  escenarios: Escenario[];
  obligaciones: ObligacionRegulatoria[];
  indicadores: Indicador[];
  glosario: Termino[];
}
