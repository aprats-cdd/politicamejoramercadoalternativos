# Veredicto AG-SITIO-ADVERSARIO · ensayo "palanca del patrimonio" · 2026-07-04

Corrida 2 del motor editorial. Adversario INDEPENDIENTE (LEY-1: no redactó la
pieza, no comparte la lógica del autor). Gate S05.

Pieza: `renta-fija-palanca-patrimonio.html` (ENSAYO). Cliente: banquero
patrimonial de un MFO. Tesis controladora (en positivo): mejorar el retorno del
bloque grande (renta fija) mueve el patrimonio más que agrandar el bloque chico
(deuda privada); la vía es admitir deuda privada verificable y garantizada
dentro del cupo, con la estructura de capital dicha sin disfraz.

## Test del aludido: **0 frases señalables**

- Actor como objeto de crítica/comparación: cero. Todo el contraste corre entre
  arquitecturas (verificable/garantizada vs sin garantía; senior vs subordinado;
  patrimonio separado vs libro de bonos plano). "bancos, AFP y fondos mutuos"
  nombra sectores en función descriptiva (quién fondea el senior), sin crítica.
- Aritmética de fees identificable hacia un actor: cero. La pieza no cita un
  solo fee ni rebate — más limpia que `separacion-de-roles.html` (que carga 3-7 bps).
- Colofón refuerza la regla 3.

## Inducción oculta / conflicto: **cumplida + un fix de drift**

- Regla 7 (interés + costo): cumplida — beneficio y costo explícitos en la
  declaración ("el costo lo cargo primero yo … en mis propios fondos antes que
  en los ajenos").
- Inducción oculta de fee/rebate al banquero: LIMPIO. La fidelización apela a la
  retención de cliente, no a un fee que el autor pague por recomendar. Persuasión
  explícita, no guiñada. (Las dos líneas rojas del CEO se sostuvieron.)
- FIX exigido: "El acceso, para el banquero, es a través de un fondo dedicado"
  metía el canal al vehículo propio dentro del argumento (drift a pitch).

## Overclaim / disfraz de riesgo: **evitado + un fix aritmético**

- Disfraz tipo Sartor: evitado. El tramo subordinado va marcado ("mayor riesgo
  de crédito que el senior, y sin marca a mercado diaria, lo que no es lo mismo
  que sin riesgo"). "el riesgo baja" va como juicio ("A mi juicio").
- Cifras contra el registro: todas respaldadas (55%, USD 400.000M, USD 5.000M,
  rangos 40-60% / 5-25% vía claim ilustrativo).
- FIX exigido: "dos a tres veces más … un décimo" — la mitad ÷ un décimo = 5×,
  no 2-3×. Defecto aritmético interno que el harness no anticipó.

## Muletilla / tono: **LIMPIO**

Sin la familia "no es X — es Y" ni afirmación-primero en tono de vendedor.
Sobrio, sin exclamaciones, sin jerga de IA/tech, sin anglicismo gratuito
("premio sobre el crédito" en vez de spread; "marca a mercado" traducido), sin
relleno.

## Veredicto: **PASA-CON-FIXES** → 2 fixes aplicados en esta corrida

1. **Aritmética "dos a tres veces / un décimo"** → reescrito a "aplicada al
   bloque de renta fija —del orden de la mitad de la cartera—, mueve el
   patrimonio dos a tres veces más que aplicada a la deuda privada, que rara vez
   pasa de un quinto" (~50% / ~20% = 2,5×, dentro de "dos a tres" y del rango
   5-25%). **Disparó el loop de mejora**: nuevo tripwire E11 (advisory) en
   eval_editorial.py — marca todo claim multiplicativo para verificación humana.
   Registrado en calibracion-editorial.yaml.
2. **Drift a pitch** ("El acceso, para el banquero, es a través de un fondo
   dedicado") → despersonalizado a arquitectura ("El formato que vuelve
   comprable ese activo para una cartera es un fondo dedicado a deuda privada
   verificable"). La declaración de interés sigue cargando el vehículo propio y
   su costo.

## Estado

Gates verdes tras los fixes: eval_editorial (E10/E11 advisory marcan fronteras
legítimas, no bloquean), eval_sitio S01-S09 (gate_pasado=true), eval_experiencia
(X01-X11), smoke_experiencia (T01-T05, pieza agregada a la cobertura),
eval_constelacion. La pieza queda lista para publicar; el ship es checkpoint del
CEO (Andrés Prats) — publicar bajo su nombre nunca es automático.
