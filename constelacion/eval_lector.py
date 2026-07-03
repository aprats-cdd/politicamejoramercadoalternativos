#!/usr/bin/env python3
"""Eval ejecutable de AG-LECTOR-INVERSIONISTA (LEY-2).

Gate (lo corre el harness, no el lector — LEY-1): la tabla
pregunta -> respuesta-en-pagina -> estado del lector institucional debe
existir y estar cerrada: 0 preguntas sin respuesta ni gap declarado.

Contrato de la tabla (YAML, en constelacion/runs/AG-LECTOR-INVERSIONISTA/):
  preguntas:
    - pregunta: "..."
      lector: cio-afp | aseguradora | mfo | aportante-final
      estado: respondida | gap-declarado
      donde: "#ancla-en-index" o descripcion textual de la seccion
      evidencia: cita corta del texto de la pagina que responde/declara el gap

Reglas (fail-closed):
  L01  existe al menos una tabla *.yaml en el directorio del lector
  L02  toda entrada tiene pregunta, lector, estado, donde, evidencia
  L03  estado solo admite {respondida, gap-declarado} — cualquier otro valor
       (p.ej. sin-respuesta) es ROJO: la pagina debe responder o declarar el gap
  L04  si `donde` es un ancla (#id), el id existe en index.html

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
INDEX = os.path.join(REPO, "memorandum.html")  # objeto del eval: el memorandum (post-swap D1)
if not os.path.exists(INDEX):
    INDEX = os.path.join(REPO, "index.html")  # compatibilidad pre-swap

ESTADOS_OK = {"respondida", "gap-declarado"}
LECTORES_OK = {"cio-afp", "aseguradora", "mfo", "aportante-final"}


def ids_de_index() -> set[str]:
    with open(INDEX, encoding="utf-8") as fh:
        html = fh.read()
    return set(re.findall(r'id="([^"]+)"', html)) | set(
        re.findall(r"data-tab=\"([^\"]+)\"", html)
    )


def main() -> int:
    tablas = sorted(glob.glob(os.path.join(DIR_LECTOR, "*.yaml")))
    if not tablas:
        print(f"ROJO - L01: no hay tabla del lector en {os.path.relpath(DIR_LECTOR, REPO)}/. Fail-closed.")
        return 1
    ids = ids_de_index()
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
