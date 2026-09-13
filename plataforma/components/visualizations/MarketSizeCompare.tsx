"use client";

import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartTooltip } from "@/components/didactica/ChartTooltip";
import { EvidenceBadge } from "@/components/didactica/EvidenceBadge";
import { IndicadorPar } from "@/components/didactica/IndicadorPar";
import { StatTile } from "@/components/didactica/StatTile";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Cifra, Indicador, Jurisdiccion, SubMercado } from "@/data/schema";
import { describirNivel, esPublicable } from "@/lib/evidencia";
import { formatearEntero, formatearMontoCorto, nombreUnidad, presentarCifra } from "@/lib/format";

interface Props {
  indicadores: Indicador[];
  subMercados: SubMercado[];
}

const COLOR: Record<Jurisdiccion, string> = {
  CL: "var(--acento-solido)",
  LU: "var(--referencia)",
};

const NOMBRE: Record<Jurisdiccion, string> = { CL: "Chile", LU: "Luxemburgo" };

interface FilaPar {
  id: string;
  nombre: string;
  valor: number;
  etiqueta: string;
  color: string;
  explicacion: string;
  evidencia: string;
}

function filasDeIndicador(ind: Indicador): FilaPar[] {
  return (["CL", "LU"] as Jurisdiccion[]).flatMap((j) => {
    const c = ind.porJurisdiccion[j];
    if (!esPublicable(c) || c.valor === null) return [];
    return [
      {
        id: `${ind.id}-${j}`,
        nombre: NOMBRE[j],
        valor: c.valor,
        etiqueta: presentarCifra(c),
        color: COLOR[j],
        explicacion: ind.explicacion,
        evidencia: describirNivel(c.evidencia.nivel).etiqueta,
      },
    ];
  });
}

/**
 * Comparación de tamaño y profundidad de mercado. Tres lecturas:
 *  · Actores: cuántos gestores y administradoras autorizadas hay (barras).
 *  · Profundidad: activos contra el PIB (tarjetas) y totales no comparables.
 *  · Composición: qué sub-mercados componen el ahorro de cada país.
 * Forma "énfasis": Chile en el acento, Luxemburgo en gris de referencia.
 * Toda cifra está también en la tabla plegable: el hover enriquece, no gatea.
 */
export function MarketSizeCompare({ indicadores, subMercados }: Props) {
  const reducir = useReducedMotion();
  const porId = useMemo(() => new Map(indicadores.map((i) => [i.id, i] as const)), [indicadores]);

  const actores = ["gestores-autorizados", "administradoras-independientes"]
    .map((id) => porId.get(id))
    .filter((i): i is Indicador => i !== undefined);
  const profundidad = porId.get("aum-sobre-pib");
  const total = porId.get("aum-total");
  const contexto = ["poblacion", "pib"].map((id) => porId.get(id)).filter((i): i is Indicador => i !== undefined);

  const chile = subMercados.filter((s) => s.jurisdiccion === "CL" && !s.parteDe);
  const chileDetalle = subMercados.filter((s) => s.jurisdiccion === "CL" && s.parteDe);
  const lux = subMercados.filter((s) => s.jurisdiccion === "LU");

  const filasChile = chile
    .filter((s) => esPublicable(s.aum) && s.aum.valor !== null)
    .map((s) => ({
      id: s.id,
      nombre: s.nombreCorto,
      valor: s.aum.valor ?? 0,
      etiqueta: formatearMontoCorto(s.aum.valor ?? 0),
      explicacion: s.explicacion,
      evidencia: describirNivel(s.aum.evidencia.nivel).etiqueta,
    }))
    .sort((a, b) => b.valor - a.valor);
  const chilePendientes = chile.filter((s) => !esPublicable(s.aum));

  return (
    <Tabs defaultValue="actores" className="flex flex-col gap-2">
      <TabsList aria-label="Lectura">
        <TabsTrigger value="actores">Actores autorizados</TabsTrigger>
        <TabsTrigger value="profundidad">Profundidad</TabsTrigger>
        <TabsTrigger value="composicion">Composición</TabsTrigger>
      </TabsList>

      <TabsContent value="actores" className="grid gap-6 md:grid-cols-2">
        {actores.map((ind) => {
          const filas = filasDeIndicador(ind);
          const explicaciones = Object.fromEntries(filas.map((f) => [f.nombre, f.explicacion]));
          const evidencias = Object.fromEntries(filas.map((f) => [f.nombre, f.evidencia]));
          return (
            <figure key={ind.id} className="tarjeta p-4">
              <figcaption className="mb-2 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold">{ind.etiqueta}</h3>
                  <p className="text-sm text-gris">{ind.explicacion}</p>
                </div>
              </figcaption>
              <div className="h-[132px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={filas} layout="vertical" margin={{ top: 4, right: 64, bottom: 4, left: 4 }} barCategoryGap={10}>
                    <CartesianGrid horizontal={false} stroke="var(--regla-suave)" />
                    <XAxis type="number" hide domain={[0, "dataMax"]} />
                    <YAxis type="category" dataKey="nombre" width={92} tickLine={false} axisLine={false} />
                    <Tooltip
                      cursor={{ fill: "var(--nota)" }}
                      content={(p) => (
                        <ChartTooltip
                          active={p.active}
                          payload={p.payload}
                          label={p.label}
                          formatear={(v) => formatearEntero(v)}
                          explicaciones={explicaciones}
                          evidencias={evidencias}
                        />
                      )}
                    />
                    <Bar dataKey="valor" name="entidades" radius={[0, 4, 4, 0]} maxBarSize={22} isAnimationActive={!reducir} minPointSize={2}>
                      {filas.map((f) => (
                        <Cell key={f.id} fill={f.color} />
                      ))}
                      <LabelList dataKey="etiqueta" position="right" className="fill-tinta text-xs font-semibold" />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gris">
                {(["CL", "LU"] as Jurisdiccion[]).map((j) => (
                  <span key={j} className="inline-flex items-center gap-1.5">
                    <span aria-hidden className="inline-block size-2.5 rounded-sm" style={{ background: COLOR[j] }} />
                    {NOMBRE[j]} <EvidenceBadge evidencia={ind.porJurisdiccion[j].evidencia} compacto />
                  </span>
                ))}
              </div>
              {ind.notaComparabilidad && <p className="mt-2 text-xs leading-relaxed text-tenue">{ind.notaComparabilidad}</p>}
            </figure>
          );
        })}
      </TabsContent>

      <TabsContent value="profundidad" className="grid gap-8 md:grid-cols-2">
        {profundidad && (
          <div className="flex flex-col gap-4">
            <IndicadorPar indicador={profundidad} />
            <Profundidad indicador={profundidad} />
          </div>
        )}
        <div className="flex flex-col gap-6">
          {total && <IndicadorPar indicador={total} />}
          <div className="grid gap-4 sm:grid-cols-2">
            {contexto.map((ind) => (
              <div key={ind.id} className="flex flex-col gap-2">
                <p className="text-sm font-semibold">{ind.etiqueta}</p>
                <StatTile etiqueta="Chile" cifra={ind.porJurisdiccion.CL} tono="chile" />
                <StatTile etiqueta="Luxemburgo" cifra={ind.porJurisdiccion.LU} tono="referencia" />
              </div>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="composicion" className="grid gap-6 md:grid-cols-2">
        <figure className="tarjeta p-4">
          <figcaption className="mb-2">
            <h3 className="text-base font-semibold">Chile · de qué está hecho el ahorro institucional</h3>
            <p className="text-sm text-gris">Activos por sub-mercado, en millones de USD (2025).</p>
          </figcaption>
          <div style={{ height: filasChile.length * 44 + 24 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filasChile} layout="vertical" margin={{ top: 4, right: 72, bottom: 4, left: 4 }} barCategoryGap={10}>
                <CartesianGrid horizontal={false} stroke="var(--regla-suave)" />
                <XAxis type="number" hide domain={[0, "dataMax"]} />
                <YAxis type="category" dataKey="nombre" width={122} tickLine={false} axisLine={false} />
                <Tooltip
                  cursor={{ fill: "var(--nota)" }}
                  content={(p) => (
                    <ChartTooltip
                      active={p.active}
                      payload={p.payload}
                      label={p.label}
                      formatear={(v) => `USD ${formatearMontoCorto(v)}`}
                      explicaciones={Object.fromEntries(filasChile.map((f) => [f.nombre, f.explicacion]))}
                      evidencias={Object.fromEntries(filasChile.map((f) => [f.nombre, f.evidencia]))}
                    />
                  )}
                />
                <Bar dataKey="valor" name="USD millones" fill={COLOR.CL} radius={[0, 4, 4, 0]} maxBarSize={22} isAnimationActive={!reducir}>
                  <LabelList dataKey="etiqueta" position="right" className="fill-tinta text-xs font-semibold" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <ul className="mt-3 space-y-1 text-xs text-gris">
            {chileDetalle.map((s) => (
              <li key={s.id} className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>
                  <span className="font-medium text-tinta">{s.nombre}</span>: {presentarCifra(s.aum)}, dentro de{" "}
                  {subMercados.find((p) => p.id === s.parteDe)?.nombreCorto?.toLowerCase()}.
                </span>
                <EvidenceBadge evidencia={s.aum.evidencia} compacto />
              </li>
            ))}
            {chilePendientes.map((s) => (
              <li key={s.id} className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>
                  <span className="font-medium text-tinta">{s.nombre}</span>: {s.explicacion}
                </span>
                <EvidenceBadge evidencia={s.aum.evidencia} compacto />
              </li>
            ))}
          </ul>
        </figure>

        <div className="tarjeta flex flex-col gap-3 p-4">
          <div>
            <h3 className="text-base font-semibold">Luxemburgo · total conocido, desglose por verificar</h3>
            <p className="text-sm text-gris">Los activos netos totales tienen doble fuente; el reparto por tipo de fondo no fue abierto.</p>
          </div>
          {total && <StatTile etiqueta="Activos netos en fondos" cifra={total.porJurisdiccion.LU} tono="referencia" />}
          <ul className="flex flex-col gap-2">
            {lux.map((s) => (
              <li key={s.id} className="flex flex-col gap-1 rounded-chico border border-dashed border-regla p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-semibold">{s.nombre}</span>
                  <EvidenceBadge evidencia={s.aum.evidencia} compacto />
                </div>
                <p className="text-xs leading-relaxed text-gris">{s.explicacion}</p>
                {s.equivalente && (
                  <p className="text-xs text-tenue">
                    Pariente chileno: {subMercados.find((p) => p.id === s.equivalente)?.nombre ?? s.equivalente}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>

      {/* Vista de tabla: gemela accesible de todos los gráficos */}
      <details className="mt-2 rounded-sistema border border-regla-suave">
        <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-acento">Ver todas las cifras como tabla</summary>
        <div className="overflow-x-auto px-2 pb-3">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="rotulo border-b border-regla-suave">
                <th className="px-2 py-2 font-semibold">Dato</th>
                <th className="px-2 py-2 font-semibold">País</th>
                <th className="px-2 py-2 text-right font-semibold">Valor</th>
                <th className="px-2 py-2 font-semibold">Unidad</th>
                <th className="px-2 py-2 font-semibold">Evidencia</th>
              </tr>
            </thead>
            <tbody>
              {indicadores.flatMap((ind) =>
                (["CL", "LU"] as Jurisdiccion[]).map((j) => (
                  <FilaTabla key={`${ind.id}-${j}`} dato={ind.etiqueta} pais={NOMBRE[j]} cifra={ind.porJurisdiccion[j]} />
                )),
              )}
              {subMercados.map((s) => (
                <FilaTabla key={s.id} dato={`AUM · ${s.nombre}`} pais={NOMBRE[s.jurisdiccion]} cifra={s.aum} />
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </Tabs>
  );
}

/** Dos carriles a escala real: la razón chilena es una astilla frente a la luxemburguesa, y ése es el dato. */
function Profundidad({ indicador }: { indicador: Indicador }) {
  const filas = filasDeIndicador(indicador);
  const maximo = Math.max(1, ...filas.map((f) => f.valor));
  return (
    <figure className="tarjeta p-4" aria-label="Activos contra el PIB, a escala">
      <figcaption className="rotulo mb-3">A escala real</figcaption>
      <ul className="flex flex-col gap-3">
        {filas.map((f) => (
          <li key={f.id} className="grid grid-cols-[6.5rem_1fr_auto] items-center gap-3">
            <span className="text-sm font-semibold">{f.nombre}</span>
            <span className="relative h-3.5 rounded-[3px] bg-nota shadow-[inset_0_0_0_1px_var(--regla-suave)]">
              <span
                className="block h-full rounded-[3px]"
                style={{ width: `${Math.max(0.6, (f.valor / maximo) * 100)}%`, background: f.color }}
                title={`${f.nombre}: ${f.etiqueta}`}
              />
            </span>
            <span className="font-mono text-sm font-semibold tabular">{f.etiqueta}</span>
          </li>
        ))}
      </ul>
    </figure>
  );
}

function FilaTabla({ dato, pais, cifra }: { dato: string; pais: string; cifra: Cifra }) {
  return (
    <tr className="border-b border-regla-suave align-top">
      <td className="px-2 py-2">{dato}</td>
      <td className="px-2 py-2 text-gris">{pais}</td>
      <td className="px-2 py-2 text-right font-mono tabular">{presentarCifra(cifra)}</td>
      <td className="px-2 py-2 text-gris">{nombreUnidad(cifra.unidad)}</td>
      <td className="px-2 py-2">
        <Badge variant={cifra.evidencia.nivel === "pendiente" ? "alerta" : "neutro"}>
          {describirNivel(cifra.evidencia.nivel).corta}
        </Badge>
      </td>
    </tr>
  );
}
