// src/components/ProductDetailsComponents/BenefitsSection.jsx
import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      emoji: "💆‍♂️",
      text: "Calms The Nervous System And Reduces Anxiety.",
    },
    {
      emoji: "⚖️",
      text: "Reduces Cholesterol And Supports Weight Loss.",
    },
    {
      emoji: "🩸",
      text: "Manages Diabetes By Lowering Blood Sugar Levels.",
    },
    {
      emoji: "💊",
      text: "Beneficial In Hemorrhoids Of Vata Origin.",
    },
    {
      emoji: "🍽️",
      text: "Improves Digestion And Boosts Metabolism.",
    },
    {
      emoji: "❤️",
      text: "Prevents Deposits In Arteries, Supporting Heart Health.",
    },
    {
      emoji: "🌿",
      text: "Treats Skin Conditions Like Acne And Dermatitis.",
    },
    {
      emoji: "🍽️",
      text: "Speeds Up Wound Healing And Promotes New Skin Growth.",
    },
  ];

  return (
    <section className="mt-10 font-poppins">
      <h2 className="mb-4 text-sm md:text-base font-semibold text-[#1A1A1A]">
        Benefits
      </h2>

      <div className="grid max-w-3xl gap-4 md:grid-cols-2">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 rounded-[22px] bg-[#FFEAD2] px-5 py-4 shadow-[0_12px_26px_rgba(0,0,0,0.08)]"
          >
            {/* Emoji icon block */}
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[16px] bg-[#FFD3A3] text-xl">
              <span>{item.emoji}</span>
            </div>

            {/* Text */}
            <p className="text-xs sm:text-sm leading-relaxed text-[#1A1A1A]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
