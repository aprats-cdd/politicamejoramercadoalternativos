# Forja · capa de experiencia del sitio · 2026-07-03 (WF-FORJAR-EQUIPO, modo mixto)

**Encargo del CEO:** llevar el sitio de publicaciones
(`#publicaciones`) a **clase mundial en UI y de frontera** — móvil-primero real
(navegación con el pulgar, gestos), "ganas de leer" (entretenido, cards que
seducen), divulgación progresiva ("si quiero profundizar abro"), estética
editorial de frontera. Sin techo de presupuesto; el gate es el verde del eval.

**Cuello de botella declarado (Goldratt):** la **experiencia**. La calidad de
contenido, la citabilidad y el blindaje del aludido ya los garantizan las dos
constelaciones previas (memo + sitio). La restricción dominante es que el
cuerpo se **mueva, seduzca y se lea con el pulgar** sin perder la sobriedad
citable. Forjar más agentes de contenido habría sobre-dimensionado; se forjó la
capa mínima que rompe ese cuello.

## Modo: mixto (WF-FORJAR-EQUIPO)

`SK-ROUTE` sobre el catálogo local: existe una constelación del sitio (10 roles)
con harness `eval_sitio.py`. La experiencia no estaba cubierta → **3 agentes
nuevos** (O→M→D de experiencia) + **3 enriquecidos** (verificador, lectores,
adversario). Ninguno duplica un rol vigente.

## La constelación de la capa (grafo, no lista)

```
        O                        M                         D
AG-SITIO-CARTOGRAFO-    AG-SITIO-DISENADOR-        AG-SITIO-INGENIERO-UI
EXPERIENCIA        ──►  EXPERIENCIA          ──►  (implementa; PROHIBIDO
(mide brecha:          (spec del sistema          tocar prosa)
 M1-M14, medidas)       móvil-primero, D1-D11)          │
   │ gate                   │ gate                       │ gate
   ▼                        ▼                            ▼
 harness re-mide +     lectores(móvil) +           eval_experiencia (X01-X09)
 sintetizador          adversario(marketing) +     + smoke (T01-T05, área táctil
 (rol-de-corrida,      CEO (accept identidad, E6)   medida en render)
  con sunset)                                       + eval_sitio (S01-S09, no-reg)
                                                     lo corre el verificador
```

Enriquecidos: **AG-SITIO-VERIFICADOR** (dueño del nuevo harness de experiencia
+ smoke headless), **AG-SITIO-LECTORES** (lente lectura móvil real),
**AG-SITIO-ADVERSARIO** (lente experiencia-como-marketing, veto prima sobre el
KPI del panel), **AG-SITIO-ESCRITOR** (dueño del micro-copy de navegación).

Regla de oro respetada: **ningún agente valida su propio trabajo.** El área
táctil —el check más falseable— se mide en un smoke test headless independiente,
no por tokens CSS.

## Qué se implementó (frontera dentro de la sobriedad R41)

Tipografía fluida `clamp()`; área táctil de 44px en todo control (pulgar);
cards del índice con divulgación progresiva nativa (`<details>`, cero JS) y
card completa táctil; índice de pieza plegable "En esta pieza"; barra de
progreso de lectura CSS-only (`animation-timeline: scroll()`, anulada por
reduced-motion); nav de pie táctil (volver/subir/siguiente) que rompe el
callejón sin salida de cada pieza; view transitions same-origin bajo
motion-safe; área táctil ampliada de notas. **Cero requests externos, cero JS
nuevo obligatorio, hoja única, prosa del cuerpo intacta.**

## DD adversarial

Ronda hostil sobre el diseño (adversario independiente): **PASA-CON-FIXES**, 5
críticos, **todos resueltos** — ver `runs/AG-SITIO-ADVERSARIO/2026-07-03-dd-capa-experiencia.md`.
El más valioso: el smoke test cazó en vivo el modo de falla que el adversario
predijo (área táctil por tokens = teatro), salió rojo real (41 controles + 1
solape), se corrigió → verde. Ronda hostil sobre el UI **implementado**:
`runs/AG-SITIO-ADVERSARIO/2026-07-03-adversario-ui-implementado.md`.

## Estado y gates

- `eval_constelacion.py` — VERDE (21 roles, C01-C06, tres leyes).
- `eval_experiencia.py` — VERDE (X01-X09).
- `smoke_experiencia.js` — VERDE (T01-T05, área táctil medida en render).
- `eval_sitio.py` — VERDE (S01-S09, sin regresión).

La constelación se promovió a **`activa`** el 03-jul-2026: corrió su primer
O→M→D con todos los gates verdes y el **CEO dio el accept sobre la identidad
visual** (E6, "Mergea") — el único gate que el operador no se otorga a sí
mismo. Ése era el momento del humano; se cumplió y el PR se lleva a merge.
