# Plataforma Chile ↔ Luxemburgo

Plataforma web interactiva y didáctica que compara la industria de asset
management de Chile y Luxemburgo: roles, regulación y cifras. Audiencia:
legisladores, prensa y academia. Vive en `plataforma/` para no tocar el sitio
estático publicado en la raíz del repositorio ni sus gates.

## Stack

| Capa | Elección |
|---|---|
| Framework | Next.js 16 (App Router) + TypeScript estricto (`noUncheckedIndexedAccess`) |
| Estilos | Tailwind CSS v4 + primitivas estilo shadcn/ui (Radix) con `components.json` |
| Gráficos | Recharts 3 (barras) + SVG propio para el diagrama de flujo de la cadena de valor |
| Animación | Framer Motion (transiciones entre escenarios, scrollytelling, pliegues) |
| Pruebas | Vitest (integridad del dato y del layout) |
| Salida | Export estático (`out/`) listo para GitHub Pages bajo `NEXT_PUBLIC_BASE_PATH` |

## Estructura

```
plataforma/
├── app/                      layout, página (scrollytelling), tokens (globals.css), icono
├── components/
│   ├── layout/               SiteNav (scroll-spy), Section, Reveal, ScrollProgress, SiteFooter
│   ├── visualizations/       ValueChainDiagram, MarketSizeCompare, EntityCard, RegulationMatrix
│   ├── didactica/            EvidenceBadge, Termino (glosario), StatTile, IndicadorPar, ChartTooltip
│   └── ui/                   badge, button, card, tabs, tooltip
├── data/
│   ├── schema.ts             tipos: cifras con evidencia, sub-mercados, roles, entidades, escenarios, matriz
│   └── marketData.ts         los datos (única fuente de verdad de la UI)
├── lib/                      format, evidencia (reglas de publicación), layoutFlujo, roles, secciones
└── tests/                    vitest
```

## Regla del dato

Toda cifra viaja con su evidencia (`Cifra.evidencia`): nivel, fuentes, fecha y
qué **no** sostiene. Los niveles reproducen los del registro de evidencia del
repositorio (`constelacion/evidencia/registro-sitio.yaml`):

- `documento-fuente` y `doble-fuente`: se publican como número.
- `de-oido`: se publican como orden de magnitud, con marca visible y `noSostiene` obligatorio.
- `ilustrativo`: estimación del autor, marcada.
- `pendiente`: `valor: null`; la UI muestra «por verificar», nunca un número.

`tests/marketData.test.ts` hace ejecutable esa regla. La plataforma no deriva
cifras nuevas: si un dato no está en el registro, entra como `pendiente`.

## Scripts

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck
npm run lint
npm test
npm run build        # export estático en out/
npm run verificar    # los cuatro anteriores, en orden
```

Para montar bajo la ruta del sitio en GitHub Pages:

```bash
NEXT_PUBLIC_BASE_PATH=/politicamejoramercadoalternativos/plataforma npm run build
```

## Publicación

El CI (`.github/workflows/plataforma.yml`) verifica pero no publica. Publicar
la exportación junto al sitio exige (1) decisión explícita del dueño, según
`CLAUDE.md`, y (2) registrar la salida en `constelacion/sitio-manifest.yaml`
para que los gates de la constelación la cubran.

## Diseño

Los tokens de `app/globals.css` están portados de `assets/sitio.css` (hue 266,
tipografías de sistema, un radio, un grosor de línea) para que plataforma y
ensayo se lean como la misma casa. Tres familias tipográficas como tokens.
Paleta de series validada con el método de dataviz: Chile en el acento,
Luxemburgo en gris de referencia (forma «énfasis»); violeta/teal para hoy/proyecto.
