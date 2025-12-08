// src/components/experts/ExpertCard.jsx
import React from "react";
import { Star } from "lucide-react";

const ExpertCard = ({
  name,
  title,
  experience,
  speciality,
  rating,
  image,
}) => {
  return (
    <article className="flex w-[295px] sm:w-[280px] flex-col overflow-hidden rounded-[32px] bg-[#FFF7E2] ">
      {/* Top content */}
      <div className="flex flex-col items-center px-6 pt-10 pb-8">
        {/* Avatar + rating badge */}
        <div className="relative mb-5">
          <div className="h-28 w-28 overflow-hidden rounded-full bg-[#DBE3DC]">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center gap-2 rounded-full bg-[#1A1A1A] px-3 py-1 text-[11px] font-semibold text-white shadow-md">
            <span>{rating.toFixed(1)}</span>
            <Star className="h-3 w-3 fill-[#FACC15] text-[#FACC15]" />
          </div>
        </div>

        {/* Text info */}
        <h3 className="mt-2 text-sm font-semibold text-[#1A1A1A] text-center">
          {name}
        </h3>
        <p className="mt-1 text-[11px] text-[#6B7280] text-center">
          {title}
        </p>

        {/* Experience */}
        <p className="mt-3 flex items-center gap-2 text-[11px] text-[#4B5563]">
          <span className="text-lg leading-none">🎓</span>
          <span>{experience} years of experience</span>
        </p>

        {/* Speciality pill */}
        <div className="mt-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#DBE3DC] px-3 py-1 text-[11px] font-medium text-[#3A643B]">
            <span className="text-xs">🔗</span>
            <span>{speciality}</span>
          </span>
        </div>
      </div>

      {/* Bottom CTA bar */}
      <button
        type="button"
        className="w-full bg-[#3A643B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#325536]"
      >
        Book a session
      </button>
    </article>
  );
};

export default ExpertCard;
