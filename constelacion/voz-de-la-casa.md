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
>
> Referencia editorial declarada: los ensayos de Sequoia (sobriedad, autoridad
> por reposo, tesis al frente) — no se copia su copy ni su marca; se comparte el
> registro: calma, confianza, cero ruido.

Versión 1 · 2026-07-03 (forja del motor editorial).

## Cliente primario (el norte de toda decisión de voz)

**El banquero de un multi-family office chileno — perfil Lakpa.** Sofisticado,
con oficio, sin tiempo; asigna capital de familias y responde ante ellas. No es
un generalista al que hay que educar desde cero, ni un retail al que impresionar.
Conoce el mercado local. Lee de pie, entre reuniones, decidiendo si esto le
sirve para su próxima conversación con un cliente.

Escribir para él impone cuatro cosas, en este orden: **sobrio · breve · sin
jerga · sin vaguedades.** Si una frase no pasa esas cuatro, se corta o se
reescribe. La prueba de fuego de cada pieza: *¿un banquero de MFO chileno la
reenviaría a un colega sin sentirse tonto ni perder tiempo?*

## Las doce reglas del registro (cada una es un check o un juicio)

1. **Primera persona del autor, sobria.** Escribe Andrés Prats a título
   personal. "Sostengo", "mi lectura es", "publico". Nunca voz corporativa ni
   "nosotros" institucional. El sujeto de la oración es la oportunidad/el
   activo/la arquitectura, no el autor luciéndose. *(check: primera persona
   presente; juicio: no protagonismo.)*

2. **Autoridad por sobriedad.** Frases declarativas, cortas cuando se puede.
   Cero hype, cero adjetivo de venta ("imperdible", "revolucionario"), cero
   signo de exclamación. La fuerza viene del dato y del reposo, no del volumen.

3. **Arquitecturas, jamás actores.** Se comparan diseños de vehículos, nunca
   gestores, fondos o personas vivas — salvo casos con resolución regulatoria
   pública (p. ej. un caso sancionado por la CMF), y aun ahí como análisis
   falla-por-falla, no como ataque. *(check: tripwires del aludido, reuso del
   adversario.)*

4. **Vigente vs propuesto, siempre separados.** Lo que la norma dice HOY nunca
   se confunde con lo que el autor PROPONE. Marcas visuales distintas
   (`.vigente` gris · `.propuesta-autor` terracota). Ninguna propuesta se lee
   como derecho vigente. *(check: eval_sitio + juicio del jurista.)*

5. **Proof-first: el recibo antes que la teoría.** La primera evidencia
   concreta (una cifra con fuente, un artículo de ley, un caso) aparece antes
   que la primera abstracción conceptual. Una pieza que lidera con teoría se
   lee como idea de moda; el antídoto es el dato primero. *(check ligero:
   aparece un `.dato`/cita en el primer tercio del cuerpo; juicio: el lector.)*

6. **Prohibida la muletilla "no es X — es Y".** (Regla que el CEO subrayó.)
   El patrón negación→afirmación ("no es un blog, es un memo"; "no por moda,
   por método"; "no necesita X: es Y") se lee como tic de vendedor y un
   banquero lo detecta al instante. Afirmar directo lo que ES; si el contraste
   importa, construirlo con sustancia, no con la fórmula. *(check determinista:
   S04 de eval_sitio + eval_editorial; lección LEC-20260703.)*

7. **Declaración de interés, de frente.** Toda pieza donde el autor tiene un
   incentivo declara ese incentivo y su costo, sin eufemismo. El beneficio y el
   costo van explícitos. *(check: `id="declaracion"` / `.interes` presente.)*

8. **Gap-analysis obligatorio: lo que no sé todavía.** Toda pieza declara sus
   límites — qué cifra es orden de magnitud, qué claim es juicio y no dato, qué
   fuente es única. La sección "Método de esta página" cumple ese rol. Es
   autodivulgación del autor, no adorno. *(check: sección de método/límites
   presente.)*

9. **Para quién / qué te llevas / cuánto tarda.** Arriba del fold, cada pieza
   declara su audiencia, el accionable que deja, y el tiempo de lectura. El
   lector con poco tiempo decide en segundos si sigue. *(check: `.para-quien`
   presente.)*

10. **Breve.** El banquero no tiene tiempo. Cada pieza declara un tope de
    lectura y lo respeta: opinión ≤ 5 min, ensayo ≤ 12 min, guía viva sin tope
    pero con el accionable copiable arriba. Se corta todo párrafo que no mueva
    el argumento (test "so what" por oración). La brevedad es respeto por el
    lector, no pereza del autor. *(check: tope de lectura declarado; conteo de
    palabras bajo el techo por tipo.)*

11. **Sin jerga.** Español financiero chileno, claro. Prohibido el anglicismo
    gratuito (buyer-back, run-rate, deep-dive) y la jerga de la casa que el
    banquero no usa; prohibida la jerga de IA/tech ("harness", "pipeline",
    "constelación de agentes" — eso es cocina interna, no va a la pieza). Si un
    término técnico es imprescindible, se define en una frase la primera vez.
    *(check determinista: denylist de anglicismos/jerga; juicio del lector.)*

12. **Sin vaguedades.** Un número o nada. Prohibidas las muletillas de relleno
    ("podría", "en cierto sentido", "de alguna manera", "en general", "cabe
    señalar", "es importante destacar"). Toda afirmación es concreta y
    verificable, o es un juicio marcado como juicio. Nada de hand-waving.
    *(check determinista: denylist de hedges/relleno; juicio del adversario.)*

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
  el activo de "autoridad por sobriedad"; esconder una falsada sería la promesa
  engañosa que el adversario tiene el mandato de vetar. Kicker "Hipótesis".

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

- `separacion-de-roles.html` — ensayo: dato "0" al frente (proof-first),
  vigente/propuesto separados, declaración de interés.
- `deuda-privada-como-renta-fija.html` — ensayo de tesis en pasos; juicio
  marcado como juicio ("mi lectura es que…").
- `due-diligence-deuda-privada.html` — guía viva con changelog; simetría
  (aplica a los vehículos del propio autor).
- `memorandum.html` — el documento formal de referencia; el análisis
  falla-por-falla de un caso público (regla 3 en acción).

## Cómo evoluciona esta spec (loop de mejora)

El `AG-EDITORIAL-CALIBRADOR` la re-versiona por supersedence cuando:
- una objeción real (lector/regulador/prensa) que el adversario NO anticipó
  revela una regla de voz faltante → nueva regla numerada;
- una deriva de voz se repite en dos piezas → se endurece el check;
- una hipótesis publicada se confirma/falsa → se anota la calibración del juicio
  del autor (qué tan bien calibrada estaba la creencia).
Nunca se edita en silencio: cada cambio deja versión + fecha + causa.
