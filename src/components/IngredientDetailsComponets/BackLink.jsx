// src/components/ProductDetailsComponets/BackLink.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const BackLink = () => {
  return (
    <Link
      to="/"
      className="
        mb-6 inline-flex items-center gap-2
        rounded-md border border-[#3A643B]
        bg-[#FFF7E2] px-4 py-2
        text-sm font-medium text-[#3A643B]
        shadow-[0_4px_12px_rgba(0,0,0,0.06)]
        transition-all duration-200
        hover:-translate-y-[1px] hover:shadow-[0_6px_18px_rgba(0,0,0,0.10)]
        focus:outline-none focus:ring-2 focus:ring-[#3A643B]/40 focus:ring-offset-2 focus:ring-offset-[#FFF7E2]
      "
    >
      <ChevronLeft className="h-4 w-4" />
      <span>Back</span>
    </Link>
  );
};

export default BackLink;
