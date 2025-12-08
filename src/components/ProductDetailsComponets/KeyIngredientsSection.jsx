// src/components/ProductDetailsComponents/KeyIngredientsSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const KeyIngredientsSection = ({ herbs }) => {
  if (!herbs.length) return null;

  return (
    <section className= "mt-14">
      {/* Header row */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF0C2]">
            <span className="h-2 w-3 rounded-full bg-[#F2C94C]" />
          </span>
          <h2 className="text-sm md:text-base font-semibold text-[#333333]">
            Key Ingredients
          </h2>
        </div>

        <Link
          to="/ingredients"
          className="text-xs md:text-sm font-semibold text-[#2F7B4A] hover:underline"
        >
          View All Ingredients
        </Link>
      </div>

      {/* Cards */}
      <div className="grid gap-3 sm:grid-cols-2">
        {herbs.map((herb) => {
          const subtitle =
            herb.subtitle ||
            herb.benefit ||
            herb.tagline ||
            herb.description ||
            "Click to see benefits & details";

          return (
            <Link
              key={herb.id}
              to={`/ingredients/${herb.id}`}
              className="group flex items-center justify-between rounded-[24px] bg-[#FDEAD2] px-4 py-3 sm:px-5 sm:py-4 shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition-transform transition-shadow hover:-translate-y-[2px] hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)]"
            >
              <div className="flex flex-1 items-center gap-3">
                <span className="flex h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-[#FDEFD8]">
                  <img
                    src={herb.image}
                    alt={herb.name}
                    className="h-full w-full object-cover"
                  />
                </span>

                <div className="space-y-1">
                  <p className="text-xs sm:text-sm font-semibold text-[#333333]">
                    {herb.name}
                  </p>
                  <p className="text-[11px] sm:text-xs leading-snug text-[#4F4F4F] line-clamp-2">
                    {subtitle}
                  </p>
                </div>
              </div>

              <span className="ml-3 flex-shrink-0 text-[#2F7B4A] group-hover:translate-x-[2px] transition-transform">
                <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default KeyIngredientsSection;
