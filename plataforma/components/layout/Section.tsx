import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  eyebrow?: string;
  titulo: string;
  lede?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Contenido que necesita todo el ancho (diagramas, tablas). */
  ancho?: boolean;
}

/**
 * Estación del recorrido: sección con ancla, rótulo, título y bajada.
 * `scroll-mt` deja aire bajo la navegación fija al llegar por ancla.
 */
export function Section({ id, eyebrow, titulo, lede, children, className, ancho = false }: Props) {
  const tituloId = `${id}-titulo`;
  return (
    <section
      id={id}
      aria-labelledby={tituloId}
      className={cn("scroll-mt-24 border-t border-regla-suave py-16 md:py-24", className)}
    >
      <div className={cn("mx-auto px-5", ancho ? "max-w-6xl" : "max-w-3xl")}>
        <header className="mx-auto max-w-3xl">
          {eyebrow && <p className="rotulo mb-3">{eyebrow}</p>}
          <h2 id={tituloId} className="text-3xl md:text-4xl">
            {titulo}
          </h2>
          {lede && <div className="mt-4 text-lg leading-relaxed text-gris">{lede}</div>}
        </header>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
