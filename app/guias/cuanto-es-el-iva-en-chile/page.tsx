import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const tool = getToolBySlug("calculadora-iva-chile")!;
const relatedGuides = GUIDES.filter((guide) =>
  [
    "calcular-iva-chile",
    "calcular-iva-19-porciento-chile",
    "formula-del-iva-chile",
  ].includes(guide.slug),
);

export const metadata: Metadata = {
  title: "¿Cuánto es el IVA en Chile? — Herramientas Online",
  description:
    "El IVA en Chile es 19%. Descubre a qué aplica, cuándo corresponde pagarlo y cómo calcularlo con una herramienta gratuita.",
  alternates: {
    canonical: "/guias/cuanto-es-el-iva-en-chile",
  },
};

export default function CuantoEsElIvaEnChilePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          ¿Cuánto es el IVA en Chile?
        </h1>
        <p className="text-gray-600 leading-relaxed">
          El IVA en Chile es <strong>19%</strong>. Es el Impuesto al Valor Agregado que se aplica
          sobre la venta de bienes y servicios en el país. Lo regula el Decreto Ley N° 825 de 1974.
        </p>

        <h2>¿A qué aplica el IVA?</h2>
        <p>
          La mayoría de bienes y servicios están afectos a IVA. Algunos casos importantes:
        </p>
        <ul>
          <li><strong>Afectos (19%):</strong> venta de productos, servicios comerciales, arriendos de bienes muebles, importaciones.</li>
          <li><strong>Exentos:</strong> servicios médicos, transporte de pasajeros, arriendos de vivienda con factura, educación, seguros de vida.</li>
        </ul>
        <p>
          Para casos con tratamiento especial, consulta directamente al SII o con un contador.
        </p>

        <h2>Cómo se calcula</h2>
        <p>
          El IVA se calcula sobre el monto neto (precio sin impuesto):
        </p>
        <div className="not-prose my-4 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-2">Ejemplo</p>
          <p className="text-sm text-green-700">
            Neto $100.000 × 19% = IVA $19.000 → Total $119.000
          </p>
        </div>

        <p>
          <Link
            href={tool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Calcular IVA en Chile →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿El IVA en Chile siempre ha sido 19%?</h3>
            <p>
              No. Fue 20% hasta 1998. Bajó a 18% en 1999 y subió a 19% en 2003, donde se mantiene
              hasta hoy.
            </p>
          </div>
          <div>
            <h3>¿El IVA lo paga el comprador o el vendedor?</h3>
            <p>
              Lo paga el comprador final. El vendedor actúa como agente retenedor: lo cobra y lo
              entera al SII mensualmente.
            </p>
          </div>
          <div>
            <h3>¿Cómo sé si un precio incluye IVA?</h3>
            <p>
              Los precios al consumidor en Chile deben incluir IVA por ley. Las facturas entre
              empresas muestran neto e IVA por separado.
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
