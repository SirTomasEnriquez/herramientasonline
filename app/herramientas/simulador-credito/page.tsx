import type { Metadata } from "next";
import Link from "next/link";
import LoanSimulator from "@/components/LoanSimulator";
import RelatedTools from "@/components/RelatedTools";
import { GUIDES } from "@/lib/guides";
import { buildToolPageSchema, stringifyJsonLd } from "@/lib/schema";
import { TOOLS, getToolBySlug } from "@/lib/tools";

const tool = getToolBySlug("simulador-credito")!;
const relatedGuides = GUIDES.filter((guide) =>
  [
    "simular-credito",
    "simulador-credito-consumo-chile",
    "simulador-credito-hipotecario",
    "como-calcular-cuota-credito",
  ].includes(guide.slug),
);
const relatedTools = TOOLS.filter((item) =>
  ["calculadora-iva-chile", "calculadora-boleta-honorarios-chile"].includes(item.slug),
);

export const metadata: Metadata = {
  title: "Simulador de Crédito en Chile con Tabla de Amortización — Herramientas Online",
  description:
    "Simulador de crédito en Chile. Ingresa monto, tasa y plazo y obtén la cuota mensual exacta y la tabla completa de amortización. Sin registro.",
  alternates: {
    canonical: "/herramientas/simulador-credito",
  },
  openGraph: {
    title: "Simulador de Crédito en Chile con Tabla de Amortización",
    description:
      "Ingresa monto, tasa y plazo y obtén la cuota mensual y la tabla completa de amortización. Sin registro.",
    url: "/herramientas/simulador-credito",
    siteName: "Herramientas Online",
    locale: "es_CL",
    type: "website",
  },
};

const faqs = [
  {
    question: "¿Cómo calcular la cuota de un crédito?",
    answer:
      "Ingresa el monto del préstamo, la tasa mensual y el plazo en cuotas. El simulador aplica la fórmula de cuota fija (sistema francés) y calcula el pago mensual exacto junto con la tabla de amortización completa.",
  },
  {
    question: "¿Qué es una tabla de amortización?",
    answer:
      "Es el detalle mes a mes de tu crédito: cuánto de cada cuota va a pagar intereses, cuánto reduce el capital y cuál es el saldo pendiente.",
  },
  {
    question: "¿Qué tasa debo ingresar?",
    answer:
      "El simulador usa tasa mensual. Si tienes una tasa anual, divídela por 12. Por ejemplo, una tasa anual de 24% equivale a 2% mensual.",
  },
  {
    question: "¿Es exacto el cálculo?",
    answer:
      "El simulador usa la fórmula estándar de cuota fija con sistema francés. Es una referencia precisa, pero el valor final puede variar según seguros, comisiones y redondeos de cada institución.",
  },
  {
    question: "¿Cómo comparar distintos créditos?",
    answer:
      "Simula cada opción con el mismo monto y plazo, variando solo la tasa. Compara la cuota mensual y el costo total. Para comparación completa considera también el CAE.",
  },
];

const toolPageSchema = buildToolPageSchema(tool, faqs, [
  { name: "Inicio", path: "/" },
  { name: "Herramientas", path: "/herramientas" },
  { name: tool.name, path: tool.path },
]);

export default function SimuladorCreditoPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(toolPageSchema) }}
      />

      {/* Tool zone */}
      <section className="max-w-2xl mx-auto mb-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Simulador de crédito en Chile
          </h1>
          <p className="mt-3 text-base text-gray-500">
            Usa el simulador para calcular tu crédito en segundos. Ingresa monto, tasa y plazo para obtener la cuota mensual y la tabla completa de amortización. Sin registro, sin fricción.
          </p>
        </div>
        <LoanSimulator />
      </section>

      {/* SEO content zone */}
      <section className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          ¿Cómo funciona un simulador de crédito?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Un simulador de crédito en Chile calcula cuánto pagarás cada mes y cuánto
          costarán los intereses totales. Para operar necesita tres datos:
        </p>
        <ul className="text-gray-600 space-y-2 mt-2">
          <li><strong>Monto:</strong> el capital que vas a pedir prestado.</li>
          <li><strong>Tasa:</strong> el interés mensual o anual que cobra la institución.</li>
          <li><strong>Plazo:</strong> la cantidad de cuotas en que devolverás el crédito.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mt-3">
          Con esos tres valores el simulador calcula la <strong>cuota mensual</strong> y
          genera la <strong>tabla de amortización</strong>, que muestra cuánto de cada cuota
          va a capital y cuánto a intereses.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          Cómo calcular la cuota de un crédito
        </h2>
        <p className="text-gray-600 leading-relaxed">
          El método más utilizado por bancos y financieras en Chile es el <strong>sistema francés</strong>:
          cuotas fijas durante todo el plazo. Aunque la cuota no cambia, la proporción interna sí: al
          principio pagas más intereses y menos capital; al final pagas más capital y menos intereses.
        </p>
        <p className="text-gray-600 leading-relaxed mt-3">
          La fórmula de la cuota mensual es:
        </p>
        <div className="my-4 rounded-xl bg-gray-100 border border-gray-200 px-5 py-4 font-mono text-sm text-gray-700">
          Cuota = Monto × [i × (1 + i)^n] / [(1 + i)^n − 1]
        </div>
        <p className="text-gray-600 leading-relaxed">
          Donde <strong>i</strong> es la tasa mensual y <strong>n</strong> es el número de cuotas.
          El simulador hace este cálculo automáticamente.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          Ejemplo de simulación de crédito
        </h2>
        <div className="my-4 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-2">Ejemplo real</p>
          <ul className="text-sm text-green-700 space-y-1">
            <li><strong>Monto:</strong> $1.000.000</li>
            <li><strong>Tasa mensual:</strong> 2%</li>
            <li><strong>Plazo:</strong> 12 cuotas</li>
          </ul>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Con esos datos, la cuota mensual es aproximadamente <strong>$94.560</strong>. Al cabo de
          12 meses habrás pagado alrededor de <strong>$1.134.720</strong> en total, es decir,
          <strong> $134.720 en intereses</strong>. La tabla de amortización muestra cuánto de cada
          cuota se destina a capital y cuánto a intereses mes a mes.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          Qué tener en cuenta al simular un crédito
        </h2>
        <ul className="text-gray-600 space-y-2 mt-2">
          <li>
            <strong>Tasa mensual vs. anual:</strong> los bancos suelen publicar tasas anuales.
            Para usar el simulador debes convertirla a mensual dividiendo por 12 (o usando la tasa
            efectiva mensual equivalente).
          </li>
          <li>
            <strong>Costo total del crédito:</strong> la cuota solo muestra el pago mensual. Suma
            todas las cuotas para ver cuánto pagarás en total.
          </li>
          <li>
            <strong>Intereses totales:</strong> la diferencia entre el costo total y el monto
            original es lo que pagarás en intereses. A mayor plazo, más intereses.
          </li>
          <li>
            <strong>Otros cargos:</strong> algunos créditos incluyen seguros, comisiones o gastos
            notariales que no están en el simulador. Consulta el Costo Anual Equivalente (CAE)
            antes de firmar.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          Preguntas frecuentes
        </h2>

        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              ¿Cómo calcular la cuota de un crédito?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Ingresa el monto del préstamo, la tasa mensual y el plazo en cuotas. El simulador
              aplica la fórmula de cuota fija (sistema francés) y calcula el pago mensual exacto
              junto con la tabla de amortización completa.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              ¿Qué es una tabla de amortización?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Es el detalle mes a mes de tu crédito: cuánto de cada cuota va a pagar intereses,
              cuánto reduce el capital y cuál es el saldo pendiente. Permite ver exactamente
              cómo evoluciona tu deuda en el tiempo.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              ¿Qué tasa debo ingresar?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              El simulador usa tasa mensual. Si tienes una tasa anual, divídela por 12 para
              obtener la tasa mensual aproximada. Por ejemplo, una tasa anual de 24% equivale
              a 2% mensual.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              ¿Es exacto el cálculo?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              El simulador usa la fórmula estándar de cuota fija con sistema francés, la misma
              que aplican la mayoría de bancos en Chile. Es una referencia precisa para evaluar
              opciones, pero el valor final puede variar según seguros, comisiones y redondeos
              de cada institución.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              ¿Cómo comparar distintos créditos?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Simula cada opción con el mismo monto y plazo, variando solo la tasa. Compara la
              cuota mensual y el costo total (suma de todas las cuotas). Para una comparación
              completa considera también el CAE (Costo Anual Equivalente), que incluye todos
              los costos asociados.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto mt-10 prose prose-gray prose-sm sm:prose-base">
        <h2>Guías relacionadas</h2>
        <ul>
          {relatedGuides.map((guide) => (
            <li key={guide.slug}>
              <Link href={guide.href}>{guide.title}</Link>
            </li>
          ))}
        </ul>

        <h2>Otras herramientas</h2>
        <ul>
          {relatedTools.map((relatedTool) => (
            <li key={relatedTool.slug}>
              <Link href={relatedTool.href}>{relatedTool.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <RelatedTools currentHref="/herramientas/simulador-credito" />
    </main>
  );
}
