// frontend/app/components/LanguageToggle.tsx
"use client";
import React from "react";

type Props = {
  language: "roman" | "urdu";
  setLanguage: (lang: "roman" | "urdu") => void;
};

export default function LanguageToggle({ language, setLanguage }: Props) {
  return (
    <div className="flex gap-2 justify-end p-4">
      <button
        className={`px-3 py-1 rounded-full text-sm transition ${
          language === "roman"
            ? "bg-[#9C5518] text-white"
            : "bg-gray-200 text-[#9C5518]"
        }`}
        onClick={() => setLanguage("roman")}
      >
        Roman Urdu
      </button>
      <button
        className={`px-3 py-1 rounded-full text-sm transition ${
          language === "urdu"
            ? "bg-[#9C5518] text-white"
            : "bg-gray-200 text-[#9C5518]"
        }`}
        onClick={() => setLanguage("urdu")}
      >
        اُردو
      </button>
    </div>
  );
}
