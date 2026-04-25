import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toolbox — Herramientas para emprendedores",
  description: "Micro-herramientas web gratuitas para emprendedores. Sin registro, sin fricción.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
          <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors">
              Toolbox
            </Link>
            <nav className="flex items-center gap-5">
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Inicio
              </Link>
              <Link href="/herramientas" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Herramientas
              </Link>
            </nav>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <footer className="border-t border-gray-100 bg-white">
          <div className="max-w-2xl mx-auto px-4 py-6">
            <p className="text-sm text-gray-400">Herramientas simples para tareas reales.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
