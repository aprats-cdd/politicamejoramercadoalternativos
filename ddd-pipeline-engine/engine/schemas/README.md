# Schemas

Definiciones formales de la estructura de los artefactos que produce y consume el pipeline.

## Propósito

Cada artefacto que circula por el pipeline (planes, outputs de generators, audit reports) tiene un schema asociado. Esto permite:

1. **Validar** que un generator produjo un artefacto con la estructura correcta.
2. **Documentar** qué campos espera cada agente.
3. **Versionar** la evolución de los formatos.

## Schemas esperados

| Schema | Describe | Formato |
|--------|----------|---------|
| `plan.schema.json` | Estructura de un plan de ejecución | JSON Schema |
| `bounded-context.schema.json` | Artefacto de bounded contexts | JSON Schema |
| `aggregate.schema.json` | Artefacto de aggregates | JSON Schema |
| `domain-event.schema.json` | Artefacto de domain events | JSON Schema |
| `audit-report.schema.json` | Resultado de una auditoría | JSON Schema |

## Convención

- Formato: JSON Schema Draft 2020-12.
- Nombre: `<artefacto>.schema.json`.
- Todo schema debe incluir `$id`, `title` y `description`.

## Estado

Directorio preparado. Schemas pendientes de definición.
