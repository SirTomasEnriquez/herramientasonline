export type Guide = {
  slug: string;
  title: string;
  href: string;
  description: string;
};

export const GUIDES: Guide[] = [
  {
    slug: "calcular-iva-chile",
    title: "Cómo calcular IVA en Chile",
    href: "/guias/calcular-iva-chile",
    description: "Aprende a distinguir monto neto, IVA 19% y monto bruto.",
  },
  {
    slug: "boleta-honorarios-chile",
    title: "Cómo calcular una boleta de honorarios",
    href: "/guias/boleta-honorarios-chile",
    description: "Entiende monto bruto, monto líquido y retención.",
  },
  {
    slug: "simular-credito",
    title: "Cómo simular un crédito",
    href: "/guias/simular-credito",
    description: "Revisa cuota mensual, intereses y tabla de amortización.",
  },
];

export function getGuideBySlug(slug: string) {
  return GUIDES.find((guide) => guide.slug === slug);
}
