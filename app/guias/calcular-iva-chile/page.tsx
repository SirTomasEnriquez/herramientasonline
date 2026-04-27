import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const mainTool = getToolBySlug("calculadora-iva-chile")!;
const relatedTool = getToolBySlug("calculadora-boleta-honorarios-chile")!;
const relatedGuides = GUIDES.filter((guide) =>
  ["calcular-iva-desde-monto-bruto", "calcular-iva-desde-monto-neto"].includes(guide.slug),
);

export const metadata: Metadata = {
  title: "Cómo calcular IVA en Chile — Herramientas Online",
  description:
    "Guía simple para calcular el IVA 19% en Chile, distinguir monto neto y bruto, y saber cuándo usar una calculadora de IVA.",
};

export default function CalcularIvaChileGuidePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Cómo calcular IVA en Chile
        </h1>
        <p className="text-gray-600 leading-relaxed">
          El IVA es un impuesto que se aplica a muchas ventas y servicios en Chile. Para
          emprendedores, entenderlo ayuda a revisar facturas, cotizaciones y precios finales.
        </p>

        <h2>Qué es el IVA</h2>
        <p>
          El IVA general en Chile es 19%. En un cálculo simple aparecen tres valores: monto neto,
          IVA y monto bruto. El neto es el valor sin impuesto; el bruto es el total con IVA incluido.
        </p>

        <h2>Cómo se calcula</h2>
        <p>
          Si tienes un monto neto, multiplica por 0,19 para obtener el IVA. Luego suma ambos valores
          para llegar al total. Si tienes el monto bruto, divide por 1,19 para estimar el neto.
        </p>

        <h2>Ejemplo práctico</h2>
        <p>
          Si una venta tiene un valor neto de $100.000, el IVA es $19.000 y el total bruto es
          $119.000. Este cálculo sirve para revisar si una factura o cotización está bien armada.
        </p>

        <h2>Cuándo usar la herramienta</h2>
        <p>
          Usa la calculadora cuando necesites validar rápido un monto neto, un total con IVA o el
          impuesto antes de emitir o revisar un documento.
        </p>
        <p>
          El resultado es referencial y no reemplaza la revisión contable, especialmente si tu caso
          tiene exenciones, reglas particulares o ajustes tributarios.
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
            <h3>¿Cuál es el IVA en Chile?</h3>
            <p>El IVA general en Chile es 19%.</p>
          </div>
          <div>
            <h3>¿Qué es el monto neto?</h3>
            <p>Es el valor antes de agregar IVA. Al sumar el IVA, obtienes el monto bruto.</p>
          </div>
          <div>
            <h3>¿Por qué el cálculo es referencial?</h3>
            <p>
              Porque pueden existir reglas tributarias específicas. Para decisiones contables,
              conviene validar con un contador o con el SII.
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
