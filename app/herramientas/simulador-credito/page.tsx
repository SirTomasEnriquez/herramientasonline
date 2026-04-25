import type { Metadata } from "next";
import LoanSimulator from "@/components/LoanSimulator";

export const metadata: Metadata = {
  title: "Simulador de Crédito con Tabla de Amortización — Toolbox",
  description:
    "Calcula tu crédito en segundos. Ingresa monto, tasa y plazo y obtén la cuota mensual y la tabla completa de amortización.",
};

export default function SimuladorCreditoPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Tool zone */}
      <section className="max-w-2xl mx-auto mb-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Simulador de crédito con tabla de amortización en Chile
          </h1>
          <p className="mt-3 text-base text-gray-500">
            Ingresa monto, tasa y plazo para calcular tu cuota mensual y ver el detalle completo. Sin registro, sin fricción.
          </p>
        </div>
        <LoanSimulator />
      </section>

      {/* SEO content zone */}
      <section className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-gray-600 leading-relaxed">
          Este simulador de crédito permite calcular la cuota mensual de un préstamo y ver el
          detalle completo de amortización. Es útil para evaluar créditos de consumo,
          hipotecarios o decisiones financieras en negocios.
        </p>
      </section>
    </main>
  );
}
