# Constelación del memorándum

Equipo de agentes que lleva este memo a estándar mundial. Es **personal**, vive
en este repo, y es lo más chico que hace el trabajo bien — no un ejército para
mover una silla.

## La idea

La unidad de trabajo no es un agente suelto: es el **equipo**. Nueve roles, cada
uno con un trabajo, lo que lee, y un examen que **corre otro** — nunca él mismo.

## Las tres reglas (fail-closed)

1. **Nadie se corrige a sí mismo.** El examen de cada rol lo corre otro.
2. **Nadie pasa sin un examen que de verdad se pueda correr.**
3. **Cada dato que entra a la página está auditado por dos fuentes/ojos
   independientes.** Lo que no se puede doble-verificar, no entra.

## El equipo

| Rol | Hace | Lo examina |
|---|---|---|
| Auditor de evidencia | Verifica cada cifra contra dos fuentes | Harness + adversario |
| Jurista regulatorio | Factibilidad legal con norma citada | Verificador de citas + adversario |
| Verificador de citas | Fija el artículo y la fuente exacta | Doble verificación |
| Arquitecto de la tesis | Une lo defensivo y lo constructivo | Adversario |
| Productor de la página | Edita el HTML sin tocar el diseño | Verificación del draft |
| Adversario | Lee como el más hostil posible (incl. lente del aludido) | Su salida ES el examen |
| Sintetizador | Deduplica y prioriza los arreglos | Crítico de completitud |
| Lector inversionista / MFO | Pregunta lo que falta para decidir e invertir | Harness (`eval_lector.py`) + adversario |
| Empaquetador citable | Convierte la página en la referencia más fácil de citar | Harness (`eval_citabilidad.py`) + verificador de citas |

El catálogo completo, con la memoria y el examen de cada rol, está en
`agentes.yaml`.

## Cómo se corre el examen

```bash
python3 constelacion/eval_constelacion.py   # las tres leyes sobre el catálogo
python3 constelacion/eval_citabilidad.py    # footnotes + metadata + capas auditadas + kit
python3 constelacion/eval_lector.py         # tabla pregunta→estado del lector institucional
python3 constelacion/eval_sitio.py          # gate determinista del sitio (S01-S09)
python3 constelacion/eval_experiencia.py    # gate de experiencia móvil-primero (X01-X09)
python3 constelacion/eval_afilado.py        # dossiers de afilado exógeno (A01-A06)
NODE_PATH=/opt/node22/lib/node_modules node constelacion/smoke_experiencia.js  # área táctil medida en render (T01-T05)
```

Verde = el equipo cumple las tres reglas. Rojo = bloquea (no se publica).

## Capa de experiencia (forja 03-jul-2026)

Tercera constelación del repo: lleva el sitio a **clase mundial en UI**,
móvil-primero, dentro de la sobriedad del sitio. Tres agentes nuevos en O→M→D
(`AG-SITIO-CARTOGRAFO-EXPERIENCIA` mide la brecha · `AG-SITIO-DISENADOR-EXPERIENCIA`
especifica el sistema · `AG-SITIO-INGENIERO-UI` implementa, con prohibición
dura de tocar prosa) + tres enriquecidos (verificador dueño del harness de
experiencia, lectores con lente móvil, adversario con lente
experiencia-como-marketing). El área táctil se mide en un **smoke test headless
independiente** (`smoke_experiencia.js`), no por tokens CSS — cerró el modo de
falla "gate de teatro". Estado: **propuesta** hasta el accept del CEO sobre la
identidad visual. Detalle en `runs/2026-07-03-forja-capa-experiencia.md`.

## Capa de afilado exógeno (forja 10-jul-2026)

Cómo una señal exógena de mercado (un post, un informe, un desarrollo
regulatorio) afila el corpus publicado — **como input, nunca como base**.
El Cerebro digiere la señal con procedencia (O) → `AG-EDITORIAL-AFILADOR`
la mapea contra las piezas en un dossier rankeado (M) → el curador decide
la cola, con checkpoint del CEO para toda pieza ya publicada (D). Tres
reglas duras: la señal jamás re-fundamenta una tesis · la señal nunca es
fuente (toda cifra pasa por doble fuente primaria) · el interés del emisor
se declara siempre. Gate: `eval_afilado.py` (A01-A06, commiteado por el
verificador, no por el afilador) + lente "señal interesada" del adversario.
Estado: **propuesta** hasta el accept del CEO + primera corrida O→M→D
(dossier del post de Joe Briggs sobre el ecosistema de fund admin).
Detalle en `runs/2026-07-10-forja-capa-afilado-exogeno.md`.

## Juez de clase mundial (forja 12-sep-2026)

Encargo del CEO: un eval de la pieza publicada con la vara del equipo de
diseño de Apple bajo Steve Jobs, traducida al género (ensayo sobrio de
política pública): sustracción, jerarquía, oficio en el detalle e
inevitabilidad del orden, sin su lenguaje visual ni su tono comercial. Cubre
lo que el código no mide y ningún rol juzgaba: diseño de clase mundial,
comprensión de la tesis por un lector ajeno, cuñas como unidad viral y las
cinco audiencias (político, think tank, profesor, equipo de inversiones,
abogado). Un rol nuevo, `AG-SITIO-JUEZ-CLASE-MUNDIAL`, corre **aislado** con
la prompt canónica `prompts/eval-juez-clase-mundial.md`: 12 dimensiones en
dos varas que se cruzan (Jobs 21 · Masiva 15), cuatro vetos, tabla de cuñas
(ocho tests), tabla de audiencias, «los tres movimientos de Apple» y cierres
ruteados al rol que los cierra. No edita, propone; no duplica los gates
deterministas (lo que uno debió atrapar lo reporta como fuga). Gate del
informe: el verificador (sobre YAML, nueve secciones, evidencia por puntaje,
cero actores) y el adversario (severidad). Estado: **activa** desde el 12-sep-2026 — 1a corrida aislada corrida y accept del CEO
sobre el veredicto (**NO-PASA** · Vara Jobs 13/21 · Vara Masiva 9/15 · veto **V4**:
superficies heredadas servidas en la raíz que contradicen la pieza). Informe en
`runs/AG-SITIO-JUEZ-CLASE-MUNDIAL/2026-09-12-index-objeciones.md`; forja en
`runs/2026-09-12-forja-juez-clase-mundial.md`.

## Elevador de clase mundial (forja 12-sep-2026)

El eslabón que sigue al juez: encargo del CEO de *"la prompt que lleva la página al
estándar de creatividad, claridad y UX de clase mundial"*, con una audiencia nueva —
el lector de izquierda chilena— que hay que ganar **sin cambiar la tesis, sin inventar
beneficios, sin atacar actores y sin perder a las otras cinco**; la página sigue sin
recomendar aprobar ni rechazar. `AG-SITIO-ELEVADOR` consume el informe del juez como
input tipado (sin informe no eleva a ciegas) y entrega un paquete de cinco partes: spec
de elevación, parche completo, evidencia de gates, tabla de seis audiencias y cierre
honesto. Su disciplina: **sustracción antes que adición** (nada entra sin que algo
salga) y **una sola idea creativa por página**, ejecutada completa dentro de la
sobriedad. No publica: propone, y editar una pieza publicada es checkpoint del CEO. La
elevación se mide con la **re-corrida ciega del juez** sobre la página propuesta — si
las varas no suben, la movida se revierte. Prompt canónica en
`prompts/elevar-clase-mundial.md`. Estado: **propuesta** hasta su primera corrida.

## Corridas

Cada vez que el equipo trabaja, deja registro en `runs/`. Ver
`runs/2026-06-30-memo-clase-mundial.md` para la corrida que agregó la tesis de
renta fija y blindó el memo contra la lectura hostil de un regulador,
`runs/2026-07-03-forja-relato-inversionista.md` para la forja de los roles de
citabilidad, y `runs/2026-07-03-capa-mfo.md` para la primera corrida O→M→D de
la constelación de nueve (capa del asesor patrimonial).
