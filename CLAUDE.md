# CLAUDE.md — politicamejoramercadoalternativos

## Regla única de este repositorio (decisión del dueño, 11-jul-2026)

Este repositorio es **PÚBLICO** — su contenido queda publicado en la web.

**Todo cambio requiere confirmación explícita de Andrés Prats
(`@aprats-cdd`) ANTES de ejecutarse.** Cubre: crear, editar o borrar
cualquier archivo; commits; push; crear PRs; merge a `main`.

- Es la **única excepción** a la política "permitir por defecto" del
  resto de los repos del sistema. La razón: publicar es irreversible —
  lo que llega a `main` acá es visible para cualquiera.
- **Ningún default, timeout ni modo de permisos convierte silencio en
  aprobación.** Si el dueño no responde, el cambio NO se hace
  (fail-closed).
- **No hay auto-merge en este repo.** Todo PR espera la aprobación
  explícita del dueño. La política "todo PR llega a merge" de los otros
  repos aquí significa: llega a merge *cuando el dueño lo aprueba*.
- Leer, analizar y **proponer** cambios es libre. Ejecutarlos, no.

La capa determinística de esta regla vive en `.claude/settings.json`
(`defaultMode: "default"` + lista `ask` para toda escritura y todo git
que modifique estado).
