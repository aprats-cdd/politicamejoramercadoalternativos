"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EvidenceBadge } from "@/components/didactica/EvidenceBadge";
import { ICONOS_ROL } from "@/components/didactica/iconos";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Entidad, Independencia, Rol } from "@/data/schema";
import { rolPorId } from "@/lib/roles";
import { cn } from "@/lib/utils";

interface Props {
  entidad: Entidad;
  roles: Rol[];
  /** La entidad análoga en la otra jurisdicción, para el pie de la tarjeta. */
  equivalente?: Entidad;
  className?: string;
}

const INDEPENDENCIA: Record<Independencia, { texto: string; variante: "neutro" | "chile" | "propuesta" }> = {
  exigida: { texto: "distinta del que decide", variante: "propuesta" },
  parcial: { texto: "separación parcial", variante: "neutro" },
  "no-exigida": { texto: "puede ser la misma mano", variante: "chile" },
};

const REGULADOR: Record<Entidad["regulador"], string> = {
  CMF: "La vigila la CMF",
  CSSF: "La vigila la CSSF",
  SP: "La vigila la Superintendencia de Pensiones",
  extranjero: "La regula su propio país",
  ninguno: "Es el regulador",
};

/**
 * Tarjeta didáctica de un actor: qué hace en lenguaje simple, qué roles
 * concentra, quién lo vigila y si debe ser una mano distinta del que decide.
 * Un pliegue muestra la norma y su equivalente en la otra jurisdicción.
 */
export function EntityCard({ entidad, roles, equivalente, className }: Props) {
  const [abierta, setAbierta] = useState(false);
  const reducir = useReducedMotion();
  const esChile = entidad.jurisdiccion === "CL";
  const independencia = INDEPENDENCIA[entidad.independencia];

  return (
    <Card className={cn("flex h-full flex-col", entidad.propuesta && "border-dashed shadow-[0_0_0_1px_var(--propuesta-regla)]", className)}>
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={esChile ? "chile" : "referencia"}>{esChile ? "Chile" : "Luxemburgo"}</Badge>
          {entidad.propuesta && <Badge variant="propuesta">solo con el proyecto</Badge>}
          {!entidad.obligatoria && !entidad.propuesta && <Badge>opcional</Badge>}
        </div>
        <h3 className="text-lg font-semibold leading-tight">
          {entidad.nombre}
          {entidad.sigla && entidad.sigla !== "propuesta" && (
            <span className="ml-2 font-mono text-xs font-medium text-rotulo">{entidad.sigla}</span>
          )}
        </h3>
        <ul className="flex flex-wrap gap-1.5" aria-label="Roles que concentra">
          {entidad.roles.map((id) => {
            const rol = rolPorId(roles, id);
            if (!rol) return null;
            const Icono = ICONOS_ROL[rol.icono];
            return (
              <li key={id}>
                <Badge variant="neutro" className="gap-1.5" title={rol.queHace}>
                  <Icono aria-hidden className="size-3.5 text-acento" />
                  {rol.pregunta}
                </Badge>
              </li>
            );
          })}
        </ul>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3">
        <p className="text-sm leading-relaxed text-gris">{entidad.descripcion}</p>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-1 text-xs text-gris sm:grid-cols-2">
          <div>
            <dt className="rotulo text-[0.62rem]">Quién la vigila</dt>
            <dd className="mt-0.5 text-tinta">{REGULADOR[entidad.regulador]}</dd>
          </div>
          <div>
            <dt className="rotulo text-[0.62rem]">Independencia</dt>
            <dd className="mt-0.5">
              <Badge variant={independencia.variante}>{independencia.texto}</Badge>
            </dd>
          </div>
        </dl>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-regla-suave pt-3">
          <EvidenceBadge evidencia={entidad.evidencia} compacto />
          <button
            type="button"
            onClick={() => setAbierta((v) => !v)}
            aria-expanded={abierta}
            aria-controls={`detalle-${entidad.id}`}
            className="inline-flex min-h-9 items-center gap-1 text-xs font-semibold text-acento"
          >
            Norma y equivalente
            <ChevronDown aria-hidden className={cn("size-4 transition-transform", abierta && "rotate-180")} />
          </button>
        </div>
        <AnimatePresence initial={false}>
          {abierta && (
            <motion.div
              id={`detalle-${entidad.id}`}
              initial={reducir ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reducir ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <dl className="space-y-2 rounded-chico bg-nota p-3 text-xs">
                <div>
                  <dt className="rotulo text-[0.62rem]">Norma</dt>
                  <dd className="mt-0.5 font-mono text-tinta">{entidad.normaBase}</dd>
                </div>
                {equivalente && (
                  <div>
                    <dt className="rotulo text-[0.62rem]">En {esChile ? "Luxemburgo" : "Chile"}</dt>
                    <dd className="mt-0.5 text-tinta">{equivalente.nombre}</dd>
                  </div>
                )}
                {entidad.evidencia.noSostiene && (
                  <div>
                    <dt className="rotulo text-[0.62rem]">No sostiene</dt>
                    <dd className="mt-0.5 text-gris">{entidad.evidencia.noSostiene}</dd>
                  </div>
                )}
              </dl>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
