# DD adversarial · capa de experiencia · 2026-07-03

Ronda hostil sobre el **diseño** de la ampliación (3 agentes nuevos + 3
enriquecidos + harness de experiencia), corrida por un adversario independiente
(LEY-1: no lo corrió ninguno de los agentes forjados). Veredicto original:
**PASA-CON-FIXES**, 5 críticos obligatorios. Abajo cada crítico con su
resolución aplicada en esta misma corrida.

## Crítico 1 · El artefacto implementado sin lente hostil + `gate_pasado` stale

**Ataque.** Los gates del diseño ponen lectores + adversario + CEO sobre la
*spec* (M), pero el gate del ingeniero (D) es solo harness determinista. Nadie
con la lente "esto se lee como marketing ante un CIO" ve el UI *implementado*.
`sitio-manifest.yaml` en `estado: cierre` con `gate_pasado: true` estático no
detecta que las páginas cambiaron.

**Resolución.**
- La lente hostil sobre el **UI implementado** se corre y se registra:
  `runs/AG-SITIO-ADVERSARIO/2026-07-03-adversario-ui-implementado.md`
  (adversario independiente, lente experiencia-como-marketing sobre el código
  y el render reales, no la spec).
- La prosa del cuerpo NO cambió (la capa es chrome + CSS): `eval_sitio.py` S06
  (no-reutilización) y S07 (cifras) siguen verdes, lo que prueba que
  `gate_pasado` de contenido no se invalidó por prosa. El veredicto de la
  interacción lo aporta la ronda hostil registrada.
- La constelación queda **`propuesta`**, no `activa`: su promoción exige el
  accept del CEO sobre la identidad visual (E6). No me auto-otorgo ese accept.

## Crítico 2 · Self-validation en el harness nuevo + gate circular del cartógrafo

**Ataque.** El verificador es dueño de `eval_experiencia.py` y quien lo corre;
para X01-X09 no había auditor. El gate del cartógrafo ("el harness re-corre sus
mediciones") es circular. El cartógrafo corrió sin estar en `agentes.yaml` ni
tener eval ejecutable (viola LEY-2).

**Resolución.**
- El área táctil —el check más fácil de falsear con tokens— se mide en un
  **smoke test headless independiente** (`smoke_experiencia.js`,
  `getBoundingClientRect` en viewport 390×844), no por presencia de tokens CSS.
  El harness estático (`eval_experiencia.py`) declara X03 explícitamente como
  **proxy** y delega la medición real al smoke.
- La **completitud de X01-X09** la audita el adversario + sintetizador (mismo
  contrato que los tripwires de S05) — escrito en el gate de AG-SITIO-VERIFICADOR.
- Los 3 agentes nuevos entran a `agentes.yaml` y pasan `eval_constelacion.py`
  (C01-C06, tres leyes) **antes** de cualquier corrida adicional. El run del
  cartógrafo queda con sus mediciones re-derivables por el harness (no por él).
- El cartógrafo se declara **rol-de-corrida con sunset**: tras la corrida 1 la
  medición recurrente la absorbe el harness; no compite por el single-writer
  de esas medidas (cierra el menor 3).

## Crítico 3 · X03 es teatro (tokens ≠ área renderizada) + margen negativo crea solapes

**Ataque.** Un grep de `--tap-minimo: 44px` no mide nada. Ampliar las refs de
nota con padding + margen negativo produce **solape de áreas táctiles** entre
refs adyacentes (el tap cae en la nota equivocada), invisible al check estático.

**Resolución (el más importante — se probó en vivo).**
- `smoke_experiencia.js` mide el alto renderizado de cada control y **detecta
  solapes** entre áreas táctiles con destino distinto (T03).
- La primera corrida salió **ROJA**: 41 controles bajo el mínimo (refs de nota
  a 26.7–29.6px) + 1 solape real `#fn3`/`#fn4` en la pieza del buscador —
  exactamente el modo de falla que el ataque predijo. Se corrigió (padding
  táctil mayor + `sup.nota-ref + sup.nota-ref { margin-left }`) y la re-corrida
  quedó **VERDE**. El token-check de `eval_experiencia.py` queda como lint; el
  gate real es el smoke. X03 dejó de ser teatro.

## Crítico 4 · Copy huérfano (la capa exige prosa nueva sin dueño)

**Ataque.** Summaries, "En esta pieza", "Siguiente: …" son copy visible; el
ingeniero lo tiene prohibido y el escritor no estaba en el loop. Riesgo: un TOC
con token numérico dispara S07, y registrar chrome como `ilustrativo` contamina
el registro de evidencia.

**Resolución.** AG-SITIO-ESCRITOR enriquecido como **dueño del micro-copy** de
navegación (el ingeniero propone el hueco, el escritor lo llena). Regla dura
escrita: micro-copy sin dígitos, sin muletilla, sin léxico prohibido; y
**prohibido inscribir tokens de chrome UI en `registro-sitio.yaml`**. Verificado:
el micro-copy introducido no tiene dígitos → S07 verde sin tocar el registro.

## Crítico 5 · X04-X06 pre-deciden la solución (inversión O→M→D) + "vara" es humo

**Ataque.** El harness exige `clamp()`, `<details>`, barra scroll-driven como
checks — la D escrita en el eval antes del accept del CEO, dueño de la
identidad. Si el diseñador concluye que la barra rompe R41, el harness lo pone
rojo por diseñar bien. Y la "vara de frontera" del cartógrafo trae los remedios
embebidos en la columna de observación, citando "catálogo del operador" (una
sola voz, sin fuente ni fecha) — opinión disfrazada de medición.

**Resolución.**
- El run del cartógrafo re-etiqueta la sección como **"Criterios de diseño de
  frontera (capa M — NO es medición O)"** con advertencia de honestidad
  explícita; las columnas "vara" de M6/M7/M8 pasan de mecanismo prescriptivo
  ("índice plegable + progreso") a **resultado observable** ("el lector siempre
  sabe dónde está y cuánto queda"). Las M1-M14 medidas siguen siendo O.
- X04-X06 se documentan como verificadores de la **spec aceptada** (decisiones
  D1/D5/D6 del diseñador), no de una wishlist previa. La constelación queda
  `propuesta` hasta el accept del CEO; si el CEO rechaza un mecanismo, el
  harness se re-parametriza desde la spec aceptada, no al revés.

## Menores atendidos

- **M1 (card-link + details anidado):** `z-index` del summary/`.card-mas` sobre
  el overlay de la card (`.card-titulo a::after`), y `@media print` fuerza los
  details abiertos y oculta el summary (el contenido no desaparece en PDF).
- **M2 (precedencia de lentes):** escrito — el veto del adversario
  (experiencia-como-marketing) prima sobre el KPI "ganas de seguir leyendo" del
  panel.
- **M3 (cartógrafo permanente):** declarado rol-de-corrida con sunset.
- **M4 (dark mode ya existía):** X08 es check de **no-regresión**, no
  entregable inflado — anotado.
- **M5 (`animation-timeline` soporte parcial):** bajo `@supports`; la
  degradación (página sin barra) es **VERDE por diseño**. `@view-transition`
  bajo `prefers-reduced-motion: no-preference` con su propia regla.
- **M6 (anclas nuevas vs shim JS del home):** el TOC usa ids de `h2` ya
  existentes en cada pieza; el shim de anclas legadas vive solo en el home
  (que no tiene TOC). Sin colisión — S01 verde.

## Estado

Los 5 críticos: **resueltos**. Harness verde (`eval_constelacion` C01-C06 ·
`eval_experiencia` X01-X09 · `smoke_experiencia` T01-T05 · `eval_sitio` S01-S09
sin regresión). Falta: accept del CEO sobre la identidad visual (E6) para
promover la constelación de `propuesta` a `activa`.
