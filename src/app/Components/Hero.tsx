// frontend/app/components/Hero.tsx

import React from "react";
import Image from "next/image";
import homepageContent from "../Content/HomepageContent";
import Link from "next/link";
type Props = {
  language: "roman" | "urdu";
};

export default function Hero({ language }: Props) {
  const { title, subtitle, button } = homepageContent.hero;

  return (
    <section className="relative w-full h-[700px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Akhtar.jpg"
        alt="Akhtar Goat Farm"
        fill
        priority
        className="object-cover opacity-60"
        quality={100}
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex justify-center items-center px-4">
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl text-center max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-[#9C5518] mb-4 drop-shadow-md">
            {title[language]}
          </h1>
          <p className="text-md  md:text-lg text-[#9C5518] mb-6 drop-shadow-sm">
            {subtitle[language]}
          </p>
          <Link href="/goats">
          <button className="bg-[#9C5518] cursor-pointer text-white px-6 py-2 rounded-full hover:bg-[#EF962D] transition">
            {button[language]}
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
