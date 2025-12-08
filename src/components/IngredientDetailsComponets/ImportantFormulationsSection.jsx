// src/components/ProductDetailsComponents/ImportantFormulationsSection.jsx
import React from "react";

// ⬇️ update these paths to your actual icons
import haritakiIcon from "../../assets/Formulations/matcha 1chitrak-icon.svg";
import vatiIcon from "../../assets/Formulations/medicine 1vati-icon.svg";
import ghritaIcon from "../../assets/Formulations/cream 1kalyangulam-icon.svg";
import churnaIcon from "../../assets/Formulations/matcha 2churna.svg";

const ImportantFormulationsSection = () => {
  const formulations = [
    { name: "Chitrak Haritaki", icon: haritakiIcon },
    { name: "Chitrakadi Vati", icon: vatiIcon },
    { name: "Kalyanagulam", icon: ghritaIcon },
    { name: "Chitrakadi Churna", icon: churnaIcon },
  ];

  return (
    <section className="mt-10 font-poppins">
      <h2 className="mb-6 text-sm md:text-base font-semibold text-[#1A1A1A]">
        Important formulations
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-center">
        {formulations.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center gap-2 text-xs sm:text-sm text-[#1A1A1A]"
          >
            {/* Icon */}
            <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F7F3]">
              <img
                src={item.icon}
                alt={item.name}
                className="h-7 w-7 object-contain"
              />
            </div>

            {/* Label */}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImportantFormulationsSection;
