// src/components/ProductDetailsComponents/KeyIngredientsSection.jsx
import React from "react";
import { Link } from "react-router-dom";

const KeyIngredientsSection = ({ herbs }) => {
  if (!herbs.length) return null;

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-sm font-semibold text-[#333333]">
        Key Ingredients
      </h2>

      <div className="flex flex-wrap gap-3">
        {herbs.map((herb) => (
          <Link
            key={herb.id}
            to={`/ingredients/${herb.id}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs text-[#333333] shadow-[0_8px_18px_rgba(0,0,0,0.04)] hover:shadow-md hover:-translate-y-[1px] transition"
          >
            <span className="h-7 w-7 overflow-hidden rounded-full bg-[#FDEFD8]">
              <img
                src={herb.image}
                alt={herb.name}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="font-medium">{herb.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default KeyIngredientsSection;
