// src/components/ProductDetailsComponents/AyurvedicPropertiesSection.jsx
import React from "react";

// ⬇️ update these import paths / filenames to your actual icons
import rasaIcon from "../../assets/Ingredients icons/FrameRasa-icon.svg";
import veeryaIcon from "../../assets/Ingredients icons/FrameVeerya-icon.svg";
import gunaIcon from "../../assets/Ingredients icons/Frameguna.svg";
import vipakaIcon from "../../assets/Ingredients icons/Framevipaka.svg";

const AyurvedicPropertiesSection = () => {
  const props = [
    {
      key: "rasa",
      title: "Rasa",
      label: "Katu (Pungent)",
      description: "Stimulates salivation and digestion.",
      icon: rasaIcon,
    },
    {
      key: "veerya",
      title: "Veerya",
      label: "Ushna (Hot)",
      description: "Increases heat and energy in the body.",
      icon: veeryaIcon,
    },
    {
      key: "guna",
      title: "Guna",
      label: "Laghu (Light), Ruksha (Dry), Tiksna (Sharp)",
      description: "Easy to digest, reduces heaviness.",
      icon: gunaIcon,
    },
    {
      key: "vipaka",
      title: "Vipaka",
      label: "Katu (Pungent)",
      description: "Drying and stimulating even after digestion.",
      icon: vipakaIcon,
    },
  ];

  return (
    <section className="mt-10 font-poppins">
      <h2 className="mb-6 text-sm md:text-base font-semibold text-[#1A1A1A]">
        Ayurvedic Properties
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-center">
        {props.map((item) => (
          <div
            key={item.key}
            className="flex flex-col items-center gap-2 text-xs text-[#333333]"
          >
            {/* icon */}
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F7F3]">
              <img
                src={item.icon}
                alt={item.title}
                className="h-7 w-7 object-contain"
              />
            </div>

            {/* title */}
            <p className="text-sm font-semibold text-[#1A1A1A]">
              {item.title}
            </p>

            {/* main value */}
            <p className="mt-1 font-semibold text-[11px] text-[#333333] leading-snug">
              {item.label}
            </p>

            {/* description */}
            <p className="mt-1 max-w-[170px] text-[11px] leading-relaxed text-[#4F4F4F]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AyurvedicPropertiesSection;
