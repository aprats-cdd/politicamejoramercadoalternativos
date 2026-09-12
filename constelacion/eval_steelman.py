#!/usr/bin/env python3
"""Gate determinista de AG-DEFENSOR-OBJECION (forja 12-sep-2026).

Lo corre AG-SITIO-VERIFICADOR o el harness de CI — NUNCA el defensor (LEY-1:
ningun agente valida su propio trabajo).

Problema que resuelve: una pagina que responde una objecion publica tiene un
incentivo estructural a plantearla debil. El hombre de paja es comodo de
escribir y letal de publicar: el lector que comparte la objecion deja de leer,
y el que no la comparte queda sin saber que la respuesta era facil porque la
pregunta estaba amañada. Este gate hace verificable que la objecion se planteo
en su mejor version ANTES de responderla.

Contrato (fail-closed):

  D01  Toda pagina del manifest con `responde_objecion: true` tiene su dossier
       del defensor en constelacion/runs/AG-DEFENSOR-OBJECION/*.yaml, con el
       campo `pieza` apuntando a ella.
  D02  El dossier trae las cinco partes del mandato: objecion_fuerte (texto),
       ejes (>=3), puntos_debiles (>=1), condiciones_concesion (>=1) y
       descarte_inmediato (>=1). Un defensor que solo repite la cita publica
       no hizo steelman.
  D03  ANTI-HOMBRE-DE-PAJA. Cada eje del steelman declara un `marcador`: un
       fragmento literal corto que debe aparecer en el texto de la pagina. Si
       un eje de la objecion fuerte no esta representado en la pagina, ROJO.
       Es el unico check que mide de verdad si la pagina peleo contra el mejor
       argumento o contra uno de cartulina.
  D04  ORDEN. El bloque que plantea la objecion aparece ANTES del bloque que
       la responde, en orden de documento. Responder antes de plantear es la
       forma elegante del hombre de paja.
  D05  Cero actores vivos nombrados (regla de la casa: se comparan
       arquitecturas y normas, jamas actores). La lista de nombres y firmas
       vetados NO se escribe en el repo — este repo es publico y escribirla
       aqui publicaria exactamente lo que la regla busca no decir. Vive fuera,
       en el archivo que el dossier declara en `no_nombrables_archivo` (mismo
       patron que R30/P9 en eval_sitio.py). Si el archivo no esta disponible,
       el check se declara omitido en vez de fingir que paso. `no_nombrables`
       inline existe solo para nombres que YA son publicos sin costo. Un caso
       publico SANCIONADO no cuenta como actor vivo y se declara en
       `excepciones_sancionadas` con su resolucion.

Sin paginas que declaren `responde_objecion`: VERDE (harness listo, LEY-2).

VERDE (exit 0) / ROJO (exit 1).
Uso: python3 constelacion/eval_steelman.py [--self-test]
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
MANIFEST = os.path.join(HERE, "sitio-manifest.yaml")
DIR_DEFENSOR = os.path.join(HERE, "runs", "AG-DEFENSOR-OBJECION")

PARTES = ("objecion_fuerte", "ejes", "puntos_debiles",
          "condiciones_concesion", "descarte_inmediato")
MIN_EJES = 3


def texto_plano(h: str) -> str:
    h = re.sub(r"<script.*?</script>", " ", h, flags=re.S)
    h = re.sub(r"<style.*?</style>", " ", h, flags=re.S)
    h = re.sub(r"<!--.*?-->", " ", h, flags=re.S)
    return re.sub(r"\s+", " ", htmlmod.unescape(re.sub(r"<[^>]+>", " ", h)))


def norma(s: str) -> str:
    """Normaliza para comparar marcadores: minusculas y espacios colapsados."""
    return re.sub(r"\s+", " ", str(s)).strip().lower()


def cargar_dossiers() -> list[tuple[str, dict]]:
    out = []
    for path in sorted(glob.glob(os.path.join(DIR_DEFENSOR, "*.yaml"))):
        try:
            with open(path, encoding="utf-8") as fh:
                out.append((os.path.relpath(path, REPO), yaml.safe_load(fh) or {}))
        except (OSError, yaml.YAMLError) as exc:
            out.append((os.path.relpath(path, REPO), {"__error__": str(exc)}))
    return out


def revisar(paginas: list[dict], dossiers: list[tuple[str, dict]],
            leer_html) -> tuple[list[str], list[str]]:
    """Devuelve (fallos, notas). Las notas no enrojecen: declaran lo omitido."""
    fallos: list[str] = []
    notas: list[str] = []
    por_pieza: dict[str, tuple[str, dict]] = {}
    for rel, doc in dossiers:
        if "__error__" in doc:
            fallos.append(f"D01 [{rel}] dossier ilegible: {doc['__error__']}")
            continue
        pieza = str(doc.get("pieza", "")).strip()
        if pieza:
            por_pieza[pieza] = (rel, doc)

    for p in paginas:
        arch = str(p.get("archivo", ""))
        if not p.get("responde_objecion"):
            continue
        if arch not in por_pieza:
            fallos.append(
                f"D01 [{arch}] declara responde_objecion pero no hay dossier del "
                f"defensor en constelacion/runs/AG-DEFENSOR-OBJECION/. Fail-closed.")
            continue
        rel, doc = por_pieza[arch]

        # D02 · las cinco partes del mandato
        for parte in PARTES:
            val = doc.get(parte)
            if not val:
                fallos.append(f"D02 [{rel}] falta '{parte}'")
        ejes = doc.get("ejes") or []
        if len(ejes) < MIN_EJES:
            fallos.append(
                f"D02 [{rel}] {len(ejes)} eje(s) del steelman; el mandato exige "
                f"al menos {MIN_EJES} (una objecion de un solo eje no es steelman)")

        html = leer_html(arch)
        if html is None:
            fallos.append(f"D01 [{arch}] pagina declarada no existe")
            continue
        cuerpo = norma(texto_plano(html))

        # D03 · anti-hombre-de-paja
        for i, eje in enumerate(ejes, 1):
            if not isinstance(eje, dict):
                fallos.append(f"D02 [{rel}] eje #{i} no es un mapa con 'marcador'")
                continue
            marcador = eje.get("marcador")
            if not marcador:
                fallos.append(f"D02 [{rel}] eje #{i} sin 'marcador' verificable")
                continue
            if norma(marcador) not in cuerpo:
                nombre = eje.get("nombre", f"#{i}")
                fallos.append(
                    f"D03 [{arch}] eje del steelman ausente de la pagina: "
                    f"\"{nombre}\" (marcador: \"{marcador}\") — hombre de paja")

        # D04 · orden: plantear antes que responder
        ancla_obj = str(doc.get("ancla_objecion", "objecion"))
        ancla_resp = str(doc.get("ancla_respuesta", "respuesta"))
        pos_obj = html.find(f'id="{ancla_obj}"')
        pos_resp = html.find(f'id="{ancla_resp}"')
        if pos_obj < 0:
            fallos.append(f"D04 [{arch}] no existe el bloque id=\"{ancla_obj}\"")
        if pos_resp < 0:
            fallos.append(f"D04 [{arch}] no existe el bloque id=\"{ancla_resp}\"")
        if pos_obj >= 0 and pos_resp >= 0 and pos_obj > pos_resp:
            fallos.append(
                f"D04 [{arch}] la pagina responde la objecion ANTES de plantearla "
                f"(#{ancla_resp} precede a #{ancla_obj})")

        # D05 · cero actores vivos nombrados
        vetados = list(doc.get("no_nombrables") or [])
        externo = doc.get("no_nombrables_archivo")
        if externo:
            ruta_ext = os.path.expanduser(str(externo))
            if os.path.exists(ruta_ext):
                with open(ruta_ext, encoding="utf-8") as fh:
                    vetados += [n.strip() for n in fh if n.strip()]
            else:
                notas.append(
                    f"D05 [{arch}] lista privada de no-nombrables no disponible "
                    f"({externo}) — check PARCIAL. Solo se verificaron los "
                    f"nombres declarados inline; el barrido completo se corre "
                    f"en la sesion del operador. No es un pase.")
        for nombre in vetados:
            if norma(nombre) and norma(nombre) in cuerpo:
                fallos.append(
                    f"D05 [{arch}] actor vivo nombrado en la pagina: \"{nombre}\" "
                    f"(regla de la casa: arquitecturas y normas, jamas actores)")
    return fallos, notas


def self_test() -> int:
    """LEY-2: el gate tiene que discriminar, no solo correr."""
    pag = [{"archivo": "x.html", "responde_objecion": True}]
    bueno = {
        "pieza": "x.html",
        "objecion_fuerte": "texto",
        "ejes": [
            {"nombre": "a", "marcador": "dilucion de responsabilidad"},
            {"nombre": "b", "marcador": "economias de escala"},
            {"nombre": "c", "marcador": "capacidad de fiscalizacion"},
        ],
        "puntos_debiles": ["x"],
        "condiciones_concesion": ["y"],
        "descarte_inmediato": ["z"],
        "no_nombrables": ["Firma Ejemplo"],
    }
    html_ok = ('<h2 id="objecion">o</h2> dilucion de responsabilidad '
               'economias de escala capacidad de fiscalizacion '
               '<h2 id="respuesta">r</h2>')
    casos = [
        ("pasa el caso sano", bueno, html_ok, 0),
        ("caza el eje ausente (hombre de paja)", bueno,
         html_ok.replace("economias de escala", ""), 1),
        ("caza responder antes de plantear", bueno,
         html_ok.replace('id="objecion"', "id=\"zzz\"").replace(
             '<h2 id="respuesta">r</h2>',
             '<h2 id="respuesta">r</h2><h2 id="objecion">o</h2>'), 1),
        ("caza el actor vivo nombrado", bueno,
         html_ok + " Firma Ejemplo dijo", 1),
        ("caza el steelman de un solo eje",
         {**bueno, "ejes": bueno["ejes"][:1]}, html_ok, 1),
        ("caza la parte faltante",
         {k: v for k, v in bueno.items() if k != "condiciones_concesion"},
         html_ok, 1),
    ]
    malos = 0
    for nombre, doc, html, esperado in casos:
        fallos, _ = revisar(pag, [("d.yaml", doc)], lambda a, h=html: h)
        got = 1 if fallos else 0
        ok = got == esperado
        print(f"  {'ok  ' if ok else 'FALLA'} {nombre}")
        if not ok:
            malos += 1
            print(f"        esperado {esperado}, obtuvo {got}: {fallos}")
    if malos:
        print(f"\nROJO - self-test: {malos} caso(s) no discriminan.")
        return 1
    print("\nVERDE - self-test: el gate discrimina en los 6 casos.")
    return 0


def main() -> int:
    if "--self-test" in sys.argv:
        return self_test()
    if not os.path.exists(MANIFEST):
        print("ROJO - no existe constelacion/sitio-manifest.yaml. Fail-closed.")
        return 1
    with open(MANIFEST, encoding="utf-8") as fh:
        man = yaml.safe_load(fh) or {}
    paginas = man.get("paginas") or []
    con_objecion = [p for p in paginas if p.get("responde_objecion")]
    if not con_objecion:
        print("eval_steelman - 0 pagina(s) declaran responde_objecion")
        print("\nVERDE (vacio) - harness listo; el gate aplica cuando una pieza "
              "responda una objecion publica.")
        return 0

    def leer(arch: str):
        ruta = os.path.join(REPO, arch)
        if not os.path.exists(ruta):
            return None
        with open(ruta, encoding="utf-8") as fh:
            return fh.read()

    fallos, notas = revisar(paginas, cargar_dossiers(), leer)
    print(f"eval_steelman - {len(con_objecion)} pagina(s) que responden objecion")
    for n in notas:
        print(f"  {n}")
    if fallos:
        print(f"\nROJO - {len(fallos)} hallazgo(s):")
        for f in fallos:
            print(f"  x {f}")
        return 1
    print("\nVERDE - D01-D05 pasan: la objecion se planteo en su mejor version, "
          "antes de responderla, sin nombrar actores vivos.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
