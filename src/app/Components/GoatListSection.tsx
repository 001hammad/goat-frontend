"use client";

import React, { useEffect, useState } from "react";
import GoatCard from "./GoatCards";

type Goat = {
  id: number;
  name: string;
  age: string;
  price: string;
  video_url: string;
};

export default function GoatListSection() {
  const [goats, setGoats] = useState<Goat[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/goats")
      .then((res) => res.json())
      .then((data) => setGoats(data))
      .catch((err) => console.error("Error fetching goats:", err));
  }, []);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-[#9C5518]">Hamari Bakriyaan</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {goats.map((goat) => (
          <GoatCard key={goat.id} goat={goat} />
        ))}
      </div>
    </section>
  );
}
