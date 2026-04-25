"use client";

import { useState } from "react";

const IVA_RATE = 0.19;

function formatInputDisplay(digits: string): string {
  if (!digits) return "";
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function formatCLP(value: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

type Mode = "neto" | "bruto";

interface Result {
  neto: number;
  iva: number;
  total: number;
}

function calculate(amount: number, mode: Mode): Result {
  if (mode === "neto") {
    const iva = amount * IVA_RATE;
    return { neto: amount, iva, total: amount + iva };
  } else {
    const neto = amount / (1 + IVA_RATE);
    const iva = amount - neto;
    return { neto, iva, total: amount };
  }
}

export default function IvaChileCalculator() {
  const [mode, setMode] = useState<Mode>("neto");
  const [input, setInput] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/[^\d]/g, "");
    setInput(raw);
    if (error) setError("");
    setResult(null);
  }

  function handleCalculate() {
    const amount = parseInt(input, 10);
    if (!input || isNaN(amount) || amount <= 0) {
      setError("Ingresa un monto válido mayor a 0.");
      return;
    }
    setResult(calculate(amount, mode));
  }

  function handleModeChange(newMode: Mode) {
    setMode(newMode);
    setResult(null);
    setError("");
  }

  const isEmpty = input.trim() === "";

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 w-full max-w-lg mx-auto">
      <div className="space-y-5">
        {/* Mode selector */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Modo de cálculo</p>
          <div className="flex rounded-lg border border-gray-200 overflow-hidden">
            {(["neto", "bruto"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => handleModeChange(m)}
                className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                  mode === m
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {m === "neto" ? "Calcular desde neto" : "Calcular desde bruto"}
              </button>
            ))}
          </div>
        </div>

        {/* Amount input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Monto {mode === "neto" ? "neto" : "bruto"}
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              $
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={formatInputDisplay(input)}
              onChange={handleInputChange}
              placeholder="100.000"
              className={`w-full rounded-lg border pl-7 pr-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                error ? "border-red-400 bg-red-50" : "border-gray-300"
              }`}
            />
          </div>
          {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
        </div>

        {/* Calculate button */}
        <button
          onClick={handleCalculate}
          disabled={isEmpty}
          className="w-full rounded-lg bg-green-500 px-4 py-3 text-sm font-semibold text-white hover:bg-green-600 active:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Calcular
        </button>

        {/* Result */}
        {result && (
          <div className="rounded-lg bg-gray-50 border border-gray-200 p-4 space-y-3">
            <div className="space-y-2">
              <ResultRow label="Monto neto" value={formatCLP(result.neto)} />
              <ResultRow label="IVA 19%" value={formatCLP(result.iva)} highlight />
              <div className="border-t border-gray-200 pt-2">
                <ResultRow label="Total bruto" value={formatCLP(result.total)} bold />
              </div>
            </div>
            <p className="text-xs text-gray-400 pt-1">
              Cálculo referencial. No reemplaza asesoría contable.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ResultRow({
  label,
  value,
  highlight,
  bold,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  bold?: boolean;
}) {
  return (
    <div className="flex justify-between items-center">
      <span
        className={`text-sm ${bold ? "font-semibold text-gray-900" : "text-gray-600"}`}
      >
        {label}
      </span>
      <span
        className={`text-sm font-mono ${
          bold
            ? "font-bold text-gray-900"
            : highlight
            ? "text-green-700 font-semibold"
            : "text-gray-800"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
