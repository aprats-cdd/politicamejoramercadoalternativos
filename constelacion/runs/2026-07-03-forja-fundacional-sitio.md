# Run · 2026-07-03 · Forja fundacional del sitio (WF-FORJAR-EQUIPO + rediseño)

- **Emisor:** AG-SITIO-SINTETIZADOR
- **Fecha:** 2026-07-03
- **Rama de trabajo:** `claude/mfo-layer-narrative-xq5w5r` (sin merge; main intacto)
- **Confidencialidad:** run público anonimizado. Este documento no contiene
  ningún nombre del panel de lectores (P9/R30) ni detalle de estrategia de
  negociación. Los resultados del panel se reportan **solo como agregado
  anónimo**; el detalle nominal vive fuera del repo.

---

## 1 · Encargo del CEO

Forjar la constelación que rediseña el sitio y ejecutar el rediseño, bajo
tres órdenes duras:

1. **Rediseño 100% nuevo** — el sitio deja de ser la página del memorándum
   y pasa a ser la plataforma editorial del autor.
2. **Prohibido reutilizar** — ni el equipo de la era del memo, ni sus
   contratos, ni el sistema visual heredado. Toda convergencia con lo
   anterior se re-deriva y se documenta como decisión, nunca como inercia.
3. **Cuestionar todo** — cada supuesto del artefacto previo (identidad,
   URLs, voz, tokens, harness, framing del buscador) se somete a autopsia
   y veredicto explícito antes de construir. Nada pasa por default.

## 2 · Las 5 fases ejecutadas

| Fase | Qué se hizo | Salida |
|---|---|---|
| **F1 · Autopsia** | Disección del artefacto previo: fallas y gravedades identificadas (identidad-campaña, pieza faltante para la audiencia, CSS copy-paste, harness mono-página fail-open, piezas huérfanas, entre otras). Cada falla mapea a una decisión del brief. | Insumo de las 16 decisiones de diseño |
| **F2 · Constelación nueva (9 roles)** | Los 9 roles de la era del memo quedaron **archivados como histórico — prohibido reutilizar** (P12). Se forjaron 9 roles nuevos re-derivados del encargo del sitio: AG-SITIO-CURADOR, AG-SITIO-RIESGO-BUSCADOR, AG-SITIO-ESCRITOR, AG-SITIO-AUDITOR, AG-SITIO-JURISTA, AG-SITIO-ADVERSARIO, AG-SITIO-LECTORES, AG-SITIO-VERIFICADOR, AG-SITIO-SINTETIZADOR — cada uno con contrato agente→memoria→eval en `constelacion/agentes.yaml`. | `eval_constelacion.py` VERDE |
| **F3 · Diseño con jueces** | Propuestas de diseño en competencia evaluadas por 3 jueces independientes; ganó la propuesta centrada en el lector (2/3) con injertos nombrados de las otras dos. Resultado: design brief final con 16 decisiones con veredicto único (identidad, URLs, tokens desde cero, contrato de voz de 5 tipos, harness manifest-driven, declaración de interés canónica + variante por pieza). | `runs/AG-SITIO-CURADOR/2026-07-03-design-brief.md` (gate E0) |
| **F4 · Producción por riesgo** | Orden por riesgo, no por facilidad, con gates bloqueantes entre etapas: harness primero (LEY-2) → declaración de interés → pieza de mayor riesgo (buscador) → guía DD → ensayos → home + migración del memo. Regla dura: ninguna pieza publica link a otra que no haya pasado su propio gate. | 7 páginas en manifest, sitio integrado (run del VERIFICADOR) |
| **F5 · Panel de lectores** | Ronda de panel con 5 lectores simulados perfil institucional sobre el sitio integrado. Resultados solo agregados en repo (ver §4); hallazgos aplicados a las piezas. | Agregado anónimo + este run de cierre |

## 3 · Resultados de gates

### Evals ejecutables

| Gate | Resultado | Detalle |
|---|---|---|
| `eval_constelacion.py` | **VERDE** | C01-C05 sobre los 18 roles (9 archivados era-memo + 9 nuevos del sitio); las tres leyes verificadas ejecutablemente, fail-closed operativo |
| `eval_sitio.py` | **VERDE** | S01-S10 en estado `cierre`, 7 páginas (5 nuevas); iterado desde ROJO inicial (7 hallazgos mecánicos, cero cambio editorial) hasta verde |
| `eval_citabilidad.py` | VERDE | P01-P04 (gate heredado de la era memo sobre el memorándum congelado) |

### Rondas del adversario (test del aludido) por pieza

| Pieza | Veredicto | Rondas |
|---|---|---|
| Home (`index.html`) | PASA | 3 |
| Pub A — `separacion-de-roles.html` | PASA | 3 |
| Pub B — `deuda-privada-como-renta-fija.html` | PASA | 1 |
| Pub C — `due-diligence-deuda-privada.html` | PASA | 3 |
| Pub D — `buscador-causas-judiciales.html` (severidad máxima) | **PASA** | 2 |

**Historia del gate del buscador (fail-closed en acción):** la FICHA de
diseño falló 3 rondas del adversario en la fase de diseño (hallazgos
letales: re-publicación de nombres de personas naturales en carátulas —
riesgo Ley 19.628/20.575 —, el universo de candidatos como acto editorial
oculto, y la clasificación "fondo de deuda privada" disfrazada de regla
registral). La PÁGINA se escribió incorporando los tres fixes como diseño
declarado y pasó en 2 rondas. La card sigue construida removible
limpiamente (decisión D4). El SI/CUÁNDO del anuncio se elevó al CEO como
decisión separada.

## 4 · Panel de lectores — agregado anónimo (REGLA DURA: sin nombres)

Ronda sobre **5 lectores simulados** perfil institucional. Se reporta
únicamente el conteo agregado; ningún nombre ni transcripción individual
entra al repo.

| Señal observada | Lectores que la reportaron (de 5) |
|---|---|
| Detectaron lectura posible de «lobby» en algún pasaje (mayoritariamente: interés declarado que se nota — no lobby encubierto; los pasajes puntuales se corrigieron) | 4 |
| NO salieron con la conclusión «autor referente basado en datos» (métrica de posicionamiento a seguir trabajando) | 2 |
| Confusión home → memorándum | 0 |

**Hallazgos aplicados (resumen sin nombres):** la señal dominante (4/5,
percepción de lobby) se atacó reforzando la declaración de interés — más
visible, con los costos específicos por pieza al pie de cada una — y
revisando los pasajes donde el beneficio del autor podía leerse antes que
el argumento. La lectura «sin referente» (2/5) se registra como señal de
posicionamiento, no requiere cambio. Cero confusión home→memo valida el
swap D1 (link al memo arriba del fold + shim de anclas): el plan B de
re-envolvimiento del memo **no se activa**.

## 5 · Decisiones del CEO — resueltas en esta corrida

Las decisiones elevadas fueron resueltas por el CEO (@aprats-cdd) el
3-jul-2026, en el canal de la corrida:

1. **Timing del merge:** aprobado por el CEO tras el cierre de gates —
   sign-off explícito registrado en esta corrida; el merge lo ejecuta la
   sesión al cierre (con checklist de deep-links verificado; el gate de
   envejecimiento no aplica: las citas se verificaron el mismo día).
2. **Buscador:** se anuncia en el v1 del sitio; la asunción del riesgo
   residual (Ley 20.169) queda consignada por escrito en el PR.
3. **Higiene del repo:** estado actual — el design brief y material
   estratégico sensible permanecen fuera del repo público.
4. **Contacto del colofón:** LinkedIn (cadena fail-closed cumplida).
5. **Validación visual R41:** aprobada por el CEO sobre capturas.
6. **Interpretación del memo (D2):** el CEO ordenó "corregir todo y
   actualizar — lo relevante es que sea correcto": las tres notas
   defectuosas (fn11, fn13, fn14) se corrigieron EN el texto y la fe de
   erratas se convirtió en registro de cambios fechado en la misma página.

Pendientes que quedan abiertos (no bloquean publicación):

- Los dos gates de lanzamiento de la herramienta del buscador (simetría
  verificada + revisión legal 19.628/20.575) antes de publicar dato alguno.
- Dominio propio y abstract EN del memo: backlog post-negociación.
- Higiene profunda del repo (mover histórico estratégico): decisión
  diferida, sin fecha.

## 6 · Cierre — matriz de estados de la spec

Verificación completa requisito a requisito en
`constelacion/runs/AG-SITIO-SINTETIZADOR/2026-07-03-matriz-spec.md`
(41 requisitos + 16 prohibiciones, evidencia de 1 línea por ítem).
Conteo al momento de esa verificación:

| Estado | Requisitos (41) | Prohibiciones (16) |
|---|---|---|
| cumplido | 32 | 16 |
| pendiente | 8 (R5, R7, R8, R9, R27, R35, R36, R37) | 0 |
| bloqueado-por-decisión-CEO | 1 (R41) | 0 |
| no-aplica | 0 | 0 |

Nota de frescura: la matriz es anterior a la ronda del panel (§4) —
R8/R37 avanzaron con la corrida del panel; R7/R35/R36 dependen del PR y
del reporte de cierre; R41 y el destino del buscador esperan al CEO (§5).
Sin reloj que reintente, este reporte es el sensor: lo que no corrió,
está declarado.

— AG-SITIO-SINTETIZADOR
