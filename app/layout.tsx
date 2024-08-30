import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrrat = Montserrat ({ subsets: ["latin"], weight:"700" });

export const metadata: Metadata = {
  title: "Luisi Decoraciones",
  description: "Construimos tus sueños en madera - Cortes a Medida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrrat.className}>{children}</body>
    </html>
  );
}
