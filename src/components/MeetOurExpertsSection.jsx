// src/components/experts/MeetOurExpertsSection.jsx
import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import ExpertCard from "./ExpertCard";
import expertimg from "../assets/Products/Ellipse 725expert-img.png"
// dummy data – move to a separate data file if you want
const defaultExperts = [
  {
    id: 1,
    name: "Dr. Vaishali Sharma",
    title: "Ayurveda Practitioner (BAMS, MD)",
    experience: 25,
    speciality: "Skin Specialist",
    rating: 4.5,
    image: expertimg, // ← replace with your actual path
  },
  {
    id: 2,
    name: "Dr. Vaishali Sharma",
    title: "Ayurveda Practitioner (BAMS, MD)",
    experience: 25,
    speciality: "Skin Specialist",
    rating: 4.5,
    image: expertimg,
  },
  {
    id: 3,
    name: "Dr. Vaishali Sharma",
    title: "Ayurveda Practitioner (BAMS, MD)",
    experience: 25,
    speciality: "Skin Specialist",
    rating: 4.5,
    image: expertimg,
  },
  {
    id: 4,
    name: "Dr. Vaishali Sharma",
    title: "Ayurveda Practitioner (BAMS, MD)",
    experience: 25,
    speciality: "Skin Specialist",
    rating: 4.5,
    image: expertimg,
  },
];

const MeetOurExpertsSection = ({ experts = defaultExperts }) => {
const scrollRef = useRef(null);
  const [page, setPage] = useState(0);

  const cardsPerPage = 3; // desktop “3 cards” look
  const totalPages = Math.max(1, Math.ceil(experts.length / cardsPerPage));

  const scrollToPage = (nextPage) => {
    if (!scrollRef.current) return;
    const containerWidth = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({
      left: containerWidth * nextPage,
      behavior: "smooth",
    });
    setPage(nextPage);
  };

  const handleNext = () => {
    if (page >= totalPages - 1) return;
    scrollToPage(page + 1);
  };

  const handlePrev = () => {
    if (page <= 0) return;
    scrollToPage(page - 1);
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Title */}
        <h2 className="text-center text-lg sm:text-xl md:text-2xl font-semibold text-[#1A1A1A]">
          Meet our Experts
        </h2>

        {/* Carousel row */}
        <div className="relative mt-10">
          {/* Left arrow */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={page === 0}
            className={`
              hidden md:flex
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14
              h-12 w-12 items-center justify-center rounded-full
              border border-[#DBE3DC] bg-white text-[#3A643B]
              shadow-sm hover:bg-[#F9FAFB] hover:shadow-md
              disabled:opacity-40 disabled:hover:bg-white
              transition
            `}
            aria-label="Previous experts"
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
          </button>

          {/* Track */}
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <style>
              {`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

            {experts.map((expert) => (
              <div
                key={expert.id}
                className="snap-start flex-shrink-0"
              >
                <ExpertCard {...expert} />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            type="button"
            onClick={handleNext}
            disabled={page === totalPages - 1}
            className={`
              hidden md:flex
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-14
              h-12 w-12 items-center justify-center rounded-full
              border border-[#DBE3DC] bg-white text-[#3A643B]
              shadow-sm hover:bg-[#F9FAFB] hover:shadow-md
              disabled:opacity-40 disabled:hover:bg-white
              transition
            `}
            aria-label="Next experts"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-5 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <span
              key={idx}
              className={`h-2 w-2 rounded-full ${
                idx === page ? "bg-[#3A643B]" : "bg-[#DBE3DC]"
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-[999px] border border-[#3A643B] bg-transparent px-6 py-3 text-sm font-semibold text-[#3A643B] hover:bg-[#FFF7E2] transition"
          >
            Find more experts
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeetOurExpertsSection;
