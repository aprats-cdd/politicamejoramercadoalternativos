import type { Rol, RolId } from "@/data/schema";

/** Verbo corto por rol, para chips y subtítulos del diagrama. */
export const VERBO_ROL: Record<RolId, string> = {
  inversionista: "aporta",
  gestor: "decide",
  administrador: "administra",
  custodio: "custodia",
  valorizador: "valoriza",
  auditor: "audita",
  regulador: "regula",
};

export function rolPorId(roles: readonly Rol[], id: RolId): Rol | undefined {
  return roles.find((r) => r.id === id);
}
