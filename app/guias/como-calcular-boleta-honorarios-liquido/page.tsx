import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const tool = getToolBySlug("calculadora-boleta-honorarios-chile")!;
const relatedGuides = GUIDES.filter((guide) =>
  [
    "boleta-honorarios-chile",
    "calcular-liquido-boleta-honorarios",
    "cuanto-retiene-boleta-honorarios",
  ].includes(guide.slug),
);

export const metadata: Metadata = {
  title: "Cómo calcular el líquido de una boleta de honorarios — Herramientas Online",
  description:
    "Aprende a calcular el monto líquido de una boleta de honorarios y cuánto debes emitir para recibir un pago exacto. Tasa SII 2026.",
  alternates: {
    canonical: "/guias/como-calcular-boleta-honorarios-liquido",
  },
};

export default function ComoCalcularBoletaHonorariosLiquidoPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Cómo calcular el líquido de una boleta de honorarios
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Hay dos situaciones frecuentes: saber cuánto recibirás desde un monto bruto conocido, o
          saber cuánto debes emitir para recibir exactamente lo que acordaste. Las dos tienen
          fórmulas distintas.
        </p>

        <h2>Caso 1 — Desde bruto a líquido</h2>
        <p>Sabes el monto de la boleta y quieres saber cuánto recibirás:</p>
        <div className="not-prose my-4 rounded-xl bg-gray-100 border border-gray-200 px-5 py-4 font-mono text-sm text-gray-700">
          Líquido = Bruto × 0,8475
        </div>
        <div className="not-prose my-2 rounded-xl bg-green-50 border border-green-100 px-5 py-3">
          <p className="text-sm text-green-700">
            Ejemplo: $150.000 × 0,8475 = $127.125 líquido
          </p>
        </div>

        <h2>Caso 2 — Desde líquido a bruto</h2>
        <p>Acordaste recibir un monto específico y necesitas saber por cuánto emitir la boleta:</p>
        <div className="not-prose my-4 rounded-xl bg-gray-100 border border-gray-200 px-5 py-4 font-mono text-sm text-gray-700">
          Bruto = Líquido / 0,8475
        </div>
        <div className="not-prose my-2 rounded-xl bg-green-50 border border-green-100 px-5 py-3">
          <p className="text-sm text-green-700">
            Ejemplo: quieres recibir $100.000 → Bruto = $100.000 / 0,8475 ≈ $118.033
          </p>
        </div>

        <h2>Tasa de retención aplicable</h2>
        <p>
          Las fórmulas anteriores usan la tasa general de <strong>15,25%</strong> (Ley N° 21.133,
          vigente 2026). Si tienes deuda del Préstamo Solidario COVID, la tasa es 18,25% y debes
          usar 0,8175 en lugar de 0,8475.
        </p>

        <p>
          <Link
            href={tool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Usar calculadora de boleta de honorarios →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿Qué pasa si cobro a una persona natural sin contabilidad?</h3>
            <p>
              En ese caso la boleta puede estar exenta de retención. El pagador no retiene el
              impuesto. Verifica con el SII o un contador si aplica a tu situación.
            </p>
          </div>
          <div>
            <h3>¿El impuesto retenido lo pierdo?</h3>
            <p>
              No. Queda registrado a tu nombre y lo recuperas o descuentas en tu declaración
              anual de renta del Formulario 22.
            </p>
          </div>
          <div>
            <h3>¿Puedo emitir la boleta con decimales?</h3>
            <p>
              El SII suele trabajar con montos enteros en pesos. Redondea al peso más cercano
              al emitir. La calculadora muestra el valor exacto antes del redondeo.
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
