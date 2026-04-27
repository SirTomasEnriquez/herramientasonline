import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";
import { buildGuidePageSchema, stringifyJsonLd } from "@/lib/schema";

const tool = getToolBySlug("generador-link-whatsapp")!;
const relatedGuides = GUIDES.filter((guide) =>
  ["link-whatsapp-con-mensaje", "como-hacer-link-de-whatsapp"].includes(guide.slug),
);

const faqs = [
  { question: "¿El link de WhatsApp funciona desde la bio de Instagram?", answer: "Sí. Instagram permite un link en la bio. Al tocar el link, el sistema operativo detecta el dominio wa.me y abre WhatsApp automáticamente." },
  { question: "¿Puedo poner el link en las publicaciones también?", answer: "Instagram no permite links clicables en los captions de publicaciones del feed. La opción más efectiva es la bio, el sticker de link en Stories, o el botón de contacto en cuentas de empresa." },
  { question: "¿Funciona para cuentas personales y de empresa?", answer: "Sí. El link de WhatsApp funciona independientemente del tipo de cuenta de Instagram que tengas." },
];

const guideSchema = buildGuidePageSchema(faqs, [
  { name: "Inicio", path: "/" },
  { name: "Guías", path: "/guias" },
  { name: "Crear link de WhatsApp para Instagram", path: "/guias/crear-link-whatsapp-para-instagram" },
]);

export const metadata: Metadata = {
  title: "Crear link de WhatsApp para Instagram — Herramientas Online",
  description:
    "Aprende a poner un link de WhatsApp en tu bio de Instagram para recibir consultas directo al chat. Sin apps, sin registro.",
  alternates: {
    canonical: "/guias/crear-link-whatsapp-para-instagram",
  },
  openGraph: {
    title: "Crear link de WhatsApp para Instagram",
    description: "Aprende a poner un link de WhatsApp en tu bio de Instagram para recibir consultas directo al chat.",
    url: "/guias/crear-link-whatsapp-para-instagram",
    siteName: "Herramientas Online",
    locale: "es_CL",
    type: "article",
  },
};

export default function CrearLinkWhatsappParaInstagramPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(guideSchema) }}
      />
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Crear link de WhatsApp para Instagram
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Poner un link de WhatsApp en tu bio de Instagram permite que los seguidores te escriban
          directamente sin necesidad de guardar tu número. Es una de las formas más efectivas de
          convertir visitas de perfil en consultas reales.
        </p>

        <h2>Cómo hacerlo en 3 pasos</h2>
        <ol>
          <li>Genera tu link de WhatsApp con el generador (número + mensaje opcional).</li>
          <li>Copia el link generado.</li>
          <li>
            Ve a tu perfil de Instagram → <strong>Editar perfil</strong> → campo
            <strong> Sitio web</strong> → pega el link.
          </li>
        </ol>
        <p>
          El link aparecerá en tu bio y cualquier persona que lo toque abrirá WhatsApp con tu
          número listo para chatear.
        </p>

        <h2>Qué mensaje incluir</h2>
        <p>
          Agrega un mensaje pre-cargado que identifique que el contacto viene de Instagram. Algunos
          ejemplos que funcionan:
        </p>
        <ul>
          <li>"Hola, te escribo desde Instagram. Quiero más información."</li>
          <li>"Hola, vi tu perfil de Instagram. ¿Puedes ayudarme?"</li>
          <li>"Hola, quiero cotizar [nombre de producto o servicio]."</li>
        </ul>
        <p>
          El mensaje identifica el origen del contacto y reduce la fricción: el usuario solo
          hace clic en Enviar.
        </p>

        <h2>Otras ubicaciones en Instagram</h2>
        <ul>
          <li><strong>Stories:</strong> usa el sticker de link y pega el link de WhatsApp.</li>
          <li><strong>Reels y publicaciones:</strong> menciona el link en la bio en el caption.</li>
          <li><strong>Linktree u otro agregador:</strong> si ya usas un agregador de links, agrega tu link de WhatsApp como una entrada más.</li>
        </ul>

        <p>
          <Link
            href={tool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Crear link de WhatsApp para Instagram →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿El link de WhatsApp funciona desde la bio de Instagram?</h3>
            <p>
              Sí. Instagram permite un link en la bio. Al tocar el link, el sistema operativo
              detecta el dominio <code>wa.me</code> y abre WhatsApp automáticamente.
            </p>
          </div>
          <div>
            <h3>¿Puedo poner el link en las publicaciones también?</h3>
            <p>
              Instagram no permite links clicables en los captions de publicaciones del feed.
              La opción más efectiva es la bio, el sticker de link en Stories, o el botón de
              contacto en cuentas de empresa.
            </p>
          </div>
          <div>
            <h3>¿Funciona para cuentas personales y de empresa?</h3>
            <p>
              Sí. El link de WhatsApp funciona independientemente del tipo de cuenta de
              Instagram que tengas.
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
