export type Guide = {
  title: string;
  href: string;
  description: string;
};

export const GUIDES: Guide[] = [
  {
    title: "Cómo calcular IVA en Chile",
    href: "/guias/calcular-iva-chile",
    description: "Aprende a distinguir monto neto, IVA 19% y monto bruto.",
  },
  {
    title: "Cómo calcular una boleta de honorarios",
    href: "/guias/boleta-honorarios-chile",
    description: "Entiende monto bruto, monto líquido y retención.",
  },
  {
    title: "Cómo simular un crédito",
    href: "/guias/simular-credito",
    description: "Revisa cuota mensual, intereses y tabla de amortización.",
  },
];
