import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Herramientas disponibles — Toolbox",
  description:
    "Herramientas diseñadas para resolver cálculos y tareas comunes de forma rápida. Sin registro, sin fricción.",
};

const TOOLS = [
  {
    href: "/herramientas/generador-link-whatsapp",
    title: "Generador link de WhatsApp",
    description: "Crea un enlace directo para que te escriban por WhatsApp",
  },
  {
    href: "/herramientas/calculadora-iva-chile",
    title: "Calculadora IVA Chile",
    description: "Calcula el IVA 19% desde monto neto o bruto",
  },
  {
    href: "/herramientas/calculadora-boleta-honorarios-chile",
    title: "Calculadora Boleta de Honorarios Chile",
    description: "Calcula cuánto recibirás o cuánto debes emitir en tu boleta",
  },
];

export default function HerramientasPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Herramientas disponibles
          </h1>
          <p className="text-lg text-gray-500">
            Herramientas diseñadas para resolver cálculos y tareas comunes de forma rápida.
            Sin registro, sin fricción.
          </p>
        </div>

        {/* Tools list */}
        <div className="space-y-3">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="flex items-center justify-between bg-white rounded-xl border border-gray-100 px-5 py-4 hover:border-green-200 hover:shadow-sm transition-all group"
            >
              <div>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                  {tool.title}
                </p>
                <p className="text-sm text-gray-500 mt-0.5">{tool.description}</p>
              </div>
              <span className="text-gray-300 group-hover:text-green-400 transition-colors ml-4 shrink-0">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
