# Matriz spec → estado — rediseño del sitio (forja 2026-07-03)

- **Emisor:** AG-SITIO-SINTETIZADOR (crítico de completitud)
- **Fecha:** 2026-07-03
- **Base:** spec de fase 1 (41 requisitos + 16 prohibiciones) contra el estado real del working tree en la rama `claude/mfo-layer-narrative-xq5w5r` (trabajo aún sin commit ni PR).
- **Gates corridos en esta verificación:** `eval_sitio.py` VERDE (S01-S10, estado `cierre`, 7 páginas) · `eval_constelacion.py` VERDE (C01-C05, 18 roles) · `eval_citabilidad.py` VERDE (P01-P04, era memo) · `eval_lector.py` **ROJO** (13 anclas colgantes — checklist era-memo apunta a anclas migradas a `memorandum.html`; el panel del sitio nuevo no ha corrido).
- **Veredictos del adversario (insumo de la corrida):** home PASA (3 rondas) · Pub A PASA (3) · Pub B PASA (1) · Pub C PASA (3) · Pub D PASA (severidad máxima).
- **Confidencialidad:** este archivo no contiene ningún nombre del panel de lectores (P9/R30).

## Requisitos

| ID | Estado | Evidencia (1 línea) |
|---|---|---|
| R1 | cumplido | `index.html` nuevo (home de blog personal), sistema de diseño nuevo en `assets/sitio.css`; S06 no-reutilización contra corpus `git:3592d91:index.html` en verde. |
| R2 | cumplido | Masthead «Andrés Prats» + `meta author`; Cordada aparece solo dentro de los bloques de declaración de interés, cero branding corporativo como emisor. |
| R3 | cumplido | El home lista las 4 publicaciones como cards con links funcionales (`separacion-de-roles`, `deuda-privada-como-renta-fija`, `due-diligence-deuda-privada`, `buscador-causas-judiciales`) + memo como documento de referencia; S01 links/anclas verde. |
| R4 | cumplido | Todas las páginas nuevas `lang="es"`, sin toggle ni versión EN; prosa íntegra en español (términos técnicos puntuales). |
| R5 | **pendiente** | Title/description/og/favicon del home son nuevos, pero `og-cover.html`/`og-cover.svg` siguen siendo los del memorándum («Memorándum de Política Pública · Chile 2026») sin rehacer y el home no declara og:image propio. |
| R6 | cumplido | `main` sin diff (swap raíz→memo vive solo en el working tree de la rama); cero commits a main. |
| R7 | **pendiente** | No existe PR aún, por lo tanto la sección «Destino del memo — decisión pendiente del CEO» con opciones no está consignada (trabajo de E9; la decisión final es del CEO). |
| R8 | **pendiente** | La prosa está dirigida al asesor MFO (tagline + componente `para-quien` por pieza), pero la verificación exigida —panel de lectores vía `eval_lector.py`— no ha corrido para el sitio nuevo (eval en ROJO con checklist era-memo). |
| R9 | **pendiente** | La matriz paso→publicación existe en el design brief (§8), pero no está publicada (no hay `/metodologia.html` con matriz — la metodología es sección del home sin matriz) ni adjunta a un PR (que no existe). |
| R10 | cumplido | Paso 4 formulado en positivo y por arquitectura en Pubs C y D; adversario (test del aludido) PASA en ambas; ningún actor nombrado como perdedor. |
| R11 | cumplido | `separacion-de-roles.html` desarrolla los roles y el criterio operativo a nivel de arquitectura; adversario PASA (3 rondas). Confirmación de lector queda cubierta por R37 (pendiente). |
| R12 | cumplido | `deuda-privada-como-renta-fija.html` desarrolla pasos 1-3; adversario PASA (1 ronda). Pregunta de cierre al lector queda cubierta por R37 (pendiente). |
| R13 | cumplido | S07 verifica cifras contra `constelacion/evidencia/registro-sitio.yaml` en verde; notas al pie con doble fuente o marca explícita de «orden de magnitud / ilustrativo». |
| R14 | cumplido | Pub C incluye «El cuestionario para enviar» como `<pre>` copiable autocontenido (funciona sin JS) + guía de uso; adversario PASA. |
| R15 | cumplido | Los 5 bloques presentes como secciones: posiciones con emisor, repactaciones, provisiones por producto/crédito, normalización y cobranza judicial, piso de apertura que la banca ya practica. |
| R16 | cumplido | Q&A neutro y universal («aplica también a mis vehículos» en la declaración de la pieza); test del aludido pregunta por pregunta PASA (3 rondas, consignado en manifest). |
| R17 | cumplido | Normas citadas con fuente primaria doble (p. ej. Reg. UE 2017/2402 art. 6 + Regulation RR) y formulación genérica fail-closed donde no hay equivalente chileno citable. |
| R18 | cumplido | `buscador-causas-judiciales.html` anuncia la herramienta con alcance, diseño declarado y estado «En desarrollo — beta» con definición operativa; **nota:** el título canónico omite «FIP» (LETAL 5) — desviación de R3/R18 a consignar como decisión del CEO en el PR. |
| R19 | cumplido | Framing exclusivo de acceso simétrico a información pública; cero nombres de la industria en el cuerpo (Cordada solo en el bloque de declaración de interés, conforme a la ficha §6); adversario severidad máxima PASA + S05 denylist léxica verde. |
| R20 | cumplido | Bloque de limitaciones arriba del fold: beta operativamente definido, dependencia de fuentes públicas, homónimos fail-closed por RUT, «no constituirá asesoría ni imputación de conducta»; el juicio como dato a preguntar conecta con bloque iv de Pub C. |
| R21 | cumplido | Único ejemplo es tabla marcada «ejemplo ilustrativo — sintético» con fila que declara «sin ningún dato real detrás»; cero causas/roles/tribunales reales. |
| R22 | cumplido | Primera persona en home, bio y ensayos («publico», «sostengo», «mi lectura es»); registro de blog personal, sin jerga de consultoría. Percepción de voz por panel queda cubierta por R37 (pendiente). |
| R23 | cumplido | Grep de patrones «no es…, es / no se trata de / no…, sino» = 0 en la prosa nueva; lint S04 (muletilla + «referente») en verde. |
| R24 | cumplido | Comparaciones solo opaca-vs-verificada; disclaimer del colofón lo declara («entre arquitecturas de vehículos, jamás entre gestores, fondos o personas»); adversario PASA en las 5 páginas. |
| R25 | cumplido | Bloque de declaración en el home con los 3 componentes: nombra Cordada y el rol (socio fundador), admite el beneficio de frente («si el estándar se adopta, gano»), enumera 3 costos concretos; accesible desde toda pieza (bloque propio al pie de cada una + colofón). |
| R26 | cumplido | La declaración del home y la variante de Pub D nombran la auto-indexación por RUT de los vehículos del autor como costo asumido, con la simetría como gate de lanzamiento («si la regla no los captura, no se lanza»). |
| R27 | **pendiente** | Los veredictos PASA existen (5/5, con rondas, anotados en `sitio-manifest.yaml`), pero el registro de rondas por publicación NO está consignado en `constelacion/runs/AG-SITIO-ADVERSARIO/` como exige la spec (el directorio no existe). |
| R28 | cumplido | S02 (footnotes por página) + S07 (cifras respaldadas en el registro) en verde sobre las páginas nuevas; ejemplos genéricos o marcados ilustrativos. |
| R29 | cumplido | Callouts `vigente` («Hoy — vigente») y `propuesta-autor` («Propuesta del autor», color semántico reservado) instanciados en Pubs A, B y C; separación estructural y tipográfica. |
| R30 | cumplido | S10 (grep de nombres confidenciales del panel, lista fuera del repo) en verde sobre el árbol; este archivo tampoco los contiene. |
| R31 | cumplido | `constelacion/agentes.yaml`: era memo archivada como histórico (prohibido reutilizar, P12) + sección nueva de 9 roles del sitio re-derivados con justificación; `eval_constelacion.py` VERDE. |
| R32 | cumplido | `eval_constelacion.py` corre y está VERDE (C01-C05) sobre los 18 roles — las tres leyes se cumplen, gate fail-closed operativo. |
| R33 | cumplido | Rondas iteradas hasta PASA (3 rondas en 3 de 5 páginas); cero decisiones motivadas por costo en los runs de la corrida. |
| R34 | cumplido | Insumos con procedencia declarada: órdenes del CEO (spec), repo, harness y fuentes citables en `registro-sitio.yaml`; sin material externo sin cita. |
| R35 | **pendiente** | No existe PR: el trabajo está sin commit en la rama `claude/mfo-layer-narrative-xq5w5r`; además el brief (D14) exige rama FUERA del patrón `claude/*` (`sitio/redisenio-v2`) para quedar estructuralmente fuera de `auto-merge.yml` — riesgo activo si se abre PR desde la rama actual. |
| R36 | **pendiente** | El reporte de cierre al CEO no existe todavía (Fase 5); esta matriz es insumo, no el reporte. |
| R37 | **pendiente** | Ninguna ronda de panel de lectores corrió para el sitio nuevo; `eval_lector.py` está ROJO (13 anclas colgantes del checklist era-memo tras el swap D1) y debe re-parametrizarse multi-página antes de E8. |
| R38 | cumplido | Cero requests externos en las 5 páginas nuevas + `sitio.css` (stacks de sistema, favicon SVG inline data-URI, gráficos SVG inline); hoja única same-origin; S09 no-drift verde. |
| R39 | cumplido | `sitio-manifest.yaml` es la fuente de verdad manifest-driven (agregar pieza = 1 entrada con contrato + 1 archivo que hereda template); patrón de crecimiento cronológico inverso declarado en el brief §2. |
| R40 | cumplido | Componentes `cifra-destacada` (fail-closed sin fuente) y `tabla-sobria` en uso (13-15 instancias por ensayo); sección «Cómo se verifica lo que publico» en el home + «Método de esta página» y changelog por pieza. Lectura de «referente» por panel queda cubierta por R37 (pendiente). |
| R41 | **bloqueado-por-decisión-CEO** | Sistema de diseño implementado según la esencia declarada (columna 42rem, casi monocromo + acento `#1C4B43`, texto primero, cero chrome); la validación visual del CEO sobre el resultado está pendiente por diseño (dirección de género, sitio de referencia no inspeccionable). |

## Prohibiciones

| ID | Estado | Evidencia (1 línea) |
|---|---|---|
| P1 | cumplido | Ningún actor identificable del lado perdedor; beneficio siempre en positivo y por arquitectura; adversario PASA en las 5 páginas. |
| P2 | cumplido | Cero aritmética de fees de actores identificables (menciones de comisiones solo genéricas/de arquitectura, 2 por ensayo); adversario PASA. |
| P3 | cumplido | Solo comparaciones opaca-vs-verificada; disclaimer del colofón lo fija como regla del sitio. |
| P4 | cumplido | Lint S04 verde + grep manual de las variantes = 0 en prosa nueva. |
| P5 | cumplido | Declaración nombra Cordada, admite el beneficio de frente y enumera costos concretos — nada críptico ni eufemístico. |
| P6 | cumplido | Sin versión EN, sin toggle, sin `/en/`; todo el contenido en español. |
| P7 | cumplido | S07 en verde: toda cifra respaldada en el registro de evidencia o marcada «orden de magnitud / ilustrativo» (fail-closed aplicado, p. ej. nota 1 del home). |
| P8 | cumplido | Callouts `vigente`/`propuesta-autor` tipográficamente inconfundibles en cada pasaje mixto; ningún pasaje presenta la propuesta como regulación vigente (adversario PASA). |
| P9 | cumplido | S10 verde sobre todo el árbol; runs, manifest, evidencia y esta matriz sin nombres del panel. |
| P10 | cumplido | Nada mergeado ni publicado a main; el swap raíz→memo existe solo en el working tree de la rama. (Riesgo conexo anotado en R35: abrir el PR desde rama `claude/*` lo expondría a `auto-merge.yml`.) |
| P11 | cumplido | `index.html` de main intacto (cero commits); la URL raíz vigente sigue sirviendo el memorándum. |
| P12 | cumplido | Los 9 roles era-memo quedaron archivados como histórico con prohibición explícita de reuso; la constelación del sitio es nueva y re-derivada (R31). |
| P13 | cumplido | Pub D: cero nombres de la industria en el cuerpo, cero datos reales (ejemplo sintético marcado), todo en futuro, framing de acceso simétrico; adversario severidad máxima PASA. |
| P14 | cumplido | «Beta» definido operativamente (desarrollo interno, sin usuarios, cero datos publicados) y disclaimer «ningún contenido de esta página describe un producto disponible»; ningún CTA en presente. |
| P15 | cumplido | `eval_constelacion.py` VERDE (LEY-1/2/3 verificadas ejecutablemente sobre los 18 roles); pudo correr, no hubo bloqueo. |
| P16 | cumplido | Las 5 páginas nuevas cierran con veredicto PASA de AG-SITIO-ADVERSARIO (rol distinto de los autores AG-SITIO-ESCRITOR/DISEÑADOR); nota: la consignación del registro en runs/ está pendiente (R27). |

## Conteo

| Estado | Requisitos (41) | Prohibiciones (16) |
|---|---|---|
| cumplido | 32 | 16 |
| pendiente | 8 (R5, R7, R8, R9, R27, R35, R36, R37) | 0 |
| bloqueado-por-decisión-CEO | 1 (R41) | 0 |
| no-aplica | 0 | 0 |

## Ítems NO cumplidos — razón

1. **R5 — pendiente:** `og-cover.html`/`.svg` siguen con la identidad del memorándum; falta el og-cover nuevo del sitio (y un og:image propio del home).
2. **R7 — pendiente:** sin PR no hay sección «Destino del memo — decisión pendiente del CEO» con opciones consignadas (E9).
3. **R8 — pendiente:** el panel de lectores perfil MFO no ha corrido sobre el sitio nuevo — la audiencia está servida en la prosa pero no verificada.
4. **R9 — pendiente:** la matriz tesis→pieza vive solo en el brief; falta publicarla (metodología) y adjuntarla al PR.
5. **R27 — pendiente:** veredictos PASA emitidos pero sin registro de rondas consignado en `constelacion/runs/AG-SITIO-ADVERSARIO/` (el directorio no existe).
6. **R35 — pendiente:** no existe el PR draft único; trabajo sin commit y en rama `claude/*` (el brief exige `sitio/redisenio-v2` fuera de `auto-merge.yml`).
7. **R36 — pendiente:** reporte de cierre al CEO no producido (Fase 5).
8. **R37 — pendiente:** `eval_lector.py` en ROJO (13 anclas colgantes era-memo tras el swap D1) y ninguna ronda de panel instrumentada para las piezas nuevas.
9. **R41 — bloqueado-por-decisión-CEO:** validación visual del CEO sobre el sistema de diseño, pendiente por diseño de la spec.
