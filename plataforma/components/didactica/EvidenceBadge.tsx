"use client";

import { CheckCheck, CircleDashed, Ear, FileCheck, PencilLine, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { fuentes as catalogoFuentes } from "@/data/marketData";
import type { Evidencia, NivelEvidencia } from "@/data/schema";
import { describirNivel, fuentesDe } from "@/lib/evidencia";
import { cn } from "@/lib/utils";

const ICONOS: Record<NivelEvidencia, LucideIcon> = {
  "documento-fuente": FileCheck,
  "doble-fuente": CheckCheck,
  "de-oido": Ear,
  ilustrativo: PencilLine,
  pendiente: CircleDashed,
};

const VARIANTES: Record<NivelEvidencia, "neutro" | "alerta" | "referencia"> = {
  "documento-fuente": "neutro",
  "doble-fuente": "neutro",
  "de-oido": "referencia",
  ilustrativo: "referencia",
  pendiente: "alerta",
};

interface Props {
  evidencia: Evidencia;
  /** Solo ícono + texto corto. */
  compacto?: boolean;
  className?: string;
}

/**
 * Marca visible del nivel de evidencia de un dato. Al pasar el cursor o
 * enfocar, explica el nivel, lista las fuentes y dice qué NO sostiene.
 */
export function EvidenceBadge({ evidencia, compacto = false, className }: Props) {
  const nivel = describirNivel(evidencia.nivel);
  const Icono = ICONOS[evidencia.nivel];
  const fuentes = fuentesDe(evidencia, catalogoFuentes);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className={cn("inline-flex rounded-chico focus-visible:outline-2", className)}
          aria-label={`Evidencia: ${nivel.etiqueta}`}
        >
          <Badge
            variant={VARIANTES[evidencia.nivel]}
            className={cn("cursor-help", evidencia.nivel === "de-oido" && "border-dashed")}
          >
            <Icono aria-hidden className="size-3.5" />
            {compacto ? nivel.corta : nivel.etiqueta}
          </Badge>
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-sm">
        <p className="font-semibold">{nivel.etiqueta}</p>
        <p className="mt-1 text-gris">{nivel.explicacion}</p>
        {fuentes.length > 0 && (
          <ul className="mt-2 space-y-1 border-t border-regla-suave pt-2 text-xs text-gris">
            {fuentes.map((f) => (
              <li key={f.id}>
                <span className="text-tinta">{f.organismo}</span> · {f.nombre}
                {f.fecha ? ` (${f.fecha})` : ""}
              </li>
            ))}
          </ul>
        )}
        {evidencia.fechaDato && (
          <p className="mt-2 text-xs text-gris">Dato a: {evidencia.fechaDato}</p>
        )}
        {evidencia.noSostiene && (
          <p className="mt-2 text-xs text-gris">
            <span className="font-semibold text-tinta">No sostiene:</span> {evidencia.noSostiene}
          </p>
        )}
        {evidencia.nota && <p className="mt-2 text-xs text-gris">{evidencia.nota}</p>}
      </TooltipContent>
    </Tooltip>
  );
}
