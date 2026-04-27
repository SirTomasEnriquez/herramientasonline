import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";
import { buildGuidePageSchema, stringifyJsonLd } from "@/lib/schema";

const tool = getToolBySlug("calculadora-boleta-honorarios-chile")!;
const relatedGuides = GUIDES.filter((guide) =>
  [
    "boleta-honorarios-chile",
    "cuanto-retiene-boleta-honorarios",
    "boleta-honorarios-retencion-porcentaje",
  ].includes(guide.slug),
);

const faqs = [
  { question: "¿Cuál es la tasa de retención en 2026?", answer: "15,25% según la Ley N° 21.133. Para quienes tienen deuda del Préstamo Solidario COVID, la tasa es 18,25%." },
  { question: "¿El impuesto retenido se pierde?", answer: "No. Queda acreditado a tu nombre y puedes usarlo al hacer la declaración anual de renta (Formulario 22)." },
  { question: "¿Esta calculadora reemplaza asesoría contable?", answer: "No. Es una referencia para cálculos simples. Para casos con retención especial o exenciones, consulta con un contador o el SII." },
  { question: "¿Cómo calculo cuánto debo emitir para recibir un líquido exacto?", answer: "Divide el líquido que quieres recibir por 0,8475. Ejemplo: para recibir $100.000, debes emitir $100.000 / 0,8475 ≈ $118.033." },
];

const guideSchema = buildGuidePageSchema(faqs, [
  { name: "Inicio", path: "/" },
  { name: "Guías", path: "/guias" },
  { name: "Calcular el monto líquido de una boleta de honorarios", path: "/guias/calcular-liquido-boleta-honorarios" },
]);

export const metadata: Metadata = {
  title: "Calcular el monto líquido de una boleta de honorarios — Herramientas Online",
  description:
    "Calcula cuánto recibirás en tu boleta de honorarios después de la retención. Fórmula simple con la tasa 2026 del SII.",
  alternates: {
    canonical: "/guias/calcular-liquido-boleta-honorarios",
  },
  openGraph: {
    title: "Calcular el monto líquido de una boleta de honorarios",
    description: "Calcula cuánto recibirás en tu boleta de honorarios después de la retención. Tasa SII 2026: 15,25%.",
    url: "/guias/calcular-liquido-boleta-honorarios",
    siteName: "Herramientas Online",
    locale: "es_CL",
    type: "article",
  },
};

export default function CalcularLiquidoBoletaHonorariosPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(guideSchema) }}
      />
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Calcular el monto líquido de una boleta de honorarios
        </h1>
        <p className="text-gray-600 leading-relaxed">
          El monto líquido es lo que efectivamente recibes al emitir una boleta de honorarios,
          después de descontar el impuesto retenido. En 2026 la tasa general es 15,25%.
        </p>

        <h2>La fórmula</h2>
        <div className="not-prose my-4 rounded-xl bg-gray-100 border border-gray-200 px-5 py-4 font-mono text-sm text-gray-700">
          Líquido = Bruto × (1 − 0,1525)<br />
          Líquido = Bruto × 0,8475
        </div>

        <h2>Ejemplo práctico</h2>
        <div className="not-prose my-4 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-2">Ejemplo — Tasa general 15,25%</p>
          <ul className="text-sm text-green-700 space-y-1">
            <li>Monto bruto: $100.000</li>
            <li>Retención (15,25%): $15.250</li>
            <li>Monto líquido: $84.750</li>
          </ul>
          <p className="text-sm text-green-700 mt-2 font-mono">$100.000 × 0,8475 = $84.750</p>
        </div>

        <h2>Si tienes deuda del Préstamo Solidario COVID</h2>
        <p>
          La tasa sube a 18,25%. El cálculo cambia:
        </p>
        <div className="not-prose my-4 rounded-xl bg-gray-100 border border-gray-200 px-5 py-4 font-mono text-sm text-gray-700">
          Líquido = Bruto × 0,8175
        </div>
        <p className="text-sm text-gray-500">
          Ejemplo: $100.000 × 0,8175 = $81.750 líquido.
        </p>

        <p>
          <Link
            href={tool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Calcular líquido con la calculadora →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿Cuál es la tasa de retención en 2026?</h3>
            <p>
              15,25% según la Ley N° 21.133. Para quienes tienen deuda del Préstamo Solidario
              COVID, la tasa es 18,25%.
            </p>
          </div>
          <div>
            <h3>¿El impuesto retenido se pierde?</h3>
            <p>
              No. Queda acreditado a tu nombre y puedes usarlo al hacer la declaración anual
              de renta (Formulario 22).
            </p>
          </div>
          <div>
            <h3>¿Esta calculadora reemplaza asesoría contable?</h3>
            <p>
              No. Es una referencia para cálculos simples. Para casos con retención especial
              o exenciones, consulta con un contador o el SII.
            </p>
          </div>
          <div>
            <h3>¿Cómo calculo cuánto debo emitir para recibir un líquido exacto?</h3>
            <p>
              Divide el líquido que quieres recibir por 0,8475. Ejemplo: para recibir $100.000,
              debes emitir $100.000 / 0,8475 ≈ $118.033.
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
