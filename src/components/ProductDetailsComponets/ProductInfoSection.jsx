// src/components/ProductDetailsComponets/ProductInfoSection.jsx
import React from "react";
import productvideoimg from "../../assets/Products/Frame 1000006089trust-the-voice.png";

const ProductInfoSection = ({
  howToUse,
  generalInstructions,
  faqs = [],
  trustImage,
}) => {
  const defaultFaqs = [
    {
      question:
        "Who should be using this product? | Herbal Supplement for Hair Care",
      answer:
        "This product is ideal for individuals looking to nourish their scalp, reduce hairfall and improve overall hair health in a natural way.",
    },
    {
      question:
        "Why choose this product? | Herbal Supplement for Hair & Scalp Care",
      answer:
        "This ayurvedic formulation helps improve hair strength and shine. It is 100% natural, PETA certified cruelty–free and made with ethically sourced ingredients.",
    },
  ];

  const faqList = faqs.length ? faqs : defaultFaqs;

  return (
    <section className="mt-10 space-y-8 font-poppins">
      {/* How to use */}
      <div>
        <h2 className="mb-3 text-base md:text-lg font-semibold text-[#1A1A1A]">
          How to use
        </h2>
        <div className="rounded-[20px] bg-[#FDEAD2] px-4 py-4 md:px-6 md:py-5 text-sm leading-relaxed text-[#1A1A1A]">
          {howToUse ||
            "Mix one or two tablespoons of the product with lukewarm water or milk and consume/apply as directed. Use regularly for best results or consult our Ayurvedic Expert to find the right routine for you."}
        </div>
      </div>

      {/* General Instructions */}
      <div>
        <h2 className="mb-3 text-base md:text-lg font-semibold text-[#1A1A1A]">
          General Instructions
        </h2>
        <div className="rounded-[20px] bg-[#FDEAD2] px-4 py-4 md:px-6 md:py-5 text-sm leading-relaxed text-[#1A1A1A]">
          {generalInstructions ||
            "Store in a cool and dry place away from direct sunlight. Keep out of reach of children. Not advisable for individuals with specific medical conditions without consulting a physician."}
        </div>
      </div>

      {/* FAQs */}
      <div>
        <h2 className="mb-3 text-base md:text-lg font-semibold text-[#1A1A1A]">
          Commonly Asked Questions
        </h2>

        <div className="space-y-4">
          {faqList.map((faq, index) => (
            <div
              key={index}
              className="rounded-[20px] bg-[#FDEAD2] px-4 py-4 md:px-6 md:py-5 text-sm leading-relaxed text-[#1A1A1A]"
            >
              <p className="mb-2 font-semibold">{faq.question}</p>
              <p className="text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust the voice */}
      <div>
        <h2 className="mb-3 text-base md:text-lg font-semibold text-[#1A1A1A]">
          Trust the voice
        </h2>
        <div className="overflow-hidden rounded-[24px] bg-black">
          {/* Static image – NOT clickable */}
          <img
            src={productvideoimg ||
              trustImage ||
              "https://via.placeholder.com/1200x600.png?text=Customer+Testimonial+Video"
            }
            alt="Customer testimonial"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductInfoSection;
