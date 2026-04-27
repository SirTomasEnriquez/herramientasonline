import type { Metadata } from "next";
import Link from "next/link";
import { getGuideBySlug } from "@/lib/guides";
import { getToolBySlug } from "@/lib/tools";

const mainTool = getToolBySlug("calculadora-iva-chile")!;
const relatedGuide = getGuideBySlug("calcular-iva-desde-monto-bruto")!;

export const metadata: Metadata = {
  title: "Cómo calcular IVA desde un monto neto — Herramientas Online",
  description:
    "Aprende a calcular el IVA 19% desde un monto neto en Chile y obtener el total bruto.",
};

export default function CalcularIvaDesdeMontoNetoGuidePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-2xl mx-auto prose prose-gray prose-sm sm:prose-base">
        <p className="text-sm font-semibold text-green-600 mb-3">Guía útil</p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Cómo calcular IVA desde un monto neto
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Si tienes un valor sin impuesto, puedes calcular el IVA 19% y el total final para preparar
          una cotización, revisar una factura o definir un precio.
        </p>

        <h2>Qué calcular</h2>
        <p>
          Desde un monto neto necesitas obtener el IVA y el monto bruto. El bruto es el total que
          incluye el impuesto.
        </p>

        <h2>Cómo hacerlo</h2>
        <p>
          Multiplica el monto neto por 0,19 para calcular el IVA. Después suma el neto más el IVA
          para obtener el monto bruto.
        </p>

        <h2>Ejemplo práctico</h2>
        <p>
          Si el monto neto es $100.000, el IVA es $19.000 y el total bruto es $119.000. Ese es el
          resultado esperado para una operación afecta a IVA general.
        </p>

        <h2>Cuándo usar la herramienta</h2>
        <p>
          Úsala cuando tengas el valor base de un producto o servicio y necesites obtener rápido el
          IVA y el total. El cálculo es referencial y puede variar si aplica una regla especial.
        </p>

        <p>
          <Link
            href={mainTool.href}
            className="inline-flex text-sm font-medium text-green-600 hover:text-green-700"
          >
            Usar calculadora de IVA Chile →
          </Link>
        </p>

        <h2>Preguntas frecuentes</h2>
        <div className="space-y-5">
          <div>
            <h3>¿Qué es un monto neto?</h3>
            <p>Es el valor antes de agregar IVA.</p>
          </div>
          <div>
            <h3>¿Cómo calculo el IVA desde el neto?</h3>
            <p>Multiplica el monto neto por 0,19 para obtener el IVA.</p>
          </div>
          <div>
            <h3>¿El total bruto siempre es neto más IVA?</h3>
            <p>Para operaciones afectas a IVA general, sí. En casos especiales conviene validar con un contador.</p>
          </div>
        </div>

        <h2>Links internos</h2>
        <ul>
          <li>
            <Link href={mainTool.href}>{mainTool.title}</Link>
          </li>
          <li>
            <Link href={relatedGuide.href}>{relatedGuide.title}</Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
