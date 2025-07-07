// frontend/app/goats/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaShareAlt } from "react-icons/fa";

type Goat = {
  id: number;
  name: string;
  age: string;
  price: string;
  video_url: string;
};

export default function GoatsPage() {
  const [goats, setGoats] = useState<Goat[]>([]);

  useEffect(() => {
    fetch("https://goat-backend-production.up.railway.app/goats")
      .then((res) => res.json())
      .then((data) => setGoats(data))
      .catch((err) => console.error("Error fetching goats:", err));
  }, []);

  const handleShare = async (goat: Goat) => {
    const url = `https://goat-frontend-indol.vercel.app/goat/${goat.id}`;
    const message = `Salam! Mujhe ye bakri pasand ayi hai:\n${goat.name} (${goat.age}) - Rs ${goat.price}`;
    
    if (navigator.share) {
      try {
        await navigator.share({ title: goat.name, text: message, url });
      } catch (error) {
        console.error("Share failed:", error);
      }
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  return (
    <section className="min-h-screen bg-[#FFF7F0] px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-[#9C5518] mb-12">
        Akhtar Goat Gallery 🐐
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {goats.map((goat) => (
          <div
            key={goat.id}
            className="bg-white rounded-2xl shadow-lg border-2 border-[#EF962D] overflow-hidden flex flex-col hover:scale-[1.02] transition"
            style={{ minHeight: "600px" }}
          >
            <Link href={`/goat/${goat.id}`}>
              <video
                src={goat.video_url}
                controls
                className="aspect-[9/10] w-full object-contain rounded-lg"
              />
              <div className="flex-1 px-6 py-4 text-[#9C5518]">
                <h3 className="text-2xl font-bold mb-2">{goat.name}</h3>
                <p className="text-lg">🕑 Umar: {goat.age}</p>
                <p className="text-lg">💰 Qeemat: {goat.price}</p>
              </div>
            </Link>

            <div className="flex justify-between items-center gap-3 px-6 pb-5">
              <a
                href={`https://wa.me/923172774237?text=${encodeURIComponent(`Salam! Mujhe ye bakri pasand ayi hai:\n${goat.name} (${goat.age}) - Rs ${goat.price}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm"
              >
                <FaWhatsapp className="text-xl" /> WhatsApp
              </a>

              <button
                onClick={() => handleShare(goat)}
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#9C5518] px-4 py-2 rounded-full text-sm border border-[#EF962D]"
              >
                <FaShareAlt className="text-lg" /> Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
