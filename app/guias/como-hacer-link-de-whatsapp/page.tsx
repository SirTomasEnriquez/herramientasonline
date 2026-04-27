import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const tool = getToolBySlug("generador-link-whatsapp")!;
const relatedGuides = GUIDES.filter((guide) =>
  ["link-whatsapp-con-mensaje", "crear-link-whatsapp-para-instagram"].includes(guide.slug),
);

export const metadata: Metadata = {
  title: "Cómo hacer un link de WhatsApp — Herramientas Online",
  description:
    "Aprende a hacer un link de WhatsApp en segundos. Dos métodos: manualmente con wa.me o con el generador automático gratuito.",
  alternates: {
    canonical: "/guias/como-hacer-link-de-whatsapp",
  },
};

export default function ComoHacerLinkDeWhatsappPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Cómo hacer un link de WhatsApp
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Un link de WhatsApp permite que cualquier persona inicie una conversación contigo con
          un solo clic, sin guardar tu número. Hay dos formas de hacerlo: manualmente o con un
          generador automático.
        </p>

        <h2>Método 1 — Manualmente con wa.me</h2>
        <p>
          Escribe directamente la URL con tu número internacional:
        </p>
        <div className="not-prose my-4 rounded-xl bg-gray-100 border border-gray-200 px-5 py-4 font-mono text-sm text-gray-700">
          https://wa.me/[código de país][número sin cero ni guiones]
        </div>
        <div className="not-prose my-2 rounded-xl bg-green-50 border border-green-100 px-5 py-3">
          <p className="text-sm text-green-700">
            Ejemplo Chile: <span className="font-mono">https://wa.me/56912345678</span>
          </p>
        </div>
        <p>
          Para agregar un mensaje pre-cargado, añade <code>?text=</code> seguido del mensaje
          codificado (los espacios se reemplazan por <code>+</code> o <code>%20</code>).
        </p>

        <h2>Método 2 — Con el generador automático</h2>
        <p>
          El generador hace todo esto automáticamente: seleccionas el país, ingresas el número,
          escribes el mensaje opcional y obtienes el link listo para copiar. No requiere registro.
        </p>
        <p>
          Es más rápido que hacerlo manualmente y elimina errores de codificación del mensaje.
        </p>

        <h2>Dónde usar el link</h2>
        <ul>
          <li>Bio de Instagram o TikTok</li>
          <li>Firma de correo electrónico</li>
          <li>Botón en sitio web o landing page</li>
          <li>Publicaciones en Facebook</li>
          <li>Tarjeta de presentación digital</li>
          <li>Campañas de Google o Meta Ads</li>
        </ul>

        <p>
          <Link
            href={tool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Hacer link de WhatsApp →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿El link funciona aunque quien hace clic no tenga mi número guardado?</h3>
            <p>
              Sí. Esa es la principal ventaja del link de WhatsApp: abre el chat directamente
              sin necesidad de agregar el número a la agenda.
            </p>
          </div>
          <div>
            <h3>¿Puedo hacer un link para WhatsApp Business?</h3>
            <p>
              Sí. El formato <code>wa.me</code> funciona igual para números personales y de
              WhatsApp Business.
            </p>
          </div>
          <div>
            <h3>¿El link incluye el código de país automáticamente?</h3>
            <p>
              Si lo haces manualmente, debes incluirlo (ej. 56 para Chile). El generador
              incluye el código según el país que seleccionas.
            </p>
          </div>
          <div>
            <h3>¿El link tiene fecha de vencimiento?</h3>
            <p>No. Los links de <code>wa.me</code> son permanentes.</p>
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
