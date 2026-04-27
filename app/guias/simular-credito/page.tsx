import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const mainTool = getToolBySlug("simulador-credito")!;
const relatedTool = getToolBySlug("calculadora-iva-chile")!;
const relatedGuides = GUIDES.filter((guide) =>
  [
    "simulador-credito-consumo-chile",
    "simulador-credito-hipotecario",
    "como-calcular-cuota-credito",
  ].includes(guide.slug),
);

export const metadata: Metadata = {
  title: "Cómo simular un crédito y entender una tabla de amortización — Herramientas Online",
  description:
    "Guía breve para simular un crédito, estimar cuota mensual y entender una tabla de amortización antes de decidir.",
};

export default function SimularCreditoGuidePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Cómo simular un crédito y entender una tabla de amortización
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Simular un crédito ayuda a estimar la cuota mensual, revisar cuánto pagarás de intereses
          y comparar si el flujo de caja de tu negocio puede soportar el compromiso.
        </p>

        <h2>Qué es una simulación de crédito</h2>
        <p>
          Es una estimación basada en monto, tasa y plazo. Entrega una cuota aproximada y una tabla
          que separa capital, intereses y saldo pendiente.
        </p>

        <h2>Cómo se calcula</h2>
        <p>
          La cuota depende del monto solicitado, la tasa de interés y la cantidad de meses. En una
          tabla de amortización, al inicio suele pagarse más interés y luego más capital.
        </p>

        <h2>Ejemplo práctico</h2>
        <p>
          Si pides $1.000.000 a 12 meses, la simulación permite ver la cuota estimada de cada mes,
          cuánto corresponde a interés y cómo baja el saldo hasta llegar a cero.
        </p>

        <h2>Cuándo usar la herramienta</h2>
        <p>
          Úsala antes de pedir un crédito, financiar una compra o comparar alternativas. Es útil para
          ordenar expectativas antes de hablar con una institución financiera.
        </p>
        <p>
          El cálculo es referencial porque no incluye todos los costos posibles, seguros, comisiones
          ni condiciones comerciales específicas.
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
            <p>Es el detalle mensual de cuota, interés, capital pagado y saldo pendiente.</p>
          </div>
          <div>
            <h3>¿La cuota simulada es definitiva?</h3>
            <p>No. Es una estimación y puede cambiar según costos, seguros o condiciones del crédito.</p>
          </div>
          <div>
            <h3>¿Cuándo conviene simular un crédito?</h3>
            <p>Antes de endeudarte, para revisar si la cuota calza con tus ingresos y flujo de caja.</p>
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
            <Link href={relatedTool.href}>{relatedTool.title}</Link>
          </li>
          <li>
            <Link href="/herramientas">Ver herramientas disponibles</Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
