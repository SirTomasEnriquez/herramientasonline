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
    slug: "calcular-iva-desde-monto-bruto",
    title: "Cómo calcular IVA desde un monto bruto",
    href: "/guias/calcular-iva-desde-monto-bruto",
    description: "Convierte un total con IVA en monto neto e IVA separado.",
  },
  {
    slug: "calcular-iva-desde-monto-neto",
    title: "Cómo calcular IVA desde un monto neto",
    href: "/guias/calcular-iva-desde-monto-neto",
    description: "Calcula el IVA 19% y el total desde un valor sin impuesto.",
  },
  {
    slug: "boleta-honorarios-chile",
    title: "Cómo calcular una boleta de honorarios",
    href: "/guias/boleta-honorarios-chile",
    description: "Entiende monto bruto, monto líquido y retención.",
  },
  {
    slug: "retencion-boleta-honorarios-2026",
    title: "Retención de boleta de honorarios 2026",
    href: "/guias/retencion-boleta-honorarios-2026",
    description: "Revisa la retención 2026 y cómo estimar el monto líquido.",
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
