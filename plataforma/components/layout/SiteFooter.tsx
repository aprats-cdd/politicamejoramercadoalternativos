import { URL_ENSAYO } from "@/lib/secciones";

export function SiteFooter() {
  return (
    <footer className="border-t border-regla-suave py-12 text-sm text-gris">
      <div className="mx-auto max-w-3xl space-y-4 px-5">
        <p>
          Publicado por Andrés Prats, a título personal. Quien publica esto es socio fundador de un gestor de
          deuda privada que opera en Chile y tiene interés económico directo en la regla que aquí se compara.
          Esta plataforma describe un proyecto de ley en tramitación y no recomienda aprobarlo ni rechazarlo.
        </p>
        <p>
          No constituye asesoría legal ni de inversión, ni recomendación de instrumento alguno. Las cifras llevan
          su nivel de evidencia a la vista; las que no alcanzan el estándar de la casa se muestran como
          «por verificar» y no como número.
        </p>
        <p>
          <a href={URL_ENSAYO} className="text-acento underline underline-offset-4">
            El ensayo que origina esta plataforma
          </a>{" "}
          · <a href="#metodo" className="text-acento underline underline-offset-4">Método y fuentes</a>
        </p>
      </div>
    </footer>
  );
}
