import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const tool = getToolBySlug("generador-link-whatsapp")!;
const relatedGuides = GUIDES.filter((guide) =>
  ["como-hacer-link-de-whatsapp", "crear-link-whatsapp-para-instagram"].includes(guide.slug),
);

export const metadata: Metadata = {
  title: "Cómo crear un link de WhatsApp con mensaje — Herramientas Online",
  description:
    "Crea un link de WhatsApp con mensaje pre-cargado. El cliente hace clic y ya tiene el texto listo para enviar. Sin apps, sin registro.",
  alternates: {
    canonical: "/guias/link-whatsapp-con-mensaje",
  },
};

export default function LinkWhatsappConMensajePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Cómo crear un link de WhatsApp con mensaje
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Un link de WhatsApp con mensaje permite que quien haga clic abra el chat con un texto
          ya escrito, listo para enviar. Es ideal para ventas, atención al cliente y campañas
          donde quieres controlar el primer mensaje.
        </p>

        <h2>El formato del link</h2>
        <p>
          WhatsApp usa el dominio <code>wa.me</code> seguido del número internacional y, de forma
          opcional, el parámetro <code>text</code> con el mensaje codificado:
        </p>
        <div className="not-prose my-4 rounded-xl bg-gray-100 border border-gray-200 px-5 py-4 font-mono text-sm text-gray-700 break-all">
          https://wa.me/[código de país][número]?text=[mensaje codificado]
        </div>

        <h2>Ejemplo práctico</h2>
        <div className="not-prose my-4 rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-sm text-green-800 font-medium mb-2">Número chileno con mensaje</p>
          <p className="text-sm text-green-700 font-mono break-all">
            https://wa.me/56912345678?text=Hola%2C+quiero+más+información
          </p>
          <p className="text-sm text-green-600 mt-2">
            Quien haga clic verá el chat con el mensaje "Hola, quiero más información" listo para enviar.
          </p>
        </div>

        <h2>Para qué sirve el mensaje pre-cargado</h2>
        <ul>
          <li><strong>Ventas:</strong> "Hola, vi tu publicación y quiero cotizar."</li>
          <li><strong>Soporte:</strong> "Necesito ayuda con mi pedido #"</li>
          <li><strong>Campañas:</strong> identifica el origen con el nombre de la campaña.</li>
          <li><strong>Catálogo:</strong> "Quiero ver los productos disponibles."</li>
        </ul>
        <p>
          El mensaje es editable: quien hace clic puede modificarlo antes de enviarlo.
        </p>

        <p>
          <Link
            href={tool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Generar link de WhatsApp con mensaje →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿El mensaje es obligatorio?</h3>
            <p>
              No. Si omites el parámetro <code>?text=</code>, el link abre el chat vacío. Es
              útil cuando quieres que el cliente escriba libremente.
            </p>
          </div>
          <div>
            <h3>¿Funciona con WhatsApp Business?</h3>
            <p>
              Sí. El link funciona igual para números personales y de WhatsApp Business.
            </p>
          </div>
          <div>
            <h3>¿Cómo incluyo saltos de línea en el mensaje?</h3>
            <p>
              En la URL se usa <code>%0A</code> para representar un salto de línea. El generador
              los codifica automáticamente.
            </p>
          </div>
          <div>
            <h3>¿El link expira?</h3>
            <p>
              No. Los links de <code>wa.me</code> no tienen fecha de vencimiento. Puedes usarlos
              de forma permanente.
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
            <Link href={tool.href}>{tool.title}</Link>
          </li>
          <li>
            <Link href="/herramientas">Ver herramientas disponibles</Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
