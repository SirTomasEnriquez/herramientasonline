import type { Tool } from "@/lib/tools";

const BASE_URL = "https://herramientasonline.cl";

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

type JsonLd = Record<string, unknown>;

function absoluteUrl(path: string) {
  if (path.startsWith("https://") || path.startsWith("http://")) {
    return path;
  }

  return `${BASE_URL}${path}`;
}

function toolName(tool: Tool) {
  return tool.name || tool.title;
}

function toolPath(tool: Tool) {
  return tool.path || tool.href;
}

function toolDescription(tool: Tool) {
  return tool.description || tool.useCase;
}

function schemaDate(date: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : undefined;
}

export function buildWebApplicationSchema(tool: Tool): JsonLd | null {
  const name = toolName(tool);
  const path = toolPath(tool);
  const description = toolDescription(tool);

  if (!name || !path || !description) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    url: absoluteUrl(path),
    description,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    inLanguage: "es-CL",
    isAccessibleForFree: true,
    keywords: tool.keywords.join(", "),
    dateModified: schemaDate(tool.updatedAt),
    provider: {
      "@type": "Organization",
      name: "Herramientas Online",
      url: BASE_URL,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CLP",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Emprendedores en Chile",
    },
  };
}

export function buildFAQPageSchema(faqs: FaqItem[]): JsonLd | null {
  const mainEntity = faqs
    .filter((faq) => faq.question && faq.answer)
    .map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }));

  if (mainEntity.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): JsonLd | null {
  const itemListElement = items
    .filter((item) => item.name && item.path)
    .map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    }));

  if (itemListElement.length < 2) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export function buildToolPageSchema(
  tool: Tool,
  faqs: FaqItem[],
  breadcrumbs: BreadcrumbItem[],
) {
  return [
    buildWebApplicationSchema(tool),
    buildFAQPageSchema(faqs),
    buildBreadcrumbSchema(breadcrumbs),
  ].filter((schema): schema is JsonLd => schema !== null);
}

export function buildGuidePageSchema(faqs: FaqItem[], breadcrumbs: BreadcrumbItem[]) {
  return [
    buildFAQPageSchema(faqs),
    buildBreadcrumbSchema(breadcrumbs),
  ].filter((schema): schema is JsonLd => schema !== null);
}

export function stringifyJsonLd(schema: JsonLd | JsonLd[]) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
