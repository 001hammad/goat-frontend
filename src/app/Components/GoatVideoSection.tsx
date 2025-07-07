// frontend/app/components/GoatVideoSection.tsx

import React from "react";

type Props = {
  language: "roman" | "urdu";
};

const content = {
  title: {
    roman: "Hamari Bakriyaan – Live Dekhein",
    urdu: "ہماری بکریاں – لائیو دیکھیں",
  },
};

export default function GoatVideoSection({ language }: Props) {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#9C5518] mb-6">
          {content.title[language]}
        </h2>

        <div className="md:h-[700px] w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dXp-sl3H4GY"
            title="Akhtar Goat Farm Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
