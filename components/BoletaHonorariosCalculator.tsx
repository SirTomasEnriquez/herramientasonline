"use client";

import { useState } from "react";

const TASA_BASE = 0.1525;
const TASA_CON_PRESTAMO = 0.1825;

type Mode = "bruto" | "liquido";

interface Result {
  bruto: number;
  retencion: number;
  liquido: number;
  tasa: number;
}

function formatCLP(value: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

function formatPct(tasa: number): string {
  return (tasa * 100).toLocaleString("es-CL", { maximumFractionDigits: 2 }) + "%";
}

function calculate(amount: number, mode: Mode, hasLoan: boolean): Result {
  const tasa = hasLoan ? TASA_CON_PRESTAMO : TASA_BASE;
  if (mode === "bruto") {
    const retencion = amount * tasa;
    return { bruto: amount, retencion, liquido: amount - retencion, tasa };
  } else {
    const bruto = amount / (1 - tasa);
    const retencion = bruto * tasa;
    return { bruto, retencion, liquido: amount, tasa };
  }
}

export default function BoletaHonorariosCalculator() {
  const [mode, setMode] = useState<Mode>("bruto");
  const [input, setInput] = useState("");
  const [hasLoan, setHasLoan] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/[^\d]/g, "");
    setInput(raw);
    if (error) setError("");
    setResult(null);
  }

  function handleModeChange(newMode: Mode) {
    setMode(newMode);
    setResult(null);
    setError("");
  }

  function handleCalculate() {
    const amount = parseInt(input, 10);
    if (!input || isNaN(amount) || amount <= 0) {
      setError("Ingresa un monto válido mayor a 0.");
      return;
    }
    setResult(calculate(amount, mode, hasLoan));
  }

  const isEmpty = input.trim() === "";
  const preview = input ? formatCLP(parseInt(input, 10)) : null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 w-full max-w-lg mx-auto">
      <div className="space-y-5">
        {/* Mode selector */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">¿Qué quieres calcular?</p>
          <div className="flex rounded-lg border border-gray-200 overflow-hidden">
            {([
              { value: "bruto", label: "Conozco el monto bruto" },
              { value: "liquido", label: "Quiero recibir un monto específico" },
            ] as { value: Mode; label: string }[]).map((m) => (
              <button
                key={m.value}
                onClick={() => handleModeChange(m.value)}
                className={`flex-1 px-3 py-2.5 text-sm font-medium transition-colors leading-tight ${
                  mode === m.value
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Amount input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {mode === "bruto" ? "Monto de la boleta" : "Monto que quiero recibir"}
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              $
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={input}
              onChange={handleInputChange}
              placeholder="100000"
              className={`w-full rounded-lg border pl-7 pr-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                error ? "border-red-400 bg-red-50" : "border-gray-300"
              }`}
            />
          </div>
          {preview && !error && (
            <p className="mt-1.5 text-xs text-gray-400">{preview}</p>
          )}
          {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
        </div>

        {/* COVID loan checkbox */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={hasLoan}
            onChange={(e) => {
              setHasLoan(e.target.checked);
              setResult(null);
            }}
            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-green-500 focus:ring-green-500 cursor-pointer"
          />
          <span className="text-sm text-gray-600 leading-snug">
            Tengo deuda pendiente del Préstamo Solidario COVID
            <span className="text-gray-400"> (Leyes 21.242 / 21.252)</span>
          </span>
        </label>

        {/* Calculate button */}
        <button
          onClick={handleCalculate}
          disabled={isEmpty}
          className="w-full rounded-lg bg-green-500 px-4 py-3 text-sm font-semibold text-white hover:bg-green-600 active:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Calcular
        </button>

        {/* Result — boleta simplificada */}
        {result && (
          <div className="space-y-3">
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gray-50 px-4 py-3 text-center border-b border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                  Boleta de Honorarios
                </p>
              </div>
              {/* Rows */}
              <div className="px-4 py-3 space-y-2.5">
                <BrRow label="Total Honorarios" value={formatCLP(result.bruto)} />
                <BrRow
                  label={`${formatPct(result.tasa)} Impto. Retenido`}
                  value={formatCLP(result.retencion)}
                  muted
                />
                <div className="border-t border-gray-200 pt-2.5">
                  <BrRow
                    label="Total a recibir"
                    value={formatCLP(result.liquido)}
                    bold
                  />
                </div>
              </div>
            </div>

            {/* Dynamic message */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {mode === "bruto" ? (
                <>
                  Harás la boleta por{" "}
                  <span className="font-semibold text-gray-900">{formatCLP(result.bruto)}</span>{" "}
                  y recibirás{" "}
                  <span className="font-semibold text-gray-900">{formatCLP(result.liquido)}</span>{" "}
                  en efectivo.
                </>
              ) : (
                <>
                  Para recibir{" "}
                  <span className="font-semibold text-gray-900">{formatCLP(result.liquido)}</span>
                  , debes hacer la boleta por{" "}
                  <span className="font-semibold text-gray-900">{formatCLP(result.bruto)}</span>.
                </>
              )}
            </p>

            <p className="text-xs text-gray-400">
              Cálculo referencial basado en la tasa oficial SII 2026 (Ley 21.133). No reemplaza
              asesoría contable o tributaria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function BrRow({
  label,
  value,
  muted,
  bold,
}: {
  label: string;
  value: string;
  muted?: boolean;
  bold?: boolean;
}) {
  return (
    <div className="flex justify-between items-center">
      <span
        className={`text-sm ${
          bold ? "font-semibold text-gray-900" : muted ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {label}
      </span>
      <span
        className={`text-sm font-mono ${
          bold ? "font-bold text-gray-900" : muted ? "text-gray-400" : "text-gray-700"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
