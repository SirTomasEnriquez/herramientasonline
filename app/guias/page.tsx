import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guías — Herramientas Online",
  description:
    "Guías prácticas para calcular IVA, boletas de honorarios, simular créditos y crear links de WhatsApp. Para emprendedores en Chile.",
  alternates: {
    canonical: "/guias",
  },
  openGraph: {
    title: "Guías — Herramientas Online",
    description:
      "Guías prácticas para calcular IVA, boletas de honorarios, simular créditos y crear links de WhatsApp.",
    url: "/guias",
    siteName: "Herramientas Online",
    locale: "es_CL",
    type: "website",
  },
};

const clusters = [
  {
    title: "IVA Chile",
    slugs: [
      "calcular-iva-chile",
      "calcular-iva-desde-monto-neto",
      "calcular-iva-desde-monto-bruto",
      "calcular-iva-19-porciento-chile",
      "como-calcular-precio-con-iva",
      "como-calcular-neto-desde-bruto",
      "cuanto-es-el-iva-en-chile",
      "formula-del-iva-chile",
    ],
  },
  {
    title: "Boleta de Honorarios",
    slugs: [
      "boleta-honorarios-chile",
      "retencion-boleta-honorarios-2026",
      "calcular-liquido-boleta-honorarios",
      "cuanto-retiene-boleta-honorarios",
      "como-calcular-boleta-honorarios-liquido",
      "boleta-honorarios-retencion-porcentaje",
    ],
  },
  {
    title: "Simulador de Crédito",
    slugs: [
      "simular-credito",
      "simulador-credito-consumo-chile",
      "simulador-credito-hipotecario",
      "como-calcular-cuota-credito",
    ],
  },
  {
    title: "Link de WhatsApp",
    slugs: [
      "como-hacer-link-de-whatsapp",
      "link-whatsapp-con-mensaje",
      "crear-link-whatsapp-para-instagram",
      "whatsapp-link-generator",
    ],
  },
];

export default function GuiasIndexPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">Guías</h1>
          <p className="text-base text-gray-500">
            Guías prácticas con fórmulas, ejemplos y respuestas a las preguntas más frecuentes.
          </p>
        </div>

        <div className="space-y-10">
          {clusters.map((cluster) => {
            const guides = GUIDES.filter((g) => cluster.slugs.includes(g.slug));
            return (
              <section key={cluster.title}>
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  {cluster.title}
                </h2>
                <div className="space-y-2">
                  {guides.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={guide.href}
                      className="flex items-center justify-between bg-white rounded-xl border border-gray-100 px-5 py-4 hover:border-green-200 hover:shadow-sm transition-all group"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-800 group-hover:text-green-600 transition-colors">
                          {guide.title}
                        </p>
                        <p className="text-sm text-gray-400 mt-0.5">{guide.description}</p>
                      </div>
                      <span className="text-gray-300 group-hover:text-green-400 transition-colors ml-4 shrink-0">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            href="/herramientas"
            className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
          >
            Ver todas las herramientas →
          </Link>
        </div>
      </div>
    </main>
  );
}
