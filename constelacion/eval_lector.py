#!/usr/bin/env python3
"""Eval ejecutable de AG-LECTOR-INVERSIONISTA (LEY-2).

Gate (lo corre el harness, no el lector — LEY-1): la tabla
pregunta -> respuesta-en-pagina -> estado del lector debe existir y estar
cerrada: 0 preguntas sin respuesta ni gap declarado.

Objeto del eval (rediseño 12-sep-2026): las paginas HTML declaradas en
constelacion/sitio-manifest.yaml. Antes era un archivo unico hardcodeado
(el memorandum); al retirarse ese documento y quedar el sitio con mas de
una pagina, el ancla de `donde` se resuelve contra el conjunto declarado.

Contrato de la tabla (YAML, en constelacion/runs/AG-LECTOR-INVERSIONISTA/):
  preguntas:
    - pregunta: "..."
      lector: cio-afp | aseguradora | mfo | aportante-final | legislador |
              periodista | gremio | banca-desarrollo
      estado: respondida | gap-declarado
      donde: "#ancla-en-index" o descripcion textual de la seccion
      evidencia: cita corta del texto de la pagina que responde/declara el gap

Reglas (fail-closed):
  L01  existe al menos una tabla *.yaml en el directorio del lector
  L02  toda entrada tiene pregunta, lector, estado, donde, evidencia
  L03  estado solo admite {respondida, gap-declarado} — cualquier otro valor
       (p.ej. sin-respuesta) es ROJO: la pagina debe responder o declarar el gap
  L04  si `donde` es un ancla (#id), el id existe en alguna pagina del manifest

VERDE (exit 0) / ROJO (exit 1). Uso: python3 constelacion/eval_lector.py
"""
from __future__ import annotations
import glob
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
DIR_LECTOR = os.path.join(HERE, "runs", "AG-LECTOR-INVERSIONISTA")
MANIFEST = os.path.join(HERE, "sitio-manifest.yaml")

ESTADOS_OK = {"respondida", "gap-declarado"}
# El catalogo de lectores del sitio. legislador/periodista entran con el
# rediseno del 12-sep-2026: la pieza sobre el proyecto de ley se escribe
# para quien legisla y para quien informa, no para el asesor institucional.
LECTORES_OK = {"cio-afp", "aseguradora", "mfo", "aportante-final",
               "legislador", "periodista", "gremio", "banca-desarrollo"}


def paginas_del_sitio() -> list[str]:
    """Rutas HTML declaradas en el manifest. Sin manifest: fail-closed arriba."""
    if not os.path.exists(MANIFEST):
        return []
    with open(MANIFEST, encoding="utf-8") as fh:
        man = yaml.safe_load(fh) or {}
    rutas = []
    for p in man.get("paginas") or []:
        arch = str(p.get("archivo", ""))
        if arch.endswith(".html") and os.path.exists(os.path.join(REPO, arch)):
            rutas.append(arch)
    return rutas


def ids_del_sitio() -> set[str]:
    ids: set[str] = set()
    for arch in paginas_del_sitio():
        with open(os.path.join(REPO, arch), encoding="utf-8") as fh:
            html = fh.read()
        ids |= set(re.findall(r'id="([^"]+)"', html))
        ids |= set(re.findall(r'data-tab="([^"]+)"', html))
    return ids


def main() -> int:
    tablas = sorted(glob.glob(os.path.join(DIR_LECTOR, "*.yaml")))
    if not tablas:
        print(f"ROJO - L01: no hay tabla del lector en {os.path.relpath(DIR_LECTOR, REPO)}/. Fail-closed.")
        return 1
    paginas = paginas_del_sitio()
    if not paginas:
        print("ROJO - L04: no hay paginas HTML declaradas en sitio-manifest.yaml. Fail-closed.")
        return 1
    ids = ids_del_sitio()
    fallos: list[str] = []
    total = 0
    for path in tablas:
        rel = os.path.relpath(path, REPO)
        try:
            with open(path, encoding="utf-8") as fh:
                doc = yaml.safe_load(fh) or {}
        except (OSError, yaml.YAMLError) as exc:
            fallos.append(f"L01 [{rel}] ilegible: {exc}")
            continue
        for i, q in enumerate(doc.get("preguntas") or [], 1):
            total += 1
            ref = f"{rel}#p{i}"
            for campo in ("pregunta", "lector", "estado", "donde", "evidencia"):
                if not q.get(campo):
                    fallos.append(f"L02 [{ref}] falta '{campo}'")
            estado = str(q.get("estado", ""))
            if estado and estado not in ESTADOS_OK:
                fallos.append(f"L03 [{ref}] estado '{estado}' — pregunta sin respuesta ni gap declarado")
            lector = str(q.get("lector", ""))
            if lector and lector not in LECTORES_OK:
                fallos.append(f"L02 [{ref}] lector '{lector}' fuera del catalogo {sorted(LECTORES_OK)}")
            donde = str(q.get("donde", ""))
            if donde.startswith("#") and donde[1:] not in ids:
                fallos.append(f"L04 [{ref}] ancla colgante: {donde}")
    print(f"eval_lector - {total} pregunta(s) evaluadas en {len(tablas)} tabla(s)")
    if fallos:
        print(f"\nROJO - {len(fallos)} hallazgo(s):")
        for f in fallos:
            print(f"  x {f}")
        return 1
    print("\nVERDE - 0 preguntas sin respuesta ni gap declarado (L01-L04).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
