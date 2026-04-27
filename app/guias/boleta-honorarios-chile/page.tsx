import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";
import { buildGuidePageSchema, stringifyJsonLd } from "@/lib/schema";

const mainTool = getToolBySlug("calculadora-boleta-honorarios-chile")!;
const relatedTool = getToolBySlug("calculadora-iva-chile")!;
const relatedGuides = GUIDES.filter((guide) =>
  [
    "retencion-boleta-honorarios-2026",
    "calcular-liquido-boleta-honorarios",
    "cuanto-retiene-boleta-honorarios",
    "como-calcular-boleta-honorarios-liquido",
  ].includes(guide.slug),
);

const faqs = [
  { question: "¿Cuál es la retención de boleta de honorarios en Chile 2026?", answer: "La tasa general es 15,25% según la Ley N° 21.133. Para quienes tienen deuda del Préstamo Solidario COVID, la tasa sube a 18,25%." },
  { question: "¿Qué diferencia hay entre monto bruto y monto líquido?", answer: "El monto bruto es el total de la boleta. El monto líquido es lo que efectivamente recibes después de descontar la retención de impuesto." },
  { question: "¿El impuesto retenido se pierde?", answer: "No. Queda acreditado a tu nombre y se descuenta en tu declaración anual de renta. Dependiendo de tu nivel de ingresos, puede darte derecho a devolución." },
  { question: "¿Esta calculadora reemplaza asesoría contable?", answer: "No. Sirve para cálculos referenciales con la tasa oficial SII 2026. Para resolver casos con retenciones especiales o situaciones tributarias particulares, consulta con un contador." },
];

const guideSchema = buildGuidePageSchema(faqs, [
  { name: "Inicio", path: "/" },
  { name: "Guías", path: "/guias" },
  { name: "Cómo calcular una boleta de honorarios en Chile", path: "/guias/boleta-honorarios-chile" },
]);

export const metadata: Metadata = {
  title: "Cómo calcular una boleta de honorarios en Chile — Guía 2026",
  description:
    "Aprende a calcular el monto bruto, la retención y el monto líquido de una boleta de honorarios en Chile con la tasa SII 2026: 15,25%.",
  alternates: {
    canonical: "/guias/boleta-honorarios-chile",
  },
  openGraph: {
    title: "Cómo calcular una boleta de honorarios en Chile",
    description: "Aprende a calcular el monto bruto, la retención y el monto líquido de una boleta de honorarios en Chile con la tasa SII 2026: 15,25%.",
    url: "/guias/boleta-honorarios-chile",
    siteName: "Herramientas Online",
    locale: "es_CL",
    type: "article",
  },
};

export default function BoletaHonorariosChileGuidePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(guideSchema) }}
      />
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Cómo calcular una boleta de honorarios en Chile
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Una boleta de honorarios tiene tres valores clave: monto bruto, retención de impuesto y
          monto líquido. Para trabajadores independientes y emprendedores, entender cómo se
          relacionan estos valores evita errores al acordar pagos y al emitir documentos en el SII.
        </p>

        <h2>¿Qué es una boleta de honorarios?</h2>
        <p>
          Es el documento que emiten los trabajadores independientes para cobrar servicios
          profesionales en Chile. A diferencia de una factura, no incluye IVA — en su lugar, aplica
          una retención de impuesto que quien paga entrega directamente al SII. Tú recibes el monto
          líquido y el impuesto retenido queda acreditado a tu nombre para la declaración anual.
        </p>

        <h2>La fórmula de la retención</h2>
        <p>
          La tasa general de retención para 2026 es <strong>15,25%</strong>, según la Ley N° 21.133.
        </p>

        <p className="font-semibold text-gray-700 mb-1">Desde monto bruto:</p>
        <pre className="bg-gray-100 rounded-lg px-4 py-3 text-sm overflow-x-auto">
{`Retención = Bruto × 0,1525
Líquido   = Bruto × 0,8475`}
        </pre>

        <p className="font-semibold text-gray-700 mb-1 mt-4">Desde monto líquido deseado:</p>
        <pre className="bg-gray-100 rounded-lg px-4 py-3 text-sm overflow-x-auto">
{`Bruto     = Líquido / 0,8475
Retención = Bruto − Líquido`}
        </pre>

        <h2>Ejemplo con números reales</h2>
        <div className="my-6 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-2">Ejemplo 1 — desde bruto</p>
          <p className="text-sm text-green-700 mb-3">
            Boleta por $100.000 → retención $15.250 → recibes $84.750
          </p>
          <p className="text-sm text-green-800 font-medium mb-2">Ejemplo 2 — desde líquido</p>
          <p className="text-sm text-green-700">
            Quiero recibir $100.000 → debo emitir por $118.343 → retención $18.343
          </p>
        </div>

        <h2>Caso especial: Préstamo Solidario COVID</h2>
        <p>
          Quienes tienen deuda pendiente del Préstamo Solidario (Leyes 21.242 y 21.252) tienen
          una retención adicional del 3%, llevando la tasa total a <strong>18,25%</strong> hasta
          que salden el préstamo.
        </p>
        <pre className="bg-gray-100 rounded-lg px-4 py-3 text-sm overflow-x-auto">
{`Retención = Bruto × 0,1825
Líquido   = Bruto × 0,8175`}
        </pre>
        <p className="text-sm text-gray-500 mt-2">
          Puedes verificar si tienes deuda pendiente en el sitio oficial del SII.
        </p>

        <h2>¿Qué incluye el impuesto retenido?</h2>
        <p>
          La retención de la boleta de honorarios corresponde al impuesto de segunda categoría
          sobre los ingresos de los trabajadores independientes. No es un descuento perdido — se
          acredita íntegramente en tu declaración anual de renta (Formulario 22) y puede darte
          derecho a devolución dependiendo de tu situación tributaria.
        </p>

        <h2>¿Cuándo no aplica la retención?</h2>
        <p>
          En algunos casos, quien paga no retiene el impuesto — por ejemplo, cuando el pagador es
          una persona natural que no lleva contabilidad. En esos casos, el trabajador independiente
          debe declarar y pagar el impuesto directamente. Consulta con un contador si tienes dudas
          sobre tu situación específica.
        </p>

        <h2>Cuándo usar la calculadora</h2>
        <p>
          Usa la calculadora antes de emitir una boleta para saber exactamente cuánto recibirás,
          o cuando necesitas saber qué bruto emitir para recibir un líquido específico. Es
          especialmente útil al negociar tarifas con clientes.
        </p>

        <p>
          <Link
            href={mainTool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Usar calculadora de boleta de honorarios →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿Cuál es la retención de boleta de honorarios en Chile 2026?</h3>
            <p>
              La tasa general es 15,25% según la Ley N° 21.133. Para quienes tienen deuda del
              Préstamo Solidario COVID, la tasa sube a 18,25%.
            </p>
          </div>
          <div>
            <h3>¿Qué diferencia hay entre monto bruto y monto líquido?</h3>
            <p>
              El monto bruto es el total de la boleta. El monto líquido es lo que efectivamente
              recibes después de descontar la retención de impuesto.
            </p>
          </div>
          <div>
            <h3>¿El impuesto retenido se pierde?</h3>
            <p>
              No. Queda acreditado a tu nombre y se descuenta en tu declaración anual de renta.
              Dependiendo de tu nivel de ingresos, puede darte derecho a devolución.
            </p>
          </div>
          <div>
            <h3>¿Esta calculadora reemplaza asesoría contable?</h3>
            <p>
              No. Sirve para cálculos referenciales con la tasa oficial SII 2026. Para resolver
              casos con retenciones especiales o situaciones tributarias particulares, consulta
              con un contador.
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
