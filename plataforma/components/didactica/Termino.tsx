"use client";

import type { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { glosario } from "@/data/marketData";

interface Props {
  /** Id del término en el glosario. */
  id: string;
  children: ReactNode;
}

/**
 * Envuelve jerga financiera en un término con definición al pasar el cursor
 * ("hover to learn"). Si el id no existe en el glosario, muestra el texto tal
 * cual: nunca rompe la lectura.
 */
export function Termino({ id, children }: Props) {
  const termino = glosario.find((t) => t.id === id);
  if (!termino) return <>{children}</>;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="cursor-help rounded-sm underline decoration-acento-regla decoration-dotted underline-offset-4 hover:decoration-acento"
        >
          {children}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-semibold">{termino.termino}</p>
        <p className="mt-1 text-gris">{termino.definicion}</p>
      </TooltipContent>
    </Tooltip>
  );
}
