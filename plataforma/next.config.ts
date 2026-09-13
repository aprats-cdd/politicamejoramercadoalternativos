import type { NextConfig } from "next";

/**
 * La plataforma se exporta como sitio estático (carpeta `out/`) para poder
 * publicarse junto al sitio actual en GitHub Pages sin servidor.
 *
 * `NEXT_PUBLIC_BASE_PATH` permite montarla bajo una sub-ruta, por ejemplo
 * `/politicamejoramercadoalternativos/plataforma`. Vacío = raíz del dominio.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
