"use client";

import { useState } from "react";

const COUNTRY_CODES = [
  { code: "+56", label: "+56 Chile" },
  { code: "+54", label: "+54 Argentina" },
  { code: "+55", label: "+55 Brasil" },
  { code: "+52", label: "+52 México" },
  { code: "+57", label: "+57 Colombia" },
  { code: "+51", label: "+51 Perú" },
  { code: "+598", label: "+598 Uruguay" },
  { code: "+595", label: "+595 Paraguay" },
  { code: "+591", label: "+591 Bolivia" },
  { code: "+593", label: "+593 Ecuador" },
  { code: "+502", label: "+502 Guatemala" },
  { code: "+503", label: "+503 El Salvador" },
  { code: "+504", label: "+504 Honduras" },
  { code: "+505", label: "+505 Nicaragua" },
  { code: "+506", label: "+506 Costa Rica" },
  { code: "+507", label: "+507 Panamá" },
  { code: "+1", label: "+1 EE.UU. / Canadá" },
  { code: "+34", label: "+34 España" },
  { code: "+44", label: "+44 Reino Unido" },
];

function sanitizePhone(value: string): string {
  return value.replace(/[^\d]/g, "");
}

function buildLink(countryCode: string, phone: string, message: string): string {
  const digits = countryCode.replace("+", "") + sanitizePhone(phone);
  const base = `https://wa.me/${digits}`;
  if (!message.trim()) return base;
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}

export default function WhatsAppLinkGenerator() {
  const [countryCode, setCountryCode] = useState("+56");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [copied, setCopied] = useState(false);

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;
    const cleaned = raw.replace(/[^\d\s\-]/g, "");
    setPhone(cleaned);
    if (phoneError) setPhoneError("");
  }

  function validate(): boolean {
    const digits = sanitizePhone(phone);
    if (digits.length < 7) {
      setPhoneError("El número debe tener al menos 7 dígitos.");
      return false;
    }
    if (digits.length > 15) {
      setPhoneError("El número no puede superar 15 dígitos.");
      return false;
    }
    return true;
  }

  function handleGenerate() {
    if (!validate()) return;
    const link = buildLink(countryCode, phone, message);
    setGeneratedLink(link);
    setCopied(false);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(generatedLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for environments without clipboard API
      const el = document.createElement("textarea");
      el.value = generatedLink;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  function handleOpen() {
    window.open(generatedLink, "_blank", "noopener,noreferrer");
  }

  const isPhoneEmpty = sanitizePhone(phone).length === 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 w-full max-w-lg mx-auto">
      <div className="space-y-5">
        {/* Phone input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Número de teléfono <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-44 shrink-0 rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {COUNTRY_CODES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="912345678"
              className={`flex-1 min-w-0 rounded-lg border px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                phoneError ? "border-red-400 bg-red-50" : "border-gray-300"
              }`}
            />
          </div>
          {phoneError && (
            <p className="mt-1.5 text-xs text-red-600">{phoneError}</p>
          )}
        </div>

        {/* Message input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Mensaje predeterminado{" "}
            <span className="text-gray-400 font-normal">(opcional)</span>
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, 200))}
            placeholder="Hola, quiero más información."
            rows={3}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
          />
          <p className="mt-1 text-xs text-gray-400 text-right">
            {message.length}/200
          </p>
        </div>

        {/* Generate button */}
        <button
          onClick={handleGenerate}
          disabled={isPhoneEmpty}
          className="w-full rounded-lg bg-green-500 px-4 py-3 text-sm font-semibold text-white hover:bg-green-600 active:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Generar link
        </button>

        {/* Result */}
        {generatedLink && (
          <div className="rounded-lg bg-gray-50 border border-gray-200 p-4 space-y-3">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Tu link
            </p>
            <p className="text-sm text-gray-800 break-all font-mono leading-relaxed">
              {generatedLink}
            </p>
            <div className="flex gap-2 pt-1">
              <button
                onClick={handleCopy}
                className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors"
              >
                {copied ? "¡Copiado!" : "Copiar"}
              </button>
              <button
                onClick={handleOpen}
                className="flex-1 rounded-lg bg-green-500 px-3 py-2 text-sm font-medium text-white hover:bg-green-600 active:bg-green-700 transition-colors"
              >
                Abrir WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
