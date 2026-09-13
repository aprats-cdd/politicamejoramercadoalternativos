"use client";

import { EvidenceBadge } from "@/components/didactica/EvidenceBadge";
import { Badge } from "@/components/ui/badge";
import type { CeldaRegulatoria, EstadoNorma, ObligacionRegulatoria } from "@/data/schema";
import { cn } from "@/lib/utils";

interface Props {
  obligaciones: ObligacionRegulatoria[];
}

const ESTADO: Record<EstadoNorma, { texto: string; variante: "chile" | "propuesta" | "alerta" | "neutro" }> = {
  vigente: { texto: "Vigente", variante: "chile" },
  proyecto: { texto: "Proyecto de ley", variante: "propuesta" },
  "no-existe": { texto: "No existe", variante: "neutro" },
  "por-verificar": { texto: "Por verificar", variante: "alerta" },
};

/**
 * Matriz de obligaciones regulatorias, CMF contra CSSF, con la columna
 * intermedia "Chile con el proyecto". En pantallas angostas cada fila pasa a
 * ser un bloque con sus tres celdas apiladas y rotuladas.
 */
export function RegulationMatrix({ obligaciones }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <div className="hidden grid-cols-[1.15fr_1fr_1fr_1fr] gap-3 px-1 md:grid" aria-hidden>
        <p className="rotulo">Obligación</p>
        <p className="rotulo text-acento">Chile hoy · CMF</p>
        <p className="rotulo text-propuesta">Chile con el proyecto</p>
        <p className="rotulo">Luxemburgo · CSSF</p>
      </div>
      <ol className="flex flex-col gap-3">
        {obligaciones.map((o, i) => (
          <li key={o.id} className="tarjeta grid gap-4 p-4 md:grid-cols-[1.15fr_1fr_1fr_1fr] md:gap-3">
            <div>
              <p className="font-mono text-xs text-rotulo">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-1 text-base font-semibold leading-tight">{o.tema}</h3>
              <p className="mt-1 text-sm text-gris">{o.pregunta}</p>
              <p className="mt-2 text-xs leading-relaxed text-tenue">{o.explicacion}</p>
            </div>
            <Celda rotulo="Chile hoy · CMF" celda={o.chile} tono="chile" />
            {o.chileProyecto ? (
              <Celda rotulo="Chile con el proyecto" celda={o.chileProyecto} tono="propuesta" />
            ) : (
              <div className="rounded-chico border border-dashed border-regla p-3 text-sm text-tenue">
                <p className="rotulo mb-2 md:hidden">Chile con el proyecto</p>
                Sin cambios propuestos en esta materia.
              </div>
            )}
            <Celda rotulo="Luxemburgo · CSSF" celda={o.luxemburgo} tono="referencia" />
          </li>
        ))}
      </ol>
      <p className="text-xs leading-relaxed text-gris">
        Estados: <Badge variant="chile">Vigente</Badge> rige hoy · <Badge variant="propuesta">Proyecto de ley</Badge>{" "}
        solo si se aprueba y la CMF dicta sus normas · <Badge variant="alerta">Por verificar</Badge> la norma
        exacta no fue abierta y el texto se limita a lo que se puede sostener.
      </p>
    </div>
  );
}

function Celda({ rotulo, celda, tono }: { rotulo: string; celda: CeldaRegulatoria; tono: "chile" | "propuesta" | "referencia" }) {
  const estado = ESTADO[celda.estado];
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-chico p-3",
        tono === "chile" && "bg-acento-fondo/60",
        tono === "propuesta" && "bg-propuesta-fondo/60",
        tono === "referencia" && "bg-referencia-fondo",
      )}
    >
      <p className="rotulo md:hidden">{rotulo}</p>
      <div className="flex flex-wrap items-center gap-1.5">
        <Badge variant={estado.variante}>{estado.texto}</Badge>
        <EvidenceBadge evidencia={celda.evidencia} compacto />
      </div>
      <p className="text-sm leading-relaxed text-tinta">{celda.texto}</p>
      {celda.norma && <p className="font-mono text-[0.7rem] leading-snug text-rotulo">{celda.norma}</p>}
    </div>
  );
}
