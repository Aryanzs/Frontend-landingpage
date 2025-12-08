// src/components/ProductDetailsComponents/GeographicalLocationsSection.jsx
import React from "react";
import { MapPin } from "lucide-react";

const GeographicalLocationsSection = () => (
  <section className="mt-8 max-w-xl font-poppins text-xs text-[#4F4F4F]">
    <div className="mb-3 flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E4F0E5]">
        <MapPin className="h-4 w-4 text-[#3A643B]" />
      </div>
      <h2 className="text-sm md:text-base font-semibold text-[#1A1A1A]">
        Geographical locations
      </h2>
    </div>

    <p className="leading-relaxed">
      It is native to tropical and subtropical regions worldwide, including
      India and Sri Lanka.
    </p>
  </section>
);

export default GeographicalLocationsSection;
