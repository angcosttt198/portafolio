
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio Profesional",
  description: "Portafolio académico y profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
