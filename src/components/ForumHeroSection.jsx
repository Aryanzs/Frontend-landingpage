// src/components/ForumHeroSection.jsx
import React from "react";
import forumHeroBg from "../assets/Forms/Frame 1000006141Forum-bg.jpg";

const ForumHeroSection = () => {
  return (
    <section
      className="
        w-full
        bg-no-repeat
        bg-cover
        bg-center
      "
      style={{ backgroundImage: `url(${forumHeroBg})` }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-6 sm:py-8 md:py-10 flex items-center justify-center">
        <h1
          className="
            text-center
            font-poppins
            text-sm sm:text-lg md:text-2xl
            font-medium md:font-semibold
            tracking-[0.01em]
            text-[#1A1A1A]
          "
        >
          Find Discussions Related To Ayurveda Here
        </h1>
      </div>
    </section>
  );
};

export default ForumHeroSection;
