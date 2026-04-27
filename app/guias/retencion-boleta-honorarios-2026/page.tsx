import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const mainTool = getToolBySlug("calculadora-boleta-honorarios-chile")!;
const relatedGuides = GUIDES.filter((guide) =>
  [
    "boleta-honorarios-chile",
    "calcular-liquido-boleta-honorarios",
    "cuanto-retiene-boleta-honorarios",
    "boleta-honorarios-retencion-porcentaje",
  ].includes(guide.slug),
);

export const metadata: Metadata = {
  title: "Retención de boleta de honorarios 2026 — Tasa, fórmula y ejemplos",
  description:
    "La retención de boleta de honorarios en Chile 2026 es 15,25% (Ley 21.133). Fórmula para calcular líquido desde bruto y bruto desde líquido.",
  alternates: {
    canonical: "/guias/retencion-boleta-honorarios-2026",
  },
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
          La retención es el porcentaje que quien paga descuenta del monto bruto de una boleta de
          honorarios y entera directamente al SII. Conocer la tasa vigente permite calcular con
          precisión cuánto recibirás — o cuánto debes emitir para recibir un monto específico.
        </p>

        <h2>La tasa vigente en 2026</h2>
        <p>
          La tasa general de retención para 2026 es <strong>15,25%</strong>, establecida por la
          Ley N° 21.133 de modernización tributaria. Esta ley definió un calendario de incremento
          gradual desde el 10% en 2018 hasta llegar al 17% en 2028:
        </p>
        <ul>
          <li>2022: 13,75%</li>
          <li>2023: 14,5%</li>
          <li>2024: 15%</li>
          <li>2025: 15%</li>
          <li><strong>2026: 15,25%</strong></li>
          <li>2027: 16%</li>
          <li>2028 en adelante: 17%</li>
        </ul>
        <p className="text-sm text-gray-500">
          Nota: las tasas futuras pueden modificarse por cambios normativos. Verifica siempre en
          el sitio del SII antes de emitir.
        </p>

        <h2>La fórmula de retención</h2>
        <p className="font-semibold text-gray-700 mb-1">Desde monto bruto:</p>
        <pre className="bg-gray-100 rounded-lg px-4 py-3 text-sm overflow-x-auto">
{`Retención = Bruto × 0,1525
Líquido   = Bruto × 0,8475`}
        </pre>

        <p className="font-semibold text-gray-700 mb-1 mt-4">Desde monto líquido deseado:</p>
        <pre className="bg-gray-100 rounded-lg px-4 py-3 text-sm overflow-x-auto">
{`Bruto     = Líquido / 0,8475
Retención = Bruto − Líquido`}
        </pre>

        <h2>Ejemplo práctico</h2>
        <div className="my-6 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-2">Ejemplo 1 — desde bruto</p>
          <p className="text-sm text-green-700 mb-3">
            Emites boleta por $200.000 → retención $30.500 → recibes $169.500
          </p>
          <p className="text-sm text-green-800 font-medium mb-2">Ejemplo 2 — desde líquido</p>
          <p className="text-sm text-green-700">
            Quieres recibir $200.000 → debes emitir por $236.686 → retención $36.686
          </p>
        </div>

        <h2>Caso especial: Préstamo Solidario COVID</h2>
        <p>
          Quienes recibieron el Préstamo Solidario durante la pandemia (Leyes 21.242 y 21.252) y
          aún tienen deuda pendiente aplican una retención adicional del 3%, lo que eleva la tasa
          total a <strong>18,25%</strong>.
        </p>
        <pre className="bg-gray-100 rounded-lg px-4 py-3 text-sm overflow-x-auto">
{`Retención = Bruto × 0,1825
Líquido   = Bruto × 0,8175`}
        </pre>
        <p>
          Esta retención adicional se aplica automáticamente hasta que la deuda esté completamente
          pagada. Puedes verificar tu saldo en el portal del SII con tu RUT y clave tributaria.
        </p>

        <h2>¿Cuándo no aplica la retención?</h2>
        <p>
          La retención no aplica cuando el pagador es una persona natural que no lleva
          contabilidad. En ese caso, el trabajador independiente debe provisionar el impuesto por
          su cuenta y pagarlo en la declaración anual. También hay exenciones para montos bajos
          en ciertos regímenes especiales — consulta con un contador si tu situación es particular.
        </p>

        <h2>¿Adónde va la retención?</h2>
        <p>
          El impuesto retenido no se pierde: quien paga lo entera al SII a nombre del trabajador
          independiente. Ese monto queda acreditado y se descuenta en la declaración anual de
          renta (Formulario 22). Si la retención acumulada supera lo que debes pagar según tu
          tramo de impuesto, tienes derecho a devolución.
        </p>

        <h2>Cuándo usar la calculadora</h2>
        <p>
          Úsala antes de emitir una boleta o al acordar los honorarios con un cliente. Saber
          el bruto que debes emitir para recibir el líquido que necesitas evita negociaciones
          incómodas después.
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
            <p>
              La tasa general es 15,25% según la Ley N° 21.133. Para quienes tienen deuda del
              Préstamo Solidario COVID, la tasa sube a 18,25%.
            </p>
          </div>
          <div>
            <h3>¿Cuándo sube al 17%?</h3>
            <p>
              La tasa llega al 17% en 2028, según el calendario definido en la Ley N° 21.133.
              Entre 2026 y 2027 la tasa sigue en 15,25% y 16% respectivamente.
            </p>
          </div>
          <div>
            <h3>¿Cómo sé si tengo deuda del Préstamo Solidario?</h3>
            <p>
              Puedes verificarlo en el portal del SII con tu RUT y clave tributaria en la sección
              de Préstamo Solidario. Si tienes deuda, tu retención será 18,25% hasta saldarla.
            </p>
          </div>
          <div>
            <h3>¿Por qué el cálculo es referencial?</h3>
            <p>
              Porque la tasa puede cambiar por normativas futuras, y algunas situaciones
              particulares tienen reglas distintas. Para decisiones tributarias importantes,
              consulta con un contador o con el SII.
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
