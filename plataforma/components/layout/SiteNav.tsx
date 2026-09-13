"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SECCIONES, URL_ENSAYO, type SeccionId } from "@/lib/secciones";
import { cn } from "@/lib/utils";

/**
 * Navegación superior fija con scroll-spy: resalta la estación visible.
 * En pantallas angostas los enlaces se desplazan horizontalmente; todo
 * objetivo táctil mide al menos 44px.
 */
export function SiteNav() {
  const [activa, setActiva] = useState<SeccionId | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiva(entry.target.id as SeccionId);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    for (const s of SECCIONES) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-regla-suave bg-papel/85 backdrop-blur supports-[backdrop-filter]:bg-papel/70">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-5">
        <a href="#inicio" className="flex min-h-11 shrink-0 items-center gap-2 py-2" aria-label="Inicio">
          <svg viewBox="0 0 100 100" className="size-6" aria-hidden focusable="false">
            <rect width="100" height="100" rx="22" fill="var(--acento-solido)" />
            <text
              x="50"
              y="68"
              textAnchor="middle"
              fontFamily="var(--sans)"
              fontSize="46"
              fontWeight="600"
              letterSpacing="-3"
              fill="var(--primary-foreground)"
            >
              AP
            </text>
          </svg>
          <span className="hidden text-sm font-semibold sm:inline">Chile ↔ Luxemburgo</span>
        </a>

        <nav aria-label="Secciones" className="-mx-1 flex-1 overflow-x-auto">
          <ul className="flex items-center gap-1 px-1">
            {SECCIONES.map((s) => (
              <li key={s.id} className="shrink-0">
                <a
                  href={`#${s.id}`}
                  aria-current={activa === s.id ? "location" : undefined}
                  className={cn(
                    "inline-flex min-h-11 items-center rounded-chico px-3 text-sm font-medium text-gris transition-colors hover:text-tinta",
                    activa === s.id && "bg-acento-fondo text-acento",
                  )}
                >
                  {s.etiqueta}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={URL_ENSAYO}
          className="hidden min-h-11 shrink-0 items-center gap-1 text-sm text-gris hover:text-acento md:inline-flex"
        >
          El ensayo <ArrowUpRight aria-hidden className="size-4" />
        </a>
      </div>
    </header>
  );
}
