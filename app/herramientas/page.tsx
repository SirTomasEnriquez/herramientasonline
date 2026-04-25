import type { Metadata } from "next";
import Link from "next/link";
import { TOOLS } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Herramientas disponibles — Toolbox",
  description:
    "Herramientas diseñadas para resolver cálculos y tareas comunes de forma rápida. Sin registro, sin fricción.",
};

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
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {tool.title}
                  </p>
                  <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full">
                    {tool.category}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{tool.description}</p>
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
