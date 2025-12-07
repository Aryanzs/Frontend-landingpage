import React from "react";
import phoneIcon from "../assets/icons/Vectortopbar-phone.svg";

const TopBar = () => {
  return (
    <div className="w-full bg-[#323534] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-6 py-3">
        {/* Center text */}
        <p className="text-sm font-normal tracking-wide">
          Your first 5 minutes instant call is free.
        </p>

        {/* Call button */}
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md bg-[#2F7B4A] px-10 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#26633B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2F7B4A] focus:ring-offset-[#323534]"
        >
          <img
            src={phoneIcon}
            alt="Call"
            className="h-4 w-4"
          />
          <span className="whitespace-nowrap">Try Instant Free Call Now</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;