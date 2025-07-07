"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [language, setLanguage] = useState<"roman" | "urdu">("roman");

  return (
    <section className="min-h-screen px-4 py-16 bg-[#FFF7F0] text-[#9C5518]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Language Switch */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setLanguage("roman")}
            className={`px-4 py-2 rounded-l-full border ${
              language === "roman" ? "bg-[#9C5518] text-white" : "bg-white"
            }`}
          >
            Roman Urdu
          </button>
          <button
            onClick={() => setLanguage("urdu")}
            className={`px-4 py-2 rounded-r-full border ${
              language === "urdu" ? "bg-[#9C5518] text-white" : "bg-white"
            }`}
          >
            اردو
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6">
          {language === "roman" ? "About Akhtar Goat Farm 🐐" : "اختر گوٹ فارم کے بارے میں"}
        </h1>

        {/* Image */}
        <div className="mb-8">
          <Image
            src="/about.jpg"
            alt="Akhtar Goat Farm"
            width={800}
            height={400}
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Content */}
        <div className="text-lg leading-8 text-left max-w-4xl mx-auto">
          {language === "roman" ? (
            <>
              <p className="mb-4">
                Akhtar Goat Farm, located in North Karachi, is a trusted name for premium goats raised with care and cleanliness. 
              </p>
              <p className="mb-4">
                We specialize in meat and milk-producing goats, perfect for Qurbani, personal farming, or dairy needs.
              </p>
              <p className="mb-4">
                Every goat is listed with video so customers can see the animal clearly before buying. Our mission is transparency, quality, and fair pricing.
              </p>
              <p className="mb-4">
                Contact us anytime via WhatsApp or our contact form — we’re always happy to help.
              </p>
              <p className="mt-6 font-semibold">
                Thank you for trusting Akhtar Goat Farm!
              </p>
            </>
          ) : (
            <>
              <p className="mb-4">
                اختر گوٹ فارم، نارتھ کراچی میں واقع ہے اور معیاری بکریوں کی پرورش کے لیے مشہور ہے۔
              </p>
              <p className="mb-4">
                یہاں آپ کو گوشت اور دودھ دینے والی بہترین نسل کی بکریاں ملتی ہیں، جو قربانی، ذاتی فارم یا ڈیری کے لیے بہترین ہیں۔
              </p>
              <p className="mb-4">
                ہر بکری کی مکمل ویڈیو فراہم کی جاتی ہے تاکہ آپ خریداری سے پہلے اچھی طرح دیکھ سکیں۔
              </p>
              <p className="mb-4">
                ہمارا مشن ہے: دیانتداری، معیار اور مناسب قیمت۔
              </p>
              <p className="mt-6 font-semibold">
                اختر گوٹ فارم پر اعتماد کرنے کا شکریہ!
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
