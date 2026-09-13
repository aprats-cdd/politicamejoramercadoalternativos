"use client";

import type { TooltipContentProps } from "recharts";

type Base = Pick<TooltipContentProps<number, string>, "active" | "payload" | "label">;

interface Props extends Base {
  /** Convierte el valor numérico en texto legible. */
  formatear: (valor: number) => string;
  /** Explicación breve por categoría ("hover to learn"). */
  explicaciones?: Record<string, string>;
  /** Etiqueta de evidencia por categoría. */
  evidencias?: Record<string, string>;
}

/**
 * Tooltip de Recharts con la jerarquía invertida de la leyenda: el valor
 * manda, el nombre acompaña, y una línea explica qué es lo que se está viendo.
 */
export function ChartTooltip({ active, payload, label, formatear, explicaciones, evidencias }: Props) {
  if (!active || !payload || payload.length === 0) return null;
  const clave = typeof label === "string" || typeof label === "number" ? String(label) : "";
  return (
    <div className="max-w-xs rounded-sistema border border-regla bg-superficie px-3 py-2 text-sm shadow-tarjeta">
      {clave && <p className="font-semibold text-tinta">{clave}</p>}
      <ul className="mt-1 space-y-1">
        {payload.map((p, i) => {
          const valor = typeof p.value === "number" ? p.value : Number(p.value ?? 0);
          const nombre = typeof p.name === "string" ? p.name : String(p.name ?? "");
          return (
            <li key={`${nombre}-${i}`} className="flex items-baseline gap-2">
              <span
                aria-hidden
                className="mt-2 inline-block h-0.5 w-3 shrink-0 rounded"
                style={{ background: p.color ?? "var(--gris)" }}
              />
              <span className="text-base font-semibold text-tinta tabular">{formatear(valor)}</span>
              {nombre && nombre !== clave && <span className="text-gris">{nombre}</span>}
            </li>
          );
        })}
      </ul>
      {explicaciones?.[clave] && <p className="mt-2 text-xs leading-relaxed text-gris">{explicaciones[clave]}</p>}
      {evidencias?.[clave] && <p className="mt-1 text-xs text-tenue">Evidencia: {evidencias[clave]}</p>}
    </div>
  );
}
