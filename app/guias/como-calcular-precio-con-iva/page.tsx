import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const tool = getToolBySlug("calculadora-iva-chile")!;
const relatedGuides = GUIDES.filter((guide) =>
  ["calcular-iva-desde-monto-neto", "cuanto-es-el-iva-en-chile", "formula-del-iva-chile"].includes(
    guide.slug,
  ),
);

export const metadata: Metadata = {
  title: "Cómo calcular el precio con IVA incluido en Chile — Herramientas Online",
  description:
    "Calcula el precio con IVA incluido en Chile. Multiplica el neto por 1,19 y obtén el total con IVA 19% en segundos.",
  alternates: {
    canonical: "/guias/como-calcular-precio-con-iva",
  },
};

export default function ComoCalcularPrecioConIvaPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Cómo calcular el precio con IVA incluido
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Calcular el precio con IVA es necesario al fijar precios de venta, emitir facturas o
          confirmar el total que pagará un cliente. En Chile el IVA es 19%.
        </p>

        <h2>La fórmula</h2>
        <p>
          Para obtener el precio con IVA incluido (bruto) desde un precio neto, multiplica por 1,19.
        </p>
        <div className="not-prose my-4 rounded-xl bg-gray-100 border border-gray-200 px-5 py-4 font-mono text-sm text-gray-700">
          Precio con IVA = Precio neto × 1,19
        </div>

        <h2>Ejemplo práctico</h2>
        <div className="not-prose my-4 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-2">Ejemplo</p>
          <ul className="text-sm text-green-700 space-y-1">
            <li>Precio neto: $50.000</li>
            <li>IVA (19%): $9.500</li>
            <li>Precio con IVA: $59.500</li>
          </ul>
          <p className="text-sm text-green-700 mt-2 font-mono">$50.000 × 1,19 = $59.500</p>
        </div>

        <h2>Cuándo usar esta fórmula</h2>
        <ul>
          <li>Al fijar el precio de venta al público de un producto o servicio.</li>
          <li>Al confirmar el total de una factura antes de emitirla en el SII.</li>
          <li>Al responder a un cliente cuánto pagará en total incluyendo impuestos.</li>
        </ul>

        <p>
          <Link
            href={tool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Calcular precio con IVA →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿Por qué se multiplica por 1,19 y no por 0,19?</h3>
            <p>
              Multiplicar por 0,19 entrega solo el valor del IVA. Multiplicar por 1,19 entrega el
              total (neto + IVA) en un solo paso.
            </p>
          </div>
          <div>
            <h3>¿Cómo calculo el IVA por separado?</h3>
            <p>Multiplica el neto por 0,19. Ejemplo: $50.000 × 0,19 = $9.500 de IVA.</p>
          </div>
          <div>
            <h3>¿El precio publicado en Chile incluye IVA?</h3>
            <p>
              Sí. En Chile los precios al consumidor deben incluir IVA según la Ley del Consumidor.
              Las facturas entre empresas suelen mostrar neto e IVA por separado.
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
