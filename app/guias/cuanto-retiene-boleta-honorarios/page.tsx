import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";
import { buildGuidePageSchema, stringifyJsonLd } from "@/lib/schema";

const tool = getToolBySlug("calculadora-boleta-honorarios-chile")!;
const relatedGuides = GUIDES.filter((guide) =>
  [
    "retencion-boleta-honorarios-2026",
    "boleta-honorarios-retencion-porcentaje",
    "calcular-liquido-boleta-honorarios",
  ].includes(guide.slug),
);

const faqs = [
  { question: "¿Cómo sé si tengo deuda del Préstamo Solidario COVID?", answer: "Puedes verificar tu saldo en el sitio oficial del SII con tu RUT y clave tributaria. Si hay deuda activa, la retención aumenta en 3 puntos porcentuales." },
  { question: "¿La retención aplica siempre?", answer: "No en todos los casos. Boletas emitidas a personas naturales que no llevan contabilidad pueden estar exentas. Verifica con el SII si tu caso aplica." },
  { question: "¿La tasa cambia cada año?", answer: "La tasa fue subiendo paulatinamente desde 2017. Desde 2023 se estabilizó en 15,25% para el caso general según la Ley N° 21.133." },
];

const guideSchema = buildGuidePageSchema(faqs, [
  { name: "Inicio", path: "/" },
  { name: "Guías", path: "/guias" },
  { name: "¿Cuánto retiene la boleta de honorarios?", path: "/guias/cuanto-retiene-boleta-honorarios" },
]);

export const metadata: Metadata = {
  title: "¿Cuánto retiene la boleta de honorarios en Chile? — Herramientas Online",
  description:
    "La retención de boleta de honorarios en Chile en 2026 es 15,25% (general) o 18,25% (con deuda COVID). Calcula tu líquido gratis.",
  alternates: {
    canonical: "/guias/cuanto-retiene-boleta-honorarios",
  },
  openGraph: {
    title: "¿Cuánto retiene la boleta de honorarios en Chile?",
    description: "La retención de boleta de honorarios en Chile en 2026 es 15,25% (general) o 18,25% (con deuda COVID).",
    url: "/guias/cuanto-retiene-boleta-honorarios",
    siteName: "Herramientas Online",
    locale: "es_CL",
    type: "article",
  },
};

export default function CuantoRetieneBoletaHonorariosPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(guideSchema) }}
      />
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          ¿Cuánto retiene la boleta de honorarios?
        </h1>
        <p className="text-gray-600 leading-relaxed">
          La boleta de honorarios en Chile tiene una retención de impuesto que descuenta quien
          te paga. En 2026 hay dos tasas según tu situación.
        </p>

        <h2>Tasas de retención vigentes 2026</h2>
        <div className="not-prose overflow-x-auto my-4">
          <table className="text-sm w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-2 border border-gray-200">Situación</th>
                <th className="text-left px-4 py-2 border border-gray-200">Tasa</th>
                <th className="text-left px-4 py-2 border border-gray-200">Base legal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-200">General</td>
                <td className="px-4 py-2 border border-gray-200 font-semibold">15,25%</td>
                <td className="px-4 py-2 border border-gray-200">Ley N° 21.133</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-200">Con deuda Préstamo Solidario COVID</td>
                <td className="px-4 py-2 border border-gray-200 font-semibold">18,25%</td>
                <td className="px-4 py-2 border border-gray-200">Leyes 21.242 y 21.252</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>¿Cómo funciona la retención?</h2>
        <p>
          Cuando emites una boleta, quien te paga descuenta automáticamente el porcentaje de
          retención y lo entera al SII en tu nombre. Tú recibes el monto líquido (bruto menos
          retención). Ese impuesto retenido queda acreditado para tu declaración anual de renta.
        </p>

        <h2>Ejemplo</h2>
        <div className="not-prose my-4 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-2">Boleta por $200.000 — Tasa general</p>
          <ul className="text-sm text-green-700 space-y-1">
            <li>Retención 15,25%: $30.500</li>
            <li>Monto líquido: $169.500</li>
          </ul>
        </div>

        <p>
          <Link
            href={tool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Calcular retención y líquido →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿Cómo sé si tengo deuda del Préstamo Solidario COVID?</h3>
            <p>
              Puedes verificar tu saldo en el sitio oficial del SII con tu RUT y clave
              tributaria. Si hay deuda activa, la retención aumenta en 3 puntos porcentuales.
            </p>
          </div>
          <div>
            <h3>¿La retención aplica siempre?</h3>
            <p>
              No en todos los casos. Boletas emitidas a personas naturales que no llevan
              contabilidad pueden estar exentas. Verifica con el SII si tu caso aplica.
            </p>
          </div>
          <div>
            <h3>¿La tasa cambia cada año?</h3>
            <p>
              La tasa fue subiendo paulatinamente desde 2017. Desde 2023 se estabilizó en
              15,25% para el caso general según la Ley N° 21.133.
            </p>
          </div>
        </div>

        <h2>También te puede servir</h2>
        <ul>
          {relatedGuides.map((guide) => (
            <li key={guide.slug}>
              <Link href={guide.href}>{guide.title}</Link>
            </li>
          ))}
        </ul>

        <h2>Links relacionados</h2>
        <ul>
          <li>
            <Link href={tool.href}>{tool.title}</Link>
          </li>
          <li>
            <Link href="/herramientas">Ver herramientas disponibles</Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
