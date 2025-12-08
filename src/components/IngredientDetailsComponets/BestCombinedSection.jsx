// src/components/ProductDetailsComponents/BestCombinedSection.jsx
import React from "react";
import { Leaf } from "lucide-react";

const BestCombinedSection = () => {
  const comboHerbs = [
    "Pippali",
    "Haritaki",
    "Guggulu",
    "Punarnava",
    "Amalaki",
    "Giloy",
  ];

  return (
    <section className="mt-10 font-poppins text-xs text-[#4F4F4F]">
      <h2 className="mb-3 text-sm md:text-base font-semibold text-[#1A1A1A]">
        Best combined with
      </h2>

      <div className="inline-flex flex-wrap gap-2">
        {comboHerbs.map((name) => (
          <span
            key={name}
            className="inline-flex items-center gap-1 rounded-full bg-[#FFF7E2] px-3 py-1 shadow-[0_6px_14px_rgba(0,0,0,0.06)]"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E4F0E5]">
              <Leaf className="h-3 w-3 text-[#3A643B]" />
            </span>
            <span className="text-[11px] font-medium text-[#333333]">
              {name}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default BestCombinedSection;
