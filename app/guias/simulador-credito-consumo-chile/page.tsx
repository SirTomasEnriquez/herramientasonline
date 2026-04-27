import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const mainTool = getToolBySlug("simulador-credito")!;
const relatedGuides = GUIDES.filter((guide) =>
  ["simular-credito", "como-calcular-cuota-credito", "simulador-credito-hipotecario"].includes(
    guide.slug,
  ),
);

export const metadata: Metadata = {
  title: "Simulador de crédito de consumo en Chile — Herramientas Online",
  description:
    "Simula un crédito de consumo en Chile antes de pedirlo. Calcula la cuota mensual, el costo total y los intereses según monto, tasa y plazo.",
  alternates: {
    canonical: "/guias/simulador-credito-consumo-chile",
  },
};

export default function SimuladorCreditoConsumoChilePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Simulador de crédito de consumo en Chile
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Un crédito de consumo es el préstamo más común en Chile: se usa para compras, emergencias o
          capital de trabajo. Simular la cuota antes de pedirlo evita comprometer más flujo del que
          puedes pagar.
        </p>

        <h2>Qué es un crédito de consumo</h2>
        <p>
          Es un préstamo de corto o mediano plazo entregado por un banco, caja de compensación o
          cooperativa. En Chile los plazos más habituales van de 12 a 60 meses, y las tasas varían
          según la institución, el monto y el historial crediticio del solicitante.
        </p>
        <p>
          La tasa de un crédito de consumo en Chile suele ser mensual y está regulada por la Tasa
          Máxima Convencional (TMC) que fija la Comisión para el Mercado Financiero (CMF).
        </p>

        <h2>Cómo simular un crédito de consumo</h2>
        <p>Para estimar la cuota necesitas tres datos:</p>
        <ul>
          <li><strong>Monto:</strong> cuánto quieres pedir.</li>
          <li><strong>Tasa mensual:</strong> el interés que cobrará la institución.</li>
          <li><strong>Plazo:</strong> en cuántas cuotas lo devolverás.</li>
        </ul>
        <p>
          El simulador calcula la cuota con el sistema francés (cuota fija) y muestra la tabla de
          amortización completa con el detalle de capital e intereses por mes.
        </p>

        <h2>Ejemplo práctico</h2>
        <div className="not-prose my-4 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-2">Simulación de ejemplo</p>
          <ul className="text-sm text-green-700 space-y-1">
            <li><strong>Monto:</strong> $2.000.000</li>
            <li><strong>Tasa mensual:</strong> 1,8%</li>
            <li><strong>Plazo:</strong> 24 cuotas</li>
            <li><strong>Cuota estimada:</strong> ~$100.400/mes</li>
            <li><strong>Costo total:</strong> ~$2.409.600</li>
            <li><strong>Intereses totales:</strong> ~$409.600</li>
          </ul>
        </div>
        <p>
          A mayor plazo, la cuota baja pero el costo total sube. A menor plazo, la cuota sube pero
          pagas menos intereses en total.
        </p>

        <h2>Qué tener en cuenta antes de pedir un crédito de consumo</h2>
        <ul>
          <li>
            <strong>CAE (Costo Anual Equivalente):</strong> incluye intereses, seguros y comisiones.
            Es la cifra real para comparar entre instituciones.
          </li>
          <li>
            <strong>Seguro de desgravamen:</strong> la mayoría de bancos lo cobran mensualmente y
            se suma a la cuota.
          </li>
          <li>
            <strong>Prepago:</strong> revisa si puedes pagar antes sin multa. Algunos créditos
            cobran comisión por prepago anticipado.
          </li>
          <li>
            <strong>Relación cuota/ingreso:</strong> la cuota no debería superar el 25–30% de tus
            ingresos mensuales netos para no comprometer el flujo.
          </li>
        </ul>

        <p>
          <Link
            href={mainTool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Simular crédito de consumo →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿Cuál es la tasa promedio de un crédito de consumo en Chile?</h3>
            <p>
              Las tasas varían según la institución y el perfil del solicitante. En Chile, las tasas
              mensuales de créditos de consumo suelen estar entre 0,8% y 3,5% mensual. Compara el
              CAE entre instituciones para evaluar el costo real.
            </p>
          </div>
          <div>
            <h3>¿Puedo simular un crédito de consumo sin ir al banco?</h3>
            <p>
              Sí. Con el simulador obtienes la cuota estimada y la tabla de amortización completa
              ingresando el monto, la tasa y el plazo. No requiere registro ni datos personales.
            </p>
          </div>
          <div>
            <h3>¿La cuota simulada es definitiva?</h3>
            <p>
              No. Es una estimación basada en los datos ingresados. La cuota real puede incluir
              seguros, comisiones y otros costos que varía según la institución.
            </p>
          </div>
          <div>
            <h3>¿Cómo sé si puedo pagar la cuota?</h3>
            <p>
              Compara la cuota simulada con tus ingresos mensuales netos. Si la cuota supera el
              30% de tus ingresos, puede comprometer tu flujo de caja.
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
            <Link href="/herramientas">Ver herramientas disponibles</Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
