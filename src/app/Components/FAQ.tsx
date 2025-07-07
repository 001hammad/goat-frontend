"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Akhtar Goat Farm kya hai?",
    answer:
      "Ye North Karachi mein mojood aik livestock farm hai jahan se aap fresh aur healthy bakriyan khareed sakte hain meat, milk aur qurbani ke liye.",
  },
  {
    question: "Kya video dekh kar bakri choose kar sakte hain?",
    answer:
      "Jee haan! Har goat ke sath video hoti hai jise dekh kar aap uski health aur size ka andaza laga sakte hain.",
  },
  {
    question: "Order kis tarah place karen?",
    answer:
      "Simple! Goat card ke niche WhatsApp button hai — uspe click karen aur hume message bhej dein.",
  },
  {
    question: "Payment aur delivery kaise hoti hai?",
    answer:
      "Payment advance ya cash-on-delivery dono options available hain. Delivery sirf Karachi ke selected areas mein hoti hai.",
  },
  {
    question: "Kya ye farm verified hai?",
    answer:
      "Jee haan. Akhtar Goat Farm 100% original, local aur trusted farm hai jiska kaafi strong Facebook presence bhi hai.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFF7F0] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#9C5518] mb-10">
          Akhtar Goat Farm — (اکثر پوچھے جانے والے سوالات)
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-[#EF962D] rounded-xl bg-white shadow-sm transition"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left px-6 py-4 text-[#9C5518] font-medium text-lg"
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-[#6B3F1E] text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
