import React from 'react'
import { HeartPulse } from "lucide-react";
import Chip from "./Chip";
const TherapeuticUsesSection = () => {
  const uses = [
    "Agnimandya (low digestive fire)",
    "Grahani Roga",
    "Arsha (piles)",
    "Udara Shula",
    "Gudodathu",
  ];

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-sm font-semibold text-[#333333]">
        Therapeutic uses
      </h2>
      <div className="flex flex-wrap gap-3 text-xs">
        {uses.map((name) => (
          <Chip
            key={name}
            icon={<HeartPulse className="h-3 w-3" />}
            label={name}
          />
        ))}
      </div>
    </section>
  );
};

export default TherapeuticUsesSection