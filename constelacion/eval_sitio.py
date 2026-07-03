#!/usr/bin/env python3
"""Gate determinista de la CONSTELACION DEL SITIO (forja 03-jul-2026).

Lee constelacion/sitio-manifest.yaml (lo mantiene AG-SITIO-VERIFICADOR) y
verifica, fail-closed:

  S01  paginas declaradas existen; links locales entre paginas resuelven a
       paginas declaradas o assets existentes; anclas internas resuelven.
       Cross-link = claim: enlazar una pagina nueva cuyo gate del adversario
       no esta registrado (gate_pasado) es falla cuando estado == cierre.
  S02  footnotes integras por pagina (toda ref href="#fnN" tiene su nota y
       toda nota es referenciada).
  S03  metadata por pagina no-asset: <title>, canonical, JSON-LD con
       datePublished y dateModified.
  S04  estilo (solo paginas nueva:true): muletilla prohibida por el CEO
       ("no es X — es Y" y variantes correctivas) = 0 ocurrencias.
  S05  gate del aludido registrado: en estado cierre, toda pagina nueva
       tiene gate_pasado:true (veredicto escrito del adversario en runs/).
       Ademas, si existe constelacion/aludido-lexico.yaml, su denylist
       tiene 0 ocurrencias en paginas nuevas.
  S06  no-reutilizacion (paginas nueva:true): % de shingles (8 palabras)
       compartidos con el corpus base (manifest.corpus_base, formato
       git:<rev>:<path>) bajo el umbral (default 2%). El texto de la
       seccion de fuentes se excluye (las citas son evidencia, no artefacto).
  S07  cifras respaldadas (paginas nueva:true): todo token numerico del
       cuerpo (excluida la seccion de fuentes) debe estar en el registro
       del auditor constelacion/evidencia/registro-sitio.yaml (claims con
       doble fuente o marca ilustrativa).
  S08  continuidad (P11): la rama actual no es main, y el index.html de
       origin/main sigue siendo el memorandum vigente.

Sin manifest: ROJO (fail-closed). Uso: python3 constelacion/eval_sitio.py
"""
from __future__ import annotations
import html as htmlmod
import os
import re
import subprocess
import sys

try:
    import yaml
except ImportError:
    print("ROJO - falta pyyaml. Fail-closed.", file=sys.stderr)
    sys.exit(1)

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
MANIFEST = os.path.join(HERE, "sitio-manifest.yaml")
REGISTRO = os.path.join(HERE, "evidencia", "registro-sitio.yaml")
LEXICO = os.path.join(HERE, "aludido-lexico.yaml")

NUM_RE = re.compile(r"\d[\d.,]*")
MULETILLA_RES = [
    re.compile(r"[Nn]o es(?:t[aá]n?)?\s[^.;:!?\n]{1,70}?[—–\-:;]\s*(?:es|son)\b"),
    re.compile(r"[Nn]o se trata de[^.\n]{1,90}?se trata de"),
    re.compile(r"[Nn]o\s+[^,;.\n]{2,60},\s*sino\b"),
]


def texto_plano(html: str) -> str:
    html = re.sub(r"<script.*?</script>", " ", html, flags=re.S)
    html = re.sub(r"<style.*?</style>", " ", html, flags=re.S)
    html = re.sub(r"<!--.*?-->", " ", html, flags=re.S)
    return htmlmod.unescape(re.sub(r"<[^>]+>", " ", html))


def sin_fuentes(html: str) -> str:
    """Corta la seccion de fuentes/footnotes (citas = evidencia, no artefacto)."""
    return re.split(r'(?:class="fuentes"|class="footnotes-section"|id="fuentes")', html)[0]


def shingles(texto: str, n: int = 8) -> set[tuple]:
    palabras = re.findall(r"[a-záéíóúñü]+", texto.lower())
    return {tuple(palabras[i:i + n]) for i in range(max(0, len(palabras) - n + 1))}


def git_show(ref: str) -> str:
    try:
        return subprocess.run(["git", "-C", REPO, "show", ref], capture_output=True,
                              text=True, check=True).stdout
    except subprocess.CalledProcessError:
        return ""


def main() -> int:
    if not os.path.exists(MANIFEST):
        print("ROJO - S01: no existe constelacion/sitio-manifest.yaml. Fail-closed.")
        return 1
    with open(MANIFEST, encoding="utf-8") as fh:
        man = yaml.safe_load(fh) or {}
    estado = man.get("estado", "pre-produccion")
    paginas = man.get("paginas") or []
    fallos: list[str] = []
    htmls: dict[str, str] = {}
    por_archivo = {p.get("archivo"): p for p in paginas}

    # S01 — existencia + links + anclas
    for p in paginas:
        arch = p.get("archivo", "")
        ruta = os.path.join(REPO, arch)
        if not os.path.exists(ruta):
            fallos.append(f"S01 [{arch}] pagina declarada no existe")
            continue
        with open(ruta, encoding="utf-8") as fh:
            htmls[arch] = fh.read()
    declarados = set(por_archivo)
    for arch, html in htmls.items():
        ids = set(re.findall(r'id="([^"]+)"', html)) | set(re.findall(r'data-tab="([^"]+)"', html))
        for href in re.findall(r'href="([^"]+)"', html):
            if href.startswith(("http://", "https://", "mailto:", "data:")):
                continue
            destino, _, ancla = href.partition("#")
            if destino:
                if destino not in declarados and not os.path.exists(os.path.join(REPO, destino)):
                    fallos.append(f"S01 [{arch}] link roto: {href}")
                elif destino in declarados and estado == "cierre":
                    pd = por_archivo[destino]
                    if pd.get("nueva") and not pd.get("gate_pasado"):
                        fallos.append(f"S01 [{arch}] cross-link a pieza sin gate: {destino}")
                if destino in htmls and ancla:
                    ids_d = set(re.findall(r'id="([^"]+)"', htmls[destino])) | set(
                        re.findall(r'data-tab="([^"]+)"', htmls[destino]))
                    if ancla not in ids_d:
                        fallos.append(f"S01 [{arch}] ancla colgante: {href}")
            elif ancla and ancla not in ids:
                fallos.append(f"S01 [{arch}] ancla colgante: #{ancla}")

    # S02 — footnotes por pagina
    for arch, html in htmls.items():
        refs = set(re.findall(r'href="#(fn\d+)"', html))
        notas = set(re.findall(r'<li[^>]*id="(fn\d+)"', html))
        for r in sorted(refs - notas):
            fallos.append(f"S02 [{arch}] fn-ref colgante: #{r}")
        for n in sorted(notas - refs):
            fallos.append(f"S02 [{arch}] footnote huerfana: #{n}")

    # S03 — metadata por pagina no-asset
    for p in paginas:
        arch = p.get("archivo", "")
        if p.get("tipo") == "asset" or arch not in htmls:
            continue
        html = htmls[arch]
        if "<title>" not in html:
            fallos.append(f"S03 [{arch}] falta <title>")
        if 'rel="canonical"' not in html:
            fallos.append(f"S03 [{arch}] falta canonical")
        j = re.search(r'<script type="application/ld\+json">(.*?)</script>', html, re.S)
        if not j:
            fallos.append(f"S03 [{arch}] falta JSON-LD")
        else:
            for clave in ('"datePublished"', '"dateModified"'):
                if clave not in j.group(1):
                    fallos.append(f"S03 [{arch}] JSON-LD sin {clave}")

    nuevas = [p for p in paginas if p.get("nueva") and p.get("archivo") in htmls]

    # S04 — muletilla prohibida en paginas nuevas
    for p in nuevas:
        arch = p["archivo"]
        cuerpo = texto_plano(sin_fuentes(htmls[arch]))
        for rx in MULETILLA_RES:
            for m in rx.finditer(cuerpo):
                fallos.append(f"S04 [{arch}] muletilla prohibida: \"{m.group(0)[:70].strip()}\"")

    # S05 — gate del aludido registrado + denylist lexica
    if estado == "cierre":
        for p in nuevas:
            if not p.get("gate_pasado"):
                fallos.append(f"S05 [{p['archivo']}] pagina nueva sin veredicto PASA del adversario (gate_pasado)")
    if os.path.exists(LEXICO):
        with open(LEXICO, encoding="utf-8") as fh:
            lex = yaml.safe_load(fh) or {}
        for term in lex.get("denylist") or []:
            for p in nuevas:
                if term.lower() in texto_plano(htmls[p["archivo"]]).lower():
                    fallos.append(f"S05 [{p['archivo']}] termino de denylist presente: {term}")

    # S06 — no-reutilizacion contra corpus base
    corpus_ref = man.get("corpus_base", "")
    if nuevas and corpus_ref.startswith("git:"):
        _, rev, path = corpus_ref.split(":", 2)
        corpus = git_show(f"{rev}:{path}")
        if not corpus:
            fallos.append(f"S06 corpus base ilegible: {corpus_ref}. Fail-closed.")
        else:
            sh_corpus = shingles(texto_plano(sin_fuentes(corpus)))
            umbral = float(man.get("umbral_similitud", 0.02))
            for p in nuevas:
                sh_p = shingles(texto_plano(sin_fuentes(htmls[p["archivo"]])))
                if sh_p:
                    ratio = len(sh_p & sh_corpus) / len(sh_p)
                    if ratio > umbral:
                        fallos.append(f"S06 [{p['archivo']}] reutilizacion sobre umbral: {ratio:.1%} de shingles compartidos (max {umbral:.0%})")
    elif nuevas and not corpus_ref:
        fallos.append("S06 hay paginas nuevas y el manifest no declara corpus_base. Fail-closed.")

    # S07 — cifras respaldadas en el registro del auditor
    if nuevas:
        tokens_ok: set[str] = set()
        if os.path.exists(REGISTRO):
            with open(REGISTRO, encoding="utf-8") as fh:
                reg = yaml.safe_load(fh) or {}
            for i, c in enumerate(reg.get("claims") or [], 1):
                respaldo = (c.get("fuente_1") and c.get("fuente_2")) or c.get("ilustrativo") is True
                if not respaldo:
                    fallos.append(f"S07 registro-sitio.yaml#c{i} claim sin doble fuente ni marca ilustrativa")
                    continue
                tokens_ok.update(NUM_RE.findall(str(c.get("texto", ""))))
        else:
            con_cifras = [p["archivo"] for p in nuevas
                          if NUM_RE.search(texto_plano(sin_fuentes(htmls[p["archivo"]])))]
            if con_cifras:
                fallos.append(f"S07 paginas nuevas con cifras y sin registro de evidencia: {', '.join(con_cifras)}. Fail-closed.")
        if os.path.exists(REGISTRO):
            for p in nuevas:
                for tok in NUM_RE.findall(texto_plano(sin_fuentes(htmls[p["archivo"]]))):
                    if tok not in tokens_ok:
                        fallos.append(f"S07 [{p['archivo']}] cifra '{tok}' fuera del registro del auditor")

    # S08 — continuidad de main (P11)
    try:
        rama = subprocess.run(["git", "-C", REPO, "rev-parse", "--abbrev-ref", "HEAD"],
                              capture_output=True, text=True, check=True).stdout.strip()
        if rama == "main":
            fallos.append("S08 trabajando directo sobre main (prohibido: PR draft)")
        main_index = git_show("origin/main:index.html")
        if main_index and "Memorándum de Política Pública" not in main_index:
            fallos.append("S08 origin/main:index.html ya no es el memorandum vigente")
    except subprocess.CalledProcessError:
        fallos.append("S08 no se pudo verificar la rama (git). Fail-closed.")

    print(f"eval_sitio - estado '{estado}' · {len(paginas)} pagina(s) declaradas · {len(nuevas)} nueva(s)")
    if fallos:
        print(f"\nROJO - {len(fallos)} hallazgo(s):")
        for f in fallos:
            print(f"  x {f}")
        return 1
    print("\nVERDE - S01-S08 pasan para el estado declarado.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
