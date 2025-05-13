/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/frezza_nextjs_site", // Certifique-se que este é o nome do seu repositório
  assetPrefix: "/frezza_nextjs_site/", // Certifique-se que este é o nome do seu repositório
  eslint: {
    // ATENÇÃO: Adicione esta seção para ignorar erros do ESLint durante o build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
