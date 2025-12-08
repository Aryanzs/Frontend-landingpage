// src/components/ProductDetailsComponents/PlantPartsSection.jsx
import React from "react";

// ⬇️ update paths to match your assets
import rootIcon from "../../assets/Herbs/root (1) 1.svg";
import rootBarkIcon from "../../assets/Herbs/root 1rootbark.svg";
import leavesIcon from "../../assets/Herbs/leaves 1.svg";

const PlantPartsSection = () => {
  const parts = [
    {
      key: "root",
      title: "Root",
      text: "Digestion, skin conditions, manage blood sugar level.",
      icon: rootIcon,
    },
    {
      key: "root-bark",
      title: "Root bark",
      text: "Manage obesity, metabolism and assist in weight loss.",
      icon: rootBarkIcon,
    },
    {
      key: "leaves",
      title: "Leaves",
      text: "Used externally for skin conditions and wounds.",
      icon: leavesIcon,
    },
  ];

  return (
    <section className="mt-10 font-poppins">
      <h2 className="mb-6 text-sm md:text-base font-semibold text-[#1A1A1A]">
        Plant parts and its purpose
      </h2>

      <div className="grid gap-8 sm:grid-cols-3 text-center">
        {parts.map((part) => (
          <div
            key={part.key}
            className="flex flex-col items-center gap-2 text-xs sm:text-sm text-[#333333]"
          >
            {/* single icon – no ring */}
            <img
              src={part.icon}
              alt={part.title}
              className="h-10 w-10 sm:h-8 sm:w-8 object-contain mb-1"
            />

            <p className="text-sm sm:text-base font-semibold text-[#1A1A1A]">
              {part.title}
            </p>

            <p className="mt-1 max-w-[220px] text-[11px] sm:text-xs leading-relaxed text-[#4F4F4F]">
              {part.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantPartsSection;
