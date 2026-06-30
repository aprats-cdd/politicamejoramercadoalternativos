#!/usr/bin/env python3
"""Harness de la constelacion local (gate de las tres leyes).

Valida constelacion/agentes.yaml contra el schema minimo y las tres reglas:
  C01  schema completo por rol (slug, rol, hace, memoria 3-tipos, eval, metricas)
  C02  independencia: el gate de cada rol lo corre OTRO (no se auto-valida)
  C03  no hay referencia colgante a archivos del repo (los que parecen ruta existen)
  C05  sin slugs duplicados

VERDE (exit 0) si todo pasa; ROJO (exit 1) si algo falla. Fail-closed.
Uso: python constelacion/eval_constelacion.py
"""
from __future__ import annotations
import os
import sys

try:
    import yaml
except ImportError:
    print("ROJO - falta pyyaml (pip install pyyaml). Fail-closed.", file=sys.stderr)
    sys.exit(1)

REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
YAML_PATH = os.path.join(os.path.dirname(__file__), "agentes.yaml")

# Senales de que el gate lo corre alguien independiente del propio rol.
INDEPENDENCIA = (
    "otro", "otros", "harness", "lo corre", "lo corren", "adversario",
    "invertido", "verificador", "critico", "dos auditores", "dos verificadores",
)


def check(ag: dict) -> list[str]:
    fallos: list[str] = []
    slug = ag.get("slug", "<sin-slug>")
    for campo in ("slug", "rol", "hace", "eval", "metricas"):
        if not ag.get(campo):
            fallos.append(f"C01 [{slug}] falta campo '{campo}'")
    mem = ag.get("memoria") or {}
    for tipo in ("semantica", "episodica", "procedural"):
        if not mem.get(tipo):
            fallos.append(f"C01 [{slug}] memoria sin '{tipo}'")
    ev = ag.get("eval") or {}
    for campo in ("gate", "estado"):
        if not ev.get(campo):
            fallos.append(f"C01 [{slug}] eval sin '{campo}'")
    gate = str(ev.get("gate", "")).lower()
    if gate and not any(t in gate for t in INDEPENDENCIA):
        fallos.append(f"C02 [{slug}] el gate no declara un corredor independiente (posible auto-validacion)")
    # C03: refs que parezcan ruta interna del repo deben existir
    for ref in (mem.get("semantica") or []):
        s = str(ref).strip()
        if "/" in s and s.endswith((".py", ".yaml", ".md", ".html")) and not s.startswith("http"):
            if not os.path.exists(os.path.join(REPO, s)):
                fallos.append(f"C03 [{slug}] referencia colgante: {s}")
    return fallos


def main() -> int:
    try:
        with open(YAML_PATH, encoding="utf-8") as fh:
            doc = yaml.safe_load(fh)
    except (OSError, yaml.YAMLError) as exc:
        print(f"ROJO - no se pudo leer agentes.yaml: {exc}", file=sys.stderr)
        return 1
    agentes = (doc or {}).get("agentes", []) or []
    fallos: list[str] = []
    vistos: dict[str, int] = {}
    for ag in agentes:
        s = ag.get("slug")
        if s:
            vistos[s] = vistos.get(s, 0) + 1
        fallos.extend(check(ag))
    for s, n in vistos.items():
        if n > 1:
            fallos.append(f"C05 slug duplicado: {s}")
    print(f"eval_constelacion - {len(agentes)} roles evaluados")
    if fallos:
        print(f"\nROJO - {len(fallos)} hallazgo(s):")
        for f in fallos:
            print(f"  x {f}")
        return 1
    print("\nVERDE - todos los checks pasan (C01-C05). Las tres leyes se cumplen.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
