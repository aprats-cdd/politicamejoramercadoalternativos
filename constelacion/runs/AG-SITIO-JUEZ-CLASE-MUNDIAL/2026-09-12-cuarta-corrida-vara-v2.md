```yaml
eval: EVAL-sitio-luxemburgo-2026-09-12
evalua: index.html + objeciones.html + historia.html @ dateModified 2026-09-12 (archivos locales)
rubrica: JUEZ-CLASE-MUNDIAL
rubrica_version: v0.1
autor_eval: agente aislado (no el productor)
independencia: informacion (solo archivos publicos + prompt)
veredicto: NO-PASA
vara_jobs: 12/21
vara_masiva: 12/15
vetos: []
```

Nota de alcance: la URL pública devuelve 403 desde esta red. Juzgué los archivos
locales, renderizados en Chromium/Playwright en 390×844 y 1280×900, claro y oscuro,
con capturas miradas. Las mediciones de esta corrida son propias, no heredadas.

---

## 1 · Primera impresión

**Qué entendí en 10 segundos** (primera pantalla, teléfono 390×844, modo claro):
Chile podría ser un domicilio de fondos como Luxemburgo; la diferencia es una regla
sobre quién administra y quién decide; no es ley todavía; el que escribe firma y
declara que gana con esto. Lo que **no** entendí en esos 10 segundos: por qué esa
separación importa. El porqué aparece en la pantalla 3 y aterriza en la 5.

**Tiempo de lectura** (medido sobre conteo de palabras, 200 ppm): index 1.043
palabras de cuerpo ≈ 5:10, más 621 de notas ≈ 8:20 con aparato. Las tres páginas de
punta a punta: 3.981 palabras de cuerpo + 2.547 de notas ≈ 28 min. En scroll de
teléfono: index 9.868 px = 11,7 pantallas; objeciones 9.826 px = 11,6; historia
15.709 px = **18,6 pantallas**.

**La frase que quedó:** «Los rieles se quedan en casa. Los trenes vienen de donde
sea.»

---

## 2 · Test de la tesis

**Mis dos frases.** (i) La página propone que Chile no atrae fondos regionales
porque su ley obliga a que quien administra un fondo sea también quien decide sus
inversiones y el único que responde, y que el proyecto crea un tercero —el gestor de
inversiones— al que se le puede encargar la cartera, con registro, garantía y
responsabilidad propios. (ii) Separar al que decide del que administra importa
porque deja la verificación en manos de alguien con un interés distinto del que tomó
la decisión, y porque sin esa separación un gestor de afuera tiene que montar una
administradora completa para entrar.

**Diferencia con lo que la página dice.** Ninguna de sustancia: mis dos frases salen
de `#falta` y `#figura` casi textuales. La diferencia es de **orden**. Yo llego al
mecanismo primero; la página llega al premio primero. Su propio registro declara «el
mecanismo antes que la conclusión», y el H1 es la conclusión («Chile puede ser el
Luxemburgo de América Latina»). La bajada repara eso en su segunda cláusula —«hay una
regla que Chile no tiene: administrar un fondo y decidir sus inversiones pueden estar
en manos distintas»—, pero el titular solo, que es lo que viaja, es la conclusión sin
el mecanismo.

**Lector ajeno a la industria.** Sí puede explicarlo con un ejemplo propio: la tríada
«quién decide / quién lleva los libros / quién responde» es una plantilla, y «el gato
cuida la carnicería» le da la imagen. Sabe qué gana Chile (administración, custodia y
auditoría se quedan acá) y qué gana él (`#cadauno`: otra puerta para la pyme,
presión a la baja en comisiones). **Pero no puede comparar**: en teléfono los dos
paneles de `#figura` nunca caben juntos en pantalla (§3, A3). Lee «Hoy», hace scroll
y lee «Con el proyecto» de memoria. El comparador deja de ser comparador.

**Abogado regulatorio.** La lectura es defendible. Vigente y propuesto están
separados en cada frase que revisé («el artículo 16 **vigente** prohíbe», «el texto
**propuesto** para el artículo 98», «los **nuevos** 16 y 17»), y el comparador rotula
las columnas Hoy / Con el proyecto. Dos reparos concretos:

- **La soldadura estira una fuente.** «…deja a alguien **obligado a decir “esto no me
  calza”**» glosa como deber continuo de objeción lo que la nota 2 describe como
  *deber de verificación previa* más la responsabilidad que la administradora
  conserva por sus deberes directos. Es una glosa generosa, no una falsedad; un
  abogado la va a empujar.
- **Dos afirmaciones sin nota en `index`.** «…la custodia del fondo salió de su
  administradora: **cuatro veces desde 1981**» y «en marzo el gremio de administradoras
  **propuso evaluar** el que falta» viajan sin `<sup>` y sin cobertura en el `#metodo`
  de index, que enumera qué es secundario y no las incluye. Su respaldo vive en
  `historia.html`, la página que declara que **siete de sus ocho fuentes no se
  abrieron**. El lector de index las toma por verificadas.

---

## 3 · Scorecard

| # | Dim | Pts | Evidencia (medida o verbatim) |
|---|---|---|---|
| A1 | Sustracción | **2** | Inventario de bloques de `index`: ningún bloque es decoración; todos pasan el test. Lo que sobra está por debajo del bloque y por encima de la página: dos párrafos de `#falta` («En los mercados profundos cada función la hace quien sabe hacerla…» y «Tampoco sería el primero acá…») son respuestas a objeciones ubicadas **antes** de que exista la pieza, y ambas se dicen mejor en `historia`. A nivel de artefacto: `assets/sitio.css` pesa 34,6 KB —casi el doble del HTML de index (18,1 KB)— y **32 de sus 81 clases no existen en ninguna de las tres páginas** (familias completas: `masthead-*`, `buscador-*`, `card-mas`, `card-publicacion`, `btn-copiar`, `tira-estado`, `propuesta-autor`, `interes`, `dato`, `beta`). `og-cover.svg` está duplicado byte a byte en la raíz y en `assets/og-sitio.svg`. |
| A2 | Jerarquía, ritmo, tipografía | **2** | Escala decidida y fluida, medida: h1 36,8→66,3 px, bajada 18,3→23,4, h2 25,0→35,9, cuerpo 17,2→19,5; interlineado del h1 en 1,03 (denso a propósito, funciona). **Cero scroll horizontal entre 320 y 1920 px.** El oscuro es un recálculo real de tokens, no una inversión, y se sostiene en las cuatro vistas. Contra: el h1 en teléfono parte «Chile puede / ser el / Luxemburgo de / América Latina» —segunda línea de dos palabras, sin `text-wrap: balance`—; el panel «Hoy» del comparador queda con **126 px de hueco muerto** en escritorio porque la grilla iguala alturas; «una idea por pantalla» no se cumple: el hero solo mide 627 px y `#falta` corre 1.955 px (2,3 pantallas) de prosa continua; y la barra de progreso de lectura, único indicador de longitud en un documento de 12 a 19 pantallas, **queda en `scaleX(0)` permanente para quien pide `prefers-reduced-motion`** (verificado: `transform: matrix(0,0,0,1,0,0)` a 3.000 px de scroll). |
| A3 | La figura (`#figura`) | **1** | Regla de los cinco segundos en escritorio: **pasa**. Se ve quién decide, quién administra, quién responde, y el porqué está dentro de la figura («Cada uno por lo suyo»), no fuera. Falla dos de los cuatro criterios del 3, medidos: **(a) no entra en una pantalla de teléfono** —813 px de alto a 390 de ancho, 849 a 360, 883 a 320, contra un viewport nominal de 844 que en Safari real es ~730 con barras—, y los paneles solo se ponen lado a lado desde **768 px**, así que en todo teléfono en vertical la comparación es secuencial, no simultánea. **(b) La frontera no se ve.** El punteado teal marca el panel de la propuesta, no el perímetro regulado: la imagen que la página misma acuñó —rieles que se quedan, trenes que vienen— no está dibujada en ninguna parte. Y los rótulos de la propia figura miden **3,34:1** de contraste en modo claro (`.tres-preguntas dt` y `.comparador-titulo` de «Hoy»; 3,64:1 en el panel propuesto), bajo el 4,5 exigible a texto de 13 px. En oscuro suben a 5,2-5,7. |
| A4 | Oficio en el detalle | **1** | Seis defectos independientes, cada uno de diez minutos, y por eso mismo cuentan: (1) en `objeciones.html` la nota 2 recibe **tres llamadas** (`ref-fn2`, `ref-fn2b`, `ref-fn2c`) y devuelve **un solo ↩**, que manda al lector a «La frontera» venga de donde venga —en index la misma mecánica está bien resuelta con ↩¹↩²↩³—; (2) la numeración de notas salta a la vista y sin declarar: index muestra 1,2,3,4,5,**7**,**9**,**10** y objeciones 1,2,**5**,**6**,7,8 (el CSS imprime `attr(data-n)`); (3) el colofón de `historia` es el único de los tres que **no** enlaza «Declaración de interés · Método», justo los dos enlaces anti-lobby, aunque la página tiene ambos anclajes; (4) tres páginas, tres convenciones distintas de índice (index 6 entradas sin Método ni Fuentes; objeciones 3 con Fuentes; historia 5 con Método sin Fuentes); (5) `feed.xml` **omite `objeciones.html`** (lista index e historia); (6) `gestor-de-inversiones.html`, que es un stub de redirección `noindex`, sigue embarcando JSON-LD `Article` con un titular anterior. |
| B1 | Tesis en 10 segundos | **2** | Título + bajada + primera pantalla entregan la tesis y quién la firma; el fold de teléfono llega hasta el inicio de «QUIÉN ESCRIBE ESTO Y QUÉ GANA» (medido: la declaración arranca en y=751 de 844). Lo que **no** entregan es el porqué: la bajada dice que la regla existe allá y acá no, nunca por qué separar importa. El criterio del 3 pide «la tesis **y su porqué**». |
| B2 | Arquitectura del argumento | **2** | El orden premio → carencia → pieza → soldadura → lo que se abre → objeciones se cumple y la soldadura llega como revelación: el ancla «Separar al que decide…» está a 4.965 px, **después** del comparador (4.109-4.922), no antes. Tres costuras: el párrafo de precedente histórico se inserta dentro de `#falta`, es decir el lector recibe «Chile ya lo hizo cuatro veces» antes de que le hayan dicho qué es «esto»; «control por oposición» se enuncia en index y otra vez, mejor, en `historia#patron`; y en `objeciones` los **seis frentes** y los **siete veredictos** no están enlazados entre sí ni siguen el mismo orden (objeción: frontera, capital, arbitraje, espejo, escala, realismo; respuesta: escala, escala, espejo, realismo, arbitraje, frontera, capital), obligando a cruzar 3.051 px en escritorio y 5.437 px en teléfono para parear un frente con su respuesta. El reordenamiento es defendible —termina concediendo— pero el costo de navegación no está pagado. |
| B3 | Simplicidad sin falsedad | **2** | Vigente y propuesto separados en cada frase revisada; el comparador rotula las dos columnas; `objeciones` distingue sí / en parte / no sin trucos y cierra con dos «no». Restan los dos reparos del §2: la glosa «obligado a decir “esto no me calza”» sobre un deber de verificación *previa*, y las dos afirmaciones sin nota en index cuyo respaldo vive en la página que declara no haber abierto sus fuentes. |
| B4 | Registro de la casa | **3** | Cero muletilla «no es X, es Y» (grep sobre las tres páginas: ninguna ocurrencia). Cero exclamaciones, cero adjetivo de venta, cero jerga financiera. Vocabulario de sistemas definido donde se usa: «Un desacoplamiento deja a todos en el oficio y le exige a cada uno una entidad propia para ejercerlo». Carácter sin volumen: «Y un punto que se me pasó hasta que alguien lo buscó», «Lo digo aunque me quite un relato cómodo». Arquitecturas y no actores, sostenido con disciplina en index y objeciones («No lo nombro: acá se comparan arquitecturas y normas, nunca actores»). Un desliz: la tira de estado de `historia` promete «Cuarenta y cinco años de desacoplamientos, **en seis minutos**» sobre un cuerpo de 1.737 palabras (≈8 min) y un aparato de 1.429 más — un número que la casa no puede sostener, en una casa que dice «un número o nada». |
| C | Anti-lobby | **2** | El lector hostil no la descarta en 30 segundos: la declaración de interés está sobre el fold en las tres páginas, antes de la sospecha, y dice lo que tiene que decir («cobrar con cargo al fondo, algo que el artículo 16 vigente prohíbe»). No hay recomendación de voto, ni encubierta: «no recomienda aprobarlo ni rechazarlo», «Que lleguen gestores de afuera es apuesta mía». La objeción está en su versión más fuerte, en seis frentes, con dos concedidos como «No», y la página **agrega una objeción contra el propio proyecto** que nadie le pidió («Lo que se suelta podría regir antes que lo que se aprieta»). La frase más a prueba de lobby del sitio: «Lo que no voy a sostener: que este proyecto habría evitado aquel caso. Es un contrafactual que nadie puede verificar.» Lo que impide el 3: la nota 4 —«Minuta del Ministerio de Hacienda sobre el mismo proyecto, sección C, numeral 22»— no trae fecha, ni título completo, ni vía de acceso, y es **la única fuente de la cita que vive dentro de la figura** («radicando la responsabilidad civil en el gestor»); más las dos afirmaciones sin nota del §2 y el colofón de historia que suelta el enlace a la declaración. |
| D1 | Cuñas | **3** | Ocho candidatas extraídas, cinco pasan los ocho tests (tabla §4). Existe una que lleva la tesis entera y está ubicada donde corresponde, inmediatamente después del comparador. Ninguna nombra actor vivo, ninguna pide votar, ninguna carga un número que exija verificación. Cubren las cinco audiencias. |
| D2 | Audiencias | **2** | Cuatro de cinco se mueven de #1 a #2 con frase identificable (tabla §5). El equipo de inversiones se queda a medias: `#cadauno` le da razón para leer, `objeciones` le da el memo de riesgo, pero la página no tiene una sola cifra —por decisión declarada— y para esa audiencia la ausencia de números se lee como «no me dice nada que no sepa». La frase que más mueve al legislador («Este es un **permiso**: nadie quedaría obligado a encargarle a un tercero la decisión de inversión. Eso hace el caso más fácil de defender, no más difícil») está en la página tres, al 78% de profundidad. |
| D3 | Superficie de compartir | **2** | `<title>`, `description`, `og:*`, JSON-LD, canonical y tarjeta social cuentan la misma historia que la cuña principal en las tres páginas; `og-sitio.png` existe y mide 1200×630; las superficies retiradas (`og-cover.html`, `gestor-de-inversiones.html`) redirigen, son `noindex` y **no contradicen** la pieza. Huecos: `feed.xml` omite `objeciones.html`; el feed no lleva declaración de interés en ninguna parte, de modo que el lector que la recibe por RSS ve la tesis sin el descargo que es toda su defensa; el `og:image:alt` de `historia` describe una tarjeta cuyo titular («Chile puede ser el Luxemburgo…») contradice el `og:title` de esa misma página («Chile ya separó funciones cuatro veces»); y la tarjeta que viaja carga la comparación con Luxemburgo sin ninguno de los descargos tributarios que la página dos sí da. Citable por un académico: autor, fecha, canonical y fuentes con página, sí en index y objeciones; en historia, no hay páginas que citar y está declarado. |

**Vara Jobs** = A1 2 + A2 2 + A3 1 + A4 1 + B1 2 + B2 2 + B3 2 = **12/21** (umbral 17).
**Vara Masiva** = B4 3 + C 2 + D1 3 + D2 2 + D3 2 = **12/15** (umbral 12).

**Vetos: ninguno.** V1 no: el lector ajeno reproduce la tesis. V2 no: la declaración
está sobre el fold en las tres páginas. V3 no, por poco: el titular es modal («puede
ser») y la bajada lo acota en la misma pantalla; lo de Luxemburgo está declarado como
secundario y sin verificar en `#metodo` y en la nota 9. Las dos afirmaciones sin nota
de index son prosa de cuerpo, no cuña ni titular — quedan un peldaño bajo el veto, y
por eso entran como bloqueante en §7. V4 no: ninguna superficie alcanzable contradice
la pieza.

**Gate: NO-PASA** — Vara Jobs bajo umbral y dos dimensiones en 1.

---

## 4 · Cuñas

| # | Cuña verbatim | Ancla | 1 aut | 2 ver | 3 port | 4 atr | 5 mem | 6 quién | 7 torsión | 8 anti-frase |
|---|---|---|---|---|---|---|---|---|---|
| 1 | «Los rieles se quedan en casa. Los trenes vienen de donde sea.» (60 c) | index `#luxemburgo` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | «rieles = peaje para los locales» — la página no responde esa torsión | «Luxemburgo administra fondos del mundo entero.» |
| 2 | «Hoy el gato cuida la carnicería: el que decide es el mismo que valoriza lo que decidió, y el mismo que se controla.» (115 c) | index `#falta` | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | **La más peligrosa.** Describe una arquitectura pero imputa intención a toda una industria; quien la cite en comisión queda acusando. La página nunca la desactiva | la misma frase citada sin «el que decide es el mismo que…» |
| 3 | «Chile tiene lo que a Luxemburgo le faltaba: un ahorro previsional profundo. Le falta la pieza legal.» (100 c) | index `#falta` | ✓ | ~ | ✓ | ✓ | ✓ | ✓ | «usar el ahorro previsional para atraer gestores extranjeros» | — (la profundidad del ahorro no tiene fuente ni nota) |
| 4 | «Para una firma global, entrar hoy significa montar una administradora completa.» (78 c) | index `#falta` | ✓ | ✓ | ✓ | ✓ | ~ | ✓ | «entonces que no entren» | — |
| 5 | «Separar al que decide del que administra deja a alguien obligado a decir "esto no me calza". Es la pieza que Luxemburgo escribió, Chile no tiene y este proyecto crea.» (163 c) | index `#figura` | ✓ | ~ | ~ | ✓ | ✓ | ✓ | «nadie queda obligado a nada: el deber es de verificación previa» | «Es la pieza que Luxemburgo escribió» suelta |
| 6 | «Una sola mano carga con todo.» / «Tres manos, tres firmas.» (29/24 c) | index `#figura` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | «tres manos = tres comisiones» — no respondida | — |
| 7 | «Cada tramo de esta serie cambió vigilancia por infraestructura.» (62 c) | historia `#patron` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | «entonces sobra el supervisor» | «a nadie se le ocurre pedirle al maquinista que además tienda la vía» |
| 8 | «Eso es control por oposición: el que verifica tiene un interés distinto del que decide. No depende de que alguien esté mirando. Depende de que dos partes no quieran lo mismo.» (171 c) | historia `#patron` | ✓ | ✓ | ~ | ✓ | ✓ | ✓ | «dos partes pueden querer lo mismo si son relacionadas» — respondida a medias en objeciones | — |

**La cuña que lleva la tesis entera:** la #5. Está bien ubicada (justo después del
comparador), nombra el mecanismo y el destino en una sola respiración, y no pide
votar. Su debilidad es el verbo: «obligado» sostiene más de lo que la nota 2
describe.

**Propuestas** (marcadas como tales; no edito):
1. *Propuesta* — reemplazar el verbo por el efecto sin el deber: «Separar al que
   decide del que administra pone a alguien con un interés distinto a mirar la
   decisión. Es la pieza que Luxemburgo escribió, Chile no tiene y este proyecto
   crea.»
2. *Propuesta* — subir a `index` la frase que hoy vive en `historia#falta`, que es la
   que más mueve al legislador y la que más barato desarma la objeción: «Los cuatro
   anteriores fueron obligaciones. Este es un permiso.»

---

## 5 · Audiencias

| Audiencia | Reacción #1 | Reacción #2 | ¿Mueve? | Frase que mueve | Frase que pierde |
|---|---|---|---|---|---|
| Político / legislador | «Es lobby de alguien que gana con la ley» | «Tengo el argumento de 30 s y la figura para el artículo 16» | **Sí** | «El proyecto reforma muchas materias; esta página cubre una, el gestor de inversiones, y no recomienda aprobarlo ni rechazarlo.» + la tira «No es ley. Ingresó a la Cámara el 9 de septiembre de 2026» | «Hoy el gato cuida la carnicería» — citarla en comisión es acusar a la industria entera |
| Think tank | «La analogía con Luxemburgo es floja» | «Citable en un policy brief» | **Sí, con reserva** | «Lo de Luxemburgo, Brasil y el régimen europeo sale de fuentes secundarias, declaradas al pie y sin verificar.» | «Siete de estas ocho fuentes son de oído» — honesta, pero un brief no cita una página que declara no haber abierto las leyes que ordena |
| Profesor universitario | «Simplifica hasta la inexactitud» | «El comparador es material de clase» | **Sí** | El comparador Hoy / Con el proyecto con las tres preguntas idénticas en ambos paneles | — (pierde solo si lo proyecta desde un teléfono: la figura no cabe) |
| Equipo de inversiones | «Marketing de un competidor» | «Lo reenvío al comité» | **A medias** | «Podría ofrecer estrategias que hoy no sabe correr, contratando a quien sí.» | «Sin cifras de mercado» — para esta audiencia, cero números es cero materia |
| Abogado | «Lee mal los artículos 15, 16 y 17» | «Lectura defendible, primer mapa del cambio» | **Sí** | «El proyecto saca el otorgamiento de créditos de la exigencia de separación del artículo 169 […] Lo que se suelta podría regir antes que lo que se aprieta.» | «Minuta del Ministerio de Hacienda […] sección C, numeral 22» — una fuente que no puede abrir ni localizar |

---

## 6 · Los tres movimientos de Apple

- **Se corta:** los dos párrafos argumentativos de `index#falta` («En los mercados
  profundos cada función la hace quien sabe hacerla…» y «Tampoco sería el primero
  acá… cuatro veces desde 1981»). Los dos son respuestas a objeciones colocadas antes
  de que la pieza exista, y los dos se dicen mejor en `historia`. Sube `#figura` unos
  500 px en teléfono y le quita a `#falta` media pantalla.
- **Se agranda:** `index#figura` en teléfono. Dejar de apilar dos tarjetas y hacer una
  matriz de tres filas × dos columnas (pregunta | Hoy | Con el proyecto), y dibujar de
  verdad el perímetro: qué componentes se quedan en Chile y cuál puede estar a doce mil
  kilómetros. Es la única figura del sitio y hoy es una tabla, no un sistema.
- **Se afina:** los rótulos de esa misma figura, de 3,34:1 a ≥4,5:1 en modo claro
  (`.comparador-titulo`, `.tres-preguntas dt`). El detalle es el producto y el detalle
  acá es el texto que sostiene los cinco segundos.

---

## 7 · Cierres priorizados

| Sev | Dónde | Qué | Por qué (dim) | Fix propuesto | Vuelve a |
|---|---|---|---|---|---|
| **Bloqueante** | `index#figura` | En teléfono los dos paneles no caben juntos (813 px a 390 de ancho; lado a lado solo desde 768 px) | A3 · B3 | Matriz 3×2 en teléfono, o paneles colapsados a filas pareadas pregunta por pregunta | curador de diseño |
| **Bloqueante** | `index#figura` | La frontera del perímetro no se dibuja; la imagen rieles/trenes no existe visualmente | A3 · registro visual declarado | Un diagrama de componentes con el borde del perímetro chileno, y el gestor fuera de él | curador de diseño |
| **Bloqueante** | `index#falta`, `index#metodo` | «cuatro veces desde 1981» y «el gremio propuso evaluar» sin nota, y el Método de index no declara que su respaldo es de oído | C · B3 · D3 | Nota al pie en ambas, o una línea en `#metodo`: «lo histórico chileno está citado de oído y declarado en historia.html» | verificador · jurista |
| **Corregible** | `index#figura`, `objeciones` | Contraste 3,34:1 y 3,55:1 en rótulos de 13 px, modo claro | A3 · A4 | Bajar `--tenue` un escalón de luminosidad solo para rótulos mono | curador de diseño |
| **Corregible** | `objeciones` notas | La nota 2 tiene 3 llamadas y 1 retorno; `ref-fn2b` y `ref-fn2c` quedan huérfanos | A4 | ↩¹↩²↩³ como en index | verificador |
| **Corregible** | `objeciones#objecion` ↔ `#respuesta` | Seis frentes y siete veredictos sin enlaces cruzados, 3.051 px (escritorio) / 5.437 px (teléfono) de distancia | B2 · D2 | Anclar cada frente y cada veredicto, con ida y vuelta | escritor · curador de diseño |
| **Corregible** | `feed.xml` | Omite `objeciones.html`; ningún ítem lleva declaración de interés | D3 · C | Tercer ítem y una línea de interés en el `description` del canal | verificador |
| **Corregible** | `historia` colofón | Único de los tres sin enlace a «Declaración de interés · Método» | C · A4 | Igualar los tres colofones | verificador |
| **Corregible** | `historia` nota 6 | Nombra dos administradoras chilenas vivas como fuentes corroborantes, en un sitio cuya regla es «arquitecturas, jamás actores» | B4 · C | Citar los documentos sin razón social, como se hace con la resolución en objeciones | adversario · verificador |
| **Corregible** | `historia` tira de estado | «en seis minutos» sobre 1.737 palabras de cuerpo (≈8 min) más 1.429 de notas | B4 | Quitar el número o corregirlo | escritor |
| **Corregible** | `index` nota 4 | «Minuta del Ministerio de Hacienda, sección C, numeral 22»: sin fecha, sin título, sin vía de acceso, y sostiene la cita que vive dentro de la figura | C · D3 | Fecha y forma de obtenerla, o marcarla como documento no público | verificador · jurista |
| Menor | Las tres páginas | Numeración de notas con saltos visibles y sin declarar (index 1-5,7,9,10; objeciones 1,2,5,6,7,8) | A4 | Renumerar por página, o una línea que declare la convención compartida | verificador |
| Menor | Las tres páginas | Tres convenciones distintas de índice | A4 | Una sola | curador de diseño |
| Menor | `assets/sitio.css` | 34,6 KB, 32 de 81 clases sin uso en las tres páginas | A1 | Podar las familias muertas | curador de diseño |
| Menor | `body.pieza::before` | La barra de progreso muere con `prefers-reduced-motion` | A4 | Excluirla de la anulación global: un indicador ligado al scroll no es movimiento vestibular | curador de diseño |
| Menor | `index` h1 (teléfono) | Rag «Chile puede / ser el / Luxemburgo de / América Latina» | A2 | `text-wrap: balance` | curador de diseño |
| Menor | `index#figura` (escritorio) | 126 px de hueco muerto al pie del panel «Hoy» | A2 | `align-content` o cierre pegado al último `dd` | curador de diseño |
| Menor | `gestor-de-inversiones.html` | Stub `noindex` con JSON-LD `Article` de titular anterior | A4 · D3 | Sacar el JSON-LD del stub | verificador |
| Menor | raíz | `og-cover.svg` duplicado byte a byte en `assets/og-sitio.svg` | A1 | Dejar uno | curador de diseño |

### La tercera página: ¿se gana su lugar?

**Sí, el argumento. No, la forma.** `historia.html` aporta tres cosas que el sitio no
tiene en otra parte: mata la objeción más cómoda («esto es una rareza importada») con
precedente doméstico; entrega la mejor frase legislativa del sitio («Los cuatro
anteriores fueron obligaciones. Este es un permiso»); y neutraliza «la industria se
opone» con la propuesta del gremio de marzo. Sin ella el sitio es más débil.

Pero es la página que más necesita sustracción y la única que **filtra su propia
debilidad hacia arriba**: 18,6 pantallas de teléfono, un aparato de fuentes de 1.429
palabras que ocupa el 37,5% del alto de la página, siete de ocho fuentes declaradas
sin abrir — y dos afirmaciones que `index` toma de ella sin nota y sin declarar. Como
está, un lector hostil no la usa para acusar de lobby; la usa para acusar de haber
escrito historia legal chilena sin abrir una sola ley. La declaración es ejemplar; ser
transparente sobre un defecto no es lo mismo que no tenerlo.

---

## 8 · Fugas del harness

| Hallazgo | Gate que debió atraparlo |
|---|---|
| `objeciones`: nota 2 con tres llamadas (`ref-fn2`, `ref-fn2b`, `ref-fn2c`) y un solo retorno | S02 (notas al pie) — index resuelve el caso bien, así que el gate no verifica simetría llamada↔retorno |
| `feed.xml` omite `objeciones.html`; el manifiesto de superficies no cuadra con las páginas publicadas | S03 (metadata) / D3 |
| Contraste 3,34:1 y 3,55:1 en `.tres-preguntas dt`, `.comparador-titulo` y `.debate-quien` en modo claro | X09 (accesibilidad base) — probablemente mide cuerpo y no rótulos mono de 13 px |
| `historia` nota 6 nombra dos administradoras chilenas vivas | D05 (cero actores) — probablemente escanea cuerpo y no notas |
| `index#falta`: dos afirmaciones fácticas sin nota, no cubiertas por su propio `#metodo` | S07/S08 (cifras respaldadas) — no cubren afirmaciones no numéricas apoyadas en otra página |
| `historia` promete «seis minutos» sobre 1.737 palabras | E-* (voz de la casa, «un número o nada») |
| `gestor-de-inversiones.html`: JSON-LD `Article` con titular retirado en un stub `noindex` | S03 / no-reutilización |
| `assets/og-sitio.svg` y `og-cover.svg` idénticos byte a byte en dos rutas | X06 (peso) / manifiesto de assets |
| `.estado` y `.nav-pie` de index desbordan 5-8 px su contenedor a 320 px (contenido, sin scroll de página) | X01 (viewport) — mide scroll del documento, no desborde interno |

---

## 9 · Lo que no pude verificar

1. **La página publicada.** La URL devuelve 403 desde esta red. Juzgué los archivos
   locales; no puedo confirmar que lo desplegado sea idéntico, ni cómo renderiza la
   tarjeta social en un cliente real. Haría falta una corrida desde una red con
   acceso a `github.io`.
2. **Teléfono real.** Medí en Chromium con viewport nominal 390×844. Safari en iOS
   descuenta barras: el alto útil real está entre ~700 y 730 px. Eso empeora el
   hallazgo de `#figura`, no lo mejora. Haría falta un dispositivo o BrowserStack.
3. **La verdad de los hechos externos** —posición de Luxemburgo, artículo 20 de la
   AIFMD, las resoluciones de la CVM brasileña, las cuatro leyes chilenas, la
   resolución sancionatoria, la propuesta del gremio de marzo, las páginas del
   Mensaje y la minuta de Hacienda—. No juzgué su verdad, solo la honestidad con que
   la página declara su fuente, como manda la rúbrica. La minuta de Hacienda es, de
   todas, la única que ni siquiera un lector con acceso podría localizar con lo que
   la nota entrega.
4. **Si los gates deterministas corrieron en verde.** Me lo dieron por dado. Los nueve
   hallazgos del §8 sugieren que al menos S02, S03, X09 y D05 tienen puntos ciegos;
   no pude distinguir «el gate falló» de «el gate no cubre ese caso».
5. **Lectores reales.** El test del lector ajeno y el del abogado los corrí yo
   simulando. Un juicio de recepción de verdad exige las dos personas.
