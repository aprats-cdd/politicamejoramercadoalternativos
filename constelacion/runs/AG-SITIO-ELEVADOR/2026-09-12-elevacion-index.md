# ELEVACIÓN · index.html + objeciones.html · corrida 1 de AG-SITIO-ELEVADOR

```yaml
run: ELEV-sitio-luxemburgo-2026-09-12
prompt: constelacion/prompts/elevar-clase-mundial.md (v0.1)
insumo: constelacion/runs/AG-SITIO-JUEZ-CLASE-MUNDIAL/2026-09-12-index-objeciones.md
veredicto_de_entrada: NO-PASA · Jobs 13/21 · Masiva 9/15 · veto V4 abierto
objeto: index.html · objeciones.html · assets/sitio.css · assets/og-sitio.svg · feed.xml
estado: PROPUESTA — árbol de trabajo editado, nada publicado, nada commiteado
espera: checkpoint del dueño (@aprats-cdd) + re-corrida ciega del juez
```

**Qué es esto.** Un paquete de propuesta. Los cinco archivos del objeto están
editados en el árbol de trabajo y no hay un solo commit, push, rama ni PR: el
dueño decide qué se aplica. `og-cover.html` y `og-cover.svg` —el veto V4— no se
tocaron: su retiro va escrito y listo para aplicar en la parte 5.

---

## 1 · Spec de elevación (capa M)

### 1.1 · Los movimientos

| # | Movimiento | Cierre del juez | Dimensión | Rol que ejecuta | Riesgo de gate · mitigación |
|---|---|---|---|---|---|
| M1 | La bajada nombra la regla: «en su arquitectura hay una regla que Chile no tiene: administrar un fondo y decidir sus inversiones pueden estar en manos distintas». La misma frase, literal, en `description`, `og:description`, JSON-LD, `assets/og-sitio.svg` y `feed.xml` | §7 fila 3 · §6 «se agranda» | B1, D3 | escritor | E08 techo 900: se financió cortando «tiene menos habitantes que el Gran Santiago» (duplicaba el H2 y era claim sin nota). Balance del párrafo: 0 palabras |
| M2 | **Las tres preguntas** como figura: los dos paneles del comparador contestan las MISMAS tres —¿quién decide? ¿quién administra? ¿quién responde?— con la misma estructura. Una sola tríada, de funciones, la del cuerpo | §7 fila 8 · §6 «se afina» · A3 costurón | A3, A2, B3 | ingeniero de UI + escritor | X07 hoja ≤40 KB: se borraron las reglas `.actor*` que el bloque reemplaza (−45 líneas) antes de escribir `.tres-preguntas`. Hoja final 38.388 B |
| M3 | «Terceros fiscalizados» baja a una línea bajo la administradora; la administradora dice «responde por sus propios deberes»; el panel «Hoy» deja de estar medio vacío (ambos paneles miden 484 px a 1440) | §7 fila 8 · A3, A4 | ingeniero de UI + jurista | D03 del steelman: la responsabilidad residual ya estaba en la hermana; agregarla a la raíz no toca ningún marcador. Verificado |
| M4 | El número visible de cada nota pasa a salir de `data-n`, igual al marcador del cuerpo. 7 sigue siendo «7.», 9 «9.», 10 «10.» | §7 fila 2 (bloqueante de oficio) | A4, D3 | ingeniero de UI | La prompt prohíbe renombrar anclas: por eso se tomó la segunda opción del juez (`list-style:none` + `data-n`) y no la renumeración. Cero ids tocados |
| M5 | La declaración dice que el proyecto es una reforma amplia y que esta página cubre una figura; y trae el eco del reparo: «Que con esa figura lleguen gestores de afuera es apuesta mía» | §7 filas 10 y 12 · C, B1 | escritor | V2 (interés en la primera pantalla): medido. A 390 px la caja arranca en y=718 de 844; a 1440 entra completa (y=587→817) |
| M6 | Seis frentes, seis veredictos: cada golpe de `objeciones.html` nombra el frente que contesta, y entran los dos que faltaban —«La frontera · No: queda abierta» y «El arbitraje · En parte: mismo perímetro» | §7 fila 4 | C, D2 | escritor + jurista | E08 techo 1150: se pagó con recortes reales (ver 1.2), no subiendo el techo. Final 1144 |
| M7 | «Los mercados profundos lo resolvieron; Chile es la excepción» sale; entra «El régimen europeo admite la misma delegación, bajo condiciones.⁹ Chile no.», con nota | §7 fila 5 | C, D1, V3 | escritor + verificador | S07: no introduce cifra. La nota 9 ya cubría el artículo 20 de la Directiva |
| M8 | Cinco muletillas «no X. Y» fuera, en las cinco superficies donde vivían (bajada, description, feed, `#cadauno`, nota 9, y ×2 en la hermana) | §7 fila 9 | B4 | escritor | S04 pasa; E10 (advisory) quedó en cero por primera vez: antes marcaba «fronteras, no una» |
| M9 | El separador de la etiqueta del hero viaja dentro de su segmento (`span::after`): ya no desaparece bajo 34 rem ni queda huérfano al principio de línea | §7 fila 15 | A2 | ingeniero de UI | Ninguno. Se borran los `<span class="sep">` del HTML (−2 nodos por página) |
| M10 | `.indice-pieza a` pasa de `inline-block` a `block`: el «1.» deja de caer en la segunda línea en móvil | §7 fila 14 | A4 | ingeniero de UI | Smoke T01: el área táctil sube (padding 0,35→0,5 rem). Medido VERDE |
| M11 | `.nav-pie` baja de tres enlaces a uno por página, y el tercer enlace deja de ser «RSS» acá y «Fuentes» allá | §7 filas 13 y 17 (parcial) | A1, A4 | curador de diseño | X06 exige `class="nav-pie"`: por eso se reduce, no se elimina. Ver el cierre rechazado en 5.2 |
| M12 | La tira de estado pierde la voz monoespaciada (cuarta tipografía) y dice «Hasta 6 meses» | §7 filas 16 y 21 · A2, B3 | ingeniero de UI + escritor | S07: el token «6» ya estaba en el registro |
| M13 | La nota 8 de la hermana deja de nombrar a la administradora sancionada y a las dos auditoras: cita por resolución, número y año | §7 fila 22 | B4, D5 | jurista | D05 sigue PARCIAL por la lista privada ausente, igual que antes; el barrido completo lo corre el operador |
| M14 | Fecha de publicación visible en el colofón de las dos páginas; bloque `.solo-impresion` con la URL canónica que aparece únicamente en papel; la barra de progreso deja de imprimirse | §7 fila 23 · STEP 5 | D3, UX | escritor + ingeniero de UI | Ninguno: el colofón va después de `#fuentes`, fuera del conteo y del barrido de cifras |
| M15 | La tarjeta social corrige «y es segundo domicilio» → la frase nueva completa, y las dos páginas declaran `og:image:width`, `height` y `alt` | §7 fila 7 (parcial) | A4, D3 | curador de diseño | X02: sigue siendo SVG local, cero requests. El PNG queda pendiente — ver 5.3 |
| M16 | Área táctil de las refs de nota en bloques de tipografía chica (tira, declaración, cita, matices): sube sobre 32 px | hallazgo propio (§9 del juez: «no navegué») | A4 | ingeniero de UI | Tres de los cuatro descalces eran preexistentes. Smoke T02 medido: VERDE |

### 1.2 · Lo que salió primero (nada entró sin que algo saliera)

| Qué se cortó | Dónde | Palabras liberadas | Por qué |
|---|---|---|---|
| «Irlanda hizo lo mismo, y tampoco tenía el capital» | `#luxemburgo` | 9 | Afirmación sobre una tercera jurisdicción sin nota ni mención en `#metodo`. El juez la pedía con fuente o cortada; no tengo fuente |
| «tiene menos habitantes que el Gran Santiago» | bajada + 4 superficies | 8 | Claim sin nota; duplicaba «un país chico» del H2; financió la cláusula que nombra la regla |
| «Casi nadie lo hace» | `#falta` | 4 | Vaguedad sin nota. La cita del Mensaje, dos párrafos abajo, dice lo mismo con fuente |
| «Por eso no entran» | `#falta` | 4 | Inferencia presentada como hecho (cuña 5 del juez, tests 2 y 7 en ✗) |
| «Ojo: el texto no menciona firmas extranjeras; que lleguen es apuesta mía» | `#cadauno` | 12 | El reparo sube a la declaración, donde el juez lo pedía (pantalla 1, no pantalla 6). «Ojo:» era además un tic marcado en B4 |
| «Lo que atrae la plata es lo mismo que la cuida: no hay Luxemburgo sin los estándares de Luxemburgo» | `.ancla-idea` de `#figura` | 19 | B2: soldadura no preparada — nada antes dice que los estándares atraen dinero. Suena a eslogan |
| «y un regulador que la región respeta» | `#falta` | 7 | Comparación regional sin fuente (B4 vaguedad + cuña 11, test 2 en ±) |
| «no texto del proyecto» | `#cadauno` | 4 | Muletilla; «Lo que sigue es lectura mía» ya marca el juicio |
| Tarjeta «Terceros fiscalizados» del comparador | `#figura` | ~6 | Tríada de entidades contra tríada de funciones (A3). Baja a una línea bajo la administradora |
| Dos de los tres enlaces de `.nav-pie`, en ambas páginas | pie | ~4 | Duplicaban el colofón y la caja inmediatamente superior |
| Reglas `.actor`, `.actor-nombre`, `.actor-carga`, `.actor-carga li`, `::before` | `assets/sitio.css` | 45 líneas de CSS | Código muerto desde M2 |
| En la hermana: intro del bloque de objeción, colas de los golpes 1-4 y claves largas | `objeciones.html` | 55 | Grasa real. **Ninguna concesión, ningún eje del steelman y ningún «no lo sé» se tocó** |

**Presupuesto.** `index.html` 897 → **881 / 900**. `objeciones.html` 1.121 → **1.144 / 1.150**.
Ningún techo se movió; el manifest editorial no se tocó.

### 1.3 · La única idea creativa

**Las tres preguntas.** Un fondo obliga a contestar tres: ¿quién decide? ¿quién
administra? ¿quién responde? El motivo abre en `#falta` («La ley chilena las
contesta con un solo nombre»), **es** la estructura del comparador —los dos
paneles contestan las mismas tres, misma rejilla, distinto contenido— y cierra
en la frase-ancla de `#figura`.

Se ejecuta completa, en un solo componente, sin requests, temable, y hace tres
trabajos a la vez que antes necesitaban tres arreglos distintos:

- **es argumento, no adorno**: a la izquierda el mismo nombre tres veces, a la
  derecha tres nombres. La concentración se ve antes de leerse;
- **resuelve el costurón A3**: una sola tríada, de funciones, la misma en el
  texto y en la figura;
- **resuelve el A2**: los dos paneles miden exactamente lo mismo (484 px a
  1440), así que «Hoy» deja de estar medio vacío.

Descartadas, y por qué:

| Candidata | Por qué no |
|---|---|
| `#figura` como diagrama SVG inline | La tesis es una asignación de responsabilidad, no una topología. Un diagrama de cajas y flechas obliga a inventar una jerarquía que el texto no afirma, y a 390 px un SVG de tres nodos degrada peor que una rejilla de texto. El juez ya daba A3=2 con la tabla: el problema era la tríada, no el medio |
| La cuña principal como pieza tipográfica capturable | Es marketing de cita. Y la pieza ya tiene `.ancla-idea`: agregar un segundo tratamiento tipográfico grande en la misma página rompe «una idea por pantalla» |
| Tarjeta «misma región, distinta regla» (Chile/Luxemburgo lado a lado, sin cifras) | Un segundo comparador compitiendo con el primero. Y la comparación honesta es la que la hermana concede «en parte»: ponerla en la raíz sin el matiz sería el veto V3 servido en bandeja |
| Hilo de las tres preguntas abriendo ARRIBA de la tira de estado | Empujaba `#declaracion` fuera de la primera pantalla móvil. Eso enciende V2. El motivo entra en `#falta`, sin costo vertical sobre el fold |

---

## 2 · Parche (capa D)

Los cinco archivos ya están escritos en el árbol de trabajo. Cero commits.
Para revertir: `git checkout -- index.html objeciones.html assets/sitio.css assets/og-sitio.svg feed.xml`.

### 2.1 · El porqué del copy nuevo, párrafo por párrafo

| Dónde | Copy nuevo | Porqué (una línea) |
|---|---|---|
| `.pieza-bajada` | «Luxemburgo es el segundo domicilio de fondos del mundo, y en su arquitectura hay una regla que Chile no tiene: administrar un fondo y decidir sus inversiones pueden estar en manos distintas. Este proyecto la crea. **Es la tesis de esta página, y la firmo.**» | Nombra la regla en los diez segundos (B1) y deja de ser monocausal: describe arquitectura, que es lo que la nota 9 sostiene, no una causa que la hermana concede «en parte» |
| `#declaracion` | «…El proyecto reforma muchas materias; esta página cubre una, el gestor de inversiones, y no recomienda aprobarlo ni rechazarlo. Que con esa figura lleguen gestores de afuera es apuesta mía.» | Desarma la contradicción aparente entre «la firmo» y «no recomienda nada» (C), y sube el reparo de la apuesta de la pantalla 6 a la 1 |
| `#falta`, párrafo del mecanismo | «Un fondo obliga a contestar tres preguntas: quién decide las inversiones, quién administra el vehículo —contabilidad, valorización, informar al que puso la plata— y quién responde si algo sale mal. La ley chilena las contesta con un solo nombre.» | Enuncia el motivo con la misma tríada que usará la figura, conserva la definición de «administrar», y es más corto que lo que reemplaza |
| `#falta`, cierre comparado | «Brasil separó estos dos oficios hace una década…¹⁰ El régimen europeo admite la misma delegación, bajo condiciones.⁹ Chile no.» | Dice exactamente lo que las notas sostienen: dos regímenes nombrados con fuente, sin generalizar a «los mercados profundos» |
| `#figura`, comparador | Dos paneles, tres preguntas cada uno; la administradora «verifica al gestor; contabilidad y valorización pueden ir a terceros fiscalizados³»; «¿Quién responde? · **Cada uno por lo suyo** · El gestor por sus decisiones; la administradora por sus propios deberes²» | Una sola tríada, de funciones; la responsabilidad residual de la administradora deja de vivir solo en la hermana (salvedad (a) del abogado) |
| `.ancla-idea` de `#figura` | «Separar al que decide del que administra deja a alguien obligado a decir «esto no me calza». Es la pieza que Luxemburgo escribió, Chile no tiene y este proyecto crea.» | La cuña que lleva la tesis entera —regla, mecanismo, Luxemburgo, la carencia y el proyecto— que el juez declaró inexistente (D1) |
| `objeciones.html`, tesis de la respuesta | «Seis frentes, seis veredictos. Tres los respondo con el texto en la mano; los otros tres, en parte o nada.» | Promete la cobertura frente a frente que el juez echó de menos, y la promesa es verificable contando los golpes |
| `objeciones.html`, golpe «La frontera · No: queda abierta» | «El contenido mínimo del contrato lo fijará una norma que todavía no se dicta. Sin ese texto no puedo mostrar dónde termina el ámbito del encargo. Es el frente más fuerte, y queda en pie.» | El frente que la raíz llama «la principal» recibe veredicto, y el veredicto es que no se responde |
| `objeciones.html`, golpe «El arbitraje · En parte: mismo perímetro» | «Si el gestor es persona relacionada, el reglamento interno debe decirlo,² y queda bajo las mismas exigencias. Qué conductas quedan prohibidas y cuáles solo divulgadas no lo puedo mapear sin el texto vigente a la vista.» | Concede lo que el texto no alcanza a cerrar, sin inventar el artículo que haría falta |
| `objeciones.html`, nota 8 | «CMF, Resolución Exenta N° 10.950, procedimiento sancionatorio contra una administradora general de fondos, 2024… las dos auditorías independientes que la CMF encargó… la razón social no se escribe acá, y la resolución basta para ubicarlo.» | La casa declara «arquitecturas, jamás actores»: la resolución identifica el caso sin escribir tres razones sociales |

### 2.2 · Diff unificado

> **Una línea va redactada.** El diff de `objeciones.html` incluye, como línea
> eliminada, la nota 8 vieja con tres razones sociales. Este repo es público:
> transcribirlas acá publicaría exactamente lo que el movimiento M13 retira de la
> página. Van entre corchetes. Por eso este bloque sirve para revisar, no para
> `git apply`: los cambios ya están escritos en el árbol de trabajo.

```diff
diff --git a/assets/og-sitio.svg b/assets/og-sitio.svg
index 8a72dee..357035d 100644
--- a/assets/og-sitio.svg
+++ b/assets/og-sitio.svg
@@ -1,12 +1,13 @@
 <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
   <rect width="1200" height="630" fill="#FCFBF7"/>
   <rect x="0" y="0" width="14" height="630" fill="#1C4B43"/>
-  <text x="90" y="112" font-family="ui-monospace, Consolas, monospace" font-size="19" letter-spacing="2" fill="#6B6B66">ANDRÉS PRATS</text>
-  <text x="90" y="212" font-family="Georgia, 'Times New Roman', serif" font-size="60" font-weight="700" fill="#1B1E24">Chile puede ser el Luxemburgo</text>
-  <text x="90" y="288" font-family="Georgia, 'Times New Roman', serif" font-size="60" font-weight="700" fill="#1C4B43">de América Latina</text>
-  <rect x="90" y="336" width="120" height="3" fill="#1C4B43"/>
-  <text x="90" y="404" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="26" fill="#1B1E24">Luxemburgo tiene menos habitantes que el Gran Santiago y es</text>
-  <text x="90" y="442" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="26" fill="#1B1E24">segundo domicilio de fondos del mundo. La regla legal que</text>
-  <text x="90" y="480" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="26" fill="#1B1E24">lo explica es la que este proyecto quiere crear en Chile.</text>
-  <text x="90" y="562" font-family="ui-monospace, Consolas, monospace" font-size="19" letter-spacing="2" fill="#1C4B43">PROYECTO DE LEY · MERCADO DE CAPITALES · CHILE 2026</text>
+  <text x="90" y="106" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="19" letter-spacing="2" fill="#6B6B66">ANDRÉS PRATS</text>
+  <text x="90" y="204" font-family="Georgia, 'Times New Roman', serif" font-size="60" font-weight="700" fill="#1B1E24">Chile puede ser el Luxemburgo</text>
+  <text x="90" y="280" font-family="Georgia, 'Times New Roman', serif" font-size="60" font-weight="700" fill="#1C4B43">de América Latina</text>
+  <rect x="90" y="326" width="120" height="3" fill="#1C4B43"/>
+  <text x="90" y="392" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="26" fill="#1B1E24">Luxemburgo es el segundo domicilio de fondos del mundo, y en</text>
+  <text x="90" y="430" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="26" fill="#1B1E24">su arquitectura hay una regla que Chile no tiene: administrar un</text>
+  <text x="90" y="468" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="26" fill="#1B1E24">fondo y decidir sus inversiones pueden estar en manos distintas.</text>
+  <text x="90" y="506" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="26" fill="#1B1E24">Este proyecto la crea. Es la tesis de esta página, y la firmo.</text>
+  <text x="90" y="570" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="19" letter-spacing="2" fill="#1C4B43">PROYECTO DE LEY · MERCADO DE CAPITALES · CHILE 2026</text>
 </svg>
diff --git a/assets/sitio.css b/assets/sitio.css
index ca97863..fe24cda 100644
--- a/assets/sitio.css
+++ b/assets/sitio.css
@@ -495,6 +495,9 @@ details.indice-pieza[open]::details-content { block-size: auto; }
   text-align: right;
 }
 
+/* la nav de pie quedó en un solo paso: el enlace se ancla al borde derecho */
+.nav-pie .nav-pie-siguiente:only-child { margin-left: auto; margin-right: -0.5rem; }
+
 /* ---------- 5 · Header de pieza ---------- */
 
 .pieza-header {
@@ -565,8 +568,8 @@ details.indice-pieza[open]::details-content { block-size: auto; }
 .indice-pieza a {
   color: var(--tinta);
   text-decoration-color: var(--regla);
-  display: inline-block;
-  padding: 0.35rem 0;
+  display: block;
+  padding: 0.5rem 0;
 }
 
 .indice-pieza a:hover { color: var(--acento); text-decoration-color: var(--acento); }
@@ -793,9 +796,24 @@ details.indice-pieza[open]::details-content { block-size: auto; }
   margin: 0 0 1rem;
 }
 
-.fuentes ol { padding-left: 1.4rem; }
+.fuentes ol { list-style: none; padding-left: 2.3rem; margin-left: 0; }
 .fuentes li { margin-bottom: 0.6rem; }
 
+/* El número visible de la nota es el marcador que el cuerpo anuncia, no la
+   posición en la lista. Sin esto, el «7» del cuerpo aterriza en una nota
+   rotulada «5.» y el ancla funciona pero el ojo no. */
+.fuentes li[data-n] { position: relative; }
+
+.fuentes li[data-n]::before {
+  content: attr(data-n) ".";
+  position: absolute;
+  left: -2.3rem;
+  width: 1.9rem;
+  text-align: right;
+  font-variant-numeric: tabular-nums;
+  color: var(--gris);
+}
+
 /* retornos y refs de nota: el control más usado del género gana área táctil
    sin mover el texto (padding + margen negativo — D2, corrige M2/M3) */
 .fuentes .retorno {
@@ -821,6 +839,20 @@ sup.nota-ref a {
   margin: -1.35em -0.55em;
 }
 
+/* La ref hereda el cuerpo de su anfitrión: en los bloques de tipografía chica
+   (tira de estado, declaración de interés, matices de la figura) el
+   multiplicador en em la deja bajo el mínimo táctil de 32px que mide el smoke.
+   Se compensa el multiplicador; el interlineado no se mueve. */
+.tira-estado .glosa sup.nota-ref a,
+.quien-escribe sup.nota-ref a,
+.cita-grande cite sup.nota-ref a,
+.tres-preguntas .matiz sup.nota-ref a {
+  padding-top: 1.9em;
+  padding-bottom: 1.9em;
+  margin-top: -1.9em;
+  margin-bottom: -1.9em;
+}
+
 /* resaltar la nota destino al llegar por ancla */
 .fuentes li:target { background: var(--nota); outline: 1px solid var(--regla); padding: 0.25rem 0.4rem; }
 
@@ -1047,6 +1079,9 @@ sup.nota-ref a {
 
 .colofon .disclaimer { margin-top: 0.9rem; }
 
+/* el papel se separa de su URL: en pantalla no aparece, impreso sí */
+.solo-impresion { display: none; }
+
 /* ============================================================
    17 · Capa landing (12-sep-2026)
    ------------------------------------------------------------
@@ -1089,16 +1124,20 @@ sup.nota-ref a {
   color: var(--acento);
   display: flex;
   flex-wrap: wrap;
-  gap: 0.35rem 0.9rem;
+  gap: 0.35rem 0.5rem;
   margin-bottom: 1rem;
 }
 
-.hero-etiqueta .sep { color: var(--regla); }
+/* El separador viaja dentro del segmento que lo precede: no queda huérfano
+   al principio de una línea ni desaparece cuando la etiqueta se apila. */
+.hero-etiqueta > span:not(:last-child)::after {
+  content: "\00B7";
+  color: var(--regla);
+  margin-left: 0.5rem;
+}
 
 @media (max-width: 34rem) {
-  /* apilada, el "/" queda colgando al final de cada línea */
-  .hero-etiqueta .sep { display: none; }
-  .hero-etiqueta { gap: 0.2rem 0.8rem; }
+  .hero-etiqueta { gap: 0.2rem 0.5rem; }
 }
 
 .hero h1 {
@@ -1140,8 +1179,8 @@ sup.nota-ref a {
 
 .tira-estado dt,
 .tira-estado .valor {
-  font-family: var(--mono);
-  font-size: 1.15rem;
+  font-family: var(--sans);
+  font-size: 1.05rem;
   font-weight: 700;
   color: var(--tinta);
   display: block;
@@ -1221,45 +1260,48 @@ sup.nota-ref a {
 
 .comparador-panel.es-propuesta .comparador-titulo { color: var(--acento); }
 
-/* cada actor del vehículo, con lo que carga */
-.actor {
-  border: 1px solid var(--regla);
-  background: var(--papel);
-  padding: 0.7rem 0.85rem;
-  margin-bottom: 0.6rem;
-}
+/* Las tres preguntas: el motivo de la página dentro de la figura.
+   Los dos paneles contestan LAS MISMAS tres preguntas —misma estructura,
+   distinto contenido— para que la diferencia se lea sin prosa de apoyo:
+   hoy un solo nombre tres veces; con el proyecto, tres nombres. Una sola
+   tríada, de funciones, la misma que enuncia el cuerpo. */
+.tres-preguntas { margin: 0 0 1rem; }
 
-.actor-nombre {
+.tres-preguntas dt {
   font-family: var(--sans);
-  font-size: 0.88rem;
+  font-size: 0.74rem;
   font-weight: 700;
-  color: var(--tinta);
-  display: block;
-  margin-bottom: 0.3rem;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: var(--gris);
+  margin-top: 0.9rem;
+  padding-top: 0.9rem;
+  border-top: 1px solid var(--regla);
 }
 
-.actor-carga {
-  font-family: var(--sans);
-  font-size: 0.8rem;
-  color: var(--gris);
-  margin: 0;
-  line-height: 1.45;
-  list-style: none;
-  padding: 0;
+.tres-preguntas dt:first-of-type {
+  margin-top: 0;
+  padding-top: 0;
+  border-top: 0;
 }
 
-.actor-carga li {
-  margin: 0 0 0.15rem;
-  padding-left: 0.85rem;
-  position: relative;
+.tres-preguntas dd {
+  font-family: var(--sans);
+  font-size: 0.95rem;
+  line-height: 1.4;
+  color: var(--tinta);
+  margin: 0.3rem 0 0;
 }
 
-.actor-carga li::before {
-  content: "·";
-  position: absolute;
-  left: 0.2rem;
-  color: var(--acento);
-  font-weight: 700;
+.tres-preguntas dd b { font-weight: 700; }
+
+.tres-preguntas .matiz {
+  display: block;
+  font-size: 0.8rem;
+  font-weight: 400;
+  line-height: 1.45;
+  color: var(--gris);
+  margin-top: 0.2rem;
 }
 
 .comparador-cierre {
@@ -1612,4 +1654,16 @@ sup.nota-ref a {
   }
 
   .propuesta-autor { border-left-width: 4pt; }
+
+  /* la barra de progreso es un control de pantalla: no se imprime */
+  body.pieza::before { display: none; }
+
+  /* el lector que imprime se queda con la dirección de la página */
+  .solo-impresion {
+    display: block;
+    font-family: var(--sans);
+    font-size: 9pt;
+    color: #444;
+    overflow-wrap: anywhere;
+  }
 }
diff --git a/feed.xml b/feed.xml
index fd944eb..8db5142 100644
--- a/feed.xml
+++ b/feed.xml
@@ -11,7 +11,7 @@
       <link>https://aprats-cdd.github.io/politicamejoramercadoalternativos/</link>
       <guid>https://aprats-cdd.github.io/politicamejoramercadoalternativos/</guid>
       <pubDate>Sat, 12 Sep 2026 12:00:00 +0000</pubDate>
-      <description>Luxemburgo tiene menos habitantes que el Gran Santiago y es el segundo domicilio de fondos del mundo. No llegó por su plata: llegó por una regla legal que separa a quien administra un fondo de quien decide sus inversiones. El proyecto de reforma al mercado de capitales crea esa figura en Chile — el gestor de inversiones. Qué dice el texto, qué se abre y cuáles son las objeciones.</description>
+      <description>Luxemburgo es el segundo domicilio de fondos del mundo, y en su arquitectura hay una regla que Chile no tiene: administrar un fondo y decidir sus inversiones pueden estar en manos distintas. El proyecto de reforma al mercado de capitales crea esa figura en Chile — el gestor de inversiones. Qué dice el texto, qué se abre y cuáles son las objeciones, frente por frente.</description>
     </item>
   </channel>
 </rss>
diff --git a/index.html b/index.html
index 22fc90d..1fa1621 100644
--- a/index.html
+++ b/index.html
@@ -4,15 +4,18 @@
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <title>Chile puede ser el Luxemburgo de América Latina · Andrés Prats</title>
-<meta name="description" content="Luxemburgo tiene menos habitantes que el Gran Santiago y es el segundo domicilio de fondos del mundo. No llegó por su plata. Llegó por una regla legal que Chile no tiene, y que el proyecto de reforma al mercado de capitales crea. Explicado en cuatro minutos.">
+<meta name="description" content="Luxemburgo es el segundo domicilio de fondos del mundo. En su arquitectura hay una regla que Chile no tiene: administrar un fondo y decidir sus inversiones pueden estar en manos distintas. El proyecto de reforma al mercado de capitales la crea. Explicado en cuatro minutos.">
 <meta name="author" content="Andrés Prats">
 <link rel="canonical" href="https://aprats-cdd.github.io/politicamejoramercadoalternativos/">
 <meta property="og:title" content="Chile puede ser el Luxemburgo de América Latina">
-<meta property="og:description" content="Luxemburgo tiene menos habitantes que el Gran Santiago y es el segundo domicilio de fondos del mundo. La pieza legal que lo explica es la que el proyecto de reforma al mercado de capitales quiere crear en Chile.">
+<meta property="og:description" content="Luxemburgo es el segundo domicilio de fondos del mundo. En su arquitectura hay una regla que Chile no tiene: administrar un fondo y decidir sus inversiones pueden estar en manos distintas. Este proyecto la crea. Es la tesis de esta página, y la firmo.">
 <meta property="og:type" content="article">
 <meta property="og:locale" content="es_CL">
 <meta property="og:url" content="https://aprats-cdd.github.io/politicamejoramercadoalternativos/">
 <meta property="og:image" content="https://aprats-cdd.github.io/politicamejoramercadoalternativos/assets/og-sitio.svg">
+<meta property="og:image:width" content="1200">
+<meta property="og:image:height" content="630">
+<meta property="og:image:alt" content="Chile puede ser el Luxemburgo de América Latina. La regla legal que Chile no tiene: administrar un fondo y decidir sus inversiones pueden estar en manos distintas.">
 <meta name="twitter:card" content="summary_large_image">
 <link rel="alternate" type="application/rss+xml" title="Andrés Prats · RSS" href="feed.xml">
 <link rel="stylesheet" href="assets/sitio.css">
@@ -22,7 +25,7 @@
   "@context": "https://schema.org",
   "@type": "Article",
   "headline": "Chile puede ser el Luxemburgo de América Latina",
-  "description": "Proyecto de ley en tramitación, no vigente. Luxemburgo tiene menos habitantes que el Gran Santiago y es el segundo domicilio de fondos del mundo. La pieza legal que lo explica es la que el proyecto de reforma al mercado de capitales quiere crear en Chile.",
+  "description": "Proyecto de ley en tramitación, no vigente. Luxemburgo es el segundo domicilio de fondos del mundo. En su arquitectura hay una regla que Chile no tiene: administrar un fondo y decidir sus inversiones pueden estar en manos distintas. Este proyecto la crea. Es la tesis de esta página, y la firmo.",
   "author": { "@type": "Person", "name": "Andrés Prats" },
   "inLanguage": "es",
   "datePublished": "2026-09-12",
@@ -37,12 +40,12 @@
 
   <header class="hero">
     <p class="hero-etiqueta">
-      <span>Proyecto de ley</span><span class="sep" aria-hidden="true">/</span>
-      <span>Mercado de capitales</span><span class="sep" aria-hidden="true">/</span>
+      <span>Proyecto de ley</span>
+      <span>Mercado de capitales</span>
       <span>Chile, 2026</span>
     </p>
     <h1>Chile puede ser el Luxemburgo de América Latina</h1>
-    <p class="pieza-bajada">Luxemburgo tiene menos habitantes que el Gran Santiago y es el segundo domicilio de fondos del mundo. No llegó por su plata. Llegó por una regla legal que Chile no tiene, y que este proyecto crea. <strong>Es la tesis de esta página, y la firmo.</strong></p>
+    <p class="pieza-bajada">Luxemburgo es el segundo domicilio de fondos del mundo, y en su arquitectura hay una regla que Chile no tiene: administrar un fondo y decidir sus inversiones pueden estar en manos distintas. Este proyecto la crea. <strong>Es la tesis de esta página, y la firmo.</strong></p>
   </header>
 
   <ul class="tira-estado" id="cuando">
@@ -55,14 +58,14 @@
       <span class="glosa">En tramitación. El texto puede cambiar</span>
     </li>
     <li>
-      <span class="valor">6 meses</span>
+      <span class="valor">Hasta 6 meses</span>
       <span class="glosa">Aprobada la ley, el régimen todavía no rige: empieza cuando la CMF publique sus normas<sup class="nota-ref"><a href="#fn7" id="ref-fn7">7</a></sup></span>
     </li>
   </ul>
 
   <aside class="quien-escribe" id="declaracion">
     <span class="quien-escribe-titulo"><svg class="logo-mark logo-mark--mini" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><rect width="100" height="100" rx="16"/><text x="50" y="68" text-anchor="middle">AP</text></svg> Quién escribe esto y qué gana</span>
-    <p>Soy Andrés Prats, socio fundador de un gestor de deuda privada que opera en Chile. Tengo interés económico directo: si el proyecto se aprueba, una firma como la mía podría ser designada gestora de un fondo y cobrar con cargo al fondo, algo que el artículo 16 vigente prohíbe.<sup class="nota-ref"><a href="#fn1" id="ref-fn1">1</a></sup> El mismo cambio abre la puerta a competidores mayores. Escribo a título personal, y esta página no recomienda aprobar ni rechazar nada.</p>
+    <p>Soy Andrés Prats, socio fundador de un gestor de deuda privada que opera en Chile. Tengo interés económico directo: si el proyecto se aprueba, una firma como la mía podría ser designada gestora y cobrar con cargo al fondo, algo que el artículo 16 vigente prohíbe.<sup class="nota-ref"><a href="#fn1" id="ref-fn1">1</a></sup> El mismo cambio abre la puerta a competidores mayores. El proyecto reforma muchas materias; esta página cubre una, el gestor de inversiones, y no recomienda aprobarlo ni rechazarlo. Que con esa figura lleguen gestores de afuera es apuesta mía.</p>
   </aside>
 
   <details class="indice-pieza">
@@ -84,73 +87,62 @@
 
   <p class="ancla-idea">La plomería se queda en casa. El talento viene de donde sea.</p>
 
-  <p>Eso es lo que captura un domicilio: administradores, custodios, auditores, abogados. El ecosistema se queda aunque el gestor esté a doce mil kilómetros. Irlanda hizo lo mismo, y tampoco tenía el capital.</p>
+  <p>Eso es lo que captura un domicilio: administradores, custodios, auditores, abogados. El ecosistema se queda aunque el gestor esté a doce mil kilómetros.</p>
 
   <h2 id="falta">Lo que a Chile le falta</h2>
 
-  <p>Chile tiene lo que a Luxemburgo le faltaba: un ahorro previsional profundo y un regulador que la región respeta. Le falta la pieza legal.</p>
+  <p>Chile tiene lo que a Luxemburgo le faltaba: un ahorro previsional profundo. Le falta la pieza legal.</p>
 
-  <p>Un fondo necesita que alguien decida en qué invertir, alguien administre —contabilidad, valorización, informar al que puso la plata— y alguien responda si algo sale mal. La ley chilena hace que una sola entidad cargue con las tres.</p>
+  <p>Un fondo obliga a contestar tres preguntas: quién decide las inversiones, quién administra el vehículo —contabilidad, valorización, informar al que puso la plata— y quién responde si algo sale mal. La ley chilena las contesta con un solo nombre.</p>
 
-  <p>Son tres artículos. El <strong>15</strong> declara indelegable la responsabilidad de administrar. El <strong>16</strong> obliga a que al especialista lo pague la administradora, nunca el fondo. El <strong>17</strong> la deja respondiendo por decisiones que tomó otro.<sup class="nota-ref"><a href="#fn1" id="ref-fn1b">1</a></sup> Contratar a un especialista cuesta y no libera. Casi nadie lo hace.</p>
+  <p>Son tres artículos. El <strong>15</strong> declara indelegable la responsabilidad de administrar. El <strong>16</strong> obliga a que al especialista lo pague la administradora, nunca el fondo. El <strong>17</strong> la deja respondiendo por decisiones que tomó otro.<sup class="nota-ref"><a href="#fn1" id="ref-fn1b">1</a></sup> Contratar a un especialista cuesta y no libera.</p>
 
-  <p>Para una firma global, entrar a Chile hoy significa montar una administradora completa. Por eso no entran.</p>
+  <p>Para una firma global, entrar a Chile hoy significa montar una administradora completa.</p>
 
   <blockquote class="cita-grande">
     <p>«…sigue expuesta a responder por decisiones de inversión que no toma ella misma, <span class="destaca">lo que ha impedido en la práctica el surgimiento de un mercado de gestores de inversión especializados</span>.»</p>
     <cite>Mensaje presidencial N° 166-374, el diagnóstico del propio Gobierno<sup class="nota-ref"><a href="#fn1" id="ref-fn1c">1</a></sup></cite>
   </blockquote>
 
-  <p>La rareza está de este lado. Brasil separó estos dos oficios hace una década, y ahí el gestor es prestador esencial igual que el administrador. Los mercados profundos lo resolvieron; Chile es la excepción.<sup class="nota-ref"><a href="#fn10" id="ref-fn10">10</a></sup></p>
+  <p>La rareza está de este lado. Brasil separó estos dos oficios hace una década, y ahí el gestor es prestador esencial igual que el administrador.<sup class="nota-ref"><a href="#fn10" id="ref-fn10">10</a></sup> El régimen europeo admite la misma delegación, bajo condiciones.<sup class="nota-ref"><a href="#fn9" id="ref-fn9b">9</a></sup> Chile no.</p>
 
   <h2 id="figura">Lo que el proyecto crea</h2>
 
-  <p>El <strong>gestor de inversiones</strong>: un tercero al que la administradora puede encomendarle la cartera, inscrito y fiscalizado por la CMF, que responde por sus decisiones.<sup class="nota-ref"><a href="#fn2" id="ref-fn2">2</a></sup></p>
+  <p>El <strong>gestor de inversiones</strong>: un tercero al que la administradora puede encomendarle la cartera del fondo, en todo o en parte.<sup class="nota-ref"><a href="#fn2" id="ref-fn2">2</a></sup></p>
 
   <div class="comparador ancho">
     <div class="comparador-panel es-hoy">
       <span class="comparador-titulo">Hoy</span>
-      <div class="actor">
-        <span class="actor-nombre">Administradora general de fondos</span>
-        <ul class="actor-carga">
-          <li>Decide las inversiones</li>
-          <li>Administra el fondo</li>
-          <li>Responde por todo, incluso por decisiones ajenas</li>
-        </ul>
-      </div>
+      <dl class="tres-preguntas">
+        <dt>¿Quién decide?</dt>
+        <dd><b>La administradora</b></dd>
+        <dt>¿Quién administra?</dt>
+        <dd><b>La administradora</b></dd>
+        <dt>¿Quién responde?</dt>
+        <dd><b>La administradora</b><span class="matiz">Incluso por decisiones que no tomó</span></dd>
+      </dl>
       <p class="comparador-cierre">Una sola mano carga con todo.</p>
     </div>
 
     <div class="comparador-panel es-propuesta">
       <span class="comparador-titulo">Con el proyecto</span>
-      <div class="actor">
-        <span class="actor-nombre">Gestor de inversiones</span>
-        <ul class="actor-carga">
-          <li>Decide y responde por esas decisiones</li>
-          <li>Inscrito y fiscalizado por la CMF, con garantía propia</li>
-        </ul>
-      </div>
-      <div class="actor">
-        <span class="actor-nombre">Administradora</span>
-        <ul class="actor-carga">
-          <li>Administra el fondo y verifica al gestor</li>
-        </ul>
-      </div>
-      <div class="actor">
-        <span class="actor-nombre">Terceros fiscalizados</span>
-        <ul class="actor-carga">
-          <li>Contabilidad, valorización, control interno<sup class="nota-ref"><a href="#fn3" id="ref-fn3">3</a></sup></li>
-        </ul>
-      </div>
+      <dl class="tres-preguntas">
+        <dt>¿Quién decide?</dt>
+        <dd><b>El gestor de inversiones</b><span class="matiz">Inscrito en la CMF, con garantía propia</span></dd>
+        <dt>¿Quién administra?</dt>
+        <dd><b>La administradora</b><span class="matiz">Verifica al gestor; contabilidad y valorización pueden ir a terceros fiscalizados<sup class="nota-ref"><a href="#fn3" id="ref-fn3">3</a></sup></span></dd>
+        <dt>¿Quién responde?</dt>
+        <dd><b>Cada uno por lo suyo</b><span class="matiz">El gestor por sus decisiones; la administradora por sus propios deberes<sup class="nota-ref"><a href="#fn2" id="ref-fn2b">2</a></sup></span></dd>
+      </dl>
       <p class="comparador-cierre">Tres manos, tres firmas. Hacienda: <strong>«radicando la responsabilidad civil en el gestor»</strong>.<sup class="nota-ref"><a href="#fn4" id="ref-fn4">4</a></sup></p>
     </div>
   </div>
 
-  <p class="ancla-idea">Separar al que decide del que administra pone a alguien con la obligación de decir «esto no me calza». Lo que atrae la plata es lo mismo que la cuida: no hay Luxemburgo sin los estándares de Luxemburgo.</p>
+  <p class="ancla-idea">Separar al que decide del que administra deja a alguien obligado a decir «esto no me calza». Es la pieza que Luxemburgo escribió, Chile no tiene y este proyecto crea.</p>
 
   <h2 id="cadauno">Lo que se abre</h2>
 
-  <p>Lo que sigue es lectura mía, no texto del proyecto.</p>
+  <p>Lo que sigue es lectura mía.</p>
 
   <ul class="para-cada-uno">
     <li>
@@ -167,7 +159,7 @@
     </li>
     <li>
       <span class="pcu-quien">Chile<small>como domicilio</small></span>
-      Un fondo regional que hoy se arma afuera podría armarse acá, con administración, custodia y auditoría chilenas. Ojo: el texto no menciona firmas extranjeras; que lleguen es apuesta mía.
+      Un fondo regional que hoy se arma afuera podría armarse acá, con administración, custodia y auditoría chilenas.
     </li>
   </ul>
 
@@ -178,31 +170,30 @@
 
   <h2 id="metodo">Método</h2>
 
-  <p>Lo entrecomillado está transcrito del Mensaje presidencial N° 166-374 y de la minuta de Hacienda, con la página al pie. Lo demás es resumen mío, y la lectura propia va dicha. No uso cifras de mercado. Lo de Luxemburgo y Brasil sale de fuentes secundarias, declaradas al pie y sin verificar contra el texto normativo.</p>
+  <p>Lo entrecomillado está transcrito del Mensaje presidencial N° 166-374 y de la minuta de Hacienda, con la página al pie. Lo demás es resumen mío, y la lectura propia va dicha. No uso cifras de mercado. Lo de Luxemburgo, Brasil y el régimen europeo sale de fuentes secundarias, declaradas al pie y sin verificar contra el texto normativo.</p>
 
   <nav class="nav-pie" aria-label="Navegación de la página">
-    <a href="objeciones.html">Las objeciones →</a>
-    <a href="#contenido">↑ Subir</a>
-    <a class="nav-pie-siguiente" href="feed.xml">RSS</a>
+    <a class="nav-pie-siguiente" href="objeciones.html">Las objeciones →</a>
   </nav>
 
   <section class="fuentes" id="fuentes">
     <h2>Fuentes</h2>
     <ol>
-      <li id="fn1">Mensaje N° 166-374 de S.E. el Presidente de la República, 9 de septiembre de 2026, con el que inicia el Proyecto de Ley de Reforma al Mercado de Capitales y Financiamiento de la Casa Propia. Fundamentos, II.3, letra j, pp. 54-55: régimen vigente de los artículos 15, 16 y 17 de la Ley N° 20.712 —incluida la regla de que los gastos de la administración de cartera contratada «serán siempre de cargo de la administradora»— y su efecto combinado. <a class="retorno" href="#ref-fn1">↩</a></li>
-      <li id="fn2">Mensaje N° 166-374, Articulado: nuevo artículo 16 de la Ley N° 20.712 en el artículo noveno N° 6, p. 177 (designación del gestor, registro y fiscalización, encargo por escrito, contenido mínimo, remuneración de cargo del fondo, deber de verificación previa, prohibición de subdelegar y mecanismo de sustitución); definición de gestor de inversiones en el artículo noveno N° 1 letra b), nueva letra n) del artículo 1, p. 174; responsabilidad exclusiva del gestor y responsabilidad que conserva la administradora en el artículo noveno N° 7, nuevo artículo 17, p. 178. <a class="retorno" href="#ref-fn2">↩</a></li>
-      <li id="fn3">Mensaje N° 166-374, Articulado, artículo noveno N° 5, nuevo artículo 15 de la Ley N° 20.712, p. 176: auditoría interna, contabilización, valorización, gestión de riesgos y control interno solo pueden encomendarse a las entidades sometidas a su fiscalización que la Comisión determine por norma de carácter general, con responsabilidad exclusiva de esas entidades. <a class="retorno" href="#ref-fn3">↩</a></li>
-      <li id="fn4">Minuta del Ministerio de Hacienda sobre el mismo proyecto, sección C, numeral 22. <a class="retorno" href="#ref-fn4">↩</a></li>
-      <li id="fn7">Mensaje N° 166-374, Articulado, artículo décimo cuarto transitorio, p. 221: las modificaciones a la Ley N° 20.712 que el transitorio enumera rigen desde la publicación de las normas de carácter general que dicte la CMF, dentro de los seis meses siguientes a la publicación de la ley. La enumeración no incluye todos los numerales del artículo noveno —queda fuera el que modifica el artículo 13— ni el cambio al artículo 169 de la Ley N° 18.045, que entra por el artículo décimo quinto. Qué régimen de vigencia les aplica no consta en el texto citado. <a class="retorno" href="#ref-fn7">↩</a></li>
-      <li id="fn9">Régimen europeo de fondos: Directiva 2011/61/UE (AIFMD), artículo 20, que permite al gestor autorizado delegar la gestión de cartera en un tercero bajo condiciones, sin que la delegación altere su propia responsabilidad y sin que pueda vaciarse hasta quedar como entidad buzón. Sobre el régimen luxemburgués en particular —administración central, depositario y auditor establecidos y autorizados en Luxemburgo o actuando por sucursal— y sobre la posición de Luxemburgo como segundo domicilio de fondos del mundo tras Estados Unidos: guías de práctica de la industria (Chambers, <em>Investment Funds — Luxembourg</em>; ALFI y Luxembourg for Finance). <strong>Fuentes secundarias:</strong> no verificadas contra el texto primario de la Directiva ni contra la legislación luxemburguesa; se citan por la arquitectura que describen, no por cifras. <a class="retorno" href="#ref-fn9">↩</a></li>
-      <li id="fn10">Brasil: la distinción formal entre administrador fiduciário y gestor de recursos como actividades registradas por separado proviene de la Instrução CVM N° 558 de 2015; la Resolução CVM N° 175 de 2022 consolidó el marco de fondos y equiparó al gestor con el administrador como prestador de servicio esencial. <strong>Fuente secundaria:</strong> resúmenes de ANBIMA y de literatura de práctica brasileña; no verificado contra el texto consolidado de la CVM. Se cita para mostrar que la separación de roles ya existe en la región, sin comparar regímenes en detalle. <a class="retorno" href="#ref-fn10">↩</a></li>
+      <li id="fn1" data-n="1">Mensaje N° 166-374 de S.E. el Presidente de la República, 9 de septiembre de 2026, con el que inicia el Proyecto de Ley de Reforma al Mercado de Capitales y Financiamiento de la Casa Propia. Fundamentos, II.3, letra j, pp. 54-55: régimen vigente de los artículos 15, 16 y 17 de la Ley N° 20.712 —incluida la regla de que los gastos de la administración de cartera contratada «serán siempre de cargo de la administradora»— y su efecto combinado. <a class="retorno" href="#ref-fn1">↩</a></li>
+      <li id="fn2" data-n="2">Mensaje N° 166-374, Articulado: nuevo artículo 16 de la Ley N° 20.712 en el artículo noveno N° 6, p. 177 (designación del gestor, registro y fiscalización, encargo por escrito, contenido mínimo, remuneración de cargo del fondo, deber de verificación previa, prohibición de subdelegar y mecanismo de sustitución); definición de gestor de inversiones en el artículo noveno N° 1 letra b), nueva letra n) del artículo 1, p. 174; responsabilidad exclusiva del gestor y responsabilidad que conserva la administradora en el artículo noveno N° 7, nuevo artículo 17, p. 178. <a class="retorno" href="#ref-fn2">↩</a></li>
+      <li id="fn3" data-n="3">Mensaje N° 166-374, Articulado, artículo noveno N° 5, nuevo artículo 15 de la Ley N° 20.712, p. 176: auditoría interna, contabilización, valorización, gestión de riesgos y control interno solo pueden encomendarse a las entidades sometidas a su fiscalización que la Comisión determine por norma de carácter general, con responsabilidad exclusiva de esas entidades. <a class="retorno" href="#ref-fn3">↩</a></li>
+      <li id="fn4" data-n="4">Minuta del Ministerio de Hacienda sobre el mismo proyecto, sección C, numeral 22. <a class="retorno" href="#ref-fn4">↩</a></li>
+      <li id="fn7" data-n="7">Mensaje N° 166-374, Articulado, artículo décimo cuarto transitorio, p. 221: las modificaciones a la Ley N° 20.712 que el transitorio enumera rigen desde la publicación de las normas de carácter general que dicte la CMF, dentro de los seis meses siguientes a la publicación de la ley. La enumeración no incluye todos los numerales del artículo noveno —queda fuera el que modifica el artículo 13— ni el cambio al artículo 169 de la Ley N° 18.045, que entra por el artículo décimo quinto. Qué régimen de vigencia les aplica no consta en el texto citado. <a class="retorno" href="#ref-fn7">↩</a></li>
+      <li id="fn9" data-n="9">Régimen europeo de fondos: Directiva 2011/61/UE (AIFMD), artículo 20, que permite al gestor autorizado delegar la gestión de cartera en un tercero bajo condiciones, sin que la delegación altere su propia responsabilidad y sin que pueda vaciarse hasta quedar como entidad buzón. Sobre el régimen luxemburgués en particular —administración central, depositario y auditor establecidos y autorizados en Luxemburgo o actuando por sucursal— y sobre la posición de Luxemburgo como segundo domicilio de fondos del mundo tras Estados Unidos: guías de práctica de la industria (Chambers, <em>Investment Funds — Luxembourg</em>; ALFI y Luxembourg for Finance). <strong>Fuentes secundarias:</strong> no verificadas contra el texto primario de la Directiva ni contra la legislación luxemburguesa; se citan por la arquitectura que describen. <a class="retorno" href="#ref-fn9">↩</a></li>
+      <li id="fn10" data-n="10">Brasil: la distinción formal entre administrador fiduciário y gestor de recursos como actividades registradas por separado proviene de la Instrução CVM N° 558 de 2015; la Resolução CVM N° 175 de 2022 consolidó el marco de fondos y equiparó al gestor con el administrador como prestador de servicio esencial. <strong>Fuente secundaria:</strong> resúmenes de ANBIMA y de literatura de práctica brasileña; no verificado contra el texto consolidado de la CVM. Se cita para mostrar que la separación de roles ya existe en la región, sin comparar regímenes en detalle. <a class="retorno" href="#ref-fn10">↩</a></li>
     </ol>
   </section>
 
   <footer class="colofon">
-    <p>Escrito por Andrés Prats, a título personal. <a href="https://www.linkedin.com/in/andres-prats-30904028/" rel="me">LinkedIn</a></p>
+    <p>Escrito por Andrés Prats, a título personal. Publicado el 12 de septiembre de 2026. <a href="https://www.linkedin.com/in/andres-prats-30904028/" rel="me">LinkedIn</a></p>
     <p><a href="#declaracion">Declaración de interés</a> · <a href="#metodo">Método</a> · <a href="feed.xml">RSS</a></p>
     <p class="disclaimer">Esta página describe un proyecto de ley en tramitación y expresa una opinión del autor. No constituye asesoría legal ni de inversión, ni recomendación de instrumento alguno.</p>
+    <p class="solo-impresion">https://aprats-cdd.github.io/politicamejoramercadoalternativos/</p>
   </footer>
 
 </main>
diff --git a/objeciones.html b/objeciones.html
index 905f29c..3017ff5 100644
--- a/objeciones.html
+++ b/objeciones.html
@@ -8,11 +8,14 @@
 <meta name="author" content="Andrés Prats">
 <link rel="canonical" href="https://aprats-cdd.github.io/politicamejoramercadoalternativos/objeciones.html">
 <meta property="og:title" content="Las objeciones al gestor de inversiones, y qué les respondo">
-<meta property="og:description" content="La objeción más seria contra la figura del gestor de inversiones, planteada completa en su versión más fuerte, y qué parte de ella puede responderse con el texto del proyecto en la mano.">
+<meta property="og:description" content="Seis frentes de la objeción más seria contra la figura del gestor de inversiones, planteados completos en su versión más fuerte, y qué parte de cada uno puedo responder con el texto del proyecto en la mano.">
 <meta property="og:type" content="article">
 <meta property="og:locale" content="es_CL">
 <meta property="og:url" content="https://aprats-cdd.github.io/politicamejoramercadoalternativos/objeciones.html">
 <meta property="og:image" content="https://aprats-cdd.github.io/politicamejoramercadoalternativos/assets/og-sitio.svg">
+<meta property="og:image:width" content="1200">
+<meta property="og:image:height" content="630">
+<meta property="og:image:alt" content="Chile puede ser el Luxemburgo de América Latina. La regla legal que Chile no tiene: administrar un fondo y decidir sus inversiones pueden estar en manos distintas.">
 <meta name="twitter:card" content="summary_large_image">
 <link rel="alternate" type="application/rss+xml" title="Andrés Prats · RSS" href="feed.xml">
 <link rel="stylesheet" href="assets/sitio.css">
@@ -22,7 +25,7 @@
   "@context": "https://schema.org",
   "@type": "Article",
   "headline": "Las objeciones al gestor de inversiones, y qué les respondo",
-  "description": "Proyecto de ley en tramitación, no vigente. La objeción más seria contra la figura del gestor de inversiones, planteada completa en su versión más fuerte, y qué parte de ella puede responderse con el texto del proyecto en la mano.",
+  "description": "Proyecto de ley en tramitación, no vigente. Seis frentes de la objeción más seria contra la figura del gestor de inversiones, planteados completos en su versión más fuerte, y qué parte de cada uno puedo responder con el texto del proyecto en la mano.",
   "author": { "@type": "Person", "name": "Andrés Prats" },
   "inLanguage": "es",
   "datePublished": "2026-09-12",
@@ -38,9 +41,9 @@
   <p class="nav-retorno"><a href="./"><svg class="logo-mark logo-mark--mini" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><rect width="100" height="100" rx="16"/><text x="50" y="68" text-anchor="middle">AP</text></svg><span>Volver a la explicación</span></a></p>
 
   <header class="hero">
-    <p class="hero-etiqueta"><span>Proyecto de ley</span><span class="sep" aria-hidden="true">/</span><span>Las objeciones</span></p>
+    <p class="hero-etiqueta"><span>Proyecto de ley</span><span>Las objeciones</span></p>
     <h1>Las objeciones, y qué les respondo</h1>
-    <p class="pieza-bajada">Hay una objeción pública contra la figura del gestor de inversiones, y es buena. Acá está completa, en su versión más fuerte. <strong>Y después, qué parte puedo responder y qué parte no.</strong></p>
+    <p class="pieza-bajada">Hay una objeción pública contra la figura del gestor de inversiones, y es buena. Acá está completa, en su versión más fuerte. <strong>Y después, frente por frente, qué respondo y qué no.</strong></p>
   </header>
 
   <aside class="quien-escribe" id="declaracion">
@@ -59,13 +62,13 @@
 
   <h2 id="objecion">La objeción, completa</h2>
 
-  <p>La puso en prensa financiera un ejecutivo de la industria de fondos. No lo nombro ni lo describo: acá se comparan arquitecturas y normas, nunca actores, y el argumento vale lo mismo lo diga quien lo diga. Ésta es su versión más fuerte, con los argumentos que la entrevista no alcanzó a dar.</p>
+  <p>La puso en prensa financiera un ejecutivo de la industria de fondos. No lo nombro: acá se comparan arquitecturas y normas, nunca actores, y el argumento vale lo mismo lo diga quien lo diga. Esta es su versión más fuerte.</p>
 
   <div class="debate">
     <div class="debate-lado es-objecion">
       <span class="debate-quien">La objeción</span>
       <p class="debate-tesis">Administrar dinero de terceros es la única actividad financiera donde quien decide no arriesga patrimonio propio. Hoy una entidad decide, responde y tiene capital detrás. El proyecto la parte en dos.</p>
-      <p><strong>La frontera.</strong> La responsabilidad del gestor sería exclusiva dentro del <strong>ámbito del encargo</strong>, y ese ámbito lo define un contrato cuyo contenido mínimo fijará una norma que todavía no se dicta. Y son dos fronteras, no una: la administradora tampoco responde «salvo en cuanto el perjuicio provenga del incumplimiento de los deberes que esta ley le imponga directamente».<sup class="nota-ref"><a href="#fn2" id="ref-fn2">2</a></sup> Todo daño empezaría por discutir de qué lado cayó.</p>
+      <p><strong>La frontera.</strong> La responsabilidad del gestor sería exclusiva dentro del <strong>ámbito del encargo</strong>, y ese ámbito lo define un contrato cuyo contenido mínimo fijará una norma que todavía no se dicta. Y las fronteras son dos: la administradora tampoco responde «salvo en cuanto el perjuicio provenga del incumplimiento de los deberes que esta ley le imponga directamente».<sup class="nota-ref"><a href="#fn2" id="ref-fn2">2</a></sup> Todo daño empezaría por discutir de qué lado cayó.</p>
       <p><strong>El capital.</strong> La <strong>garantía de la administradora</strong> se calcularía excluyendo la porción encomendada, y la del gestor sobre el patrimonio promedio diario del trimestre anterior: a escala, mirando hacia atrás y sin distinguir riesgo. El colateral no aumenta; migra a un balance que puede no tener más capital que esa garantía.</p>
       <p><strong>El arbitraje.</strong> Quedan dos perímetros regulados por títulos distintos, y el gestor puede ser <strong>persona relacionada</strong> con la administradora: el proyecto exige que el reglamento interno lo indique, y el contenido mínimo del contrato queda en una norma que todavía no existe.<sup class="nota-ref"><a href="#fn2" id="ref-fn2b">2</a></sup> Un grupo podría alojar la decisión donde la responsabilidad le salga más barata.</p>
       <p><strong>El espejo.</strong> Comparar con Luxemburgo halaga y despista. Ese domicilio se construyó también sobre ventajas tributarias y sobre una escala europea que Chile no tiene. Importar la pieza legal sin el resto del andamiaje traería la fragmentación de la responsabilidad y no el resultado.</p>
@@ -75,26 +78,34 @@
 
     <div class="debate-lado es-respuesta" id="respuesta">
       <span class="debate-quien">Qué puedo responder y qué no</span>
-      <p class="debate-tesis">Una parte la puedo responder con el texto en la mano. Otra parte no, y conviene decir cuál.</p>
+      <p class="debate-tesis">Seis frentes, seis veredictos. Tres los respondo con el texto en la mano; los otros tres, en parte o nada.</p>
       <ol class="golpes">
         <li>
-          <span class="golpe-clave">Sí: el estándar no cede por tamaño</span>
-          El texto propuesto para el artículo 98 aplica las exigencias al gestor «cualquiera sea el monto de las carteras que administre, su volumen de negocios o el número de mandantes».<sup class="nota-ref"><a href="#fn5" id="ref-fn5">5</a></sup> No gradúa por tamaño y no deja fuera al pequeño. El gestor queda inscrito en el Registro de Administradoras de Carteras, bajo fiscalización de la CMF conforme al Título II, constituye garantía propia y responde civilmente.
+          <span class="golpe-clave">La escala · Sí: el estándar no cede por tamaño</span>
+          El texto propuesto para el artículo 98 aplica las exigencias al gestor «cualquiera sea el monto de las carteras que administre, su volumen de negocios o el número de mandantes».<sup class="nota-ref"><a href="#fn5" id="ref-fn5">5</a></sup> No gradúa por tamaño. El gestor queda inscrito en el Registro de Administradoras de Carteras, bajo fiscalización de la CMF conforme al Título II, con garantía propia y responsabilidad civil.
         </li>
         <li>
-          <span class="golpe-clave">Sí: el caso que suele citarse apunta al lado contrario</span>
-          La objeción se apoya a menudo en un caso sancionado por la CMF. En esa resolución, una misma administradora reunió la decisión de inversión, la administración y la condición de contraparte del crédito: los créditos se canalizaron a partes relacionadas a través de fondos públicos, y el 80% de uno de los fondos estaba en pagarés emitidos por personas vinculadas a la administradora.<sup class="nota-ref"><a href="#fn8" id="ref-fn8">8</a></sup> Lo que la resolución acredita es concentración de roles; sobre el tamaño de la entidad no dice nada. Y ese caso ocurrió bajo el régimen vigente, con la responsabilidad indelegable ya en la ley.
+          <span class="golpe-clave">La escala · Sí: el caso citado apunta al lado contrario</span>
+          La objeción se apoya a menudo en un caso sancionado por la CMF. Ahí una misma administradora reunió la decisión de inversión, la administración y la condición de contraparte: los créditos fueron a partes relacionadas a través de fondos públicos, y el 80% de uno de los fondos estaba en pagarés de personas vinculadas a ella.<sup class="nota-ref"><a href="#fn8" id="ref-fn8">8</a></sup> Lo que la resolución acredita es concentración de roles; sobre el tamaño de la entidad no dice nada. Y ese caso ocurrió bajo el régimen vigente, con la responsabilidad indelegable ya en la ley.
         </li>
         <li>
-          <span class="golpe-clave">En parte: lo que se copia es la regla, no el régimen</span>
-          De Luxemburgo tomo una sola pieza: que administrar un fondo y decidir sus inversiones puedan estar en manos distintas. Esta página no propone tratamiento tributario alguno. La escala europea sí es una diferencia real y no la puedo salvar: si el tamaño del mercado chileno justifica el viaje de un gestor global es exactamente lo que no sé, y así queda dicho.
+          <span class="golpe-clave">El espejo · En parte: se copia la regla</span>
+          Tomo una sola pieza: que administrar un fondo y decidir sus inversiones puedan estar en manos distintas. Esta página no propone tratamiento tributario alguno. La escala europea sí es una diferencia real: si el tamaño del mercado chileno justifica el viaje de un gestor global es exactamente lo que no sé.
         </li>
         <li>
-          <span class="golpe-clave">Sí: la versión modesta necesita la misma regla</span>
-          Un hub andino es plata peruana y colombiana domiciliada en Chile, y llega con el mismo requisito que cualquier otra: que administrar el fondo y decidir sus inversiones puedan ser firmas distintas, para que un gestor de allá gestione sin montar administradora acá. Paso a paso es una cadencia; ésta es la primera pieza.
+          <span class="golpe-clave">El realismo · Sí: necesita la misma regla</span>
+          Un hub andino es plata peruana y colombiana domiciliada en Chile, y llega con el mismo requisito: que un gestor de allá pueda gestionar sin montar administradora acá. Esta es la primera pieza.
         </li>
         <li>
-          <span class="golpe-clave">No: tres puntos quedan abiertos</span>
+          <span class="golpe-clave">El arbitraje · En parte: mismo perímetro</span>
+          Si el gestor es persona relacionada, el reglamento interno debe decirlo,<sup class="nota-ref"><a href="#fn2" id="ref-fn2c">2</a></sup> y queda bajo las mismas exigencias. Qué conductas quedan prohibidas y cuáles solo divulgadas no lo puedo mapear sin el texto vigente a la vista.
+        </li>
+        <li>
+          <span class="golpe-clave">La frontera · No: queda abierta</span>
+          El contenido mínimo del contrato lo fijará una norma que todavía no se dicta. Sin ese texto no puedo mostrar dónde termina el ámbito del encargo. Es el frente más fuerte, y queda en pie.
+        </li>
+        <li>
+          <span class="golpe-clave">El capital · No: tres puntos quedan abiertos</span>
           Un mismo estándar sobre una base menor cuesta más, y eso es cierto. Sobre la capacidad de la CMF no tengo cifra ni la voy a inventar. Y sobre el colateral falta el texto vigente del artículo 13 para comparar antes y después. No los respondo.
         </li>
       </ol>
@@ -109,26 +120,25 @@
 
   <nav class="nav-pie" aria-label="Navegación de la página">
     <a href="./">← Volver a la explicación</a>
-    <a href="#contenido">↑ Subir</a>
-    <a class="nav-pie-siguiente" href="#fuentes">Fuentes</a>
   </nav>
 
   <section class="fuentes" id="fuentes">
     <h2>Fuentes</h2>
     <ol>
-      <li id="fn1">Mensaje N° 166-374 de S.E. el Presidente de la República, 9 de septiembre de 2026, con el que inicia el Proyecto de Ley de Reforma al Mercado de Capitales y Financiamiento de la Casa Propia. Fundamentos, II.3, letra j, pp. 54-55: régimen vigente de los artículos 15, 16 y 17 de la Ley N° 20.712 —incluida la regla de que los gastos de la administración de cartera contratada «serán siempre de cargo de la administradora»— y su efecto combinado. <a class="retorno" href="#ref-fn1">↩</a></li>
-      <li id="fn2">Mensaje N° 166-374, Articulado: nuevo artículo 16 de la Ley N° 20.712 en el artículo noveno N° 6, p. 177 (designación del gestor, registro y fiscalización, encargo por escrito, contenido mínimo, remuneración de cargo del fondo, deber de verificación previa, prohibición de subdelegar y mecanismo de sustitución); definición de gestor de inversiones en el artículo noveno N° 1 letra b), nueva letra n) del artículo 1, p. 174; responsabilidad exclusiva del gestor y responsabilidad que conserva la administradora en el artículo noveno N° 7, nuevo artículo 17, p. 178. <a class="retorno" href="#ref-fn2">↩</a></li>
-      <li id="fn5">Mensaje N° 166-374, Articulado, artículo noveno N° 25, nuevo artículo 99, pp. 185-186 (garantía del gestor sobre el patrimonio promedio diario de la cartera encomendada, trimestre calendario anterior); artículo noveno N° 4, artículo 13, p. 176 (exclusión de esa porción del cálculo de la garantía de la administradora); artículo noveno N° 24, artículo 98, p. 185 (exigencias aplicables cualquiera sea el monto administrado, el volumen de negocios o el número de mandantes). <a class="retorno" href="#ref-fn5">↩</a></li>
-      <li id="fn6">Mensaje N° 166-374, Articulado, artículo décimo quinto N° 6, texto de reemplazo del artículo 169 de la Ley N° 18.045, pp. 200-201; fundamentos del cambio en II.3, letra i, pp. 51-53, de donde salen las frases citadas. Síntesis concordante en la minuta del Ministerio de Hacienda, sección C, numeral 21. <a class="retorno" href="#ref-fn6">↩</a></li>
-      <li id="fn7">Mensaje N° 166-374, Articulado, artículo décimo cuarto transitorio, p. 221: las modificaciones a la Ley N° 20.712 que el transitorio enumera rigen desde la publicación de las normas de carácter general que dicte la CMF, dentro de los seis meses siguientes a la publicación de la ley. La enumeración no incluye todos los numerales del artículo noveno —queda fuera el que modifica el artículo 13— ni el cambio al artículo 169 de la Ley N° 18.045, que entra por el artículo décimo quinto. Qué régimen de vigencia les aplica no consta en el texto citado. <a class="retorno" href="#ref-fn7">↩</a></li>
-      <li id="fn8">CMF, Resolución Exenta N° 10.950, Procedimiento Sancionatorio [RAZÓN SOCIAL REDACTADA], 2024, considerandos; y auditorías independientes de [AUDITORA 1] y [AUDITORA 2] encargadas por la CMF sobre fondos administrados por esa entidad. Acreditan que los créditos fueron canalizados a partes relacionadas a través de fondos públicos y que el 80% del [FONDO REDACTADO] estaba invertido en pagarés emitidos por personas vinculadas a la administradora. Se cita como arquitectura de un caso público sancionado, no como comparación entre actores del mercado. La resolución no acredita el tamaño de la entidad ni permite afirmar qué habría ocurrido bajo otro régimen. <a class="retorno" href="#ref-fn8">↩</a></li>   ⟵ REDACTADO EN ESTE INFORME: este repo es público y la línea eliminada contiene justamente las tres razones sociales que M13 saca de la página. El texto exacto que se borra está en git y en el árbol de trabajo; no se transcribe acá.
+      <li id="fn1" data-n="1">Mensaje N° 166-374 de S.E. el Presidente de la República, 9 de septiembre de 2026, con el que inicia el Proyecto de Ley de Reforma al Mercado de Capitales y Financiamiento de la Casa Propia. Fundamentos, II.3, letra j, pp. 54-55: régimen vigente de los artículos 15, 16 y 17 de la Ley N° 20.712 —incluida la regla de que los gastos de la administración de cartera contratada «serán siempre de cargo de la administradora»— y su efecto combinado. <a class="retorno" href="#ref-fn1">↩</a></li>
+      <li id="fn2" data-n="2">Mensaje N° 166-374, Articulado: nuevo artículo 16 de la Ley N° 20.712 en el artículo noveno N° 6, p. 177 (designación del gestor, registro y fiscalización, encargo por escrito, contenido mínimo, remuneración de cargo del fondo, deber de verificación previa, prohibición de subdelegar y mecanismo de sustitución); definición de gestor de inversiones en el artículo noveno N° 1 letra b), nueva letra n) del artículo 1, p. 174; responsabilidad exclusiva del gestor y responsabilidad que conserva la administradora en el artículo noveno N° 7, nuevo artículo 17, p. 178. <a class="retorno" href="#ref-fn2">↩</a></li>
+      <li id="fn5" data-n="5">Mensaje N° 166-374, Articulado, artículo noveno N° 25, nuevo artículo 99, pp. 185-186 (garantía del gestor sobre el patrimonio promedio diario de la cartera encomendada, trimestre calendario anterior); artículo noveno N° 4, artículo 13, p. 176 (exclusión de esa porción del cálculo de la garantía de la administradora); artículo noveno N° 24, artículo 98, p. 185 (exigencias aplicables cualquiera sea el monto administrado, el volumen de negocios o el número de mandantes). <a class="retorno" href="#ref-fn5">↩</a></li>
+      <li id="fn6" data-n="6">Mensaje N° 166-374, Articulado, artículo décimo quinto N° 6, texto de reemplazo del artículo 169 de la Ley N° 18.045, pp. 200-201; fundamentos del cambio en II.3, letra i, pp. 51-53, de donde salen las frases citadas. Síntesis concordante en la minuta del Ministerio de Hacienda, sección C, numeral 21. <a class="retorno" href="#ref-fn6">↩</a></li>
+      <li id="fn7" data-n="7">Mensaje N° 166-374, Articulado, artículo décimo cuarto transitorio, p. 221: las modificaciones a la Ley N° 20.712 que el transitorio enumera rigen desde la publicación de las normas de carácter general que dicte la CMF, dentro de los seis meses siguientes a la publicación de la ley. La enumeración no incluye todos los numerales del artículo noveno —queda fuera el que modifica el artículo 13— ni el cambio al artículo 169 de la Ley N° 18.045, que entra por el artículo décimo quinto. Qué régimen de vigencia les aplica no consta en el texto citado. <a class="retorno" href="#ref-fn7">↩</a></li>
+      <li id="fn8" data-n="8">CMF, Resolución Exenta N° 10.950, procedimiento sancionatorio contra una administradora general de fondos, 2024, considerandos; y las dos auditorías independientes que la CMF encargó sobre los fondos administrados por esa entidad. Acreditan que los créditos fueron canalizados a partes relacionadas a través de fondos públicos y que el 80% de uno de esos fondos estaba invertido en pagarés emitidos por personas vinculadas a la administradora. Se cita como arquitectura de un caso público sancionado; la razón social no se escribe acá, y la resolución basta para ubicarlo. La resolución no acredita el tamaño de la entidad ni permite afirmar qué habría ocurrido bajo otro régimen. <a class="retorno" href="#ref-fn8">↩</a></li>
     </ol>
   </section>
 
   <footer class="colofon">
-    <p>Escrito por Andrés Prats, a título personal. <a href="https://www.linkedin.com/in/andres-prats-30904028/" rel="me">LinkedIn</a></p>
+    <p>Escrito por Andrés Prats, a título personal. Publicado el 12 de septiembre de 2026. <a href="https://www.linkedin.com/in/andres-prats-30904028/" rel="me">LinkedIn</a></p>
     <p><a href="#declaracion">Declaración de interés</a> · <a href="#metodo">Método</a> · <a href="feed.xml">RSS</a></p>
     <p class="disclaimer">Esta página describe un proyecto de ley en tramitación y expresa una opinión del autor. No constituye asesoría legal ni de inversión, ni recomendación de instrumento alguno.</p>
+    <p class="solo-impresion">https://aprats-cdd.github.io/politicamejoramercadoalternativos/objeciones.html</p>
   </footer>
 
 </main>
```

---

## 3 · Evidencia

### 3.1 · Gates deterministas, corridos en local

| Gate | Resultado | Nota |
|---|---|---|
| `eval_constelacion.py` | **VERDE** | 27 roles, C01-C05 |
| `eval_sitio.py` | **VERDE** | S01-S08 · estado `cierre` · 6 páginas, 2 nuevas · S10 omitido (lista privada fuera del repo, igual que antes) |
| `eval_experiencia.py` | **VERDE** | X01-X09 · hoja única 38.388 B de 40.000 |
| `eval_editorial.py` | **VERDE** | E01-E08, H01, L01 · **cero advisory**: el E10 que marcaba «fronteras, no una» desapareció |
| `eval_citabilidad.py` | **VERDE** | P01-P04 · footnotes íntegras, metadata presente, 0 cifras sin respaldo |
| `eval_lector.py` | **VERDE** | 18 preguntas, L01-L04 · las 18 anclas de la tabla siguen resolviendo |
| `eval_afilado.py` | **VERDE (vacío)** | capa `propuesta`, sin dossiers |
| `eval_steelman.py --self-test` | **VERDE** | discrimina en los 6 casos |
| `eval_steelman.py` | **VERDE** | D01-D05 · D05 **PARCIAL declarado**: `~/.cordada/no-nombrables-sitio.txt` no está disponible en esta sesión. Era así antes de tocar nada; el barrido completo lo corre el operador |
| `smoke_experiencia.js` | **ROJO — preexistente, ajeno a estos cambios** | Revienta en `page.goto` de `separacion-de-roles.html`, una de las seis páginas hardcodeadas que el rediseño del 12-sep retiró del sitio. Falla idéntica antes y después del parche. **No modifiqué el smoke.** |
| T01-T05 sobre las dos páginas vigentes | **VERDE** | Réplica exacta de los checks del smoke, corrida sobre `index.html` y `objeciones.html` a 390×844. Script en `/tmp/…/elevador/smoke_dos_paginas.js` |

Salida íntegra:

```text
$ python3 constelacion/eval_constelacion.py
eval_constelacion - 27 roles evaluados

VERDE - todos los checks pasan (C01-C05). Las tres leyes se cumplen.
  -> exit 0

$ python3 constelacion/eval_sitio.py
  S10 nota: lista privada de nombres no disponible — check omitido (se corre en la sesion del operador).
eval_sitio - estado 'cierre' · 6 pagina(s) declaradas · 2 nueva(s)

VERDE - S01-S08 pasan para el estado declarado.
  -> exit 0

$ python3 constelacion/eval_experiencia.py
eval_experiencia · 2 página(s) en alcance · hoja única 38388 bytes

VERDE - X01-X09 pasan.
  -> exit 0

$ python3 constelacion/eval_editorial.py
eval_editorial · 2 pieza(s) · 3 hipótesis en ledger

VERDE - checks duros pasan (E01-E08, H01, L01); E09 advisory.
  -> exit 0

$ python3 constelacion/eval_citabilidad.py
eval_citabilidad - footnotes + metadata + 0 capa(s) auditada(s)
  P04 kit de citabilidad: sin manifest — pendiente declarado (corrida del empaquetador).

VERDE - citabilidad OK (P01-P04): footnotes integras, metadata presente, 0 cifras sin respaldo.
  -> exit 0

$ python3 constelacion/eval_lector.py
eval_lector - 18 pregunta(s) evaluadas en 1 tabla(s)

VERDE - 0 preguntas sin respuesta ni gap declarado (L01-L04).
  -> exit 0

$ python3 constelacion/eval_afilado.py
eval_afilado - 0 dossiers encontrados

VERDE (vacio) - la capa de afilado esta `propuesta`: su primera corrida O→M→D produce el primer dossier.
  -> exit 0

$ python3 constelacion/eval_steelman.py --self-test
  ok   pasa el caso sano
  ok   caza el eje ausente (hombre de paja)
  ok   caza responder antes de plantear
  ok   caza el actor vivo nombrado
  ok   caza el steelman de un solo eje
  ok   caza la parte faltante

VERDE - self-test: el gate discrimina en los 6 casos.
  -> exit 0

$ python3 constelacion/eval_steelman.py
eval_steelman - 1 pagina(s) que responden objecion
  D05 [objeciones.html] lista privada de no-nombrables no disponible (~/.cordada/no-nombrables-sitio.txt) — check PARCIAL. Solo se verificaron los nombres declarados inline; el barrido completo se corre en la sesion del operador. No es un pase.

VERDE - D01-D05 pasan: la objecion se planteo en su mejor version, antes de responderla, sin nombrar actores vivos.
  -> exit 0
```

### 3.2 · Las cuatro vistas

Capturas en `/tmp/claude-0/-home-user/640a4e9e-975c-5897-b6a5-fac51a6b953a/scratchpad/elevador/shots/`
(Chromium, `deviceScaleFactor` 1, `colorScheme` forzado; `-fold` = primera
pantalla, `-full` = página completa; más `figura-*`, `indice-movil-abierto`,
`fuentes-movil`, `colofon-impresion` e `index-impresion.pdf`).

| Vista | Qué se ve |
|---|---|
| **390×844 claro** | Etiqueta con sus dos separadores «·» presentes (antes desaparecían bajo 34 rem) · H1 en tres líneas · bajada de cinco líneas que ya nombra la regla · tira de estado apilada con «Hasta 6 meses» en sans · caja «Quién escribe esto y qué gana» arrancando en y=718 de 844: **título y dos líneas sobre el fold, V2 no se dispara** |
| **390×844 oscuro** | Misma jerarquía; paneles del comparador apilados, el de la propuesta con borde de acento; matices en gris legible sobre `#15181C`. Sin scroll horizontal (T04) |
| **1440×900 claro** | Declaración completa dentro de la primera pantalla (y=587→817), incluido el reparo de la apuesta · comparador a dos columnas de **484 px cada una**: el panel «Hoy» dejó de estar medio vacío · tres respuestas idénticas a la izquierda, tres distintas a la derecha |
| **1440×900 oscuro** | Idéntica estructura; el único color sigue siendo el acento institucional. El terracota `--propuesta` no se usó: sigue reservado a `.propuesta-autor` |
| **Impresión** (emulada) | `.nav-pie`, `details.indice-pieza`, `.salto-contenido` y la barra de progreso en `display:none`; `.solo-impresion` en `block` con la URL canónica de cada página |

### 3.3 · Peso, conteo y presupuesto

| Archivo | Peso | Techo | Holgura |
|---|---|---|---|
| `index.html` | 16.571 B | 70.000 | 53.429 |
| `objeciones.html` | 16.686 B | 70.000 | 53.314 |
| `assets/sitio.css` | 38.388 B | 40.000 | **1.612** ← ver el riesgo en 5.3 |
| `assets/og-sitio.svg` | 1.714 B | — | — |
| `feed.xml` | 1.219 B | — | — |

| Pieza | Palabras | Techo | Antes |
|---|---|---|---|
| `index.html` | **881** | 900 | 897 |
| `objeciones.html` | **1.144** | 1.150 | 1.121 |

Requests externos: **0** en ambas páginas y en la hoja (X02 verificado con
barrido propio además del gate).

### 3.4 · Anclas y marcadores preservados

**Marcadores literales del steelman (D03), en `objeciones.html`:**

| Marcador exigido por `AG-DEFENSOR-OBJECION` | Presente |
|---|---|
| `ámbito del encargo` | sí |
| `garantía de la administradora` | sí |
| `persona relacionada` | sí |
| `costos fijos` | sí |
| `más entidades que fiscalizar` | sí |

**Anclas que la tabla de `AG-LECTOR-INVERSIONISTA` referencia (L04):** las 18
resuelven — `#figura` ×3, `#falta` ×3, `#respuesta` ×4, `#cuando` ×2,
`#declaracion`, `#metodo` ×3, `#cadauno`, `#objecion`.

**Ids: ninguno eliminado ni renombrado.** Agregados: `ref-fn2b`, `ref-fn9b`
(index), `ref-fn2c` (hermana), por las refs nuevas.

**Marcador del cuerpo contra número visible de la nota** (lo que estaba roto):

| Página | Notas | Antes se veían | Ahora |
|---|---|---|---|
| `index.html` | 1, 2, 3, 4, 7, 9, 10 | 1, 2, 3, 4, **5, 6, 7** | 1, 2, 3, 4, 7, 9, 10 |
| `objeciones.html` | 1, 2, 5, 6, 7, 8 | 1, 2, **3, 4, 5, 6** | 1, 2, 5, 6, 7, 8 |

---

## 4 · Lectores

### 4.1 · Las seis audiencias

| Audiencia | Reacción #1 a evitar | Reacción #2 a lograr | Frase de la propuesta que mueve | Frase que podría perder | Veredicto |
|---|---|---|---|---|---|
| **Político / legislador** | «Es lobby de un gestor que gana con la ley» | «Tengo el argumento de treinta segundos, la figura y el interés declarado; y no me pide votar» | «¿Quién decide? La administradora. ¿Quién administra? La administradora. ¿Quién responde? La administradora» leído de corrido en el panel «Hoy» | «Chile puede ser el Luxemburgo de América Latina» si se lee sin la bajada: suena a eslogan de competitividad | **Mueve.** La contradicción que el juez marcó —«la firmo» junto a «no recomienda nada»— la desarma la declaración nueva |
| **Think tank** | «La analogía con Luxemburgo es floja y sin evidencia primaria» | «Citable en un policy brief: primarias con página, secundarias declaradas, límites escritos» | «El régimen europeo admite la misma delegación, bajo condiciones.⁹ Chile no» — dos regímenes nombrados, ambos con nota | «un ahorro previsional profundo» sigue sin cifra (la página declara que no usa cifras de mercado) | **Mueve**, y sube de «a medias»: se fueron Irlanda sin fuente, «los mercados profundos» y «menos habitantes que el Gran Santiago» |
| **Profesor universitario** | «Simplifica hasta la inexactitud; mezcla vigente con propuesto» | «El comparador es material de clase: la misma pregunta, dos respuestas» | «¿Quién responde? Cada uno por lo suyo: el gestor por sus decisiones; la administradora por sus propios deberes» | «Hasta 6 meses» sigue siendo un resumen de una regla con dos capas (la nota lo abre) | **Mueve.** La salvedad del abogado sobre la responsabilidad residual queda cerrada en la figura |
| **Equipo de inversiones** | «Marketing de un competidor; no dice nada que no sepa» | «Lo reenvío al comité: explica por qué hoy no entran gestores globales y qué cambia» | «Para una firma global, entrar a Chile hoy significa montar una administradora completa» | «No uso cifras de mercado»: el comité querrá una y no la va a encontrar (gap declarado) | **Mueve.** Y ya no arrastra «Por eso no entran» como absoluto sin nota |
| **Abogado regulatorio** | «Lee mal los artículos 15, 16 y 17» | «Defendible como primer mapa, con página del Mensaje» | «la administradora por sus propios deberes²», ahora en la raíz y no solo en la hermana | El contenido mínimo del contrato sigue sin existir: la página lo dice, pero el abogado no puede cerrar el análisis | **Mueve.** Las tres salvedades del §2 del juez: (a) cerrada, (b) cerrada en la figura, (c) cerrada con «Hasta» |
| **Lector de izquierda chilena** | «Es la agenda del capital financiero: desregular para que entren fondos extranjeros y un gestor privado gane con la plata de las pensiones. Luxemburgo es un paraíso fiscal» | «Esto rompe una concentración: hoy una sola entidad decide, administra y responde, y cuando falla nadie responde. Separar pone un responsable con nombre y garantía propia, deja más entidades bajo la CMF, abre otra puerta a pymes y regiones, y la plomería se queda en Chile. El autor declara lo que gana y no me pide votar» | El panel «Hoy» con el mismo nombre tres veces —**la concentración se ve, no se argumenta**— más «El gestor queda inscrito en el Registro de Administradoras de Carteras, bajo fiscalización de la CMF» (más entidades supervisadas, no menos) y «La plomería se queda en casa» | «Chile puede ser el Luxemburgo de América Latina» sigue siendo el título, y «Luxemburgo = paraíso fiscal» es el reflejo. La respuesta existe, pero vive en la hermana | **Mueve, con una condición honesta:** se mueve si llega a `objeciones.html`, donde «El espejo · En parte: se copia la regla» dice, literal, que esta página no propone tratamiento tributario alguno. En la raíz sola, el título tiene que aguantarse con «una sola mano carga con todo» |

**Vocabulario**: el copy nuevo usa responsabilidad, concentración, fiscalización,
registro, garantía propia, verificar, pymes, puertas de financiamiento. No usa
competitividad, atraer capital, desregulación, eficiencia de mercado, clase de
activos ni anglicismos. **Ninguna audiencia se ganó a costa de otra:** todo lo
que entró por el lector de izquierda —la concentración vista, «más entidades
bajo la CMF», la responsabilidad con nombre— es lo mismo que el abogado y el
profesor pedían por precisión.

### 4.2 · Cuñas contra los ocho tests

Tests: 1 autonomía · 2 verdad · 3 portabilidad · 4 atribución segura ·
5 memorabilidad · 6 quién la dice · 7 torsión respondida · 8 anti-frase identificable.

| Cuña (verbatim) | Ancla | 1-8 | Cambio respecto del juez |
|---|---|---|---|
| «Separar al que decide del que administra deja a alguien obligado a decir "esto no me calza". Es la pieza que Luxemburgo escribió, Chile no tiene y este proyecto crea.» (166) | `#figura` | ✓✓✓✓✓✓✓✓ | **Nueva. Es la cuña que lleva la tesis entera** —regla, mecanismo, Luxemburgo, la carencia y el proyecto— que D1 declaró inexistente. Torsión «también parte en dos la responsabilidad»: contestada en la hermana con veredicto propio |
| «¿Quién decide? La administradora. ¿Quién administra? La administradora. ¿Quién responde? La administradora.» (105) | `#figura` | ✓✓✓✓✓✓✓✓ | **Nueva, y es visual antes que verbal.** Verdad: es el efecto combinado de los artículos 15, 16 y 17 con nota 1. Anti-frase: «Cada uno por lo suyo» |
| «Una sola mano carga con todo. Tres manos, tres firmas.» (54) | `#figura` | ✓✓✓✓✓✓✓✓ | Sin cambios. Su anti-frase («Terceros fiscalizados») desapareció del panel |
| «La plomería se queda en casa. El talento viene de donde sea.» (60) | `#luxemburgo` | ✓✓✓✓✓✓✓✓ | Sin cambios, y mejora: su anti-frase era «Irlanda hizo lo mismo», que se cortó |
| «Luxemburgo es el segundo domicilio de fondos del mundo, y en su arquitectura hay una regla que Chile no tiene: administrar un fondo y decidir sus inversiones pueden estar en manos distintas.» (188) | `.pieza-bajada` | ✓✓±✓✓✓✓✓ | Reemplaza a «No llegó por su plata». **Test 2 pasa de ✗ a ✓**: describe arquitectura, que es lo que la nota 9 sostiene, y deja de ser monocausal. Test 3 en ± por largo |
| «Para una firma global, entrar a Chile hoy significa montar una administradora completa.» (86) | `#falta` | ✓✓✓✓✓✓✓✓ | **Tests 2 y 7 pasan de ✗ a ✓** al cortarse «Por eso no entran» |
| «Contratar a un especialista cuesta y no libera.» (47) | `#falta` | ±✓✓✓✓✓✓✓ | Sin cambios (test 1 sigue pidiendo saber quién contrata) |
| «Chile tiene lo que a Luxemburgo le faltaba: un ahorro previsional profundo. Le falta la pieza legal.» (99) | `#falta` | ✓✓✓✓✓✓✓✓ | **Test 2 pasa de ± a ✓** al cortarse «y un regulador que la región respeta» |
| «Si el banco dice que no, se acabó. Cada gestor especializado es otra puerta, con criterios distintos.» (101) | `#cadauno` | ✓✓✓✓✓✓±✓ | Sin cambios |
| «Chile puede ser el Luxemburgo de América Latina» (47) | `h1` | ✓✓✓✓✓✓±✓ | Sin cambios. Test 7 sigue en ±: la torsión «paraíso fiscal» la responde la hermana, no la raíz |
| ~~«Los mercados profundos lo resolvieron; Chile es la excepción.»~~ | — | — | **Retirada** (tests 2 y 7 en ✗; era su propia anti-frase) |
| ~~«Lo que atrae la plata es lo mismo que la cuida…»~~ | — | — | **Retirada** (B2: soldadura no preparada) |

Tres cuñas pasan los ocho tests y **una lleva la tesis entera**. El requisito
del STEP 6 se cumple con cuatro de sobra.

---

## 5 · Cierre honesto

### 5.1 · Cierres del juez resueltos

| §7 | Cierre | Estado |
|---|---|---|
| 2 | Número visible de la nota ≠ marcador del cuerpo, ambas páginas | **Resuelto** por `data-n` + `list-style:none`, sin renombrar un solo ancla |
| 3 | La regla no se nombra en la primera pantalla; las superficies endurecen sin el «la firmo» | **Resuelto** en las cinco superficies, con la misma frase |
| 4 | «La frontera» y «El arbitraje» sin Sí / En parte / No | **Resuelto**: seis frentes, seis veredictos, cada golpe rotulado con el frente que contesta |
| 5 | «Los mercados profundos lo resolvieron; Chile es la excepción» | **Resuelto**: dos regímenes nombrados, cada uno con su nota |
| 6 | «Irlanda hizo lo mismo» sin nota | **Resuelto por corte** (no tengo fuente; no la invento) |
| 8 | Tríada de entidades vs tríada de funciones; administradora sin responsabilidad residual; panel «Hoy» medio vacío | **Resuelto** por la idea creativa. Paneles de 484 px iguales a 1440 |
| 9 | Muletilla «no X. Y» ×5 | **Resuelto** en las cinco |
| 10 | «no recomienda nada» sin decir que el proyecto es amplio | **Resuelto** |
| 12 | El reparo de la apuesta vive en la pantalla 6 | **Resuelto**: sube a la declaración |
| 14 | El «1.» del índice cae en la segunda línea en móvil | **Resuelto** (`display:block`) |
| 15 | Separadores de la etiqueta ocultos bajo 34 rem | **Resuelto** (`span::after`) |
| 16 | «Casi nadie lo hace» · «Por eso no entran» | **Resuelto por corte**, con la cita del Mensaje cargando el peso |
| 17 | «6 meses» lee como plazo fijo | **Resuelto**: «Hasta 6 meses» |
| 22 | Nota 8 nombra a la administradora sancionada y a dos auditoras | **Resuelto**: resolución, número y año, sin razón social |
| 23 | Sin fecha de publicación visible | **Resuelto** en el colofón de ambas |
| 24 | «Ésta» con tilde ×2 | **Resuelto** |
| 7 (parcial) | `og:image` SVG, «y es segundo domicilio», sin `width`/`height`/`alt` | **Parcial**: copy corregido y los tres metadatos puestos. El PNG queda pendiente — 5.3 |
| 13 (parcial) | `.nav-pie`, tres enlaces duplicados | **Parcial**: de tres a uno. Ver 5.2 |
| — | Área táctil de refs de nota bajo 32 px en bloques de tipografía chica | **Resuelto** (hallazgo propio; tres de los cuatro descalces eran previos) |
| — | A2: cuarta voz tipográfica monoespaciada en la tira de estado | **Resuelto** |

### 5.2 · Cierres rechazados, con razón escrita

| §7 | Cierre | Por qué no se ejecutó tal cual |
|---|---|---|
| 13 | «Cortar `.nav-pie`» | `X06` de `eval_experiencia.py` es fail-closed: toda página tipo `ensayo` debe traer `class="nav-pie"`. Cortarla entera pone el gate en rojo. Se cortó la duplicación —de tres enlaces a uno— y se unificó el patrón entre páginas. Si el dueño quiere el corte completo, hay que cambiar X06 primero, y eso toca el harness: pasa por el freno |
| 2 | «Renumerar las notas 1-7 consecutivo» | La prompt prohíbe renombrar o eliminar anclas existentes. Se tomó la segunda opción que el propio juez ofrecía (`data-n` + CSS), que deja `#fn7`, `#fn9` y `#fn10` intactos |
| A1 | «`details.indice-pieza` es `duda`» y «el monograma AP junto a un nombre ya escrito» | Ambos los exige el harness: `X06` el índice de pieza, `X10` la marca mini. No son decoración libre, son contrato |

### 5.3 · Pendientes que solo puede resolver el dueño

**(a) V4 · `og-cover.html` y `og-cover.svg` — el único veto abierto.**
No los toqué: la prompt de esta corrida me lo prohíbe explícitamente, y borrar
en un repo público es irreversible. El parche va escrito y listo.

`og-cover.svg`: **borrar**. Ningún `og:image` apunta ahí y una imagen no se
redirige. No está declarada en `sitio-manifest.yaml`, así que no hay entrada
que tocar.

```bash
git rm og-cover.svg
```

`og-cover.html`: **conservar la URL como redirección**, mismo patrón que
`gestor-de-inversiones.html` (meta refresh + canonical + `noindex`), porque
puede estar enlazada desde compartidos viejos. Su entrada en
`sitio-manifest.yaml` (`tipo: asset`) se queda como está. Contenido completo
de reemplazo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tarjeta retirada · Andrés Prats</title>
<meta name="description" content="Esta tarjeta se retiró. La página vive en la raíz del sitio.">
<link rel="canonical" href="https://aprats-cdd.github.io/politicamejoramercadoalternativos/">
<meta http-equiv="refresh" content="0; url=./">
<meta name="robots" content="noindex">
<link rel="stylesheet" href="assets/sitio.css">
</head>
<body>
<a class="salto-contenido" href="#contenido">Ir al contenido</a>
<main id="contenido">
  <p class="nav-retorno"><a href="./"><svg class="logo-mark logo-mark--mini" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><rect width="100" height="100" rx="16"/><text x="50" y="68" text-anchor="middle">AP</text></svg><span>Andrés Prats</span></a></p>
  <h1>Esta tarjeta se retiró</h1>
  <p>Traía cifras de mercado y un titular que la página ya no sostiene. La versión vigente vive en la raíz del sitio. Si tu navegador no te lleva solo, <a href="./">entra acá</a>.</p>
</main>
</body>
</html>
```

**Mientras esto no se aplique, V4 sigue disparado y la re-corrida del juez
seguirá dando NO-PASA por veto**, por bien que hayan subido las varas.

**(b) `gestor-de-inversiones.html` (§7 fila 25).** Fuera de los archivos que
esta corrida puede editar. Tres arreglos: quitar el bloque JSON-LD `Article`
—conserva un titular retirado—, mover `<a class="salto-contenido">` fuera de
`<main>` (hoy está dentro, y el salto salta a sí mismo), y llevar el
`style="margin-top:2rem"` inline a la hoja.

**(c) PNG de la tarjeta social (§7 fila 7).** Hace falta `assets/og-sitio.png`
(1200×630) y cambiar los dos `og:image` a él. No lo creé: crear un archivo
nuevo está fuera de los cinco que esta corrida puede tocar, y el repo es
público. Comando listo, una vez que el dueño lo autorice:

```bash
NODE_PATH=/opt/node22/lib/node_modules node -e "
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1200,height:630},deviceScaleFactor:1});
await p.goto('file://'+process.cwd()+'/assets/og-sitio.svg');
await p.screenshot({path:'assets/og-sitio.png'});await b.close();})()"
```

**(d) Holgura de la hoja: 1.612 B de 40.000.** `X07` va a enrojecer en el
próximo agregado. Hay ~200 líneas de CSS muerto del corpus retirado de julio
(`.masthead*`, `.lupa`, `.card-*`, `.dato`, `.para-quien`, `.cunas`,
`.rejilla-fichas`, `.escenario`, `.reglas`, `.tabla-*`, `.pieza-meta`). Barrerlas
es la válvula, y es trabajo del ingeniero de UI en su propia corrida: no lo hice
acá porque no estaba en los cierres del juez y habría mezclado dos propuestas
en un solo checkpoint. **Ojo:** al barrer hay que dejar al menos tres usos de
`var(--tap-minimo)` vivos (`X03`).

**(e) `smoke_experiencia.js` lista seis páginas y cuatro ya no existen.** Es una
fuga del harness, no de la página: el gate de área táctil no puede correr en CI
desde el rediseño del 12-sep. No lo modifiqué (la prompt me lo prohíbe). Medí
con una réplica exacta sobre las dos páginas vigentes: VERDE. Alguien tiene que
arreglar el smoke, y ese cambio toca `constelacion/`: pasa por el freno.

**(f) La tabla de `AG-LECTOR-INVERSIONISTA` cita texto que cambió.** Dos
entradas (`#falta` «por eso no entran», `#cuando` «6 meses — Plazo de la CMF»)
transcriben frases que esta propuesta reescribió. `eval_lector.py` solo verifica
que el ancla exista, así que el gate sigue VERDE, pero la evidencia de esa tabla
quedó desfasada. No edité un archivo de `runs/` —es registro de una corrida
pasada, no contrato vivo—: lo declaro para que el verificador decida.

### 5.4 · Lo que no sé, y no rellené

- **Si llegan gestores globales.** La página lo declara apuesta del autor, ahora
  en la primera pantalla. No hay dato.
- **El contenido mínimo del contrato del artículo 16.** No existe: es norma
  futura. Por eso «La frontera» recibe veredicto «No: queda abierta» y no una
  respuesta fabricada.
- **El artículo 13 vigente y las letras del artículo 103.** El defensor los pidió
  para poder comparar colateral antes y después. No los tengo a la vista y la
  página lo dice.
- **Capacidad de fiscalización de la CMF.** Sin cifra pública. Declarado.
- **El «regulador que la región respeta».** Lo corté en vez de buscarle fuente:
  no la tengo.
- **Cómo renderizan las redes el `og:image`.** No lo probé; el juez tampoco.
  Sigue siendo SVG hasta que se apruebe (c).

### 5.5 · Autoevaluación advisory (mi propio puntaje, no el del juez)

| # | Dimensión | Antes | Mi estimación | Por qué |
|---|---|---|---|---|
| A1 | Sustracción | 2 | **3** | Todo lo `duda` que el harness no exige se cortó, y nada entró sin que algo saliera. Quedan dos ítems `duda` vivos porque son contrato de gate, no elección |
| A2 | Jerarquía, ritmo, tipografía | 2 | **3** | Los tres costurones cerrados: separadores, cuarta voz tipográfica, panel medio vacío |
| A3 | La figura | 2 | **3** | Una sola tríada, de funciones; responsabilidad residual presente; la repetición ES el argumento |
| A4 | Oficio en el detalle | 1 | **2** | Notas, índice y área táctil arreglados. **No sube más porque `gestor-de-inversiones.html` sigue con su JSON-LD viejo y el `og:image` sigue en SVG**: ambos fuera de mi alcance |
| B1 | Tesis en 10 segundos | 2 | **3** | La regla se nombra en la bajada y en las cinco superficies |
| B2 | Arquitectura del argumento | 2 | **3** | La soldadura no preparada salió; la que quedó está preparada por «verifica al gestor» |
| B3 | Simplicidad sin falsedad | 2 | **3** | Las tres salvedades del abogado cerradas |
| B4 | Registro de la casa | 2 | **3** | Cinco muletillas fuera, tres vaguedades fuera, cero actores en la nota 8, «Ésta» unificado |
| C | Anti-lobby | 2 | **3** | Seis frentes con veredicto; alcance del proyecto declarado; tres sobreafirmaciones retiradas |
| D1 | Cuñas | 2 | **3** | Cuatro cuñas 8/8 y una que lleva la tesis entera |
| D2 | Audiencias | 2 | **2-3** | Las seis mueven, pero el lector de izquierda se mueve **si llega a la hermana**. En la raíz sola, el título sigue cargando el reflejo «paraíso fiscal» |
| D3 | Superficie de compartir | 1 | **1** | **No sube, y no debe subir: `og-cover.*` sigue servido.** Mientras el veto V4 esté abierto, esta dimensión no puede pasar de 1 por mucho que la frase esté unificada y la fecha visible |

**Jobs estimada: 20/21** (umbral 17) · **Masiva estimada: 12-13/15** (umbral 12).
**Veredicto que me pongo: NO-PASA mientras V4 siga abierto.** Aplicado el
parche de 5.3(a), mi estimación es PASA-CON-FIXES, con D3 subiendo a 2 y los
fixes restantes en (b) y (c).

Este puntaje es advisory y lo escribió quien hizo el trabajo. No vale.

### 5.6 · Lo que pido

1. **Checkpoint del dueño** sobre los cinco archivos editados (parte 2) y sobre
   el retiro de `og-cover.*` (5.3 a). Nada se commitea sin su palabra.
2. **Re-corrida ciega del juez** (`prompts/eval-juez-clase-mundial.md`, agente
   aislado, sin este paquete a la vista) sobre la página propuesta, con
   `og-cover.*` ya retirado. Si las varas no suben, la movida se revierte:
   `git checkout --` sobre los cinco archivos y listo, no hay nada que deshacer
   en producción.
3. **Que el verificador corra los gates**, no yo. Los corrí para no entregar
   basura; verde acá no es aprobación.
