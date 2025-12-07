import React from "react";
import phoneIcon from "../assets/icons/Vectortopbar-phone.svg";

// Mock Link component - replace with your actual router Link
const Link = ({ to, children, className, ...props }) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
);

const TopBar = () => {
  return (
    <div className="w-full bg-[#323534] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2.5 md:py-3">
        
        {/* Mobile Layout - Stacked */}
        <div className="flex md:hidden flex-col items-center gap-2 w-full text-center">
          {/* Text */}
          <p className="text-xs font-normal tracking-wide">
            Your first 5 minutes instant call is free.
          </p>

          {/* Call button - compact */}
          <Link to="/instant-call">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md bg-[#2F7B4A] px-6 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#26633B] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2F7B4A] focus:ring-offset-[#323534]"
            >
              <img
                src={phoneIcon}
                alt="Call"
                className="h-3.5 w-3.5"
              />
              <span className="whitespace-nowrap">Try Instant Free Call Now</span>
            </button>
          </Link>
        </div>

        {/* Tablet & Desktop Layout - Side by Side */}
        <div className="hidden md:flex items-center justify-center gap-4 lg:gap-8 w-full">
          {/* Center text */}
          <p className="text-xs md:text-sm font-normal tracking-wide">
            Your first 5 minutes instant call is free.
          </p>

          {/* Call button */}
          <Link to="/instant-call">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md bg-[#2F7B4A] px-6 md:px-8 lg:px-10 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#26633B] hover:scale-105 hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2F7B4A] focus:ring-offset-[#323534]"
            >
              <img
                src={phoneIcon}
                alt="Call"
                className="h-4 w-4"
              />
              <span className="whitespace-nowrap">Try Instant Free Call Now</span>
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default TopBar;