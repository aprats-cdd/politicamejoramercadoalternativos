"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useSyncExternalStore, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  /** Retardo en segundos para escalonar varios bloques. */
  retraso?: number;
}

const suscribirNada = () => () => {};
/** true solo después de hidratar; en el servidor y sin JS, false. */
function useHidratado(): boolean {
  return useSyncExternalStore(suscribirNada, () => true, () => false);
}

/**
 * Aparición suave al entrar en pantalla (scrollytelling), como mejora
 * progresiva: el HTML servido llega visible, así que sin JavaScript, al
 * imprimir o en una captura el contenido está completo. Con JS, los bloques
 * que todavía no entraron en pantalla se ocultan sin transición y aparecen al
 * llegar. Con `prefers-reduced-motion` no anima nada.
 */
export function Reveal({ children, className, retraso = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reducir = useReducedMotion();
  const hidratado = useHidratado();
  const enVista = useInView(ref, { once: true, margin: "-10% 0px" });

  const oculto = hidratado && !reducir && !enVista;

  return (
    <motion.div
      ref={ref}
      data-reveal
      className={className}
      initial={false}
      animate={oculto ? { opacity: 0, y: 18 } : { opacity: 1, y: 0 }}
      transition={oculto ? { duration: 0 } : { duration: 0.55, delay: retraso, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
