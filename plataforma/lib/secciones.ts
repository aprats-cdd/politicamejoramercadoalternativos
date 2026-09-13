/** Las cuatro estaciones del recorrido. La navegación y el scroll-spy leen de acá. */
export const SECCIONES = [
  { id: "vision-general", etiqueta: "Visión General" },
  { id: "ecosistema", etiqueta: "Ecosistema de Roles" },
  { id: "regulacion", etiqueta: "Regulación" },
  { id: "cifras", etiqueta: "Cifras" },
] as const;

export type SeccionId = (typeof SECCIONES)[number]["id"];

/** URL del ensayo publicado en la raíz del sitio. */
export const URL_ENSAYO = "https://aprats-cdd.github.io/politicamejoramercadoalternativos/";
