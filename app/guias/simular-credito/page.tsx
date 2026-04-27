import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";
import { buildGuidePageSchema, stringifyJsonLd } from "@/lib/schema";

const mainTool = getToolBySlug("simulador-credito")!;
const relatedTool = getToolBySlug("calculadora-iva-chile")!;
const relatedGuides = GUIDES.filter((guide) =>
  [
    "simulador-credito-consumo-chile",
    "simulador-credito-hipotecario",
    "como-calcular-cuota-credito",
  ].includes(guide.slug),
);

const faqs = [
  { question: "¿Qué es una tabla de amortización?", answer: "Es el detalle mes a mes de cada pago: cuánto corresponde a interés, cuánto a capital y cuál es el saldo pendiente después de cada cuota." },
  { question: "¿La cuota simulada es igual a lo que me cobrará el banco?", answer: "No necesariamente. La simulación calcula solo capital e intereses. El banco puede agregar seguros, comisiones y otros costos que aumentan la cuota real. Compara siempre el CAE para una comparación completa." },
  { question: "¿Cuándo conviene simular antes de pedir un crédito?", answer: "Siempre. Simular te permite comparar distintos plazos, ver cómo cambia la cuota y el costo total, y verificar que el compromiso cabe en tu flujo de caja antes de firmar cualquier contrato." },
  { question: "¿Por qué al inicio de un crédito se paga más interés?", answer: "Porque el interés se calcula sobre el saldo pendiente. Al principio debes más, así que el interés es mayor. A medida que amortizas capital, el saldo baja y el interés de cada cuota también baja — aunque la cuota total permanece igual." },
];

const guideSchema = buildGuidePageSchema(faqs, [
  { name: "Inicio", path: "/" },
  { name: "Guías", path: "/guias" },
  { name: "Cómo simular un crédito", path: "/guias/simular-credito" },
]);

export const metadata: Metadata = {
  title: "Cómo simular un crédito — Cuota, intereses y tabla de amortización",
  description:
    "Aprende a simular un crédito en Chile: fórmula del sistema francés, cómo leer una tabla de amortización y qué tener en cuenta antes de endeudarte.",
  alternates: {
    canonical: "/guias/simular-credito",
  },
  openGraph: {
    title: "Cómo simular un crédito — Cuota, intereses y tabla de amortización",
    description: "Aprende a simular un crédito en Chile: fórmula del sistema francés, cómo leer una tabla de amortización y qué tener en cuenta antes de endeudarte.",
    url: "/guias/simular-credito",
    siteName: "Herramientas Online",
    locale: "es_CL",
    type: "article",
  },
};

export default function SimularCreditoGuidePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(guideSchema) }}
      />
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Cómo simular un crédito y entender una tabla de amortización
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Simular un crédito antes de solicitarlo permite ver cuánto pagarás de cuota mensual,
          cuánto corresponde a intereses y cuándo terminarás de pagar. Con esa información puedes
          evaluar si el flujo de caja de tu negocio o tu ingreso personal soporta el compromiso
          antes de firmar con una institución financiera.
        </p>

        <h2>¿Qué es una simulación de crédito?</h2>
        <p>
          Es una estimación matemática de las condiciones de un préstamo. Dado un monto, una tasa
          de interés y un plazo en meses, la simulación calcula la cuota mensual fija y muestra
          cómo se distribuye cada pago entre capital e intereses a lo largo del tiempo. En Chile,
          la mayoría de los créditos de consumo e hipotecarios operan bajo el <strong>sistema
          francés</strong>, donde la cuota es constante pero la proporción de interés y capital
          varía en cada período.
        </p>

        <h2>La fórmula del sistema francés</h2>
        <p>
          La cuota mensual fija se calcula con la siguiente fórmula:
        </p>
        <pre className="bg-gray-100 rounded-lg px-4 py-3 text-sm overflow-x-auto">
{`C = P × [r × (1 + r)^n] / [(1 + r)^n − 1]

Donde:
  C = cuota mensual
  P = monto del préstamo (capital)
  r = tasa de interés mensual (tasa anual / 12)
  n = número de cuotas (meses)`}
        </pre>
        <p className="text-sm text-gray-500 mt-2">
          Si la tasa anual es 12%, la tasa mensual es 1% (0,01). Si es 24% anual, la mensual es 2%.
        </p>

        <h2>Ejemplo con números reales</h2>
        <div className="my-6 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-2">
            Crédito de $1.000.000 a 12 meses al 1% mensual
          </p>
          <p className="text-sm text-green-700 mb-1">Cuota mensual: ~$88.849</p>
          <p className="text-sm text-green-700 mb-1">Total pagado: ~$1.066.190</p>
          <p className="text-sm text-green-700">Intereses totales: ~$66.190</p>
        </div>

        <h2>¿Cómo leer una tabla de amortización?</h2>
        <p>
          La tabla de amortización desglosa cada cuota en sus componentes:
        </p>
        <ul>
          <li>
            <strong>Cuota:</strong> el monto total que pagas ese mes (siempre igual en sistema
            francés).
          </li>
          <li>
            <strong>Interés:</strong> la parte que va al costo del préstamo. Al inicio es mayor
            porque el saldo pendiente es más alto.
          </li>
          <li>
            <strong>Capital:</strong> la parte que reduce tu deuda. Al inicio es menor; crece a
            medida que avanzas en el plazo.
          </li>
          <li>
            <strong>Saldo pendiente:</strong> cuánto debes todavía después de cada pago.
          </li>
        </ul>
        <p>
          Esta estructura explica por qué prepagar las primeras cuotas ahorra mucho más interés
          que prepagar las últimas.
        </p>

        <h2>Tipos de crédito que puedes simular</h2>
        <ul>
          <li>
            <strong>Crédito de consumo:</strong> plazos cortos (12 a 60 meses), tasas más altas.
            Útil para comprar equipos, financiar stock o cubrir capital de trabajo.
          </li>
          <li>
            <strong>Crédito hipotecario:</strong> plazos largos (10 a 30 años), tasas menores.
            Para adquirir una propiedad o local comercial.
          </li>
        </ul>
        <p>
          La lógica del cálculo es la misma en ambos casos — cambian el monto, el plazo y la
          tasa de interés.
        </p>

        <h2>Lo que el simulador no incluye</h2>
        <p>
          Una simulación estándar calcula solo capital e intereses. Los créditos reales pueden
          incluir costos adicionales que eleven el monto efectivo:
        </p>
        <ul>
          <li>Seguros (vida, cesantía, incendio en hipotecarios).</li>
          <li>Comisiones de otorgamiento o administración.</li>
          <li>CAE (Carga Anual Equivalente), que incorpora todos los costos del crédito.</li>
        </ul>
        <p>
          Siempre compara el CAE entre instituciones — no solo la tasa nominal — antes de
          tomar una decisión.
        </p>

        <h2>Cuándo usar la herramienta</h2>
        <p>
          Usa el simulador antes de solicitar un crédito, al comparar ofertas de distintos bancos
          o cuando necesitas saber si una cuota cabe en tu presupuesto. El resultado es referencial
          y no reemplaza la oferta formal de la institución financiera.
        </p>

        <p>
          <Link
            href={mainTool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Usar simulador de crédito →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿Qué es una tabla de amortización?</h3>
            <p>
              Es el detalle mes a mes de cada pago: cuánto corresponde a interés, cuánto a capital
              y cuál es el saldo pendiente después de cada cuota.
            </p>
          </div>
          <div>
            <h3>¿La cuota simulada es igual a lo que me cobrará el banco?</h3>
            <p>
              No necesariamente. La simulación calcula solo capital e intereses. El banco puede
              agregar seguros, comisiones y otros costos que aumentan la cuota real. Compara
              siempre el CAE para una comparación completa.
            </p>
          </div>
          <div>
            <h3>¿Cuándo conviene simular antes de pedir un crédito?</h3>
            <p>
              Siempre. Simular te permite comparar distintos plazos, ver cómo cambia la cuota y
              el costo total, y verificar que el compromiso cabe en tu flujo de caja antes de
              firmar cualquier contrato.
            </p>
          </div>
          <div>
            <h3>¿Por qué al inicio de un crédito se paga más interés?</h3>
            <p>
              Porque el interés se calcula sobre el saldo pendiente. Al principio debes más, así
              que el interés es mayor. A medida que amortizas capital, el saldo baja y el interés
              de cada cuota también baja — aunque la cuota total permanece igual.
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
            <Link href={relatedTool.href}>{relatedTool.title}</Link>
          </li>
          <li>
            <Link href="/herramientas">Ver todas las herramientas</Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
