import React from 'react'
import { Pill } from "lucide-react";
import Chip from "./Chip";
const ImportantFormulationsSection = () => {
  const formulations = [
    "Chitrak Haritaki",
    "Chitrakadivati Vati",
    "Kalyanaka ghrita",
    "Chitrakadi Churna",
  ];

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-sm font-semibold text-[#333333]">
        Important formulations
      </h2>
      <div className="flex flex-wrap gap-3 text-xs">
        {formulations.map((name) => (
          <Chip key={name} icon={<Pill className="h-3 w-3" />} label={name} />
        ))}
      </div>
    </section>
  );
};

export default ImportantFormulationsSection