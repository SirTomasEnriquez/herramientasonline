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
  // Cluster IVA — long tail
  {
    slug: "calcular-iva-19-porciento-chile",
    title: "Cómo calcular el IVA 19% en Chile",
    href: "/guias/calcular-iva-19-porciento-chile",
    description: "Fórmulas para calcular IVA 19% desde neto o desde bruto, con ejemplos.",
  },
  {
    slug: "como-calcular-precio-con-iva",
    title: "Cómo calcular el precio con IVA incluido",
    href: "/guias/como-calcular-precio-con-iva",
    description: "Multiplica el neto por 1,19 para obtener el precio con IVA en Chile.",
  },
  {
    slug: "como-calcular-neto-desde-bruto",
    title: "Cómo calcular el monto neto desde un precio bruto",
    href: "/guias/como-calcular-neto-desde-bruto",
    description: "Divide el bruto por 1,19 para extraer el neto y el IVA por separado.",
  },
  {
    slug: "cuanto-es-el-iva-en-chile",
    title: "¿Cuánto es el IVA en Chile?",
    href: "/guias/cuanto-es-el-iva-en-chile",
    description: "El IVA en Chile es 19%. Qué aplica, qué está exento y cómo calcularlo.",
  },
  {
    slug: "formula-del-iva-chile",
    title: "Fórmula del IVA en Chile",
    href: "/guias/formula-del-iva-chile",
    description: "Las dos fórmulas del IVA: neto a bruto y bruto a neto, con tabla de referencia.",
  },
  // Cluster Boleta — long tail
  {
    slug: "calcular-liquido-boleta-honorarios",
    title: "Calcular el monto líquido de una boleta de honorarios",
    href: "/guias/calcular-liquido-boleta-honorarios",
    description: "Fórmula para calcular el líquido desde el bruto con tasa 2026.",
  },
  {
    slug: "cuanto-retiene-boleta-honorarios",
    title: "¿Cuánto retiene la boleta de honorarios?",
    href: "/guias/cuanto-retiene-boleta-honorarios",
    description: "Tasas de retención 2026: 15,25% general y 18,25% con deuda COVID.",
  },
  {
    slug: "como-calcular-boleta-honorarios-liquido",
    title: "Cómo calcular el líquido de una boleta de honorarios",
    href: "/guias/como-calcular-boleta-honorarios-liquido",
    description: "Calcula el líquido desde el bruto o el bruto desde el líquido deseado.",
  },
  {
    slug: "boleta-honorarios-retencion-porcentaje",
    title: "Porcentaje de retención de boleta de honorarios en Chile 2026",
    href: "/guias/boleta-honorarios-retencion-porcentaje",
    description: "Tabla con los porcentajes de retención vigentes y cómo evolucionaron.",
  },
  // Cluster WhatsApp — long tail
  {
    slug: "link-whatsapp-con-mensaje",
    title: "Cómo crear un link de WhatsApp con mensaje",
    href: "/guias/link-whatsapp-con-mensaje",
    description: "Crea un link de WhatsApp con texto pre-cargado para ventas y atención al cliente.",
  },
  {
    slug: "crear-link-whatsapp-para-instagram",
    title: "Crear link de WhatsApp para Instagram",
    href: "/guias/crear-link-whatsapp-para-instagram",
    description: "Cómo poner un link de WhatsApp en la bio de Instagram para recibir consultas.",
  },
  {
    slug: "como-hacer-link-de-whatsapp",
    title: "Cómo hacer un link de WhatsApp",
    href: "/guias/como-hacer-link-de-whatsapp",
    description: "Dos métodos: manualmente con wa.me o con el generador automático gratuito.",
  },
  {
    slug: "whatsapp-link-generator",
    title: "WhatsApp Link Generator — Generador de link de WhatsApp",
    href: "/guias/whatsapp-link-generator",
    description: "Generador gratuito de link de WhatsApp para negocios y redes sociales.",
  },
  // Cluster Crédito — long tail
  {
    slug: "simulador-credito-consumo-chile",
    title: "Simulador de crédito de consumo en Chile",
    href: "/guias/simulador-credito-consumo-chile",
    description: "Simula un crédito de consumo y calcula cuota, costo total e intereses.",
  },
  {
    slug: "simulador-credito-hipotecario",
    title: "Simulador de crédito hipotecario en Chile",
    href: "/guias/simulador-credito-hipotecario",
    description: "Simula un crédito hipotecario con tabla de amortización completa.",
  },
  {
    slug: "como-calcular-cuota-credito",
    title: "Cómo calcular la cuota de un crédito",
    href: "/guias/como-calcular-cuota-credito",
    description: "Fórmula del sistema francés, ejemplo paso a paso y tabla de amortización.",
  },
];

export function getGuideBySlug(slug: string) {
  return GUIDES.find((guide) => guide.slug === slug);
}
