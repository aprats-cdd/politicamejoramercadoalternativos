# Run · AG-SITIO-INGENIERO-UI · 2026-07-03 · implementación (capa D)

Implementa la spec aceptada del diseñador (D1-D11). REGLA DURA cumplida: **cero
palabras de prosa del cuerpo modificadas** — solo hoja única, chrome de
navegación y micro-copy (dueño: AG-SITIO-ESCRITOR).

## Qué se tocó

**`assets/sitio.css`** (hoja única, 16.5KB → 22.2KB, bajo el presupuesto de 40KB):
- Token `--tap-minimo: 44px`; escala `--texto-base: clamp(17px, …, 19px)`; `interpolate-size: allow-keywords`.
- `text-wrap: balance` en titulares, `pretty` en prosa; `scroll-margin-top` en anclas.
- Sistema `details.card-mas` / `details.indice-pieza` (marker propio "+", apertura animada vía `::details-content`).
- Barra de progreso `body.pieza::before` bajo `@supports (animation-timeline: scroll())`; `@view-transition { navigation: auto }` bajo `prefers-reduced-motion: no-preference`.
- Área táctil de 44px en `masthead-nav a`, `nav-retorno a`, `nav-pie a`, summaries (padding + margen negativo).
- Refs de nota y retornos `↩` con área táctil ampliada; `sup.nota-ref + sup.nota-ref` con aire anti-solape.
- Cards táctiles con overlay del link y elevación discreta solo en `@media (hover: hover)`.
- `@media print`: details forzados abiertos (el contenido no desaparece en PDF), nav/índice ocultos.

**`index.html`**: "qué te llevas" de las 4 cards → `<details class="card-mas">` (divulgación progresiva).

**4 piezas** (`separacion-de-roles`, `deuda-privada-como-renta-fija`, `due-diligence-deuda-privada`, `buscador-causas-judiciales`): `body class="pieza"`, skip-link, `nav-retorno` como link al índice, `details.indice-pieza` "En esta pieza" con los `h2` existentes, `nav-pie` táctil (volver / subir / siguiente pieza en secuencia editorial).

**`memorandum.html`**: solo `dateModified` agregado al JSON-LD (fix S03 pre-existente; documento por lo demás congelado).

## Gates (los corre el harness / AG-SITIO-VERIFICADOR, no el ingeniero)

| Gate | Resultado |
|---|---|
| `smoke_experiencia.js` (T01-T05, área táctil medida en render 390×844) | VERDE — 1ª corrida roja (41 controles <44px + 1 solape), corregida → verde |
| `eval_experiencia.py` (X01-X09) | VERDE |
| `eval_sitio.py` (S01-S09, no-regresión) | VERDE (rojos pre-existentes S03/S06/S07 cerrados honestamente) |
| `eval_constelacion.py` (C01-C06, tres leyes) | VERDE — 21 roles |

## Prosa del cuerpo modificada

**0 palabras.** Verificable: `eval_sitio.py` S06 (shingles vs corpus del memo)
y S07 (cifras) verdes; el único texto nuevo es micro-copy de navegación sin
dígitos, propiedad del escritor.
