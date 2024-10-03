import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import BotonWhatsApp from "./components/BotonWhatsApp";

const montserrrat = Montserrat ({ subsets: ["latin"], weight:"700" });

export const metadata: Metadata = {
  title: "Luisi Decoraciones - Cortes a Medida",
  description: "Muebles personalizados a medida para tu hogar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="./logo.svg" type="image/svg+xml"/>
      </head>
      <body className={montserrrat.className}>
        {children}
        <BotonWhatsApp />
      </body>
      
    </html>
  );
}
