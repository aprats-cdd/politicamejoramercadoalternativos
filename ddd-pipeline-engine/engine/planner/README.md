# Planner

Motor de planificación que orquesta la secuencia de agentes del pipeline.

## Responsabilidad

El planner es el punto de entrada del pipeline. Recibe:

1. **Descripción del dominio**: texto libre que describe el sistema a diseñar.
2. **Estándares aplicables**: lista de estándares contra los cuales auditar (ILPA 3.0, DDD, etc.).

Y produce un **plan de ejecución**: una secuencia ordenada de pasos, donde cada paso indica qué agente invocar, con qué inputs y qué outputs esperar.

## Estructura de un plan

```json
{
  "plan_id": "run-20260223-143000",
  "domain": "Plataforma de servicing de deuda privada",
  "standards": ["DDD", "ILPA-3.0"],
  "steps": [
    {
      "order": 1,
      "agent": "bounded-context-generator",
      "type": "generator",
      "inputs": ["domain_description"],
      "outputs": ["bounded-contexts.json"]
    },
    {
      "order": 2,
      "agent": "ddd-auditor",
      "type": "auditor",
      "inputs": ["bounded-contexts.json"],
      "checklist": "ddd-checklist.yml",
      "outputs": ["bounded-contexts.audit.json"]
    }
  ]
}
```

## Lógica de planificación

1. Analizar la descripción del dominio para determinar qué artefactos DDD se necesitan.
2. Para cada artefacto, asignar un generator.
3. Para cada generator, asignar uno o más auditors según los estándares solicitados.
4. Intercalar checkpoints entre pasos críticos.
5. Serializar el plan y persistirlo en `runs/<plan_id>/plan.json`.

## Convención

- El planner no ejecuta agentes. Solo produce el plan.
- La ejecución la orquesta el workflow de GitHub Actions (`planner.yml`).

## Estado

Directorio preparado. Planner pendiente de implementación.
