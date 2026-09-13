"use client";

import type { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

/** Proveedores de contexto del lado del cliente (tooltips con retardo corto). */
export function Proveedores({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider delayDuration={150} skipDelayDuration={300}>
      {children}
    </TooltipProvider>
  );
}
