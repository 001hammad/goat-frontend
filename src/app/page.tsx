"use client";

import Hero from "./Components/Hero";
import IntroSection from "./Components/IntroSection";
import GoatVideoSection from "./Components/GoatVideoSection";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";

export default function HomePage() {
  const language: "roman" | "urdu" = "roman";

  return (
    <main className="font-sans">
      <Hero language={language} />
      <IntroSection language={language} />
      <GoatVideoSection language={language} />
      <FAQ />
      <Footer />
    </main>
  );
}
