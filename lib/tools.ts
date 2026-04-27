export type Tool = {
  name: string;
  slug: string;
  path: string;
  href: string;
  title: string;
  description: string;
  category: string;
  keywords: string[];
  question: string;
  answer: string;
  useCase: string;
  updatedAt: string;
  painPoint: string;
};

export const TOOLS: Tool[] = [
  {
    name: "Generador de link de WhatsApp",
    slug: "generador-link-whatsapp",
    path: "/herramientas/generador-link-whatsapp",
    href: "/herramientas/generador-link-whatsapp",
    title: "Generador link de WhatsApp",
    description: "Crea un enlace directo para que te escriban por WhatsApp.",
    category: "Comunicación",
    keywords: [
      "link de WhatsApp",
      "generador WhatsApp",
      "WhatsApp Business",
      "mensaje predeterminado",
    ],
    question: "¿Cómo crear un link de WhatsApp?",
    answer:
      "Ingresa el código de país, tu número de teléfono y un mensaje opcional. La herramienta genera un enlace directo para iniciar una conversación por WhatsApp.",
    useCase:
      "Crear enlaces de WhatsApp para perfiles de redes sociales, campañas, atención al cliente y ventas.",
    updatedAt: "2026-04-27",
    painPoint: "Necesito generar un link de WhatsApp",
  },
  {
    name: "Calculadora IVA Chile",
    slug: "calculadora-iva-chile",
    path: "/herramientas/calculadora-iva-chile",
    href: "/herramientas/calculadora-iva-chile",
    title: "Calculadora IVA Chile",
    description: "Calcula el IVA 19% desde monto neto o bruto.",
    category: "Tributario",
    keywords: ["IVA Chile", "calculadora IVA", "monto neto", "monto bruto"],
    question: "¿Cómo calcular el IVA en Chile?",
    answer:
      "Ingresa un monto neto o bruto y la herramienta calcula el IVA 19%, el valor neto y el total.",
    useCase:
      "Validar montos netos, IVA y totales antes de emitir o revisar una factura.",
    updatedAt: "2026-04-27",
    painPoint: "Necesito calcular el IVA en Chile",
  },
  {
    name: "Calculadora Boleta de Honorarios Chile",
    slug: "calculadora-boleta-honorarios-chile",
    path: "/herramientas/calculadora-boleta-honorarios-chile",
    href: "/herramientas/calculadora-boleta-honorarios-chile",
    title: "Calculadora Boleta de Honorarios Chile",
    description: "Calcula cuánto recibirás o cuánto debes emitir en tu boleta.",
    category: "Tributario",
    keywords: [
      "boleta de honorarios",
      "retención boleta honorarios",
      "SII",
      "monto bruto",
      "monto líquido",
    ],
    question: "¿Cómo calcular una boleta de honorarios en Chile?",
    answer:
      "Ingresa el monto bruto o líquido y la herramienta calcula la retención, el total a recibir y el monto que debes emitir.",
    useCase:
      "Calcular retenciones y montos líquidos antes de emitir una boleta de honorarios.",
    updatedAt: "2026-04-27",
    painPoint: "Necesito saber cuánto recibiré en mi boleta",
  },
  {
    name: "Simulador de Crédito",
    slug: "simulador-credito",
    path: "/herramientas/simulador-credito",
    href: "/herramientas/simulador-credito",
    title: "Simulador de Crédito",
    description: "Calcula la cuota mensual y revisa la tabla de amortización.",
    category: "Finanzas",
    keywords: [
      "simulador de crédito",
      "tabla de amortización",
      "cuota mensual",
      "créditos",
    ],
    question: "¿Cómo simular un crédito con tabla de amortización?",
    answer:
      "Ingresa el monto, la tasa y el plazo. La herramienta calcula la cuota mensual y muestra el detalle de amortización del crédito.",
    useCase:
      "Evaluar cuotas y amortización antes de tomar un crédito personal, de consumo o para un negocio.",
    updatedAt: "2026-04-27",
    painPoint: "Necesito simular un crédito o préstamo",
  },
];

export function getToolBySlug(slug: string) {
  return TOOLS.find((tool) => tool.slug === slug);
}
