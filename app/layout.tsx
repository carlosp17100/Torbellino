import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Torbellino - UMNG",
  description: "El Torbellino: Identidad y Movimiento. Universidad Militar Nueva Granada.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
