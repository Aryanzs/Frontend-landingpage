import React, { useState } from "react";
import { Star, ChevronRight } from "lucide-react";
import KeyIngredientsSection from "./KeyIngredientsSection";
import ProductInfoSection from "./ProductInfoSection";

const ProductHeroSection = ({ product, herbs = [] }) => {
  const mainImage = product.image;
  const thumbnails =
    product.images && product.images.length > 0
      ? product.images
      : [mainImage, mainImage, mainImage, mainImage];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState("200 ml");
  const [quantity, setQuantity] = useState(1);

  const handleNextImage = () => {
    setActiveIndex((prev) => (prev + 1) % thumbnails.length);
  };

  const decreaseQty = () =>
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  const increaseQty = () => setQuantity((q) => q + 1);

  const rating = product.rating || 5;
  const reviewCount = product.reviewCount || 204;

    const highlights =
    product.highlights && product.highlights.length > 0
      ? product.highlights
      : [
          "Helps with dry, frizzy hair",
          "Relaxes the scalp & improves hair health",
          "Makes hair smooth & shiny",
          "Reduces hairfall & repairs damaged hair",
        ];

  return (
    <section className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[1.05fr_1.1fr] items-start">
      {/* LEFT – Image + thumbnails */}
      <div className="rounded-md  ">
        <div className="relative overflow-hidden rounded-[28px] ">
          <img
            src={thumbnails[activeIndex]}
            alt={product.title}
            className="w-full h-full object-cover"
          />

          {/* Next image arrow */}
          <button
            type="button"
            onClick={handleNextImage}
            className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#2F7B4A] text-white shadow-lg transition hover:bg-[#245d37]"          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

 {/* Thumbnails */}
        <div className="mt-4 grid grid-cols-4 gap-3">
          {thumbnails.map((thumb, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`overflow-hidden rounded-2xl border-2 transition ${
                  isActive
                    ? "border-[#2F7B4A] shadow-md"
                    : "border-transparent  opacity-50 hover:opacity-90"
                }`}
              >
                <img
                  src={thumb}
                  alt={`${product.title} thumbnail ${idx + 1}`}
                  className={`h-20 w-full object-cover ${
                    isActive ? "blur-0" : "blur-[1px]"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT – Details */}
      <div className="font-['Poppins',sans-serif]">
        {/* Title */}
        <h1 className="text-[22px] md:text-[26px] font-semibold text-[#333333] leading-snug">
          {product.title}
        </h1>

        {/* Rating + reviews */}
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          <div className="flex items-center gap-1 text-[#F2994A] font-medium">
            <span>{rating.toFixed(1)}</span>
            <div className="flex items-center gap-[2px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(rating)
                      ? "fill-[#F2994A] text-[#F2994A]"
                      : "text-[#E0E0E0]"
                  }`}
                />
              ))}
            </div>
          </div>
          <span className="text-xs text-[#828282]">
            ({reviewCount} reviews)
          </span>
        </div>

        {/* Price + size */}
        <div className="mt-4 flex items-center gap-3 text-sm font-medium">
          <span className="text-[18px] font-semibold text-[#333333]">
            {product.price || "₹649"}
          </span>
          <span className="text-[#828282]">
            {product.size ? product.size : "200 ml"}
          </span>
        </div>

        {/* Variant pills */}
        <div className="mt-5 flex flex-wrap gap-3 text-xs sm:text-sm">
          {["200 ml", "100 ml", "Pack of 3"].map((variant) => (
            <button
              key={variant}
              type="button"
              onClick={() => setSelectedVariant(variant)}
              className={`rounded-[10px] border px-3 py-1 transition ${
                selectedVariant === variant
                  ? "border-[#2F7B4A] bg-[#2F7B4A] text-white"
                  : "border-[#E0E0E0] bg-[#F8F8F8] text-[#4F4F4F] hover:border-[#2F7B4A]"
              }`}
            >
              {variant}
            </button>
          ))}
        </div>

        {/* Qty + Add to cart */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* Long quantity counter */}
          <div className="flex  flex-1 items-center justify-between rounded-md border border-[[#333333]]  px-4 py-3 text-sm font-medium text-[#333333]">
            <button
              type="button"
              onClick={decreaseQty}
              className="px-2 text-lg leading-none text-[#4F4F4F] hover:text-[#2F7B4A]"
            >
              −
            </button>
            <span className="text-base font-semibold">{quantity}</span>
            <button
              type="button"
              onClick={increaseQty}
              className="px-2 text-lg leading-none text-[#4F4F4F] hover:text-[#2F7B4A]"
            >
              +
            </button>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            className="flex-1 rounded-md bg-[#2F7B4A] px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#245d37] transition"
          >
            Add to cart
          </button>
        </div>

        {/* Short description */}
        <p className="mt-5 text-sm leading-relaxed text-[#4F4F4F]">
          {product.shortDescription ||
            "Amrutam’s Kuntal Care Hair Spa is an ayurvedic treatment enriched with revitalizing herbs and essential oils. It nourishes dry, frizzy hair, adds shine, and helps you bring the spa experience home."}
        </p>
                {/* Product Highlights */}
        <div className="mt-8">
          <div className="mb-4 flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF0C2]">
              {/* simple decorative tick/feather dot */}
              <span className="h-2 w-2 rounded-full bg-[#F2C94C]" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#4F4F4F]">
              Product Highlights
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[24px] bg-[#FDEAD2]   px-4 py-4 text-xs font-medium leading-relaxed text-[#4F4F4F] shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <KeyIngredientsSection herbs={herbs} />
        <ProductInfoSection/>
      </div>
    </section>
  );
};

export default ProductHeroSection;
