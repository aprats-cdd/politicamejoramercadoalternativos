# Capa comparada Chile-Luxemburgo: el árbitro, el registro y lo que falta

**Fecha:** 13-sep-2026 · **Rol:** AG-SITIO-JURISTA (memoria extendida a derecho
comparado) · **Gate nuevo:** `constelacion/eval_comparado.py`

## Qué pidió el dueño

Encargo en dos fases el mismo día: primero una prompt "que entienda un niño de
10 años" para levantar la capa comparada con un sistema de marcas honesto
(`leido` / `de_oido` / `supuesto`) en vez de exigir doble fuente para todo;
después, "Fase 4: lock final" — escribir los artefactos al repo, correr los
gates y dejarlo en un PR draft.

## Qué ya estaba resuelto y no se tocó

Las tres leyes de `constelacion/README.md`, los ocho gates deterministas
vigentes (`eval_constelacion`, `eval_sitio`, `eval_experiencia`,
`eval_editorial`, `eval_citabilidad`, `eval_lector`, `eval_afilado`,
`eval_steelman`), `registro-sitio.yaml`, el contrato `de_oido` de
`eval_sitio.py:255` (con sus tres campos obligatorios, heredado tal cual), y
el sitio HTML estático completo — ni una línea tocada.

## Estado del egress (verificado tres veces el 13-sep-2026, la última justo
antes de escribir `registro-comparado.yaml`)

```
eur-lex.europa.eu        403 (CONNECT tunnel failed — policy denial)
www.cmfchile.cl          403
www.bcn.cl                403
www.legilux.public.lu    403
```

Consecuencia directa: **cero datos `leido` en todo el registro.** Los diez
nodos de `registro-comparado.yaml` son cinco `de_oido` (el régimen
luxemburgués/UE, según entrenamiento del modelo) y cinco `supuesto` (la
lectura chilena, deducida por ausencia de figura equivalente en la evidencia
ya registrada del sitio).

## Los cinco pares (función · Luxemburgo `de_oido` · Chile `supuesto`)

| Función | LU (de_oído) | CL (supuesto) | `vector` |
|---|---|---|---|
| Restitución por pérdida | Depositario responde con patrimonio propio; prueba el que cuidaba | Sin figura equivalente para el FIP; probaría el partícipe | `punto_palanca` |
| Valorización | Independiente de quien gestiona la cartera | Sin exigencia equivalente para el FIP | `bucle_compensacion` |
| Autorización del gestor | CSSF autoriza incluso al gestor de un RAIF | La administradora de un FIP no requiere autorización previa | `retardo_estructural` |
| Umbral de exención | **Minimis**: Luxemburgo también tiene escalón liviano | El FIP nace liviano, no baja de un régimen pleno | `bucle_compensacion` |
| Límite a la delegación | No se puede vaciar hasta ser buzón (art. 20) | Sin límite equivalente, porque no hay función obligatoria que delegar | `bucle_refuerzo` |

## El hallazgo que reencuadra el argumento

**LU-F4 / CL-F4 (minimis) es el par que más importa.** Si Luxemburgo también
exime del régimen pleno bajo un umbral, la comparación honesta no es "Chile
no separa, Luxemburgo sí" — es "Chile no tiene el escalón que hace que la
exención se pueda perder al crecer". Eso es una tesis más angosta y más
defendible, pero **no está verificada**: el nodo `LU-F4` declara explícitamente
que no sostiene si el gestor de minimis luxemburgués sigue obligado a designar
depositario, que es la pregunta que decide si el hallazgo sostiene la tesis
del sitio o la tumba. Ver `HIP-2026-04`, agregada a
`hipotesis-publicadas.yaml`.

## Nota sobre el campo `vector` (K03)

El encargo de "Fase 3" introdujo un enum cerrado de dinámica de sistemas
(Donella Meadows: `bucle_refuerzo`, `bucle_compensacion`, `punto_palanca`,
`retardo_estructural`) para clasificar el rol de cada `supuesto`. Ese
vocabulario **no tiene precedente en el resto de `constelacion/`**. Lo
implementé en el gate tal como se pidió — es mecánicamente decidible, no le
pide juicio a ningún LLM — y asigné un valor a cada uno de los cinco
supuestos con mi mejor lectura, pero es una clasificación interpretativa mía,
no una lectura de norma. Es el campo de todo este registro con más riesgo de
"gate de teatro" si en algún momento se llena sin pensarlo. Recomendación
pendiente de aceptar o no: que el próximo uso de este campo venga con un
ejemplo canónico de cada una de las cuatro categorías, para que el enum
signifique algo desde ahora.

## Un bug real que encontré al redactar, y cómo lo resolví

`K06` (fecha de versión consolidada obligatoria) corta la búsqueda de la
fecha en el primer punto (".") que aparece entre la mención de la norma y la
fecha. Una redacción tan razonable como `"AIFMD art. 3, versión consolidada
2024-03-26."` **falla** el gate, porque el punto de la abreviatura `art.`
corta la ventana de búsqueda antes de llegar a la fecha — aunque la fecha
esté presente y sea correcta. Lo verifiqué con el regex real antes de escribir
el registro, en vez de confiar en el conteo manual de caracteres.
No toqué el gate (se declaró cerrado esta fase): reescribí las cinco citas
para poner la fecha inmediatamente después de la mención de la norma, antes
de cualquier abreviatura con punto. Quedó documentado en el docstring de
`eval_comparado.py` y en su propio self-test (`K06 caza fecha cortada por un
punto de abreviatura`), para que la próxima persona que escriba un nodo no
se tropiece con lo mismo sin saber por qué.

## Estado de verificación de cada afirmación (agrupado por marca)

**Leído (0):** ninguno. Sin acceso a las cuatro fuentes primarias, nada
puede llevar esta marca.

**De oído (5) — LU-F1 a LU-F5:** el régimen luxemburgués/UE completo viene
del entrenamiento del modelo, no de un documento en mano. Cada uno declara
`fuente_citada`, `via` y `no_sostiene` explícitos. El más frágil es **LU-F4**
(el umbral de minimis): no sostiene la cifra del umbral ni si el depositario
sigue siendo obligatorio bajo ese régimen liviano — es exactamente el vacío
que `HIP-2026-04` existe para cerrar.

**Supuesto (5) — CL-F1 a CL-F5:** la lectura chilena, deducida por ausencia
de figura equivalente en la evidencia ya registrada del sitio. **CL-F1 es la
deducción más débil de las cinco**: un argumento por ausencia ("si existiera,
debería aparecer, y no aparece"), que es el tipo de razonamiento más fácil de
tumbar que hay. Está declarado así en su propio `que_lo_destruye`.

## Lo que no se pudo verificar, dicho de frente

Los nueve documentos primarios completos (AIFMD consolidada, Directiva (UE)
2024/927, marco AIFM/RAIF luxemburgués, Ley 20.712, Ley 18.876) siguen sin
leerse. Las fechas de "versión consolidada" que aparecen en el registro son
de memoria, marcadas como tales, y podrían estar equivocadas. Las cifras del
umbral de minimis luxemburgués no se publicaron en ningún lado — ni aquí ni
en el sitio — precisamente porque no están verificadas.

## Gates (corrida real, no simulada)

```
python3 constelacion/eval_comparado.py --self-test   → 26/26 fixtures, VERDE
python3 constelacion/eval_comparado.py               → 1a corrida: ROJO, 4 problemas
                                                         (K06 en LU-F1/F2/F4/F5 — "AIFMD"
                                                         mencionado en 'afirmacion' sin la
                                                         fecha que sí llevaba 'ley'; el gate
                                                         escanea ambos campos y detectó una
                                                         inconsistencia real mía, no un bug)
                                                         2a corrida, tras corregir el
                                                         registro: VERDE
```

Los ocho gates preexistentes (`eval_constelacion`, `eval_sitio`,
`eval_experiencia`, `eval_editorial`, `eval_citabilidad`, `eval_lector`,
`eval_afilado`, `eval_steelman --self-test` + `eval_steelman`) se re-corrieron
completos después de este cambio: los ocho siguen en VERDE, nada se rompió.
