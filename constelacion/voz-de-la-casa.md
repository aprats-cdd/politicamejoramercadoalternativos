# La voz de la casa — spec eval-able del registro editorial

> Spec canónica del **estilo y tono** de las publicaciones de Andrés Prats.
> **Dueño: `AG-SITIO-ESCRITOR`** (quien escribe es dueño del registro; el DD
> adversarial disolvió el agente "VOZ" por no tener mandato irreducible — cada
> check ya tenía dueño). Toda pieza nueva (opinión, hipótesis, ensayo) matchea
> este registro o no se publica. El reparto de quién gatea qué:
>   - **determinista** (presencia de tesis/método/declaración, jerga, vaguedad,
>     brevedad) → `eval_editorial.py`, que corre `AG-SITIO-VERIFICADOR`;
>   - **muletilla "no es X — es Y"** → `S04` de `eval_sitio.py` (dueño único, no
>     se duplica acá);
>   - **subjetivo** (¿suena a la casa?, ¿demasiado aviso?, ¿demasiado filoso?) →
>     `AG-SITIO-LECTORES` + `AG-SITIO-ADVERSARIO` + el accept del CEO.
> La afina el `AG-EDITORIAL-CALIBRADOR` por supersedence (nunca edición
> silenciosa): PROPONE el cambio; `AG-SITIO-VERIFICADOR` lo commitea al harness.

**Versión 2 · 12-sep-2026.** Cambio de registro ordenado por el CEO en sesión:

> «Cambia la doctrina, esto es moderno, para diputados modernos, cercanos,
> abierto. Un mercado de capitales abierto, transparente y desacoplado y con
> controles… es una mirada tipo rockera y kubernete.»

La v1 (3-jul-2026) escribía para el banquero de un multi-family office y su
referencia declarada eran los ensayos de Sequoia: *autoridad por reposo*. Esa
vara produjo una pieza sólida y cerrada sobre sí misma. El encargo de hoy es
otro: la idea tiene que viajar, y viaja entre gente que construye cosas.

**Lo que NO cambia** es todo lo que es honestidad y no estética: declaración de
interés de frente, vigente y propuesto siempre separados, la evidencia antes que
la teoría, un número o nada, los límites declarados. Un registro más vivo no
compra ni una licencia sobre la verdad. **Lo que cambia** es para quién se
escribe y cómo suena.

**Enmienda del 12-sep-2026 a la regla 3**, ordenada por el CEO en la misma
jornada: *«nombra a los que quieras, cita la fuente eso sí, sé explícito»*. El
registro histórico de un debate de política pública se nombra, siempre con
fuente y fecha. Lo que sigue fuera es nombrar personas en relación con fraudes
o sanciones, y nombrar al interlocutor del debate vigente. El detalle, en la
regla 3.

## Cliente primario (el norte de toda decisión de voz)

**Quien legisla hoy y su equipo, en la versión moderna del oficio.** Gente de
treinta y cuarenta que entiende que un sistema bien hecho se separa en partes
con responsabilidades claras, porque así funciona todo lo demás en su vida: el
software que usa, los servicios que contrata, las plataformas donde trabaja. No
es del mercado de capitales y no tiene por qué serlo. Es curiosa, tiene poco
tiempo y mucha desconfianza del lenguaje de la industria financiera.

A su lado, el mismo texto tiene que servirle al asesor legislativo que prepara
la sesión, al periodista que cubre la comisión, al profesor que lo pasa en
clase y al abogado que verifica la cita. Ninguno de ellos necesita que se le
hable distinto: necesitan que se les hable claro.

Escribir para esta persona impone cuatro cosas, en este orden: **claro ·
concreto · abierto · con carácter.** La prueba de fuego de cada pieza: *¿un
asesor legislativo de treinta y cinco años la reenvía a su jefa un martes a las
nueve de la noche, sin sentirse usado ni tener que explicar por qué la manda?*

## La tesis manda sobre la forma

La pieza sostiene que un mercado de capitales debe ser **abierto, transparente,
desacoplado y con controles**. Ese vocabulario es el de la arquitectura de
sistemas, y no por casualidad: separar al que decide del que administra es
exactamente desacoplar dos servicios y ponerle a cada uno su responsabilidad y
su control. La forma de la página tiene que decir lo mismo que el texto.

De ahí la referencia declarada del registro v2: **la documentación de
infraestructura moderna** (Kubernetes, Stripe, Linear, Supabase y la familia
open source que explica arquitecturas a quien no las conoce), con la actitud de
no pedir permiso para tener carácter. No se copia su marca ni su copy; se
comparte el método: **el sistema se dibuja, las responsabilidades se nombran,
las fronteras se ven, y el conjunto tiene energía.**

## Las doce reglas del registro (cada una es un check o un juicio)

1. **Primera persona del autor, directa.** Escribe Andrés Prats a título
   personal: "sostengo", "mi lectura es", "esto lo firmo". Nunca voz corporativa
   ni "nosotros" institucional. El sujeto de la oración es la arquitectura o la
   regla, no el autor luciéndose. *(check: primera persona presente; juicio: no
   protagonismo.)*

2. **Autoridad por claridad, no por volumen ni por reposo.** La fuerza viene de
   que el lector ENTIENDA el mecanismo, no de que el texto suene grave. Frases
   declarativas y cortas. Se permite el carácter: una frase puede tener filo,
   ritmo y opinión. Siguen prohibidos el adjetivo de venta ("imperdible",
   "revolucionario"), el signo de exclamación y toda promesa que la evidencia no
   sostenga. *(v1 decía "autoridad por sobriedad"; la sobriedad era un medio, no
   el fin.)*

3. **Arquitecturas primero; actores solo con la fuente al lado.** Regla
   modificada por el CEO el 12-sep-2026 en sesión: *«nombra a los que quieras,
   cita la fuente eso sí, sé explícito»*. Lo que se compara sigue siendo el
   diseño de un vehículo o de una norma, no una persona. Pero el registro
   histórico se nombra:

   - **Se puede nombrar** a quien tomó una posición **pública y atribuible** en
     un debate de política pública: parlamentarios, autoridades, gremios,
     ejecutivos que firmaron una columna o dieron una entrevista. **Cada nombre
     va con su fuente y su fecha**, y con la posición textual cuando exista. Sin
     fuente citable el nombre no entra: es preferible «la industria bancaria
     argumentó» a un nombre que no se pueda respaldar.
   - **Sigue fuera** nombrar personas naturales en relación con fraudes,
     sanciones o responsabilidad penal, salvo resolución pública firme y
     tratándolas exactamente como la resolución las trata. Ahí el límite no es
     de estilo sino legal, en un sitio publicado bajo el nombre propio del
     autor. Para esos casos se nombra la entidad sancionada y la resolución.
   - **Sigue fuera el interlocutor del debate vigente.** Quien hoy objeta este
     proyecto se plantea por su argumento, no por su nombre: nombrarlo convierte
     la página en ajuste de cuentas y le regala al lector la única razón para
     descartarla. `D05` de `eval_steelman.py` protege exactamente eso y se
     mantiene sin cambios sobre `objeciones.html`.

   *(checks: tripwires del aludido; `D05` sobre la página que responde la
   objeción. El registro histórico con fuente queda fuera del alcance de D05
   porque vive en la raíz, no en la pieza de objeciones.)*

4. **Vigente vs propuesto, siempre separados.** Lo que la norma dice HOY nunca
   se confunde con lo que el autor PROPONE, ni en el texto ni en el color.
   *(check: `eval_sitio` + juicio del jurista.)*

5. **El mecanismo antes que la conclusión.** Primero cómo funciona, después qué
   opino. Un lector que entendió el mecanismo puede estar en desacuerdo conmigo
   y aun así usar la página; uno que solo leyó la conclusión, no. La primera
   evidencia concreta —una cifra con fuente, un artículo de ley, un caso—
   aparece antes de cualquier juicio.

6. **Prohibida la muletilla "no es X — es Y"** y sus variantes correctivas,
   incluida la forma de dos oraciones ("No llegó por A. Llegó por B"). El patrón
   negación→afirmación se lee como tic de vendedor. Afirmar directo lo que ES.
   *(check determinista: `S04` de `eval_sitio` + `E10` de `eval_editorial`.)*

7. **Declaración de interés, de frente y antes de argumentar.** Toda pieza donde
   el autor tiene un incentivo declara ese incentivo, su beneficio y su costo,
   sin eufemismo, antes de que el lector pueda sospecharlo solo. *(check:
   `id="declaracion"` presente y sobre el fold.)*

8. **Los límites, escritos, y el nivel de cada fuente.** Toda pieza declara qué
   no sabe: qué cifra es orden de magnitud, qué claim es juicio y no dato, qué
   pregunta queda abierta. La sección de método cumple ese rol. Decir "esto no lo
   sé" es parte del argumento, no una debilidad. *(check: sección de método
   presente.)*

   **Se puede citar de oído** —apoyarse en una fuente que no se abrió— por orden
   del CEO del 12-sep-2026: *«cita de oído y sé explícito en la fuente»*. La
   condición es que la declaración sea completa, y eso exige MÁS que la doble
   fuente, no menos. Una cita de oído dice cuatro cosas:

   1. **qué se afirma**;
   2. **de dónde viene**, lo más identificable posible: ley y artículo, número de
      resolución, título e institución del informe, medio y fecha;
   3. **que no se leyó el original**, sin eufemismo;
   4. **qué NO sostiene esa cita** — lo más importante: una fuente secundaria
      puede bastar para describir una arquitectura y no para afirmar una cifra.

   En el registro de evidencia esto es el estado `de_oido`, con los campos
   `fuente_citada`, `via` y `no_sostiene` obligatorios; `S07` de `eval_sitio.py`
   lo hace cumplir y rechaza la declaración incompleta. Los tres estados válidos
   de un claim son entonces: **doble fuente**, **ilustrativo**, o **de oído
   declarado**.

   La línea dura que queda: **una cifra citada de oído no se publica como dato.**
   Es lo primero que un periodista o un abogado verifica, y si falla arrastra
   todo lo demás. Una arquitectura descrita de oído es defendible; un número, no.
   Este patrón no es nuevo en el corpus: las notas sobre Luxemburgo y Brasil ya
   declaran que son fuentes secundarias no verificadas contra el texto normativo,
   y se citan por la arquitectura que describen. La v2 lo canoniza y le pone
   estándar.

9. **Orientación desde el primer segundo.** Arriba del fold, la pieza dice de
   qué va, en qué estado está la cosa y cuánto tarda leerla. El lector decide en
   segundos si sigue, y merece poder decidirlo. *(check: tira de estado
   presente.)*

10. **Breve, y con una idea por pantalla.** Cada pieza declara un tope y lo
    respeta; se corta todo párrafo que no mueva el argumento (test "¿y qué?" por
    oración). Regla nueva de la v2: en teléfono, ninguna figura ni bloque
    explicativo puede pasarse de una pantalla. *(check: conteo bajo el techo por
    tipo; medición de alto en render.)*

11. **Sin jerga de la industria; con el vocabulario del lector.** Prohibido el
    anglicismo gratuito y la jerga financiera que el lector no usa. Los términos
    de arquitectura de sistemas —desacoplar, componente, responsabilidad,
    control, interfaz— **sí están permitidos y son bienvenidos** cuando nombran
    de verdad el mecanismo: son el puente entre lo que el lector ya entiende y
    lo que la ley dice. Todo término técnico, venga del derecho o de los
    sistemas, se define en una frase la primera vez que aparece. Sigue prohibida
    la jerga de la cocina interna (harness, pipeline, constelación de agentes).
    *(check determinista: denylist; juicio del lector.)*

12. **Sin vaguedades.** Un número o nada. Prohibidas las muletillas de relleno
    ("podría", "en cierto sentido", "de alguna manera", "cabe señalar"). Toda
    afirmación es concreta y verificable, o es un juicio marcado como juicio.
    *(check determinista: denylist; juicio del adversario.)*

## El registro visual (nuevo en v2 — antes vivía solo en el brief de diseño)

La forma es parte de la voz, así que se declara acá y se gatea junto con ella.

- **El sistema se dibuja.** Cuando la pieza explica un mecanismo con partes,
  esas partes se ven: componentes, quién responde por cada uno, y la frontera
  entre ellos. Un diagrama que enseña gana a tres párrafos que describen.
- **Color con función, no de adorno.** Cada color significa algo estable a lo
  largo del sitio: lo vigente, lo propuesto, lo que el autor opina, lo que está
  abierto. Si un color no significa nada, sobra.
- **Carácter sí, ruido no.** Contraste fuerte, escala tipográfica decidida,
  acentos vivos. Nada que parezca aviso, ni animación que no ayude a entender.
- **Cero dependencias externas.** Sin tipografías remotas, sin scripts de
  terceros, sin imágenes que no sean del repo. La página carga sola. *(check:
  `X02` de `eval_experiencia.py`.)* La modernidad se consigue con escala,
  color, ritmo y aire, no con una webfont.
- **El teléfono manda.** Se diseña primero para el pulgar. Lo que no entra en
  una pantalla de teléfono se rediseña, no se encoge.

## Objeto por tipo de publicación

- **Ensayo** — tesis controladora única (una frase que sobrevive el elevator
  test) + spine que se gana cada sección + un accionable. Kicker "Ensayo".
- **Opinión** — un juicio del autor, declarado COMO juicio (no disfrazado de
  dato). La opinión no necesita doble fuente para el juicio, pero cada HECHO que
  la sostiene sí. La frontera juicio/hecho es explícita en el cuerpo. Kicker
  "Opinión".
- **Hipótesis** — creencia FALSABLE del autor: aserción + horizonte temporal +
  condición de falsación observable. Se registra en `hipotesis-publicadas.yaml`
  (estructurado) y la pieza la ancla con `data-hip="HIP-…"`. **Publicar una
  hipótesis bajo el nombre del CEO es checkpoint del CEO — nunca automático**
  (el loop detecta y propone; la consolidación decide). El ledger de outcomes
  es **público y append-only**: las hipótesis falsadas quedan visibles con su
  resultado. El track-record honesto —incluidas las que la realidad tumbó— ES
  el activo que sostiene la credibilidad del autor; esconder una falsada sería
  la promesa engañosa que el adversario tiene el mandato de vetar. Kicker
  "Hipótesis".

## Convención juicio/hecho (concilia la opinión filosa con la citabilidad)

Una opinión es un juicio del autor; no necesita doble fuente para el JUICIO,
pero sí para cada HECHO que lo sostiene. La convención que lo hace auditable:
- **Todo juicio se marca en primera persona** ("Sostengo que…", "Mi lectura es
  que…", "estimación del autor"). Marcado = etiquetado como juicio, exento del
  gate de doble-fuente.
- **Toda cifra NO marcada como juicio cae en `S07`** (registro de evidencia): o
  tiene doble fuente / marca ilustrativa, o no se publica.
Así una opinión puede ser filosa sin castrarse, y el lector siempre distingue
lo que el autor CREE de lo que el autor PRUEBA. El gate determinista no juzga
el tono (eso false-positivearía la agudeza legítima); lo juzgan los humanos.

## Exemplars del corpus (memoria de estilo)

- `index.html` — el ensayo vigente: las tres preguntas como figura, la
  declaración de interés antes de argumentar, la lectura del autor marcada.
- `objeciones.html` — la objeción rival planteada completa antes de responderla,
  con veredicto explícito por frente y los puntos que no se responden.

El corpus de julio (memorándum, guía de DD, piezas de renta fija) salió del
sitio en el rediseño del 12-sep-2026 y vive en el historial de git. Se conserva
como memoria de estilo de la v1, no como vara de la v2.

## Cómo evoluciona esta spec (loop de mejora)

El `AG-EDITORIAL-CALIBRADOR` la re-versiona por supersedence cuando:
- una objeción real (lector/regulador/prensa) que el adversario NO anticipó
  revela una regla de voz faltante → nueva regla numerada;
- una deriva de voz se repite en dos piezas → se endurece el check;
- una hipótesis publicada se confirma/falsa → se anota la calibración del juicio
  del autor (qué tan bien calibrada estaba la creencia);
- **el CEO cambia el cliente primario o el registro** → versión nueva completa,
  con el encargo citado y la separación explícita entre lo que cambia (estética,
  audiencia) y lo que no (honestidad). Así nació esta v2.
