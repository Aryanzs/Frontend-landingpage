import React from "react";
import { Star } from "lucide-react";

const ReviewsSection = ({ rating, reviewCount, reviews = [] }) => {
  if (!reviews.length) return null;

  return (
    <section className="mt-12">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[#333333]">
            Reviews & Ratings
          </p>
          <div className="mt-1 flex items-center gap-2 text-sm">
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-[#F79420] text-[#F79420]" />
              <span className="font-semibold">
                {rating ? rating.toFixed(1) : "0.0"}
              </span>
            </span>
            <span className="text-xs text-[#828282]">
              ({reviewCount ?? reviews.length} reviews)
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

const ReviewCard = ({ review }) => {
  const { name, rating, date, comment } = review;

  return (
    <div className="rounded-2xl bg-white px-4 py-3 shadow-[0_8px_18px_rgba(0,0,0,0.03)] text-xs text-[#4F4F4F]">
      <div className="mb-1 flex items-center justify-between gap-2">
        <span className="font-semibold text-[#333333]">{name}</span>
        <span className="flex items-center gap-1">
          <Star className="h-3 w-3 fill-[#F79420] text-[#F79420]" />
          <span>{rating}</span>
        </span>
      </div>
      {/* ✅ Here we render the *field*, not the whole object */}
      <p className="mb-1">{comment}</p>
      <p className="text-[10px] text-[#9E9E9E]">{date}</p>
    </div>
  );
};

export default ReviewsSection;
