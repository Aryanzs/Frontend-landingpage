import React from "react";

// update these paths to match your project structure
import heroBg from "../assets/icons/image 154search-barbg-img.svg";
import searchIcon from "../assets/icons/searchsearch-icon.svg";
import bagIcon from "../assets/icons/Framecart-searchbox.svg";

const StoreHeroSection = () => {
  return (
    <section
      className="w-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-10 md:py-14">
        {/* Title */}
        <h2 className="mb-6 text-3xl font-semibold tracking-wide text-[#2E3142] md:text-4xl">
          Store
        </h2>

        {/* Search + bag button */}
        <div className="flex w-full items-center justify-center gap-4">
          {/* Search box */}
          <div className="flex w-full max-w-3xl items-center rounded-full bg-white px-4 py-3 shadow-sm">
            <span className="flex h-9 w-9 items-center justify-center rounded-full">
              <img
                src={searchIcon}
                alt="Search"
                className="h-4 w-4"
              />
            </span>
            <input
              type="text"
              placeholder="Search for Kuntal Care"
              className="ml-2 w-full border-none bg-transparent text-sm font-medium text-[#3A3C4A] placeholder:text-[#9A9CA8] focus:outline-none"
            />
          </div>

          {/* Bag icon button */}
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm border border-[#E4E6EA]"
          >
            <img
              src={bagIcon}
              alt="Filter / Bag"
              className="h-5 w-5"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoreHeroSection;
