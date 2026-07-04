# Forja · motor editorial · 2026-07-03 (WF-FORJAR-EQUIPO, modo mixto)

**Encargo (E0):** el equipo que produce publicaciones NUEVAS —opiniones,
hipótesis, ensayos— en el mismo estilo y tono, con **loop de mejora**. El CEO
pidió declarar equipo, evals, contexto y orquestación.

**Cliente primario:** el banquero de un **multi-family office chileno (perfil
Lakpa)** — sobrio, breve, sin jerga, sin vaguedades. Es el norte de la voz.

**Cuello (E0, Goldratt):** la **consistencia de voz + la disciplina de
tesis/hipótesis a escala**. Las 4 piezas fundacionales se forjaron una vez con
cuidado artesanal; el riesgo al publicar en serie es que la voz derive y que una
"opinión" u "hipótesis" salga sin tesis falsable ni proof-first. Nadie ownea hoy
la voz como spec eval-able ni la hipótesis falsable para publicar. Ese es el
cuello — no la evidencia ni el aludido (ya cubiertos).

## Equipo (modo mixto)

**Nuevos (2):**
- **AG-EDITORIAL-TESIS** (M) — forma la tesis controladora o la hipótesis
  falsable (aserción+horizonte+falsador) por idea. No redacta.
- **AG-EDITORIAL-CALIBRADOR** (loop) — post-publicación: outcome de hipótesis,
  objeción no anticipada → propuesta de tripwire, deriva de voz → propuesta de
  regla. PROPONE; el verificador commitea.

**Reusados (no se re-crean):** AG-SITIO-AUDITOR (evidencia doble fuente),
AG-SITIO-JURISTA (normas, vigente/propuesto), AG-SITIO-ESCRITOR (redacta —
**enriquecido: dueño de la voz**), AG-SITIO-ADVERSARIO (aludido —
**enriquecido: lente "envejece con dignidad"**), AG-SITIO-LECTORES (panel),
AG-SITIO-VERIFICADOR (harness), AG-EMPAQUETADOR-CITABLE (citabilidad),
AG-SITIO-CURADOR (cola).

## Orquestación (pipeline por pieza)

```
IDEA del CEO
   │
   ▼ (M) AG-EDITORIAL-TESIS ── tesis controladora  |  hipótesis falsable → ledger
   │                            (publicar hipótesis = CHECKPOINT del CEO)
   ▼ (O) AG-SITIO-AUDITOR (doble fuente) ── AG-SITIO-JURISTA (si hay norma)
   │
   ▼ (D) AG-SITIO-ESCRITOR ── redacta en la voz de la casa desde la evidencia
   │
   ▼ gates en paralelo (cada uno lo corre OTRO):
   │   · eval_editorial.py + eval_sitio.py (S04 muletilla, S07 cifras) → VERIFICADOR
   │   · AG-SITIO-ADVERSARIO (aludido + "envejece con dignidad")
   │   · AG-SITIO-LECTORES (¿le sirve al banquero de MFO?)
   │
   ▼ AG-EMPAQUETADOR-CITABLE ── PDF/metadata/footnotes
   │
   ▼ PUBLICAR
   │
   ▼ (loop) AG-EDITORIAL-CALIBRADOR ── outcome de hipótesis + objeción no
       anticipada → PROPONE tripwire → VERIFICADOR lo commitea → voz/harness
       se afilan → la pieza N+1 nace mejor
```

## Evals (qué se usa)

- **eval_editorial.py** (NUEVO, LEY-2): E01 tesis · E02 hipótesis falsable
  (ancla `data-hip` al ledger estructurado) · E03 método/gap · E04 declaración
  de interés · E06 sin jerga (denylist) · E07 sin vaguedades (denylist) · E08
  breve (techo por tipo) · E09 proof-first (advisory) · H01 integridad del
  ledger de hipótesis · L01 cierre de loop auditable.
- **Reuso:** eval_sitio.py (S04 muletilla — dueño único, no se duplica; S07
  cifras), eval_citabilidad.py, eval_lector.py, eval_constelacion.py (tres leyes).

## Contexto / memoria (qué carga cada agente)

- **voz-de-la-casa.md** (NUEVO) — spec del registro, dueño AG-SITIO-ESCRITOR;
  12 reglas + cliente Lakpa + convención juicio/hecho.
- **hipotesis-publicadas.yaml** (NUEVO) — ledger falsable, público append-only.
- **calibracion-editorial.yaml** (NUEVO) — ledger del loop (objeción → tripwire).
- El corpus (4 piezas + memo) como exemplars · registro-sitio.yaml (evidencia).

## Loop de mejora (el corazón del encargo)

Cada publicación calibra a la siguiente por tres vías, todas auditables:
1. **Hipótesis** → outcome público (confirmada/falsada, la falsada visible) →
   calibra qué tan buenas son las creencias del autor contra el mundo.
2. **Objeción real no anticipada** por el adversario → tripwire nuevo (L01
   exige que quede commiteado, o el harness bloquea) → el adversario ataca más
   profundo la próxima vez.
3. **Deriva de voz** → regla nueva en voz-de-la-casa.md por supersedence.
**KPI del loop:** golpes del adversario no anticipados por pieza → 0. La N+1 es
mejor que la N solo si ese contador baja. Sin KPI, "afiné la voz" es teatro.

## DD adversarial (independiente) — PASA-CON-FIXES, 4 críticos aplicados

1. **AG-EDITORIAL-VOZ disuelto** — no tenía mandato irreducible (cada check ya
   tenía dueño: S04, jurista, adversario, lectores). La voz pasó a spec de
   AG-SITIO-ESCRITOR. Netos nuevos: 2, no 3.
2. **CALIBRADOR propone, no commitea el harness** (VERIFICADOR es single-writer
   del gate) + check L01 de cierre de loop auditable.
3. **Publicar hipótesis = checkpoint del CEO**; ledger público append-only con
   las falsadas visibles (el track-record honesto es el activo de sobriedad).
4. **Tesis/hipótesis en YAML estructurado** parseable (LEY-2 real, no regex
   frágil sobre HTML); proof-first como proxy advisory (S07 ya gatea cifras).

Menores atendidos: frontera TESIS/CURADOR declarada · eval_editorial no
re-implementa S04 (lo referencia) · convención juicio/hecho concilia opinión
filosa con citabilidad · KPI del loop definido · reacciones de lectores en
agregado anónimo (P9) · nada de gate determinista sobre el tono (no castra la
agudeza).

## Estado y gates

- eval_constelacion.py — VERDE (23 roles, tres leyes).
- eval_editorial.py — VERDE (spec + ledgers + harness listos, LEY-2).
- eval_sitio.py — VERDE (sin regresión).

Constelación **`propuesta`**. Se promueve a `activa` en su primera corrida
O→M→D (la primera publicación real que pase el pipeline) + accept del CEO.
