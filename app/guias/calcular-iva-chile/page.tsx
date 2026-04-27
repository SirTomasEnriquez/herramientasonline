import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const mainTool = getToolBySlug("calculadora-iva-chile")!;
const relatedTool = getToolBySlug("calculadora-boleta-honorarios-chile")!;
const relatedGuides = GUIDES.filter((guide) =>
  [
    "calcular-iva-desde-monto-bruto",
    "calcular-iva-desde-monto-neto",
    "calcular-iva-19-porciento-chile",
    "formula-del-iva-chile",
    "cuanto-es-el-iva-en-chile",
  ].includes(guide.slug),
);

export const metadata: Metadata = {
  title: "Cómo calcular IVA en Chile — Guía con fórmulas y ejemplos",
  description:
    "Aprende a calcular el IVA 19% en Chile: fórmulas desde monto neto y desde monto bruto, con ejemplos reales y tabla de referencia.",
  alternates: {
    canonical: "/guias/calcular-iva-chile",
  },
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
          El IVA (Impuesto al Valor Agregado) es un tributo del 19% que se aplica a la mayoría de
          las ventas y servicios en Chile. Entender cómo calcularlo permite revisar facturas,
          armar cotizaciones correctas y verificar precios antes de emitir o pagar un documento.
        </p>

        <h2>¿Qué es el IVA en Chile?</h2>
        <p>
          El IVA general en Chile es 19% y está establecido en el Decreto Ley 825. En toda
          transacción afecta aparecen tres valores:
        </p>
        <ul>
          <li><strong>Monto neto:</strong> el valor del bien o servicio sin impuesto.</li>
          <li><strong>IVA:</strong> el 19% que se aplica sobre el monto neto.</li>
          <li><strong>Monto bruto:</strong> el total final que incluye neto más IVA.</li>
        </ul>
        <p>
          El SII registra las facturas electrónicas con estos tres campos separados. Si tu empresa
          emite o recibe facturas, trabajar con los tres valores es parte del día a día.
        </p>

        <h2>La fórmula del IVA</h2>
        <p>Hay dos situaciones comunes: partiendo desde el neto o partiendo desde el bruto.</p>

        <p className="font-semibold text-gray-700 mb-1">Desde monto neto:</p>
        <pre className="bg-gray-100 rounded-lg px-4 py-3 text-sm overflow-x-auto">
{`IVA   = Neto × 0,19
Bruto = Neto × 1,19`}
        </pre>

        <p className="font-semibold text-gray-700 mb-1 mt-4">Desde monto bruto:</p>
        <pre className="bg-gray-100 rounded-lg px-4 py-3 text-sm overflow-x-auto">
{`Neto  = Bruto / 1,19
IVA   = Bruto − Neto`}
        </pre>

        <p className="text-sm text-gray-500 mt-2">
          Al calcular desde bruto, no multipliques por 0,19 directamente sobre el bruto — ese es
          un error frecuente. El 19% se aplica sobre el neto, no sobre el total.
        </p>

        <h2>Ejemplo con números reales</h2>
        <div className="my-6 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-2">Ejemplo 1 — desde neto</p>
          <p className="text-sm text-green-700 mb-3">
            Neto $100.000 → IVA $19.000 → Bruto $119.000
          </p>
          <p className="text-sm text-green-800 font-medium mb-2">Ejemplo 2 — desde bruto</p>
          <p className="text-sm text-green-700">
            Bruto $119.000 → Neto $100.000 → IVA $19.000
          </p>
        </div>

        <h2>¿Qué operaciones están afectas al IVA?</h2>
        <p>
          En general, todas las ventas habituales de bienes corporales muebles e inmuebles, y los
          servicios prestados o utilizados en territorio nacional. Esto incluye:
        </p>
        <ul>
          <li>Ventas de productos entre empresas y hacia consumidores finales.</li>
          <li>Servicios profesionales cuando son prestados como actividad habitual.</li>
          <li>Importaciones de bienes.</li>
          <li>Arrendamiento de inmuebles amoblados o con instalaciones.</li>
        </ul>

        <h2>¿Qué está exento de IVA?</h2>
        <p>
          Algunas operaciones están exentas o no afectas. Las más comunes para emprendedores:
        </p>
        <ul>
          <li>Servicios de educación en colegios e instituciones reconocidas.</li>
          <li>Servicios de salud prestados por hospitales o clínicas del Estado.</li>
          <li>Arriendos de inmuebles sin amoblar (en la mayoría de los casos).</li>
          <li>Boletas de honorarios — los trabajadores independientes tributan por otro mecanismo.</li>
        </ul>
        <p>
          Si tienes dudas sobre la situación tributaria de tu actividad, consulta directamente en
          el sitio del SII o con un contador.
        </p>

        <h2>Cuándo usar la calculadora</h2>
        <p>
          Usa la calculadora cuando necesites verificar un monto neto, calcular el IVA de una
          venta o comprobar que el total de una factura esté correcto. Es especialmente útil antes
          de emitir una factura en el portal del SII o al revisar una cotización recibida.
        </p>
        <p>
          El resultado es referencial. Si tu operación tiene condiciones especiales — tasas
          diferenciadas, exenciones o ajustes tributarios — valida con un contador.
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
            <p>
              El IVA general en Chile es 19%, establecido en el Decreto Ley 825. No ha cambiado
              desde 2003 cuando subió desde 18%.
            </p>
          </div>
          <div>
            <h3>¿Qué diferencia hay entre monto neto y monto bruto?</h3>
            <p>
              El monto neto es el valor sin IVA. El monto bruto es el total que incluye el IVA.
              En una factura chilena siempre aparecen los tres: neto, IVA y bruto.
            </p>
          </div>
          <div>
            <h3>¿Por qué no multiplico el bruto por 0,19 para obtener el IVA?</h3>
            <p>
              Porque el 19% se aplica sobre el neto, no sobre el bruto. Si multiplicas el bruto
              por 0,19 obtienes un valor mayor al IVA real. La fórmula correcta desde bruto es
              dividir por 1,19 primero para extraer el neto, y luego restar.
            </p>
          </div>
          <div>
            <h3>¿Esta guía reemplaza asesoría contable?</h3>
            <p>
              No. Es una guía de referencia para cálculos estándar. Para operaciones con
              exenciones, créditos fiscales o regímenes tributarios especiales, consulta con un
              contador o con el SII.
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
            <Link href={relatedTool.href}>{relatedTool.title}</Link>
          </li>
          <li>
            <Link href="/herramientas">Ver todas las herramientas</Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
