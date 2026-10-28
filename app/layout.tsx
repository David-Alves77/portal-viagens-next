
import type { Metadata } from "next";
import Layout from "./components/Layout";

export const metadata: Metadata = {
  title: "Portal de Viagens",
  description: "Conheça destinos incríveis para sua próxima viagem.",
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

