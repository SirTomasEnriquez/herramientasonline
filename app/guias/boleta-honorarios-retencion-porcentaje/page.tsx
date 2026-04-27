import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const tool = getToolBySlug("calculadora-boleta-honorarios-chile")!;
const relatedGuides = GUIDES.filter((guide) =>
  [
    "retencion-boleta-honorarios-2026",
    "cuanto-retiene-boleta-honorarios",
    "calcular-liquido-boleta-honorarios",
  ].includes(guide.slug),
);

export const metadata: Metadata = {
  title: "Porcentaje de retención boleta de honorarios Chile 2026 — Herramientas Online",
  description:
    "El porcentaje de retención de boleta de honorarios en Chile en 2026 es 15,25% (general) o 18,25% (deuda COVID). Verifica tu caso.",
  alternates: {
    canonical: "/guias/boleta-honorarios-retencion-porcentaje",
  },
};

export default function BoletaHonorariosRetencionPorcentajePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Porcentaje de retención de boleta de honorarios en Chile 2026
        </h1>
        <p className="text-gray-600 leading-relaxed">
          El porcentaje de retención determina cuánto descuenta de tu boleta quien te paga y
          entera al SII. En 2026 existen dos tasas según tu situación tributaria.
        </p>

        <h2>Porcentajes vigentes en 2026</h2>
        <div className="not-prose overflow-x-auto my-4">
          <table className="text-sm w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-2 border border-gray-200">Caso</th>
                <th className="text-left px-4 py-2 border border-gray-200">Porcentaje</th>
                <th className="text-left px-4 py-2 border border-gray-200">Factor líquido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-200">Caso general</td>
                <td className="px-4 py-2 border border-gray-200 font-semibold">15,25%</td>
                <td className="px-4 py-2 border border-gray-200 font-mono">× 0,8475</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-200">Con deuda Préstamo Solidario COVID</td>
                <td className="px-4 py-2 border border-gray-200 font-semibold">18,25%</td>
                <td className="px-4 py-2 border border-gray-200 font-mono">× 0,8175</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Cómo evolucionó la tasa</h2>
        <p>
          La Ley N° 21.133 estableció una escala gradual de aumentos para financiar la
          cobertura de seguridad social de los trabajadores independientes:
        </p>
        <ul>
          <li>2019: 10%</li>
          <li>2020: 10,75%</li>
          <li>2021–2022: 12,25%</li>
          <li>2023 en adelante: 15,25% (tasa definitiva)</li>
        </ul>

        <h2>Ejemplo con cada tasa</h2>
        <div className="not-prose my-4 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-2">Boleta por $100.000</p>
          <ul className="text-sm text-green-700 space-y-1">
            <li>Tasa general (15,25%): líquido $84.750</li>
            <li>Tasa con deuda COVID (18,25%): líquido $81.750</li>
          </ul>
        </div>

        <p>
          <Link
            href={tool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Calcular retención y líquido →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿El porcentaje se aplica sobre el monto bruto o neto?</h3>
            <p>
              Sobre el monto bruto de la boleta. La retención es un porcentaje fijo del total
              emitido.
            </p>
          </div>
          <div>
            <h3>¿Quién verifica si aplica la tasa con deuda COVID?</h3>
            <p>
              El SII lo determina automáticamente según los registros de deuda. Si tienes
              dudas, revisa tu situación en el portal del SII con tu RUT y clave.
            </p>
          </div>
          <div>
            <h3>¿Existe alguna retención diferente para montos pequeños?</h3>
            <p>
              En algunos casos específicos puede aplicar exención. Consulta con el SII o un
              contador si el monto de tu boleta es bajo o el pagador es persona natural.
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
