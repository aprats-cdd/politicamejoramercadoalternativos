```yaml
eval: EVAL-sitio-luxemburgo-2026-09-12
evalua: index.html + objeciones.html @ dateModified 2026-09-12 (árbol de trabajo local)
rubrica: JUEZ-CLASE-MUNDIAL
rubrica_version: v0.1
autor_eval: agente aislado (no el productor)
independencia: informacion (solo prompt + superficies alcanzables; URL pública bloqueada por proxy)
veredicto: NO-PASA
vara_jobs: 14/21
vara_masiva: 12/15
vetos: []
```

---

## 1 · Primera impresión

**Qué entendí en 10 segundos.** Un país chico se quedó con los fondos del mundo
porque escribió una regla: administrar un fondo y decidir sus inversiones pueden
estar en manos distintas. Chile no la tiene. Este proyecto la crea. Lo firma
alguien que gana con eso y lo dice antes de que yo lo pregunte. En escritorio
(1440×900) y en teléfono (390×844) la primera pantalla entrega las cuatro cosas:
titular, bajada, los tres hechos duros («9 sep 2026 · **No es ley** · Hasta 6
meses») y el encabezado `QUIÉN ESCRIBE ESTO Y QUÉ GANA`. Eso es raro y es mérito.

**Tiempo de lectura.** Cuerpo de la raíz: 881 palabras → 4,4 min a 200 ppm, 5,5 min
a 160 ppm. Con las fuentes (542 palabras más) y `objeciones.html` (1.169 + 497),
la pieza completa es de 14 a 18 minutos. La `meta description` promete «Explicado
en cuatro minutos».

**La frase que quedó.** «La plomería se queda en casa. El talento viene de donde
sea.» (`#luxemburgo`, `.ancla-idea`). No la busqué; se quedó sola.

---

## 2 · Test de la tesis

**Mis dos frases.** (i) La ley chilena obliga a que una sola entidad decida las
inversiones, administre el fondo y responda por todo, y el proyecto crea un
tercero —el gestor de inversiones— al que se le puede encomendar la cartera, con
registro, garantía y responsabilidad propias. (ii) Importa porque mientras decidir
y administrar sean el mismo nombre, ningún gestor de afuera entra sin montar una
administradora entera, y sin ellos el fondo se arma en otro domicilio y se lleva
la administración, la custodia y la auditoría con él.

Comparadas con lo que la página dice, no hay diferencia de sustancia. Sí una de
énfasis: yo puse la captura del ecosistema en la frase (ii); la página la pone en
`#luxemburgo`, antes del mecanismo, y en el titular la reemplaza por una promesa
de resultado nacional («Chile puede ser el Luxemburgo de América Latina») que
ninguna nota al pie alcanza. La bajada la marca de inmediato como tesis firmada.

**El lector ajeno** (lo corrí como ingeniera que nunca oyó «AGF»). Puede explicar
la separación con ejemplo propio: quien diseña el edificio y quien lo construye no
son el mismo, y cada uno firma lo suyo. El comparador lo permite sin releer: tres
veces «La administradora» a la izquierda, tres nombres distintos a la derecha. Qué
gana Chile lo entiende («la plomería se queda en casa»). Qué gana él lo entiende
por `#cadauno`, que es también lo único que tiene que aceptar por confianza. **V1
no se dispara: la tesis es reproducible tras una lectura.**

**El abogado regulatorio.** Vigente y propuesto están separados en cada frase, con
disciplina: «el artículo **16 vigente** prohíbe», «Hoy» / «Con el proyecto», «el
texto **propuesto** para el artículo 98». La lectura de los 15, 16 y 17 vigentes
es defendible y está anclada a página (`#fn1`, pp. 54-55). Tres reparos, en orden
de gravedad:

1. «El régimen europeo admite **la misma** delegación, bajo condiciones.⁹ Chile
   no.» — La nota 9, del propio autor, dice que en la AIFMD la delegación opera
   «**sin que la delegación altere su propia responsabilidad**». El proyecto chileno
   hace lo contrario: radica la responsabilidad civil en el gestor (`#fn4`). En la
   dimensión que esta página declara central —quién responde— el precedente
   europeo que cita apunta al lado contrario, y «La rareza está de este lado»
   queda al revés para quien lea la nota. La página no lo dice en el cuerpo.
2. «Para una firma global, entrar a Chile hoy significa montar una administradora
   completa.» — Sin nota y sin marca de lectura propia. Dos párrafos antes la
   página explica que hoy **sí** se puede contratar a un especialista, solo que
   «lo pague la administradora, nunca el fondo» y que «cuesta y no libera». La
   frase convierte una barrera económica en una imposibilidad jurídica.
3. «…deja a alguien **obligado a decir «esto no me calza»**» (`#figura`) — la nota
   2 sustenta un «deber de verificación **previa**». La cuña lo generaliza a un
   deber permanente de objetar.

Ninguno es simplificación por ignorancia: los tres son compresiones que la propia
página desarma en sus notas. Por eso no disparan V3 —no hay afirmación sin
respaldo ni nota que diga lo contrario de un titular— pero son el frente por donde
un jurista o un think tank entra.

---

## 3 · Scorecard

| # | Dimensión | Puntaje | Evidencia |
|---|---|---|---|
| **A1** | Sustracción | **2** | Ningún bloque es `decoración`. Un `duda` real: `details.indice-pieza` («En esta página», 5 ítems) en un texto de 881 palabras y 5 secciones; quitándolo el lector no pierde ni tesis ni evidencia ni orientación, y `objeciones.html` conserva otros dos enlaces (caja + `.nav-pie`). Fuera de la página: 46% del CSS publicado (18.081 de 38.946 bytes, 118 reglas) son clases inexistentes en todo el HTML —`masthead`, `cards`, `buscador`, `checklist`, `dato`, `tabla-sobria`, `cunas`, `reglas`, `escenario`—, incluido el token `--propuesta` con tres líneas de comentario que reservan un color para `.propuesta-autor`, clase que no existe. En la raíz sobreviven `og-cover.svg` (byte a byte idéntico a `assets/og-sitio.svg`) y `og-cover.html`. «Nada sobra» no es cierto del artefacto publicado. |
| **A2** | Jerarquía, ritmo y tipografía | **2** | La columna del ensayo está disciplinada: `--columna: min(42rem, 68ch)`; medida real 73 caracteres a 1440px, 39 a 390px, sin desbordes (`scrollWidth − clientWidth = 0` en 390, 700, 768, 800, 900, 1024 y 1440). El h1 en `clamp(2.1rem … 3.4rem)` con `text-wrap: balance` rompe bien en las cuatro vistas. Contra: `.hero, .tira-estado, .quien-escribe { width: min(52rem, …) }` saca a las cajas de la regla de 68ch sin techo en `ch`. Medida real a 1440px: **99 caracteres por línea** en la declaración de interés y **132** en la caja «Hay objeciones serias, y son buenas» —1,4× y 1,8× la medida del propio ensayo, en los dos bloques que un lector hostil lee con más cuidado—. A mayor pantalla, peor: la caja va de 655px a 977px mientras la prosa se queda en 599px. En 390px el kicker parte tras el primer segmento y deja el separador «·» colgando al final de la línea, exactamente el huérfano que el comentario del CSS dice evitar. Las fuentes corren a 80 caracteres. |
| **A3** | La figura (`#figura`) | **2** | Pasa la regla de los cinco segundos, y en teléfono la pasa mejor: el `.comparador` mide 830px de alto en un viewport de 844 y entra completo en una pantalla; las tres repeticiones de «La administradora» contra «El gestor de inversiones / La administradora / Cada uno por lo suyo» se leen de un golpe, y el porqué está («Incluso por decisiones que no tomó» → «radicando la responsabilidad civil en el gestor»). Contra, en la vista de escritorio: **las tres filas no se alinean entre paneles**. Posiciones absolutas de los `dt`: panel *Hoy* 2630 / 2701 / 2791; panel *Con el proyecto* 2631 / 2728 / 2865 — desfase de 27px en la segunda fila y **74px en la tercera**. El síntoma visible es un hueco muerto de ~120px en el panel izquierdo antes de «Una sola mano carga con todo» (`.comparador-cierre { margin: auto 0 0 }`). El comentario del propio CSS declara la regla que la implementación incumple: «Los dos paneles contestan LAS MISMAS tres preguntas —misma estructura, distinto contenido—». Son dos `flex` independientes; no hay `subgrid`. |
| **A4** | Oficio en el detalle | **1** | Seis defectos independientes en los controles del género. (a) **Retorno de nota roto**: la nota 1 tiene tres llamadas (`ref-fn1`, `ref-fn1b`, `ref-fn1c`) y un solo `↩` a la primera; medido, el lector que consulta la nota desde la cita del Mensaje (y=2196) vuelve a la declaración de interés (y=688): **1.508px de desvío**. Igual la nota 2 (2 llamadas) y la 9 (`ref-fn9b` y=2334 → vuelve a y=1179, 1.155px). (b) **Numeración visible con huecos**: la raíz muestra 1, 2, 3, 4, **7**, **9**, 10; `objeciones.html` muestra 1, 2, **5**, **6**, 7, 8. La numeración compartida entre las dos páginas es defendible; al lector no se le dice. (c) «Inscrito en la CMF, **con garantía propia**» en el comparador no tiene nota en la raíz: la garantía se documenta en `fn5`, que solo existe en `objeciones.html`. (d) `og-cover.svg` duplicado byte a byte de `assets/og-sitio.svg`. (e) `gestor-de-inversiones.html` (redirección `noindex`) publica JSON-LD `Article` con un titular retirado. (f) `.fuentes li:target` añade `padding` al llegar por ancla → salto de layout; los `id="ref-fn*"` no tienen `scroll-margin-top` y el retorno aterriza pegado al borde. A favor: `:focus-visible` definido, salto de contenido funcional, `--tap-minimo: 44px` consumido por las llamadas de nota, hoja de impresión con la URL, favicon inline, cero peticiones externas. |
| **B1** | Tesis en 10 segundos | **3** | Titular + bajada entregan la tesis **y** su porqué en una cadena: «Luxemburgo es el segundo domicilio de fondos del mundo, y en su arquitectura hay una regla que Chile no tiene: administrar un fondo y decidir sus inversiones pueden estar en manos distintas. Este proyecto la crea. **Es la tesis de esta página, y la firmo.**» La primera pantalla suma los tres hechos duros y el encabezado de la declaración, en las cuatro vistas. No cambiaría nada. |
| **B2** | Arquitectura del argumento | **2** | El orden premio → carencia → pieza → soldadura → lo que se abre → objeciones es el único posible y cada sección mueve: `#luxemburgo` da el premio, `#falta` la carencia con la cita del propio Gobierno, `#figura` la pieza. Contra: **la soldadura no llega como revelación porque la bajada ya la gastó**. «Es la pieza que Luxemburgo escribió, Chile no tiene y este proyecto crea» es la bajada («hay una regla que Chile no tiene… Este proyecto la crea») con dos palabras más. Lo genuinamente nuevo es la primera cláusula, «deja a alguien obligado a decir «esto no me calza»», y va acompañada. Segundo: `#cadauno` —el bloque más blando y el único de una sola cara— ocupa el lugar inmediatamente posterior al momento más alto de la página. |
| **B3** | Simplicidad sin falsedad | **2** | Vigente y propuesto separados en cada frase (`#falta` en presente bajo un h2 que lo declara; `Hoy` / `Con el proyecto`; «el artículo 16 **vigente**»). El lector ajeno lo explica con ejemplo propio (§2). Contra: los tres reparos del abogado —«la misma delegación» contra lo que dice su propia nota 9; «entrar a Chile hoy significa montar una administradora completa» sin nota y contra su propia explicación del artículo 16; «obligado a decir «esto no me calza»» sobre un «deber de verificación **previa**»—. Ninguno es falso de plano; los tres dicen más de lo que la nota que los acompaña sostiene. |
| **B4** | Registro de la casa | **3** | Cero exclamaciones (las únicas «!» del archivo son los `<!DOCTYPE>`). Cero adjetivos de venta. Cero muletilla «no es X, es Y» o variantes. Mediana de 15 palabras por frase en la raíz. Primera persona exactamente donde corresponde: «Lo que sigue es lectura mía», «es apuesta mía», «es exactamente lo que no sé», «Lo que no voy a sostener». Arquitecturas y jamás actores, declarado y cumplido: «No lo nombro: acá se comparan arquitecturas y normas, nunca actores, y el argumento vale lo mismo lo diga quien lo diga»; en `fn8`, «la razón social no se escribe acá». Fuentes secundarias marcadas **en negrita** como secundarias, dos veces. Límites declarados sin adorno. Deja dos vaguedades —«un ahorro previsional profundo», «La rareza está de este lado» con dos casos— pero la propia página declara «No uso cifras de mercado», así que la ausencia de número está dicha, no escondida. |
| **C** | Anti-lobby | **2** | La declaración es el tercer bloque, sobre la línea de flotación en las dos vistas, y es de las más completas que he leído en el género: nombra el mecanismo («cobrar con cargo al fondo, algo que el artículo 16 vigente prohíbe»), el contra-interés («El mismo cambio abre la puerta a competidores mayores»), el alcance («esta página cubre una») y la no-recomendación. **V2 no se dispara.** La evidencia central es la palabra del propio Gobierno, transcrita con página. Y el autor publica en contra de sí mismo la objeción que encontró él: «Lo que se suelta podría regir antes que lo que se aprieta… y no estaba en la mesa». Contra: `#cadauno` enumera cuatro ganadores y cero perdedores en la raíz; la asimetría AIFMD de §2; el titular promete un resultado nacional que el autor concede en la página hermana que no sabe sostener («si el tamaño del mercado chileno justifica el viaje de un gestor global es exactamente lo que no sé»), concesión que vive solo allá; y la tarjeta social —la superficie que más viaja— no lleva la declaración de interés. |
| **D1** | Cuñas | **3** | Nueve candidatas (§4); cinco pasan los ocho tests sin reserva y una lleva la tesis entera: la de `#figura`, 165 caracteres, dentro del máximo de 200 aunque sobre el ideal de 140. La cuña de mayor valor político no es la más memorable sino la del propio Gobierno («…lo que ha impedido en la práctica el surgimiento de un mercado de gestores de inversión especializados»), intorsionable por construcción. |
| **D2** | Audiencias | **2** | Tres de cinco pasan de #1 a #2 con frase identificable; think tank y abogado pasan a medias (§5). Lo que frena a las dos: la mitad comparada del argumento descansa en fuentes declaradas secundarias y la única fuente europea citada contradice, en su propia nota, la dimensión que la página defiende. |
| **D3** | Superficie de compartir | **2** | Coherencia alta: `<title>`, `og:title`, la tarjeta (1200×630, PNG y SVG) y `feed.xml` cuentan la misma historia, y la tarjeta reproduce la bajada verbatim incluido «y la firmo». El JSON-LD abre con «Proyecto de ley en tramitación, no vigente». Citable por un académico: autor, fecha, `canonical`, fuentes con página. Contra: `og-cover.html` afirma que la tarjeta retirada «traía cifras de mercado y un titular que la página ya no sostiene» mientras `og-cover.svg`, a su lado y con su mismo nombre, es la tarjeta **vigente**, sin cifras y con el titular actual — dos superficies alcanzables que se desmienten entre sí; `gestor-de-inversiones.html` publica un titular retirado en datos estructurados; `feed.xml` omite `objeciones.html` y no trae `atom:link rel="self"`; la `meta description` promete cuatro minutos contra 4,4-5,5 de cuerpo. |

**Escala:** 3 clase mundial · 2 sólido con cierre concreto · 1 se nota el costurón · 0 falla o ausente.

**Varas.** Jobs = A1+A2+A3+A4+B1+B2+B3 = 2+2+2+1+3+2+2 = **14/21** (umbral 17).
Masiva = B4+C+D1+D2+D3 = 3+2+3+2+2 = **12/15** (umbral 12).

---

## 4 · Cuñas

| # | Cuña verbatim | Ancla | 1 aut. | 2 verd. | 3 port. | 4 atrib. | 5 mem. | 6 quién | 7 torsión | 8 anti-frase |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | «Chile puede ser el Luxemburgo de América Latina» | `h1` | ✓ | ✗ | ✓ 47 | ✓ | ✓ | 2/5 | ✓ | ✓ |
| 2 | «La plomería se queda en casa. El talento viene de donde sea.» | `#luxemburgo` | ✓ | ✓ | ✓ 60 | ✓ | ✓✓ | 4/5 | ✗ | ✗ |
| 3 | «Separar al que decide del que administra deja a alguien obligado a decir «esto no me calza».» | `#figura` | ✓ | ~ | ✓ 92 | ✓ | ✓ | 5/5 | ~ | ✓ |
| 4 | «Una sola mano carga con todo.» | `#figura` | ✓ | ✓ | ✓ 29 | ✓ | ✓ | 5/5 | ✗ | ✓ |
| 5 | «Tres manos, tres firmas.» | `#figura` | ✓ | ✓ | ✓ 24 | ✓ | ✓ | 4/5 | ✗ | ✓ |
| 6 | «La ley chilena las contesta con un solo nombre.» | `#falta` | ~ | ✓ | ✓ 46 | ✓ | ✓ | 3/5 | ✓ | ✓ |
| 7 | «Contratar a un especialista cuesta y no libera.» | `#falta` | ✓ | ✓ | ✓ 46 | ✓ | ✓ | 3/5 | ✓ | ✓ |
| 8 | «…lo que ha impedido en la práctica el surgimiento de un mercado de gestores de inversión especializados» | `#falta` cita | ✓ | ✓✓ | ✓ 103 | ✓✓ | ~ | 3/5 | ✓ | ✓ |
| 9 | «Es la tesis de esta página, y la firmo.» | bajada | ~ | ✓ | ✓ 38 | ✓ | ✓ | 2/5 | ✓ | ✓ |

**Quién la dice, torsión y anti-frase, por cuña.**

- **1.** Político y equipo de inversiones la repiten; think tank y profesor la
  discuten; el abogado no la usa. Torsión: «un gestor de deuda privada quiere que
  Chile sea un domicilio de fondos». La raíz no la desarma; `objeciones.html`
  sí, en «El espejo». *Anti-frase:* citarla sin «Es la tesis de esta página, y la
  firmo» o sin el nombre del autor pegado.
- **2.** La mejor línea de la página. Torsión inmediata y no respondida en la raíz:
  «o sea, Chile se queda con la cañería y los de afuera con la comisión».
  *Anti-frase:* «el ecosistema se queda aunque el gestor esté a doce mil
  kilómetros» — fuera de contexto suena a que la plata se va.
- **3. Es la cuña que lleva la tesis entera**, en su forma larga: «Separar al que
  decide del que administra deja a alguien obligado a decir «esto no me calza».
  Es la pieza que Luxemburgo escribió, Chile no tiene y este proyecto crea.» (165
  caracteres). Las cinco audiencias la dirían. Torsión: «obligado a decirlo y sin
  incentivo para decirlo». La página no la contesta, y la nota 2 solo sustenta una
  verificación **previa**.
- **4 y 5.** Par perfecto de contraste, memorizable y seguro. Torsión de las dos,
  y es literalmente la objeción de la página hermana: «hoy una entidad decide,
  responde y tiene capital detrás» / «tres manos es nadie». La raíz no la
  anticipa.
- **7.** Subutilizada: es la frase que un equipo de inversiones y un abogado
  repiten literal, y está enterrada a mitad de párrafo sin promoción tipográfica.
- **8.** La única intorsionable: es el diagnóstico del Ejecutivo, transcrito y con
  página. Es la que un legislador lee en comisión.

**Propuestas** (marcadas como tales; no edito):

- *Propuesta A* — para que la soldadura deje de ser eco de la bajada: «Hoy una
  sola mano decide, administra y responde. El proyecto separa las tres, y cada
  una firma lo suyo.» (101 caracteres).
- *Propuesta B* — para que el titular viaje con su porqué: «Luxemburgo se quedó
  con la plomería y dejó que el talento decidiera desde afuera. A Chile le falta
  la regla que lo permite.» (122 caracteres).

---

## 5 · Audiencias

| Audiencia | Reacción #1 | Reacción #2 | ¿Mueve? | Frase que mueve | Frase que pierde |
|---|---|---|---|---|---|
| Político / legislador | «Es lobby de un gestor que gana con la ley» | «Tengo el argumento de 30 segundos y la figura para el artículo 16» | **Sí** | «…lo que ha impedido en la práctica el surgimiento de un mercado de gestores de inversión especializados» + «no recomienda aprobarlo ni rechazarlo» | `#cadauno` completo: cuatro ganadores y cero perdedores es lo único que no leería en voz alta |
| Think tank | «La analogía con Luxemburgo es floja y sin evidencia primaria» | «Citable en un policy brief» | **A medias** | «**Fuentes secundarias:** no verificadas contra el texto primario… se citan por la arquitectura que describen» | «El régimen europeo admite la misma delegación… Chile no» — su propia nota 9 dice que allá la delegación no altera la responsabilidad del delegante |
| Profesor universitario | «Simplifica hasta la inexactitud; mezcla vigente con propuesto» | «El comparador Hoy / Con el proyecto es material de clase» | **Sí** | «Un fondo obliga a contestar tres preguntas: quién decide…, quién administra…, y quién responde si algo sale mal. La ley chilena las contesta con un solo nombre.» | «Para una firma global, entrar a Chile hoy significa montar una administradora completa» — la proyectaría y un alumno le objetaría con el párrafo anterior |
| Equipo de inversiones | «Marketing de un competidor; no dice nada que no sepa» | «Lo reenvío al comité» | **Sí** | «Contratar a un especialista cuesta y no libera.» | «Más gestores compitiendo por su plata presiona las comisiones hacia abajo» — les habla en contra de su margen, sin evidencia y con el autor declarando interés |
| Abogado | «Lee mal los artículos 15, 16 y 17» | «La lectura es defendible; lo cito como primer mapa» | **A medias** | «El **15** declara indelegable la responsabilidad de administrar. El **16** obliga a que al especialista lo pague la administradora, nunca el fondo. El **17** la deja respondiendo por decisiones que tomó otro.¹» con pp. 54-55 | «…deja a alguien obligado a decir «esto no me calza»» contra un «deber de verificación **previa**» |

---

## 6 · Los tres movimientos de Apple

- **Uno que se corta.** `details.indice-pieza` de la raíz: un índice plegado de
  cinco líneas sobre 881 palabras; con él fuera, la página gana una pantalla y no
  pierde orientación. Con el mismo corte: `og-cover.html`, `og-cover.svg` y el
  46% muerto de `assets/sitio.css`.
- **Uno que se agranda.** La `blockquote.cita-grande` de `#falta`. El diagnóstico
  del propio Gobierno es la defensa anti-lobby más fuerte que tiene la pieza y hoy
  pesa lo mismo que las `.ancla-idea`. Debería ser el segundo tamaño de tipo de la
  página, después del h1.
- **Uno que se afina.** El `.comparador` de `#figura`: `subgrid` de tres filas
  para que las tres preguntas se lean **de lado a lado** y no solo hacia abajo —y
  con eso desaparece el hueco muerto de 120px del panel «Hoy»—, más recortar la
  soldadura a su primera cláusula.

---

## 7 · Cierres priorizados

| Sev. | Dónde | Qué | Por qué (dim.) | Fix propuesto | Vuelve a |
|---|---|---|---|---|---|
| **Bloqueante** | `#falta`, «El régimen europeo admite la misma delegación, bajo condiciones.⁹ … Chile no.» | La nota 9 dice que en la AIFMD la delegación no altera la responsabilidad del delegante; el proyecto la radica en el gestor. El precedente citado apunta al lado contrario en la dimensión central de la pieza | B3, C, D2 | Decir en el cuerpo lo que ya dice la nota: que Europa admite la delegación de la cartera **conservando** la responsabilidad del delegante, y que lo que el proyecto chileno agrega —radicarla en el gestor— es más ambicioso que el precedente europeo. Cambiar «La rareza está de este lado» por una afirmación acotada a la delegación | jurista + escritor |
| **Bloqueante** | `#figura`, `.comparador` | Las tres filas no se alinean entre paneles (desfase 27px y 74px) y el panel izquierdo carga un hueco de ~120px. La figura es el argumento y hoy incumple la regla que su propio CSS declara | A3, A2 | `grid-template-rows: subgrid` en `.comparador-panel` sobre un `.comparador` de tres filas + fila de cierre | curador de diseño |
| **Bloqueante** | `.fuentes`, notas 1, 2 y 9 | Un solo `↩` por nota, apuntando a la primera llamada: 1.508px de desvío desde la cita, 1.155px desde `ref-fn9b` | A4 | Un retorno por llamada (`↩¹ ↩² ↩³`), o `id` de retorno resuelto al último origen | verificador |
| Corregible | `#falta`, «Para una firma global, entrar a Chile hoy significa montar una administradora completa.» | Convierte una barrera económica en imposibilidad jurídica y contradice la explicación del artículo 16 que la propia página dio dos párrafos antes | B3, C | Acotar: «…significa montar una administradora completa o trabajar sin que el fondo pueda pagarle y sin liberar a nadie de responsabilidad» | jurista |
| Corregible | `.quien-escribe` (declaración y caja de objeciones) | 99 y 132 caracteres por línea a 1440px, contra los 68ch del propio ensayo; empeora al crecer la pantalla | A2 | Añadir `max-width: 68ch` al texto interior de `.quien-escribe`, dejando la caja ancha | curador de diseño |
| Corregible | `.fuentes` de ambas páginas | Numeración visible con huecos: 1, 2, 3, 4, 7, 9, 10 y 1, 2, 5, 6, 7, 8 | A4, D3 | O renumerar por página, o una línea al inicio de `Fuentes`: «la numeración es común a las dos páginas» | verificador |
| Corregible | `og-cover.html` + `og-cover.svg` | La lápida afirma que la tarjeta retirada traía cifras y un titular abandonado; el `.svg` con ese nombre es la tarjeta vigente. Dos superficies alcanzables que se desmienten | D3, A4 | Borrar `og-cover.svg` (duplicado exacto de `assets/og-sitio.svg`) y, si la lápida se conserva, que no describa un archivo que sigue en pie | verificador |
| Corregible | `#figura`, «Inscrito en la CMF, con garantía propia» | Afirmación de hecho sin nota en la raíz; su respaldo (`fn5`) solo existe en la página hermana | A4, C | Traer `fn5` a la raíz o quitar «con garantía propia» del comparador | verificador |
| Corregible | `#figura`, `.ancla-idea` | La segunda frase de la soldadura es la bajada con dos palabras más; la revelación llega como confirmación | B2 | Dejar la primera cláusula sola, o sustituirla por la *Propuesta A* de §4 | escritor |
| Corregible | `#cadauno` | Cuatro ganadores, cero perdedores, en la única sección declarada como lectura propia, y en el lugar inmediatamente posterior al momento más alto de la página | B2, C, D2 | Un quinto ítem con quién pierde o qué se arriesga, o mover el bloque antes de `#figura` | adversario |
| Corregible | `#figura`, «obligado a decir «esto no me calza»» | Generaliza un «deber de verificación **previa**» a un deber permanente de objetar | B3, D1 | «…deja a alguien obligado a verificar antes de firmar» o traer al cuerpo el alcance real del deber | jurista |
| Menor | `assets/og-sitio.png` / `.svg` | La superficie que más viaja no lleva la declaración de interés, sobre la que descansa toda la defensa anti-lobby | C, D3 | Una línea al pie de la tarjeta: «El autor declara interés económico directo» | curador de diseño |
| Menor | `gestor-de-inversiones.html` | JSON-LD `Article` con titular retirado en una redirección `noindex` | A4, D3 | Quitar el bloque JSON-LD de la redirección | verificador |
| Menor | `.hero-etiqueta` a 390px | El separador «·» queda colgando al final de la primera línea | A4 | `white-space: nowrap` sobre el par segmento+separador, o quitar el tercer segmento en móvil | curador de diseño |
| Menor | `meta name="description"` | «Explicado en cuatro minutos» contra 4,4-5,5 min de cuerpo y 14-18 de pieza completa | D3, C | «Explicado en cinco minutos» o quitar la promesa | escritor |
| Menor | `feed.xml` | No incluye `objeciones.html` ni `atom:link rel="self"` | D3 | Añadir el segundo `item` | verificador |
| Menor | `assets/sitio.css` | 46% de bytes en clases inexistentes, incluido un token de color documentado para una clase borrada | A1, A4 | Podar a lo que las dos páginas usan | curador de diseño |
| Menor | `details.indice-pieza` | Índice plegado de cinco líneas sobre un texto de cinco secciones y 881 palabras | A1 | Cortarlo | curador de diseño |

---

## 8 · Fugas del harness

| Hallazgo | Gate que debió atraparlo |
|---|---|
| Nota con N llamadas y un solo retorno, apuntando siempre a la primera | **S02** (notas al pie) — verifica ref↔nota, no cardinalidad ni destino del retorno |
| Numeración de notas no contigua y visible al lector en ambas páginas | **S02** |
| «con garantía propia» en `#figura` sin nota en la página donde aparece | **S07** (cifras/afirmaciones respaldadas) |
| `og-cover.svg` byte a byte idéntico a `assets/og-sitio.svg` | **S06** (no-reutilización) |
| JSON-LD `Article` con titular retirado en una redirección `noindex` | **S03** (metadata) |
| 99 y 132 caracteres por línea en escritorio, contra la regla `68ch` del propio sistema | **X04** (tipografía fluida) mide escala, no medida de línea — ningún gate la mide |
| 46% del CSS publicado son clases inexistentes | **X06** (peso) mide bytes, no bytes muertos |
| `meta description` promete un tiempo de lectura menor al del cuerpo | ningún gate lo mide |
| Filas del comparador desalineadas entre paneles, contra la regla declarada en el propio CSS | ningún gate lo mide; candidato a sensor de render (`getBoundingClientRect` de los `dt` por panel) |

---

## 9 · Lo que no pude verificar

- **La URL pública.** `https://aprats-cdd.github.io/politicamejoramercadoalternativos/`
  está bloqueada por el proxy de red de esta sesión. Evalué el árbol de trabajo
  local con `file://` y capturas que rendericé yo en Chromium (Playwright,
  390×844 y 1440×900, claro y oscuro, `deviceScaleFactor` 2 y 1,
  `reducedMotion: "reduce"`). No pude verificar que GitHub Pages sirva estos
  mismos bytes, ni los encabezados HTTP, ni que `og:image` resuelva, ni el
  comportamiento real de las redirecciones por `meta refresh`. *Haría falta:*
  acceso de red a la URL, o un `curl -I` contra las siete superficies.
- **Las tipografías reales.** Chromium sobre Linux resolvió `Georgia` y
  `-apple-system` a sustitutas. Las medidas en caracteres por línea, los cortes
  del h1 y el color tipográfico cambiarán en macOS, iOS y Windows. Los desfases
  del comparador (27px / 74px) y las medidas de 99 y 132 caracteres son del orden
  de magnitud correcto pero no del píxel exacto en el equipo de un lector.
  *Haría falta:* correr las cuatro vistas en Safari/macOS y Edge/Windows.
- **Los hechos externos.** No verifiqué la posición de Luxemburgo como segundo
  domicilio, el artículo 20 de la Directiva 2011/61/UE, la Instrução CVM 558/2015
  ni la Resolução CVM 175/2022, ni el texto del Mensaje N° 166-374 ni sus páginas
  (54-55, 174, 176, 177, 178, 185-186, 200-201, 221) ni la minuta de Hacienda ni
  la Resolución Exenta N° 10.950. Juzgué solo si la página los declara con la
  honestidad que corresponde a su fuente, que es lo que la regla me pide. Mi
  hallazgo bloqueante sobre la AIFMD es **interno**: contrasta el cuerpo con la
  nota 9 de la propia página, no con la Directiva.
- **Movimiento y transiciones.** Rendericé todo con `reducedMotion: "reduce"`,
  como pide el encargo, de modo que no vi las `@view-transition` entre páginas ni
  la apertura animada de los `details` ni la barra de progreso
  (`body.pieza::before` con `animation-timeline: scroll()`). No sé si degradan
  bien ni si la barra de progreso es legible en las dos paletas.
- **Accesibilidad real.** Leí las reglas (`:focus-visible`, `.salto-contenido`,
  `--tap-minimo: 44px`) y medí áreas táctiles, pero no probé lector de pantalla,
  recorrido completo por teclado ni contraste medido en cada par de tokens.
  *Haría falta:* una pasada con VoiceOver/NVDA y un cálculo de contraste sobre las
  dos paletas.
- **Contexto prohibido.** Por LEY-1 no leí `constelacion/` salvo mi prompt, ni
  historial de versiones, ni informes de otros evaluadores, ni el razonamiento del
  autor. Todo juicio de este informe sale de las superficies alcanzables y de mis
  propias mediciones.

---

### Gate aplicado

- Ninguna dimensión en 0. **Una** dimensión en 1 (A4).
- Vara Masiva **12/15** — cumple el umbral.
- Vara Jobs **14/21** — **bajo el umbral de 17**.
- Vetos: **ninguno**. V1 no se dispara (la tesis es reproducible); V2 no se dispara
  (interés declarado en la primera pantalla, sin recomendación de voto encubierta);
  V3 no se dispara (ninguna cuña ni titular carece de respaldo, y los tres excesos
  de §2 quedan desarmados por las propias notas de la página); V4 no se dispara
  (la contradicción `og-cover.html` ↔ `og-cover.svg` es entre dos superficies
  auxiliares, no contra la pieza).

**Veredicto: NO-PASA**, por vara Jobs bajo umbral. La escritura llega: registro,
honestidad, cuñas y arquitectura del argumento están en el rango de lo publicable
por cualquier estándar del género, y la declaración de interés y el tratamiento de
la objeción están por encima de él. Lo que no llega es el oficio: una figura que
es el argumento y no alinea sus filas, los retornos de nota rotos, la medida de
línea al doble en los dos bloques que el lector hostil más mira, la numeración con
huecos y dos archivos muertos en la raíz que se desmienten entre sí. Son ocho
correcciones de una sesión, ninguna de ellas de escritura. La distancia entre esta
página y la mejor página posible sobre este tema se mide entera en esa lista.
