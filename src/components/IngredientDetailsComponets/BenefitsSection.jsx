import React from 'react'
import { Flower2 } from "lucide-react";


const BenefitsSection = () => {
  const benefits = [
    "Calms the nervous system and reduces anxiety.",
    "Reduces cholesterol and supports weight loss.",
    "Manages diabetes by lowering blood sugar levels.",
    "Beneficial in hemorrhoids of Vata origin.",
    "Improves digestion and boosts metabolism.",
    "Prevents deposits in arteries, supporting heart health.",
    "Treats skin conditions like acne and dermatitis.",
    "Speeds up wound healing and promotes new skin growth.",
  ];

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-sm font-semibold text-[#333333]">Benefits</h2>
      <div className="grid gap-4 md:grid-cols-2 max-w-3xl">
        {benefits.map((text, idx) => (
          <div
            key={idx}
            className="rounded-[18px] bg-[#FFEFD9] px-4 py-3 text-xs leading-relaxed text-[#333333]"
          >
            <div className="mb-1 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <Flower2 className="h-3 w-3 text-[#F4A11A]" />
              </span>
              <span className="font-semibold text-[11px] text-[#333333]">
                Benefit {idx + 1}
              </span>
            </div>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection