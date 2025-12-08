// src/components/ProductDetailsComponents/TherapeuticUsesSection.jsx
import React from "react";

// ⬇️ update these paths/names to match your assets folder
import agnimandyaIcon from "../../assets/Therapeutic/Group 1000006234therpeutic.svg";
import grahaniIcon from "../../assets/Therapeutic/Grouptherpeutic-1.svg";
import arshaIcon from "../../assets/Therapeutic/Grouptherpeutic-2.svg";
import udaraIcon from "../../assets/Therapeutic/Grouptherpeutic.svg";
import gudaIcon from "../../assets/Therapeutic/Vectortherpeutic.svg";

const TherapeuticUsesSection = () => {
  const uses = [
    { key: "agnimandya", label: "Agnimandya", icon: agnimandyaIcon },
    { key: "grahani", label: "Grahani Rog", icon: grahaniIcon },
    { key: "arsha", label: "Arsha", icon: arshaIcon },
    { key: "udara", label: "Udara Shula", icon: udaraIcon },
    { key: "guda", label: "Gudasotha", icon: gudaIcon },
  ];

  return (
    <section className="mt-10 font-poppins">
      <h2 className="mb-6 text-sm md:text-base font-semibold text-[#1A1A1A]">
        Therapeutic uses
      </h2>

      <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-5 text-center">
        {uses.map((item) => (
          <div
            key={item.key}
            className="flex flex-col items-center gap-2 text-xs sm:text-sm text-[#1A1A1A]"
          >
            {/* Double-ring icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D8E4DD]">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>

            {/* Label */}
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TherapeuticUsesSection;
