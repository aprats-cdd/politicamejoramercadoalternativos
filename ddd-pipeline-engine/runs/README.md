# Runs

Directorio de persistencia para ejecuciones del pipeline.

## Propósito

Cada ejecución del pipeline genera un directorio dentro de `runs/` con todos los artefactos producidos, audit reports y checkpoints. Esto garantiza trazabilidad completa y reproducibilidad.

## Estructura de una ejecución

```
runs/
└── run-20260223-143000/
    ├── plan.json                       # Plan de ejecución generado por el planner
    ├── artifacts/
    │   ├── bounded-contexts.json       # Output de bounded-context-generator
    │   ├── aggregates.json             # Output de aggregate-generator
    │   └── domain-events.json          # Output de event-generator
    ├── audits/
    │   ├── bounded-contexts.audit.json # Report del ddd-auditor
    │   └── aggregates.audit.json       # Report del ddd-auditor
    └── checkpoints/
        ├── bounded-context-generator.json
        ├── ddd-auditor.json
        └── aggregate-generator.json
```

## Convención

- Cada run se identifica por `run-YYYYMMDD-HHMMSS`.
- Los artefactos se guardan en `artifacts/`, los audits en `audits/`, los checkpoints en `checkpoints/`.
- Nada se borra. Los runs son inmutables una vez completados.

## Gitignore

Los contenidos de `runs/` (excepto este README) deben ignorarse en producción para no saturar el repositorio. En desarrollo pueden commitearse como referencia.

## Estado

Directorio preparado. Sin ejecuciones aún.
