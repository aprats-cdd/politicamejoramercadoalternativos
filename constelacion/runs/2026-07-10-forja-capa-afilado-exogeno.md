# Forja · capa de afilado exógeno — 10-jul-2026

WF-FORJAR-EQUIPO · modo MIXTO. Operador: agente:Claude. Domain expert: CEO.
Presupuesto: sin techo (doctrina del comando); gate = verde.

## E0 · Encargo + cuello de botella

**Encargo del CEO (verbatim):** "Forja un equipo para definir cómo afilar la
página política de mercado con esto como input. (No como base)" — "esto" =
post de Joe Briggs (Managing Partner, BCF) sobre la evolución del ecosistema
de fund administration: tesis team+tech, consolidación vía PE, bundling de
servicios (reg, compliance, depo, manco, cosec), mapa de ~200 proveedores.

**"Listo" significa:** existe un camino canónico, con dueño, memoria y gate,
por el cual una señal exógena de mercado se convierte (o no) en afilado del
corpus publicado — sin que la señal re-fundamente ninguna tesis.

**Cuello de botella (default propuesto, espera firma del CEO):** la capa
**M**. La captura O ya existe (Cerebro: observación → digesto con
procedencia). La ejecución D ya existe (curador → escritor → auditor →
jurista → adversario → verificador). Lo que no tiene dueño es el acto de
**mapear la señal contra el corpus publicado** — hoy ese acto vive en el
chat y muere en el chat (el análisis del post Briggs de esta misma sesión
es el ejemplo: quedó en conversación, no en aggregate).

## E1 · Terreno (anti-duplicación)

Cubierto — se reusa, no se re-crea:

| Capacidad | Dueño vigente |
|---|---|
| Captura de señal exógena con procedencia (O) | Cerebro del R (observación/digesto) — fuera de este repo, gobernado |
| Cola editorial + decisión de qué entra (D) | AG-SITIO-CURADOR |
| Redacción desde evidencia | AG-SITIO-ESCRITOR |
| Doble fuente primaria por cifra (S07) | AG-SITIO-AUDITOR + registro-sitio.yaml |
| Exactitud normativa | AG-SITIO-JURISTA |
| Lectura hostil / test del aludido | AG-SITIO-ADVERSARIO |
| Tesis/hipótesis nuevas | AG-EDITORIAL-TESIS |
| Loop post-publicación | AG-EDITORIAL-CALIBRADOR |
| Harness determinista (single-writer) | AG-SITIO-VERIFICADOR |

NO cubierto: el mapeo señal→pieza→claim con veredicto rankeado (M).
AG-EDITORIAL-CALIBRADOR cierra loop desde objeciones/outcomes, no desde
señales; AG-EDITORIAL-TESIS forma tesis nuevas, no afila lo publicado.
Solape con WF-FORJAR-MPP (cordada-skills): ninguno — esa constelación
produce memos de incidencia regulatoria; esta es personal y del sitio.

Modo resultante: **mixto** — 1 agente nuevo + 3 enriquecidos.

## E2 · Descomposición O→M→D

- **O** — la señal digerida con procedencia (autor, fecha, canal, interés
  del emisor). Dueño: el Cerebro. Regla: un post crudo sin digesto NO entra
  (inputs canónicos = digestos).
- **M** — el dossier de afilado: señal→pieza→claim-ancla→tipo→propuesta,
  rankeado. Dueño: **AG-EDITORIAL-AFILADOR** (nuevo).
- **D** — qué ítem entra a qué pieza. Dueño: AG-SITIO-CURADOR; editar pieza
  ya publicada = **checkpoint del CEO**. Ejecución: cadena vigente del sitio.

## E3 · Contratos

Nuevo: `AG-EDITORIAL-AFILADOR` (ver agentes.yaml). Tres reglas duras:
input-no-base · la señal nunca es fuente · interés del emisor declarado
siempre. Enum de tipos: refuerza · tensiona · agrega-comparable ·
exige-gap-declarado · deriva-a-tesis-nueva · no-accion.

Enriquecidos:
- **AG-SITIO-CURADOR** — consume el dossier en la cola; checkpoint CEO
  para piezas publicadas.
- **AG-SITIO-ADVERSARIO** — lente nueva "señal interesada": quién emite,
  qué vende, qué gana si la página adopta su marco; ataca el riesgo re-base.
- **AG-SITIO-VERIFICADOR** — dueño de eval_afilado.py (single-writer del
  harness, contrato C2 del motor editorial).

## E4 · Independencia de evaluación

Gate del afilador: harness (eval_afilado.py, commiteado por el verificador,
no por el afilador) + adversario (lente señal interesada) + curador (D) +
CEO (checkpoint). autor(eval) ≠ autor(nodo) en el 100%.
`eval_constelacion.py`: **VERDE** (24 roles, C01-C06).

## E5 · Memoria

- Semántica: piezas del sitio ✓ · registro-sitio.yaml ✓ ·
  hipotesis-publicadas.yaml ✓ · voz-de-la-casa.md ✓ ·
  Cerebro:exogeno/digestos/ ✓ (clase existente).
- Episódica: constelacion/runs/AG-EDITORIAL-AFILADOR/ (se crea en corrida 1).
- Procedural: eval_afilado.py **ejecutable desde la forja** (LEY-2):
  selftest PASS (fixture verde limpio; fixture rojo gatilla A01-A06).
- **Gap declarado (bloquea corrida 1, fail-closed):** el digesto del post
  Briggs NO existe aún en el Cerebro. La corrida 1 exige producirlo primero
  (observación cruda inmutable + digesto citable, con sobre y gap-analysis).
  No se inventa memoria: se pide al Cerebro.

## E6 · Customer loop

El CEO manda en: (a) firma del cuello (E0), (b) accept de la constelación
(E8), (c) TODO afilado que edite una pieza ya publicada bajo su nombre,
(d) publicar cualquier hipótesis derivada (contrato vigente del motor
editorial). Ningún supuesto de negocio inventado: 0 placeholders rojos.

## E7 · DD adversarial del diseño

Corrido por abogado-del-diablo (independiente del diseño). Hallazgos:

1. **CRÍTICO (resuelto) — lavado de señal:** el camino post→dossier→página
   podía blanquear un post de LinkedIn como evidencia. Fix: A02 (la señal
   nunca es fuente; toda cifra declara fuente primaria candidata) + S07
   vigente (doble fuente al publicar). Doble gate, dos dueños distintos.
2. **CRÍTICO (resuelto) — self-validation del harness:** el afilador no
   puede escribir su propio gate. Fix: eval_afilado.py es del verificador
   (single-writer, contrato C2); la completitud A01-A06 la audita el
   adversario.
3. **MEDIO (resuelto) — riesgo re-base:** "input, no base" era prosa. Fix:
   A06 (veredicto escrito por dossier) + tipo deriva-a-tesis-nueva con
   destinatario forzado (A04) + lente re-base del adversario + métrica veto
   "tesis re-fundamentadas por señal = 0".
4. **MEDIO (aceptado con registro) — ¿agente o verbo del curador?** El
   diseño se defendió: el mapeo es acto M recurrente con modos de falla
   propios (señal interesada, lavado, re-base), memoria propia y eval
   propio; dárselo al curador mezclaría M con D (el que mapea decidiría).
   Si tras 3 corridas el dossier promedio trae <2 ítems accionables, el
   agente se degrada a skill del curador (condición de sunset declarada).
5. **BAJO (resuelto) — señal sin emisor:** dossiers sobre señales anónimas
   o de segunda mano. Fix: A05 fail-closed (procedencia + interés del
   emisor obligatorios).

Veredicto: **PASA-CON-FIXES, todos aplicados.** 0 críticos abiertos.

## E8 · Canonización

- agentes.yaml: +AG-EDITORIAL-AFILADOR (estado: **propuesta**) + 3
  enriquecimientos. eval_constelacion.py VERDE.
- eval_afilado.py commiteado (selftest PASS; gate VERDE-vacío hasta el
  primer dossier).
- La capa queda **propuesta**: se promueve a activa con (a) accept del CEO
  y (b) primera corrida O→M→D — dossier del post Briggs, que exige antes
  el digesto en el Cerebro (gap E5).

## Preview honesto de la corrida 1 (post Briggs — NO es el dossier todavía)

Anticipo de ítems probables, para que el CEO juzgue el diseño con un caso
concreto. Nada de esto entra a página sin la cadena completa:

- `separacion-de-roles.html` · "El estándar que ya rige en otras
  jurisdicciones" · **agrega-comparable**: existe una industria global de
  fund administration independiente (el mapa de ~200 proveedores, law firms
  offshore, bancos custodios) — la separación de funciones no es teoría: es
  un mercado. Cifras requerirán fuente primaria (no el post).
- `separacion-de-roles.html` · verificación por oposición · **tensiona**:
  la tendencia global al bundling (admin+depo+manco+cosec en un contrato)
  concentra funciones en un proveedor — la página gana si responde por qué
  la oposición de roles debe sobrevivir al bundling comercial.
- `due-diligence-deuda-privada.html` · checklist del aportante ·
  **agrega-comparable**: el marco team+tech de evaluación de administradores
  (rotación de equipo, calidad de data, portales) como preguntas del
  aportante a su administrador.
- `deuda-privada-como-renta-fija.html` · **no-accion** probable.
- Interés del emisor (irá declarado en el dossier): Briggs es Managing
  Partner de una asesora que vive de estos mandatos — la señal es también
  marketing. La lente del adversario lo atacará.

## Pendiente (espera del CEO)

1. Firma del cuello E0 (default: la capa M).
2. Accept de la constelación (E8).
3. Autorización para producir en el Cerebro la observación + digesto del
   post Briggs (desbloquea corrida 1).
