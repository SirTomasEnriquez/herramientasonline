import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const mainTool = getToolBySlug("calculadora-boleta-honorarios-chile")!;
const relatedTool = getToolBySlug("calculadora-iva-chile")!;
const relatedGuides = GUIDES.filter((guide) =>
  ["retencion-boleta-honorarios-2026", "calcular-iva-chile"].includes(guide.slug),
);

export const metadata: Metadata = {
  title: "Cómo calcular una boleta de honorarios en Chile — Herramientas Online",
  description:
    "Guía simple para entender monto bruto, monto líquido y retención en una boleta de honorarios en Chile.",
};

export default function BoletaHonorariosChileGuidePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Cómo calcular una boleta de honorarios en Chile
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Una boleta de honorarios muestra un monto bruto, una retención y un monto líquido. Para
          independientes y emprendedores, revisar estos valores evita diferencias al momento de cobrar.
        </p>

        <h2>Qué es una boleta de honorarios</h2>
        <p>
          Es un documento usado por trabajadores independientes para cobrar servicios. Normalmente,
          quien paga retiene un porcentaje y tú recibes el monto líquido.
        </p>

        <h2>Cómo se calcula</h2>
        <p>
          Desde el monto bruto se descuenta la retención vigente. El resultado es el monto líquido.
          Si quieres recibir un líquido específico, debes calcular hacia atrás el bruto necesario.
        </p>

        <h2>Ejemplo práctico</h2>
        <p>
          Si emites una boleta por $100.000 y la retención es 15,25%, se retienen $15.250 y recibes
          $84.750. Si necesitas recibir $100.000 líquidos, el monto bruto debe ser mayor.
        </p>

        <h2>Cuándo usar la herramienta</h2>
        <p>
          Usa la calculadora antes de emitir una boleta o acordar un pago, especialmente si necesitas
          saber cuánto recibirás realmente.
        </p>
        <p>
          El cálculo es referencial porque la tasa puede cambiar y algunos casos tienen reglas
          especiales. Para decisiones tributarias, valida con el SII o con un contador.
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
            <h3>¿Qué es el monto bruto?</h3>
            <p>Es el total de la boleta antes de descontar la retención.</p>
          </div>
          <div>
            <h3>¿Qué es el monto líquido?</h3>
            <p>Es lo que recibes después de descontar la retención de impuestos.</p>
          </div>
          <div>
            <h3>¿La calculadora reemplaza asesoría contable?</h3>
            <p>No. Sirve para cálculos simples y referenciales, no para resolver casos tributarios complejos.</p>
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
