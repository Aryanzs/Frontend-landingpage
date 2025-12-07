import React, { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

// Sample data – you can move this to src/data/products.js later
import product1 from "../assets/Products/image 7item1.jpg";
import product2 from "../assets/Products/image 171item2.jpg";
import product3 from "../assets/Products/image 174item3.jpg";

const defaultProducts = [
  {
    id: 1,
    image: product1,
    title: "Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment",
    price: "₹649.00",
    size: "200 ml",
    rating: 5,
    reviews: 52,
  },
  {
    id: 2,
    image: product2,
    title:
      "Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair",
    price: "₹649.00",
    size: "200 ml",
    rating: 5,
    reviews: 52,
  },
  {
    id: 3,
    image: product3,
    title:
      "Amrutam Nari Sondarya Malt | Complete Care For Women's Health And Beauty",
    price: "₹649.00",
    size: "200 ml",
    rating: 5,
    reviews: 52,
  },
  {
    id: 4,
    image: product1,
    title: "Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment",
    price: "₹649.00",
    size: "200 ml",
    rating: 5,
    reviews: 52,
  },
  {
    id: 5,
    image: product2,
    title:
      "Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair",
    price: "₹649.00",
    size: "200 ml",
    rating: 5,
    reviews: 52,
  },
  {
    id: 6,
    image: product3,
    title:
      "Amrutam Nari Sondarya Malt | Complete Care For Women's Health And Beauty",
    price: "₹649.00",
    size: "200 ml",
    rating: 5,
    reviews: 52,
  },
  {
    id: 7,
    image: product1,
    title: "Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment",
    price: "₹649.00",
    size: "200 ml",
    rating: 5,
    reviews: 52,
  },
  {
    id: 8,
    image: product2,
    title:
      "Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair",
    price: "₹649.00",
    size: "200 ml",
    rating: 5,
    reviews: 52,
  },
  {
    id: 9,
    image: product3,
    title:
      "Amrutam Nari Sondarya Malt | Complete Care For Women's Health And Beauty",
    price: "₹649.00",
    size: "200 ml",
    rating: 5,
    reviews: 52,
  },
];

const ProductCarouselSection = ({
  title = "Summer Collection",
  products = defaultProducts,
}) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Check scroll position and update arrow visibility
  const checkScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
    // Show left arrow if scrolled from start
    setShowLeftArrow(scrollLeft > 10);
    
    // Show right arrow if not at end
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Check initial state
    checkScroll();

    // Add scroll event listener
    scrollContainer.addEventListener("scroll", checkScroll);
    
    // Check on resize
    window.addEventListener("resize", checkScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [products]);

  const handleNext = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-brand-cream py-6 sm:py-8 md:py-10">
      {/* Responsive container with proper padding */}
      <div className="relative mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-[#333333]">
            {title}
          </h2>
        </div>

        {/* Carousel wrapper */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left arrow button - shows only when needed and on hover */}
          {showLeftArrow && (
            <button
              type="button"
              onClick={handlePrev}
              className={`
                hidden sm:flex
                absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10
                h-10 w-10 md:h-12 md:w-12 items-center justify-center
                rounded-full bg-white border border-[#E4E6EA]
                shadow-sm text-brand-green
                hover:bg-[#F1F5F2] hover:shadow-md
                transition-all duration-300
                ${isHovered ? 'opacity-100' : 'opacity-0'}
              `}
              aria-label="Previous products"
            >
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 rotate-180" />
            </button>
          )}

          {/* Carousel track */}
          <div
            ref={scrollRef}
            className="
              flex gap-3 sm:gap-4 md:gap-5 lg:gap-6
              overflow-x-auto pb-4
              scroll-smooth snap-x snap-mandatory
            "
            data-carousel="products"
            style={{
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <style>
              {`
                div[data-carousel="products"]::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

            {products.map((product) => (
              <div
                key={product.id}
                className="snap-start flex-shrink-0"
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {/* Right arrow button - shows only when needed and on hover */}
          {showRightArrow && (
            <button
              type="button"
              onClick={handleNext}
              className={`
                hidden sm:flex
                absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10
                h-10 w-10 md:h-12 md:w-12 items-center justify-center
                rounded-full bg-white border border-[#E4E6EA]
                shadow-sm text-brand-green
                hover:bg-[#F1F5F2] hover:shadow-md
                transition-all duration-300
                ${isHovered ? 'opacity-100' : 'opacity-0'}
              `}
              aria-label="Next products"
            >
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          )}
        </div>

        {/* Mobile scroll indicator */}
        <div className="sm:hidden mt-4 flex justify-center gap-1">
          <div className="text-xs text-gray-500">
            ← Swipe to see more →
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarouselSection;