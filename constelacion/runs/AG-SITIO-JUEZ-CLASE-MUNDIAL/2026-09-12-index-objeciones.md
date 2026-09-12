```yaml
eval: EVAL-sitio-luxemburgo-2026-09-12
evalua: index.html + objeciones.html @ ff0e68a | dateModified 2026-09-12
rubrica: JUEZ-CLASE-MUNDIAL
rubrica_version: v0.1
autor_eval: agente aislado (no el productor)
independencia: informacion (solo URL + prompt)
veredicto: NO-PASA
vara_jobs: 13/21
vara_masiva: 9/15
vetos: [V4]
```

**Nota de método.** La URL pública estaba bloqueada por el proxy de red. Evalué el código fuente local, declarado idéntico al desplegado (commit `ff0e68a`), y capturas reales en Chromium a 390×844 y 1440×900, en claro y oscuro. El detalle de lo que eso deja fuera está en §9.

## 1 · Primera impresión

**Diez segundos, cuatro vistas.** Título, bajada y tira de estado entregan: Chile puede ser un domicilio de fondos como Luxemburgo; lo que falta es una regla legal; este proyecto la crea; ingresó el 9-sep-2026, no es ley, el régimen rige seis meses después. En escritorio la declaración de interés cabe entera en la primera pantalla; en móvil se ve su título («Quién escribe esto y qué gana») y la primera línea. Lo que no entendí en diez segundos: **cuál es la regla**. La bajada dice «una regla legal que Chile no tiene» y no la nombra. La separación decide/administra aparece por primera vez en `#falta`, tercera pantalla móvil.

**Tiempo de lectura.** No cronometro como un humano; mido: 880 palabras de cuerpo (sin fuentes ni colofón), 4,4 minutos a 200 palabras por minuto; 546 palabras más de fuentes. La meta description promete «cuatro minutos»: se cumple para el cuerpo. `objeciones.html` pesa parecido.

**La frase que quedó.** «La plomería se queda en casa. El talento viene de donde sea.» (`#luxemburgo`, `.ancla-idea`).

## 2 · Test de la tesis

**Mis dos frases.** (i) La página sostiene que el «gestor de inversiones» del proyecto —un tercero inscrito en la CMF al que la administradora puede encargarle la cartera, pagado por el fondo y responsable de sus decisiones— es la pieza legal que le falta a Chile para ser domicilio de fondos regionales. (ii) Separar importa porque hoy una sola entidad decide, administra y responde: contratar a un especialista cuesta y no libera, y una firma global tiene que montar una administradora completa para entrar; separados, el que decide responde por lo que decide, el que administra queda obligado a verificar, y la plomería —administración, custodia, auditoría— se queda en Chile aunque el talento esté afuera.

Comparación: coincide con la página. Una diferencia: el paso de «figura» a «domicilio» —que lleguen gestores extranjeros— la propia página lo declara apuesta en `#cadauno` («Ojo: el texto no menciona firmas extranjeras; que lleguen es apuesta mía»), pero el título y la bajada lo cargan como tesis firmada. La distancia entre lo que el proyecto hace (permitir delegar la cartera radicando la responsabilidad en el gestor) y lo que el título promete (Luxemburgo) la cubre una apuesta declarada seis pantallas después.

**Lector ajeno.** Una ingeniera lo explica con ejemplo propio: «hoy la misma empresa diseña el puente, lo construye y lo inspecciona; el proyecto separa al inspector del diseñador y hace que cada uno responda por lo suyo». Entiende qué gana Chile («El ecosistema se queda aunque el gestor esté a doce mil kilómetros») y qué gana ella («Más gestores compitiendo por su plata presiona las comisiones hacia abajo»). El comparador se entiende sin releer el cuerpo en lo esencial: una mano, tres manos. La tarjeta «Terceros fiscalizados» sí la hace dudar: si contabilidad y valorización se van a terceros, ¿qué administra la administradora? V1 no se dispara.

**Abogado regulatorio.** Lectura defendible como primer mapa: lo vigente (`#falta`, nota 1 con página) y lo propuesto (`#figura`, notas 2-4 con página) van separados en cada frase, y el comparador los separa en dos paneles. Tres salvedades: (a) el panel «Con el proyecto» omite que la administradora sigue respondiendo por el incumplimiento de sus propios deberes —lo cita textualmente `objeciones.html`, no la raíz—; (b) «responde por sus decisiones» resume una responsabilidad exclusiva «dentro del ámbito del encargo», matiz que solo aparece en la hermana; (c) «6 meses» en la tira lee como plazo fijo cuando la nota dice «dentro de los seis meses», es decir, un máximo. Simplifica; no hasta la inexactitud.

## 3 · Scorecard

| # | Dimensión | Pts | Evidencia |
|---|---|---|---|
| A1 | Sustracción | 2 | `sirve`: etiqueta, título, bajada, tira de estado, declaración, las cuatro secciones, cita grande, comparador, las dos anclas, «para cada uno», caja de objeciones, método, fuentes, colofón. `decoración`: `.nav-pie` — sus tres enlaces («Las objeciones →», «↑ Subir», «RSS») ya existen en la caja inmediatamente superior, en el navegador y en el colofón. `duda`: `details.indice-pieza` (índice de cinco entradas para 880 palabras y cuatro H2); «Irlanda hizo lo mismo, y tampoco tenía el capital» (segundo ejemplo, sin nota); la tarjeta «Terceros fiscalizados» del comparador; el monograma «AP» junto a un nombre que ya está escrito. |
| A2 | Jerarquía, ritmo y tipografía | 2 | Medida correcta: ≈68 caracteres por línea en escritorio, ≈45 en móvil; tipografía fluida con `clamp` en cuerpo, H1, bajada y ancla. «Una idea por pantalla» se cumple salvo en la pantalla móvil 3 (cierre de `#luxemburgo` más `#falta` con los tres artículos). Costurones: en ≤ 34 rem `.hero-etiqueta .sep {display:none}` deja «MERCADO DE CAPITALES  CHILE, 2026» sin separador; tres voces tipográficas más una cuarta —monoespaciada— en `.tira-estado .valor`, que lee a tablero y no a ensayo; en 1440 px el panel «Hoy» del comparador queda más de la mitad vacío. Modo oscuro consistente en las cuatro vistas. |
| A3 | La figura (`#figura`) | 2 | Cinco segundos: sí. «Hoy»: una caja, tres cargas, «Una sola mano carga con todo». «Con el proyecto»: tres cajas, «Tres manos, tres firmas». El porqué está: «Decide y responde por esas decisiones» y «radicando la responsabilidad civil en el gestor». Costurón: la tríada del texto es de funciones (decide / administra / responde) y la del comparador es de entidades (gestor / administradora / terceros fiscalizados); «Terceros fiscalizados: contabilidad, valorización, control interno» toma funciones que el cuerpo atribuyó a «administrar» y no coincide con la lista de `#luxemburgo» («administración, custodia y auditoría»). A la administradora le falta «responde por sus propios deberes». |
| A4 | Oficio en el detalle | 1 | **Roto:** los marcadores del cuerpo son `1·2·3·4·7·9·10` y la `<ol>` de `#fuentes` se numera sola 1-7; en pantalla «⁷» (tira de estado) apunta a la nota que se ve como «5.», «⁹» a la «6.» y «¹⁰» a la «7.». En `objeciones.html`, `5·6·7·8` se ven como `3·4·5·6`. El ancla funciona; el ojo, no. Además: en móvil, con el índice abierto, el «1.» cae en la segunda línea del enlace (`.indice-pieza a {display:inline-block}`); `og:image` es SVG, formato que las redes principales no suelen renderizar; la tarjeta dice «y es segundo domicilio» (falta «el»); `og-cover.html` y `og-cover.svg` siguen servidos con cifras retiradas; `gestor-de-inversiones.html` conserva en su JSON-LD un titular que ya no existe y pone el salto de contenido dentro de `<main>`; el tercer enlace de `.nav-pie` es «RSS» en la raíz y «Fuentes» en la hermana. Bien resuelto: `:focus-visible` definido, salto de contenido, `scroll-margin-top` en notas, `li:target` resaltado, favicon en data-URI, `prefers-reduced-motion`. |
| B1 | Tesis en 10 segundos | 2 | Título y bajada entregan la tesis (Chile / Luxemburgo / regla legal / este proyecto) y la firman («Es la tesis de esta página, y la firmo»). No entregan el porqué: la regla no se nombra. El propio `feed.xml` lo hace mejor que la página: «una regla legal que separa a quien administra un fondo de quien decide sus inversiones». |
| B2 | Arquitectura del argumento | 2 | El orden premio (`#luxemburgo`) → carencia (`#falta`) → pieza (`#figura`) → soldadura (`.ancla-idea`) → lo que se abre (`#cadauno`) → objeciones se cumple, y cada sección mueve. La soldadura llega a medias: «pone a alguien con la obligación de decir “esto no me calza”» está preparada por «verifica al gestor»; «Lo que atrae la plata es lo mismo que la cuida» no lo está — nada antes dijo que los estándares atraen dinero, y ahí suena a eslogan. |
| B3 | Simplicidad sin falsedad | 2 | El lector ajeno explica con ejemplo propio (§2). Vigente y propuesto separados en cada frase y en el comparador. Salvedades del abogado (§2): responsabilidad residual de la administradora ausente en la figura; «6 meses» como plazo fijo. |
| B4 | Registro de la casa | 2 | Sobrio, breve, cero exclamaciones, cero adjetivo de venta, arquitecturas y no actores en el cuerpo. Brechas: la muletilla en variante «no X. Y» tres veces en la raíz —«No llegó por su plata. Llegó por una regla legal» (bajada, description y feed), «lectura mía, no texto del proyecto», «por la arquitectura que describen, no por cifras»— y dos en la hermana («es la regla, no el régimen»; «no como comparación entre actores»); vaguedades: «Casi nadie lo hace», «Por eso no entran», «un regulador que la región respeta»; «Ojo:»; la nota 8 de `objeciones.html` nombra a la administradora sancionada y a dos firmas auditoras cuando la casa declara «nunca actores»; «Ésta» con tilde dos veces en la hermana y nunca en la raíz. |
| C | Anti-lobby | 2 | Interés antes de la sospecha: `#declaracion` en la primera pantalla de las cuatro vistas, con «El mismo cambio abre la puerta a competidores mayores». Sin recomendación de voto. Objeción en su versión más fuerte (seis frentes) y una objeción propia contra el proyecto («Lo que se suelta podría regir antes que lo que se aprieta»): es el activo mayor de la pieza. Brechas: de los seis frentes, **«La frontera» y «El arbitraje» no reciben Sí / En parte / No**, y la raíz llama a la frontera «la principal». Sobreafirmaciones respecto a las notas: «Los mercados profundos lo resolvieron; Chile es la excepción» (la nota 10 dice «sin comparar regímenes en detalle»), «Irlanda hizo lo mismo» (sin nota), «Por eso no entran» (inferencia como hecho). La bajada es monocausal («Llegó por una regla legal») y la hermana concede «En parte» a la tributación y la escala. «No recomienda aprobar ni rechazar nada» se sostiene solo si el lector sabe que el proyecto es una reforma amplia y la página cubre una figura; la raíz no lo dice. |
| D1 | Cuñas | 2 | Once candidatas (§4). Pasan los ocho tests «plomería», «una sola mano / tres manos» y «no hay Luxemburgo sin los estándares de Luxemburgo»; «esto no me calza» y el título pasan con la torsión respondida a medias. Ninguna lleva la tesis entera. |
| D2 | Audiencias | 2 | Cuatro de cinco pasan de #1 a #2 con frase identificable (§5). El think tank pasa a medias: la parte chilena es citable con página; la analogía luxemburguesa descansa en secundarias declaradas y en una Irlanda sin fuente. |
| D3 | Superficie de compartir | 1 | Título, `og:title`, tarjeta y feed cuentan la misma historia con tres redacciones de la misma frase: la bajada calla la regla; `og:description`, JSON-LD y la tarjeta endurecen («La pieza / regla legal que lo explica») sin el «la firmo»; el feed la nombra. **Contradicción:** `og-cover.html` y `og-cover.svg`, servidos en la raíz, muestran «83 % Financiamiento concentrado en banca», «0 Fund Administrators independientes», «9–15 Meses para implementar sin Congreso», «500.000 empresas… Tu pensión invierte en 250» y la etiqueta «Memorándum de Política Pública»: cifras que la raíz retiró («No uso cifras de mercado») y una tesis anterior —sin Congreso— que la raíz contradice (proyecto en la Cámara). Citable: autor, canonical y fuentes con página, sí; la fecha de publicación vive solo en el JSON-LD, no en la página. |

**Vara Jobs** = A1 2 + A2 2 + A3 2 + A4 1 + B1 2 + B2 2 + B3 2 = **13/21**.
**Vara Masiva** = B4 2 + C 2 + D1 2 + D2 2 + D3 1 = **9/15**.

**Gate.** Dos dimensiones en 1 (A4, D3), Vara Jobs bajo 17, Vara Masiva bajo 12 y un veto: **NO-PASA**.

- **V1** no se dispara: el lector ajeno reproduce la tesis con ejemplo propio.
- **V2** no se dispara: el interés está en la primera pantalla de las cuatro vistas y no hay voto encubierto.
- **V3** no se dispara, con reserva: las sobreafirmaciones halladas están en el cuerpo, no en el titular ni en las anclas, y van acompañadas de una nota que declara su límite o de la fórmula «Es la tesis de esta página, y la firmo», que las declara opinión. Una lectura más estricta cargaría «Los mercados profundos lo resolvieron; Chile es la excepción» como cuña que dice más que su nota. Lo dejo dicho y lo registro como corregible.
- **V4 se dispara:** `og-cover.html` y `og-cover.svg` son superficies públicas alcanzables que contradicen la pieza en cifras, mecanismo («sin Congreso») y género («Memorándum»).

Sin `og-cover.*`, con las notas numeradas como el cuerpo las anuncia y con la regla nombrada en la bajada, la misma página quedaría en PASA-CON-FIXES.

## 4 · Cuñas

Tests: 1 autonomía · 2 verdad · 3 portabilidad · 4 atribución segura · 5 memorabilidad · 6 quién la dice · 7 torsión respondida en la página · 8 anti-frase identificable. Largo en caracteres entre paréntesis.

| Cuña (verbatim) | Ancla | Tests 1-8 | Quién la dice | Torsión probable | Anti-frase de la sección |
|---|---|---|---|---|---|
| «Chile puede ser el Luxemburgo de América Latina» (47) | `h1` | ✓ ✓ ✓ ✓ ✓ ✓ ± ✓ — el «puede» salva la verdad; la torsión la responde la hermana («En parte»), no la raíz | político, think tank, inversiones | «Quiere convertir a Chile en paraíso fiscal» | «No llegó por su plata» |
| «No llegó por su plata. Llegó por una regla legal que Chile no tiene.» (68) | `.pieza-bajada` | ✓ ✗ ✓ ✓ ✓ ✓ ± ✓ — monocausal: la nota 9 describe arquitectura, no causas; la hermana concede escala y tributación | político, prensa | «Sí llegó por su plata: por la ajena, con impuestos» | la misma frase sin «Es la tesis de esta página, y la firmo» |
| «La plomería se queda en casa. El talento viene de donde sea.» (60) | `#luxemburgo` | ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ — nota 9: administración central, depositario y auditor locales; imagen física más paralelismo | político, profesor, inversiones | «Plomería es empleo de bajo valor; el talento se va» | «Irlanda hizo lo mismo» |
| «Contratar a un especialista cuesta y no libera.» (47) | `#falta` | ± ✓ ✓ ✓ ✓ ✓ ✓ ✓ — pide saber quién contrata | abogado, inversiones | «La industria quiere liberarse de responder» | «Casi nadie lo hace» |
| «Para una firma global, entrar a Chile hoy significa montar una administradora completa. Por eso no entran.» (106) | `#falta` | ✓ ✗ ✓ ✓ ✓ ✓ ✗ ✓ — «Por eso no entran» es inferencia sin nota; la hermana admite «lo que no sé» sobre el tamaño del mercado | inversiones, político | «No entran por tamaño de mercado, no por el artículo 16» | «Por eso no entran» |
| «Una sola mano carga con todo. Tres manos, tres firmas.» (54) | `#figura` | ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ — la hermana responde «el estándar no cede por tamaño» | político, profesor | «Tres manos: nadie responde» | «Terceros fiscalizados» |
| «Separar al que decide del que administra pone a alguien con la obligación de decir “esto no me calza”.» (102) | `#figura` | ✓ ✓ ✓ ✓ ✓ ✓ ± ✓ — deber de verificación previa (nota 2); la torsión «partir en dos la responsabilidad deja una frontera» está planteada en la hermana y no respondida | político, abogado, profesor | «También parte en dos la responsabilidad» | «Tres manos, tres firmas» fuera de contexto |
| «Lo que atrae la plata es lo mismo que la cuida: no hay Luxemburgo sin los estándares de Luxemburgo.» (99) | `#figura` | ✓ ✓ ✓ ✓ ✓ ✓ ± ✓ — normativa, no fáctica; «tampoco hay Luxemburgo sin los impuestos de Luxemburgo» recibe «En parte» en la hermana | político, think tank | la de la columna anterior | «Chile es la excepción» |
| «Los mercados profundos lo resolvieron; Chile es la excepción.» (61) | `#falta` | ✓ ✗ ✓ ✓ ✓ ✓ ✗ — | político, prensa | «¿Cuáles? Cita dos, una sin verificar» | es la anti-frase |
| «Si el banco dice que no, se acabó. Cada gestor especializado es otra puerta, con criterios distintos.» (101) | `#cadauno` | ✓ ✓ ✓ ✓ ✓ ✓ ± ✓ — declarada «lectura mía»; «puertas sin colateral» recibe «No: tres puntos» | político, pyme | «Más puertas, menos garantías» | «que lleguen es apuesta mía» leído solo |
| «Chile tiene lo que a Luxemburgo le faltaba: un ahorro previsional profundo y un regulador que la región respeta. Le falta la pieza legal.» (137) | `#falta` | ✓ ± ✓ ✓ ✓ ✓ ✓ ✓ — «que la región respeta» sin fuente | político, think tank | «El ahorro previsional ya se está retirando» | — |

**La cuña que lleva la tesis entera no existe.** «Plomería» carga el domicilio sin la regla; «esto no me calza» carga la regla sin Luxemburgo; el título carga Luxemburgo sin la regla. Hoy la tesis completa exige dos frases. Propuestas, marcadas como tales:

- **Propuesta 1** (140): «Hoy en Chile una sola mano decide, administra y responde por un fondo. Luxemburgo las separa; el proyecto crea la figura que lo permite acá.»
- **Propuesta 2** (142): «Separar al que decide del que administra deja a alguien obligado a decir “esto no me calza”. Esa regla Chile no la tiene; el proyecto la crea.»

## 5 · Audiencias

| Audiencia | Reacción #1 | Reacción #2 | ¿Mueve? | Frase que mueve | Frase que pierde |
|---|---|---|---|---|---|
| Político / legislador | «Es lobby de un gestor que gana con la ley» | «Tengo el argumento de 30 segundos y la figura; el interés está declarado y no me pide votar» | Sí | «Una sola mano carga con todo» / «Tres manos, tres firmas», más la cita del Mensaje presentada como «el diagnóstico del propio Gobierno» | «…que este proyecto crea. Es la tesis de esta página, y la firmo», leída junto a «no recomienda aprobar ni rechazar nada»: suena a contradicción si no se sabe que el proyecto es amplio |
| Think tank | «La analogía con Luxemburgo es floja y sin evidencia primaria» | «Citable en un policy brief: primarias con página, límites declarados, comparado regional» | A medias | Nota 9: «Fuentes secundarias: no verificadas… se citan por la arquitectura que describen, no por cifras», y `#metodo` | «Los mercados profundos lo resolvieron; Chile es la excepción» · «Irlanda hizo lo mismo» · «menos habitantes que el Gran Santiago» sin fuente |
| Profesor universitario | «Simplifica hasta la inexactitud; mezcla vigente con propuesto» | «El comparador Hoy / Con el proyecto es material de clase» | Sí, con salvedad | «Son tres artículos. El 15… El 16… El 17…» y los dos paneles separados | «Terceros fiscalizados: contabilidad, valorización, control interno», tríada distinta de la del texto; «Casi nadie lo hace» |
| Equipo de inversiones | «Marketing de un competidor; no dice nada que no sepa» | «Lo reenvío al comité: explica por qué no entran gestores globales y qué cambia para nosotros» | Sí | «Para una firma global, entrar a Chile hoy significa montar una administradora completa» · «Una administradora chica… contratando a quien sí» | «No uso cifras de mercado» —el comité querrá una— y «Por eso no entran» como absoluto |
| Abogado | «Lee mal los artículos 15, 16 y 17» | «Defendible, con página del Mensaje; primer mapa del cambio» | Sí, con salvedad | Nota 2: «artículo noveno N° 6, p. 177 … nuevo artículo 17, p. 178» | En la figura, «Administradora: Administra el fondo y verifica al gestor» sin la responsabilidad residual; y la nota «⁷» que en la lista se ve como «5.» |

## 6 · Los tres movimientos de Apple

- **Se corta:** `.nav-pie` —tres enlaces que ya existen a un scroll de distancia— y, fuera de la página, `og-cover.html` y `og-cover.svg`: nada que la raíz retiró puede seguir servido.
- **Se agranda:** la regla. Que `.pieza-bajada` diga en una cláusula lo que `feed.xml` ya dice —separar a quien administra un fondo de quien decide sus inversiones— para que el porqué entre en los diez segundos.
- **Se afina:** `#figura`. Una sola tríada (decide / administra / responde) en texto y comparador; «Terceros fiscalizados» baja a una línea bajo la administradora; la administradora dice «responde por sus propios deberes»; el panel «Hoy» deja de ser medio vacío; y cada nota se ve con el número que el cuerpo anuncia.

## 7 · Cierres priorizados

| Severidad | Dónde | Qué | Por qué | Fix propuesto | Vuelve a |
|---|---|---|---|---|---|
| bloqueante | `og-cover.html`, `og-cover.svg` (raíz) | Cifras retiradas («83 %», «0 Fund Administrators», «9–15 meses sin Congreso», «500.000 / 250») y tesis anterior servidas en público | D3 · V4 | Eliminar ambos; si la URL se conserva por enlaces viejos, redirección a `./` con `noindex`, como en `gestor-de-inversiones.html` | verificador |
| corregible | `sup.nota-ref` ↔ `.fuentes ol`, ambas páginas | Número visible de la nota distinto del marcador del cuerpo (7→5, 9→6, 10→7; hermana 5→3, 6→4, 7→5, 8→6) | A4 · D3 | Renumerar 1-7 consecutivo; o `list-style:none` y numerar por CSS desde un `data-n` igual al marcador | verificador |
| corregible | `.pieza-bajada`, `og:description`, JSON-LD, `assets/og-sitio.svg` | La regla no se nombra en la primera pantalla; las superficies de compartir endurecen «lo explica» sin el «la firmo» | B1 · D3 | «…una regla legal que Chile no tiene: separar a quien administra un fondo de quien decide sus inversiones». La misma frase en las cuatro superficies | escritor |
| corregible | `objeciones.html#respuesta` | «La frontera» y «El arbitraje» —la raíz llama a la primera «la principal»— sin Sí / En parte / No | C | Dos golpes más, aunque digan «No lo respondo: el contenido mínimo del contrato no existe todavía» | adversario · jurista |
| corregible | `#falta` «Los mercados profundos lo resolvieron; Chile es la excepción.» | Generaliza dos casos secundarios; la nota 10 dice «sin comparar regímenes en detalle» | C · D1 | «La Unión Europea y Brasil lo resolvieron; Chile, no.» | escritor · verificador |
| corregible | `#luxemburgo` «Irlanda hizo lo mismo, y tampoco tenía el capital.» | Afirmación sobre una tercera jurisdicción sin nota ni mención en `#metodo` | C · B4 | Fuente secundaria declarada, o cortar | verificador |
| corregible | `og:image` (ambas) y `assets/og-sitio.svg` | SVG como imagen social; «y es segundo domicilio» sin «el»; sin `og:image:width/height/alt` | A4 · D3 | PNG 1200×630 exportado del SVG corregido; metadatos de imagen | curador de diseño |
| corregible | `#figura .comparador` | Tríada de entidades contra tríada de funciones; administradora sin responsabilidad residual; panel «Hoy» medio vacío en 1440 px | A3 · B3 | §6, tercer movimiento | curador de diseño · jurista |
| corregible | `.pieza-bajada`, `#cadauno`, nota 9; hermana ×2 | Variante de la muletilla «no X. Y» / «X, no Y», cinco veces | B4 | «Lo que la explica es una regla legal…»; «Lo que sigue es lectura mía»; «se citan por la arquitectura que describen» | escritor |
| corregible | `#declaracion` | «no recomienda aprobar ni rechazar nada» sin decir que el proyecto es una reforma amplia y la página cubre una figura | C | «El proyecto reforma muchas materias; esta página cubre una, el gestor de inversiones, y no recomienda aprobarlo ni rechazarlo» | escritor |
| menor | `#cadauno` «que lleguen es apuesta mía» | La promesa del título descansa en una apuesta declarada en la pantalla 6 de 10 | B1 · C | Un eco del reparo cerca de la bajada o de la tira de estado | escritor |
| menor | `.nav-pie` | Tres enlaces duplicados | A1 | Cortar | curador de diseño |
| menor | `.indice-pieza a {display:inline-block}` | En móvil el «1.» cae en la segunda línea del enlace | A4 | `display:inline` en el enlace; el padding al `li` | curador de diseño |
| menor | `.hero-etiqueta` en ≤ 34 rem | Separadores ocultos: «MERCADO DE CAPITALES  CHILE, 2026» sin segmentar | A2 | Conservar un punto medio o apilar en tres líneas | curador de diseño |
| menor | `#falta` «Casi nadie lo hace.» · «Por eso no entran.» | Vaguedad y absoluto sin nota | B4 · C | Apoyarse en la cita: «el propio Mensaje reconoce que ese mercado no surgió» | escritor |
| menor | `.tira-estado` «6 meses» | Lee como plazo fijo; la nota dice «dentro de los seis meses» | B3 | «Hasta 6 meses» | escritor |
| menor | `objeciones.html` nota 8 | Nombra a la administradora sancionada y a dos auditoras; la casa declara «nunca actores» | B4 | Citar por número de resolución y año, sin razón social | jurista |
| menor | `.colofon` (ambas) | Sin fecha de publicación visible; solo en JSON-LD | D3 | «Publicado el 12 de septiembre de 2026» | escritor |
| menor | `gestor-de-inversiones.html` | JSON-LD `Article` con titular retirado; salto de contenido dentro de `<main>`; estilo inline | A4 | Quitar el JSON-LD; mover el salto; llevar el margen a la hoja | verificador |
| menor | `objeciones.html` «Ésta» ×2 | Tilde ausente en la raíz, presente en la hermana | A4 · B4 | Unificar sin tilde | escritor |

## 8 · Fugas del harness

| Hallazgo | Gate que debió atraparlo |
|---|---|
| Número visible de nota distinto del marcador del cuerpo, en las dos páginas | S — notas al pie: verifica que `href` e `id` calcen; no que el número renderizado calce con el marcador |
| «No llegó por su plata. Llegó por una regla legal…» (bajada, description, feed) y otras cuatro variantes «X, no Y» | S — muletilla · E — voz de la casa: la prompt prohíbe «y sus variantes»; el gate parece buscar solo la forma literal «no es X, es Y» |
| `og-cover.html` y `og-cover.svg` con cifras sin respaldo y tesis anterior | S — cifras respaldadas · no-reutilización, si su alcance cubre todos los archivos servidos; si no, el alcance del gate es la fuga |
| «Irlanda hizo lo mismo, y tampoco tenía el capital» sin nota | Ninguno lo cubre: no es cifra. Falta un gate de «afirmación sobre jurisdicción sin nota» |
| Nota 8 de la hermana nombra a una administradora sancionada y a dos auditoras | D05 cero actores · gate del aludido: si su alcance son personas o solo el cuerpo, la fuga es el alcance |
| `og:image` en SVG, sin `width`, `height` ni `alt` | S — metadata: debería exigir PNG o JPG para la tarjeta |
| Marcador del índice desplazado en móvil | X — viewport y orientación no lo ven; es visual. Un gate de «lista con enlaces `inline-block`» lo atraparía |
| Sin fecha visible de publicación | P01-P04 citabilidad: debería exigir fecha visible, no solo JSON-LD |
| `gestor-de-inversiones.html` con JSON-LD `Article` y titular retirado | S — metadata |
| Dos frentes de la objeción sin veredicto Sí / En parte / No | D01 verifica «versión más fuerte» y D02 el orden; ninguno verifica cobertura frente a frente |

## 9 · Lo que no pude verificar

- **La URL pública.** Bloqueada por el proxy de red. Evalué `index.html`, `objeciones.html`, `assets/sitio.css`, `assets/og-sitio.svg`, `feed.xml`, `og-cover.html`, `og-cover.svg` y `gestor-de-inversiones.html` locales, declarados idénticos al despliegue en `ff0e68a`, más capturas Chromium a 390×844 y 1440×900 en claro y oscuro. Hace falta: abrir la URL y comparar el hash de cada archivo servido; confirmar que `og-cover.*` responden 200 en producción y si están indexados o enlazados desde compartidos antiguos.
- **Tiempo de lectura.** No cronometré como humano; los 4,4 minutos salen de 880 palabras a 200 por minuto. Hace falta: tres lectores ajenos con reloj.
- **Renderizado de la tarjeta social.** Que las redes principales no rendericen `og:image` en SVG lo sé como práctica general; no lo probé. Hace falta: pasar ambas URL por el depurador de compartir de cada plataforma.
- **Tipografía real.** Las capturas usan las fuentes de reserva del entorno, no las del lector (Georgia y sistema). Medida, ritmo y letra los juzgo con esa aproximación.
- **Hechos externos.** Luxemburgo como segundo domicilio y su población frente al Gran Santiago, Irlanda, AIFMD artículo 20, las normas de la CVM, las páginas del Mensaje y de la minuta, el texto vigente de los artículos 15-17 de la Ley 20.712, la entrevista aludida y la resolución sancionatoria. No juzgo su verdad; juzgo cómo los declara la página. Hace falta: cotejo con las fuentes primarias.
- **Interacción.** `:focus-visible`, salto de contenido, retornos y área táctil los leí en CSS y capturas; no navegué con teclado ni con lector de pantalla. Hoja de impresión sin probar.
- **Enlaces externos.** El único (`LinkedIn`, `rel="me"`) no lo abrí.
