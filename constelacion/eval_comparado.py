#!/usr/bin/env python3
"""Arbitro de la capa comparada Chile-Luxemburgo. Fail-closed.

Responsabilidad UNICA de este archivo (separacion Harness/Prompt, encargo
13-sep-2026): verificar tipos, hashes, coincidencias de texto exacto,
existencia de nodos, enums cerrados y profundidad de grafo. Nada de este
archivo juzga si un dato es CIERTO, ni interpreta el espiritu de una ley,
ni genera contenido. Eso lo hace el jurista al escribir el registro, y lo
audita el dueno al leer la pagina.

  K01  cada dato trae marca valida ('leido' | 'de_oido' | 'supuesto') y
       los campos obligatorios que esa marca exige.
  K02  marca 'leido' -> el sha256 de la copia local cierra, y la cita
       literal aparece tal cual dentro de esa copia. Se limpian SOLO
       invisibles de PDF antes de comparar (guiones suaves, BOM, etc.):
       nunca comas, acentos ni mayusculas -- "podra" y "debera" jamas
       son la misma palabra (decision 13-sep-2026).
  K03  marca 'supuesto' -> valida el grafo: ancla_ref existe como id real
       en el registro, vector pertenece al enum cerrado, la cadena no
       tiene profundidad > 1 (un supuesto no puede apoyarse en otro
       supuesto -- incluido el caso de apoyarse en si mismo), y
       que_lo_destruye no esta vacio (ni solo espacios).
  K04  espejo obligatorio: todo dato tiene su contraparte funcional en la
       otra jurisdiccion, o declara sin_contraparte con razon.
  K05  todo dato con una cifra en su afirmacion declara marca_visible en
       true: el autor se compromete a que la marca se vea al lado del
       numero en la pagina. Que efectivamente se vea ahi es trabajo de
       un gate de render aparte, no de este archivo.
  K06  toda mencion a una directiva UE sin fecha de version consolidada
       al lado falla (UCITS V / AIFMD a secas no alcanzan: la Directiva
       (UE) 2024/927 modifico ambas, transposicion 16-abr-2026).
       OJO al redactar: un punto (".") entre la mencion y la fecha corta
       la busqueda -- "AIFMD art. 3, 2024-03-26" FALLA aunque la fecha
       este ahi, porque "art." trae su propio punto. Poner la fecha
       ANTES de cualquier abreviatura con punto, o evitar la abreviatura.
  K07  self-test hermetico: cero disco, cero red. Cada fixture llama
       directo a las funciones puras -- ninguna depende de un archivo
       en disco para existir. Si el arbitro no caza un fixture invalido,
       el self-test explota (exit 1) en vez de reportarlo en silencio.

Uso:
  python3 constelacion/eval_comparado.py --self-test
  python3 constelacion/eval_comparado.py [--registro RUTA]
"""
from __future__ import annotations

import hashlib
import os
import re
import sys
import unicodedata

try:
    import yaml
except ImportError:
    print("ROJO - falta pyyaml. Fail-closed.", file=sys.stderr)
    sys.exit(1)

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
REGISTRO_DEFAULT = os.path.join(HERE, "evidencia", "registro-comparado.yaml")

MARCAS = {"leido", "de_oido", "supuesto"}

CAMPOS = {
    "leido":    ("ley", "articulo", "version_fecha", "url", "snapshot",
                 "sha256", "cita_literal", "traduccion"),
    "de_oido":  ("fuente_citada", "via", "no_sostiene"),
    "supuesto": ("ancla_ref", "vector", "que_lo_destruye"),
}

# K03 - unico vocabulario permitido para clasificar el ROL de un supuesto
# en el argumento. Cerrado a proposito: si no entra en una de estas
# cuatro, no se marca 'supuesto' hasta que alguien lo piense mejor.
# NOTA DE ARQUITECTO (13-sep-2026): este enum es vocabulario de dinamica
# de sistemas (Donella Meadows) y no tiene precedente en el resto de
# constelacion/. Se implementa tal como se encargo -- membresia en un
# set cerrado es perfectamente decidible -- pero el riesgo de "gate de
# teatro" (rellenar el campo sin pensarlo solo para pasar) vive rio
# arriba, en quien escribe el registro, no en este archivo.
VECTORES_VALIDOS = {
    "bucle_refuerzo",
    "bucle_compensacion",
    "punto_palanca",
    "retardo_estructural",
}

# K06 - "UCITS V" / "AIFMD" a secas, sin una fecha ISO cerca, falla.
UE_SIN_FECHA = re.compile(
    r"\b(UCITS\s+[IVX]+|AIFMD(?:\s+II)?|Directiva\s*\(?UE\)?\s*\d{4}/\d+"
    r"|Directiva\s+\d{4}/\d+/UE)\b(?!(?:[^.]{0,120}?\d{4}-\d{2}-\d{2}))",
    re.I,
)

# K05 - cualquier token numerico dentro de la afirmacion cuenta como cifra.
NUM = re.compile(r"\d[\d.,]*")

# Caracteres invisibles de PDF que se limpian ANTES de comparar (K02).
_INVISIBLES = dict.fromkeys(map(ord, "­​‌‍﻿"), None)


def _limpiar(s: str) -> str:
    s = unicodedata.normalize("NFKC", s).translate(_INVISIBLES)
    return re.sub(r"\s+", " ", s.replace(" ", " ")).strip()


# ─────────────────────────────────────────────────────────────────────
# Funciones PURAS (sin disco, sin red). Son las que K07 self-test llama
# directamente -- es lo que hace al self-test hermetico DE VERDAD: no
# depende de que exista ningun archivo, solo de bytes/dicts en memoria.
# La unica funcion que toca disco es revisar_registro(), mas abajo.
# ─────────────────────────────────────────────────────────────────────

def verificar_ficha(nodo: dict) -> list[str]:
    """K01 puro."""
    i = nodo.get("id", "<sin id>")
    m = nodo.get("marca")
    if m not in MARCAS:
        return [f"K01 [{i}] marca '{m}' invalida. Debe ser una de {sorted(MARCAS)}"]
    faltan = [c for c in CAMPOS[m] if not nodo.get(c)]
    if faltan:
        return [f"K01 [{i}] marca '{m}' sin sus campos obligatorios: {', '.join(faltan)}"]
    return []


def verificar_leido(nodo: dict, snapshot_bytes: bytes) -> list[str]:
    """K02 puro: recibe los BYTES del snapshot ya leidos, nunca la ruta."""
    f = []
    i = nodo.get("id", "<sin id>")
    if hashlib.sha256(snapshot_bytes).hexdigest() != nodo.get("sha256"):
        f.append(f"K02 [{i}] el sha256 declarado no coincide con la copia")
        return f
    if _limpiar(nodo.get("cita_literal", "")) not in _limpiar(
        snapshot_bytes.decode("utf-8", "replace")
    ):
        f.append(f"K02 [{i}] la cita_literal no aparece en la copia")
    return f


def verificar_grafo_supuesto(nodo: dict, por_id: dict[str, dict]) -> list[str]:
    """K03 puro: solo necesita el nodo y el indice id->nodo del registro."""
    f = []
    i = nodo.get("id", "<sin id>")
    ancla = nodo.get("ancla_ref")
    vector = nodo.get("vector")
    destruye = nodo.get("que_lo_destruye")

    if ancla not in por_id:
        f.append(f"K03 [{i}] ancla_ref '{ancla}' no existe como id en el registro")
    elif por_id[ancla].get("marca") == "supuesto":
        # Cubre tanto "cita a otro supuesto" como "se cita a si mismo":
        # en ambos casos el nodo apuntado tiene marca == 'supuesto'.
        f.append(
            f"K03 [{i}] ancla_ref '{ancla}' es otro supuesto - profundidad > 1 "
            "(una torre de supuestos no vale; hay que anclar en 'leido' o 'de_oido')"
        )

    if vector not in VECTORES_VALIDOS:
        f.append(f"K03 [{i}] vector '{vector}' invalido. Debe ser uno de {sorted(VECTORES_VALIDOS)}")

    if not str(destruye or "").strip():
        f.append(f"K03 [{i}] que_lo_destruye vacio: todo supuesto declara que lo tumba")

    return f


def verificar_espejo(nodo: dict, por_id: dict[str, dict]) -> list[str]:
    """K04 puro."""
    f = []
    i = nodo.get("id", "<sin id>")
    esp, sin = nodo.get("espejo"), nodo.get("sin_contraparte")
    if not esp and not sin:
        f.append(f"K04 [{i}] sin contraparte funcional ni sin_contraparte declarado")
    elif esp and esp not in por_id:
        f.append(f"K04 [{i}] el espejo '{esp}' no existe en el registro")
    elif esp:
        otro = por_id[esp]
        if otro.get("funcion") != nodo.get("funcion"):
            f.append(
                f"K04 [{i}] el espejo '{esp}' es de otra funcion: "
                f"{otro.get('funcion')} vs {nodo.get('funcion')}"
            )
        if otro.get("pais") == nodo.get("pais"):
            f.append(f"K04 [{i}] el espejo '{esp}' es del mismo pais ({nodo.get('pais')})")
    return f


def verificar_cifra_visible(nodo: dict) -> list[str]:
    """K05 puro. Solo mira el propio nodo -- nada de HTML aca: si la
    marca aparece VISIBLE en la pagina renderizada es un gate de render
    aparte, no responsabilidad de este archivo."""
    i = nodo.get("id", "<sin id>")
    if NUM.search(str(nodo.get("afirmacion") or "")) and nodo.get("marca_visible") is not True:
        return [f"K05 [{i}] tiene cifra en 'afirmacion' pero marca_visible no esta en true"]
    return []


def verificar_fecha_ue(nodo: dict) -> list[str]:
    """K06 puro."""
    i = nodo.get("id", "<sin id>")
    for campo in ("afirmacion", "ley", "cita_literal"):
        if UE_SIN_FECHA.search(str(nodo.get(campo) or "")):
            return [
                f"K06 [{i}] norma UE en '{campo}' sin fecha de version consolidada "
                "(la Directiva (UE) 2024/927 modifico UCITS y AIFMD)"
            ]
    return []


# ─────────────────────────────────────────────────────────────────────
# Orquestador -- la UNICA funcion de todo el archivo que toca disco
# (lee snapshots de datos marcados 'leido'). Todo lo demas de arriba es
# puro y por eso el self-test de abajo puede ser hermetico de verdad.
# ─────────────────────────────────────────────────────────────────────

def revisar_registro(registro: dict) -> list[str]:
    datos = registro.get("datos") or []
    if not datos:
        return ["K01 registro sin datos. Fail-closed."]

    por_id = {d["id"]: d for d in datos if d.get("id")}
    fallos: list[str] = []

    for nodo in datos:
        errores_ficha = verificar_ficha(nodo)
        fallos += errores_ficha
        if errores_ficha:
            # Ya sabemos que faltan campos: correr los checks semanticos
            # sobre campos inexistentes solo produce ruido, no senal.
            continue

        m = nodo["marca"]
        if m == "leido":
            ruta = os.path.join(REPO, nodo["snapshot"])
            if not os.path.exists(ruta):
                fallos.append(f"K02 [{nodo['id']}] no existe la copia local {nodo['snapshot']}")
            else:
                with open(ruta, "rb") as fh:
                    fallos += verificar_leido(nodo, fh.read())
        elif m == "supuesto":
            fallos += verificar_grafo_supuesto(nodo, por_id)

        fallos += verificar_espejo(nodo, por_id)
        fallos += verificar_cifra_visible(nodo)
        fallos += verificar_fecha_ue(nodo)

    return fallos


# ─────────────────────────────────────────────────────────────────────
# K07 -- self-test hermetico. CERO disco, CERO red: cada fixture llama
# directo a las funciones puras de arriba con datos ya en memoria.
# ─────────────────────────────────────────────────────────────────────

def self_test() -> int:
    malos = 0

    def check(nombre: str, errores: list[str], debia_fallar: bool) -> None:
        nonlocal malos
        ok = bool(errores) == debia_fallar
        print(f"  {'ok  ' if ok else 'ROTO'} {nombre}")
        if not ok:
            malos += 1

    # K01 ------------------------------------------------------------
    check("K01 caza marca inventada",
          verificar_ficha({"id": "x", "marca": "confirmado"}), True)
    check("K01 caza de_oido incompleto",
          verificar_ficha({"id": "x", "marca": "de_oido", "fuente_citada": "a", "via": "b"}), True)
    check("K01 deja pasar leido completo",
          verificar_ficha({"id": "x", "marca": "leido", "ley": "L", "articulo": "1",
                            "version_fecha": "2024-03-26", "url": "http://x",
                            "snapshot": "s", "sha256": "0" * 64, "cita_literal": "c",
                            "traduccion": "t"}), False)

    # K02 (puro, con bytes en memoria -- CERO disco) -------------------
    contenido = b"El depositario debera restituir el activo perdido sin demora."
    hash_real = hashlib.sha256(contenido).hexdigest()
    base = {"id": "L1", "sha256": hash_real,
            "cita_literal": "debera restituir el activo perdido"}
    check("K02 deja pasar cita real contra su hash",
          verificar_leido(base, contenido), False)
    check("K02 caza copia alterada (hash no cierra)",
          verificar_leido({**base, "sha256": "0" * 64}, contenido), True)
    check("K02 caza cita que no esta en la copia",
          verificar_leido({**base, "cita_literal": "esto no esta en el texto"}, contenido), True)
    con_invisible = "debera­ restituir el activo perdido".encode("utf-8")
    check("K02 limpia SOLO invisibles (guion suave no rompe el match)",
          verificar_leido({**base, "sha256": hashlib.sha256(con_invisible).hexdigest()},
                           con_invisible), False)
    check("K02 NO perdona un cambio real de palabra (podra != debera)",
          verificar_leido({**base, "cita_literal": "podra restituir el activo perdido"},
                           contenido), True)

    # K03 (puro, indice en memoria) ------------------------------------
    idx = {
        "ANCLA-1": {"id": "ANCLA-1", "marca": "leido"},
        "ANCLA-2": {"id": "ANCLA-2", "marca": "de_oido"},
        "SUP-OTRO": {"id": "SUP-OTRO", "marca": "supuesto"},
    }
    check("K03 caza ancla_ref inexistente",
          verificar_grafo_supuesto({"id": "S1", "ancla_ref": "NO-EXISTE",
                                    "vector": "punto_palanca", "que_lo_destruye": "x"}, idx), True)
    check("K03 caza torre de supuestos (profundidad > 1)",
          verificar_grafo_supuesto({"id": "S1", "ancla_ref": "SUP-OTRO",
                                    "vector": "punto_palanca", "que_lo_destruye": "x"}, idx), True)
    check("K03 caza auto-referencia",
          verificar_grafo_supuesto({"id": "SUP-OTRO", "ancla_ref": "SUP-OTRO",
                                    "vector": "punto_palanca", "que_lo_destruye": "x"}, idx), True)
    check("K03 caza vector fuera del enum cerrado",
          verificar_grafo_supuesto({"id": "S1", "ancla_ref": "ANCLA-1",
                                    "vector": "corazonada", "que_lo_destruye": "x"}, idx), True)
    check("K03 caza que_lo_destruye en blanco (solo espacios)",
          verificar_grafo_supuesto({"id": "S1", "ancla_ref": "ANCLA-1",
                                    "vector": "punto_palanca", "que_lo_destruye": "   "}, idx), True)
    check("K03 deja pasar supuesto bien anclado en un 'leido'",
          verificar_grafo_supuesto({"id": "S1", "ancla_ref": "ANCLA-1",
                                    "vector": "punto_palanca", "que_lo_destruye": "x"}, idx), False)

    # K04 ---------------------------------------------------------------
    par_a = {"id": "A", "funcion": "safekeeping", "pais": "LU", "espejo": "B"}
    par_b = {"id": "B", "funcion": "safekeeping", "pais": "CL", "espejo": "A"}
    check("K04 caza sin contraparte ni razon",
          verificar_espejo({"id": "A", "espejo": None}, {}), True)
    check("K04 caza espejo de otra funcion",
          verificar_espejo(par_a, {"A": par_a, "B": {**par_b, "funcion": "valorizacion"}}), True)
    check("K04 caza espejo del mismo pais",
          verificar_espejo(par_a, {"A": par_a, "B": {**par_b, "pais": "LU"}}), True)
    check("K04 deja pasar par valido",
          verificar_espejo(par_a, {"A": par_a, "B": par_b}), False)
    check("K04 deja pasar sin_contraparte declarado",
          verificar_espejo({"id": "A", "sin_contraparte": "no existe la figura"}, {}), False)

    # K05 -----------------------------------------------------------
    check("K05 caza cifra sin marca_visible",
          verificar_cifra_visible({"id": "N1", "afirmacion": "Hay 5500 vehiculos."}), True)
    check("K05 deja pasar cifra con marca_visible en true",
          verificar_cifra_visible({"id": "N1", "afirmacion": "Hay 5500 vehiculos.",
                                    "marca_visible": True}), False)
    check("K05 deja pasar afirmacion sin ninguna cifra",
          verificar_cifra_visible({"id": "N1", "afirmacion": "El depositario responde."}), False)

    # K06 -------------------------------------------------------------
    check("K06 caza 'UCITS V' sin fecha",
          verificar_fecha_ue({"id": "N1", "afirmacion": "UCITS V obliga al depositario."}), True)
    check("K06 caza 'AIFMD' sin fecha",
          verificar_fecha_ue({"id": "N1", "afirmacion": "AIFMD exige un depositario unico."}), True)
    check("K06 caza fecha cortada por un punto de abreviatura ('art.')",
          verificar_fecha_ue({"id": "N1",
                               "afirmacion": "AIFMD art. 3, version consolidada 2024-03-26."}), True)
    check("K06 deja pasar con fecha de version consolidada al lado",
          verificar_fecha_ue({"id": "N1",
                               "afirmacion": "AIFMD (version consolidada 2024-03-26) exige depositario."}),
          False)

    return malos


def main() -> int:
    if "--self-test" in sys.argv:
        print("K07 - autoprueba hermetica del arbitro (cero disco, cero red)")
        malos = self_test()
        if malos:
            print(f"\nSelf-test failed - {malos} caso(s) roto(s). El arbitro no es confiable asi.")
            return 1
        print("\nVERDE - el arbitro caza lo que tiene que cazar y no rechaza lo valido.")
        return 0

    ruta = REGISTRO_DEFAULT
    if "--registro" in sys.argv:
        ruta = sys.argv[sys.argv.index("--registro") + 1]

    if not os.path.exists(ruta):
        print(f"ROJO - no existe {ruta}. Fail-closed.", file=sys.stderr)
        return 1

    with open(ruta, encoding="utf-8") as fh:
        registro = yaml.safe_load(fh) or {}

    fallos = revisar_registro(registro)
    for x in fallos:
        print(" -", x)
    print(f"\nROJO - {len(fallos)} problema(s)." if fallos else "\nVERDE - todo dato pasa K01-K06.")
    return 1 if fallos else 0


if __name__ == "__main__":
    sys.exit(main())
