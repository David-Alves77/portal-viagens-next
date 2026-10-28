
import type { Metadata } from "next";
import Layout from "./components/Layout";

export const metadata: Metadata = {
  title: "Portal de Viagens",
  description: "ConheÃ§a destinos incrÃ­veis para sua prÃ³xima viagem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}


