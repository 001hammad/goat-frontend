"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Goat = {
  id: number;
  name: string;
  age: string;
  price: string;
  video_url: string;
};

export default function GoatDetailPage() {
  const { id } = useParams();
  const [goat, setGoat] = useState<Goat | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGoat = async () => {
      try {
        const res = await fetch(`http://localhost:5000/goats`);
        const goats: Goat[] = await res.json();
        const found = goats.find((g) => String(g.id) === id);
        if (!found) throw new Error("Goat not found");
        setGoat(found);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      }
    };

    fetchGoat();
  }, [id]);

  if (error) {
    return <div className="p-10 text-center text-red-500">🚫 {error}</div>;
  }

  if (!goat) {
    return <div className="p-10 text-center text-gray-500">Loading goat...</div>;
  }

  return (
    <section className="min-h-screen bg-[#FFF7F0] p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md border border-[#EF962D] p-6">
        <video
          src={goat.video_url}
          controls
          className="w-full h-[400px] object-contain rounded-lg mb-6"
        />
        <h2 className="text-3xl font-bold text-[#9C5518] mb-2">{goat.name}</h2>
        <p className="text-xl text-[#9C5518] mb-1">🕑 Age: {goat.age}</p>
        <p className="text-xl text-[#9C5518]">💰 Price: {goat.price}</p>
      </div>
    </section>
  );
}
