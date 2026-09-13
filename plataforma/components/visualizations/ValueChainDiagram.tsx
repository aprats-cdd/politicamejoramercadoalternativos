"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EvidenceBadge } from "@/components/didactica/EvidenceBadge";
import { ICONOS_ROL } from "@/components/didactica/iconos";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Escenario, EscenarioId, NodoFlujo, Rol, TipoFlujo, TonoNodo } from "@/data/schema";
import { construirDiagrama, type NodoPosicionado } from "@/lib/layoutFlujo";
import { VERBO_ROL, rolPorId } from "@/lib/roles";
import { cn } from "@/lib/utils";

interface Props {
  escenarios: Escenario[];
  roles: Rol[];
  escenarioInicial?: EscenarioId;
}

const ESTILO_TONO: Record<TonoNodo, { fondo: string; borde: string; texto: string }> = {
  neutro: { fondo: "var(--superficie)", borde: "var(--regla)", texto: "var(--tinta)" },
  chile: { fondo: "var(--acento-fondo)", borde: "var(--acento-regla)", texto: "var(--acento)" },
  propuesta: { fondo: "var(--propuesta-fondo)", borde: "var(--propuesta-regla)", texto: "var(--propuesta)" },
  referencia: { fondo: "var(--referencia-fondo)", borde: "var(--referencia-regla)", texto: "var(--tinta)" },
};

const ESTILO_FLUJO: Record<TipoFlujo, { color: string; dash?: string; grosor: number; nombre: string; explicacion: string }> = {
  dinero: { color: "var(--tinta)", grosor: 2, nombre: "Dinero", explicacion: "Por dónde entra la plata del inversionista." },
  mandato: { color: "var(--gris)", grosor: 1.6, nombre: "Mandato", explicacion: "Quién le encarga qué a quién." },
  informacion: { color: "var(--gris)", dash: "5 4", grosor: 1.6, nombre: "Información", explicacion: "Quién le informa a quién cuánto vale lo suyo." },
  control: { color: "var(--acento)", dash: "2 3", grosor: 1.8, nombre: "Control", explicacion: "Quién vigila a quién. Funciona por oposición: intereses distintos." },
};

/**
 * Diagrama de flujo de la cadena de valor de un fondo, por escenario
 * (Chile hoy · Chile con el proyecto · Luxemburgo). Los nodos que persisten
 * entre escenarios se deslizan a su nueva posición; los que aparecen o
 * desaparecen se desvanecen. El perímetro regulado se dibuja: lo que queda
 * dentro lo supervisa el regulador local; lo que queda fuera, no.
 *
 * Toda la información del diagrama es accesible sin hover: cada nodo es un
 * botón enfocable y su ficha se muestra en el panel lateral.
 */
export function ValueChainDiagram({ escenarios, roles, escenarioInicial = "cl-hoy" }: Props) {
  const reducir = useReducedMotion();
  const [escenarioId, setEscenarioId] = useState<EscenarioId>(escenarioInicial);
  const [seleccionado, setSeleccionado] = useState<string>("agf");

  const escenario = escenarios.find((e) => e.id === escenarioId) ?? escenarios[0];
  const diagrama = useMemo(
    () => (escenario ? construirDiagrama(escenario.nodos, escenario.enlaces) : null),
    [escenario],
  );

  if (!escenario || !diagrama) return null;

  const nodoActivo: NodoFlujo | undefined =
    escenario.nodos.find((n) => n.id === seleccionado) ?? diagrama.nodos.find((n) => n.columna === 1 && n.fila === 0);

  const transicion = reducir ? { duration: 0 } : { type: "spring" as const, stiffness: 240, damping: 30 };

  const cambiarEscenario = (valor: string) => {
    const id = valor as EscenarioId;
    setEscenarioId(id);
    const destino = escenarios.find((e) => e.id === id);
    if (destino && !destino.nodos.some((n) => n.id === seleccionado)) {
      const central = destino.nodos.find((n) => n.columna === 1 && n.fila === 0);
      if (central) setSeleccionado(central.id);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <Tabs value={escenarioId} onValueChange={cambiarEscenario}>
          <TabsList aria-label="Escenario">
            {escenarios.map((e) => (
              <TabsTrigger key={e.id} value={e.id}>
                {e.titulo}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <EvidenceBadge evidencia={escenario.evidencia} />
      </div>

      <p className="max-w-3xl text-base leading-relaxed text-gris">{escenario.resumen}</p>

      <div className="flex flex-col gap-5">
        {/* Lienzo a ancho completo. En pantallas angostas se desplaza
            horizontalmente: un diagrama que se encoge hasta ser ilegible no
            explica nada. */}
        <div className="tarjeta overflow-x-auto p-3">
          <svg
            viewBox={`0 0 ${diagrama.ancho} ${diagrama.alto}`}
            className="block h-auto min-w-[760px] w-full"
            role="img"
            aria-labelledby={`diagrama-${escenario.id}-titulo`}
          >
            {/* React 19 exige un único hijo string en <title>: con dos hijos el servidor lo emite vacío */}
            <title id={`diagrama-${escenario.id}-titulo`}>{`Cadena de valor de un fondo: ${escenario.titulo}`}</title>
            <defs>
              {(Object.keys(ESTILO_FLUJO) as TipoFlujo[]).map((tipo) => (
                <marker
                  key={tipo}
                  id={`flecha-${tipo}`}
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" style={{ fill: ESTILO_FLUJO[tipo].color }} />
                </marker>
              ))}
            </defs>

            {/* Perímetro regulado */}
            <AnimatePresence initial={false}>
              {diagrama.perimetro && (
                <motion.g
                  key="perimetro"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transicion}
                >
                  <motion.rect
                    initial={{
                      x: diagrama.perimetro.x,
                      y: diagrama.perimetro.y,
                      width: diagrama.perimetro.ancho,
                      height: diagrama.perimetro.alto,
                    }}
                    animate={{
                      x: diagrama.perimetro.x,
                      y: diagrama.perimetro.y,
                      width: diagrama.perimetro.ancho,
                      height: diagrama.perimetro.alto,
                    }}
                    transition={transicion}
                    rx={12}
                    style={{ fill: "none", stroke: "var(--acento-regla)", strokeDasharray: "6 5", strokeWidth: 1.5 }}
                  />
                  {diagrama.regulador && (
                    <motion.g
                      role="button"
                      tabIndex={0}
                      aria-pressed={seleccionado === diagrama.regulador.id}
                      aria-label={`Perímetro regulado por ${diagrama.regulador.etiqueta}`}
                      className="cursor-pointer outline-none"
                      onClick={() => setSeleccionado(diagrama.regulador?.id ?? "")}
                      onKeyDown={(ev) => {
                        if (ev.key === "Enter" || ev.key === " ") {
                          ev.preventDefault();
                          setSeleccionado(diagrama.regulador?.id ?? "");
                        }
                      }}
                      initial={{ x: diagrama.perimetro.x + 12, y: diagrama.perimetro.y + diagrama.perimetro.alto + 16 }}
                      animate={{ x: diagrama.perimetro.x + 12, y: diagrama.perimetro.y + diagrama.perimetro.alto + 16 }}
                      transition={transicion}
                    >
                      <rect
                        x={-8}
                        y={-12}
                        width={diagrama.regulador.etiqueta.length * 7.6 + 158}
                        height={24}
                        rx={6}
                        style={{
                          fill: seleccionado === diagrama.regulador.id ? "var(--acento-fondo)" : "var(--papel)",
                          stroke: "var(--acento-regla)",
                          strokeWidth: 1,
                        }}
                      />
                      <text
                        y={4}
                        style={{
                          fill: "var(--acento)",
                          fontFamily: "var(--mono)",
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                        }}
                      >
                        PERÍMETRO REGULADO · {diagrama.regulador.etiqueta.toUpperCase()}
                      </text>
                    </motion.g>
                  )}
                </motion.g>
              )}
            </AnimatePresence>

            {/* Enlaces */}
            <AnimatePresence initial={false}>
              {diagrama.enlaces.map((e) => {
                const estilo = ESTILO_FLUJO[e.tipo];
                const resaltado = seleccionado === e.de || seleccionado === e.a;
                return (
                  <motion.g
                    key={e.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: resaltado ? 1 : 0.55 }}
                    exit={{ opacity: 0 }}
                    transition={transicion}
                  >
                    <motion.path
                      d={e.d}
                      initial={{ d: e.d }}
                      animate={{ d: e.d }}
                      transition={transicion}
                      markerEnd={`url(#flecha-${e.tipo})`}
                      style={{
                        fill: "none",
                        stroke: estilo.color,
                        strokeWidth: resaltado ? estilo.grosor + 0.6 : estilo.grosor,
                        strokeDasharray: estilo.dash,
                        strokeLinecap: "round",
                      }}
                    />
                    {e.etiqueta && (
                      <motion.text
                        initial={{ x: e.etiquetaX, y: e.etiquetaY }}
                        animate={{ x: e.etiquetaX, y: e.etiquetaY }}
                        transition={transicion}
                        textAnchor={e.anclaje}
                        style={{
                          fill: "var(--rotulo)",
                          fontFamily: "var(--mono)",
                          fontSize: 10,
                          paintOrder: "stroke",
                          stroke: "var(--superficie)",
                          strokeWidth: 4,
                          strokeLinejoin: "round",
                        }}
                      >
                        {e.etiqueta}
                      </motion.text>
                    )}
                  </motion.g>
                );
              })}
            </AnimatePresence>

            {/* Nodos */}
            <AnimatePresence initial={false}>
              {diagrama.nodos.map((n) => (
                <Nodo
                  key={n.id}
                  nodo={n}
                  activo={seleccionado === n.id}
                  onSeleccionar={() => setSeleccionado(n.id)}
                  transicion={transicion}
                />
              ))}
            </AnimatePresence>
          </svg>
        </div>

        <div className="grid gap-5 md:grid-cols-[1.15fr_1fr]">
        {/* Ficha del actor seleccionado */}
        <aside className="tarjeta flex flex-col gap-3 p-5" aria-live="polite">
          {nodoActivo ? (
            <>
              <div className="flex flex-wrap items-center gap-2">
                <p className="rotulo">Ficha del actor</p>
                {nodoActivo.opcional && <Badge>opcional</Badge>}
                {nodoActivo.puedeEstarFuera && <Badge variant="referencia">puede estar fuera del país</Badge>}
              </div>
              <h3 className="text-lg font-semibold leading-tight">{nodoActivo.etiqueta}</h3>
              {nodoActivo.subtitulo && <p className="font-mono text-xs text-rotulo">{nodoActivo.subtitulo}</p>}
              <p className="text-sm leading-relaxed text-gris">{nodoActivo.explicacion}</p>
              <ul className="mt-1 space-y-2 border-t border-regla-suave pt-3">
                {nodoActivo.roles.map((id) => {
                  const rol = rolPorId(roles, id);
                  if (!rol) return null;
                  const Icono = ICONOS_ROL[rol.icono];
                  return (
                    <li key={id} className="flex items-start gap-2 text-sm">
                      <Icono aria-hidden className="mt-0.5 size-4 shrink-0 text-acento" />
                      <span>
                        <span className="font-semibold">{rol.pregunta}</span>{" "}
                        <span className="text-gris">{rol.nombre}: {rol.queHace}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <p className="text-sm text-gris">Selecciona un actor del diagrama para ver qué hace.</p>
          )}
        </aside>

        {/* Puntos clave + leyenda */}
        <div className="flex flex-col gap-5">
        <ol className="space-y-2 text-sm text-gris">
          {escenario.puntosClave.map((p, i) => (
            <li key={i} className="flex gap-2">
              <span className="font-mono text-xs text-rotulo">{String(i + 1).padStart(2, "0")}</span>
              <span>{p}</span>
            </li>
          ))}
        </ol>
        <ul className="flex flex-col gap-2 border-t border-regla-suave pt-4 text-sm" aria-label="Leyenda de flujos">
          {(Object.keys(ESTILO_FLUJO) as TipoFlujo[]).map((tipo) => {
            const f = ESTILO_FLUJO[tipo];
            return (
              <li key={tipo} className="flex items-center gap-2" title={f.explicacion}>
                <svg width="28" height="8" aria-hidden>
                  <line
                    x1="1"
                    y1="4"
                    x2="27"
                    y2="4"
                    style={{ stroke: f.color, strokeWidth: f.grosor, strokeDasharray: f.dash, strokeLinecap: "round" }}
                  />
                </svg>
                <span className="text-gris">
                  <span className="font-medium text-tinta">{f.nombre}</span> · {f.explicacion}
                </span>
              </li>
            );
          })}
        </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

interface NodoProps {
  nodo: NodoPosicionado;
  activo: boolean;
  onSeleccionar: () => void;
  transicion: object;
}

function Nodo({ nodo, activo, onSeleccionar, transicion }: NodoProps) {
  const estilo = ESTILO_TONO[nodo.tono];
  const verbos = nodo.roles.map((r) => VERBO_ROL[r]).join(" · ");
  return (
    <motion.g
      role="button"
      tabIndex={0}
      aria-pressed={activo}
      aria-label={`${nodo.etiqueta}: ${verbos}`}
      className={cn("cursor-pointer outline-none", activo && "[&>rect]:drop-shadow")}
      initial={{ opacity: 0, x: nodo.x, y: nodo.y }}
      animate={{ opacity: 1, x: nodo.x, y: nodo.y }}
      exit={{ opacity: 0 }}
      transition={transicion}
      onClick={onSeleccionar}
      onKeyDown={(ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          onSeleccionar();
        }
      }}
    >
      <rect
        width={nodo.ancho}
        height={nodo.alto}
        rx={8}
        style={{
          fill: estilo.fondo,
          stroke: activo ? "var(--acento)" : estilo.borde,
          strokeWidth: activo ? 2 : 1.5,
          strokeDasharray: nodo.opcional ? "5 4" : undefined,
        }}
      />
      <text
        x={14}
        y={27}
        style={{ fill: estilo.texto, fontFamily: "var(--sans)", fontSize: 13, fontWeight: 600, letterSpacing: "-0.01em" }}
      >
        {nodo.etiqueta}
      </text>
      <text
        x={14}
        y={46}
        style={{ fill: "var(--rotulo)", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.01em" }}
      >
        {nodo.subtitulo ?? verbos}
      </text>
      {/* pastillas de roles: cuantas más, más funciones en la misma mano */}
      {nodo.roles.map((r, i) => (
        <circle
          key={r}
          cx={nodo.ancho - 14 - i * 11}
          cy={14}
          r={4}
          style={{ fill: estilo.texto, opacity: 0.85 }}
        >
          <title>{VERBO_ROL[r]}</title>
        </circle>
      ))}
    </motion.g>
  );
}
