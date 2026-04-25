export type Tool = {
  href: string;
  title: string;
  description: string;
  category: string;
  painPoint: string;
};

export const TOOLS: Tool[] = [
  {
    href: "/herramientas/generador-link-whatsapp",
    title: "Generador link de WhatsApp",
    description: "Crea un enlace directo para que te escriban por WhatsApp",
    category: "Comunicación",
    painPoint: "Necesito generar un link de WhatsApp",
  },
  {
    href: "/herramientas/calculadora-iva-chile",
    title: "Calculadora IVA Chile",
    description: "Calcula el IVA 19% desde monto neto o bruto",
    category: "Tributario",
    painPoint: "Necesito calcular el IVA en Chile",
  },
  {
    href: "/herramientas/calculadora-boleta-honorarios-chile",
    title: "Calculadora Boleta de Honorarios Chile",
    description: "Calcula cuánto recibirás o cuánto debes emitir en tu boleta",
    category: "Tributario",
    painPoint: "Necesito saber cuánto recibiré en mi boleta",
  },
  {
    href: "/herramientas/simulador-credito",
    title: "Simulador de Crédito",
    description: "Calcula la cuota mensual y revisa la tabla de amortización",
    category: "Finanzas",
    painPoint: "Necesito simular un crédito o préstamo",
  },
];
