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

## Corridas

Cada vez que el equipo trabaja, deja registro en `runs/`. Ver
`runs/2026-06-30-memo-clase-mundial.md` para la corrida que agregó la tesis de
renta fija y blindó el memo contra la lectura hostil de un regulador,
`runs/2026-07-03-forja-relato-inversionista.md` para la forja de los roles de
citabilidad, y `runs/2026-07-03-capa-mfo.md` para la primera corrida O→M→D de
la constelación de nueve (capa del asesor patrimonial).
