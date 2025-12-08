import React from 'react'

const PlantPartsSection = () => {
  const parts = [
    {
      title: "Root",
      text: "Digestive, blood sugar support, manages metabolic issues.",
    },
    {
      title: "Root bark",
      text: "Helps deeply metabolise ama and assist in weight loss.",
    },
    {
      title: "Leaves",
      text: "Used in external applications for skin conditions and wounds.",
    },
  ];

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-sm font-semibold text-[#333333]">
        Plant parts and its purpose
      </h2>
      <div className="grid gap-4 sm:grid-cols-3 text-xs">
        {parts.map((part) => (
          <div
            key={part.title}
            className="rounded-[18px] bg-[#EAF4EA] px-4 py-3 text-[#333333]"
          >
            <p className="mb-1 font-semibold">{part.title}</p>
            <p className="text-[#4F4F4F] leading-relaxed">{part.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantPartsSection