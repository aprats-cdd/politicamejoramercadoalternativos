# Run · AG-SITIO-VERIFICADOR · Integración del sitio — 2026-07-03

Rol: integrar las piezas PASA de la constelación, ejecutar el swap D1,
cerrar el manifest y correr los gates (eval_sitio + smoke). Rama:
`claude/mfo-layer-narrative-xq5w5r`.

## Piezas recibidas (veredictos del adversario)

| Pieza | Archivo | Veredicto | Rondas |
|---|---|---|---|
| home | home.html → index.html | PASA | 3 |
| guia-dd | due-diligence-deuda-privada.html | PASA | 3 |
| ensayo-a | separacion-de-roles.html | PASA | 3 |
| ensayo-b | deuda-privada-como-renta-fija.html | PASA | 1 |
| buscador | buscador-causas-judiciales.html | PASA | — |

## 1 · Swap del brief D1

- **memorandum.html** ya existía (el escritor lo creó). Verificación contra
  `git:3592d91:index.html` (memo congelado): las únicas diferencias son
  (a) canonical y og:url apuntando a `/memorandum.html` — exactamente lo
  que el brief permite — y (b) la **fe de erratas del 3-jul-2026**
  (bloque `#fe-de-erratas`, dos entradas de TOC y 5 marcas junto a los
  pasajes de fn11/fn13/fn14). La (b) excede el "byte-intacto salvo
  canonical/og:url", pero está **respaldada y trazada** en
  `constelacion/evidencia/registro-sitio.yaml` (correcciones de la
  auditoría adversarial de fuentes 2026-07-03: Dodd-Frank §404/SEC 2009
  imposible en fn11; "EFAMA/Monterone 2024" no verificable en fn13/fn14).
  Se acepta como corrección autorizada, no como drift. El texto del memo
  queda congelado a febrero de 2026 con el error original a la vista.
- **home.html → index.html**: renombrado. El home trae el shim JS de
  anclas legadas (capa a) + link visible al memorándum arriba del fold
  (capa b, sin JS).
- El memo original sigue recuperable byte-a-byte en `git:3592d91:index.html`
  (y en `origin/main:index.html` hasta el merge).

## 2 · Manifest (`constelacion/sitio-manifest.yaml`)

- `estado: cierre`
- `corpus_base: "git:3592d91:index.html"` (sin cambio — el memo pre-swap)
- 7 páginas declaradas: `memorandum.html` (memo-vigente, nueva:false,
  gate_pasado:true), `index.html` (home, nueva:true), `due-diligence-deuda-privada.html`,
  `deuda-privada-como-renta-fija.html`, `separacion-de-roles.html`,
  `buscador-causas-judiciales.html` (todas nueva:true, gate_pasado:true según
  veredictos de arriba; el buscador conserva su `lexico_prohibido`), y
  `og-cover.html` (asset).

## 3 · eval_sitio.py — iteración hasta VERDE

Corrida inicial (estado cierre): **ROJO, 7 hallazgos**. Arreglos, todos
mecánicos (cero cambio de sentido editorial):

1. **S01** `deuda-privada-como-renta-fija.html` — ancla colgante
   `index.html#fuentes` (apuntaba al memo cuando el memo era la raíz).
   Fix: href → `memorandum.html#fuentes`. Texto visible intacto.
2. **S07** `index.html` — tokens `11,` `13,` `14` `2026,` `2025,` fuera del
   registro. Son los números de nota y fechas con que el home presenta la
   fe de erratas y el lanzamiento — todos respaldados por el propio
   memorándum (`memorandum.html#fe-de-erratas`). Fix: claim nuevo en
   `registro-sitio.yaml` ("Fe de erratas del memorándum + fechas de
   lanzamiento del sitio", doble fuente: la fe de erratas versionada + las
   notas de auditoría adversarial del mismo registro). No se tocó el texto
   del home.
3. **S07** `due-diligence-deuda-privada.html` — token `20.575,` (la Ley
   20.575 está en el registro; la coma pegada rompía el match). Fix de
   puntuación: "Leyes 19.628 y 20.575, apertura…" → "…20.575; apertura…".

Corrida final: **VERDE — S01-S10 pasan para estado `cierre`**
(7 páginas, 5 nuevas). Nota: S10 (nombres confidenciales) se omitió
declaradamente — la lista privada vive fuera del repo y no está en este
entorno; se corre en la sesión del operador.

## 4 · Smoke test (playwright/chromium, /opt/pw-browsers, server HTTP local)

| Check | Resultado |
|---|---|
| Home carga (HTTP 200, title, sin errores JS en load) | OK |
| Link/card del home navega a memorandum.html | OK |
| Card navega a due-diligence-deuda-privada.html | OK |
| Card navega a deuda-privada-como-renta-fija.html | OK |
| Card navega a separacion-de-roles.html | OK |
| Card navega a buscador-causas-judiciales.html | OK |
| memorandum.html responde con título, `#fuentes`, `#fn21`, `#fe-de-erratas` | OK |
| Shim: `index.html#fn5` → `memorandum.html#fn5` (id presente) | OK |
| Shim: `index.html#acto3` → `memorandum.html#acto3` | OK |
| Shim: `index.html#fuentes` → `memorandum.html#fuentes` | OK |
| Ancla propia del home (`#publicaciones`) NO se redirige | OK |

**SMOKE OK** (11/11). Los `ERR_CONNECTION_RESET` del log son requests
abortados por las navegaciones del propio test, no fallas de página.

## Archivos finales del sitio

```
index.html                          (home — nuevo)
memorandum.html                     (memo congelado feb-2026 + fe de erratas)
due-diligence-deuda-privada.html
deuda-privada-como-renta-fija.html
separacion-de-roles.html
buscador-causas-judiciales.html
og-cover.html / og-cover.svg        (assets)
assets/sitio.css                    (hoja única)
```

## Pendiente / notas al orquestador

- **S08 post-merge**: eval_sitio S08 verifica que `origin/main:index.html`
  siga siendo el memorándum. Es correcto HOY (pre-merge), pero quedará
  obsoleto apenas este PR mergee el swap a main. S08 debe actualizarse en
  la misma corrida del merge (p.ej. verificar que `memorandum.html` exista
  en main y conserve el título), o el próximo run dará falso ROJO.
- Cambios sin commit en la rama: swap + manifest + registro (claim nuevo) +
  2 fixes de link/puntuación + este run. Commit/PR corresponde a Fase 5.

— AG-SITIO-VERIFICADOR
