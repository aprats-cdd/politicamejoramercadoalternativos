#!/usr/bin/env python3
"""Gate determinista de la capa de afilado exogeno (AG-EDITORIAL-AFILADOR).

Valida los dossiers de afilado en constelacion/runs/AG-EDITORIAL-AFILADOR/*.yaml:
  A01  todo item ancla a una pieza existente del repo, con claim_ancla no vacio
  A02  toda cifra nueva declara fuente_primaria_candidata y ninguna es la señal
       (la señal NUNCA es fuente: un post es señal, no evidencia)
  A03  tipo del item dentro del enum canonico
  A04  items deriva-a-tesis-nueva declaran destinatario AG-EDITORIAL-TESIS
       (el dossier no forma tesis — eso es de otro rol)
  A05  procedencia de la señal + interes_del_emisor presentes (fail-closed:
       sin declarar que vende el emisor, el dossier es invalido)
  A06  veredicto input-no-base escrito (la señal afila, no re-fundamenta)

Single-writer del harness: AG-SITIO-VERIFICADOR (contrato C2 del motor
editorial). El afilador PROPONE checks; este archivo los commitea otro.

VERDE (exit 0) si todo pasa; ROJO (exit 1) si algo falla. Fail-closed.
Sin dossiers todavia: VERDE con advertencia (la capa esta `propuesta`
hasta su primera corrida O→M→D).

Uso:
  python3 constelacion/eval_afilado.py            # gate sobre los dossiers
  python3 constelacion/eval_afilado.py --selftest # fixtures internos PASS/FAIL
"""
from __future__ import annotations

import glob
import os
import sys

try:
    import yaml
except ImportError:
    print("ROJO - falta pyyaml (pip install pyyaml). Fail-closed.", file=sys.stderr)
    sys.exit(1)

REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
DOSSIER_DIR = os.path.join(os.path.dirname(__file__), "runs", "AG-EDITORIAL-AFILADOR")

TIPOS = (
    "refuerza",
    "tensiona",
    "agrega-comparable",
    "exige-gap-declarado",
    "deriva-a-tesis-nueva",
    "no-accion",
)


def _urls_de_senal(senal: dict) -> set[str]:
    urls = set()
    for campo in ("url", "urls"):
        v = senal.get(campo)
        if isinstance(v, str):
            urls.add(v.strip().rstrip("/").lower())
        elif isinstance(v, list):
            urls.update(str(u).strip().rstrip("/").lower() for u in v)
    return urls


def check_dossier(path: str, doc: dict) -> list[str]:
    fallos: list[str] = []
    nombre = os.path.basename(path)

    senal = doc.get("senal") or {}
    # A05 · procedencia + interes del emisor (fail-closed)
    proc = senal.get("procedencia") or {}
    for campo in ("autor", "fecha", "canal"):
        if not proc.get(campo):
            fallos.append(f"A05 [{nombre}] procedencia sin '{campo}'")
    if not str(senal.get("interes_del_emisor", "")).strip():
        fallos.append(
            f"A05 [{nombre}] falta interes_del_emisor (que vende quien emite "
            f"la señal) - dossier invalido, fail-closed"
        )

    # A06 · veredicto input-no-base escrito
    if not str(doc.get("veredicto_input_no_base", "")).strip():
        fallos.append(f"A06 [{nombre}] falta veredicto_input_no_base escrito")

    urls_senal = _urls_de_senal(senal)
    items = doc.get("items") or []
    if not items:
        fallos.append(f"A01 [{nombre}] dossier sin items")

    for i, item in enumerate(items, 1):
        ref = f"{nombre} item {i}"
        tipo = str(item.get("tipo", "")).strip()

        # A03 · tipo dentro del enum
        if tipo not in TIPOS:
            fallos.append(f"A03 [{ref}] tipo '{tipo}' fuera del enum {TIPOS}")

        # A04 · derivacion de tesis va a AG-EDITORIAL-TESIS
        if tipo == "deriva-a-tesis-nueva":
            if str(item.get("destinatario", "")).strip() != "AG-EDITORIAL-TESIS":
                fallos.append(
                    f"A04 [{ref}] deriva-a-tesis-nueva sin destinatario "
                    f"AG-EDITORIAL-TESIS (el dossier no forma tesis)"
                )
            continue  # no ancla a pieza: su destino es otro rol

        # A01 · ancla a pieza existente + claim_ancla (no-accion ancla igual:
        # declara QUE pieza se evaluo y por que no se toca)
        pieza = str(item.get("pieza", "")).strip()
        if not pieza:
            fallos.append(f"A01 [{ref}] sin pieza")
        elif not os.path.exists(os.path.join(REPO, pieza)):
            fallos.append(f"A01 [{ref}] pieza inexistente en el repo: {pieza}")
        if not str(item.get("claim_ancla", "")).strip():
            fallos.append(f"A01 [{ref}] claim_ancla vacio")
        if tipo == "no-accion" and not str(item.get("razon", "")).strip():
            fallos.append(f"A01 [{ref}] no-accion sin razon escrita")

        # A02 · cifras nuevas: fuente primaria candidata, nunca la señal
        for j, cifra in enumerate(item.get("cifras_nuevas") or [], 1):
            fuente = str(cifra.get("fuente_primaria_candidata", "")).strip()
            if not fuente:
                fallos.append(
                    f"A02 [{ref} cifra {j}] sin fuente_primaria_candidata "
                    f"(la señal no es fuente)"
                )
            elif fuente.rstrip("/").lower() in urls_senal or fuente.lower() in (
                "la señal", "la senal", "el post", "linkedin",
            ):
                fallos.append(
                    f"A02 [{ref} cifra {j}] la fuente ES la señal - prohibido "
                    f"(señal ≠ evidencia)"
                )
    return fallos


def run_gate() -> int:
    paths = sorted(glob.glob(os.path.join(DOSSIER_DIR, "*.yaml")))
    if not paths:
        print("eval_afilado - 0 dossiers encontrados")
        print(
            "\nVERDE (vacio) - la capa de afilado esta `propuesta`: su primera "
            "corrida O→M→D produce el primer dossier."
        )
        return 0
    fallos: list[str] = []
    for path in paths:
        try:
            with open(path, encoding="utf-8") as fh:
                doc = yaml.safe_load(fh) or {}
        except (OSError, yaml.YAMLError) as exc:
            fallos.append(f"A00 [{os.path.basename(path)}] ilegible: {exc}")
            continue
        fallos.extend(check_dossier(path, doc))
    print(f"eval_afilado - {len(paths)} dossier(s) evaluados")
    if fallos:
        print(f"\nROJO - {len(fallos)} hallazgo(s):")
        for f in fallos:
            print(f"  x {f}")
        return 1
    print("\nVERDE - todos los checks pasan (A01-A06).")
    return 0


# ── selftest: fixtures internos (el harness se prueba a si mismo) ──

FIXTURE_VERDE = {
    "senal": {
        "slug": "DIG-FIXTURE",
        "procedencia": {"autor": "N.N.", "fecha": "2026-07-10", "canal": "linkedin"},
        "url": "https://linkedin.com/posts/fixture",
        "interes_del_emisor": "vende asesoria a fondos - la señal es tambien marketing",
    },
    "veredicto_input_no_base": "0 items re-fundamentan tesis; la señal solo afila.",
    "items": [
        {
            "pieza": "separacion-de-roles.html",
            "claim_ancla": "El estandar que ya rige en otras jurisdicciones",
            "tipo": "agrega-comparable",
            "propuesta": "sumar el ecosistema global de fund admin como comparable",
            "cifras_nuevas": [
                {"cifra": "ejemplo", "fuente_primaria_candidata": "https://www.sifma.org/fixture"}
            ],
        },
        {
            "tipo": "deriva-a-tesis-nueva",
            "destinatario": "AG-EDITORIAL-TESIS",
            "propuesta": "tesis propia sobre consolidacion via PE",
        },
        {
            "pieza": "deuda-privada-como-renta-fija.html",
            "claim_ancla": "tesis central",
            "tipo": "no-accion",
            "razon": "la señal no toca esta pieza",
        },
    ],
}

FIXTURE_ROJO = {
    "senal": {
        "slug": "DIG-FIXTURE-MALO",
        "procedencia": {"autor": "N.N.", "fecha": "2026-07-10"},  # sin canal
        "url": "https://linkedin.com/posts/fixture-malo",
        # sin interes_del_emisor
    },
    # sin veredicto_input_no_base
    "items": [
        {
            "pieza": "pieza-que-no-existe.html",  # A01
            "claim_ancla": "",  # A01
            "tipo": "re-fundamenta",  # A03
            "cifras_nuevas": [
                {"cifra": "x", "fuente_primaria_candidata": "https://linkedin.com/posts/fixture-malo"}  # A02
            ],
        },
        {"tipo": "deriva-a-tesis-nueva", "destinatario": "nadie"},  # A04
    ],
}


def run_selftest() -> int:
    ok = True
    fallos_verde = check_dossier("fixture-verde.yaml", FIXTURE_VERDE)
    if fallos_verde:
        ok = False
        print("SELFTEST FAIL - el fixture VERDE fallo:")
        for f in fallos_verde:
            print(f"  x {f}")
    fallos_rojo = check_dossier("fixture-rojo.yaml", FIXTURE_ROJO)
    esperados = {"A01", "A02", "A03", "A04", "A05", "A06"}
    detectados = {f.split(" ")[0] for f in fallos_rojo}
    faltan = esperados - detectados
    if faltan:
        ok = False
        print(f"SELFTEST FAIL - el fixture ROJO no gatillo: {sorted(faltan)}")
    if ok:
        print("SELFTEST PASS - fixture verde limpio; fixture rojo gatilla A01-A06.")
        return 0
    return 1


if __name__ == "__main__":
    if "--selftest" in sys.argv:
        raise SystemExit(run_selftest())
    raise SystemExit(run_gate())
