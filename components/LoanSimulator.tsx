"use client";

import { useState, useMemo } from "react";

const fmt = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });

function formatMiles(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  return Number(digits).toLocaleString("es-CL");
}

function parseMiles(value: string): number {
  return Number(value.replace(/\./g, "").replace(/,/g, ""));
}

interface Row {
  mes: number;
  cuota: number;
  interes: number;
  amortizacion: number;
  saldo: number;
}

function calcularTabla(monto: number, tasaAnual: number, plazo: number): Row[] {
  const i = tasaAnual / 12 / 100;
  const cuota =
    i === 0
      ? monto / plazo
      : (monto * i * Math.pow(1 + i, plazo)) / (Math.pow(1 + i, plazo) - 1);

  const rows: Row[] = [];
  let saldo = monto;

  for (let mes = 1; mes <= plazo; mes++) {
    const interes = saldo * i;
    const amortizacion = cuota - interes;
    saldo = saldo - amortizacion;
    rows.push({
      mes,
      cuota,
      interes,
      amortizacion,
      saldo: Math.max(0, saldo),
    });
  }

  return rows;
}

export default function LoanSimulator() {
  const [montoRaw, setMontoRaw] = useState("");
  const [tasa, setTasa] = useState("");
  const [plazo, setPlazo] = useState("");
  const [errors, setErrors] = useState<{ monto?: string; tasa?: string; plazo?: string }>({});

  const monto = parseMiles(montoRaw);
  const tasaNum = parseFloat(tasa);
  const plazoNum = parseInt(plazo, 10);

  const isValid =
    monto > 0 &&
    tasa !== "" &&
    tasaNum >= 0 &&
    plazoNum > 0 &&
    Object.keys(errors).length === 0;

  const tabla = useMemo(() => {
    if (!isValid) return [];
    return calcularTabla(monto, tasaNum, plazoNum);
  }, [isValid, monto, tasaNum, plazoNum]);

  const cuotaMensual = tabla.length > 0 ? tabla[0].cuota : null;

  function validate(field: string, value: string) {
    const next = { ...errors };

    if (field === "monto") {
      const v = parseMiles(value);
      if (value && v <= 0) next.monto = "El monto debe ser mayor a 0";
      else delete next.monto;
    }
    if (field === "tasa") {
      const v = parseFloat(value);
      if (value && v < 0) next.tasa = "La tasa no puede ser negativa";
      else delete next.tasa;
    }
    if (field === "plazo") {
      const v = parseInt(value, 10);
      if (value && v <= 0) next.plazo = "El plazo debe ser mayor a 0";
      else delete next.plazo;
    }

    setErrors(next);
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-5">
      {/* Inputs */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Monto del crédito (CLP)
          </label>
          <input
            type="text"
            inputMode="numeric"
            value={montoRaw}
            onChange={(e) => {
              const formatted = formatMiles(e.target.value);
              setMontoRaw(formatted);
              validate("monto", formatted);
            }}
            placeholder="Ej: 5.000.000"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          {errors.monto && <p className="mt-1 text-xs text-red-500">{errors.monto}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tasa anual (%)
          </label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={tasa}
            onChange={(e) => {
              setTasa(e.target.value);
              validate("tasa", e.target.value);
            }}
            placeholder="Ej: 12"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          {errors.tasa && <p className="mt-1 text-xs text-red-500">{errors.tasa}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Plazo (meses)
          </label>
          <input
            type="number"
            min="1"
            step="1"
            value={plazo}
            onChange={(e) => {
              setPlazo(e.target.value);
              validate("plazo", e.target.value);
            }}
            placeholder="Ej: 24"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          {errors.plazo && <p className="mt-1 text-xs text-red-500">{errors.plazo}</p>}
        </div>
      </div>

      {/* Cuota mensual destacada */}
      {cuotaMensual !== null && (
        <div className="rounded-xl bg-green-50 border border-green-100 px-5 py-4">
          <p className="text-xs font-semibold text-green-600 uppercase tracking-widest mb-1">
            Cuota mensual
          </p>
          <p className="text-3xl font-bold text-green-700">{fmt.format(cuotaMensual)}</p>
        </div>
      )}

      {/* Tabla de amortización */}
      {tabla.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Mes</th>
                <th className="text-right py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Cuota</th>
                <th className="text-right py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Interés</th>
                <th className="text-right py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Amortización</th>
                <th className="text-right py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Saldo</th>
              </tr>
            </thead>
            <tbody>
              {tabla.map((row) => (
                <tr key={row.mes} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-2 px-3 text-gray-600">{row.mes}</td>
                  <td className="py-2 px-3 text-right text-gray-900">{fmt.format(row.cuota)}</td>
                  <td className="py-2 px-3 text-right text-gray-500">{fmt.format(row.interes)}</td>
                  <td className="py-2 px-3 text-right text-gray-500">{fmt.format(row.amortizacion)}</td>
                  <td className="py-2 px-3 text-right font-medium text-gray-900">{fmt.format(row.saldo)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
