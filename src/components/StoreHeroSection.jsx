import React from "react";

// update these paths to match your project structure
import heroBg from "../assets/icons/image 154search-barbg-img.svg";
import searchIcon from "../assets/icons/searchsearch-icon.svg";
import bagIcon from "../assets/icons/Framecart-searchbox.svg";

const StoreHeroSection = () => {
  return (
    <section
      className="
        w-full 
        bg-no-repeat 
        bg-cover 
        bg-center
      "
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-7 sm:py-9 md:py-12 flex flex-col items-center">
        {/* Title */}
        <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-[#2E3142] text-center">
          Store
        </h2>

        {/* Search + bag button */}
        <div className="flex w-full max-w-3xl items-center justify-center gap-2 sm:gap-3 md:gap-4">
          {/* Search box */}
          <div
            className="
              flex 
              items-center 
              flex-1 
              min-w-0
              rounded-full 
              bg-white 
              px-3 sm:px-4 
              py-2 sm:py-2.5 md:py-3 
              shadow-sm 
              border border-[#E4E6EA]/70
            "
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full">
              <img
                src={searchIcon}
                alt="Search"
                className="h-4 w-4"
              />
            </span>
            <input
              type="text"
              placeholder="Search for Kuntal Care"
              className="
                ml-2 
                w-full 
                min-w-0
                border-none 
                bg-transparent 
                text-xs sm:text-sm md:text-base 
                font-medium 
                text-[#3A3C4A] 
                placeholder:text-[#9A9CA8] 
                focus:outline-none
              "
            />
          </div>

          {/* Bag icon button */}
          <button
            type="button"
            className="
              flex 
              flex-shrink-0 
              items-center 
              justify-center 
              h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 
              rounded-xl 
              bg-white 
              shadow-sm 
              border border-[#E4E6EA]
            "
          >
            <img
              src={bagIcon}
              alt="Filter / Bag"
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoreHeroSection;
