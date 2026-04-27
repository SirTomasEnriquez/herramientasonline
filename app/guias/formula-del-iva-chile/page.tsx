import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const tool = getToolBySlug("calculadora-iva-chile")!;
const relatedGuides = GUIDES.filter((guide) =>
  [
    "calcular-iva-chile",
    "como-calcular-precio-con-iva",
    "como-calcular-neto-desde-bruto",
  ].includes(guide.slug),
);

export const metadata: Metadata = {
  title: "Fórmula del IVA en Chile — Herramientas Online",
  description:
    "Las dos fórmulas del IVA en Chile: calcular bruto desde neto y neto desde bruto. Referencia rápida con ejemplos.",
  alternates: {
    canonical: "/guias/formula-del-iva-chile",
  },
};

export default function FormulaDelIvaChilePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Fórmula del IVA en Chile
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Hay dos operaciones según desde dónde partas: agregar IVA a un precio neto o extraer
          el neto desde un precio con IVA incluido. En Chile la tasa es 19%.
        </p>

        <h2>Fórmula 1 — Desde monto neto</h2>
        <p>Cuando tienes el precio sin IVA y quieres el total:</p>
        <div className="not-prose my-4 rounded-xl bg-gray-100 border border-gray-200 px-5 py-4 font-mono text-sm text-gray-700">
          IVA = Neto × 0,19<br />
          Bruto = Neto × 1,19
        </div>
        <div className="not-prose my-2 rounded-xl bg-green-50 border border-green-100 px-5 py-3">
          <p className="text-sm text-green-700">
            Ejemplo: $80.000 neto → IVA $15.200 → Bruto $95.200
          </p>
        </div>

        <h2>Fórmula 2 — Desde monto bruto</h2>
        <p>Cuando tienes el total con IVA y quieres separar el neto:</p>
        <div className="not-prose my-4 rounded-xl bg-gray-100 border border-gray-200 px-5 py-4 font-mono text-sm text-gray-700">
          Neto = Bruto / 1,19<br />
          IVA = Bruto − Neto
        </div>
        <div className="not-prose my-2 rounded-xl bg-green-50 border border-green-100 px-5 py-3">
          <p className="text-sm text-green-700">
            Ejemplo: $95.200 bruto → Neto $80.000 → IVA $15.200
          </p>
        </div>

        <h2>Referencia rápida</h2>
        <div className="not-prose overflow-x-auto my-4">
          <table className="text-sm w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-2 border border-gray-200">Tienes</th>
                <th className="text-left px-4 py-2 border border-gray-200">Quieres</th>
                <th className="text-left px-4 py-2 border border-gray-200">Operación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-200">Neto</td>
                <td className="px-4 py-2 border border-gray-200">IVA</td>
                <td className="px-4 py-2 border border-gray-200 font-mono">Neto × 0,19</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-200">Neto</td>
                <td className="px-4 py-2 border border-gray-200">Bruto</td>
                <td className="px-4 py-2 border border-gray-200 font-mono">Neto × 1,19</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-200">Bruto</td>
                <td className="px-4 py-2 border border-gray-200">Neto</td>
                <td className="px-4 py-2 border border-gray-200 font-mono">Bruto / 1,19</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-200">Bruto</td>
                <td className="px-4 py-2 border border-gray-200">IVA</td>
                <td className="px-4 py-2 border border-gray-200 font-mono">Bruto − (Bruto / 1,19)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <Link
            href={tool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Usar calculadora de IVA Chile →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿Por qué se divide por 1,19 y no por 0,19?</h3>
            <p>
              El bruto representa el 119% del neto. Para recuperar el 100% (neto), se divide
              entre 1,19. Dividir entre 0,19 daría el neto correspondiente solo al IVA, que es
              incorrecto.
            </p>
          </div>
          <div>
            <h3>¿Estas fórmulas cambian si el IVA cambia?</h3>
            <p>
              Sí. Si la tasa cambia, reemplaza 0,19 por la nueva tasa y 1,19 por (1 + nueva tasa).
              Actualmente en Chile la tasa general es 19%.
            </p>
          </div>
          <div>
            <h3>¿La calculadora usa estas mismas fórmulas?</h3>
            <p>Sí. La calculadora aplica exactamente estas fórmulas.</p>
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
