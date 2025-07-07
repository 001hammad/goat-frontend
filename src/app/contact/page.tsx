"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const phone = "923172774237"; // 👈 apna WhatsApp number (Pakistan format)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fullMessage = `Salam Akhtar Goat Farm! 👋\nMera naam: ${name}\n\n${message}`;
    const encoded = encodeURIComponent(fullMessage);
    const url = `https://wa.me/${phone}?text=${encoded}`;

    window.open(url, "_blank"); // Open WhatsApp in new tab
  };

  return (
    <section className="min-h-screen bg-[#FFF7F0] px-4 py-16 text-[#9C5518]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">📞 Contact Akhtar Goat Farm</h2>
        <p className="mb-10 text-lg">
          Agar aapko koi bakri pasand ayi ho ya aapko kisi cheez ki madad chahiye, to neeche apna message likhein. Hum WhatsApp par reply karenge.
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4 text-left">
          <div>
            <label className="block mb-1 font-semibold">Aapka Naam</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ali Khan"
              required
              className="w-full px-4 py-2 border border-[#EF962D] rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Aapka Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mujhe ye bakri pasand ayi hai, price confirm kar dein..."
              required
              rows={4}
              className="w-full px-4 py-2 border border-[#EF962D] rounded"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg transition"
          >
            <FaWhatsapp className="text-2xl" />
            WhatsApp par Bhejein
          </button>
        </form>
      </div>
    </section>
  );
}
