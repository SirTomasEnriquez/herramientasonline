import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";
import { buildGuidePageSchema, stringifyJsonLd } from "@/lib/schema";

const tool = getToolBySlug("calculadora-iva-chile")!;
const relatedGuides = GUIDES.filter((guide) =>
  ["calcular-iva-chile", "formula-del-iva-chile", "cuanto-es-el-iva-en-chile"].includes(
    guide.slug,
  ),
);

const faqs = [
  { question: "¿Cuál es la tasa de IVA en Chile?", answer: "19%. Lo establece el Decreto Ley N° 825 de 1974." },
  { question: "¿El IVA se aplica sobre el precio neto o bruto?", answer: "Sobre el precio neto. El bruto es el resultado de agregar el 19% al neto." },
  { question: "¿Todos los productos tienen IVA en Chile?", answer: "La mayoría sí. Hay excepciones para algunos servicios médicos, educación y bienes específicos exentos según el DL 825." },
  { question: "¿Cómo verifico que el IVA en una factura es correcto?", answer: "Divide el monto bruto por 1,19 para obtener el neto. La diferencia entre bruto y neto debe ser exactamente el 19%. La calculadora hace esto automáticamente." },
];

const guideSchema = buildGuidePageSchema(faqs, [
  { name: "Inicio", path: "/" },
  { name: "Guías", path: "/guias" },
  { name: "Cómo calcular el IVA 19% en Chile", path: "/guias/calcular-iva-19-porciento-chile" },
]);

export const metadata: Metadata = {
  title: "Cómo calcular el IVA 19% en Chile — Herramientas Online",
  description:
    "Aprende a calcular el IVA 19% en Chile desde monto neto o bruto. Fórmulas simples, ejemplos prácticos y calculadora gratuita.",
  alternates: {
    canonical: "/guias/calcular-iva-19-porciento-chile",
  },
  openGraph: {
    title: "Cómo calcular el IVA 19% en Chile",
    description: "Aprende a calcular el IVA 19% en Chile desde monto neto o bruto. Fórmulas simples, ejemplos prácticos y calculadora gratuita.",
    url: "/guias/calcular-iva-19-porciento-chile",
    siteName: "Herramientas Online",
    locale: "es_CL",
    type: "article",
  },
};

export default function CalcularIva19PorCientoChilePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(guideSchema) }}
      />
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Cómo calcular el IVA 19% en Chile
        </h1>
        <p className="text-gray-600 leading-relaxed">
          El IVA general en Chile es 19% y aplica a la mayoría de bienes y servicios. Calcularlo
          correctamente evita errores al emitir o revisar facturas en el SII.
        </p>

        <h2>Calcular IVA desde monto neto</h2>
        <p>
          Si tienes el monto neto (sin IVA), multiplica por 0,19 para obtener el IVA y por 1,19
          para el total con IVA incluido.
        </p>
        <div className="not-prose my-4 rounded-xl bg-gray-100 border border-gray-200 px-5 py-4 font-mono text-sm text-gray-700">
          IVA = Neto × 0,19<br />
          Bruto = Neto × 1,19
        </div>

        <h2>Calcular IVA desde monto bruto</h2>
        <p>
          Si tienes el total con IVA incluido y necesitas separarlo, divide por 1,19.
        </p>
        <div className="not-prose my-4 rounded-xl bg-gray-100 border border-gray-200 px-5 py-4 font-mono text-sm text-gray-700">
          Neto = Bruto / 1,19<br />
          IVA = Bruto − Neto
        </div>

        <h2>Ejemplo práctico</h2>
        <div className="not-prose my-4 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-2">Desde neto</p>
          <p className="text-sm text-green-700">
            Neto $100.000 → IVA $19.000 → Bruto $119.000
          </p>
          <p className="text-sm text-green-800 font-medium mt-3 mb-2">Desde bruto</p>
          <p className="text-sm text-green-700">
            Bruto $119.000 → Neto $100.000 → IVA $19.000
          </p>
        </div>

        <p>
          <Link
            href={tool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Calcular IVA con la calculadora →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿Cuál es la tasa de IVA en Chile?</h3>
            <p>19%. Lo establece el Decreto Ley N° 825 de 1974.</p>
          </div>
          <div>
            <h3>¿El IVA se aplica sobre el precio neto o bruto?</h3>
            <p>Sobre el precio neto. El bruto es el resultado de agregar el 19% al neto.</p>
          </div>
          <div>
            <h3>¿Todos los productos tienen IVA en Chile?</h3>
            <p>
              La mayoría sí. Hay excepciones para algunos servicios médicos, educación y bienes
              específicos exentos según el DL 825.
            </p>
          </div>
          <div>
            <h3>¿Cómo verifico que el IVA en una factura es correcto?</h3>
            <p>
              Divide el monto bruto por 1,19 para obtener el neto. La diferencia entre bruto y
              neto debe ser exactamente el 19%. La calculadora hace esto automáticamente.
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
