import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";
import { buildGuidePageSchema, stringifyJsonLd } from "@/lib/schema";

const mainTool = getToolBySlug("simulador-credito")!;
const relatedGuides = GUIDES.filter((guide) =>
  ["simular-credito", "como-calcular-cuota-credito", "simulador-credito-consumo-chile"].includes(
    guide.slug,
  ),
);

const faqs = [
  { question: "¿Cuánto es la cuota de un crédito hipotecario en Chile?", answer: "Depende del monto, la tasa y el plazo. Como referencia, un crédito de $80.000.000 a 20 años con tasa mensual de 0,45% resulta en una cuota de aproximadamente $510.000 mensuales, sin considerar seguros." },
  { question: "¿Conviene pedir un crédito a 20 o 30 años?", answer: "A mayor plazo, menor cuota mensual pero mayor costo total en intereses. La simulación permite comparar ambas opciones con los mismos datos para tomar la decisión según tu capacidad de pago." },
  { question: "¿Puedo simular en UF?", answer: "El simulador trabaja con el monto ingresado. Puedes convertir UF a pesos al valor del día e ingresar el equivalente para estimar la cuota en pesos." },
  { question: "¿El simulador incluye los seguros?", answer: "No. El simulador calcula la cuota de capital e intereses únicamente. Los seguros de desgravamen e incendio se suman a la cuota real y varían por institución." },
];

const guideSchema = buildGuidePageSchema(faqs, [
  { name: "Inicio", path: "/" },
  { name: "Guías", path: "/guias" },
  { name: "Simulador de crédito hipotecario en Chile", path: "/guias/simulador-credito-hipotecario" },
]);

export const metadata: Metadata = {
  title: "Simulador de crédito hipotecario en Chile — Herramientas Online",
  description:
    "Simula un crédito hipotecario en Chile. Calcula la cuota mensual, el total de intereses y la tabla de amortización por monto, tasa y plazo.",
  alternates: {
    canonical: "/guias/simulador-credito-hipotecario",
  },
  openGraph: {
    title: "Simulador de crédito hipotecario en Chile",
    description: "Simula un crédito hipotecario en Chile. Calcula la cuota mensual, el total de intereses y la tabla de amortización por monto, tasa y plazo.",
    url: "/guias/simulador-credito-hipotecario",
    siteName: "Herramientas Online",
    locale: "es_CL",
    type: "article",
  },
};

export default function SimuladorCreditoHipotecarioPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(guideSchema) }}
      />
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Simulador de crédito hipotecario en Chile
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Un crédito hipotecario es el compromiso financiero más largo que toma una familia o
          emprendedor en Chile. Simular la cuota antes de decidir permite ver el impacto real en
          el presupuesto mensual durante 10, 20 o 30 años.
        </p>

        <h2>Cómo funciona un crédito hipotecario en Chile</h2>
        <p>
          En Chile los créditos hipotecarios operan principalmente en UF (Unidad de Fomento), lo
          que protege al banco de la inflación pero significa que la cuota varía en pesos según
          el valor diario de la UF. Los plazos más comunes son 15, 20 y 30 años.
        </p>
        <p>
          Para simular en pesos, puedes ingresar el monto en pesos con la tasa mensual
          equivalente. El resultado muestra la cuota y la tabla de amortización en la misma
          moneda ingresada.
        </p>

        <h2>Cómo simular un crédito hipotecario</h2>
        <p>Necesitas tres datos:</p>
        <ul>
          <li>
            <strong>Monto:</strong> el valor del crédito (en pesos o en UF convertidas a pesos
            al valor del día).
          </li>
          <li>
            <strong>Tasa mensual:</strong> la tasa de interés mensual que ofrece el banco. Las
            tasas hipotecarias en Chile suelen estar entre 0,3% y 0,7% mensual.
          </li>
          <li>
            <strong>Plazo:</strong> cantidad de cuotas. Para un crédito a 20 años son 240
            cuotas; a 30 años son 360 cuotas.
          </li>
        </ul>

        <h2>Ejemplo práctico</h2>
        <div className="not-prose my-4 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-2">Simulación de ejemplo</p>
          <ul className="text-sm text-green-700 space-y-1">
            <li><strong>Monto:</strong> $80.000.000</li>
            <li><strong>Tasa mensual:</strong> 0,45%</li>
            <li><strong>Plazo:</strong> 240 cuotas (20 años)</li>
            <li><strong>Cuota estimada:</strong> ~$510.000/mes</li>
            <li><strong>Costo total:</strong> ~$122.400.000</li>
            <li><strong>Intereses totales:</strong> ~$42.400.000</li>
          </ul>
        </div>
        <p>
          Alargar el plazo de 20 a 30 años baja la cuota mensual, pero puede duplicar los
          intereses totales pagados durante la vida del crédito.
        </p>

        <h2>Qué considerar al simular un crédito hipotecario</h2>
        <ul>
          <li>
            <strong>Pie mínimo:</strong> en Chile los bancos suelen financiar hasta el 80% del
            valor de tasación. El 20% restante debe pagarse como pie.
          </li>
          <li>
            <strong>Tasa fija vs. variable:</strong> los créditos con tasa fija tienen cuota
            estable. Los de tasa variable pueden bajar o subir según indicadores de mercado.
          </li>
          <li>
            <strong>Seguros obligatorios:</strong> desgravamen e incendio son obligatorios y se
            suman a la cuota mensual. El simulador no los incluye.
          </li>
          <li>
            <strong>CAE:</strong> el Costo Anual Equivalente es la medida oficial para comparar
            créditos hipotecarios entre distintos bancos.
          </li>
        </ul>

        <p>
          <Link
            href={mainTool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Simular crédito hipotecario →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿Cuánto es la cuota de un crédito hipotecario en Chile?</h3>
            <p>
              Depende del monto, la tasa y el plazo. Como referencia, un crédito de $80.000.000
              a 20 años con tasa mensual de 0,45% resulta en una cuota de aproximadamente
              $510.000 mensuales, sin considerar seguros.
            </p>
          </div>
          <div>
            <h3>¿Conviene pedir un crédito a 20 o 30 años?</h3>
            <p>
              A mayor plazo, menor cuota mensual pero mayor costo total en intereses. La
              simulación permite comparar ambas opciones con los mismos datos para tomar la
              decisión según tu capacidad de pago.
            </p>
          </div>
          <div>
            <h3>¿Puedo simular en UF?</h3>
            <p>
              El simulador trabaja con el monto ingresado. Puedes convertir UF a pesos al valor
              del día e ingresar el equivalente para estimar la cuota en pesos.
            </p>
          </div>
          <div>
            <h3>¿El simulador incluye los seguros?</h3>
            <p>
              No. El simulador calcula la cuota de capital e intereses únicamente. Los seguros
              de desgravamen e incendio se suman a la cuota real y varían por institución.
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
