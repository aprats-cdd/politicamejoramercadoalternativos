# Forja · Juez de clase mundial del sitio

**Fecha:** 12-sep-2026 · **Origen:** encargo del CEO en sesión ·
**Objeto:** `index.html` (`#figura`) y `objeciones.html` ·
**Neto nuevo:** 1 rol (`AG-SITIO-JUEZ-CLASE-MUNDIAL`) + 1 prompt canónica
(`constelacion/prompts/eval-juez-clase-mundial.md`).

## Qué pidió el dueño

> «Necesito un Eval de esta página. Quienes auditan: el mejor diseñador de
> páginas web del mundo. Esto es un artefacto moderno, hecho para ser masivo.
> No es lobby. Esta página la podría haber hecho el equipo de Apple con Steve
> Jobs. En diseño, narrativa. [...] La tesis central: explicar en simple y
> claro por qué la separación funcional de roles es fundamental. Lo más
> importante: esta página y sus cuñas se harán virales, famosa entre
> políticos, think tanks, profesores de universidad, equipos de inversiones,
> abogados.»

## Encuadre (antes de forjar)

- **Tipo.** Eval de juicio sobre una página pública que ya pasó sus gates
  deterministas.
- **Objetivo, no verbo.** Medir la distancia entre la página y la mejor página
  posible sobre el tema, y devolver cierres ruteados al rol que los cierra.
- **Cuello.** La primera lectura de cuatro minutos de un lector ajeno a la
  industria: si no repite la tesis con sus palabras, nada más importa.
- **Busca antes de crear.** Existe y se reusa, no se re-crea: seis gates
  deterministas (S01-S08, X01-X09, P01-P04, L01-L04, E01-E11, D01-D05), el
  adversario (hechos, norma, aludido), el panel de lectores (qué falta para
  decidir), la capa de experiencia (mecánica móvil medida en render). En el
  catálogo canónico de Cordada, el especialista de diseño es de decks y el de
  prensa aporta el framework de ocho dimensiones por cuña, que acá se adapta.
  En ningún catálogo existe un juez de diseño y narrativa de página pública ni
  un test de cuñas y audiencias. Ese es el hueco; solo eso se forja.
- **Gate independiente.** La salida del juez ES el examen de la pieza. Al
  informe lo gatea el verificador (sobre YAML, nueve secciones, evidencia por
  puntaje, cero actores vivos) y el adversario audita severidad.
- **Output y firma.** El run se commitea. Todo cierre que toque una pieza
  publicada es checkpoint del CEO.

## Decisiones de diseño del eval

1. **La vara se traduce, no se copia.** De Apple se hereda la disciplina
   (sustracción, jerarquía, oficio en el detalle, inevitabilidad del orden);
   no el lenguaje visual ni el tono comercial. La voz de la casa manda.
2. **Dos varas que se cruzan, no se suman.** Vara Jobs (diseño y narrativa,
   21 puntos) y Vara Masiva (registro, anti-lobby, cuñas, audiencias,
   superficie de compartir, 15 puntos). Ninguna dimensión bajo 2.
3. **Cuatro vetos** que fuerzan NO-PASA aunque el puntaje alcance: tesis no
   reproducible por el lector ajeno · descartable como lobby en 30 segundos ·
   sobreafirmación en cuña o titular · superficie pública que contradice la
   pieza.
4. **Evals de stakeholder** para las cinco audiencias, cada una con su
   reacción #1 (rechazo) y #2 (adopción) por defecto.
5. **No duplica el harness.** Lo que un gate determinista debió atrapar se
   reporta aparte como fuga, con el ID del gate.
6. **Aislamiento.** El juez recibe solo la URL, sus superficies alcanzables y
   la prompt. Nunca este run ni los de otros roles.

## Observaciones previas, fuera del eval (no van al juez)

Encontradas al preparar la prompt. Quedan acá para que no se pierdan y para
calibrar al juez cuando corra:

- `og-cover.html` sigue publicado con la portada del memorándum anterior
  (composición del financiamiento en banca, «0 fund administrators», plazo
  «sin Congreso»). La raíz retiró toda cifra de mercado y el proyecto sí va
  por el Congreso. No está enlazado, pero es alcanzable: dispararía V4.
  Retirarlo o redirigirlo es edición de superficie publicada, checkpoint del
  CEO.
- La bajada abre con «No llegó por su plata. Llegó por una regla legal»:
  patrón negación-afirmación en dos oraciones, fuera del alcance de S04. Un
  juez de registro lo marcará bajo B4. El texto publicado no se reescribe por
  esto solo.

## Estado y próximo paso

Rol en `estado: propuesta`. Se promueve a `activa` con la primera corrida
aislada (informe en `runs/AG-SITIO-JUEZ-CLASE-MUNDIAL/`) y el accept del CEO
sobre el veredicto. Gates de la constelación en verde tras el registro del
rol (`eval_constelacion.py`, C01-C06).
