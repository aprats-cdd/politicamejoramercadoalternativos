# Auditors

Agentes que validan artefactos de diseño contra checklists y estándares canónicos.

## Responsabilidad

Cada auditor recibe un **artefacto** producido por un generator y una **checklist** de validación. Evalúa el artefacto punto por punto y emite un **audit report** con resultado `PASS`, `FAIL` o `WARN`.

## Tipos de auditoría

| Auditor | Qué valida | Contra qué |
|---------|-----------|------------|
| `ddd-auditor` | Consistencia del modelo DDD | Checklist DDD (Evans) |
| `ilpa-auditor` | Conformidad con ILPA 3.0 | Checklist ILPA 3.0 |
| `schema-auditor` | Validez de schemas | JSON Schema Draft 2020-12 |
| `cross-reference-auditor` | Coherencia entre artefactos | Grafo de dependencias del plan |

## Convención

- Un archivo por auditor.
- Nombre del archivo: `<tipo>-auditor.{py,ts,yml}`.
- Cada auditor debe exponer una función/entrada que reciba `(artifact, checklist)` y devuelva un audit report serializable.

## Formato del audit report

```json
{
  "auditor": "ddd-auditor",
  "artifact": "bounded-contexts.json",
  "checklist": "ddd-checklist.yml",
  "result": "PASS | FAIL | WARN",
  "findings": [
    {
      "rule": "BC-001",
      "status": "PASS",
      "detail": "Cada bounded context tiene un nombre único"
    }
  ]
}
```

## Estado

Directorio preparado. Auditors pendientes de implementación.
