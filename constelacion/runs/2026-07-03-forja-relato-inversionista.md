# Corrida · 2026-07-03 · Forja del equipo del relato (WF-FORJAR-EQUIPO, modo mixto)

**Encargo (E0).** Que la página gane el relato mediático de cara a los
inversionistas: convertirse en **la referencia citable** sobre estándares del
mercado de alternativos en Chile — citada por prensa financiera, usada por
CIOs/MFO/aportantes como criterio. Restricción invariante (no negociable):
**sutileza** — la página es política pública neutral; jamás puede leerse como
pieza contra un actor identificable del mercado.

**Cuello de botella (default propuesto — espera firma del CEO).** La calidad
del argumento ya la garantiza el equipo del memo (run 30-jun: doble
auditoría, red-team, VERDE). Lo que la página NO tiene es **citabilidad y
distribución**: sin PDF real, sin links a fuentes primarias, sin metadata de
citación, sin lente del lector-inversionista. Una página que convence pero no
se cita no gana ningún relato.

## E1 · Terreno (anti-duplicación — SK-ROUTE)

- **Se reusa** (0 duplicados): los 7 roles del memo (evidencia, jurista,
  citas, tesis, producción, adversario, síntesis) para todo cambio de
  contenido; y para jugadas de prensa activas, la constelación
  WF-PREDECIR-NOTA-PRENSA del catálogo maestro (cordada-skills) — puente
  declarado, no se re-crea acá.
- **Se enriquece** (1): `AG-ADVERSARIO-MEMO` + **lente del aludido** (gate
  suma: 0 frases señalables como ataque a actor identificable; 0 menciones
  con nombre a actores vivos fuera de casos con resolución regulatoria
  pública). Es el guardián ejecutable de la sutileza.
- **Se forja** (2): `AG-LECTOR-INVERSIONISTA` (la pregunta que falta) y
  `AG-EMPAQUETADOR-CITABLE` (el cuello). Contratos en `agentes.yaml`.

## E2 · Descomposición O→M→D del encargo

- **O**: qué pregunta el lector institucional/MFO y no encuentra (LECTOR);
  cómo se lee desde el bando aludido (ADVERSARIO enriquecido); qué citan
  hoy prensa/informes del tema (EMPAQUETADOR, métrica trimestral).
- **M**: checklist del aportante por tipo de lector (LECTOR); modelo de
  citabilidad — qué formatos/datos convierten lectura en cita
  (EMPAQUETADOR); ledger rankeado de ediciones (SINTETIZADOR, existente).
- **D**: qué se shippea y **cuándo** — decisión del CEO (ver E6).

## E4/E5 · Independencia y memoria

- LEY-1 ✔ — lector: gate lo corren harness + adversario; empaquetador:
  harness + verificador de citas; adversario: invertido (su salida es el
  gate). `eval_constelacion.py` → **VERDE, 9 roles** (C01-C05).
- LEY-2 — los 2 nuevos quedan `declarado → ejecutable en corrida 1`
  (implementar el checker de citabilidad es el paso 1 de la primera
  corrida). Por eso la constelación queda **`propuesta`**.
- C03 ✔ — memoria direccionada existente (los estudios de CIOs chilenos
  existen en el Cerebro del CEO; index/og en el repo).

## E6 · Customer loop — lo que solo el CEO decide (placeholders ROJOS)

1. **Firma del cuello** (citabilidad/distribución) o corrección.
2. **Timing de publicación** de cualquier cambio: coordinar con la
   negociación en curso — nada se publica sin pasar el test del aludido
   del adversario enriquecido. La página gana como referencia neutral;
   pierde si un tercero puede fecharla como jugada táctica.
3. **Versión en inglés** (¿sí/no? — GPs y fund admins internacionales).
4. **Accept de la constelación** (E8) — hoy queda `propuesta`.

## E7 · DD adversarial del diseño — hallazgos y cierre

- H1 · solape lector↔adversario → **cerrado**: frontera en el contrato
  (verdad de lo escrito vs lo que falta para decidir).
- H2 · el kit podría introducir claims nuevos → **cerrado**: regla dura en
  el contrato del empaquetador (solo empaqueta lo doble-auditado; veto=0).
- H3 · riesgo de timing/atribución táctica → **transferido al CEO** (E6.2)
  con guardián ejecutable (lente del aludido).
- H4 · medición del relato ("¿se ganó?") sin agente propio → **aceptado**:
  métrica trimestral del empaquetador (citas externas detectadas) + el loop
  de monitoreo del Cerebro; un agente medidor sería sobre-dimensionar hoy.

## Backlog de mejoras registrado (ideas — ledger para la primera corrida)

Del informe de revisión de la página (03-jul), rankeadas por el cuello:

1. **PDF real descargable** ("Descargar PDF" hoy es `window.print()`).
2. **Footnotes con enlace a fuente primaria** (leychile/CMF/SIFMA/FMI) —
   hoy hay CERO links externos en el cuerpo; verificable con un clic es
   la diferencia entre creíble y citable.
3. **Metadata de citación**: schema.org Article, canonical, fecha
   machine-readable, anchors por cifra (permalink por claim).
4. **Sección metodología/gobernanza**: "cómo se auditó este documento"
   (dos fuentes por cifra + red-team adversarial) — diferenciador de
   credibilidad único; hoy invisible para el lector.
5. **One-pager ejecutivo + hoja de datos citables** (cada cifra con su fn).
6. **Herramienta del aportante**: checklist descargable "las preguntas que
   un aportante debería hacer a su administrador" (produce
   AG-LECTOR-INVERSIONISTA) — la jugada de relato más fina: arma al lector
   con criterio, 100% neutral.
7. **Fix inconsistencia** seguros USD 60.000M (pestaña legislador, l.3399)
   vs ~USD 85.000M (fn8) — pendiente declarado del run 30-jun.
8. **Footnote para el claim del OG** ("500.000 empresas / tu pensión
   invierte en 250") — hoy sin fuente en ninguna parte; o se documenta o
   sale del OG.
9. Barras Alemania 70% / UK 45% / EE.UU. 35% sin fuente exacta → footnote
   con año o se reemplazan.
10. **Fecha de última actualización + changelog público** (documento vivo).
11. Contacto/canal del autor (hoy solo "disponible para presentar").
12. **Versión EN** (decisión CEO — E6.3).

## Estado al cierre

Constelación **enriquecida a 9 roles — `propuesta`**. Gates: C01-C05 VERDE ·
LEY-1 100% · LEY-2 pendiente primera corrida (2 evals declarados) · 0
duplicados · 0 memoria colgante. Se promueve a `activa` en la primera
corrida O→M→D (que ejecuta los evals declarados), tras el accept del CEO.
