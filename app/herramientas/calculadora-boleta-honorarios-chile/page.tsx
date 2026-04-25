import type { Metadata } from "next";
import BoletaHonorariosCalculator from "@/components/BoletaHonorariosCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Calculadora de Boleta de Honorarios Chile 2026 — Toolbox",
  description:
    "Calcula tu boleta de honorarios con la tasa oficial del SII 2026: 15,25% según Ley 21.133. Desde bruto o desde líquido. Incluye el caso del Préstamo Solidario COVID.",
};

export default function CalculadoraBoletaHonorariosPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Tool zone */}
      <section className="max-w-lg mx-auto mb-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Calculadora de Boleta de Honorarios Chile 2026 — Tasa oficial SII: 15,25%
          </h1>
          <p className="mt-3 text-base text-gray-500">
            Calcula desde monto bruto o desde lo que quieres recibir. Sin registro, sin fricción.
          </p>
        </div>
        <BoletaHonorariosCalculator />
      </section>

      {/* SEO content zone */}
      <section className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          ¿Para qué sirve esta calculadora?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Esta calculadora usa la tasa oficial del Servicio de Impuestos Internos (SII) vigente
          para 2026: 15,25%, según la Ley N° 21.133. Permite validar correctamente el monto neto,
          el impuesto retenido y el total a recibir antes de emitir una boleta de honorarios.
        </p>

        <div className="my-6 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-1">Ejemplo de uso</p>
          <p className="text-sm text-green-700">
            Si emites una boleta por $100.000, el impuesto retenido es $15.250 y recibirás
            $84.750. Si quieres recibir $100.000, debes emitir la boleta por $118.343.
          </p>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          ¿Qué pasa con la retención?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Cuando emites una boleta de honorarios, quien te paga retiene el impuesto correspondiente
          y lo entera directamente al SII. Tú recibes el monto líquido, es decir, el bruto menos
          la retención. Ese impuesto retenido queda acreditado a tu nombre y puedes usarlo en tu
          declaración anual de renta.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          ¿Quiénes están exentos?
        </h2>
        <ul className="text-gray-600 space-y-1.5 mt-2">
          <li>Boletas emitidas a personas naturales que no llevan contabilidad</li>
          <li>Boletas cuyo monto bruto no supera las 2 UTM mensuales (en ciertos casos)</li>
          <li>Personas exentas según normativa específica del SII</li>
        </ul>
        <p className="text-gray-500 text-sm mt-2">
          Si tienes dudas sobre tu situación particular, consulta con un contador o revisa el
          sitio oficial del SII.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          ¿Qué es el Préstamo Solidario COVID?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Durante la pandemia, el Estado otorgó préstamos solidarios a trabajadores independientes
          a través de las Leyes 21.242 y 21.252. Quienes tienen deuda pendiente tienen una
          retención adicional del 3% en sus boletas de honorarios (18,25% total) hasta saldar
          el préstamo. Puedes verificar tu saldo en el sitio del SII.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          Preguntas frecuentes
        </h2>

        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              ¿Cuál es la tasa de retención de boleta de honorarios en Chile 2026?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              La tasa general es 15,25% según la Ley N° 21.133. Para quienes tienen deuda del
              Préstamo Solidario COVID, la tasa es 18,25%.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              ¿Qué diferencia hay entre monto bruto y monto líquido en una boleta?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              El monto bruto es el valor total de la boleta. El monto líquido es lo que efectivamente
              recibes después de descontar el impuesto retenido.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              ¿Esta calculadora reemplaza asesoría contable?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              No. Es una herramienta referencial basada en la tasa oficial SII 2026 (Ley 21.133)
              y no reemplaza asesoría contable o tributaria.
            </p>
          </div>
        </div>
      </section>

      <RelatedTools currentHref="/herramientas/calculadora-boleta-honorarios-chile" />
    </main>
  );
}
