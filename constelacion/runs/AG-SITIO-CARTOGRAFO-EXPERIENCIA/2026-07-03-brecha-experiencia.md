# Run · AG-SITIO-CARTOGRAFO-EXPERIENCIA · 2026-07-03 · informe de brecha (capa O)

Corrida 1 (fundacional de la capa de experiencia). Toda brecha lleva su medida
reproducible — el harness (`eval_experiencia.py`) re-corre las que son
deterministas; el resto declara el comando de medición.

## Mediciones del estado actual (commit 12ad0bf)

| # | Medición | Valor actual | Vara de frontera | Brecha |
|---|---|---|---|---|
| M1 | Área táctil de links de `masthead-nav` | `font-size: 0.82rem` ≈ 14px, sin padding → alto táctil ≈ 23px | ≥ 44px (WCAG 2.5.8 / HIG) | SÍ |
| M2 | Área táctil de refs de nota (`sup.nota-ref a`) | `0.72em` ≈ 12px, sin padding → ≈ 12px | ≥ 44px | SÍ (peor control del sitio) |
| M3 | Área táctil de retornos `↩` en fuentes | texto plano inline ≈ 15px | ≥ 44px | SÍ |
| M4 | Retorno al índice desde una pieza | `grep nav-retorno *.html` → `<p class="nav-retorno">Andrés Prats</p>` — texto plano, **sin link** | link táctil arriba y abajo | SÍ (crítica) |
| M5 | Navegación al pie de pieza | `grep -c nav-pie *.html` → **0 usos** (la clase existe solo en CSS) | volver / siguiente pieza / subir | SÍ (crítica: pieza = callejón sin salida) |
| M6 | Orientación dentro de una pieza (lecturas declaradas de ocho a doce minutos, seis a ocho `h2` por pieza) | sin índice de pieza, sin indicador de avance | el lector siempre sabe dónde está y cuánto queda | SÍ |
| M7 | Escala tipográfica | `--texto-base: 17px` fija en todo viewport | el texto se lee cómodo del móvil al escritorio sin zoom | SÍ (menor) |
| M8 | Capa de entrada de las cards del índice | card completa visible: kicker + título + resumen + llevas + meta (≈ 90 palabras por card, texto corrido) | la card se escanea en segundos; el detalle está a un gesto | SÍ |
| M9 | Superficie clickeable de una card | solo el título es link (`card-titulo a`) | card completa táctil | SÍ |
| M10 | Skip-link en piezas | `grep -c salto-contenido` → solo `index.html` lo tiene | todas las páginas | SÍ |
| M11 | Peso por página | index 16.5KB · piezas 18–25KB · css 16.5KB (`wc -c`) | ≤ 70KB página / ≤ 40KB hoja | NO (verde — preservar con presupuesto) |
| M12 | Requests externos | 0 (tipografías de sistema, favicon data-URI, og local) | 0 | NO (verde — preservar, R38) |
| M13 | Modo oscuro / reduced-motion / focus-visible | presentes en `sitio.css` §1/§3 | presentes | NO (verde — preservar) |
| M14 | Transición entre páginas | corte duro (sin view transitions) | transición suave same-origin bajo motion-safe | SÍ (menor) |

## Criterios de diseño de frontera (capa M — NO es medición O)

Advertencia de honestidad (fix del DD adversarial, crítico 5): lo que sigue
**no** es una medición reproducible ni una fuente doble-verificada — es el
catálogo de criterios de diseño que el diseñador (capa M) propone, derivado de
patrones observables en sitios editoriales de alto estándar (prensa financiera
de referencia global, editoriales tipográficas independientes, publicaciones
técnicas de primera línea). Se declara como criterio, no como vara medida; el
mecanismo concreto de cada criterio lo decide la spec del diseñador y el accept
del CEO, no este run. Las mediciones O de arriba (M1–M14) sí son reproducibles;
esto es insumo de diseño:

1. Tipografía fluida con medida de columna estable (≈ 60–70ch) y interlineado generoso — ya presente acá salvo la fluidez.
2. Card completa táctil con estado hover/active discreto; el título es el claim.
3. Divulgación progresiva nativa (`details/summary`) — capa de entrada escaneable, profundidad a un tap, cero JS.
4. Índice de pieza plegable ("en esta pieza") para lecturas > cinco minutos.
5. Indicador de progreso de lectura de un solo trazo (scroll-driven, CSS puro), anulado por `prefers-reduced-motion`.
6. Área táctil mínima uniforme (token de sistema), incluidas las notas al pie — el control más usado del género.
7. Salida declarada al final de cada pieza: volver / siguiente / subir.
8. View transitions same-origin bajo motion-safe — continuidad sin espectáculo.
9. `text-wrap: balance` en titulares, `pretty` en prosa.
10. Presupuesto de peso explícito como gate (no como aspiración).

## Restricción de identidad (no es brecha)

`sitio.css` §preámbulo (R41): "manifiesto minimalista… autoridad por
sobriedad". Toda corrección de brecha debe caber DENTRO de ese registro. Lo
que parezca app de consumo, marketing o gamificación queda fuera de alcance
— lo gatea el adversario (lente experiencia-como-marketing).

## Hand-off

→ AG-SITIO-DISENADOR-EXPERIENCIA consume M1–M14 + catálogo. Ninguna brecha
sin medida entra a la spec.
