#!/usr/bin/env node
/* Captura screenshots móviles del UI implementado — evidencia para el CEO
   (accept de identidad visual, E6) y para el adversario (lente
   experiencia-como-marketing sobre el artefacto, no la spec).
   Uso: NODE_PATH=/opt/node22/lib/node_modules node constelacion/shot_experiencia.js <dir_salida> */
const path = require("path");
const { chromium } = require("playwright");

const REPO = path.resolve(__dirname, "..");
const OUT = process.argv[2] || "/tmp";
const TOMAS = [
  { archivo: "index.html", nombre: "home", full: false },
  { archivo: "index.html", nombre: "home-cards-abierta", full: false, abrir: "details.card-mas" },
  { archivo: "separacion-de-roles.html", nombre: "pieza-top", full: false },
  { archivo: "separacion-de-roles.html", nombre: "pieza-indice-abierto", full: false, abrir: "details.indice-pieza" },
  { archivo: "deuda-privada-como-renta-fija.html", nombre: "pieza-pie", full: false, scroll: "bottom" },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  for (const t of TOMAS) {
    await page.goto("file://" + path.join(REPO, t.archivo));
    if (t.abrir) {
      const els = await page.$$(t.abrir);
      for (const e of els) { const s = await e.$("summary"); if (s) await s.click(); }
    }
    if (t.scroll === "bottom") {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }
    const out = path.join(OUT, `${t.nombre}.png`);
    await page.screenshot({ path: out, fullPage: t.full });
    console.log("→ " + out);
  }
  await browser.close();
})();
