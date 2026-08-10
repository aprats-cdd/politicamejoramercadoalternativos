# AG-EDITORIAL-TESIS · formación de HIP-2026-01

- **Fecha:** 2026-07-04
- **Origen:** análisis del deck de Apollo sobre Private Investment Grade
  (`../2026-07-04-analisis-apollo-ig.md`).
- **Acto cognitivo M:** formar el OBJETO falsable a partir de la señal exógena.

## La señal

Slides 46–48 del deck: Apollo construye hoy la infraestructura de liquidez del IG
privado — marketplace de arquitectura abierta, dos ETFs público-privados con State
Street, ventana de rescate a 30 días en productos de corta duración, y trading de
crédito privado originado que iguala al bono público del mismo emisor. La deuda privada
deja de ser, por diseño, sinónimo de iliquidez.

## La creencia falsable (elevator test: una frase)

Antes de julio de 2029, al menos un vehículo de deuda privada verificable en Chile
ofrecerá a institucionales liquidez secundaria estructurada o ventana de rescate
periódica — la misma tratabilidad que hoy se cree exclusiva de la renta fija pública.

## Los tres campos (LEY-2, gate H01)

- **Aserción:** la de arriba.
- **Horizonte:** julio de 2029 (36 meses).
- **Falsador:** si a julio de 2029 ningún vehículo de deuda privada local ofrece a
  institucionales liquidez secundaria estructurada ni ventana de rescate periódica, la
  hipótesis queda falsada.

## Por qué es buena hipótesis (no autocomplaciente)

- **Puede tumbarla la realidad:** el falsador es observable y verificable por un tercero
  (existe/no existe un vehículo con ese mecanismo). No es una predicción vaga.
- **Envejece con dignidad** (lente del adversario): si se falsa, queda como una creencia
  honesta sobre la evolución del mercado, no como promesa de venta. El horizonte es
  ajeno al control del autor.
- **Ancla a la pieza viva** `renta-fija-palanca-patrimonio.html` (campo `pieza`), cuyo
  argumento de palanca depende de que el bloque de renta fija admita deuda privada
  tratable.

## Checkpoint del CEO

Publicar una hipótesis bajo el nombre del CEO es checkpoint del CEO (voz-de-la-casa,
objeto "Hipótesis"). Aprobado en sesión 2026-07-04 ("sin interrumpir, avanza"). El
ledger es público y append-only: si se falsa, queda visible con su resultado.

## Gate

`eval_editorial.py :: H01` — VERDE (aserción + horizonte + falsador + estado presentes).
La corre `AG-SITIO-VERIFICADOR`, no este agente (LEY-1).
