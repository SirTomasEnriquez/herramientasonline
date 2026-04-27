import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const tool = getToolBySlug("generador-link-whatsapp")!;
const relatedGuides = GUIDES.filter((guide) =>
  ["como-hacer-link-de-whatsapp", "link-whatsapp-con-mensaje"].includes(guide.slug),
);

export const metadata: Metadata = {
  title: "WhatsApp Link Generator — Generador de link de WhatsApp gratis",
  description:
    "Free WhatsApp link generator for Chile and Latin America. Create a direct WhatsApp chat link with optional message. No registration required.",
  alternates: {
    canonical: "/guias/whatsapp-link-generator",
  },
};

export default function WhatsappLinkGeneratorPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          WhatsApp Link Generator — Generador de link de WhatsApp gratis
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Un generador de link de WhatsApp (WhatsApp link generator) crea un enlace directo a
          una conversación de WhatsApp sin necesidad de guardar el número. Es la forma más
          rápida de recibir mensajes de clientes, seguidores o contactos.
        </p>

        <h2>Cómo funciona</h2>
        <p>
          El generador usa el protocolo oficial de WhatsApp: el dominio <code>wa.me</code>
          seguido del número en formato internacional. De forma opcional, se puede incluir un
          mensaje pre-cargado que verá quien haga clic.
        </p>
        <div className="not-prose my-4 rounded-xl bg-gray-100 border border-gray-200 px-5 py-4 font-mono text-sm text-gray-700 break-all">
          https://wa.me/[código país][número]?text=[mensaje]
        </div>

        <h2>Países disponibles</h2>
        <p>
          El generador incluye códigos de país para Chile (+56), Argentina, México, Colombia,
          Perú, Uruguay, Bolivia, Ecuador, Paraguay, Centroamérica, España, Reino Unido y
          Estados Unidos, entre otros.
        </p>

        <h2>Casos de uso frecuentes</h2>
        <ul>
          <li><strong>Negocios:</strong> recibe consultas directas sin compartir el número personalmente.</li>
          <li><strong>Redes sociales:</strong> agrega el link a la bio de Instagram, TikTok o Facebook.</li>
          <li><strong>E-commerce:</strong> botón de contacto en tienda online o catálogo.</li>
          <li><strong>Atención al cliente:</strong> responde consultas por WhatsApp sin fricción.</li>
          <li><strong>Campañas digitales:</strong> identifica el origen con un mensaje por campaña.</li>
        </ul>

        <p>
          <Link
            href={tool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Usar el generador de link de WhatsApp →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿Es gratis el generador de link de WhatsApp?</h3>
            <p>
              Sí. El generador es completamente gratuito y no requiere registro ni datos
              personales.
            </p>
          </div>
          <div>
            <h3>¿Funciona para WhatsApp Business?</h3>
            <p>
              Sí. El link generado funciona igual para cuentas personales y cuentas de
              WhatsApp Business.
            </p>
          </div>
          <div>
            <h3>¿Qué es wa.me?</h3>
            <p>
              Es el dominio oficial de WhatsApp para links directos de chat. Al acceder a un
              link <code>wa.me</code>, el dispositivo abre automáticamente WhatsApp con el
              número y mensaje indicados.
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
