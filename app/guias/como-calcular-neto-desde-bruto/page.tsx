import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";
import { buildGuidePageSchema, stringifyJsonLd } from "@/lib/schema";

const tool = getToolBySlug("calculadora-iva-chile")!;
const relatedGuides = GUIDES.filter((guide) =>
  [
    "calcular-iva-desde-monto-bruto",
    "formula-del-iva-chile",
    "calcular-iva-19-porciento-chile",
  ].includes(guide.slug),
);

const faqs = [
  { question: "¿Por qué se divide por 1,19 y no por 0,19?", answer: "Dividir por 0,19 daría un resultado incorrecto. El bruto equivale al 119% del neto (100% neto + 19% IVA), por eso se divide por 1,19 para recuperar el 100%." },
  { question: "¿Hay otra forma de calcular el neto desde el bruto?", answer: "Sí: también puedes multiplicar el bruto por 0,8403 (que es 1/1,19). El resultado es el mismo." },
  { question: "¿Esta fórmula sirve para cualquier monto?", answer: "Sí, para cualquier monto que incluya IVA del 19%. Si el IVA es diferente (por ejemplo, tasa reducida), el divisor cambia." },
];

const guideSchema = buildGuidePageSchema(faqs, [
  { name: "Inicio", path: "/" },
  { name: "Guías", path: "/guias" },
  { name: "Cómo calcular el monto neto desde un precio bruto", path: "/guias/como-calcular-neto-desde-bruto" },
]);

export const metadata: Metadata = {
  title: "Cómo calcular el monto neto desde un precio bruto en Chile — Herramientas Online",
  description:
    "Aprende a calcular el monto neto desde un precio con IVA incluido. Fórmula simple: bruto / 1,19. Con ejemplo y calculadora gratuita.",
  alternates: {
    canonical: "/guias/como-calcular-neto-desde-bruto",
  },
  openGraph: {
    title: "Cómo calcular el monto neto desde un precio bruto en Chile",
    description: "Aprende a calcular el monto neto desde un precio con IVA incluido. Fórmula simple: bruto / 1,19.",
    url: "/guias/como-calcular-neto-desde-bruto",
    siteName: "Herramientas Online",
    locale: "es_CL",
    type: "article",
  },
};

export default function ComoCalcularNetoDesdebrutoPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(guideSchema) }}
      />
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Cómo calcular el monto neto desde un precio bruto
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Cuando tienes un precio con IVA incluido (bruto) y necesitas separar el neto del IVA,
          divides por 1,19. Es útil al registrar compras, revisar facturas o comparar precios sin
          impuesto.
        </p>

        <h2>La fórmula</h2>
        <div className="not-prose my-4 rounded-xl bg-gray-100 border border-gray-200 px-5 py-4 font-mono text-sm text-gray-700">
          Neto = Bruto / 1,19<br />
          IVA = Bruto − Neto
        </div>

        <h2>Ejemplo práctico</h2>
        <div className="not-prose my-4 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-2">Ejemplo</p>
          <ul className="text-sm text-green-700 space-y-1">
            <li>Precio bruto (con IVA): $238.000</li>
            <li>Neto: $238.000 / 1,19 = $200.000</li>
            <li>IVA: $238.000 − $200.000 = $38.000</li>
          </ul>
        </div>

        <h2>Cuándo usar esta operación</h2>
        <ul>
          <li>Al registrar el gasto neto de una compra para contabilidad.</li>
          <li>Al revisar si el IVA en una boleta o factura está bien calculado.</li>
          <li>Al comparar el precio sin impuesto entre distintos proveedores.</li>
        </ul>

        <p>
          <Link
            href={tool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Calcular neto desde bruto →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿Por qué se divide por 1,19 y no por 0,19?</h3>
            <p>
              Dividir por 0,19 daría un resultado incorrecto. El bruto equivale al 119% del neto
              (100% neto + 19% IVA), por eso se divide por 1,19 para recuperar el 100%.
            </p>
          </div>
          <div>
            <h3>¿Hay otra forma de calcular el neto desde el bruto?</h3>
            <p>
              Sí: también puedes multiplicar el bruto por 0,8403 (que es 1/1,19). El resultado
              es el mismo.
            </p>
          </div>
          <div>
            <h3>¿Esta fórmula sirve para cualquier monto?</h3>
            <p>
              Sí, para cualquier monto que incluya IVA del 19%. Si el IVA es diferente (por
              ejemplo, tasa reducida), el divisor cambia.
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
