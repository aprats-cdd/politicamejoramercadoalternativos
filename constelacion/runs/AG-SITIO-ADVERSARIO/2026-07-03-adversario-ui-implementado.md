# Veredicto AG-SITIO-ADVERSARIO · lente experiencia-como-marketing · UI IMPLEMENTADO · 2026-07-03

Corrido por un adversario **independiente** (LEY-1: no lo corrió el ingeniero
que implementó el UI). Objeto de ataque: el código implementado
(`assets/sitio.css` + `index.html` + las 4 piezas), no la spec. Cierra el
crítico 1 del DD (lente hostil sobre el artefacto, no sobre el diseño).

## Veredicto: **PASA**

La capa es genuinamente sobria; no hay marketing donde inventarlo. "Autoridad
por sobriedad" se sostiene. Cero frases señalables (test del aludido) y cero
tells de producto-de-engagement: sin share social, sin clap/like, sin contador
de comentarios, sin "relacionados", sin popup ni barra sticky de suscripción.
Lo presente es navegación + tipografía + una scrollbar semántica. No tipa a
blog/newsletter.

## Lo que PASA explícitamente

1. **Cards táctiles / hover-lift** (`translateY(-2px)` sin box-shadow, solo bajo
   `@media (hover:hover)`, `:active` a 0, anulado por reduced-motion): afordancia
   sobria, no rebote de app. La ausencia de sombra material la salva del registro
   consumo.
2. **View transitions** (`@view-transition { navigation: auto }` bajo
   `prefers-reduced-motion: no-preference`): crossfade UA por defecto, sin custom
   slide/zoom. Continuidad, no espectáculo. Doble degradación.
3. **Micro-copy de navegación** (revisado string por string): "Siguiente: …",
   "↑ Subir", "← Todas las publicaciones", "En esta pieza". Ninguno vende,
   sobrepromete, introduce actor ni emite juicio.
4. **Divulgación progresiva**: el TOC está en `display:none` de print; la
   apertura animada degrada a instantánea bajo reduced-motion; el marcador "+"
   es tipográfico.
5. **Test del aludido sobre la capa**: los strings nuevos (nav + summaries) no
   nombran ni implican a ningún actor. Cero frases señalables introducidas.

## Watch-items (NO exigen fix hoy; son el borde donde la capa cruzaría)

- **WATCH-1 · Barra de progreso de lectura** — el margen más delgado de la capa.
  Implementada en su forma más contenida (3px, `var(--acento)` institucional,
  sin cifra ni rótulo, CSS puro bajo `@supports`, ausente en el índice, anulada
  por reduced-motion): se lee como indicador de posición, no gamificación.
  **Condición de quiebre:** cualquier `%`, contador de minutos, rótulo, mayor
  grosor o animación de color la vuelve gamificación → hallazgo duro.
- **WATCH-2 · `card-mas` en print/PDF** — hoy lo colapsado es índice y blurb
  secundario; el `@media print` fuerza su apertura en motores actuales
  (`::details-content`, Chrome 131+/FF 133+/Safari 18.4+). **Condición de
  quiebre:** si alguna vez una cifra o fuente **citable** quedara tras un
  `card-mas`, la pérdida en motores legados perjudicaría al citante → hallazgo
  duro. Regla dura derivada: nunca poner contenido citable tras un `details`.

Ambos watch-items quedan escritos como memoria del adversario para futuras
corridas.
