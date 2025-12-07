import React, { useState } from "react";

// Import your icons
import allIcon from "../assets/FilterIcons/Frame 1000006318All-icon.svg";
import hairIcon from "../assets/FilterIcons/HairHair-icon (1).svg";
import skinIcon from "../assets/FilterIcons/Group 1000006160Skin.svg";
import digestionIcon from "../assets/FilterIcons/Group 1000006158Digestion.svg";
import bonesIcon from "../assets/FilterIcons/Group 1000006162Bones-icon (1).svg";
import immunityIcon from "../assets/FilterIcons/Medical Shield.svg";
import moreIcon from "../assets/FilterIcons/Math, Less Thannexticon.svg";

const categories = [
  { id: "all", label: "All", icon: allIcon, size: 28 },
  { id: "hair", label: "Hair", icon: hairIcon, size: 80 },
  { id: "skin", label: "Skin", icon: skinIcon, size: 42 },
  { id: "digestion", label: "Digestion", icon: digestionIcon, size: 42 },
  { id: "bones", label: "Bones", icon: bonesIcon, size: 42 },
  { id: "immunity", label: "Immunity", icon: immunityIcon, size: 42 },
  { id: "more", label: "More", icon: moreIcon, size: 28 },
];

const CategoryFilters = () => {
  const [activeId, setActiveId] = useState("all");

  return (
    <section className="w-full bg-[#FEFBF7]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-10">
        {/* Wrapper becomes horizontal scroll on mobile, centered row on bigger screens */}
        <div className="flex items-center justify-start md:justify-center gap-4 sm:gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
          {categories.map((cat) => (
            <CategoryPill
              key={cat.id}
              category={cat}
              active={activeId === cat.id}
              onClick={() => setActiveId(cat.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryPill = ({ category, active, onClick }) => {
  const { label, icon, size = 28 } = category;

  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group 
        flex flex-col items-center 
        gap-2 sm:gap-3 
        min-w-[72px]
        focus:outline-none 
        focus-visible:ring-2 
        focus-visible:ring-[#E0E8E2] 
        focus-visible:ring-offset-2 
        transition-transform 
        hover:scale-105
      "
    >
      {/* Outer circle */}
      <div
        className="relative flex items-center justify-center rounded-full transition-shadow"
        style={{
          width: "72px",
          height: "72px",
          backgroundColor: "#FFFFFF",
          boxShadow: active
            ? "0 4px 12px rgba(0, 0, 0, 0.08)"
            : "0 2px 8px rgba(0, 0, 0, 0.04)",
        }}
      >
        {/* Inner circle */}
        <div
          className="flex items-center justify-center rounded-full transition-all"
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "#E0E8E2",
            transform: active ? "scale(1)" : "scale(0.98)",
          }}
        >
          <img
            src={icon}
            alt={label}
            className="object-contain"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              maxWidth: "none",
            }}
          />
        </div>

        {/* Active indicator dot */}
        {active && (
          <div
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#2E4B32",
            }}
          />
        )}
      </div>

      {/* Label */}
      <span
        className="text-xs sm:text-sm font-medium transition-colors"
        style={{
          color: active ? "#2E4B32" : "#666666",
        }}
      >
        {label}
      </span>
    </button>
  );
};

export default CategoryFilters;
