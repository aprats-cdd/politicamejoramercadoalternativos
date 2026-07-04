#!/usr/bin/env python3
"""Gate determinista del MOTOR EDITORIAL (forja 03-jul-2026).

Gatea cada publicación nueva (opinión, hipótesis, ensayo) contra la voz de la
casa (constelacion/voz-de-la-casa.md, spec propiedad de AG-SITIO-ESCRITOR). Lo
corre AG-SITIO-VERIFICADOR; ni el escritor ni ningún agente se auto-validan.
Fail-closed.

DISEÑO (post-DD adversarial, 4 fixes aplicados):
  - NO re-implementa la muletilla "no es X — es Y": eso lo gatea S04 de
    eval_sitio.py (dueño único; dos gates que puedan discrepar = drift). Acá
    solo van checks NUEVOS que ningún gate vigente cubre.
  - La hipótesis falsable se valida sobre YAML ESTRUCTURADO
    (hipotesis-publicadas.yaml), no sobre prosa HTML (LEY-2: un check debe
    correr de verdad, no ser un regex frágil).
  - proof-first es un proxy ADVISORY declarado (el orden del argumento no se
    mide sin teatro; la citabilidad de cifras ya la gatea S07 de eval_sitio).
  - Cierre del loop de mejora AUDITABLE: toda objeción real no anticipada
    registrada por el calibrador debe tener su tripwire commiteado después.

Manifests que lee (todos opcionales → sin ellos, VERDE: harness listo, LEY-2):
  editorial-manifest.yaml      piezas editoriales {archivo,tipo,techo,modo}
  hipotesis-publicadas.yaml    ledger falsable (aserción+horizonte+falsador+estado)
  calibracion-editorial.yaml   ledger del loop (objeción no anticipada → tripwire)

Checks:
  E01 tesis declarada (pieza-bajada no vacía)                      · hard/advisory
  E02 hipótesis falsable: la pieza referencia un HIP del ledger y
      ese HIP tiene aserción+horizonte+falsador                    · hard
  E03 método / gap-analysis presente                              · hard/advisory
  E04 declaración de interés presente                             · hard/advisory
  E06 sin jerga (denylist de anglicismos/jerga de IA)             · hard/advisory
  E07 sin vaguedades (denylist de relleno/hedges)                 · hard/advisory
  E08 breve (conteo bajo el techo por tipo)                       · hard/advisory
  E09 proof-first: cifra/cita en el primer tercio                 · advisory (proxy)
  H01 integridad del ledger de hipótesis (3 campos + estado)      · hard
  L01 cierre de loop: objeción no anticipada → tripwire posterior · hard
"""
from __future__ import annotations
import html as htmlmod
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
MANIFEST = os.path.join(HERE, "editorial-manifest.yaml")
VOZ = os.path.join(HERE, "voz-de-la-casa.md")
LEDGER_HIP = os.path.join(HERE, "hipotesis-publicadas.yaml")
LEDGER_CAL = os.path.join(HERE, "calibracion-editorial.yaml")

# Jerga: anglicismos gratuitos + jerga de IA/tech (cocina interna que jamás va
# a la pieza). El banquero de un MFO chileno no los usa en una nota a un cliente.
JERGA = [
    "buyer-back", "run-rate", "run rate", "deep-dive", "deep dive", "spine",
    "harness", "pipeline", "constelación de agentes", "storytelling",
    "framework", "insight", "deliverable", "leverage",
]
# Vaguedad: relleno y hedges (frases, no palabras sueltas — "podría" solo es
# legítimo: "un aportante podría exigir").
VAGUEDAD = [
    "en cierto sentido", "de alguna manera", "de algún modo", "cabe señalar",
    "cabe destacar", "es importante destacar", "es importante mencionar",
    "por así decirlo", "dicho esto", "en cierta medida", "grosso modo",
    "en general se puede", "por lo general",
]
TECHO_DEFECTO = {"opinion": 1100, "hipotesis": 1300, "ensayo": 2600}


def texto_plano(h: str) -> str:
    h = re.sub(r"<script.*?</script>", " ", h, flags=re.S)
    h = re.sub(r"<style.*?</style>", " ", h, flags=re.S)
    return htmlmod.unescape(re.sub(r"<[^>]+>", " ", h))


def cuerpo(h: str) -> str:
    return texto_plano(re.split(r'class="fuentes"|id="fuentes"|id="notas"', h)[0])


def cargar(path):
    if not os.path.exists(path):
        return None
    with open(path, encoding="utf-8") as fh:
        return yaml.safe_load(fh) or {}


def check_pieza(entry, hip_ids):
    duros, adv = [], []
    arch = entry.get("archivo", "")
    tipo = entry.get("tipo", "ensayo")
    bucket = duros if entry.get("modo", "hard") == "hard" else adv
    ruta = os.path.join(REPO, arch)
    if not os.path.exists(ruta):
        return ([f"E00 [{arch}] pieza declarada no existe"], [])
    with open(ruta, encoding="utf-8") as fh:
        h = fh.read()
    c = cuerpo(h)
    low = c.lower()

    baj = re.search(r'class="pieza-bajada"[^>]*>(.*?)</p>', h, re.S)
    if not baj or len(texto_plano(baj.group(1)).strip()) < 20:
        bucket.append(f"E01 [{arch}] sin tesis declarada (pieza-bajada vacía/ausente)")

    if tipo == "hipotesis":
        ref = re.search(r'data-hip="(HIP-[0-9A-Za-z-]+)"', h)
        if not ref:
            bucket.append(f"E02 [{arch}] pieza-hipótesis sin data-hip=\"HIP-…\" que ancle al ledger")
        elif ref.group(1) not in hip_ids:
            bucket.append(f"E02 [{arch}] data-hip \"{ref.group(1)}\" no existe en hipotesis-publicadas.yaml")

    if 'id="metodo"' not in h and "método de esta página" not in low and "lo que no sé" not in low:
        bucket.append(f"E03 [{arch}] sin método / gap-analysis")
    if 'id="declaracion"' not in h and 'class="interes"' not in h and "declaración de interés" not in low:
        bucket.append(f"E04 [{arch}] sin declaración de interés")

    for j in JERGA:
        if re.search(r"(?<![\w-])" + re.escape(j) + r"(?![\w-])", low):
            bucket.append(f"E06 [{arch}] jerga/anglicismo: \"{j}\"")
    for v in VAGUEDAD:
        if v in low:
            bucket.append(f"E07 [{arch}] relleno/vaguedad: \"{v}\"")

    techo = entry.get("techo_palabras") or TECHO_DEFECTO.get(tipo, 2600)
    n = len(re.findall(r"\w+", c))
    if n > techo:
        bucket.append(f"E08 [{arch}] {n} palabras > techo {techo} ({tipo})")

    if not re.search(r"\d", c[: max(1, len(c) // 3)]):
        adv.append(f"E09 [{arch}] proof-first (proxy): sin cifra/cita en el primer tercio")

    # E10 · muletilla afirmación-primero "X, no [de/un/una/por] Y" — SIEMPRE
    # ADVISORY. Tripwire nacido de la corrida 1 (el adversario cazó
    # "estructura y disciplina, no de permiso especial" que S04 —que solo mira
    # negación-primero "no es X, es Y"— dejó pasar). No es hard: la frontera
    # juicio/hecho usa la familia legítimamente ("una apuesta, no un dato"), y
    # un gate determinista sobre el tono false-positivearía la agudeza. Marca
    # para revisión humana, no bloquea. Ver calibracion-editorial.yaml.
    for m in re.finditer(r"[a-záéíóúñ]{3,},\s+no\s+(?:de|un|una|por|para)\b", low):
        adv.append(f"E10 [{arch}] muletilla afirmación-primero (revisar humano): \"{m.group(0)[:50].strip()}\"")

    # E11 · claim multiplicativo ("N veces más/menos/mayor/menor") — SIEMPRE
    # ADVISORY. Tripwire nacido de la corrida 2 (ensayo "palanca del
    # patrimonio"): el adversario cazó "dos a tres veces … un décimo" — la mitad
    # ÷ un décimo = 5×, no 2-3×; el múltiplo enunciado NO ataba con los pesos que
    # la propia prosa declaraba, y el harness no lo vio. Un gate no computa
    # fracciones-en-palabras sin teatro; marca todo múltiplo para que el humano
    # verifique que ata con los rangos/pesos que la pieza enuncia. No bloquea:
    # un múltiplo puede ser correcto. Ver calibracion-editorial.yaml.
    for m in re.finditer(r"\b\w+\s+veces\s+(?:m[áa]s|menos|mayor|menor)\b", low):
        adv.append(f"E11 [{arch}] claim multiplicativo (verificar que ata con los rangos): \"{m.group(0)[:50].strip()}\"")
    return (duros, adv)


def main() -> int:
    if not os.path.exists(VOZ):
        print("ROJO - falta voz-de-la-casa.md (la spec de voz). Fail-closed.")
        return 1

    hip = cargar(LEDGER_HIP) or {}
    hip_list = hip.get("hipotesis") or []
    hip_ids = {x.get("id") for x in hip_list if isinstance(x, dict)}
    duros, adv = [], []

    # H01 · integridad del ledger de hipótesis (estructura chequeable, LEY-2)
    for x in hip_list:
        hid = x.get("id", "<sin-id>")
        for campo in ("asercion", "horizonte", "falsador", "estado"):
            if not x.get(campo):
                duros.append(f"H01 [{hid}] falta campo obligatorio '{campo}'")
        if x.get("estado") not in (None, "viva", "confirmada", "falsada"):
            duros.append(f"H01 [{hid}] estado inválido: {x.get('estado')}")
        if x.get("estado") in ("confirmada", "falsada") and not x.get("evidencia"):
            duros.append(f"H01 [{hid}] outcome '{x.get('estado')}' sin evidencia (track-record honesto)")

    # L01 · cierre de loop auditable: toda objeción no anticipada tiene tripwire
    cal = cargar(LEDGER_CAL)
    if cal:
        for e in cal.get("entradas") or []:
            if e.get("objecion_no_anticipada") and not e.get("tripwire_ref"):
                duros.append(f"L01 [{e.get('pieza','?')}] objeción no anticipada sin tripwire commiteado "
                             f"— el loop de mejora no cerró (inauditable)")

    # Piezas
    man = cargar(MANIFEST)
    piezas = (man or {}).get("piezas") or []
    for e in piezas:
        d, a = check_pieza(e, hip_ids)
        duros.extend(d)
        adv.extend(a)

    if not piezas and not hip_list and not cal:
        print("VERDE - spec de voz presente; sin piezas/hipótesis/calibración todavía. "
              "Harness listo (LEY-2). La 1ª pieza editorial lo activa.")
        return 0

    print(f"eval_editorial · {len(piezas)} pieza(s) · {len(hip_list)} hipótesis en ledger")
    if adv:
        print(f"advisory · {len(adv)} (no bloquean — pre-spec / proof-first proxy):")
        for a in adv:
            print(f"  · {a}")
    if duros:
        print(f"\nROJO - {len(duros)} hallazgo(s) duros:")
        for d in duros:
            print(f"  x {d}")
        return 1
    print("\nVERDE - checks duros pasan (E01-E08, H01, L01); E09 advisory.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
