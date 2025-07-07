// frontend/app/components/IntroSection.tsx

import React from "react";
import Image from "next/image";

type Props = {
  language: "roman" | "urdu";
};

const content = {
  title: {
    roman: "Hamari Kahani – Akhtar Goat Farm",
    urdu: "ہماری کہانی – اختر گوٹ فارم",
  },
  description: {
    roman: `Akhtar Goat Farm North Karachi mein waqeh ek maqbool farm hai jo meat, milk aur manure (khaad) ki farming karta hai. Hamari team healthy aur clean goats raise karti hai aur humare pas Facebook aur YouTube par bhi active presence hai.`,
    urdu: `اختر گوٹ فارم نارتھ کراچی میں واقع ایک معروف فارم ہے جو گوشت، دودھ اور کھاد کی فارمنگ کرتا ہے۔ ہماری ٹیم صحت مند اور صاف گوٹ پالتی ہے اور ہماری فیس بک اور یوٹیوب پر بھی موجودگی ہے۔`,
  },
};

export default function IntroSection({ language }: Props) {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* 📝 Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#9C5518] mb-4">
            {content.title[language]}
          </h2>
          <p className="text-md md:text-lg text-[#9C5518] leading-relaxed">
            {content.description[language]}
          </p>
        </div>

        {/* 🐐 Image Section */}
        <div className="flex-1">
          <Image
            src="/goat-farm-pics.jpg"
            alt="Akhtar Goat Farm"
            width={600}
            height={400}
            className="rounded-xl border-4 border-[#EF962D] shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
