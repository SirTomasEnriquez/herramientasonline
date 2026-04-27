import type { Metadata } from "next";
import Link from "next/link";
import { getGuideBySlug } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const mainTool = getToolBySlug("calculadora-iva-chile")!;
const relatedGuide = getGuideBySlug("calcular-iva-desde-monto-neto")!;

export const metadata: Metadata = {
  title: "Cómo calcular IVA desde un monto bruto — Herramientas Online",
  description:
    "Aprende a calcular el IVA desde un monto bruto en Chile y separar el valor neto del IVA 19%.",
};

export default function CalcularIvaDesdeMontoBrutoGuidePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Cómo calcular IVA desde un monto bruto
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Si ya tienes un total con IVA incluido, puedes separar el monto neto y el IVA para revisar
          una factura, una cotización o un precio final.
        </p>

        <h2>Qué calcular</h2>
        <p>
          Desde un monto bruto necesitas obtener dos resultados: el valor neto sin impuesto y el IVA
          incluido en ese total.
        </p>

        <h2>Cómo hacerlo</h2>
        <p>
          Divide el monto bruto por 1,19 para obtener el neto. Luego resta el neto al monto bruto
          para obtener el IVA.
        </p>

        <h2>Ejemplo práctico</h2>
        <p>
          Si el monto bruto es $119.000, el neto es $100.000 y el IVA incluido es $19.000. El
          resultado esperado es separar el total en valor sin impuesto e impuesto.
        </p>

        <h2>Cuándo usar la herramienta</h2>
        <p>
          Úsala cuando tengas un precio final y necesites saber cuánto corresponde al IVA y cuánto
          al neto. El cálculo es referencial y no reemplaza una revisión contable.
        </p>

        <p>
          <Link
            href={mainTool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Usar calculadora de IVA Chile →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿Qué es un monto bruto?</h3>
            <p>Es el valor final con IVA incluido.</p>
          </div>
          <div>
            <h3>¿Cómo saco el neto desde el bruto?</h3>
            <p>Divide el monto bruto por 1,19 para estimar el valor neto.</p>
          </div>
          <div>
            <h3>¿Cuándo conviene calcular desde bruto?</h3>
            <p>Cuando solo tienes el total final y necesitas separar el IVA para revisar el documento.</p>
          </div>
        </div>

        <h2>Links internos</h2>
        <ul>
          <li>
            <Link href={mainTool.href}>{mainTool.title}</Link>
          </li>
          <li>
            <Link href={relatedGuide.href}>{relatedGuide.title}</Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
