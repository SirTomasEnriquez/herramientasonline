import type { Metadata } from "next";
import IvaChileCalculator from "@/components/IvaChileCalculator";

export const metadata: Metadata = {
  title: "Calculadora de IVA Chile — Toolbox",
  description:
    "Calcula el IVA en Chile de forma rápida. Ingresa un monto neto o bruto y obtén el IVA 19%, el total y el valor sin impuesto.",
};

export default function CalculadoraIvaChilePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Tool zone */}
      <section className="max-w-lg mx-auto mb-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Calculadora de IVA Chile
          </h1>
          <p className="mt-3 text-base text-gray-500">
            Calcula el IVA 19% desde monto neto o bruto. Sin registro, sin fricción.
          </p>
        </div>
        <IvaChileCalculator />
      </section>

      {/* SEO content zone */}
      <section className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          ¿Para qué sirve esta calculadora?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Esta calculadora de IVA Chile te permite verificar que el monto neto ingresado en una
          factura es correcto, confirmar el cálculo del IVA 19% y validar el total antes de emitir
          o registrar la factura en el Servicio de Impuestos Internos (SII).
        </p>
        <p className="text-gray-600 leading-relaxed mt-3">
          Especialmente útil para quienes emiten facturas en el SII y necesitan confirmar que el
          monto neto, el IVA y el total están correctamente calculados.
        </p>

        <div className="my-6 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-1">Ejemplo de uso</p>
          <p className="text-sm text-green-700">
            Si ingresas un monto neto de $100.000, la herramienta calcula $19.000 de IVA y un
            total bruto de $119.000.
          </p>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          Preguntas frecuentes
        </h2>

        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              ¿Cuál es el IVA en Chile?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              El IVA general en Chile es 19%.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              ¿Qué diferencia hay entre monto neto y monto bruto?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              El monto neto es el valor sin IVA. El monto bruto es el valor final con IVA incluido.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              ¿Esta calculadora reemplaza asesoría contable?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              No. Es una herramienta referencial para cálculos simples y no reemplaza asesoría
              contable o tributaria.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
