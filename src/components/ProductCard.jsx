import React from "react";
import { Star, Plus } from "lucide-react"; // lucide icons

const ProductCard = ({
  image,
  title,
  price = "₹649.00",
  size = "200 ml",
  rating = 5,
  reviews = 52,
}) => {
  return (
    <div className="flex w-[280px] flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
      {" "}
      {/* Image block */}
      <div className="mb-4 w-full overflow-hidden rounded-3xl bg-white shadow-md">
        <img
          src={image}
          alt={title}
          className="h-[320px] w-full object-cover"
        />
      </div>
      {/* Title */}
      <h3 className="mb-2 text-center text-sm font-medium text-[#333333] leading-snug">
        {title}
      </h3>
      {/* Price + size */}
      <p className="mb-2 text-center text-xs font-medium text-[#4F4F4F]">
        {price} · {size}
      </p>
      {/* Rating + reviews */}
      <div className="flex w-full items-center justify-center gap-1 text-xs">
        <div className="flex items-center gap-[2px]">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star key={idx} className="h-3 w-3 fill-[#F79420] text-[#F79420]" />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="ml-1 text-[11px] text-[#4F4F4F]">({reviews})</span>

          <button
            type="button"
            className=" flex h-8 w-8 items-center justify-center rounded-md bg-[#2F7B4A] text-white shadow-md transition-all duration-300 hover:bg-[#26633B] hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2F7B4A] focus:ring-offset-2 focus:ring-offset-[#FFF7E2]"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
