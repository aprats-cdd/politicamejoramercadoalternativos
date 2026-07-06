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
import re
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

# Slug de rol referenciado dentro de un gate (p.ej. el corredor del check).
AG_SLUG = re.compile(r"AG-[A-ZÁÉÍÓÚÑ0-9]+(?:-[A-ZÁÉÍÓÚÑ0-9]+)*")

# Senales NO-AG de un corredor independiente real (harness/script, humano, rol
# externo, o la declaracion explicita). Cierra el hueco de C02 (substring puro
# es gameable: basta sembrar una palabra). Portado del canonico cordada-skills
# (C06) por MEJ-005 de AUD-2026-07-06.
RUNNER_EXTERNO = (
    "harness", ".py", "adversario", "invertido", "ceo", "editor", "calibrador",
    "verificador", "auditor", "smoke", "bitacora", "bitácora", "no lo corre",
    "no la corre", "no el mismo",
)


def check(ag: dict, slugs_agentes: set[str]) -> list[str]:
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
    # C06: el runner nombrado en el gate existe y es != del productor (cierra el
    # hueco de C02, que solo miraba substring). Profundo: LEY-1. (MEJ-005)
    gate_raw = str(ev.get("gate", ""))
    if gate_raw:
        ag_tokens = set(AG_SLUG.findall(gate_raw))
        for tok in ag_tokens:
            if tok != slug and tok not in slugs_agentes:
                fallos.append(
                    f"C06 [{slug}] el gate nombra a '{tok}', que no existe como "
                    f"rol - runner fantasma (independencia aparente, no real)"
                )
        runner_externo = any(t in gate_raw.lower() for t in RUNNER_EXTERNO)
        otro_rol = any(t != slug and t in slugs_agentes for t in ag_tokens)
        invertido = "invertido" in gate_raw.lower()
        if not (runner_externo or otro_rol or invertido):
            fallos.append(
                f"C06 [{slug}] el gate no nombra un corredor independiente real "
                f"(ni harness/humano, ni otro rol existente, ni INVERTIDO)"
            )
        if ag_tokens == {slug} and not runner_externo and not invertido:
            fallos.append(
                f"C06 [{slug}] el gate solo se nombra a si mismo - auto-validacion directa"
            )
    return fallos


def main() -> int:
    try:
        with open(YAML_PATH, encoding="utf-8") as fh:
            doc = yaml.safe_load(fh)
    except (OSError, yaml.YAMLError) as exc:
        print(f"ROJO - no se pudo leer agentes.yaml: {exc}", file=sys.stderr)
        return 1
    agentes = (doc or {}).get("agentes", []) or []
    slugs_agentes = {a.get("slug") for a in agentes if a.get("slug")}
    fallos: list[str] = []
    vistos: dict[str, int] = {}
    for ag in agentes:
        s = ag.get("slug")
        if s:
            vistos[s] = vistos.get(s, 0) + 1
        fallos.extend(check(ag, slugs_agentes))
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
