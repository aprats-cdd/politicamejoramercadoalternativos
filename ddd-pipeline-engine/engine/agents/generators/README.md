# Generators

Agentes que producen artefactos de diseño a partir del plan de ejecución.

## Responsabilidad

Cada generator recibe un **contexto** (dominio + estándares + artefactos previos) y produce un **artefacto de diseño** específico. Los generators no validan — solo producen.

## Tipos de artefactos que generan

| Generator | Artefacto | Formato |
|-----------|-----------|---------|
| `bounded-context-generator` | Mapa de bounded contexts | JSON |
| `aggregate-generator` | Definiciones de aggregates | JSON |
| `event-generator` | Catálogo de domain events | JSON |
| `api-contract-generator` | Contratos de API (OpenAPI) | YAML |
| `schema-generator` | Schemas de datos | JSON Schema |

## Convención

- Un archivo por generator.
- Nombre del archivo: `<tipo>-generator.{py,ts,yml}`.
- Cada generator debe exponer una función/entrada que reciba `(context, plan_step)` y devuelva un artefacto serializable.

## Estado

Directorio preparado. Generators pendientes de implementación.
