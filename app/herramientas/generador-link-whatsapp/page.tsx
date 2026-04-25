import type { Metadata } from "next";
import WhatsAppLinkGenerator from "@/components/WhatsAppLinkGenerator";
import RelatedTools from "@/components/RelatedTools";

const BASE_URL = "https://toolbox.cl";
const PAGE_PATH = "/herramientas/generador-link-whatsapp";
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Generador de link de WhatsApp gratis — Toolbox",
  description:
    "Crea tu link de WhatsApp en segundos. Pega el número, agrega un mensaje opcional y comparte el enlace directo. Sin apps, sin registro.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Generador de link de WhatsApp gratis",
    description:
      "Crea tu link de WhatsApp en segundos. Pega el número, agrega un mensaje opcional y comparte el enlace directo. Sin apps, sin registro.",
    url: PAGE_PATH,
    siteName: "Toolbox",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Generador de link de WhatsApp gratis — Toolbox",
    description:
      "Crea tu link de WhatsApp en segundos. Sin apps, sin registro.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Necesito tener WhatsApp instalado para usar esta herramienta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La herramienta genera el link en tu navegador. Quien hace clic en el link sí necesita WhatsApp instalado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Funciona para WhatsApp Business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El link funciona exactamente igual para cuentas personales y cuentas de WhatsApp Business.",
      },
    },
    {
      "@type": "Question",
      name: "¿El mensaje predeterminado es obligatorio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Puedes generar un link solo con el número y quien haga clic abrirá WhatsApp con el chat vacío.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo agregar un mensaje automático al link de WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Al generar el link puedes escribir un mensaje predeterminado que aparecerá listo para enviar cuando alguien haga clic. Es ideal para consultas de ventas, atención al cliente o campañas específicas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo comparto el link de WhatsApp generado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una vez generado, copia el link y pégalo donde quieras: bio de Instagram, TikTok, firma de correo electrónico, publicaciones de ventas, página web o cualquier canal digital.",
      },
    },
    {
      "@type": "Question",
      name: "¿Funciona el generador para Chile y otros países de Latinoamérica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Incluye códigos de país para Chile (+56), Argentina, México, Colombia, Perú, Uruguay, Bolivia, Ecuador, Paraguay y Centroamérica. El link generado funciona con cualquier número de WhatsApp del mundo.",
      },
    },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Generador de link de WhatsApp gratis",
  url: PAGE_URL,
  description:
    "Herramienta gratuita para crear links de WhatsApp con mensaje predeterminado. Sin registro. Disponible para Chile y Latinoamérica.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  inLanguage: "es",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CLP",
  },
  areaServed: ["CL", "AR", "MX", "CO", "PE", "UY", "BO", "EC", "PY"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Herramientas",
      item: `${BASE_URL}/herramientas`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Generador de link de WhatsApp",
      item: PAGE_URL,
    },
  ],
};

export default function GeneradorLinkWhatsAppPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          Cómo crear tu link de WhatsApp
        </h2>
        <ol className="text-gray-600 space-y-2 mt-2 pl-5 list-decimal">
          <li>Selecciona el código de país (Chile es <strong>+56</strong>).</li>
          <li>Escribe tu número de teléfono sin el cero inicial.</li>
          <li>Agrega un mensaje predeterminado (opcional) que verá quien haga clic.</li>
          <li>Haz clic en <strong>Generar link</strong>.</li>
          <li>Copia el link y compártelo donde quieras.</li>
        </ol>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          Funciona en Chile y Latinoamérica
        </h2>
        <p className="text-gray-600 leading-relaxed">
          El generador incluye códigos de país para Chile (+56), Argentina, México, Colombia, Perú,
          Uruguay, Bolivia, Ecuador, Paraguay y países de Centroamérica. También funciona para
          España, Reino Unido y Estados Unidos. El link generado funciona con cualquier número de
          WhatsApp del mundo, sin restricciones geográficas.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          Casos de uso frecuentes
        </h2>
        <ul className="text-gray-600 space-y-2 mt-2">
          <li>
            <strong>Instagram y redes sociales:</strong> pon el link en tu bio para recibir
            consultas sin que el cliente guarde tu número.
          </li>
          <li>
            <strong>WhatsApp Business:</strong> compatible con cuentas personales y business.
            Ideal para catálogos y atención al cliente.
          </li>
          <li>
            <strong>Ventas y e-commerce:</strong> incluye el link en tus publicaciones para
            cerrar ventas directamente por chat.
          </li>
          <li>
            <strong>Firma de correo electrónico:</strong> agrega el link en tu firma para que
            clientes puedan escribirte en un clic.
          </li>
          <li>
            <strong>Campañas digitales:</strong> usa un mensaje predeterminado con el nombre de
            la campaña para identificar el origen de cada consulta.
          </li>
        </ul>

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

          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              ¿Puedo agregar un mensaje automático al link?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Sí. Escribe el mensaje en el campo opcional antes de generar el link. Ese texto
              aparecerá pre-cargado en el chat de quien haga clic, listo para enviar.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              ¿Cómo comparto el link generado?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Copia el link con el botón <strong>Copiar</strong> y pégalo donde necesites: bio de
              Instagram, publicación de Facebook, correo, página web o cualquier canal digital.
            </p>
          </div>
        </div>
      </section>

      <RelatedTools currentHref="/herramientas/generador-link-whatsapp" />
    </main>
  );
}
