import React from "react";
import { FaWhatsapp } from "react-icons/fa";

type Goat = {
  id: number;
  name: string;
  age: string;
  price: string;
  video_url: string;
};

type Props = {
  goat: Goat;
};

export default function GoatCard({ goat }: Props) {
  const phone = "923001234567"; // 👈 apna WhatsApp number Pakistan format me
  const message = `Salam! Mujhe ye bakri pasand ayi hai:\n${goat.name} (${goat.age}) - Rs ${goat.price}`;
  const encodedMsg = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phone}?text=${encodedMsg}`;

  return (
    <div className="border-2 border-[#EF962D] rounded-xl p-4 shadow-md bg-white">
      <div className="aspect-[9/16] mb-4">
        <video
          src={goat.video_url}
          controls
          className="w-full h-full rounded-md object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-[#9C5518]">{goat.name}</h3>
      <p className="text-sm text-[#9C5518]">Umar: {goat.age}</p>
      <p className="text-sm text-[#9C5518] mb-2">Qeemat: {goat.price}</p>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition"
      >
        <FaWhatsapp className="text-xl" />
        WhatsApp Rabta
      </a>
    </div>
  );
}
