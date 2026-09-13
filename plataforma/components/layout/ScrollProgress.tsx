"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Barra fina de progreso de lectura, anclada arriba. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.25 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-acento-solido"
      style={{ scaleX }}
    />
  );
}
