import React from 'react'

const AyurvedicPropertiesSection = () => {
  const props = [
    { label: "Rasa (Taste)", value: "Katu (Pungent)" },
    { label: "Guna (Quality)", value: "Laghu, Ruksha" },
    { label: "Virya (Potency)", value: "Ushna (Hot)" },
    { label: "Vipaka (Post-digestive)", value: "Katu" },
  ];

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-sm font-semibold text-[#333333]">
        Ayurvedic Properties
      </h2>
      <div className="flex flex-wrap gap-6 text-xs text-[#333333]">
        {props.map((item) => (
          <div key={item.label} className="min-w-[130px]">
            <p className="font-semibold mb-1">{item.label}</p>
            <p className="text-[#4F4F4F]">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AyurvedicPropertiesSection