#!/usr/bin/env node
/* Smoke test headless de la capa de experiencia (fix del DD adversarial,
   crítico 3: el área táctil se mide RENDERIZADA, no por tokens CSS).
   Lo corre AG-SITIO-VERIFICADOR; es EL gate de X03 (el token-check del
   harness queda como lint).

   Mide en viewport móvil (390x844):
     T01  controles primarios (masthead-nav, nav-retorno, nav-pie,
          summaries de details) con alto renderizado >= 44 CSS px.
     T02  controles inline de notas (sup.nota-ref a, .fuentes .retorno)
          con alto renderizado >= 32 CSS px (sobre el mínimo WCAG 2.5.8
          de 24px; el 44 completo rompería el interlineado de la prosa).
     T03  cero solape entre áreas táctiles vecinas con destino distinto
          (el modo de falla del margen negativo: el tap cae en la nota
          equivocada).
     T04  sin scroll horizontal en móvil.
     T05  los details (índice de pieza, card-mas) abren al click.

   Uso: NODE_PATH=/opt/node22/lib/node_modules node constelacion/smoke_experiencia.js
   Salida: VERDE exit 0 · ROJO exit 1. Fail-closed (si el navegador no
   lanza, ROJO). La degradación sin barra de progreso es VERDE por diseño
   (soporte parcial de animation-timeline — hallazgo menor 5 del DD). */

const path = require("path");
const { chromium } = require("playwright");

const REPO = path.resolve(__dirname, "..");
const PAGINAS = [
  "index.html",
  "separacion-de-roles.html",
  "deuda-privada-como-renta-fija.html",
  "due-diligence-deuda-privada.html",
  "buscador-causas-judiciales.html",
];

const PRIMARIOS = ".masthead-nav a, .nav-retorno a, .nav-pie a, details.indice-pieza > summary, details.card-mas > summary";
const INLINE = "sup.nota-ref a, .fuentes .retorno";
const ALTO_PRIMARIO = 44;
const ALTO_INLINE = 32;

(async () => {
  const fallos = [];
  let browser;
  try {
    browser = await chromium.launch();
  } catch (e) {
    console.error("ROJO - no se pudo lanzar chromium (fail-closed): " + e.message);
    process.exit(1);
  }
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

  for (const archivo of PAGINAS) {
    await page.goto("file://" + path.join(REPO, archivo));

    // T01/T02 · alturas renderizadas + rects para T03
    const medidas = await page.evaluate(
      ({ PRIMARIOS, INLINE }) => {
        const mide = (sel, tipo) =>
          [...document.querySelectorAll(sel)].map((el) => {
            const r = el.getBoundingClientRect();
            const s = getComputedStyle(el);
            // área táctil = rect + padding ya incluido; sumamos el alto
            // efectivo con padding aunque el elemento sea inline
            const padY =
              parseFloat(s.paddingTop || 0) + parseFloat(s.paddingBottom || 0);
            const alto = r.height > 0 ? Math.max(r.height, padY + (parseFloat(s.fontSize) || 0)) : 0;
            return {
              tipo,
              alto,
              href: el.getAttribute("href") || el.textContent.slice(0, 20),
              x: r.x + window.scrollX,
              y: r.y + window.scrollY,
              w: r.width,
              h: alto,
              visible: r.width > 0 || r.height > 0,
            };
          });
        return [...mide(PRIMARIOS, "primario"), ...mide(INLINE, "inline")];
      },
      { PRIMARIOS, INLINE }
    );

    for (const m of medidas) {
      if (!m.visible) continue;
      const minimo = m.tipo === "primario" ? ALTO_PRIMARIO : ALTO_INLINE;
      if (m.alto < minimo - 0.5) {
        fallos.push(
          `T0${m.tipo === "primario" ? 1 : 2} [${archivo}] "${m.href}" alto táctil ${m.alto.toFixed(1)}px < ${minimo}px`
        );
      }
    }

    // T03 · solape entre áreas táctiles con destino distinto
    const vivos = medidas.filter((m) => m.visible);
    for (let i = 0; i < vivos.length; i++) {
      for (let j = i + 1; j < vivos.length; j++) {
        const a = vivos[i], b = vivos[j];
        if (a.href === b.href) continue;
        const ox = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
        const oy = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
        if (ox > 1 && oy > 1) {
          fallos.push(
            `T03 [${archivo}] solape táctil ${ox.toFixed(0)}x${oy.toFixed(0)}px entre "${a.href}" y "${b.href}"`
          );
        }
      }
    }

    // T04 · sin scroll horizontal
    const desborde = await page.evaluate(
      () => document.scrollingElement.scrollWidth - window.innerWidth
    );
    if (desborde > 1) {
      fallos.push(`T04 [${archivo}] scroll horizontal de ${desborde}px en 390px`);
    }

    // T05 · details abren al click
    const detalles = await page.$$("details.indice-pieza, details.card-mas");
    for (const d of detalles) {
      const summary = await d.$("summary");
      if (!summary) continue;
      await summary.click();
      const abierto = await d.evaluate((el) => el.open);
      if (!abierto) {
        fallos.push(`T05 [${archivo}] un details no abre al click`);
        break;
      }
      await summary.click(); // cerrar de vuelta
    }
  }

  await browser.close();
  console.log(`smoke_experiencia · ${PAGINAS.length} página(s) medidas en 390x844`);
  if (fallos.length) {
    console.log(`\nROJO - ${fallos.length} hallazgo(s):`);
    for (const f of fallos) console.log("  x " + f);
    process.exit(1);
  }
  console.log("\nVERDE - T01-T05 pasan (área táctil medida en render, sin solapes).");
})();
