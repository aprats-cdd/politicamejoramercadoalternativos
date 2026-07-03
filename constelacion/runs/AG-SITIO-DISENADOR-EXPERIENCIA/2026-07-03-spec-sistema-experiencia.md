# Run · AG-SITIO-DISENADOR-EXPERIENCIA · 2026-07-03 · spec del sistema de experiencia (capa M)

Consume el informe de brecha M1–M14 del cartógrafo. Principio rector, heredado
del brief E0 (R41) y NO negociable: **autoridad por sobriedad** — la frontera
técnica sirve al registro institucional; nada que parezca app de consumo,
marketing o gamificación. Cada decisión cita la brecha que corrige.

## Decisiones de diseño (cada una → brecha)

| D# | Decisión | Corrige | Registro |
|---|---|---|---|
| D1 | Escala tipográfica fluida: `--texto-base: clamp(17px → 19px)` con la misma medida de columna | M7 | invisible: el texto simplemente respira en cada pantalla |
| D2 | Token de sistema `--tap-minimo: 44px`; lo consumen nav superior, nav de pie, summaries, refs de nota y retornos (padding + margen negativo: el área crece, la mancha tipográfica no) | M1, M2, M3 | invisible al ojo, evidente al pulgar |
| D3 | `nav-retorno` pasa de texto plano a link táctil al índice (`← Andrés Prats · publicaciones`) | M4 | mismo lugar, ahora funciona |
| D4 | `nav-pie` entra a las cuatro piezas: volver al índice · subir · siguiente pieza (secuencia editorial: separación → renta fija → due diligence → buscador → memorándum) | M5 | la pieza deja de ser callejón sin salida |
| D5 | Índice de pieza `details.indice-pieza` ("En esta pieza") tras la caja para-quién, con los `h2` existentes; cerrado por defecto — profundidad a un tap | M6 | divulgación progresiva nativa, cero JS |
| D6 | Progreso de lectura: un trazo de 3px en el borde superior, CSS puro (`animation-timeline: scroll(root)` bajo `@supports`), solo en `body.pieza`; `prefers-reduced-motion` lo anula por la regla global | M6 | un solo trazo, color acento — sobrio |
| D7 | Cards del índice: capa de entrada = kicker + título + resumen + meta; "qué te llevas" pasa a `details.card-mas` (abrir para profundizar); card completa táctil (overlay del link del título) con hover/active discreto (borde acento + 2px de elevación, solo `@media (hover:hover)`) | M8, M9 | la card seduce con el resumen; el detalle espera al tap |
| D8 | Skip-link `salto-contenido` en las cuatro piezas (hoy solo el home) | M10 | a11y, invisible salvo teclado |
| D9 | View transition same-origin (fade breve) bajo `@media (prefers-reduced-motion: no-preference)` | M14 | continuidad, no espectáculo |
| D10 | Detalles animados con `interpolate-size` + `::details-content` (degrada a apertura instantánea); `text-wrap: balance` en titulares, `pretty` en prosa; `scroll-margin` para anclas | M6, M8 | micro-calidad tipográfica |
| D11 | Presupuestos como gate: página ≤ 70KB, hoja ≤ 40KB, cero requests externos — se preservan los verdes M11–M13 | M11–M13 | la frontera no engorda el sitio |

## Prohibiciones que la spec hereda (el ingeniero no puede violarlas)

- El ingeniero-UI NO toca prosa: ni una palabra del cuerpo cambia (el copy es
  de AG-SITIO-ESCRITOR). Texto nuevo permitido: solo microcopy de navegación
  ("En esta pieza", "Qué te llevas", "Volver al índice", "Subir", "Siguiente"),
  sin dígitos (S07), sin muletilla ni "referente" (S04), sin léxico prohibido
  de la pieza del buscador.
- Hoja única (S09): todo va a `assets/sitio.css`; cero `<style>` propios.
- Cero requests externos (R38/X02). Cero JS nuevo obligatorio: toda la
  interacción es HTML/CSS nativa; el único JS del sitio sigue siendo el shim
  de anclas legadas del home.
- El memorándum queda congelado: ni su HTML ni su CSS se tocan.

## Gate de esta spec

La juzgan: AG-SITIO-LECTORES (lente móvil: "ganas de seguir leyendo"),
AG-SITIO-ADVERSARIO (lente experiencia-como-marketing: nada señalable como
spin), y el CEO (accept de identidad visual — E6). No la valida su autor.
