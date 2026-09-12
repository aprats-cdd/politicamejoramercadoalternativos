```yaml
eval: EVAL-sitio-luxemburgo-2026-09-12
evalua: index.html + objeciones.html @ dateModified 2026-09-12 (árbol de trabajo local)
rubrica: JUEZ-CLASE-MUNDIAL
rubrica_version: v0.1
autor_eval: agente aislado (no el productor)
independencia: informacion (solo prompt + superficies alcanzables; sin historial, sin runs ajenos)
veredicto: NO-PASA
vara_jobs: 15/21
vara_masiva: 11/15
vetos: []
```

---

## 1 · Primera impresión

**A los 10 segundos.** Un país chico administra los fondos del mundo porque escribió una
regla que Chile no tiene, y hay un proyecto de ley que la crea. Lo entendí del título más
la bajada, sin scroll, en las cuatro vistas. Tres datos duros llegaron en el mismo golpe:
`9 sep 2026`, `No es ley`, `Hasta 6 meses`. En escritorio (1440×900) la declaración de
interés completa entra también en la primera pantalla; en móvil (390×844) aparece su título
al pie de la primera y su cuerpo en la segunda.

**Tiempo de lectura.** Raíz: 873 palabras de cuerpo → 4,0 min a 220 ppm. La `description`
promete «Explicado en cuatro minutos» y la promesa se cumple con exactitud.
`objeciones.html`: 1.138 palabras → 5,2 min. Altura renderizada: 7.994 px en móvil (10
pantallas), 6.266 px en escritorio (7 pantallas).

**La frase que quedó.** «La plomería se queda en casa. El talento viene de donde sea.»
Segunda: «Contratar a un especialista cuesta y no libera.»

---

## 2 · Test de la tesis

**Mis dos frases.** (i) La página sostiene que Chile tiene el ahorro pero no la pieza legal
que convierte a un país en domicilio de fondos, y que el proyecto ingresado el 9-sep-2026 la
crea: el *gestor de inversiones*, un tercero al que la administradora puede encomendarle
decidir la cartera. (ii) Separar al que decide del que administra importa porque hoy un solo
nombre contesta las tres preguntas —quién decide, quién administra, quién responde— y eso
obliga a cualquier firma de afuera a montar una administradora completa para entrar; con la
separación, cada uno responde por lo suyo y el ecosistema (administración, custodia,
auditoría) se queda en Chile aunque el que decide esté a doce mil kilómetros.

**Diferencia con lo que la página dice:** ninguna en el qué. Una en el porqué. La página
añade un segundo porqué que yo no habría derivado de sus secciones: «Separar al que decide
del que administra deja a alguien obligado a decir "esto no me calza"» (`#figura`,
`.ancla-idea`). Ese beneficio —un segundo par de ojos obligado— no lo prepara ninguna
sección anterior: `#luxemburgo` presenta la regla como captura de ecosistema, no como
control. Hallazgo, y está en B2.

**El lector ajeno a la industria.** Sí entiende y sí puede fabricar su ejemplo: «como el
dueño que contrata a un corredor para arrendar, pero el corredor responde por lo que
arrienda mal». Lo que gana Chile queda claro (`#cadauno`, tarjeta «Chile · como
domicilio»); lo que gana él queda declarado como lectura del autor («Lo que sigue es lectura
mía» + «Más gestores compitiendo por su plata presiona las comisiones hacia abajo»). **Pero
en móvil tiene que releer.** El comparador mide 369 px + 479 px + 17 px de separación =
865 px contra un viewport de 844: los dos paneles nunca coexisten en pantalla. La
comparación se vuelve ejercicio de memoria en el dispositivo mayoritario. **V1 no se
dispara** —la tesis sí se reproduce tras una lectura— pero la figura no se gana sola su
regla de los cinco segundos en móvil.

**El abogado regulatorio.** La lectura es defendible y está anclada: artículo, numeral y
página en `#fuentes` (fn1 pp. 54-55; fn2 pp. 174, 177, 178; fn3 p. 176; fn5 pp. 185-186;
fn7 p. 221). El movimiento más fuerte es dejar que el diagnóstico lo haga el Gobierno:
«…sigue expuesta a responder por decisiones de inversión que no toma ella misma». Vigente y
propuesto van separados por rótulo (`Hoy` / `Con el proyecto`) y por adjetivo («el artículo
16 **vigente** prohíbe»). Dos reparos:

- El matiz de la figura dice «contabilidad y valorización **pueden ir** a terceros
  fiscalizados», y su propia fn3 dice que esas funciones «**solo** pueden encomendarse a las
  entidades sometidas a su fiscalización que la Comisión determine… con **responsabilidad
  exclusiva de esas entidades**». El matiz se queda con la mitad que suena a apertura y
  suelta la mitad que la nota sí acredita como cambio (dónde queda la responsabilidad).
- En `objeciones.html` la objeción describe lo propuesto en condicional (5 condicionales:
  *sería, calcularía, empezaría, traería, podría*) y la respuesta lo describe en indicativo:
  «El gestor **queda** inscrito en el Registro de Administradoras de Carteras», «el
  reglamento interno **debe** decirlo, y **queda** bajo las mismas exigencias». El lado
  dudoso en potencial, el lado propio en presente. Es exactamente el subrayado que hace un
  profesor.

---

## 3 · Scorecard

| # | Dimensión | Puntaje | Evidencia |
|---|---|---|---|
| **A1** | Sustracción | **2** | Ningún bloque en pantalla es `decoración`. Dos `duda`: `details.indice-pieza` (índice de 5 entradas para 873 palabras; su trabajo real es adelantar el link a objeciones) y `.nav-pie` (tercer enlace a `objeciones.html` en la misma pieza, tras el índice y la caja «Hay objeciones serias»). La declaración de `#declaracion` gasta 79 palabras donde la de `objeciones.html` hace el mismo trabajo en 48. Fuera de pantalla sí hay grasa: 64 de 108 clases de `assets/sitio.css` (59 %) no se usan en ninguna de las cuatro páginas servidas —`masthead`, `cards`, `cunas`, `reglas`, `escenario`, `changelog`, `interes`…— en una hoja de 38.388 bytes para dos piezas de 16 KB. |
| **A2** | Jerarquía, ritmo y tipografía | **2** | Sistema de tres anchos coherente y verificado: prosa `min(42rem, 68ch)`, hero/tira/declaración 52rem, comparador 64rem; escala fluida 17→19 px; `text-wrap: balance` en títulos y `pretty` en párrafos; mediana de frase 13 palabras. Contraste medido: 16,12 / 5,17 / 9,49 en claro y 14,27 / 6,31 / 8,44 en oscuro — sin deuda. Cero desborde horizontal a 390 px. Contra: un hueco tipográfico de **17,4 px en mitad de frase** («…bajo condiciones.<sup>9</sup> Chile no.» y «…normas de la CMF.<sup>7</sup> Lo que se suelta…»), reproducible en las cuatro vistas y en ambas páginas; en `objeciones.html` el `.nav-retorno` se alinea a la columna de 42rem mientras el `h1` de abajo arranca en la de 52rem, así que el primer elemento de la página no se alinea con nada; en escritorio el panel `es-hoy` deja un vacío de ~90 px sobre su línea de cierre. |
| **A3** | La figura (`#figura`) | **2** | En escritorio pasa la regla de los cinco segundos sin ayuda del cuerpo: tres respuestas idénticas («La administradora» ×3) contra tres distintas, y el porqué explícito —«¿Quién responde? **Cada uno por lo suyo**» + «Hacienda: *radicando la responsabilidad civil en el gestor*». En móvil no pasa: 865 px de figura contra 844 px de viewport, los paneles nunca se ven juntos. En escritorio las filas tampoco alinean entre paneles (segunda pregunta a y=163 izquierda, y=190 derecha), así que no se puede escanear de lado a lado: hay que leer. Y el matiz de «¿Quién administra?» afirma un cambio que su fn3 no establece (ver §2). |
| **A4** | Oficio en el detalle | **2** | Mucho oficio real: `.fuentes li[data-n]::before` rinde el marcador anunciado y no la posición de lista (verificado: `"1." "2." "3." "4." "7." "9." "10."`); retornos `↩` de 33×48,5 px; `:focus-visible` con offset; `salto-contenido`; hoja de impresión que imprime la URL; favicon SVG en `data:` (cero requests); `pubDate` del feed con día de semana correcto (12-sep-2026 = sábado); cero anclas rotas y cero ids duplicados en las cuatro páginas. Contra: el bug del `<sup>`; la lista de fuentes de la raíz salta 1,2,3,4,**7**,**9**,**10** sin una línea que explique el hueco; `og-cover.svg` es huérfano y **byte a byte idéntico** a `assets/og-sitio.svg` mientras `og-cover.html`, a su lado, dice que la tarjeta retirada «traía cifras de mercado y un titular que la página ya no sostiene» —de ese archivo ya no es cierto; en `gestor-de-inversiones.html` el `salto-contenido` está dentro de `<main id="contenido">`, o sea apunta a su propio contenedor; no hay `404.html`. |
| **B1** | Tesis en 10 segundos | **3** | La bajada es la tesis completa con su porqué en 42 palabras: «Luxemburgo es el segundo domicilio de fondos del mundo, y en su arquitectura hay una regla que Chile no tiene: administrar un fondo y decidir sus inversiones pueden estar en manos distintas. Este proyecto la crea. **Es la tesis de esta página, y la firmo.**» Y la tira `#cuando` desarma de entrada el malentendido más caro: «**No es ley** · En tramitación. El texto puede cambiar». No cambiaría nada. |
| **B2** | Arquitectura del argumento | **2** | El orden premio → carencia → pieza → soldadura → lo que se abre → objeciones es el único posible y cada sección mueve: `#luxemburgo` instala el premio sin pedir permiso («Luxemburgo administra fondos del mundo entero. Su ahorro interno no explica eso.»), `#falta` hace el quiasmo («Chile tiene lo que a Luxemburgo le faltaba… Le falta la pieza legal») y entrega la evidencia antes que la teoría con la cita del propio Gobierno. La soldadura llega como revelación, no como eslogan. El costo: la revelación no está ganada. «Deja a alguien obligado a decir "esto no me calza"» introduce un beneficio de control que ninguna sección preparó —`#luxemburgo` explicó la regla como captura de ecosistema— y lo atribuye a la misma pieza. Además la declaración + el índice interrumpen entre la tesis y su primer desarrollo: en móvil la pantalla 2 entera es declaración, índice y el primer `h2`. |
| **B3** | Simplicidad sin falsedad | **2** | El lector ajeno lo explica con ejemplo propio y el abogado no encuentra simplificación engañosa en los artículos 15, 16 y 17 —la lectura está apoyada en cita textual del Mensaje y en página. Vigente y propuesto separados por rótulo y por adjetivo. Restan los dos reparos de §2: el matiz sobre el nuevo art. 15 afirma más apertura y menos responsabilidad de la que su nota sostiene, y la asimetría condicional/indicativo entre objeción y respuesta inclina el terreno sin decirlo. |
| **B4** | Registro de la casa | **2** | Cumple la vara casi entera, y de forma medible: cero muletilla «no es X, es Y», cero exclamaciones, cero adjetivo de venta, cero cuantificador vago, cero llamado a votar, cero actores vivos —y el rechazo es explícito: «No lo nombro: acá se comparan arquitecturas y normas, nunca actores». Método y límites declarados en ambas páginas. Una grieta, en la regla «un número o nada»: «**Seis frentes, seis veredictos.** Tres los respondo con el texto en la mano; los otros tres, en parte o nada» encabeza una lista de **siete** `li` sobre **seis** frentes, con 3 «Sí», 2 «En parte» y 2 «No». Ni 6 veredictos, ni 3+3. |
| **C** | Anti-lobby | **2** | Muy por encima del género. El interés llega antes que la sospecha, nombra el mecanismo («cobrar con cargo al fondo, algo que el artículo 16 vigente prohíbe»), el contra-interés («El mismo cambio abre la puerta a competidores mayores») y la apuesta («Que con esa figura lleguen gestores de afuera es apuesta mía»). `objeciones.html` pone la objeción en su versión más fuerte —«Administrar dinero de terceros es la única actividad financiera donde quien decide no arriesga patrimonio propio»— concede dos frentes sin red («Es el frente más fuerte, y queda en pie»; «No los respondo») y **aporta una objeción contra el proyecto que nadie había puesto** («Lo que se suelta podría regir antes que lo que se aprieta… no estaba en la mesa»). Contra: el error de cuenta cae justo sobre la frase que promete la rendición de cuentas; el frente «La escala» se rotula «Sí» dos veces y luego se concede en sustancia bajo otro rótulo («El capital · No: …Un mismo estándar sobre una base menor cuesta más, y eso es cierto»); y «esta página cubre una, el gestor de inversiones, y no recomienda aprobarlo ni rechazarlo» tiene antecedente ambiguo —si «lo» es la figura, la página lo desmiente en cada pantalla; si es el proyecto, el descargo es cierto pero esquiva lo que sí hace. Sin recomendación de voto explícita y sin sobreafirmación contra fuentes externas: **V2 y V3 no se disparan**. |
| **D1** | Cuñas | **3** | Seis candidatas; cuatro pasan los ocho tests o siete de ocho; una lleva la tesis entera (tabla en §4). Registro citable sin nota al pie, sin cifras que exijan verificación, sin actores. |
| **D2** | Audiencias | **2** | Las cinco se mueven de #1 a #2 y en las cinco identifico la frase que las mueve. En dos de ellas —think tank y profesor— la frase que pierde está en piezas insignia (el título como analogía que la pieza hermana concede a medias; el matiz del art. 15), y en legislador la frase que pierde es el error de cuenta. Tabla en §5. |
| **D3** | Superficie de compartir | **2** | Título, `description`, `og:title`, `og:description`, JSON-LD, tarjeta y feed cuentan la misma historia y con las mismas palabras que la bajada; el JSON-LD abre con «Proyecto de ley en tramitación, no vigente»; la tarjeta `assets/og-sitio.png` (1200×630) es render fiel de la bajada. Citable por un académico: autor, fecha, `canonical`, fuentes con página, y las secundarias marcadas en negrita como tales. **Ninguna superficie contradice la pieza — V4 no se dispara**; `og-cover.html` existe precisamente para retirar la tarjeta vieja y dice por qué. Contra: `objeciones.html` reparte la tarjeta de la raíz con el `og:image:alt` de la raíz, así que compartir las objeciones muestra un naipe que no menciona objeciones; las cuatro líneas de bajada a 26 px sobre 1200 px de lienzo son ilegibles al tamaño de miniatura, de modo que la tarjeta entrega solo el título; el `<description>` del feed sigue prometiendo un «sitio personal» de varias piezas cuando la raíz ya es una sola; y `og-cover.svg` cuelga huérfano. |

**Vara Jobs** (A1+A2+A3+A4+B1+B2+B3) = 2+2+2+2+3+2+2 = **15/21** · umbral 17.
**Vara Masiva** (B4+C+D1+D2+D3) = 2+2+3+2+2 = **11/15** · umbral 12.

### Gate

**NO-PASA.** Sin vetos, sin ninguna dimensión bajo 2, sin ningún 0: el veredicto no lo
dispara un defecto, lo dispara la **intersección de las dos varas**, ambas por debajo del
umbral por un punto. La forma del resultado importa más que el rótulo: no hay nada roto que
invalide la pieza; hay nueve dimensiones en «sólido, con un cierre concreto» donde la vara
pide clase mundial. Los cierres son pequeños y nombrables. Con los cuatro bloqueantes de §7
resueltos, A3 y A4 pasan a 3 (Jobs 17) y B4 y C pasan a 3 (Masiva 13): ambas varas cierran
en una sesión de trabajo, sin reescribir el argumento.

---

## 4 · Cuñas

Tests: 1 autonomía · 2 verdad · 3 portabilidad · 4 atribución segura · 5 memorabilidad ·
6 quién la dice · 7 torsión respondida · 8 anti-frase identificada.

| Cuña verbatim | Ancla | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | Quién la dice | Torsión probable | Anti-frase |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| «La plomería se queda en casa. El talento viene de donde sea.» (60 car.) | `#luxemburgo` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ~ | ✓ | Legislador, profesor, think tank | «Nos quedamos con la plomería y las utilidades se van» | «Quién decide las inversiones puede estar en Londres, Nueva York o São Paulo» — sola suena a fuga de decisiones |
| «Chile tiene lo que a Luxemburgo le faltaba: un ahorro previsional profundo. Le falta la pieza legal.» (99 car.) | `#falta` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Legislador, think tank, equipo de inversiones | «Entonces basta importar la pieza» — la pieza hermana ya lo acota («El espejo · En parte») | «un ahorro previsional profundo» sola abre el debate de pensiones, que no es el de la página |
| «Separar al que decide del que administra deja a alguien obligado a decir "esto no me calza".» (91 car.) | `#figura` | ✓ | ~ | ✓ | ✓ | ✓ | ✓ | ~ | ✓ | Legislador, profesor, abogado | «Partirlo en dos significa que nadie responde» — la página la concede en `objeciones.html` («La frontera · No: queda abierta») | «Cada uno por lo suyo» sola dice justo lo que teme el opositor |
| «Para una firma global, entrar a Chile hoy significa montar una administradora completa.» (86 car.) | `#falta` | ✓ | ✓ | ✓ | ✓ | ~ | ✓ | ✓ | ✓ | Abogado, equipo de inversiones, legislador | «Y qué: que la monten» | «montar una administradora completa» sin el «para una firma global» pierde el sujeto |
| «Contratar a un especialista cuesta y no libera.» (46 car.) | `#falta` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Abogado, legislador | Baja | «no libera» sola se lee como juicio sobre el especialista |
| «Una sola mano carga con todo.» / «Tres manos, tres firmas.» (29 / 24 car.) | `#figura` | ~ | ✓ | ✓ | ✓ | ✓ | ✓ | ~ | ✓ | Legislador, profesor | «Tres manos, tres firmas y cero responsables» | Citarlas por separado rompe el par |

**La cuña que lleva la tesis entera: existe.** Es la tercera, en su versión larga —«Separar
al que decide del que administra deja a alguien obligado a decir "esto no me calza". Es la
pieza que Luxemburgo escribió, Chile no tiene y este proyecto crea» (165 car., dentro del
máximo de 200)—. Cierra el bucle que abre el título y contesta de una vez qué es, de dónde
viene y qué hace. Su única debilidad es el test 2: la obligación que invoca descansa en el
deber de verificación previa del nuevo artículo 16 (fn2), y ni la frase ni su sección lo
dicen; el lector la recibe como afirmación del autor sobre conducta futura.

**Propuestas (no edito; marco como propuesta).**
1. *Propuesta* — cerrar el test 2 sin tocar el ritmo: «Separar al que decide del que
   administra deja a alguien con el deber de verificar y decir "esto no me calza".» Una
   palabra —*deber*— ata la cuña al texto ya citado al pie.
2. *Propuesta* — una cuña que hoy no existe y que el género pide, la del costo de no hacerlo:
   la página tiene el material («Contratar a un especialista cuesta y no libera» + «montar
   una administradora completa») pero nunca lo funde en una sola línea repetible.

---

## 5 · Audiencias

| Audiencia | Reacción #1 | Reacción #2 | ¿Mueve? | Frase que mueve | Frase que pierde |
|---|---|---|---|---|---|
| Político / legislador | «Es lobby de un gestor que gana con la ley» | «Tengo el argumento de 30 s y la figura para la comisión» | **Sí, con reserva** | «Tengo interés económico directo: si el proyecto se aprueba, una firma como la mía podría ser designada gestora y cobrar con cargo al fondo, algo que el artículo 16 vigente prohíbe.» + la tira «**No es ley** · En tramitación» | «Seis frentes, seis veredictos» sobre una lista de siete: un asesor que verifica no cita una página que no sabe contar sus propias respuestas |
| Think tank | «La analogía con Luxemburgo es floja y sin evidencia primaria» | «Citable en un policy brief» | **Sí, con reserva** | fn9: «**Fuentes secundarias:** no verificadas contra el texto primario de la Directiva ni contra la legislación luxemburguesa; se citan por la arquitectura que describen.» | El propio título: «Chile puede ser el Luxemburgo de América Latina» es la analogía que desconfía, y la pieza hermana la concede a medias («El espejo · En parte») sin que la raíz lo insinúe |
| Profesor universitario | «Simplifica hasta la inexactitud; mezcla vigente con propuesto» | «El comparador es material de clase sobre arquitectura regulatoria» | **Parcialmente** | El comparador entero: `Hoy` / `Con el proyecto` contestando las **mismas** tres preguntas, una sola tríada de funciones | «contabilidad y valorización pueden ir a terceros fiscalizados» contra su propia fn3 («**solo** pueden encomendarse a las entidades… con **responsabilidad exclusiva de esas entidades**») |
| Equipo de inversiones | «Marketing de un competidor; no dice nada que no sepa» | «Lo reenvío al comité» | **Sí** | «Para una firma global, entrar a Chile hoy significa montar una administradora completa» + «Una administradora chica… podría ofrecer estrategias que hoy no sabe correr, contratando a quien sí» | «Más gestores compitiendo por su plata presiona las comisiones hacia abajo»: afirmación económica sin número, en una audiencia que vive de números —la salva «Lo que sigue es lectura mía», pero la salva justo |
| Abogado | «Lee mal los artículos 15, 16 y 17» | «La lectura es defendible, con página del Mensaje» | **Sí, con corrección** | «El **15** declara indelegable la responsabilidad de administrar. El **16** obliga a que al especialista lo pague la administradora, nunca el fondo. El **17** la deja respondiendo por decisiones que tomó otro.» con fn1 pp. 54-55 | «El gestor **queda** inscrito en el Registro de Administradoras de Carteras, bajo fiscalización de la CMF conforme al Título II»: presente de indicativo para una norma que no existe |

---

## 6 · Los tres movimientos de Apple

- **Se corta.** La declaración de `#declaracion` baja de 79 a ~48 palabras —la versión de
  `objeciones.html` ya demuestra que el trabajo se hace en 48— y el resto migra a `#metodo`.
  Se recupera media pantalla de móvil antes del primer argumento sin ceder un gramo de
  honestidad.
- **Se agranda.** El comparador de `#figura` tiene que caber entero en 390×844 (hoy: 865 px)
  y alinear sus tres filas entre paneles. Es la única pieza de la página que alguien va a
  proyectar en una sala, y hoy en el teléfono se lee de memoria.
- **Se afina.** La soldadura de `#figura` gana la palabra que le falta —el **deber** de
  verificación previa del nuevo artículo 16, ya citado en fn2— y deja de ser una afirmación
  del autor sobre conducta futura para ser una lectura del texto.

---

## 7 · Cierres priorizados

| Severidad | Dónde | Qué | Por qué (dim.) | Fix propuesto | Vuelve a |
|---|---|---|---|---|---|
| **Bloqueante** | `objeciones.html` `.debate-tesis` de `#respuesta` | «Seis frentes, seis veredictos. Tres los respondo…; los otros tres…» sobre 7 `li` y 6 frentes (3 Sí / 2 En parte / 2 No) | B4, C | Contar de nuevo y decirlo como es: «Seis frentes. Dos los respondo con el texto en la mano, dos en parte, dos no.» | Escritor / verificador |
| **Bloqueante** | `#figura` `.comparador` en 390 px | 369+479+17 = 865 px contra 844: los dos paneles nunca coexisten | A3 | Recortar ~40 px (un matiz menos por panel, o padding 1,15→0,9rem) y alinear las tres filas con `subgrid` o alturas mínimas iguales | Curador de diseño |
| **Bloqueante** | `assets/sitio.css` · `sup.nota-ref + sup.nota-ref { margin-left: 1.1em }` | El combinador `+` ignora los nodos de texto: dispara entre refs separadas por dos frases e inserta 17,4 px en mitad de oración («…bajo condiciones.⁹ Chile no.»; «…normas de la CMF.⁷ Lo que se suelta…»). Reproducible en 390 y 1440, claro y oscuro, ambas páginas | A2, A4 | Restringir la regla a refs realmente contiguas (envolver las consecutivas, o `sup.nota-ref + sup.nota-ref:first-child`-equivalente con `:has()`); el objetivo táctil ya lo cubre el `padding` del `<a>` | Curador de diseño |
| **Bloqueante** | `#figura`, matiz de «¿Quién administra?» | «contabilidad y valorización pueden ir a terceros fiscalizados» afirma apertura donde fn3 dice «**solo** pueden encomendarse a… con **responsabilidad exclusiva de esas entidades**» | A3, B3, C | Decir lo que la nota sostiene: «contabilidad y valorización van a entidades fiscalizadas, que responden por lo suyo» | Jurista / verificador |
| Corregible | `objeciones.html` `#respuesta`, golpes 1-2 y 7 | «La escala · Sí» dos veces, y después la escala se concede bajo otro rótulo: «El capital · No: …Un mismo estándar sobre una base menor cuesta más, y eso es cierto» | C | Un frente, un veredicto: mover la concesión al rótulo «La escala» o bajar esos «Sí» a «En parte» | Adversario |
| Corregible | `#declaracion` | «esta página cubre una, el gestor de inversiones, y no recomienda aprobarlo ni rechazarlo»: antecedente ambiguo; bajo la lectura próxima, la página lo desmiente en cada pantalla | C | Decir lo que hace: «argumento a favor de esta figura; no me pronuncio sobre el resto del proyecto ni pido un voto» | Escritor |
| Corregible | `objeciones.html`, respuestas | Indicativo para normas propuestas («queda inscrito», «debe decirlo, y queda bajo») frente a 5 condicionales del lado de la objeción | B3 | Igualar el modo verbal en ambos lados, o abrir cada respuesta con «El texto propuesto…» como ya hace la primera | Jurista |
| Corregible | `#figura` `.ancla-idea` | La soldadura introduce un beneficio de control que ninguna sección preparó y lo atribuye a la regla luxemburguesa, presentada en `#luxemburgo` como captura de ecosistema | B2 | Una línea en `#figura` que ate el deber de verificación (fn2) al «esto no me calza», o soltar la atribución a Luxemburgo en esa frase | Escritor |
| Corregible | `objeciones.html` `<head>` | Hereda `og:image` y `og:image:alt` de la raíz: compartirla muestra una tarjeta que no menciona objeciones | D3 | Tarjeta propia con el `h1` de la pieza, o al menos `og:image:alt` propio | Curador de diseño |
| Menor | `#fuentes` de la raíz | Numeración visible 1,2,3,4,**7**,**9**,**10** sin explicar el salto | A4 | Una línea al abrir la sección: «la numeración es común con la página de objeciones» | Verificador |
| Menor | `og-cover.svg` (raíz) | Huérfano, sin referencia, byte a byte idéntico a `assets/og-sitio.svg`, junto a un `og-cover.html` que dice que la tarjeta retirada «traía cifras… que la página ya no sostiene» | A1, D3 | Borrarlo | Verificador |
| Menor | `assets/sitio.css` | 64/108 clases (59 %) sin uso en ninguna página servida; 38.388 bytes para dos piezas | A1 | Podar a lo que las dos piezas usan | Curador de diseño |
| Menor | `assets/og-sitio.png` | Cuatro líneas de bajada a 26 px sobre 1200×630: ilegibles al tamaño real de una miniatura | A4, D3 | Una línea de bajada, 8-10 palabras | Curador de diseño |
| Menor | `gestor-de-inversiones.html` | `salto-contenido` dentro de `<main id="contenido">`: apunta a su propio contenedor | A4 | Sacarlo antes de `<main>` como en las otras páginas | Curador de diseño |
| Menor | `feed.xml` | El `<description>` del canal promete un «sitio personal» de varias piezas; la raíz ya es una sola | D3 | Alinear la descripción del canal con lo que el sitio es hoy | Verificador |

---

## 8 · Fugas del harness

| Hallazgo | Gate que debió atraparlo |
|---|---|
| `sup.nota-ref + sup.nota-ref` dispara entre referencias no adyacentes → 17,4 px de hueco en mitad de frase, en ambas páginas y en las cuatro vistas | Familia `X` de render (X04 tipografía fluida / X07 modo oscuro miden tokens y escala, ninguno mide espaciado inline resultante) |
| «Seis frentes, seis veredictos… los otros tres» contra 7 `li` y 6 frentes | `S08` (cifras respaldadas) o la familia `D01-D05`: falta un contador que verifique el resumen contra su propia lista |
| `og-cover.svg` huérfano e idéntico byte a byte a `assets/og-sitio.svg`, y el texto de `og-cover.html` ya no describe a su vecino | `S06` (no-reutilización) / manifest de superficies |
| `objeciones.html` hereda `og:image:alt` de la raíz, describiendo una tarjeta que no habla de objeciones | `S03` (metadata): valida presencia, no correspondencia pieza↔tarjeta |
| `salto-contenido` dentro de su propio destino en `gestor-de-inversiones.html` | `X09` (accesibilidad base): no cubre las páginas de redirección |
| 59 % del CSS sin uso en ninguna página servida | `X06` (peso): mide bytes totales, no bytes muertos |
| Numeración de fuentes con saltos visibles (1,2,3,4,7,9,10) sin glosa | `S02` (notas al pie): valida que el ancla resuelva, no que la serie se lea continua |

---

## 9 · Lo que no pude verificar

- **La URL pública.** El proxy de red de esta sesión la bloquea. Evalué el árbol local
  (`index.html`, `objeciones.html`, `assets/sitio.css`, `assets/og-sitio.svg|png`,
  `feed.xml`, `og-cover.html`, `og-cover.svg`, `gestor-de-inversiones.html`) y capturas que
  rendericé yo mismo en Chromium headless a 390×844 y 1440×900, claro y oscuro,
  `reducedMotion: reduce`, con la secuencia completa de scroll de ambas páginas. **No
  verifiqué:** el sitio servido por GitHub Pages (cabeceras, rutas relativas reales,
  comportamiento efectivo de las dos redirecciones `meta refresh`), ni el recorte real de la
  tarjeta social en LinkedIn, X o WhatsApp, ni el feed contra un validador RSS. Haría falta
  acceso HTTP a la URL canónica y a los depuradores de tarjetas de cada plataforma.
- **Tipografía.** Este Chromium sobre Linux no tiene Georgia ni `-apple-system`: sustituye.
  Medida, ritmo, color de interfaz y jerarquía sí son evaluables tal como los reporto; el
  color tipográfico exacto de la página en un Mac o un iPhone, no. Haría falta una corrida
  con las familias reales instaladas.
- **Hechos externos.** No verifiqué que Luxemburgo sea el segundo domicilio de fondos del
  mundo, ni el artículo 20 de la Directiva 2011/61/UE, ni la Instrução CVM 558/2015 ni la
  Resolução CVM 175/2022, ni el texto ni la paginación del Mensaje N° 166-374, ni la minuta
  de Hacienda, ni la Resolución Exenta N° 10.950 de la CMF. Conforme a la regla, no juzgo su
  verdad: juzgo cómo la página declara cada fuente, y en eso la declaración es ejemplar
  (fn9 y fn10 marcan «Fuentes secundarias» en negrita y dicen contra qué no fueron
  verificadas). Para verificarlos haría falta el PDF del Mensaje con paginación, el texto
  vigente de la Ley 20.712 —que la propia página declara no tener a la vista— y la
  resolución de la CMF.
- **La barra de progreso y `@view-transition`.** Confirmé por estilo computado que la barra
  existe y avanza (`transform: matrix(0.56, …)` al 50 % del scroll, 3 px, en acento), pero no
  evalué su comportamiento en scroll real ni la transición entre páginas: solo capturé con
  movimiento reducido, como pide el protocolo.
- **Historial.** No abrí el historial del repositorio ni ninguna corrida de otro evaluador.
  No sé qué versiones tuvo esta página y no la comparo con ninguna: la vara de este informe
  es la mejor página posible sobre este tema.
