// src/components/ProductDetailsComponents/PrakritiImpactSection.jsx

import React from "react";

const PrakritiImpactSection = () => (
  <div className="mt-8 font-poppins">
    <h2 className="mb-5 text-sm md:text-base font-semibold text-[#1A1A1A]">
      Prakriti Impact
    </h2>

    <div className="flex flex-wrap gap-8 sm:gap-12">
      {/* hard-coded % values – tweak as you like */}
      <DoshaCard
        label="Vata Balanced"
        color="#2F80ED"
        percentage={80}
        emoji="🌀"
      />
      <DoshaCard
        label="Kapha Balanced"
        color="#3A643B"
        percentage={70}
        emoji="🌿"
      />
      <DoshaCard
        label="Pitta Unbalanced"
        color="#F2994A"
        percentage={40}
        emoji="🔥"
        unbalanced
      />
    </div>
  </div>
);

const DoshaCard = ({ label, color, percentage, emoji, unbalanced = false }) => {
  // split “Vata Balanced” → “Vata”, “Balanced”
  const [dosha, status] = label.split(" ");

  // SVG circle math
  const radius = 44; // slightly inset from viewbox
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - percentage / 100);

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {/* progress ring */}
      <div className="relative h-24 w-24 sm:h-28 sm:w-28 flex items-center justify-center">
        <svg
          className="absolute inset-0"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* background track */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="#FDEAD2"
            strokeWidth="7"
          />
          {/* progress arc */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth="7"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)" // start from top
          />
        </svg>

        {/* inner circle with emoji */}
        <div className="relative h-[56%] w-[56%] rounded-full bg-[#FFF7E2] shadow-[0_8px_18px_rgba(0,0,0,0.12)] flex items-center justify-center text-2xl">
          <span>{emoji}</span>
        </div>
      </div>

      {/* label */}
      <p className="mt-1 text-xs sm:text-sm text-[#4F4F4F]">
        <span>{dosha} </span>
        <span
          className={`font-semibold ${
            unbalanced ? "text-[#E85C3C]" : "text-[#1A1A1A]"
          }`}
        >
          {status}
        </span>
      </p>
    </div>
  );
};

export default PrakritiImpactSection;
