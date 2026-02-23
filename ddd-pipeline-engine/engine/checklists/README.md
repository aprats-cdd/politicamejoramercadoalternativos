# Checklists

Listas de verificación que los auditors usan para evaluar artefactos.

## Propósito

Una checklist es un conjunto de reglas con las que un auditor evalúa un artefacto. Cada regla tiene un identificador, una descripción y un criterio de evaluación. Las checklists son independientes de la implementación del auditor: el mismo auditor puede aplicar distintas checklists.

## Checklists esperadas

| Checklist | Dominio | Reglas |
|-----------|---------|--------|
| `ddd-checklist.yml` | Domain-Driven Design | Naming, boundaries, aggregate rules, event completeness |
| `ilpa-3.0-checklist.yml` | ILPA 3.0 reporting | Campos obligatorios, formatos, periodicidad, templates |
| `api-contract-checklist.yml` | API design | RESTful conventions, versioning, error formats |

## Formato de una checklist

```yaml
id: ddd-checklist
version: "1.0"
description: "Validación de artefactos DDD según Evans"
rules:
  - id: BC-001
    description: "Cada bounded context tiene un nombre único"
    severity: error
  - id: BC-002
    description: "Cada bounded context define su ubiquitous language"
    severity: warning
```

## Convención

- Formato: YAML.
- Nombre: `<dominio>-checklist.yml`.
- Severidades: `error` (bloquea), `warning` (advierte), `info` (informativo).

## Estado

Directorio preparado. Checklists pendientes de definición.
