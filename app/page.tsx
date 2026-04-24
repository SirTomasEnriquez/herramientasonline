import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Toolbox</h1>
        <p className="text-gray-500 mb-8">Herramientas para emprendedores</p>
        <Link
          href="/herramientas/generador-link-whatsapp"
          className="inline-block rounded-lg bg-green-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-600 transition-colors"
        >
          Generador de link de WhatsApp
        </Link>
      </div>
    </main>
  );
}
