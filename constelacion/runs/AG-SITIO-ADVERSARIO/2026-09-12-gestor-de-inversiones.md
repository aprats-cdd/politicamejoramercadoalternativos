# AG-SITIO-ADVERSARIO · gestor-de-inversiones.html

**Fecha:** 12 de septiembre de 2026
**Pieza:** `gestor-de-inversiones.html`
**Fuente primaria del ataque:** transcripción literal del Mensaje N° 166-374
(9-sep-2026) y de la minuta del Ministerio de Hacienda, extraída del memo
informativo al Directorio "Separación funcional de roles" v1.0 que aportó el CEO.

**VEREDICTO: NO-PASA → corregido → PASA-CON-FIXES**
15 hallazgos (5 bloqueantes, 6 corregibles, 4 menores). Los 15 se aceptaron;
13 con el fix propuesto por el adversario, 2 con un fix más severo.

## Aislamiento (LEY-1)

El adversario corrió como agente independiente, sin el contexto de la sesión
que escribió la pieza: recibió solo la ruta del HTML, la ruta de la fuente
primaria y su encargo (tres lentes: regulatorio, periodista hostil, aludido).
No es auto-validación del autor.

## Bloqueantes

**B1 · El titular afirmaba un efecto legal que la fuente no sostiene.**
"El artículo que abre Chile a los gestores de activos globales" + "una firma
extranjera puede manejar carteras en Chile sin montar su propia administradora".
El proyecto no contiene las palabras extranjero, global ni internacional en
ninguna línea: exige que el gestor esté inscrito en el Registro de
Administradoras de Carteras (art. 98) y no dice qué se le pide a una entidad
extranjera para inscribirse.
→ *Fix aplicado:* título nuevo ("Qué crea el proyecto de ley, y por qué creo
que traerá gestores globales"), propagado a `<title>`, `meta description`,
`og:title`, `og:description` y JSON-LD. La tesis del CEO se conserva entera,
pero pasa al bloque `.propuesta-autor`, rotulado "esto no está en el proyecto",
y la bajada lo dice antes del fold.

**B2 · El artículo 169 se presentaba solo como endurecimiento.**
La fuente lo describe también como acotamiento: ámbito "acotado expresamente a
entidades relacionadas", eliminación de la referencia al crédito, eliminación
de la prohibición de participar en directorios, y excepción de recursos
compartidos extendida a los gestores.
→ *Fix aplicado:* sale de la lista de resguardos y pasa a párrafo propio, con
las tres frases del Mensaje citadas y el movimiento declarado en dos direcciones.

**B3 · Párrafo con requisitos regulatorios inventados.**
"Montar su propia administradora acá: sociedad, capital, gobierno corporativo"
no está en la fuente, y el diagnóstico del Mensaje es de costo y responsabilidad,
no de imposibilidad de contratar.
→ *Fix aplicado (más severo que el propuesto):* el párrafo se eliminó del cuerpo
factual. El argumento sobre el peso del vehículo sobrevive dentro del bloque del
autor, sin enumerar requisitos, y con la declaración explícita de que qué debe
hacer una entidad extranjera para inscribirse no está en el texto citado.

**B4 · Se le atribuyó al Gobierno una causa que el Gobierno no afirmó.**
"El propio Gobierno dice que por eso ese mercado no existe" — el antecedente de
"por eso" era el claim del autor (tener que montar una administradora), no el
del Mensaje (el efecto combinado de los artículos 15, 16 y 17).
→ *Fix aplicado:* atribución corregida a los tres artículos, con la cita literal
inmediatamente después.

**B5 · La declaración de interés omitía el beneficio directo del autor.**
Declaraba el perjuicio (entran competidores mayores) y callaba el beneficio que
la propia página lista como condición 4: bajo el nuevo artículo 16 una firma
como la del autor puede ser designada gestor de inversiones y cobrar con cargo
al fondo, algo que el artículo 16 vigente prohíbe. Además llegaba al final.
→ *Fix aplicado:* la declaración sube a inmediatamente después del encabezado,
antes de todo argumento, y declara primero el beneficio directo con su nota al pie.

## Corregibles

- **C6 · Cifras que contradecían el método declarado.** La página publicaba
  83% / 70% / 45% / 35% de composición del financiamiento empresarial mientras
  declaraba dos secciones más abajo "no tengo fuente pública", y la nota daba
  precisión de punto porcentual y acto seguido la llamaba orden de magnitud.
  → *Fix aplicado (más severo que el propuesto):* el dato se eliminó completo,
  chileno e internacional. No pude verificar página ni tabla del IEF de la CMF
  en esta sesión, y el argumento de competencia se sostiene sin él. El método
  ahora dice "no publico ninguna cifra de mercado", y es verdad.
- **C7 · "Lo que el proyecto no hace" listaba cinco cosas que el proyecto sí hace.**
  → Sección renombrada "Los resguardos que el proyecto impone" + sección nueva
  con los cuatro límites reales (no regula acceso de extranjeras, no fija el
  monto de la garantía en la ley, no obliga a externalizar, no asegura que
  aparezca gestor alguno).
- **C8 · La regla de vigencia se extendía al artículo 169, que no cubre.**
  El artículo décimo cuarto transitorio enumera modificaciones del artículo
  noveno a la Ley 20.712; el 169 entra por el artículo décimo quinto N° 6 sobre
  la Ley 18.045. → Corregido en el bloque `.dato`, con la página al pie.
- **C9 · Claim sobre fondos de pensiones.** El proyecto no menciona AFP ni el
  DL 3.500. → La frase se eliminó.
- **C10 · "Estrategias que hoy no sabe correr"** juzgaba la competencia de las
  AGF chilenas (compara actores, no arquitecturas). → Se adopta la formulación
  del Mensaje: acceder a capacidades especializadas sin desarrollarlas
  internamente.
- **C11 · El comparado bancario señalaba a un gremio chileno identificable**
  con el remedio implícito siendo el negocio del autor. → Resuelto por C6.

## Menores

- **M12** · Subdeclaraba lo que la administradora conserva → condición 3
  reescrita con el deber de verificación previa y la responsabilidad por lo no
  comprendido en el encargo.
- **M13** · "al día hábil siguiente" → "a más tardar el día hábil siguiente";
  se agrega la hipótesis "o si no pudiere aplicarse".
- **M14** · Cuatro deslizamientos: "registro público" → "Registro de
  Administradoras de Carteras"; "inviable" fuera; la indicación de persona
  relacionada va en el reglamento interno, no en el contenido mínimo del
  contrato; "mercados desarrollados" ya solo aparece dentro de la cita del
  Mensaje.
- **M15** · "con la página al pie" no aplicaba a la minuta de Hacienda, que se
  cita por sección y numeral → método corregido.

## Verificación posterior al fix

- Las dos citas largas y las tres cortas calzan **literal** contra la fuente
  (comprobado por comparación de cadenas, no a ojo).
- Los seis evals del CI en verde: `eval_constelacion`, `eval_sitio`,
  `eval_editorial`, `eval_experiencia`, `eval_citabilidad`, `eval_lector`.

## Deuda declarada

El ataque se verificó contra la **transcripción** del Mensaje aportada por el
CEO, no contra el PDF oficial de la Cámara de Diputados. Las páginas citadas
(51-55, 174-186, 200-201, 221) vienen de esa transcripción. Antes de publicar a
`main`, corresponde contrastar al menos las dos citas largas contra el documento
oficial.

---

## Adenda · rediseño a landing (12-sep-2026, misma fecha, posterior al merge)

El CEO pidió auditar el diseño: *"Necesito que sea un landing poderoso. Más
entretenido y didáctico."* La pieza pasó de `gestor-de-inversiones.html` a la
raíz del sitio; `gestor-de-inversiones.html` queda como redirección para no
romper el link ya publicado.

**Hallazgos de la auditoría de diseño** (hechos mirando la página renderizada
en Chromium a 1280px y a 390px, no leyendo el HTML):

1. Era un documento, no un landing: 7,6 pantallas en escritorio y 10,2 en
   móvil de texto gris uniforme, con siete `h2` del mismo peso.
2. La primera pantalla no vendía nada: título, bajada, metadata y una caja
   gris de declaración de interés antes de la primera idea.
3. Cero explicación visual sobre un tema que ES un diagrama (quién decide,
   quién administra, quién responde, antes y después).
4. El único dato duro ("6 meses") estaba en la pantalla 6.
5. En escritorio se usaba el 47% del ancho disponible.
6. Las cuatro condiciones y los cuatro resguardos eran el mismo objeto visual.

**Lo que se hizo:** hero con jerarquía fuerte, tira de estado con los tres
hechos duros sobre el fold, comparador antes/después a ancho completo como
carga didáctica central, los tres artículos como fichas numeradas con su
efecto en lenguaje llano, la cita del Mensaje en grande con el tramo clave
destacado, condiciones y límites en rejillas distintas, y un escenario
concreto de cómo se vería en la práctica.

**Lo que NO se tocó, a propósito:** todos los fixes del adversario siguen en
pie. La declaración de interés sigue antes de todo argumento y sigue
declarando el beneficio directo primero (ahora mejor diseñada, no más suave).
La tesis de los gestores globales sigue en bloque marcado como lectura del
autor. El artículo 169 sigue en dos direcciones. No entró ninguna cifra de
mercado.

**Verificación posterior al rediseño:** las cuatro citas entre comillas y el
tramo destacado de la cita larga calzan literal contra la fuente (comparación
de cadenas, con las marcas de destacado removidas antes de comparar). Las
siete notas al pie calzan ref por ref. Los siete evals en verde. Sin scroll
horizontal a 390px, 768px ni 1280px. Modo oscuro revisado componente por
componente.

**Deuda que sigue abierta:** la del bloque anterior — las citas se
verificaron contra la transcripción del Mensaje aportada por el CEO, no
contra el PDF oficial de la Cámara.
