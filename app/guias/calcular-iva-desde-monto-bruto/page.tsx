import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const mainTool = getToolBySlug("calculadora-iva-chile")!;
const relatedGuides = GUIDES.filter((guide) =>
  [
    "calcular-iva-chile",
    "calcular-iva-desde-monto-neto",
    "como-calcular-neto-desde-bruto",
    "formula-del-iva-chile",
  ].includes(guide.slug),
);

export const metadata: Metadata = {
  title: "Cómo calcular IVA desde un monto bruto en Chile — Fórmula y ejemplos",
  description:
    "Aprende a separar el monto neto y el IVA 19% desde un precio con IVA incluido. Fórmula, ejemplos y error frecuente a evitar.",
  alternates: {
    canonical: "/guias/calcular-iva-desde-monto-bruto",
  },
};

export default function CalcularIvaDesdeMontoBrutoGuidePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Cómo calcular IVA desde un monto bruto
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Cuando tienes un precio final con IVA incluido y necesitas separarlo en monto neto e IVA,
          estás calculando desde el bruto. Es el caso más común al revisar una factura, una boleta
          de compra o un precio de etiqueta que ya incluye el impuesto.
        </p>

        <h2>¿Cuándo partes desde el bruto?</h2>
        <p>
          Partes desde el bruto cuando ya tienes el total final y necesitas descomponer cuánto
          corresponde al precio neto del bien o servicio y cuánto al IVA. Situaciones frecuentes:
        </p>
        <ul>
          <li>Revisar si una factura recibida tiene el IVA bien calculado.</li>
          <li>Separar el IVA de un precio de retail para registrar el costo neto.</li>
          <li>Verificar el monto neto que va como base imponible en un documento.</li>
          <li>Calcular el crédito fiscal a recuperar en tu declaración mensual de IVA.</li>
        </ul>

        <h2>La fórmula</h2>
        <p>
          El IVA del 19% se aplica sobre el neto, no sobre el bruto. Para extraer el neto desde
          el bruto se divide por el factor 1,19:
        </p>
        <pre className="bg-gray-100 rounded-lg px-4 py-3 text-sm overflow-x-auto">
{`Neto = Bruto / 1,19
IVA  = Bruto − Neto`}
        </pre>
        <p className="text-sm text-gray-500 mt-2">
          También puedes calcular el IVA directamente multiplicando el bruto por el factor 0,1597
          (que es 0,19 / 1,19), pero el resultado puede diferir en un peso por redondeo.
        </p>

        <h2>Ejemplos con números reales</h2>
        <div className="my-6 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-2">Ejemplo 1</p>
          <p className="text-sm text-green-700 mb-3">
            Bruto $119.000 → Neto $100.000 → IVA $19.000
          </p>
          <p className="text-sm text-green-800 font-medium mb-2">Ejemplo 2</p>
          <p className="text-sm text-green-700 mb-3">
            Bruto $59.500 → Neto $50.000 → IVA $9.500
          </p>
          <p className="text-sm text-green-800 font-medium mb-2">Ejemplo 3</p>
          <p className="text-sm text-green-700">
            Bruto $250.000 → Neto $210.084 → IVA $39.916
          </p>
        </div>

        <h2>Error frecuente: multiplicar el bruto por 0,19</h2>
        <p>
          El error más común es multiplicar directamente el monto bruto por 0,19 para obtener el
          IVA. Ese resultado es incorrecto porque el 19% se aplica sobre el neto, no sobre el total.
        </p>
        <pre className="bg-gray-100 rounded-lg px-4 py-3 text-sm overflow-x-auto">
{`❌ Incorrecto: IVA = Bruto × 0,19
   $119.000 × 0,19 = $22.610  ← resultado inflado

✓ Correcto: Neto = Bruto / 1,19 → IVA = Bruto − Neto
  $119.000 / 1,19 = $100.000 → IVA = $19.000`}
        </pre>
        <p>
          La diferencia puede parecer pequeña en montos bajos, pero en facturas grandes el error
          se vuelve significativo y puede afectar la declaración de IVA.
        </p>

        <h2>¿Cómo verifico que el cálculo es correcto?</h2>
        <p>
          Verificación simple: toma el neto obtenido y multiplícalo por 1,19. Si obtienes el monto
          bruto original, el cálculo está correcto.
        </p>
        <pre className="bg-gray-100 rounded-lg px-4 py-3 text-sm overflow-x-auto">
{`Verificación: Neto × 1,19 = Bruto
$100.000 × 1,19 = $119.000 ✓`}
        </pre>

        <h2>Cuándo usar la calculadora</h2>
        <p>
          Usa la calculadora cuando necesitas separar el IVA de un total rápidamente, sin hacer
          el cálculo manual. El resultado es referencial y no reemplaza una revisión contable en
          operaciones con condiciones tributarias especiales.
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
            <h3>¿Qué es un monto bruto?</h3>
            <p>
              Es el precio final con IVA incluido. En Chile, las facturas electrónicas siempre
              muestran el monto neto, el IVA y el total (bruto) por separado.
            </p>
          </div>
          <div>
            <h3>¿Por qué divido por 1,19 y no por 0,19?</h3>
            <p>
              Porque el bruto equivale al neto multiplicado por 1,19 (neto + 19% de neto). Para
              revertir esa operación, divides por 1,19. Dividir por 0,19 daría un resultado
              completamente diferente y erróneo.
            </p>
          </div>
          <div>
            <h3>¿Cuándo conviene calcular desde bruto?</h3>
            <p>
              Cuando recibes una factura, un precio de retail o cualquier monto que ya incluye el
              IVA y necesitas separar la base imponible del impuesto.
            </p>
          </div>
          <div>
            <h3>¿El resultado siempre es exacto?</h3>
            <p>
              En la mayoría de los casos sí, pero puede haber diferencias de $1 por redondeo. El
              SII acepta estas diferencias mínimas en las declaraciones. Para montos grandes,
              verifica con la calculadora y compara con el documento original.
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
