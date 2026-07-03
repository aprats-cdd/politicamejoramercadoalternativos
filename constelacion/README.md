# Constelación del memorándum

Equipo de agentes que lleva este memo a estándar mundial. Es **personal**, vive
en este repo, y es lo más chico que hace el trabajo bien — no un ejército para
mover una silla.

## La idea

La unidad de trabajo no es un agente suelto: es el **equipo**. Nueve roles, cada
uno con un trabajo, lo que lee, y un examen que **corre otro** — nunca él mismo.

## Las tres reglas (fail-closed)

1. **Nadie se corrige a sí mismo.** El examen de cada rol lo corre otro.
2. **Nadie pasa sin un examen que de verdad se pueda correr.**
3. **Cada dato que entra a la página está auditado por dos fuentes/ojos
   independientes.** Lo que no se puede doble-verificar, no entra.

## El equipo

| Rol | Hace | Lo examina |
|---|---|---|
| Auditor de evidencia | Verifica cada cifra contra dos fuentes | Harness + adversario |
| Jurista regulatorio | Factibilidad legal con norma citada | Verificador de citas + adversario |
| Verificador de citas | Fija el artículo y la fuente exacta | Doble verificación |
| Arquitecto de la tesis | Une lo defensivo y lo constructivo | Adversario |
| Productor de la página | Edita el HTML sin tocar el diseño | Verificación del draft |
| Adversario | Lee como el más hostil posible (incl. lente del aludido) | Su salida ES el examen |
| Sintetizador | Deduplica y prioriza los arreglos | Crítico de completitud |
| Lector inversionista / MFO | Pregunta lo que falta para decidir e invertir | Harness (`eval_lector.py`) + adversario |
| Empaquetador citable | Convierte la página en la referencia más fácil de citar | Harness (`eval_citabilidad.py`) + verificador de citas |

El catálogo completo, con la memoria y el examen de cada rol, está en
`agentes.yaml`.

## Cómo se corre el examen

```bash
python3 constelacion/eval_constelacion.py   # las tres leyes sobre el catálogo
python3 constelacion/eval_citabilidad.py    # footnotes + metadata + capas auditadas + kit
python3 constelacion/eval_lector.py         # tabla pregunta→estado del lector institucional
```

Verde = el equipo cumple las tres reglas. Rojo = bloquea (no se publica).

## Corridas

Cada vez que el equipo trabaja, deja registro en `runs/`. Ver
`runs/2026-06-30-memo-clase-mundial.md` para la corrida que agregó la tesis de
renta fija y blindó el memo contra la lectura hostil de un regulador,
`runs/2026-07-03-forja-relato-inversionista.md` para la forja de los roles de
citabilidad, y `runs/2026-07-03-capa-mfo.md` para la primera corrida O→M→D de
la constelación de nueve (capa del asesor patrimonial).
