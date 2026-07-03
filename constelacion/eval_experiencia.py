#!/usr/bin/env python3
"""Gate determinista de la CAPA DE EXPERIENCIA (forja 03-jul-2026).

Gatea el trabajo de AG-SITIO-INGENIERO-UI y re-corre las mediciones de
AG-SITIO-CARTOGRAFO-EXPERIENCIA. Lo mantiene AG-SITIO-VERIFICADOR (dueño del
harness); nunca lo corre su productor como único gate. Fail-closed.

Alcance: páginas del manifest, EXCLUIDOS assets y el memorándum (documento
congelado por diseño — mantiene su CSS embebido y no entra a la capa de
experiencia del sitio).

Checks:
  X01  viewport meta presente en toda página del alcance.
  X02  cero requests externos (R38): sin stylesheet/script/img/iframe con
       src|href http(s), sin @import ni url(http) en la hoja única.
  X03  sistema de área táctil declarado: token --tap-minimo definido en la
       hoja única y >=3 reglas que lo consumen (masthead-nav, nav-pie,
       notas al pie). PROXY DECLARADO: verifica el sistema en el CSS, no el
       render; la medición sobre pantalla la hace el smoke test del
       verificador en navegador.
  X04  tipografía fluida: la escala base usa clamp().
  X05  divulgación progresiva en el índice: toda card de publicación del
       home contiene un <details> (capa de entrada + profundidad a un tap).
  X06  orientación en piezas (tipo ensayo/guia-dd/herramienta-anuncio):
       body class="pieza" + índice de pieza (details.indice-pieza) +
       nav-pie de salida; y la hoja define el progreso de lectura
       scroll-driven bajo @supports (anulable por prefers-reduced-motion).
  X07  presupuesto de peso: cada HTML del alcance <= 70KB; hoja única <= 40KB.
  X08  modo oscuro: bloque prefers-color-scheme: dark + color-scheme declarado.
  X09  a11y base por página: skip-link (salto-contenido), <main, y en la
       hoja única :focus-visible + bloque prefers-reduced-motion.

VERDE (exit 0) si todo pasa; ROJO (exit 1) si algo falla.
Uso: python3 constelacion/eval_experiencia.py
"""
from __future__ import annotations

import os
import re
import sys

try:
    import yaml
except ImportError:
    print("ROJO - falta pyyaml. Fail-closed.", file=sys.stderr)
    sys.exit(1)

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
MANIFEST = os.path.join(HERE, "sitio-manifest.yaml")
CSS = os.path.join(REPO, "assets", "sitio.css")

TIPOS_PIEZA = {"ensayo", "guia-dd", "herramienta-anuncio"}
EXCLUIDOS = {"asset", "memo-vigente"}
PESO_MAX_HTML = 70_000
PESO_MAX_CSS = 40_000

EXTERNO_HTML = [
    re.compile(r'<link[^>]+rel="stylesheet"[^>]+href="https?://', re.I),
    re.compile(r'<script[^>]+src="https?://', re.I),
    re.compile(r'<img[^>]+src="https?://', re.I),
    re.compile(r"<iframe", re.I),
]
EXTERNO_CSS = [re.compile(r"@import\b", re.I), re.compile(r"url\(\s*['\"]?https?://", re.I)]


def main() -> int:
    if not os.path.exists(MANIFEST):
        print("ROJO - no existe constelacion/sitio-manifest.yaml. Fail-closed.")
        return 1
    if not os.path.exists(CSS):
        print("ROJO - no existe assets/sitio.css (hoja única). Fail-closed.")
        return 1
    with open(MANIFEST, encoding="utf-8") as fh:
        man = yaml.safe_load(fh) or {}
    with open(CSS, encoding="utf-8") as fh:
        css = fh.read()

    paginas = [p for p in (man.get("paginas") or [])
               if p.get("tipo") not in EXCLUIDOS]
    fallos: list[str] = []
    htmls: dict[str, tuple[str, dict]] = {}
    for p in paginas:
        arch = p.get("archivo", "")
        ruta = os.path.join(REPO, arch)
        if not os.path.exists(ruta):
            fallos.append(f"X01 [{arch}] página del alcance no existe")
            continue
        with open(ruta, encoding="utf-8") as fh:
            htmls[arch] = (fh.read(), p)

    # X01 · viewport
    for arch, (html, _) in htmls.items():
        if 'name="viewport"' not in html:
            fallos.append(f"X01 [{arch}] falta meta viewport")

    # X02 · cero requests externos
    for arch, (html, _) in htmls.items():
        for rx in EXTERNO_HTML:
            if rx.search(html):
                fallos.append(f"X02 [{arch}] request externo: {rx.pattern[:40]}…")
    for rx in EXTERNO_CSS:
        if rx.search(css):
            fallos.append(f"X02 [assets/sitio.css] request externo en CSS: {rx.pattern[:40]}…")

    # X03 · sistema de área táctil (proxy declarado — ver docstring)
    if "--tap-minimo" not in css:
        fallos.append("X03 [assets/sitio.css] falta el token --tap-minimo")
    usos_tap = css.count("var(--tap-minimo)")
    if usos_tap < 3:
        fallos.append(f"X03 [assets/sitio.css] el token de área táctil se consume "
                      f"{usos_tap} vez/veces (mínimo 3: nav superior, nav de pie, notas)")

    # X04 · tipografía fluida
    if not re.search(r"font-size:\s*clamp\(|--texto-base:\s*clamp\(", css):
        fallos.append("X04 [assets/sitio.css] la escala base no usa clamp() (tipografía fija)")

    # X05 · divulgación progresiva en el índice
    home = [(a, h) for a, (h, p) in htmls.items() if p.get("tipo") == "home"]
    for arch, html in home:
        cards = re.findall(r'class="card-publicacion"', html)
        detalles = re.findall(r'<details class="card-mas"', html)
        if not cards:
            fallos.append(f"X05 [{arch}] el home no declara cards de publicación")
        elif len(detalles) < len(cards):
            fallos.append(f"X05 [{arch}] {len(cards)} card(s) y {len(detalles)} details "
                          f"— divulgación progresiva incompleta")

    # X06 · orientación en piezas + progreso de lectura
    for arch, (html, p) in htmls.items():
        if p.get("tipo") not in TIPOS_PIEZA:
            continue
        if not re.search(r'<body[^>]*class="[^"]*pieza', html):
            fallos.append(f"X06 [{arch}] body sin class=\"pieza\" (progreso de lectura no aplica)")
        if 'class="indice-pieza"' not in html:
            fallos.append(f"X06 [{arch}] sin índice de pieza (details.indice-pieza)")
        if 'class="nav-pie"' not in html:
            fallos.append(f"X06 [{arch}] sin nav-pie de salida (volver / siguiente / subir)")
    if "animation-timeline: scroll(" not in css or "@supports" not in css:
        fallos.append("X06 [assets/sitio.css] falta el progreso de lectura scroll-driven bajo @supports")

    # X07 · presupuesto de peso
    for arch in htmls:
        peso = os.path.getsize(os.path.join(REPO, arch))
        if peso > PESO_MAX_HTML:
            fallos.append(f"X07 [{arch}] {peso} bytes > presupuesto {PESO_MAX_HTML}")
    peso_css = os.path.getsize(CSS)
    if peso_css > PESO_MAX_CSS:
        fallos.append(f"X07 [assets/sitio.css] {peso_css} bytes > presupuesto {PESO_MAX_CSS}")

    # X08 · modo oscuro
    if "prefers-color-scheme: dark" not in css:
        fallos.append("X08 [assets/sitio.css] falta el bloque prefers-color-scheme: dark")
    if "color-scheme" not in css:
        fallos.append("X08 [assets/sitio.css] falta color-scheme")

    # X09 · a11y base
    for arch, (html, _) in htmls.items():
        if "salto-contenido" not in html:
            fallos.append(f"X09 [{arch}] falta skip-link (salto-contenido)")
        if "<main" not in html:
            fallos.append(f"X09 [{arch}] falta landmark <main>")
    if ":focus-visible" not in css:
        fallos.append("X09 [assets/sitio.css] falta :focus-visible")
    if "prefers-reduced-motion" not in css:
        fallos.append("X09 [assets/sitio.css] falta prefers-reduced-motion")

    print(f"eval_experiencia · {len(htmls)} página(s) en alcance · hoja única {os.path.getsize(CSS)} bytes")
    if fallos:
        print(f"\nROJO - {len(fallos)} hallazgo(s):")
        for f in fallos:
            print(f"  x {f}")
        return 1
    print("\nVERDE - X01-X09 pasan.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
