# Forja · Juez de clase mundial del sitio

**Fecha:** 12-sep-2026 · **Origen:** encargo del CEO en sesión ·
**Objeto:** `index.html` (`#figura`) y `objeciones.html` ·
**Neto nuevo:** 1 rol (`AG-SITIO-JUEZ-CLASE-MUNDIAL`) + 1 prompt canónica
(`constelacion/prompts/eval-juez-clase-mundial.md`).

## Qué pidió el dueño

> «Necesito un Eval de esta página. Quienes auditan: el mejor diseñador de
> páginas web del mundo. Esto es un artefacto moderno, hecho para ser masivo.
> No es lobby. Esta página la podría haber hecho el equipo de Apple con Steve
> Jobs. En diseño, narrativa. [...] La tesis central: explicar en simple y
> claro por qué la separación funcional de roles es fundamental. Lo más
> importante: esta página y sus cuñas se harán virales, famosa entre
> políticos, think tanks, profesores de universidad, equipos de inversiones,
> abogados.»

## Encuadre (antes de forjar)

- **Tipo.** Eval de juicio sobre una página pública que ya pasó sus gates
  deterministas.
- **Objetivo, no verbo.** Medir la distancia entre la página y la mejor página
  posible sobre el tema, y devolver cierres ruteados al rol que los cierra.
- **Cuello.** La primera lectura de cuatro minutos de un lector ajeno a la
  industria: si no repite la tesis con sus palabras, nada más importa.
- **Busca antes de crear.** Existe y se reusa, no se re-crea: seis gates
  deterministas (S01-S08, X01-X09, P01-P04, L01-L04, E01-E11, D01-D05), el
  adversario (hechos, norma, aludido), el panel de lectores (qué falta para
  decidir), la capa de experiencia (mecánica móvil medida en render). En el
  catálogo canónico de Cordada, el especialista de diseño es de decks y el de
  prensa aporta el framework de ocho dimensiones por cuña, que acá se adapta.
  En ningún catálogo existe un juez de diseño y narrativa de página pública ni
  un test de cuñas y audiencias. Ese es el hueco; solo eso se forja.
- **Gate independiente.** La salida del juez ES el examen de la pieza. Al
  informe lo gatea el verificador (sobre YAML, nueve secciones, evidencia por
  puntaje, cero actores vivos) y el adversario audita severidad.
- **Output y firma.** El run se commitea. Todo cierre que toque una pieza
  publicada es checkpoint del CEO.

## Decisiones de diseño del eval

1. **La vara se traduce, no se copia.** De Apple se hereda la disciplina
   (sustracción, jerarquía, oficio en el detalle, inevitabilidad del orden);
   no el lenguaje visual ni el tono comercial. La voz de la casa manda.
2. **Dos varas que se cruzan, no se suman.** Vara Jobs (diseño y narrativa,
   21 puntos) y Vara Masiva (registro, anti-lobby, cuñas, audiencias,
   superficie de compartir, 15 puntos). Ninguna dimensión bajo 2.
3. **Cuatro vetos** que fuerzan NO-PASA aunque el puntaje alcance: tesis no
   reproducible por el lector ajeno · descartable como lobby en 30 segundos ·
   sobreafirmación en cuña o titular · superficie pública que contradice la
   pieza.
4. **Evals de stakeholder** para las cinco audiencias, cada una con su
   reacción #1 (rechazo) y #2 (adopción) por defecto.
5. **No duplica el harness.** Lo que un gate determinista debió atrapar se
   reporta aparte como fuga, con el ID del gate.
6. **Aislamiento.** El juez recibe solo la URL, sus superficies alcanzables y
   la prompt. Nunca este run ni los de otros roles.

## Observaciones previas, fuera del eval (no van al juez)

Encontradas al preparar la prompt. Quedan acá para que no se pierdan y para
calibrar al juez cuando corra:

- `og-cover.html` sigue publicado con la portada del memorándum anterior
  (composición del financiamiento en banca, «0 fund administrators», plazo
  «sin Congreso»). La raíz retiró toda cifra de mercado y el proyecto sí va
  por el Congreso. No está enlazado, pero es alcanzable: dispararía V4.
  Retirarlo o redirigirlo es edición de superficie publicada, checkpoint del
  CEO.
- La bajada abre con «No llegó por su plata. Llegó por una regla legal»:
  patrón negación-afirmación en dos oraciones, fuera del alcance de S04. Un
  juez de registro lo marcará bajo B4. El texto publicado no se reescribe por
  esto solo.

## Estado y próximo paso

Rol en `estado: propuesta`. Se promueve a `activa` con la primera corrida
aislada (informe en `runs/AG-SITIO-JUEZ-CLASE-MUNDIAL/`) y el accept del CEO
sobre el veredicto. Gates de la constelación en verde tras el registro del
rol (`eval_constelacion.py`, C01-C06).

---

## Corrida 1 del juez · 12-sep-2026 (misma jornada)

**Objeto:** `index.html` + `objeciones.html` @ `ff0e68a`. **Aislamiento:** agente nuevo,
sin el razonamiento del autor ni las corridas de otros roles; recibió la prompt canónica,
el código fuente de las siete superficies alcanzables y 40 capturas renderizadas en
Chromium (móvil 390×844 y escritorio 1440×900, claro y oscuro, primera pantalla, secuencia
completa de scroll, `#figura` de cerca, y las dos tarjetas sociales). La URL pública está
bloqueada por el proxy de la sesión; el juez evaluó el código local, idéntico al
desplegado, y lo declaró en su §9.

**Veredicto: NO-PASA** · Vara Jobs **13/21** · Vara Masiva **9/15** · veto **V4**.
Informe: `runs/AG-SITIO-JUEZ-CLASE-MUNDIAL/2026-09-12-index-objeciones.md`.

Lo que el juez sí concedió: V1 no se dispara (el lector ajeno reprodujo la tesis con un
ejemplo propio, el del puente que su diseñador no puede inspeccionar), V2 tampoco (la
declaración de interés está en la primera pantalla de las cuatro vistas y no hay voto
encubierto), y llamó a la página de objeciones «el activo mayor de la pieza» por plantear
una objeción propia contra el proyecto.

Las dos dimensiones en 1:

- **A4 · oficio.** Los marcadores del cuerpo son 1·2·3·4·7·9·10 y la lista de fuentes se
  numera sola 1-7: en pantalla, la nota «⁷» se ve como «5.». Verificado en el archivo —
  la hoja no fija numeración propia. Mismo defecto en la hermana.
- **D3 · superficie de compartir.** `og-cover.html` y `og-cover.svg` siguen servidos con
  las cifras que la raíz retiró y con la tesis anterior («sin Congreso»), que la raíz
  contradice. Es el veto V4.

**El eval funciona: encontró solo lo que esta forja anotó por fuera.** Las dos
observaciones previas registradas más arriba —las superficies heredadas y el patrón
negación-afirmación de la bajada— fueron halladas por el juez sin acceso a este run: la
primera como bloqueante con veto, la segunda bajo B4 junto a otras cuatro ocurrencias de
la familia que el harness no atrapa. La convergencia entre una observación reservada y un
juez ciego es la única evidencia honesta de que la vara mide algo.

**Deuda declarada para `AG-SITIO-VERIFICADOR` (fugas del harness que el juez reportó en
su §8; single-writer del gate, se commitean por separado):**

1. La muletilla en variante «No X. Y» (dos oraciones) pasa S04; el gate busca la forma
   literal negación-primero. Cinco ocurrencias vivas entre las dos páginas.
2. Las notas al pie se verifican por ancla (`href` ↔ `id`), no por número renderizado
   contra el marcador del cuerpo.
3. Ningún gate cubre archivos servidos que el manifest declara `asset`: `og-cover.*`
   entró al veto sin que S07 lo mirara.
4. No existe check de «afirmación sobre una jurisdicción sin nota» (el caso de Irlanda).
5. Citabilidad no exige fecha de publicación visible en la página, solo en el JSON-LD.
6. D01/D02 verifican que la objeción esté completa y en orden, no que cada eje reciba su
   veredicto: dos de seis frentes quedaron sin responder.

## Forja del elevador · 12-sep-2026 (encargo siguiente, misma sesión)

> «Crea la prompt que lleva la página al estándar de creatividad, claridad y UX de clase
> mundial. Le gusta a la izquierda chilena.»

Nace `AG-SITIO-ELEVADOR` con su prompt canónica `prompts/elevar-clase-mundial.md`. Es el
eslabón D del par: el juez mide, el elevador propone, el juez vuelve a medir ciego. El
encadenamiento es tipado — el informe del juez es el input obligatorio del elevador, y sin
informe no eleva a ciegas.

Decisiones de diseño de la prompt:

1. **Sustracción antes que adición**, con presupuesto explícito: las palabras liberadas al
   cortar son las únicas que se pueden gastar.
2. **Una sola idea creativa por página**, ejecutada completa; las descartadas se declaran
   con su razón. La segunda idea se propone aparte, no se cuela.
3. **El lector de izquierda chilena como sexta audiencia**, con su reacción #1 (la agenda
   del capital financiero, Luxemburgo como paraíso fiscal) y su #2 (romper una
   concentración, responsabilidad con nombre y garantía, más entidades bajo la CMF, ahorro
   protegido, otra puerta para pymes y regiones, la plomería en Chile). Cuatro reglas
   duras: no se cambia la tesis ni se inventan beneficios sociales; no se atacan actores;
   sus objeciones entran en su versión más fuerte; y la prueba de fuego es que ganarlo no
   puede costar ninguna de las otras cinco audiencias. El terreno común se eligió por lo
   que el texto del proyecto sostiene, no por lo que suena bien.
4. **La elevación se mide, no se declara:** re-corrida ciega del juez sobre la página
   propuesta. Si las varas no suben, la movida se revierte.

Estado: `propuesta` hasta su primera corrida. La publicación de cualquier cambio a una
pieza viva sigue siendo checkpoint del CEO.
