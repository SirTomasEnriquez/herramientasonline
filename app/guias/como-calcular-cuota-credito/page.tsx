import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";
import { buildGuidePageSchema, stringifyJsonLd } from "@/lib/schema";

const mainTool = getToolBySlug("simulador-credito")!;
const relatedGuides = GUIDES.filter((guide) =>
  [
    "simular-credito",
    "simulador-credito-consumo-chile",
    "simulador-credito-hipotecario",
  ].includes(guide.slug),
);

const faqs = [
  { question: "¿Qué es el sistema francés?", answer: "Es el método de amortización más usado en Chile. La cuota mensual es fija durante todo el crédito. Al principio pagas más intereses; al final, más capital." },
  { question: "¿Por qué cambia la cuota si la tasa es fija?", answer: "La cuota no cambia: siempre es el mismo valor. Lo que cambia internamente es cuánto de esa cuota va a intereses y cuánto a capital. Eso lo muestra la tabla de amortización." },
  { question: "¿Cómo reducir el costo total de un crédito?", answer: "Puedes acortar el plazo (cuota más alta, menos intereses totales) o hacer prepagos de capital cuando tengas liquidez. Verifica antes si tu crédito tiene comisión de prepago." },
  { question: "¿El simulador calcula créditos en UF?", answer: "El simulador trabaja con el monto que ingresas. Puedes convertir UF a pesos al valor del día y usar la tasa mensual en pesos para estimar la cuota equivalente." },
];

const guideSchema = buildGuidePageSchema(faqs, [
  { name: "Inicio", path: "/" },
  { name: "Guías", path: "/guias" },
  { name: "Cómo calcular la cuota de un crédito", path: "/guias/como-calcular-cuota-credito" },
]);

export const metadata: Metadata = {
  title: "Cómo calcular la cuota de un crédito — Herramientas Online",
  description:
    "Aprende a calcular la cuota mensual de un crédito con la fórmula del sistema francés. Incluye ejemplo paso a paso y simulador gratuito.",
  alternates: {
    canonical: "/guias/como-calcular-cuota-credito",
  },
  openGraph: {
    title: "Cómo calcular la cuota de un crédito",
    description: "Aprende a calcular la cuota mensual de un crédito con la fórmula del sistema francés. Incluye ejemplo paso a paso y simulador gratuito.",
    url: "/guias/como-calcular-cuota-credito",
    siteName: "Herramientas Online",
    locale: "es_CL",
    type: "article",
  },
};

export default function ComoCalcularCuotaCreditoPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(guideSchema) }}
      />
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Cómo calcular la cuota de un crédito
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Saber calcular la cuota de un crédito permite evaluar si el compromiso mensual calza con
          tu presupuesto antes de firmar. La fórmula es sencilla y el simulador la aplica
          automáticamente.
        </p>

        <h2>La fórmula de la cuota mensual</h2>
        <p>
          La mayoría de los créditos en Chile usan el <strong>sistema francés</strong>: cuota fija
          durante todo el plazo. La fórmula es:
        </p>
        <div className="not-prose my-4 rounded-xl bg-gray-100 border border-gray-200 px-5 py-4 font-mono text-sm text-gray-700">
          Cuota = Monto × [i × (1 + i)^n] / [(1 + i)^n − 1]
        </div>
        <ul>
          <li><strong>Monto:</strong> capital solicitado.</li>
          <li><strong>i:</strong> tasa de interés mensual (en decimal, ej: 2% = 0,02).</li>
          <li><strong>n:</strong> número total de cuotas.</li>
        </ul>
        <p>
          Aunque la cuota es fija, su composición cambia: al principio pagas más intereses y menos
          capital; con el tiempo, cada cuota amortiza más capital. Esto se ve en la tabla de
          amortización.
        </p>

        <h2>Ejemplo paso a paso</h2>
        <div className="not-prose my-4 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-2">Datos</p>
          <ul className="text-sm text-green-700 space-y-1">
            <li><strong>Monto:</strong> $1.000.000</li>
            <li><strong>Tasa mensual:</strong> 2% → i = 0,02</li>
            <li><strong>Plazo:</strong> 12 cuotas → n = 12</li>
          </ul>
        </div>
        <p>Aplicando la fórmula:</p>
        <div className="not-prose my-4 rounded-xl bg-gray-100 border border-gray-200 px-5 py-4 font-mono text-sm text-gray-700">
          Cuota = 1.000.000 × [0,02 × (1,02)^12] / [(1,02)^12 − 1]<br />
          Cuota = 1.000.000 × [0,02 × 1,2682] / [1,2682 − 1]<br />
          Cuota = 1.000.000 × 0,02536 / 0,2682<br />
          Cuota ≈ $94.560
        </div>
        <p>
          En 12 cuotas pagas un total de ~$1.134.720. Los intereses son ~$134.720, es decir, el
          13,5% del monto original.
        </p>

        <h2>Tasa mensual vs. tasa anual</h2>
        <p>
          Los bancos suelen publicar tasas anuales, pero la fórmula requiere tasa mensual. Para
          convertir de anual a mensual puedes dividir por 12 (aproximación) o usar la tasa efectiva
          mensual equivalente:
        </p>
        <div className="not-prose my-4 rounded-xl bg-gray-100 border border-gray-200 px-5 py-4 font-mono text-sm text-gray-700">
          Tasa mensual = (1 + tasa anual)^(1/12) − 1
        </div>
        <p>
          Por ejemplo, una tasa anual de 24% equivale a 1,81% mensual (efectiva), no exactamente
          2%. La diferencia acumulada en 12 meses puede ser relevante.
        </p>

        <h2>Qué muestra la tabla de amortización</h2>
        <p>
          La tabla de amortización detalla cada cuota con su desglose:
        </p>
        <ul>
          <li><strong>Cuota:</strong> pago mensual fijo.</li>
          <li><strong>Interés:</strong> porción que va al banco ese mes.</li>
          <li><strong>Capital amortizado:</strong> porción que reduce la deuda.</li>
          <li><strong>Saldo pendiente:</strong> lo que queda por pagar.</li>
        </ul>
        <p>
          El simulador genera esta tabla completa para que puedas ver exactamente cómo evoluciona
          tu deuda mes a mes.
        </p>

        <p>
          <Link
            href={mainTool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Calcular cuota con el simulador →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿Qué es el sistema francés?</h3>
            <p>
              Es el método de amortización más usado en Chile. La cuota mensual es fija durante
              todo el crédito. Al principio pagas más intereses; al final, más capital.
            </p>
          </div>
          <div>
            <h3>¿Por qué cambia la cuota si la tasa es fija?</h3>
            <p>
              La cuota no cambia: siempre es el mismo valor. Lo que cambia internamente es cuánto
              de esa cuota va a intereses y cuánto a capital. Eso lo muestra la tabla de
              amortización.
            </p>
          </div>
          <div>
            <h3>¿Cómo reducir el costo total de un crédito?</h3>
            <p>
              Puedes acortar el plazo (cuota más alta, menos intereses totales) o hacer prepagos
              de capital cuando tengas liquidez. Verifica antes si tu crédito tiene comisión de
              prepago.
            </p>
          </div>
          <div>
            <h3>¿El simulador calcula créditos en UF?</h3>
            <p>
              El simulador trabaja con el monto que ingresas. Puedes convertir UF a pesos al
              valor del día y usar la tasa mensual en pesos para estimar la cuota equivalente.
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
            <Link href={mainTool.href}>{mainTool.title}</Link>
          </li>
          <li>
            <Link href="/herramientas">Ver herramientas disponibles</Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
