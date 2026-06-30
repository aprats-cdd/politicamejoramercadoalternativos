# Corrida · 2026-06-30 · Memo a estándar mundial + tesis de renta fija

**Encargo.** Subir el nivel del memo a estándar mundial para reguladores, AFPs,
seguros, AGFs y políticos; integrar la tesis que faltaba (deuda privada con el
estándar de la renta fija). Sin tocar el diseño. Todo auditado dos veces.

**Cuello de botella.** La página era buena pero 80% defensiva (Sartor, "nadie
verifica"). Le faltaba la mitad constructiva y el blindaje contra la lectura
hostil de un experto. Un regulador aplaude lo que crea mercado, no solo lo que
previene fraude.

## Qué encontró el equipo (auditado 2 veces)

**Números (dos auditores ciegos, coinciden):**
- Renta fija global ÷ private credit ≈ **70×** (rango 65–85×), no 40–50× ni 100×.
  FI ~USD 145 billones (SIFMA 2024); private credit ~USD 2,1 billones (FMI 2024).
- AFP ~USD 186–190B; cupo de alternativos escalonado (~17% Fondo A, 20% en 2027).
- El capital basado en riesgo de seguros chilenos **no está vigente** (en el
  Congreso desde 2011). Hoy opera por límites + rating mínimo + custodia. No se
  afirma lo contrario en la página.

**Jurista (factibilidad legal):**
- Chile tiene la riel desde 1994: securitización (Título XVIII, Ley 18.045) +
  patrimonio separado. Un bono securitizado con rating es renta fija elegible
  (DL 3.500 art. 45 + CCR; DFL 251 seguros) → cuenta en el cupo de renta fija,
  no en el de alternativos. **Sin ley nueva.** El hueco es de mercado
  (verificación, originación con datos, rating, servicing), no legal.

**Verificadores de citas (doble):** confirmados en alto Título XVIII (arts. 132
y ss.), patrimonio separado art. 135; DL 3.500 art. 45 + CCR; DFL 251 + NCG 152
(BBB/N-3, custodia ≥98%); retención de riesgo 5% (UE 2017/2402 art. 6;
Dodd-Frank §941). No fijados (no se afirman): letra exacta del art. 45, número de
securitizadoras. La página dice "Sujeto a revisión legal" — encaja.

**Adversario (red-team) — 4 golpes letales y su arreglo, todos aplicados:**
1. "Separación funcional → renta fija" es un salto → se bajó a "remueve el
   bloqueador principal; necesaria, no suficiente".
2. "¿No es el subprime de 2008?" → guardarraíles en el cuerpo: retención de
   riesgo, subyacente transparente de una capa, vehículo cerrado.
3. "No es renta fija" (misselling) → acotado a "adquiere atributos de
   elegibilidad y migra de cupo".
4. "Es lobby del autor" → **Declaración de interés en página 1**, con el peso en
   lo que la propuesta le cuesta al gestor.

## Qué se cambió en la página (quirúrgico, sin tocar diseño)

- Portada: **Declaración de interés**.
- **Acto V "El cupo equivocado"**: la tesis constructiva acotada + guardarraíles
  anti-2008 + bloque "puerta chica / puerta grande".
- Resumen ejecutivo: 5° punto, "El premio".
- **5 objeciones nuevas** (subprime, no-es-renta-fija, descalce, Madoff, conflicto).
- Glosario: securitización, patrimonio separado, cupo, retención de riesgo.
- Fuentes fn15–fn20. Navegación + scrollspy con el Acto V.

## Pendiente / a vigilar
- Revisión legal final del texto exacto de las normas (egress bloqueó leychile).
- Posible inconsistencia preexistente: seguros ~USD 60.000M (pestaña legislador)
  vs ~USD 85.000M (fn8). No tocada — fuera del alcance "la página está auditada".

## Veredicto del panel adversarial final
(ver abajo — se completa con la corrida del workflow `red-team-final-memo`)
