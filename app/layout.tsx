import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gosto Thérapie — Retrouvez votre équilibre intérieur",
  description:
    "Accompagnement thérapeutique professionnel et bienveillant. Thérapie individuelle, gestion de l'anxiété, développement personnel et thérapie de couple à Paris.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
