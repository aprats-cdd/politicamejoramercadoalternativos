import { ArrowDown } from "lucide-react";
import { IndicadorPar } from "@/components/didactica/IndicadorPar";
import { ICONOS_ROL } from "@/components/didactica/iconos";
import { Termino } from "@/components/didactica/Termino";
import { EvidenceBadge } from "@/components/didactica/EvidenceBadge";
import { Reveal } from "@/components/layout/Reveal";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EntityCard } from "@/components/visualizations/EntityCard";
import { MarketSizeCompare } from "@/components/visualizations/MarketSizeCompare";
import { RegulationMatrix } from "@/components/visualizations/RegulationMatrix";
import { ValueChainDiagram } from "@/components/visualizations/ValueChainDiagram";
import { marketData } from "@/data/marketData";
import { NIVELES, ORDEN_NIVELES } from "@/lib/evidencia";
import { URL_ENSAYO } from "@/lib/secciones";

const { indicadores, roles, entidades, escenarios, obligaciones, subMercados, fuentes, jurisdicciones } = marketData;

const indicador = (id: string) => indicadores.find((i) => i.id === id);
const entidad = (id: string) => entidades.find((e) => e.id === id);

/** Pares Chile ↔ Luxemburgo para la galería de tarjetas. */
const paresEntidades = entidades
  .filter((e) => e.jurisdiccion === "CL")
  .map((cl) => ({ cl, lu: cl.equivalenteEn ? entidad(cl.equivalenteEn) : undefined }));

const rolesDelFondo = roles.filter((r) => ["gestor", "administrador", "custodio", "valorizador"].includes(r.id));

const evidenciaProyecto = obligaciones.find((o) => o.id === "vigencia")?.chileProyecto?.evidencia;

export default function Pagina() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section id="inicio" className="mx-auto max-w-3xl px-5 pt-16 pb-12 md:pt-24">
        <p className="mb-4 flex flex-wrap gap-2">
          <Badge variant="chile">Chile</Badge>
          <Badge variant="referencia">Luxemburgo</Badge>
          <Badge>Plataforma comparada · 2026</Badge>
        </p>
        <h1 className="text-4xl leading-[1.03] tracking-[-0.035em] md:text-6xl">Dos maneras de armar un fondo</h1>
        <p className="mt-6 text-lg leading-relaxed text-gris md:text-xl">
          Un fondo obliga a contestar cuatro preguntas: quién decide, quién administra, quién guarda los títulos
          y quién pone el precio. Chile y Luxemburgo las contestan de manera distinta. Esta plataforma compara
          las dos respuestas pieza por pieza, para lectores que no viven en la jerga financiera.
        </p>

        {evidenciaProyecto && (
          <div className="mt-8 flex flex-wrap items-start gap-3 rounded-sistema border border-regla-suave bg-nota p-4 text-sm leading-relaxed">
            <span aria-hidden className="mt-1.5 inline-block size-2 shrink-0 rounded-full bg-propuesta" />
            <p className="flex-1">
              <b className="font-semibold">Chile discute un cambio.</b> El proyecto de ley de reforma al mercado de
              capitales ingresó a la Cámara el 9 de septiembre de 2026 y su texto puede cambiar. Donde esta
              plataforma dice «con el proyecto», describe una regla propuesta, no vigente.
            </p>
            <EvidenceBadge evidencia={evidenciaProyecto} compacto />
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild>
            <a href="#vision-general">
              Empezar el recorrido <ArrowDown aria-hidden />
            </a>
          </Button>
          <Button asChild variant="link">
            <a href={URL_ENSAYO}>Leer el ensayo que la origina</a>
          </Button>
        </div>
      </section>

      {/* ───────── 1 · Visión general ───────── */}
      <Section
        id="vision-general"
        eyebrow="01 · Visión general"
        titulo="La misma pregunta, dos respuestas"
        lede={
          <p>
            Antes de hablar de leyes o de cifras, conviene ver los cuatro oficios que conviven dentro de cualquier
            fondo. Después, cómo cada país los reparte.
          </p>
        }
      >
        <Reveal>
          <ol className="grid gap-3 sm:grid-cols-2">
            {rolesDelFondo.map((rol, i) => {
              const Icono = ICONOS_ROL[rol.icono];
              return (
                <li key={rol.id} className="tarjeta flex gap-4 p-5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-sistema bg-acento-fondo text-acento">
                    <Icono aria-hidden className="size-5" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-rotulo">0{i + 1}</p>
                    <h3 className="mt-0.5 text-lg font-semibold leading-tight">{rol.pregunta}</h3>
                    <p className="mt-1 text-sm text-gris">{rol.queHace}</p>
                    <p className="mt-2 text-sm text-tinta">
                      <span className="font-semibold">Como en una casa:</span> {rol.analogia}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col gap-3 rounded-sistema border border-acento-regla bg-acento-fondo/60 p-6">
              <Badge variant="chile" className="self-start">Chile hoy</Badge>
              <h3 className="text-2xl">Tres de las cuatro, en la misma mano</h3>
              <p className="text-gris">
                La ley chilena deja decidir, administrar y valorizar dentro de la misma sociedad: la{" "}
                <Termino id="agf">administradora general de fondos</Termino>. Puede contratar a un especialista,
                pero lo paga ella y responde incluso por decisiones que no tomó. Solo la custodia está en otra mano.
              </p>
              <p className="text-sm text-gris">{jurisdicciones.CL.enUnaFrase}</p>
            </article>
          </Reveal>
          <Reveal retraso={0.1}>
            <article className="flex h-full flex-col gap-3 rounded-sistema border border-referencia-regla bg-referencia-fondo p-6">
              <Badge variant="referencia" className="self-start">Luxemburgo</Badge>
              <h3 className="text-2xl">La decisión viaja; el resto se queda</h3>
              <p className="text-gris">
                La <Termino id="manco">sociedad gestora</Termino> autorizada responde ante el regulador y puede
                delegar la decisión de inversión en un tercero, incluso en otro país. La{" "}
                <Termino id="administracion-central">administración central</Termino>, el{" "}
                <Termino id="depositario">depositario</Termino> y el auditor deben estar establecidos en Luxemburgo.
              </p>
              <p className="text-sm text-gris">{jurisdicciones.LU.enUnaFrase}</p>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="grid gap-8 md:grid-cols-2">
            {["gestores-autorizados", "administradoras-independientes"].map((id) => {
              const ind = indicador(id);
              return ind ? <IndicadorPar key={id} indicador={ind} /> : null;
            })}
          </div>
        </Reveal>
      </Section>

      {/* ───────── 2 · Ecosistema de roles ───────── */}
      <Section
        id="ecosistema"
        eyebrow="02 · Ecosistema de roles"
        titulo="Por dónde pasa la plata y quién vigila a quién"
        ancho
        lede={
          <p>
            El diagrama sigue el dinero desde el inversionista hasta los títulos custodiados, y marca con línea
            discontinua el perímetro que el regulador local supervisa. Cambia de escenario para ver cómo se
            reparten los oficios. Toca un actor para leer su ficha.
          </p>
        }
      >
        <Reveal>
          <ValueChainDiagram escenarios={escenarios} roles={roles} />
        </Reveal>

        <div className="mt-16">
          <h3 className="text-2xl">Cada actor, explicado</h3>
          <p className="mt-2 max-w-3xl text-gris">
            Cada par muestra a la izquierda el actor chileno y a la derecha su pariente luxemburgués. Las tarjetas
            con borde discontinuo describen figuras que solo existirían si el proyecto se aprueba.
          </p>
          <div className="mt-6 flex flex-col gap-6">
            {paresEntidades.map(({ cl, lu }, i) => (
              <Reveal key={cl.id} retraso={Math.min(i * 0.04, 0.2)}>
                <div className="grid gap-4 md:grid-cols-2">
                  <EntityCard entidad={cl} roles={roles} equivalente={lu} />
                  {lu ? (
                    <EntityCard entidad={lu} roles={roles} equivalente={cl} />
                  ) : (
                    <div className="rounded-sistema border border-dashed border-regla p-5 text-sm text-tenue">
                      Sin equivalente directo en Luxemburgo.
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ───────── 3 · Regulación ───────── */}
      <Section
        id="regulacion"
        eyebrow="03 · Regulación"
        titulo="Qué exige cada regulador"
        ancho
        lede={
          <p>
            La matriz compara obligación por obligación lo que hoy exige la CMF, lo que el proyecto de ley
            cambiaría y lo que exige la CSSF. Cada celda lleva su norma y su nivel de evidencia. Donde la norma
            exacta no fue abierta, la celda lo dice en vez de rellenar.
          </p>
        }
      >
        <Reveal>
          <RegulationMatrix obligaciones={obligaciones} />
        </Reveal>
      </Section>

      {/* ───────── 4 · Cifras ───────── */}
      <Section
        id="cifras"
        eyebrow="04 · Cifras"
        titulo="El tamaño de cada mercado, con su evidencia"
        ancho
        lede={
          <p>
            Cuántos actores hay, cuánto administran y cuánto pesa eso frente a la economía de cada país. Chile va
            en el color de acento; Luxemburgo, en gris, es el dominio contra el que se mide. Pasa el cursor por
            una barra para leer qué es y de dónde sale.
          </p>
        }
      >
        <Reveal>
          <MarketSizeCompare indicadores={indicadores} subMercados={subMercados} />
        </Reveal>

        <Reveal className="mt-12">
          <div className="rounded-sistema border border-regla-suave bg-nota p-5">
            <h3 className="text-lg font-semibold">Cómo leer las marcas de evidencia</h3>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {ORDEN_NIVELES.map((nivel) => (
                <li key={nivel} className="text-sm">
                  <EvidenceBadge evidencia={{ nivel, fuentes: [] }} />
                  <p className="mt-1 text-gris">{NIVELES[nivel].explicacion}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gris">
              La plataforma no calcula cifras nuevas: cada número sale del registro de evidencia del repositorio con
              el nivel que ese registro le da. Una razón como «75×» es un orden de magnitud, no una medición, y por
              eso se muestra con «×» y sin decimales falsos.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ───────── Método y fuentes ───────── */}
      <Section
        id="metodo"
        eyebrow="Método y fuentes"
        titulo="De dónde sale cada dato"
        lede={
          <p>
            Todo lo publicado aquí se apoya en el registro de evidencia que mantiene este repositorio. Las
            fuentes marcadas como secundarias no fueron abiertas en su texto original: se citan por la
            arquitectura que describen y las cifras que dependen de ellas van como orden de magnitud.
          </p>
        }
      >
        <div className="grid gap-8 sm:grid-cols-2">
          {(["primaria", "archivo-repositorio", "secundaria"] as const).map((tipo) => {
            const lista = fuentes.filter((f) => f.tipo === tipo);
            const titulo =
              tipo === "primaria" ? "Fuentes primarias" : tipo === "secundaria" ? "Fuentes secundarias" : "Archivos del repositorio";
            return (
              <div key={tipo} className={tipo === "secundaria" ? "sm:col-span-2" : ""}>
                <h3 className="rotulo mb-3">{titulo}</h3>
                <ul className="space-y-2 text-sm">
                  {lista.map((f) => (
                    <li key={f.id} className="border-l-2 border-regla-suave pl-3">
                      <span className="font-medium text-tinta">{f.organismo}</span>
                      <span className="text-gris"> · {f.nombre}</span>
                      {f.fecha && <span className="text-tenue"> ({f.fecha})</span>}
                      {f.archivo && <code className="mt-0.5 block break-all font-mono text-xs text-rotulo">{f.archivo}</code>}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
