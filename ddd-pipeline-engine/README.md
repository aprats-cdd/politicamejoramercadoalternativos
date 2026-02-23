# ddd-pipeline-engine

Pipeline de diseño de software ejecutado por agentes de IA, agnóstico al sistema que diseña.

## Qué es

`ddd-pipeline-engine` es un motor que orquesta agentes de IA para ejecutar un pipeline completo de diseño de software siguiendo principios de Domain-Driven Design (DDD). El motor no está acoplado a ningún sistema en particular: recibe un dominio, lo analiza, genera artefactos de diseño y los audita — todo de forma automatizada.

## Orientación

Aunque el motor es genérico, su configuración por defecto está orientada a:

- **Plataformas de deuda** (originación, servicing, securitización)
- **Asset managers** bajo estándar **ILPA 3.0** (reporting, templates, datos de fondos)

## Cómo funciona

El pipeline se ejecuta en pasos secuenciales, cada uno operado por un agente especializado:

```
Dominio → [Planner] → [Generators] → [Auditors] → Artefactos validados
```

1. **Planner**: recibe la descripción del dominio y genera el plan de ejecución (qué agentes invocar, en qué orden, con qué inputs).
2. **Generators**: agentes que producen artefactos de diseño (bounded contexts, aggregates, eventos, schemas, contratos API, etc.).
3. **Auditors**: agentes que validan los artefactos contra checklists, estándares canónicos y reglas del dominio.
4. **Checkpoint**: punto de control donde se persisten los resultados de cada paso y se decide si continuar o detener.

## Estructura del repositorio

```
ddd-pipeline-engine/
├── .github/workflows/    # Orquestación CI/CD del pipeline
├── engine/
│   ├── agents/
│   │   ├── generators/   # Agentes que producen artefactos de diseño
│   │   └── auditors/     # Agentes que validan artefactos
│   ├── schemas/          # Schemas JSON/YAML de los artefactos
│   ├── checklists/       # Listas de verificación por dominio
│   └── planner/          # Lógica de planificación del pipeline
├── runs/                 # Resultados de ejecuciones del pipeline
├── docs/                 # Documentación de referencia y estándares
└── README.md
```

## Principios

- **Agnóstico al dominio**: el motor no sabe qué sistema está diseñando. Los agentes reciben contexto, no asunciones.
- **Auditable**: cada paso genera artefactos trazables. Nada se acepta sin pasar auditoría.
- **Reproducible**: una misma entrada produce la misma secuencia de pasos. Los resultados se persisten en `runs/`.
- **Extensible**: agregar un nuevo tipo de agente (generator o auditor) es agregar un archivo y registrarlo en el planner.

## Estándares soportados

| Estándar | Versión | Uso |
|----------|---------|-----|
| ILPA Reporting Template | 3.0 | Estructura de reporting para LPs en fondos de private equity/debt |
| DDD (Evans) | — | Modelado del dominio: bounded contexts, aggregates, domain events |

## Estado

Proyecto en fase de bootstrap. La estructura base está definida; los agentes aún no tienen implementación.
