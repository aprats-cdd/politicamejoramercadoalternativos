import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Proveedores } from "@/components/layout/Proveedores";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chile ↔ Luxemburgo · Dos maneras de armar un fondo",
  description:
    "Plataforma interactiva que compara cómo Chile y Luxemburgo reparten cuatro funciones de un fondo: decidir, administrar, custodiar y valorizar. Roles, regulación y cifras con su evidencia a la vista.",
  authors: [{ name: "Andrés Prats" }],
  openGraph: {
    title: "Chile ↔ Luxemburgo · Dos maneras de armar un fondo",
    description:
      "Compara, pieza por pieza, cómo cada país reparte decidir, administrar, custodiar y valorizar un fondo.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh">
        <a className="salto-contenido" href="#contenido">
          Ir al contenido
        </a>
        <Proveedores>
          <ScrollProgress />
          <SiteNav />
          <main id="contenido">{children}</main>
          <SiteFooter />
        </Proveedores>
      </body>
    </html>
  );
}
