import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeTetra | Build Intelligence",
  description: "Cinematic 3D Server Infrastructure for AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black text-white">
      <body>{children}</body>
    </html>
  );
}
