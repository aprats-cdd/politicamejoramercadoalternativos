# Canonical Standards

Estándares canónicos que el pipeline aplica para validar artefactos de diseño.

## Estándares activos

### 1. Domain-Driven Design (Evans, 2003)

**Uso en el pipeline**: modelado de dominio.

| Concepto | Cómo lo usa el pipeline |
|----------|------------------------|
| Bounded Context | Cada módulo del sistema se modela como un bounded context con límites explícitos |
| Aggregate | Entidades raíz con invariantes de consistencia |
| Domain Event | Hechos relevantes del dominio que desencadenan efectos |
| Ubiquitous Language | Vocabulario compartido dentro de cada bounded context |
| Context Map | Relaciones entre bounded contexts (upstream/downstream, ACL, shared kernel) |

**Checklist asociada**: `ddd-checklist.yml`

### 2. ILPA Reporting Template 3.0

**Uso en el pipeline**: validación de conformidad para plataformas de asset management y deuda.

| Área | Cómo lo usa el pipeline |
|------|------------------------|
| Capital Account Statement | Verifica que el modelo de datos cubra compromisos, contribuciones, distribuciones y NAV |
| Portfolio Company Data | Verifica campos obligatorios por inversión |
| Fee Reporting | Verifica granularidad del modelo de fees |
| ESG | Verifica presencia de métricas ESG cuando aplica |

**Checklist asociada**: `ilpa-3.0-checklist.yml`

**Referencia completa**: [ILPA-3.0-reference.md](./ILPA-3.0-reference.md)

### 3. API Design (RESTful conventions)

**Uso en el pipeline**: validación de contratos de API generados.

| Regla | Descripción |
|-------|-------------|
| Versionado | APIs deben incluir versión en la ruta (`/v1/...`) |
| Naming | Recursos en plural, kebab-case |
| Error format | Estructura estándar RFC 7807 (Problem Details) |
| Pagination | Cursor-based o offset-based con headers estándar |
| Idempotency | Operaciones POST con idempotency key |

**Checklist asociada**: `api-contract-checklist.yml`

## Agregar un nuevo estándar

1. Crear la documentación de referencia en `docs/`.
2. Crear la checklist en `engine/checklists/`.
3. Crear o configurar un auditor en `engine/agents/auditors/`.
4. Registrar el estándar en el planner para que sea seleccionable al crear un plan.

## Versionado de estándares

Cada estándar tiene su versión independiente. Cuando un estándar se actualiza:

1. Se crea una nueva checklist con versión (e.g., `ilpa-3.1-checklist.yml`).
2. La anterior se conserva para runs históricos.
3. El planner usa por defecto la versión más reciente, pero acepta versiones específicas.
