"use client";

import type { Cifra } from "@/data/schema";
import { esPublicable } from "@/lib/evidencia";
import { nombreUnidad, presentarCifra } from "@/lib/format";
import { cn } from "@/lib/utils";
import { EvidenceBadge } from "./EvidenceBadge";

export type TonoTile = "chile" | "referencia" | "propuesta" | "neutro";

interface Props {
  etiqueta: string;
  cifra: Cifra;
  tono?: TonoTile;
  className?: string;
}

const TONOS: Record<TonoTile, string> = {
  chile: "bg-acento-fondo shadow-[0_0_0_1px_var(--acento-regla)]",
  referencia: "bg-referencia-fondo shadow-[0_0_0_1px_var(--referencia-regla)]",
  propuesta: "bg-propuesta-fondo shadow-[0_0_0_1px_var(--propuesta-regla)]",
  neutro: "bg-nota shadow-[0_0_0_1px_var(--regla-suave)]",
};

const CIFRA: Record<TonoTile, string> = {
  chile: "text-acento",
  referencia: "text-tinta",
  propuesta: "text-propuesta",
  neutro: "text-tinta",
};

/**
 * Tarjeta de una sola cifra. La cifra grande usa dígitos proporcionales
 * (no tabulares) y la misma sans del resto. Si la cifra está pendiente, el
 * lugar se reserva con el marcador "por verificar", nunca con un número.
 */
export function StatTile({ etiqueta, cifra, tono = "neutro", className }: Props) {
  const publicable = esPublicable(cifra) || cifra.rango !== undefined;
  return (
    <div className={cn("flex flex-col gap-1 rounded-sistema p-4", TONOS[tono], className)}>
      <span className="text-sm font-semibold text-tinta">{etiqueta}</span>
      <span
        className={cn(
          "text-3xl font-semibold tracking-[-0.04em] leading-none",
          publicable ? CIFRA[tono] : "text-tenue text-xl italic",
        )}
      >
        {presentarCifra(cifra)}
      </span>
      <span className="text-xs text-gris">{nombreUnidad(cifra.unidad)}</span>
      <div className="mt-1">
        <EvidenceBadge evidencia={cifra.evidencia} compacto />
      </div>
    </div>
  );
}
