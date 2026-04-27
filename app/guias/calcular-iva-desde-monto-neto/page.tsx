import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const mainTool = getToolBySlug("calculadora-iva-chile")!;
const relatedGuides = GUIDES.filter((guide) =>
  [
    "calcular-iva-chile",
    "calcular-iva-desde-monto-bruto",
    "como-calcular-precio-con-iva",
    "calcular-iva-19-porciento-chile",
  ].includes(guide.slug),
);

export const metadata: Metadata = {
  title: "Cómo calcular IVA desde un monto neto en Chile — Fórmula y ejemplos",
  description:
    "Aprende a calcular el IVA 19% y el monto bruto desde un valor neto. Fórmula, tabla de ejemplos y cuándo usarla.",
  alternates: {
    canonical: "/guias/calcular-iva-desde-monto-neto",
  },
};

export default function CalcularIvaDesdeMontoNetoGuidePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Cómo calcular IVA desde un monto neto
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Cuando tienes el valor base de un producto o servicio sin impuesto y necesitas obtener
          el IVA y el total final, estás calculando desde el neto. Es el punto de partida más
          habitual al emitir una factura, armar una cotización o definir un precio de venta.
        </p>

        <h2>¿Cuándo partes desde el neto?</h2>
        <p>
          Partes desde el neto cuando conoces el precio base sin impuesto y necesitas calcular
          cuánto IVA agregar y cuál será el total que pagará el cliente. Situaciones comunes:
        </p>
        <ul>
          <li>Emitir una factura en el portal del SII — el sistema te pide el neto primero.</li>
          <li>Armar una cotización indicando precio neto más IVA.</li>
          <li>Calcular el precio de venta a público desde el costo neto más margen.</li>
          <li>Verificar que el IVA de una factura emitida está bien calculado.</li>
        </ul>

        <h2>La fórmula</h2>
        <p>
          El IVA en Chile es 19% aplicado sobre el monto neto. El total (bruto) es el neto más
          ese 19%:
        </p>
        <pre className="bg-gray-100 rounded-lg px-4 py-3 text-sm overflow-x-auto">
{`IVA   = Neto × 0,19
Bruto = Neto × 1,19`}
        </pre>
        <p className="text-sm text-gray-500 mt-2">
          El factor 1,19 es equivalente a multiplicar el neto por (1 + 0,19), es decir, el neto
          más el 19% sobre el neto, en un solo paso.
        </p>

        <h2>Ejemplos con números reales</h2>
        <div className="my-6 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-2">Ejemplo 1</p>
          <p className="text-sm text-green-700 mb-3">
            Neto $100.000 → IVA $19.000 → Bruto $119.000
          </p>
          <p className="text-sm text-green-800 font-medium mb-2">Ejemplo 2</p>
          <p className="text-sm text-green-700 mb-3">
            Neto $50.000 → IVA $9.500 → Bruto $59.500
          </p>
          <p className="text-sm text-green-800 font-medium mb-2">Ejemplo 3</p>
          <p className="text-sm text-green-700">
            Neto $350.000 → IVA $66.500 → Bruto $416.500
          </p>
        </div>

        <h2>¿Por qué multiplico por 1,19?</h2>
        <p>
          Porque el bruto es igual al neto más el 19% del neto. Si desglosas la operación:
        </p>
        <pre className="bg-gray-100 rounded-lg px-4 py-3 text-sm overflow-x-auto">
{`Bruto = Neto + (Neto × 0,19)
Bruto = Neto × (1 + 0,19)
Bruto = Neto × 1,19`}
        </pre>
        <p>
          Multiplicar por 1,19 en un solo paso es equivalente a calcular el IVA y sumarlo — solo
          más rápido.
        </p>

        <h2>Tabla de referencia rápida</h2>
        <div className="overflow-x-auto">
          <table className="text-sm w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-3 py-2 font-semibold text-gray-700">Neto</th>
                <th className="text-left px-3 py-2 font-semibold text-gray-700">IVA (19%)</th>
                <th className="text-left px-3 py-2 font-semibold text-gray-700">Bruto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="px-3 py-2">$10.000</td><td className="px-3 py-2">$1.900</td><td className="px-3 py-2">$11.900</td></tr>
              <tr><td className="px-3 py-2">$50.000</td><td className="px-3 py-2">$9.500</td><td className="px-3 py-2">$59.500</td></tr>
              <tr><td className="px-3 py-2">$100.000</td><td className="px-3 py-2">$19.000</td><td className="px-3 py-2">$119.000</td></tr>
              <tr><td className="px-3 py-2">$500.000</td><td className="px-3 py-2">$95.000</td><td className="px-3 py-2">$595.000</td></tr>
              <tr><td className="px-3 py-2">$1.000.000</td><td className="px-3 py-2">$190.000</td><td className="px-3 py-2">$1.190.000</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Cuándo usar la calculadora</h2>
        <p>
          Usa la calculadora cuando necesitas calcular el IVA y el total desde un neto rápidamente.
          Especialmente útil al emitir facturas, revisar cotizaciones o definir precios con IVA
          incluido. El resultado es referencial para operaciones afectas al IVA general del 19%.
        </p>
        <p>
          Si tu actividad está exenta de IVA o aplica una tasa diferenciada, no uses esta
          calculadora — consulta con un contador.
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
            <h3>¿Qué es un monto neto?</h3>
            <p>
              Es el valor del bien o servicio antes de agregar IVA. En las facturas chilenas es
              la base imponible sobre la que se calcula el 19%.
            </p>
          </div>
          <div>
            <h3>¿Cómo calculo el IVA desde el neto?</h3>
            <p>
              Multiplica el monto neto por 0,19 para obtener el IVA, o por 1,19 para obtener
              directamente el total bruto.
            </p>
          </div>
          <div>
            <h3>¿El total bruto siempre es neto más IVA?</h3>
            <p>
              Para operaciones afectas al IVA general del 19%, sí. Existen tasas diferenciadas
              y exenciones en casos específicos — en esos casos el IVA puede ser distinto o no
              aplica.
            </p>
          </div>
          <div>
            <h3>¿Esta guía reemplaza asesoría contable?</h3>
            <p>
              No. Es una referencia para cálculos estándar. Para situaciones con exenciones,
              créditos fiscales, regímenes especiales o declaraciones complejas, consulta con
              un contador o con el SII.
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
            <Link href={mainTool.href}>{mainTool.title}</Link>
          </li>
          <li>
            <Link href="/herramientas">Ver todas las herramientas</Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
