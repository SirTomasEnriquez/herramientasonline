import type { Metadata } from "next";
import WhatsAppLinkGenerator from "@/components/WhatsAppLinkGenerator";

export const metadata: Metadata = {
  title: "Generador de link de WhatsApp gratis — Toolbox",
  description:
    "Crea tu link de WhatsApp en segundos. Pega el número, agrega un mensaje opcional y comparte el enlace directo. Sin apps, sin registro.",
};

export default function GeneradorLinkWhatsAppPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Tool zone */}
      <section className="max-w-lg mx-auto mb-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Generador de link de WhatsApp gratis
          </h1>
          <p className="mt-3 text-base text-gray-500">
            Crea tu enlace directo en segundos. Sin apps, sin registro.
          </p>
        </div>
        <WhatsAppLinkGenerator />
      </section>

      {/* SEO content zone */}
      <section className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          ¿Qué es un link de WhatsApp?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Un link de WhatsApp permite que cualquier persona inicie una conversación contigo con un
          solo clic, sin necesidad de guardar tu número. Es ideal para negocios, perfiles de redes
          sociales, firmas de email y campañas digitales.
        </p>

        <div className="my-6 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-1">Ejemplo de uso</p>
          <p className="text-sm text-green-700">
            Un negocio puede poner este enlace en Instagram para que sus clientes escriban
            directamente con el mensaje:{" "}
            <em>&ldquo;Hola, quiero más información.&rdquo;</em>
          </p>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          Preguntas frecuentes
        </h2>

        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              ¿Necesito tener WhatsApp instalado para usar esta herramienta?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              No. La herramienta genera el link en tu navegador. Quien hace clic en el link sí
              necesita WhatsApp instalado.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              ¿Funciona para WhatsApp Business?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Sí. El link funciona exactamente igual para cuentas personales y cuentas de WhatsApp
              Business.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              ¿El mensaje predeterminado es obligatorio?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              No. Puedes generar un link solo con el número y quien haga clic abrirá WhatsApp con
              el chat vacío.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
