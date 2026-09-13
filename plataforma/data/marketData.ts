/**
 * Datos de la plataforma Chile ↔ Luxemburgo.
 *
 * REGLA DE LA CASA: ninguna cifra entra sin su evidencia. Las cifras salen del
 * registro de evidencia del repositorio (constelacion/evidencia/registro-sitio.yaml)
 * y conservan su nivel: documento fuente, doble fuente, de oído (orden de
 * magnitud) o pendiente (sin número). Los textos normativos de Luxemburgo
 * están, casi todos, leídos por búsqueda y no contra el texto primario; por
 * eso van marcados "de oído" y dicen qué no sostienen.
 *
 * Este archivo es la única fuente de verdad de la UI: los componentes leen de
 * acá y no traen números propios.
 */
import type {
  Entidad,
  Escenario,
  Evidencia,
  Fuente,
  Indicador,
  MarketData,
  ObligacionRegulatoria,
  PerfilJurisdiccion,
  Rol,
  SubMercado,
  Termino,
} from "./schema";

/* ───────────── Catálogo de fuentes ───────────── */

export const fuentes: Fuente[] = [
  {
    id: "sp-estadisticas-dic-2025",
    nombre: "Estadísticas del Sistema de Pensiones, diciembre 2025",
    organismo: "Superintendencia de Pensiones (Chile)",
    tipo: "primaria",
    fecha: "dic. 2025",
  },
  {
    id: "cmf-eeff-seguros-2025",
    nombre: "Estados financieros consolidados de compañías de seguros, 2025",
    organismo: "Comisión para el Mercado Financiero (Chile)",
    tipo: "primaria",
    fecha: "2025",
  },
  {
    id: "bcch-fondos-mutuos-dic-2025",
    nombre: "Estadísticas de fondos mutuos, diciembre 2025",
    organismo: "Banco Central de Chile",
    tipo: "primaria",
    fecha: "dic. 2025",
  },
  {
    id: "acafi-q4-2025",
    nombre: "Informe trimestral de inversiones alternativas en Chile, Q4 2025",
    organismo: "ACAFI",
    tipo: "primaria",
    fecha: "Q4 2025",
  },
  {
    id: "consolidacion-fn8",
    nombre: "Consolidación aritmética componente a componente del ahorro institucional",
    organismo: "Registro de evidencia del sitio (claim fn8)",
    tipo: "archivo-repositorio",
    archivo: "constelacion/evidencia/registro-sitio.yaml",
  },
  {
    id: "bcch-cuentas-nacionales-2025",
    nombre: "Cuentas Nacionales, PIB nominal 2025",
    organismo: "Banco Central de Chile",
    tipo: "primaria",
    fecha: "2025",
  },
  {
    id: "fmi-weo-2025",
    nombre: "World Economic Outlook 2025",
    organismo: "Fondo Monetario Internacional",
    tipo: "primaria",
    fecha: "2025",
  },
  {
    id: "cmf-registro-agf-2026-09-12",
    nombre:
      "Consulta de Entidades — Sociedades Administradoras Generales de Fondos vigentes (exportación CSV)",
    organismo: "Comisión para el Mercado Financiero (Chile)",
    tipo: "archivo-repositorio",
    fecha: "12-sep-2026",
    archivo: "constelacion/evidencia/fuentes/cmf-agf-vigentes-2026-09-12.csv",
  },
  {
    id: "buscafondos-ranking-fm",
    nombre: "Ranking público de patrimonio por administradora de fondos mutuos",
    organismo: "BuscaFondos",
    tipo: "secundaria",
    fecha: "sep. 2026",
  },
  {
    id: "cmf-registro-entidades",
    nombre: "Registro de Entidades Supervisadas y Ley N° 20.712",
    organismo: "Comisión para el Mercado Financiero (Chile)",
    tipo: "primaria",
  },
  {
    id: "supervisores-comparados",
    nombre: "Registros de administradores de fondos de la CSSF, el Central Bank of Ireland y la SFC de Colombia",
    organismo: "CSSF · Central Bank of Ireland · Superintendencia Financiera de Colombia",
    tipo: "primaria",
  },
  {
    id: "eurlex-aifmd",
    nombre: "Directiva 2011/61/UE sobre gestores de fondos de inversión alternativos (AIFMD)",
    organismo: "Parlamento Europeo y Consejo · EUR-Lex",
    tipo: "primaria",
    fecha: "2011 (transposición 2013)",
  },
  {
    id: "cssf-circular-22-811",
    nombre: "Circular CSSF 22/811 sobre administradores de organismos de inversión colectiva",
    organismo: "Commission de Surveillance du Secteur Financier (Luxemburgo)",
    tipo: "primaria",
    fecha: "2022",
  },
  {
    id: "cssf-estadisticas-aum",
    nombre: "Estadísticas de activos netos de los organismos de inversión colectiva",
    organismo: "Commission de Surveillance du Secteur Financier (Luxemburgo)",
    tipo: "primaria",
  },
  {
    id: "efama-fact-book",
    nombre: "EFAMA Fact Book",
    organismo: "European Fund and Asset Management Association",
    tipo: "secundaria",
  },
  {
    id: "cssf-newsletter-299",
    nombre: "Newsletter N° 299, diciembre 2025 (gestores autorizados al 30-nov-2025)",
    organismo: "Commission de Surveillance du Secteur Financier (Luxemburgo)",
    tipo: "primaria",
    fecha: "dic. 2025",
  },
  {
    id: "estadisticas-lu-poblacion-pib",
    nombre: "Población y PIB de Luxemburgo (Worldometer, Statista, World Economics)",
    organismo: "Agregadores estadísticos",
    tipo: "secundaria",
  },
  {
    id: "prensa-fm-mayo-2026",
    nombre:
      "Prensa financiera sobre patrimonio de fondos mutuos (mayo 2026) e informe gremial de fondos de inversión",
    organismo: "Prensa financiera chilena · asociación de administradoras",
    tipo: "secundaria",
    fecha: "may. 2026",
  },
  {
    id: "mensaje-166-374",
    nombre:
      "Mensaje N° 166-374: Proyecto de Ley de Reforma al Mercado de Capitales y Financiamiento de la Casa Propia",
    organismo: "Presidencia de la República de Chile",
    tipo: "primaria",
    fecha: "9-sep-2026",
  },
  {
    id: "minuta-hacienda",
    nombre: "Minuta sobre el proyecto de reforma al mercado de capitales, sección C, numerales 21 y 22",
    organismo: "Ministerio de Hacienda (Chile)",
    tipo: "primaria",
    fecha: "sep. 2026",
  },
  {
    id: "chambers-lu",
    nombre: "Global Practice Guides: Investment Funds — Luxembourg",
    organismo: "Chambers and Partners",
    tipo: "secundaria",
  },
  {
    id: "alfi-lff",
    nombre: "Guías de la industria sobre el régimen luxemburgués de fondos",
    organismo: "ALFI · Luxembourg for Finance",
    tipo: "secundaria",
  },
  {
    id: "ley-20712",
    nombre: "Ley N° 20.712, administración de fondos de terceros y carteras individuales",
    organismo: "Biblioteca del Congreso Nacional (leychile.cl)",
    tipo: "primaria",
    fecha: "2014",
  },
  {
    id: "ley-18876",
    nombre: "Ley N° 18.876, entidades privadas de depósito y custodia de valores",
    organismo: "Biblioteca del Congreso Nacional (leychile.cl)",
    tipo: "primaria",
    fecha: "1989",
  },
  {
    id: "dl-3538",
    nombre: "DL N° 3.538, ley orgánica de la Comisión para el Mercado Financiero",
    organismo: "Biblioteca del Congreso Nacional (leychile.cl)",
    tipo: "primaria",
  },
];

/* ───────────── Evidencias reutilizadas ───────────── */

const EV_PROYECTO: Evidencia = {
  nivel: "doble-fuente",
  fuentes: ["mensaje-166-374", "minuta-hacienda"],
  claimRegistro: "Proyecto de Ley de Reforma al Mercado de Capitales (ingreso 9-sep-2026)",
  fechaDato: "9-sep-2026",
  nota: "Proyecto en tramitación: describe una regla propuesta, no una ley vigente.",
};

const EV_REGIMEN_VIGENTE: Evidencia = {
  nivel: "doble-fuente",
  fuentes: ["mensaje-166-374", "minuta-hacienda"],
  claimRegistro: "Proyecto de Ley de Reforma al Mercado de Capitales (ingreso 9-sep-2026)",
  nota: "El régimen vigente de los arts. 15, 16 y 17 se describe a partir de los Fundamentos del propio Mensaje (II.3, letra j).",
};

const EV_LU_ARQUITECTURA: Evidencia = {
  nivel: "de-oido",
  fuentes: ["eurlex-aifmd", "chambers-lu", "alfi-lff"],
  claimRegistro: "Referencias comparadas: Luxemburgo (UE) y Brasil",
  noSostiene:
    "No sostiene cifras de tamaño, participación ni empleo; no sostiene comparar regímenes en detalle ni afirmar que el proyecto chileno replique el europeo.",
  nota: "Leído por búsqueda en literatura de práctica; no verificado contra el texto consolidado en EUR-Lex ni contra la ley luxemburguesa.",
};

const EV_LU_DEPOSITARIO: Evidencia = {
  nivel: "doble-fuente",
  fuentes: ["eurlex-aifmd", "cssf-circular-22-811", "efama-fact-book"],
  claimRegistro: "fn11 · Arquitectura comparada internacional",
  nota: "Depositario obligatorio bajo el art. 21 de la AIFMD con responsabilidad objetiva; transposición en julio de 2013.",
};

const EV_CUSTODIA_CL: Evidencia = {
  nivel: "de-oido",
  fuentes: ["ley-18876", "ley-20712"],
  claimRegistro: "Registro histórico del desacoplamiento chileno (historia.html)",
  noSostiene:
    "No sostiene que en fondos privados exista la misma obligación de custodia, ni qué instrumentos quedan fuera por norma del regulador.",
  nota: "Transcripción devuelta por búsqueda; los dominios legales estaban bloqueados en la sesión que la registró.",
};

const EV_CERO_ADMIN: Evidencia = {
  nivel: "doble-fuente",
  fuentes: ["cmf-registro-entidades", "supervisores-comparados"],
  claimRegistro: "fn9 · Cero Fund Administrators",
  nota: "La ausencia chilena es regulatoria: la categoría no existe en la Ley N° 20.712 ni en la normativa aplicable.",
};

const pendiente = (nota: string): Evidencia => ({ nivel: "pendiente", fuentes: [], nota });

/* ───────────── Jurisdicciones ───────────── */

export const jurisdicciones: Record<"CL" | "LU", PerfilJurisdiccion> = {
  CL: {
    id: "CL",
    nombre: "Chile",
    gentilicio: "chileno",
    moneda: "USD",
    regulador: {
      sigla: "CMF",
      nombre: "Comisión para el Mercado Financiero",
      explicacion: "Autoriza a las administradoras, lleva el registro de entidades y fiscaliza fondos, custodios y auditores.",
    },
    leyMarco: "Ley N° 20.712 (2014), administración de fondos de terceros",
    poblacion: {
      valor: null,
      unidad: "habitantes",
      evidencia: pendiente("Falta abrir la proyección del INE. Sin fuente abierta, la plataforma no publica el número."),
    },
    pib: {
      valor: 320_000,
      unidad: "USD-M",
      aproximado: true,
      evidencia: {
        nivel: "doble-fuente",
        fuentes: ["bcch-cuentas-nacionales-2025", "fmi-weo-2025"],
        claimRegistro: "fn4 · PIB de Chile",
        fechaDato: "2025",
      },
    },
    enUnaFrase:
      "Un ahorro previsional profundo y una ley que deja decidir, administrar y responder en la misma mano.",
  },
  LU: {
    id: "LU",
    nombre: "Luxemburgo",
    gentilicio: "luxemburgués",
    moneda: "EUR",
    regulador: {
      sigla: "CSSF",
      nombre: "Commission de Surveillance du Secteur Financier",
      explicacion: "Autoriza a gestoras, depositarios y administradores, aprueba los fondos regulados y publica estadísticas de la industria.",
    },
    leyMarco: "Régimen europeo de fondos (UCITS y AIFMD, transpuesta en 2013) aplicado por la CSSF",
    poblacion: {
      valor: 672_000,
      unidad: "habitantes",
      aproximado: true,
      evidencia: {
        nivel: "de-oido",
        fuentes: ["estadisticas-lu-poblacion-pib"],
        claimRegistro: "La brecha: la figura de dominios comparados (index.html, nota 12)",
        noSostiene: "No sostiene el dato exacto ni el año de referencia.",
      },
    },
    pib: {
      valor: null,
      rango: [87_500, 101_000],
      unidad: "USD-M",
      evidencia: {
        nivel: "de-oido",
        fuentes: ["estadisticas-lu-poblacion-pib"],
        claimRegistro: "La brecha: la figura de dominios comparados (index.html, nota 12)",
        noSostiene: "Dispersión real entre fuentes; no sostiene una cifra puntual.",
      },
    },
    enUnaFrase:
      "Un país chico que atrajo los fondos del mundo: la administración, la custodia y la auditoría se quedan; quien decide puede estar en cualquier parte.",
  },
};

/* ───────────── Sub-mercados ───────────── */

const EV_FN8: Evidencia = {
  nivel: "doble-fuente",
  fuentes: [
    "sp-estadisticas-dic-2025",
    "cmf-eeff-seguros-2025",
    "bcch-fondos-mutuos-dic-2025",
    "acafi-q4-2025",
    "consolidacion-fn8",
  ],
  claimRegistro: "fn8 · Ahorro institucional total",
  fechaDato: "2025",
};

export const subMercados: SubMercado[] = [
  {
    id: "cl-afp",
    jurisdiccion: "CL",
    categoria: "pensiones",
    nombre: "Fondos de pensiones (AFP)",
    nombreCorto: "Pensiones",
    explicacion: "El ahorro obligatorio para la jubilación, administrado por las AFP. Es la mayor bolsa de ahorro del país.",
    aum: { valor: 210_000, unidad: "USD-M", aproximado: true, evidencia: EV_FN8 },
  },
  {
    id: "cl-seguros",
    jurisdiccion: "CL",
    categoria: "seguros",
    nombre: "Compañías de seguros de vida",
    nombreCorto: "Seguros de vida",
    explicacion: "Reservas que las aseguradoras invierten para pagar rentas vitalicias y siniestros futuros.",
    aum: { valor: 85_000, unidad: "USD-M", aproximado: true, evidencia: EV_FN8 },
  },
  {
    id: "cl-fondos-mutuos",
    jurisdiccion: "CL",
    categoria: "fondos-mutuos",
    nombre: "Fondos mutuos",
    nombreCorto: "Fondos mutuos",
    explicacion: "Fondos abiertos: cualquier persona entra y sale casi a diario. Son el pariente chileno más cercano de un UCITS europeo.",
    equivalente: "lu-ucits",
    aum: { valor: 65_000, unidad: "USD-M", aproximado: true, evidencia: EV_FN8 },
  },
  {
    id: "cl-fondos-inversion",
    jurisdiccion: "CL",
    categoria: "fondos-inversion",
    nombre: "Fondos de inversión públicos y alternativos",
    nombreCorto: "Fondos de inversión",
    explicacion: "Fondos con cuotas menos líquidas que invierten en activos alternativos: deuda privada, capital privado, inmobiliario, infraestructura.",
    equivalente: "lu-aif",
    aum: { valor: 40_000, unidad: "USD-M", aproximado: true, evidencia: EV_FN8 },
  },
  {
    id: "cl-deuda-privada",
    jurisdiccion: "CL",
    categoria: "deuda-privada",
    nombre: "Deuda privada",
    nombreCorto: "Deuda privada",
    explicacion: "Préstamos directos a empresas, fuera del banco, empaquetados en fondos. Es una parte de los fondos de inversión alternativos.",
    parteDe: "cl-fondos-inversion",
    aum: {
      valor: 5_000,
      unidad: "USD-M",
      aproximado: true,
      evidencia: {
        nivel: "doble-fuente",
        fuentes: ["acafi-q4-2025", "consolidacion-fn8"],
        claimRegistro: "fn3 · Tamaño de la deuda privada en Chile",
        fechaDato: "Q4 2025",
      },
    },
  },
  {
    id: "cl-fip",
    jurisdiccion: "CL",
    categoria: "fondos-privados",
    nombre: "Fondos de inversión privados (FIP)",
    nombreCorto: "Fondos privados",
    explicacion: "Fondos sin oferta pública, con menos inversionistas y sin reporte agregado de patrimonio al regulador. Su tamaño no está en ninguna fuente abierta.",
    equivalente: "lu-raif",
    aum: {
      valor: null,
      unidad: "USD-M",
      evidencia: pendiente("No existe estadística pública agregada de los FIP. Se reserva el lugar del dato."),
    },
  },
  {
    id: "lu-ucits",
    jurisdiccion: "LU",
    categoria: "ucits",
    nombre: "UCITS (fondos armonizados europeos)",
    nombreCorto: "UCITS",
    explicacion: "Fondos para el público general con pasaporte para venderse en toda la Unión Europea. Concentran la mayor parte de los activos domiciliados en Luxemburgo.",
    equivalente: "cl-fondos-mutuos",
    aum: {
      valor: null,
      unidad: "EUR-M",
      evidencia: pendiente("El desglose UCITS / FIA de la CSSF no fue abierto. Solo el total tiene doble fuente."),
    },
  },
  {
    id: "lu-aif",
    jurisdiccion: "LU",
    categoria: "aif-regulado",
    nombre: "Fondos alternativos regulados (Parte II, SIF, SICAR)",
    nombreCorto: "FIA regulados",
    explicacion: "Vehículos para inversionistas institucionales y calificados, autorizados y supervisados por la CSSF.",
    equivalente: "cl-fondos-inversion",
    aum: {
      valor: null,
      unidad: "EUR-M",
      evidencia: pendiente("El desglose UCITS / FIA de la CSSF no fue abierto."),
    },
  },
  {
    id: "lu-raif",
    jurisdiccion: "LU",
    categoria: "aif-no-supervisado",
    nombre: "RAIF (fondos alternativos reservados)",
    nombreCorto: "RAIF",
    explicacion: "Fondos que no pasan por autorización de la CSSF: la supervisión recae en su gestor autorizado. Son el pariente más cercano de un fondo privado chileno.",
    equivalente: "cl-fip",
    aum: {
      valor: null,
      unidad: "EUR-M",
      evidencia: pendiente("Los RAIF no reportan a la CSSF; su tamaño se estima por la industria y no fue abierto."),
    },
  },
];

/* ───────────── Roles ───────────── */

export const roles: Rol[] = [
  {
    id: "inversionista",
    nombre: "Inversionista",
    pregunta: "¿Quién pone la plata?",
    queHace: "Aporta el dinero al fondo y recibe cuotas a cambio. Pueden ser personas, AFP, aseguradoras o family offices.",
    analogia: "El dueño de la casa: pone el terreno y la plata, y contrata a otros para construirla.",
    porQueImporta: "Todo lo demás existe para cuidar su dinero e informarle qué pasó con él.",
    icono: "wallet",
  },
  {
    id: "gestor",
    nombre: "Gestor de inversiones",
    pregunta: "¿Quién decide?",
    queHace: "Elige en qué invertir y cuándo vender. Es el oficio que requiere talento especializado.",
    analogia: "El arquitecto: diseña qué se construye y con qué materiales.",
    porQueImporta: "Es la función que Luxemburgo deja traer de cualquier parte del mundo, y la que en Chile no puede ser un negocio propio.",
    icono: "compass",
  },
  {
    id: "administrador",
    nombre: "Administrador del fondo",
    pregunta: "¿Quién administra?",
    queHace: "Lleva la contabilidad, mantiene el registro de quién es dueño de qué e informa al inversionista.",
    analogia: "El contador y el notario de la obra: anota cada movimiento y da fe de quién es dueño de qué.",
    porQueImporta: "Es la infraestructura que se queda en el país aunque el gestor esté a doce mil kilómetros.",
    icono: "clipboard-list",
  },
  {
    id: "custodio",
    nombre: "Custodio o depositario",
    pregunta: "¿Quién guarda los títulos?",
    queHace: "Guarda los activos del fondo y verifica que existan y sean del fondo. En Europa además vigila los flujos de caja.",
    analogia: "La caja fuerte con llave ajena: el que decide no es el que guarda.",
    porQueImporta: "Sin un custodio distinto, nadie externo puede decir que la plata está donde se dijo.",
    icono: "vault",
  },
  {
    id: "valorizador",
    nombre: "Valorizador",
    pregunta: "¿Quién pone el precio?",
    queHace: "Calcula cuánto vale cada activo y, con eso, cuánto vale cada cuota del fondo.",
    analogia: "El tasador: dice cuánto vale la casa, y conviene que no sea el mismo que la vende.",
    porQueImporta: "Si el que decide también valoriza lo que decidió, un error o una pérdida puede tardar en verse.",
    icono: "scale",
  },
  {
    id: "auditor",
    nombre: "Auditor externo",
    pregunta: "¿Quién revisa los números?",
    queHace: "Revisa una vez al año que los estados financieros del fondo reflejen la realidad.",
    analogia: "El inspector municipal: llega después y revisa que lo construido coincida con los planos.",
    porQueImporta: "Es un control por oposición: su interés es distinto del de quien decide.",
    icono: "search-check",
  },
  {
    id: "regulador",
    nombre: "Regulador",
    pregunta: "¿Quién autoriza y fiscaliza?",
    queHace: "Da las licencias, lleva los registros, dicta normas y sanciona.",
    analogia: "El árbitro: fija las reglas del juego y saca tarjeta.",
    porQueImporta: "Define qué funciones deben separarse y quién responde por cada una.",
    icono: "gavel",
  },
];

/* ───────────── Entidades ───────────── */

export const entidades: Entidad[] = [
  {
    id: "cl-agf",
    jurisdiccion: "CL",
    nombre: "Administradora General de Fondos",
    sigla: "AGF",
    roles: ["gestor", "administrador", "valorizador"],
    regulador: "CMF",
    obligatoria: true,
    independencia: "no-exigida",
    descripcion:
      "Sociedad de giro exclusivo que hoy concentra tres funciones: decide las inversiones, lleva la contabilidad y calcula el valor de la cuota, e informa al inversionista. Puede contratar especialistas, pero el costo y la responsabilidad no se mueven de ella.",
    normaBase: "Ley N° 20.712, arts. 15, 16 y 17",
    equivalenteEn: "lu-manco",
    evidencia: EV_REGIMEN_VIGENTE,
  },
  {
    id: "cl-gestor-inversiones",
    jurisdiccion: "CL",
    nombre: "Gestor de inversiones",
    sigla: "propuesta",
    roles: ["gestor"],
    regulador: "CMF",
    obligatoria: false,
    independencia: "exigida",
    propuesta: true,
    descripcion:
      "Tercero inscrito en la CMF al que la administradora puede encomendar la cartera del fondo, en todo o en parte. Responde por las decisiones que toma, constituye una garantía propia y su remuneración se paga con cargo al fondo.",
    normaBase: "Mensaje N° 166-374: nuevo art. 16 y arts. 17, 98 y 99 de la Ley N° 20.712 (proyecto)",
    equivalenteEn: "lu-gestor-delegado",
    evidencia: EV_PROYECTO,
  },
  {
    id: "cl-custodio",
    jurisdiccion: "CL",
    nombre: "Empresa de depósito y custodia de valores",
    roles: ["custodio"],
    regulador: "CMF",
    obligatoria: true,
    independencia: "exigida",
    descripcion:
      "Guarda los títulos del fondo en una entidad distinta de la administradora y anota a nombre de quién están. El regulador define por norma qué instrumentos no son susceptibles de custodia.",
    normaBase: "Ley N° 18.876 (1989) y art. 53 de la Ley N° 20.712",
    equivalenteEn: "lu-depositario",
    evidencia: EV_CUSTODIA_CL,
  },
  {
    id: "cl-valorizador-fiscalizado",
    jurisdiccion: "CL",
    nombre: "Entidad fiscalizada para contabilidad y valorización",
    sigla: "propuesta",
    roles: ["administrador", "valorizador"],
    regulador: "CMF",
    obligatoria: false,
    independencia: "parcial",
    propuesta: true,
    descripcion:
      "Con el proyecto, la administradora solo podría encomendar auditoría interna, contabilización, valorización, gestión de riesgos y control interno a entidades fiscalizadas por la CMF, que responden por lo que hacen.",
    normaBase: "Mensaje N° 166-374: nuevo art. 15 de la Ley N° 20.712 (proyecto)",
    equivalenteEn: "lu-administracion-central",
    evidencia: EV_PROYECTO,
  },
  {
    id: "cl-auditor",
    jurisdiccion: "CL",
    nombre: "Auditor externo",
    roles: ["auditor"],
    regulador: "CMF",
    obligatoria: true,
    independencia: "exigida",
    descripcion: "Empresa de auditoría inscrita en la CMF que revisa los estados financieros del fondo.",
    normaBase: "Por verificar: Ley N° 20.712 y normativa CMF sobre empresas de auditoría externa",
    equivalenteEn: "lu-auditor",
    evidencia: pendiente("La obligación y su norma exacta no fueron abiertas en el registro de evidencia."),
  },
  {
    id: "cl-cmf",
    jurisdiccion: "CL",
    nombre: "Comisión para el Mercado Financiero",
    sigla: "CMF",
    roles: ["regulador"],
    regulador: "ninguno",
    obligatoria: true,
    independencia: "exigida",
    descripcion: "Autoriza a las administradoras, lleva el registro de entidades y fiscaliza fondos, custodios y auditores.",
    normaBase: "DL N° 3.538 (ley orgánica) y Ley N° 20.712",
    equivalenteEn: "lu-cssf",
    evidencia: {
      nivel: "doble-fuente",
      fuentes: ["dl-3538", "ley-20712"],
      claimRegistro: "Facultades normativas invocadas (propuesta jurídica del autor)",
      nota: "Las normas son verificables; la lectura sobre suficiencia de facultades es tesis del autor y no entra acá.",
    },
  },
  {
    id: "lu-manco",
    jurisdiccion: "LU",
    nombre: "Sociedad gestora autorizada",
    sigla: "ManCo / AIFM",
    roles: ["gestor"],
    regulador: "CSSF",
    obligatoria: true,
    independencia: "no-exigida",
    descripcion:
      "Entidad autorizada que responde por el fondo ante la CSSF. Decide las inversiones o delega la gestión de cartera en un tercero, incluso fuera de Luxemburgo, sin dejar de ser responsable y sin poder vaciarse hasta quedar como entidad buzón.",
    normaBase: "Directiva 2011/61/UE (AIFMD), art. 20, transpuesta en Luxemburgo en 2013",
    equivalenteEn: "cl-agf",
    evidencia: EV_LU_ARQUITECTURA,
  },
  {
    id: "lu-gestor-delegado",
    jurisdiccion: "LU",
    nombre: "Gestor de cartera delegado",
    roles: ["gestor"],
    regulador: "extranjero",
    obligatoria: false,
    independencia: "exigida",
    descripcion:
      "El que efectivamente elige las inversiones cuando la sociedad gestora delega. Puede estar en Londres, Nueva York o São Paulo, regulado en su propio país; la responsabilidad frente al fondo sigue en la gestora luxemburguesa.",
    normaBase: "Directiva 2011/61/UE (AIFMD), art. 20",
    equivalenteEn: "cl-gestor-inversiones",
    evidencia: EV_LU_ARQUITECTURA,
  },
  {
    id: "lu-administracion-central",
    jurisdiccion: "LU",
    nombre: "Administración central",
    sigla: "fund administrator",
    roles: ["administrador", "valorizador"],
    regulador: "CSSF",
    obligatoria: true,
    independencia: "parcial",
    descripcion:
      "Lleva la contabilidad del fondo, calcula el valor de la cuota y mantiene el registro de inversionistas. Debe estar establecida y autorizada en Luxemburgo; puede hacerla la propia gestora, pero lo habitual es una firma especializada. Hay más de 150 firmas independientes que prestan el servicio.",
    normaBase: "Circular CSSF 22/811",
    equivalenteEn: "cl-valorizador-fiscalizado",
    evidencia: {
      nivel: "doble-fuente",
      fuentes: ["cssf-circular-22-811", "supervisores-comparados", "chambers-lu"],
      claimRegistro: "fn11 · Arquitectura comparada internacional + fn9 · Cero Fund Administrators",
      nota: "El requisito de establecimiento local viene de literatura de práctica (de oído); la Circular 22/811 y el conteo 150+ tienen doble fuente.",
    },
  },
  {
    id: "lu-depositario",
    jurisdiccion: "LU",
    nombre: "Depositario",
    roles: ["custodio"],
    regulador: "CSSF",
    obligatoria: true,
    independencia: "exigida",
    descripcion:
      "Banco u otra entidad autorizada, distinta de la gestora, que custodia los activos, verifica la propiedad de los que no se pueden custodiar, vigila los flujos de caja y controla que el fondo cumpla su reglamento. Responde con responsabilidad objetiva por la pérdida de instrumentos custodiados.",
    normaBase: "Directiva 2011/61/UE (AIFMD), art. 21 (transposición 2013)",
    equivalenteEn: "cl-custodio",
    evidencia: EV_LU_DEPOSITARIO,
  },
  {
    id: "lu-auditor",
    jurisdiccion: "LU",
    nombre: "Auditor autorizado",
    sigla: "réviseur d'entreprises agréé",
    roles: ["auditor"],
    regulador: "CSSF",
    obligatoria: true,
    independencia: "exigida",
    descripcion: "Auditor establecido en Luxemburgo que revisa cada año las cuentas del fondo.",
    normaBase: "Por verificar: leyes luxemburguesas de 2010 (OPC) y 2013 (gestores de FIA)",
    equivalenteEn: "cl-auditor",
    evidencia: {
      ...EV_LU_ARQUITECTURA,
      noSostiene: "No sostiene el detalle del régimen de auditoría ni las obligaciones de reporte al supervisor.",
    },
  },
  {
    id: "lu-cssf",
    jurisdiccion: "LU",
    nombre: "Commission de Surveillance du Secteur Financier",
    sigla: "CSSF",
    roles: ["regulador"],
    regulador: "ninguno",
    obligatoria: true,
    independencia: "exigida",
    descripcion: "Autoriza a gestoras, depositarios y administradores, aprueba los fondos regulados y publica estadísticas mensuales de la industria.",
    normaBase: "Por verificar: ley de creación de la CSSF (1998)",
    equivalenteEn: "cl-cmf",
    evidencia: pendiente("La norma orgánica de la CSSF no fue abierta en el registro de evidencia."),
  },
];

/* ───────────── Escenarios de la cadena de valor ───────────── */

export const escenarios: Escenario[] = [
  {
    id: "cl-hoy",
    jurisdiccion: "CL",
    titulo: "Chile hoy",
    resumen: "Una sola sociedad decide, administra y valoriza. Puede contratar ayuda, pero la paga ella y responde por todo.",
    puntosClave: [
      "La administradora responde incluso por decisiones de inversión que tomó otro (art. 17).",
      "Si contrata un especialista para la cartera, el gasto es siempre de su cargo, nunca del fondo (art. 16).",
      "La custodia sí está separada: los títulos se depositan en una empresa regulada distinta.",
    ],
    nodos: [
      {
        id: "inversionista",
        etiqueta: "Inversionistas",
        subtitulo: "personas · AFP · aseguradoras",
        roles: ["inversionista"],
        columna: 0,
        fila: 0,
        tono: "neutro",
        explicacion: "Ponen la plata y reciben cuotas. Reciben la información del valor de su inversión desde la misma administradora que decide.",
      },
      {
        id: "agf",
        etiqueta: "Administradora (AGF)",
        subtitulo: "decide · administra · valoriza",
        roles: ["gestor", "administrador", "valorizador"],
        columna: 1,
        fila: 0,
        tono: "chile",
        explicacion: "Una sola sociedad concentra las tres funciones. Puede contratar a un especialista para la cartera, pero lo paga ella y sigue respondiendo por decisiones que no tomó.",
      },
      {
        id: "especialista",
        etiqueta: "Especialista contratado",
        subtitulo: "opcional · lo paga la AGF",
        roles: ["gestor"],
        columna: 0,
        fila: 1,
        tono: "neutro",
        opcional: true,
        fueraDelPerimetro: true,
        explicacion: "Hoy la administradora puede encargar la gestión de cartera a un tercero, pero el costo es siempre de cargo de la administradora y la responsabilidad no se mueve.",
      },
      {
        id: "custodio",
        etiqueta: "Empresa de depósito",
        subtitulo: "guarda los títulos",
        roles: ["custodio"],
        columna: 2,
        fila: 0,
        tono: "neutro",
        explicacion: "Los instrumentos susceptibles de custodia se depositan en una empresa regulada, distinta de la administradora.",
      },
      {
        id: "auditor",
        etiqueta: "Auditor externo",
        roles: ["auditor"],
        columna: 3,
        fila: 0,
        tono: "neutro",
        explicacion: "Revisa los estados financieros del fondo.",
      },
      {
        id: "regulador",
        etiqueta: "CMF",
        subtitulo: "autoriza · fiscaliza",
        roles: ["regulador"],
        columna: 2,
        fila: 2,
        tono: "neutro",
        explicacion: "Autoriza y fiscaliza a la administradora, al custodio y a los auditores.",
      },
    ],
    enlaces: [
      { de: "inversionista", a: "agf", tipo: "dinero", etiqueta: "aporta" },
      { de: "agf", a: "inversionista", tipo: "informacion", etiqueta: "informa" },
      { de: "agf", a: "custodio", tipo: "mandato", etiqueta: "deposita" },
      { de: "agf", a: "especialista", tipo: "mandato", etiqueta: "contrata y paga" },
      { de: "auditor", a: "agf", tipo: "control", etiqueta: "audita" },
    ],
    evidencia: EV_REGIMEN_VIGENTE,
  },
  {
    id: "cl-proyecto",
    jurisdiccion: "CL",
    titulo: "Chile con el proyecto",
    resumen: "Aparece un tercero que decide y responde por lo que decide. La administradora administra, verifica al gestor y responde por lo suyo.",
    puntosClave: [
      "El gestor de inversiones se inscribe en la CMF, constituye garantía propia y cobra con cargo al fondo.",
      "Cada uno responde por lo suyo: el gestor por lo que decide, la administradora por sus deberes.",
      "Contabilidad y valorización solo pueden encomendarse a entidades que la CMF fiscalice.",
    ],
    nodos: [
      {
        id: "inversionista",
        etiqueta: "Inversionistas",
        subtitulo: "personas · AFP · aseguradoras",
        roles: ["inversionista"],
        columna: 0,
        fila: 0,
        tono: "neutro",
        explicacion: "Ponen la plata. La administradora sigue siendo quien les informa.",
      },
      {
        id: "agf",
        etiqueta: "Administradora",
        subtitulo: "administra · verifica al gestor",
        roles: ["administrador"],
        columna: 1,
        fila: 0,
        tono: "chile",
        explicacion: "Sigue a cargo de la administración y de sus deberes: verifica al gestor antes de encargarle la cartera y responde por lo suyo.",
      },
      {
        id: "gestor",
        etiqueta: "Gestor de inversiones",
        subtitulo: "decide · figura nueva",
        roles: ["gestor"],
        columna: 1,
        fila: 1,
        tono: "propuesta",
        explicacion: "Tercero inscrito en la CMF que decide las inversiones de la cartera encomendada, con garantía propia y remuneración de cargo del fondo. Responde por lo que decide.",
      },
      {
        id: "custodio",
        etiqueta: "Empresa de depósito",
        subtitulo: "guarda los títulos",
        roles: ["custodio"],
        columna: 2,
        fila: 0,
        tono: "neutro",
        explicacion: "Sin cambios: los títulos se depositan en una empresa regulada distinta de la administradora.",
      },
      {
        id: "valorizador",
        etiqueta: "Entidad fiscalizada",
        subtitulo: "contabilidad · valorización",
        roles: ["valorizador", "administrador"],
        columna: 2,
        fila: 1,
        tono: "propuesta",
        opcional: true,
        explicacion: "Si la administradora encomienda contabilidad o valorización, solo puede hacerlo a entidades que la CMF fiscalice, y ellas responden.",
      },
      {
        id: "auditor",
        etiqueta: "Auditor externo",
        roles: ["auditor"],
        columna: 3,
        fila: 0,
        tono: "neutro",
        explicacion: "Revisa los estados financieros del fondo.",
      },
      {
        id: "regulador",
        etiqueta: "CMF",
        subtitulo: "registra al gestor · fiscaliza",
        roles: ["regulador"],
        columna: 2,
        fila: 2,
        tono: "neutro",
        explicacion: "Lleva el registro de gestores, fija por norma qué entidades pueden recibir contabilidad y valorización, y fiscaliza a todos.",
      },
    ],
    enlaces: [
      { de: "inversionista", a: "agf", tipo: "dinero", etiqueta: "aporta" },
      { de: "agf", a: "inversionista", tipo: "informacion", etiqueta: "informa" },
      { de: "agf", a: "gestor", tipo: "mandato", etiqueta: "encarga cartera" },
      { de: "gestor", a: "agf", tipo: "informacion", etiqueta: "decide" },
      { de: "agf", a: "custodio", tipo: "mandato", etiqueta: "deposita" },
      { de: "agf", a: "valorizador", tipo: "mandato", etiqueta: "encomienda" },
      { de: "auditor", a: "agf", tipo: "control", etiqueta: "audita" },
    ],
    evidencia: EV_PROYECTO,
  },
  {
    id: "lu",
    jurisdiccion: "LU",
    titulo: "Luxemburgo",
    resumen: "La gestora autorizada responde ante el regulador y puede delegar la decisión fuera del país. Administración, depósito y auditoría se quedan en Luxemburgo.",
    puntosClave: [
      "La gestión de cartera puede delegarse en un tercero, incluso en otra plaza, sin que la gestora deje de responder.",
      "El depositario es obligatorio, distinto de la gestora, vigila los flujos de caja y responde por la pérdida de lo custodiado.",
      "Administración central, depositario y auditor deben estar establecidos en Luxemburgo: eso es lo que el país retiene.",
    ],
    nodos: [
      {
        id: "inversionista",
        etiqueta: "Inversionistas",
        subtitulo: "de toda Europa y fuera",
        roles: ["inversionista"],
        columna: 0,
        fila: 0,
        tono: "neutro",
        explicacion: "Suscriben cuotas de un fondo domiciliado en Luxemburgo. El valor de la cuota se lo informa la administración central, no quien decide.",
      },
      {
        id: "manco",
        etiqueta: "Sociedad gestora",
        subtitulo: "ManCo / AIFM · responde ante CSSF",
        roles: ["gestor"],
        columna: 1,
        fila: 0,
        tono: "referencia",
        explicacion: "Autorizada y establecida en Luxemburgo. Decide o delega la gestión de cartera, y responde por el fondo aunque delegue.",
      },
      {
        id: "delegado",
        etiqueta: "Gestor delegado",
        subtitulo: "puede estar fuera del país",
        roles: ["gestor"],
        columna: 0,
        fila: 1,
        tono: "referencia",
        opcional: true,
        puedeEstarFuera: true,
        fueraDelPerimetro: true,
        explicacion: "El que elige las inversiones cuando hay delegación. Puede estar en otra plaza; la gestora luxemburguesa no puede vaciarse hasta quedar como buzón.",
      },
      {
        id: "admin-central",
        etiqueta: "Administración central",
        subtitulo: "contabilidad · valor cuota · registro",
        roles: ["administrador", "valorizador"],
        columna: 2,
        fila: 0,
        tono: "referencia",
        explicacion: "Firma establecida en Luxemburgo que lleva la contabilidad, calcula el valor de la cuota y mantiene el registro de inversionistas.",
      },
      {
        id: "depositario",
        etiqueta: "Depositario",
        subtitulo: "custodia · vigila flujos",
        roles: ["custodio"],
        columna: 2,
        fila: 1,
        tono: "referencia",
        explicacion: "Banco autorizado, distinto de la gestora, que custodia los activos, vigila los flujos de caja y controla el cumplimiento del reglamento del fondo.",
      },
      {
        id: "auditor",
        etiqueta: "Auditor autorizado",
        roles: ["auditor"],
        columna: 3,
        fila: 0,
        tono: "neutro",
        explicacion: "Réviseur d'entreprises agréé establecido en Luxemburgo. Revisa cada año las cuentas del fondo.",
      },
      {
        id: "regulador",
        etiqueta: "CSSF",
        subtitulo: "autoriza · supervisa",
        roles: ["regulador"],
        columna: 2,
        fila: 2,
        tono: "neutro",
        explicacion: "Autoriza a la gestora, al depositario y a la administración central; aprueba los fondos regulados.",
      },
    ],
    enlaces: [
      { de: "inversionista", a: "manco", tipo: "dinero", etiqueta: "suscribe" },
      { de: "admin-central", a: "inversionista", tipo: "informacion", etiqueta: "valor cuota" },
      { de: "manco", a: "delegado", tipo: "mandato", etiqueta: "delega" },
      { de: "manco", a: "admin-central", tipo: "mandato", etiqueta: "encarga" },
      { de: "manco", a: "depositario", tipo: "mandato", etiqueta: "entrega activos" },
      { de: "depositario", a: "manco", tipo: "control", etiqueta: "vigila" },
      { de: "auditor", a: "admin-central", tipo: "control", etiqueta: "audita" },
    ],
    evidencia: EV_LU_ARQUITECTURA,
  },
];

/* ───────────── Matriz regulatoria ───────────── */

export const obligaciones: ObligacionRegulatoria[] = [
  {
    id: "delegar-decision",
    tema: "Delegar la decisión de inversión",
    pregunta: "¿Puede otro decidir las inversiones sin que la administradora pague de su bolsillo y responda por todo?",
    explicacion: "Es la regla que permite que existan gestores especializados como negocio propio.",
    chile: {
      texto: "La administradora puede contratar la gestión de cartera, pero los gastos son siempre de su cargo y la responsabilidad de administrar es indelegable.",
      norma: "Ley N° 20.712, arts. 15 y 16",
      estado: "vigente",
      evidencia: EV_REGIMEN_VIGENTE,
    },
    chileProyecto: {
      texto: "Crea al gestor de inversiones: inscrito en la CMF, con encargo por escrito, remuneración de cargo del fondo y responsabilidad exclusiva por lo que decide.",
      norma: "Nuevo art. 16 (Mensaje N° 166-374, art. noveno N° 6)",
      estado: "proyecto",
      evidencia: EV_PROYECTO,
    },
    luxemburgo: {
      texto: "La gestora autorizada puede delegar la gestión de cartera en un tercero bajo condiciones, conservando su propia responsabilidad y sin quedar como entidad buzón.",
      norma: "Directiva 2011/61/UE (AIFMD), art. 20",
      estado: "vigente",
      evidencia: {
        ...EV_LU_ARQUITECTURA,
        noSostiene: "No sostiene quién paga al delegado ni el detalle de las condiciones de delegación.",
      },
    },
  },
  {
    id: "quien-responde",
    tema: "Quién responde por una mala decisión",
    pregunta: "Si la cartera se decide mal, ¿quién paga los platos rotos?",
    explicacion: "La asignación de responsabilidad es lo que alinea incentivos entre el que decide y el que administra.",
    chile: {
      texto: "La administradora responde incluso por decisiones de inversión que tomó otro.",
      norma: "Ley N° 20.712, art. 17",
      estado: "vigente",
      evidencia: EV_REGIMEN_VIGENTE,
    },
    chileProyecto: {
      texto: "Responsabilidad exclusiva del gestor por lo que decide; la administradora conserva la suya por sus propios deberes. Hacienda: «radicando la responsabilidad civil en el gestor».",
      norma: "Nuevo art. 17 (Mensaje N° 166-374, art. noveno N° 7) · Minuta de Hacienda, C.22",
      estado: "proyecto",
      evidencia: EV_PROYECTO,
    },
    luxemburgo: {
      texto: "La gestora autorizada sigue respondiendo frente al fondo y sus partícipes aunque haya delegado la gestión de cartera.",
      norma: "Directiva 2011/61/UE (AIFMD), art. 20",
      estado: "vigente",
      evidencia: {
        ...EV_LU_ARQUITECTURA,
        noSostiene: "La asignación difiere del proyecto chileno: la AIFMD conserva la responsabilidad en la gestora autorizada; el proyecto la radica en el gestor de inversiones.",
      },
    },
  },
  {
    id: "custodia",
    tema: "Custodia de los activos",
    pregunta: "¿Quién guarda los títulos, y es alguien distinto del que decide?",
    explicacion: "Separar la custodia es la forma más antigua de que alguien externo pueda decir que la plata está donde se dijo.",
    chile: {
      texto: "Los instrumentos susceptibles de custodia se depositan en una empresa de depósito de valores regulada; el regulador define por norma cuáles no lo son.",
      norma: "Ley N° 18.876 · art. 53 de la Ley N° 20.712",
      estado: "vigente",
      evidencia: EV_CUSTODIA_CL,
    },
    luxemburgo: {
      texto: "Depositario obligatorio, distinto de la gestora, con deberes de vigilancia sobre flujos de caja y cumplimiento, y responsabilidad objetiva por la pérdida de instrumentos custodiados.",
      norma: "Directiva 2011/61/UE (AIFMD), art. 21",
      estado: "vigente",
      evidencia: EV_LU_DEPOSITARIO,
    },
  },
  {
    id: "administracion-valorizacion",
    tema: "Contabilidad y valorización",
    pregunta: "¿Quién calcula cuánto vale la cuota, y con qué independencia?",
    explicacion: "Si el que decide también pone el precio a lo que decidió, un error o una pérdida puede tardar en verse.",
    chile: {
      texto: "Función interna de la administradora. La categoría de administradora de fondos independiente no existe en la ley: hay cero.",
      norma: "Ley N° 20.712 y normativa CMF aplicable",
      estado: "vigente",
      evidencia: EV_CERO_ADMIN,
    },
    chileProyecto: {
      texto: "Contabilización, valorización, auditoría interna, gestión de riesgos y control interno solo podrán encomendarse a entidades fiscalizadas por la CMF, con responsabilidad exclusiva de esas entidades.",
      norma: "Nuevo art. 15 (Mensaje N° 166-374, art. noveno N° 5)",
      estado: "proyecto",
      evidencia: EV_PROYECTO,
    },
    luxemburgo: {
      texto: "Administración central establecida y autorizada en Luxemburgo; más de 150 firmas independientes prestan el servicio.",
      norma: "Circular CSSF 22/811",
      estado: "vigente",
      evidencia: {
        nivel: "doble-fuente",
        fuentes: ["cssf-circular-22-811", "supervisores-comparados"],
        claimRegistro: "fn11 · Arquitectura comparada internacional + fn9 · Cero Fund Administrators",
      },
    },
  },
  {
    id: "donde-deben-estar",
    tema: "Qué debe quedarse en el país",
    pregunta: "¿Qué funciones tienen que hacerse localmente y cuáles pueden venir de afuera?",
    explicacion: "Es la regla que define qué parte de la industria se exporta y qué parte se queda como infraestructura local.",
    chile: {
      texto: "Todas las funciones viven en la administradora chilena. La ley no distingue funciones exportables de funciones que deban quedarse.",
      estado: "por-verificar",
      evidencia: pendiente("Falta abrir la Ley N° 20.712 para fijar el requisito de domicilio y giro de la administradora."),
    },
    luxemburgo: {
      texto: "Administración central, depositario y auditor deben estar establecidos y autorizados en Luxemburgo o actuar por sucursal; la gestión de cartera puede delegarse fuera.",
      norma: "Régimen luxemburgués de OPC (literatura de práctica)",
      estado: "vigente",
      evidencia: {
        ...EV_LU_ARQUITECTURA,
        noSostiene: "No sostiene cifras de empleo ni de exportación de servicios financieros.",
      },
    },
  },
  {
    id: "garantia-capital",
    tema: "Garantía o capital del que decide",
    pregunta: "¿Qué respaldo patrimonial debe tener el que decide?",
    explicacion: "La garantía es lo que hace creíble que el que decide responda con algo más que su reputación.",
    chile: {
      texto: "La administradora constituye garantía por los fondos que administra. No existe la figura del gestor separado, así que no hay garantía propia para él.",
      estado: "por-verificar",
      evidencia: pendiente("La norma exacta de la garantía de la administradora no fue abierta en el registro de evidencia."),
    },
    chileProyecto: {
      texto: "El gestor de inversiones constituye una garantía calculada sobre el patrimonio promedio diario de la cartera encomendada en el trimestre anterior; las exigencias aplican cualquiera sea el monto o el número de mandantes.",
      norma: "Nuevos arts. 98 y 99 (Mensaje N° 166-374, art. noveno N° 24 y 25)",
      estado: "proyecto",
      evidencia: EV_PROYECTO,
    },
    luxemburgo: {
      texto: "Requisitos de capital mínimo y fondos propios de la gestora fijados por el régimen europeo.",
      estado: "por-verificar",
      evidencia: pendiente("Las cifras de capital mínimo no se incorporan hasta abrir la Directiva y la ley luxemburguesa de 2013."),
    },
  },
  {
    id: "vigencia",
    tema: "Estado de la regla",
    pregunta: "¿Esto rige hoy?",
    explicacion: "Distinguir lo vigente de lo propuesto es la primera obligación de una comparación honesta.",
    chile: {
      texto: "Régimen vigente de la Ley N° 20.712 desde 2014.",
      norma: "Ley N° 20.712",
      estado: "vigente",
      evidencia: EV_REGIMEN_VIGENTE,
    },
    chileProyecto: {
      texto: "Proyecto en tramitación desde el 9 de septiembre de 2026. Aprobado, rige cuando la CMF dicte sus normas, dentro de los 6 meses siguientes a la publicación de la ley.",
      norma: "Mensaje N° 166-374, artículo décimo cuarto transitorio (p. 221)",
      estado: "proyecto",
      evidencia: EV_PROYECTO,
    },
    luxemburgo: {
      texto: "AIFMD transpuesta en julio de 2013; régimen vigente.",
      norma: "Ley de 12 de julio de 2013 (transposición de la Directiva 2011/61/UE)",
      estado: "vigente",
      evidencia: EV_LU_DEPOSITARIO,
    },
  },
];

/* ───────────── Indicadores ───────────── */

export const indicadores: Indicador[] = [
  {
    id: "gestores-autorizados",
    etiqueta: "Gestores de fondos autorizados",
    explicacion: "Cuántas sociedades tienen licencia del regulador para administrar fondos.",
    comparable: true,
    notaComparabilidad: "Perímetros distintos: administradoras generales de fondos vigentes en Chile contra gestores autorizados por la CSSF (gestoras UCITS y gestores de FIA).",
    porJurisdiccion: {
      CL: {
        valor: 56,
        unidad: "entidades",
        evidencia: {
          nivel: "documento-fuente",
          fuentes: ["cmf-registro-agf-2026-09-12", "buscafondos-ranking-fm"],
          claimRegistro: "Registro de AGF vigentes de la CMF (index.html, figura y nota 12)",
          fechaDato: "12-sep-2026",
          nota: "56 filas con estado Vigente en la exportación del registro de la CMF. Corrige un «~30» publicado durante unas horas.",
        },
      },
      LU: {
        valor: 292,
        unidad: "entidades",
        evidencia: {
          nivel: "de-oido",
          fuentes: ["cssf-newsletter-299"],
          claimRegistro: "La brecha: la figura de dominios comparados (index.html, nota 12)",
          fechaDato: "30-nov-2025",
          noSostiene: "No sostiene el número como dato exacto ni que el perímetro sea equivalente al de las AGF chilenas.",
        },
      },
    },
  },
  {
    id: "administradoras-independientes",
    etiqueta: "Administradoras de fondos independientes",
    explicacion: "Firmas cuyo único negocio es llevar la contabilidad, la valorización y el registro de fondos de terceros.",
    comparable: true,
    notaComparabilidad: "El cero chileno es regulatorio: la categoría no existe en la Ley N° 20.712.",
    porJurisdiccion: {
      CL: { valor: 0, unidad: "entidades", evidencia: EV_CERO_ADMIN },
      LU: { valor: 150, unidad: "entidades", sufijo: "+", evidencia: EV_CERO_ADMIN },
    },
  },
  {
    id: "aum-sobre-pib",
    etiqueta: "Activos en fondos contra el PIB",
    explicacion: "Cuántas veces el tamaño de la economía representan los activos administrados en fondos del país.",
    comparable: true,
    notaComparabilidad: "Órdenes de magnitud: los perímetros de «activos en fondos» de ambos países no se verificaron equivalentes.",
    porJurisdiccion: {
      CL: {
        valor: 0.5,
        unidad: "veces-PIB",
        aproximado: true,
        evidencia: {
          nivel: "de-oido",
          fuentes: ["prensa-fm-mayo-2026", "bcch-cuentas-nacionales-2025"],
          claimRegistro: "La brecha: la figura de dominios comparados (index.html, nota 12)",
          noSostiene: "Aritmética del autor sobre cifras de oído; orden de magnitud, no medición.",
        },
      },
      LU: {
        valor: 75,
        unidad: "veces-PIB",
        aproximado: true,
        evidencia: {
          nivel: "de-oido",
          fuentes: ["cssf-estadisticas-aum", "estadisticas-lu-poblacion-pib"],
          claimRegistro: "La brecha: la figura de dominios comparados (index.html, nota 12)",
          noSostiene: "Aritmética del autor sobre cifras de oído, con dispersión real en el PIB luxemburgués.",
        },
      },
    },
  },
  {
    id: "aum-total",
    etiqueta: "Activos bajo administración",
    explicacion: "Cuánto dinero administran, en total, los vehículos de inversión de cada país.",
    comparable: false,
    notaComparabilidad: "Monedas y perímetros distintos: ahorro institucional total en Chile (pensiones, seguros, fondos mutuos, fondos de inversión) contra activos netos de los organismos de inversión colectiva en Luxemburgo. Se muestran por separado.",
    porJurisdiccion: {
      CL: { valor: 400_000, unidad: "USD-M", aproximado: true, evidencia: EV_FN8 },
      LU: {
        valor: 5_900_000,
        unidad: "EUR-M",
        evidencia: {
          nivel: "doble-fuente",
          fuentes: ["cssf-estadisticas-aum", "efama-fact-book"],
          claimRegistro: "fn11 · Arquitectura comparada internacional",
          nota: "EUR 5,9 billones (escala larga: millones de millones).",
        },
      },
    },
  },
  {
    id: "poblacion",
    etiqueta: "Población",
    explicacion: "Para dimensionar: cuánta gente vive en cada país.",
    comparable: true,
    porJurisdiccion: {
      CL: jurisdicciones.CL.poblacion,
      LU: jurisdicciones.LU.poblacion,
    },
  },
  {
    id: "pib",
    etiqueta: "PIB nominal",
    explicacion: "El tamaño de la economía en un año.",
    comparable: true,
    porJurisdiccion: {
      CL: jurisdicciones.CL.pib,
      LU: jurisdicciones.LU.pib,
    },
  },
];

/* ───────────── Glosario ───────────── */

export const glosario: Termino[] = [
  { id: "aum", termino: "AUM (activos bajo administración)", definicion: "El total de dinero que un gestor o una industria administra por cuenta de otros. Se mide a valor de mercado en una fecha." },
  { id: "ucits", termino: "UCITS", definicion: "Fondos europeos armonizados para el público general, con reglas comunes de liquidez y diversificación y pasaporte para venderse en toda la Unión Europea. El pariente chileno más cercano es el fondo mutuo." },
  { id: "fia", termino: "FIA / AIF (fondo de inversión alternativo)", definicion: "Todo fondo europeo que no es UCITS: capital privado, deuda privada, inmobiliario, hedge funds. Su gestor se regula por la directiva AIFMD." },
  { id: "manco", termino: "ManCo / AIFM (sociedad gestora)", definicion: "La entidad autorizada que responde por un fondo luxemburgués ante la CSSF. Puede decidir las inversiones o delegar esa decisión en un tercero." },
  { id: "agf", termino: "AGF (Administradora General de Fondos)", definicion: "La sociedad chilena de giro exclusivo autorizada por la CMF para administrar fondos mutuos, fondos de inversión y carteras." },
  { id: "depositario", termino: "Depositario", definicion: "En Europa, la entidad distinta de la gestora que custodia los activos del fondo y además vigila sus flujos de caja y el cumplimiento de su reglamento." },
  { id: "valor-cuota", termino: "Valor cuota / NAV", definicion: "Cuánto vale cada participación del fondo: los activos menos las deudas, dividido por el número de cuotas. Calcularlo bien es la función de valorización." },
  { id: "administracion-central", termino: "Administración central (fund administrator)", definicion: "Quien lleva la contabilidad del fondo, calcula el valor cuota y mantiene el registro de inversionistas. En Luxemburgo es una industria propia; en Chile la función vive dentro de la administradora." },
  { id: "raif", termino: "RAIF", definicion: "Fondo alternativo luxemburgués que no pasa por autorización de la CSSF; la supervisión recae en su gestor autorizado. Se parece a un fondo de inversión privado chileno." },
  { id: "billon", termino: "Billón (escala larga)", definicion: "En español, un billón es un millón de millones. Los EUR 5,9 billones de Luxemburgo son 5.900.000 millones de euros." },
  { id: "entidad-buzon", termino: "Entidad buzón", definicion: "Una gestora que delega tanto que ya no hace nada por sí misma. La regla europea prohíbe llegar a ese punto." },
  { id: "de-oido", termino: "De oído", definicion: "Cómo esta plataforma marca un dato cuya fuente se cita pero no se abrió: se muestra como orden de magnitud y se dice qué no sostiene." },
];

/* ───────────── Raíz ───────────── */

export const marketData: MarketData = {
  version: "0.1.0",
  fecha: "2026-09-12",
  jurisdicciones,
  fuentes,
  subMercados,
  roles,
  entidades,
  escenarios,
  obligaciones,
  indicadores,
  glosario,
};

export default marketData;
