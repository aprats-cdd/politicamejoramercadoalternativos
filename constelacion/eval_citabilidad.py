#!/usr/bin/env python3
"""Eval ejecutable de AG-EMPAQUETADOR-CITABLE (LEY-2) — checker de citabilidad.

Gate determinista (lo corren el harness + AG-VERIFICADOR-CITAS, no el
empaquetador — LEY-1). Checks, fail-closed:

  P01  integridad de footnotes: todo <a href="#fnN" class="fn-ref"> apunta a
       una footnote existente, y toda footnote esta referenciada al menos
       una vez desde el cuerpo.
  P02  metadata de citacion presente: <link rel="canonical">, JSON-LD
       schema.org Article con datePublished y dateModified.
  P03  capas auditadas: todo bloque delimitado con
       <!-- capa:<slug> --> ... <!-- /capa:<slug> --> no introduce cifras
       nuevas sin respaldo — cada token numerico del bloque debe estar en el
       ledger de claims del auditor
       (constelacion/runs/AG-AUDITOR-EVIDENCIA/*claims*.yaml), cada claim
       con su footnote o doble fuente, o marcado `ilustrativo: true`.
       Si hay capa y no hay ledger: ROJO (fail-closed).
  P04  kit de citabilidad: si existe constelacion/kit-manifest.yaml, cada
       empaque declarado (pdf, one-pager, hoja de datos) existe en el repo.
       Sin manifest, el kit se reporta como pendiente declarado (la corrida
       del empaquetador que lo produzca debe declararlo) — no bloquea los
       checks de pagina, que aplican siempre.

VERDE (exit 0) / ROJO (exit 1). Uso: python3 constelacion/eval_citabilidad.py
"""
from __future__ import annotations
import glob
import html as htmlmod
import os
import re
import sys

try:
    import yaml
except ImportError:
    print("ROJO - falta pyyaml (pip install pyyaml). Fail-closed.", file=sys.stderr)
    sys.exit(1)

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
INDEX = os.path.join(REPO, "index.html")
LEDGER_GLOB = os.path.join(HERE, "runs", "AG-AUDITOR-EVIDENCIA", "*claims*.yaml")
MANIFEST = os.path.join(HERE, "kit-manifest.yaml")

CAPA_RE = re.compile(r"<!--\s*capa:([\w.\-]+)\s*-->(.*?)<!--\s*/capa:\1\s*-->", re.S)
NUM_RE = re.compile(r"\d[\d.,]*")


def texto_plano(fragmento: str) -> str:
    sin_tags = re.sub(r"<[^>]+>", " ", fragmento)
    return htmlmod.unescape(sin_tags)


def check_footnotes(html: str) -> list[str]:
    fallos = []
    refs = set(re.findall(r'href="#(fn\d+)"', html))
    notas = set(re.findall(r'<li[^>]*id="(fn\d+)"', html))
    for r in sorted(refs - notas):
        fallos.append(f"P01 fn-ref colgante: #{r} no existe en la seccion de fuentes")
    for n in sorted(notas - refs):
        fallos.append(f"P01 footnote huerfana: #{n} no es referenciada desde el cuerpo")
    return fallos


def check_metadata(html: str) -> list[str]:
    fallos = []
    if 'rel="canonical"' not in html:
        fallos.append("P02 falta <link rel=\"canonical\">")
    jsonld = re.search(r'<script type="application/ld\+json">(.*?)</script>', html, re.S)
    if not jsonld:
        fallos.append("P02 falta JSON-LD schema.org")
    else:
        cuerpo = jsonld.group(1)
        for clave in ('"@type"', '"datePublished"', '"dateModified"'):
            if clave not in cuerpo:
                fallos.append(f"P02 JSON-LD sin {clave}")
    return fallos


def tokens_del_ledger() -> tuple[set[str], list[str]]:
    """Tokens numericos respaldados por el ledger del auditor."""
    fallos: list[str] = []
    tokens: set[str] = set()
    for path in sorted(glob.glob(LEDGER_GLOB)):
        rel = os.path.relpath(path, REPO)
        try:
            with open(path, encoding="utf-8") as fh:
                doc = yaml.safe_load(fh) or {}
        except (OSError, yaml.YAMLError) as exc:
            fallos.append(f"P03 ledger ilegible [{rel}]: {exc}")
            continue
        for i, claim in enumerate(doc.get("claims") or [], 1):
            ref = f"{rel}#c{i}"
            respaldo = claim.get("footnote") or (
                claim.get("fuente_1") and claim.get("fuente_2")
            ) or claim.get("ilustrativo") is True
            if not respaldo:
                fallos.append(f"P03 [{ref}] claim sin footnote, sin doble fuente y sin marca ilustrativa")
                continue
            tokens.update(NUM_RE.findall(str(claim.get("texto", ""))))
    return tokens, fallos


def check_capas(html: str) -> list[str]:
    capas = CAPA_RE.findall(html)
    if not capas:
        return []
    tokens_ok, fallos = tokens_del_ledger()
    if not glob.glob(LEDGER_GLOB):
        return [f"P03 hay {len(capas)} capa(s) auditada(s) y ningun ledger de claims del auditor. Fail-closed."]
    for slug, cuerpo in capas:
        for tok in NUM_RE.findall(texto_plano(cuerpo)):
            if tok not in tokens_ok:
                fallos.append(f"P03 [capa:{slug}] cifra '{tok}' sin respaldo en el ledger del auditor")
    return fallos


def check_kit() -> tuple[list[str], str]:
    if not os.path.exists(MANIFEST):
        return [], "P04 kit de citabilidad: sin manifest — pendiente declarado (corrida del empaquetador)."
    try:
        with open(MANIFEST, encoding="utf-8") as fh:
            doc = yaml.safe_load(fh) or {}
    except (OSError, yaml.YAMLError) as exc:
        return [f"P04 kit-manifest.yaml ilegible: {exc}"], ""
    fallos = []
    empaques = doc.get("empaques") or []
    if not empaques:
        fallos.append("P04 manifest presente pero sin empaques declarados")
    for e in empaques:
        ruta = str(e.get("archivo", ""))
        if not ruta or not os.path.exists(os.path.join(REPO, ruta)):
            fallos.append(f"P04 empaque declarado no existe: {ruta or '<sin archivo>'}")
    return fallos, f"P04 kit: {len(empaques)} empaque(s) declarados."


def main() -> int:
    try:
        with open(INDEX, encoding="utf-8") as fh:
            html = fh.read()
    except OSError as exc:
        print(f"ROJO - no se pudo leer index.html: {exc}", file=sys.stderr)
        return 1
    fallos = check_footnotes(html) + check_metadata(html) + check_capas(html)
    fallos_kit, nota_kit = check_kit()
    fallos += fallos_kit
    n_capas = len(CAPA_RE.findall(html))
    print(f"eval_citabilidad - footnotes + metadata + {n_capas} capa(s) auditada(s)")
    if nota_kit:
        print(f"  {nota_kit}")
    if fallos:
        print(f"\nROJO - {len(fallos)} hallazgo(s):")
        for f in fallos:
            print(f"  x {f}")
        return 1
    print("\nVERDE - citabilidad OK (P01-P04): footnotes integras, metadata presente, 0 cifras sin respaldo.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
