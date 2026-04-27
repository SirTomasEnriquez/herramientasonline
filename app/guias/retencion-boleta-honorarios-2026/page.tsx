import type { Metadata } from "next";
import Link from "next/link";
import { getGuideBySlug } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const mainTool = getToolBySlug("calculadora-boleta-honorarios-chile")!;
const relatedGuide = getGuideBySlug("boleta-honorarios-chile")!;

export const metadata: Metadata = {
  title: "Retención de boleta de honorarios 2026 — Herramientas Online",
  description:
    "Guía breve sobre la retención de boleta de honorarios en Chile 2026 y cómo estimar monto bruto y líquido.",
};

export default function RetencionBoletaHonorarios2026GuidePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Retención de boleta de honorarios 2026
        </h1>
        <p className="text-gray-600 leading-relaxed">
          La retención define cuánto se descuenta del monto bruto de una boleta y cuánto recibe
          finalmente quien emite el documento.
        </p>

        <h2>Qué calcular</h2>
        <p>
          Necesitas calcular el impuesto retenido, el monto líquido a recibir y, si partes desde un
          líquido deseado, el bruto que debes emitir.
        </p>

        <h2>Cómo hacerlo</h2>
        <p>
          Para 2026, la calculadora usa una tasa de retención de 15,25%. Desde el bruto se descuenta
          esa retención para obtener el líquido.
        </p>

        <h2>Ejemplo práctico</h2>
        <p>
          Si emites una boleta por $100.000, la retención es $15.250 y el monto líquido es $84.750.
          El resultado esperado es saber cuánto se retiene y cuánto recibirás.
        </p>

        <h2>Cuándo usar la herramienta</h2>
        <p>
          Úsala antes de emitir una boleta o acordar honorarios. El cálculo es referencial porque
          pueden existir casos especiales, cambios normativos o retenciones adicionales.
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
            <h3>¿Cuál es la retención de boleta de honorarios en 2026?</h3>
            <p>La tasa general usada por esta herramienta para 2026 es 15,25%.</p>
          </div>
          <div>
            <h3>¿Qué es el monto líquido?</h3>
            <p>Es lo que recibes después de descontar la retención desde el monto bruto.</p>
          </div>
          <div>
            <h3>¿Por qué el cálculo es referencial?</h3>
            <p>Porque tu situación puede tener reglas particulares o retenciones adicionales.</p>
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
