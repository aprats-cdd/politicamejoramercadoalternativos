"use client";

import type { Indicador } from "@/data/schema";
import { StatTile } from "./StatTile";

interface Props {
  indicador: Indicador;
}

/**
 * Dos tarjetas lado a lado, Chile y Luxemburgo, para un mismo indicador.
 * Si el indicador no es comparable, lo dice antes de mostrar las cifras.
 */
export function IndicadorPar({ indicador }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h3 className="text-base font-semibold">{indicador.etiqueta}</h3>
        <p className="text-sm text-gris">{indicador.explicacion}</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <StatTile etiqueta="Chile" cifra={indicador.porJurisdiccion.CL} tono="chile" />
        <StatTile etiqueta="Luxemburgo" cifra={indicador.porJurisdiccion.LU} tono="referencia" />
      </div>
      {indicador.notaComparabilidad && (
        <p className="text-xs leading-relaxed text-gris">
          {indicador.comparable ? "" : "Sin comparación directa. "}
          {indicador.notaComparabilidad}
        </p>
      )}
    </div>
  );
}
