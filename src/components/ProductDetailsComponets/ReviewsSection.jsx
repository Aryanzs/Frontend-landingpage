import React from "react";
import { Star } from "lucide-react";

const ReviewsSection = ({ rating, reviewCount, reviews = [] }) => {
  if (!reviews.length) return null;

  const safeRating = rating ? rating.toFixed(1) : "0.0";
  const safeCount = reviewCount ?? reviews.length;

  return (
    <section className="mt-16 font-poppins">
      {/* Title */}
      <h2 className="text-center text-lg md:text-xl font-semibold text-[#1A1A1A]">
        Reviews and Ratings
      </h2>

      {/* Top row: rating card + buttons */}
      <div className="mt-6 flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-between">
        {/* Rating card */}
        <div className="inline-flex min-w-[220px] flex-col justify-center rounded-[20px] bg-[#FDEAD2] px-6 py-5 text-center md:text-left shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-3xl font-semibold text-[#1A1A1A]">
              {safeRating}
            </span>
            <div className="flex items-center gap-[2px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(Number(safeRating))
                      ? "fill-[#F79420] text-[#F79420]"
                      : "text-[#F3C892]"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="mt-2 text-xs text-[#4F4F4F]">
            Based on {safeCount} reviews
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-end gap-3">
          <button
            type="button"
            className="rounded-[16px] border border-[#F3D3AF] bg-[#FFF7E2] px-6 py-3 text-xs md:text-sm font-semibold text-[#3A643B] shadow-[0_10px_22px_rgba(0,0,0,0.06)] transition hover:-translate-y-[1px] hover:shadow-[0_14px_28px_rgba(0,0,0,0.10)]"
          >
            See More Reviews
          </button>
          <button
            type="button"
            className="rounded-[16px] border border-[#F3D3AF] bg-[#FFF7E2] px-6 py-3 text-xs md:text-sm font-semibold text-[#3A643B] shadow-[0_10px_22px_rgba(0,0,0,0.06)] transition hover:-translate-y-[1px] hover:shadow-[0_14px_28px_rgba(0,0,0,0.10)]"
          >
            Write a review
          </button>
        </div>
      </div>

      {/* Reviews list */}
      <div className="mt-8 space-y-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

const ReviewCard = ({ review }) => {
  const { name, rating, date, comment } = review;

  const initials =
    name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() || "?";

  return (
    <div className="flex items-start gap-4 rounded-[20px] bg-[#FDEAD2] px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm text-[#1A1A1A] shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
      {/* Avatar */}
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-[#333333]">
        {initials}
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="mb-2 text-[12px] md:text-sm leading-relaxed">
          {comment}
        </p>

        <div className="flex flex-wrap items-center gap-2 text-[11px] md:text-xs text-[#4F4F4F]">
          <span className="font-semibold text-[#333333]">{name}</span>
          <span className="text-[#BDBDBD]">&bull;</span>
          <span>{date}</span>
          <span className="text-[#BDBDBD]">&bull;</span>
          <span className="flex items-center gap-[2px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.round(rating)
                    ? "fill-[#F79420] text-[#F79420]"
                    : "text-[#F3C892]"
                }`}
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
