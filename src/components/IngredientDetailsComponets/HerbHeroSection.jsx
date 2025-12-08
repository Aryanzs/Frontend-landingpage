// src/components/ProductDetailsComponents/HerbHeroSection.jsx
import React from "react";
import { CheckCircle2 } from "lucide-react";
import PrakritiImpactSection from "./PrakritiImpactSection";
import BenefitsSection from "./BenefitsSection"
import AyurvedicPropertiesSection from "./AyurvedicPropertiesSection";
import ImportantFormulationsSection from "./ImportantFormulationsSection";
import TherapeuticUsesSection from "./TherapeuticUsesSection";
import PlantPartsSection from "./PlantPartsSection";
import BestCombinedSection from "./BestCombinedSection";
import GeographicalLocationsSection from "./GeographicalLocationsSection";
const HerbHeroSection = ({ product }) => {
  return (
    <section className="mt-6 grid items-start gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      {/* LEFT: Image card */}
      <div className="rounded-[32px] bg-[#FBEED7] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
        <div className="overflow-hidden rounded-[24px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* RIGHT: Copy */}
      <div>
        {/* Title + Sanskrit */}
        <h1 className="font-['Nunito',sans-serif] text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-snug text-[#1D1D1D]">
          Chitrak – Plumbago zeylanica{" "}
          <span className="block md:inline-block text-[18px] md:text-[20px] font-semibold text-[#222222]">
            &nbsp;(Sanskrit – चित्रक)
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-xl font-['Nunito',sans-serif] text-[14px] md:text-[15px] leading-relaxed md:leading-[1.8] text-[#4F4F4F]">
          Chitrak, also known as Ceylon Leadwort or Doctorbush, is a powerful
          Ayurvedic herb valued for its ability to improve digestion, reduce
          inflammation, and detoxify the body. It is great for boosting
          metabolism, enhancing skin health, and easing joint pain.
        </p>

        {/* Why Chitrak */}
        <div className="mt-7">
          <h2 className="mb-3 font-['Nunito',sans-serif] text-[15px] font-semibold text-[#222222]">
            Why Chitrak ?
          </h2>
          <ul className="space-y-3">
            <BulletItem>
              It is valued because it helps lower blood sugar, boosts
              digestion, and reduces anxiety.
            </BulletItem>
            <BulletItem>
              It also protects the skin and speeds up wound healing with its
              antioxidant and antimicrobial properties.
            </BulletItem>
            <BulletItem>
              It is most used in Ayurvedic medicines for indigestion and
              metabolic issues.
            </BulletItem>
          </ul>

          <PrakritiImpactSection/>
          <BenefitsSection/>
          <AyurvedicPropertiesSection/>
          <ImportantFormulationsSection/>
          <TherapeuticUsesSection/>
          <PlantPartsSection/>
          <BestCombinedSection/>
          <GeographicalLocationsSection/>
        </div>
      </div>
    </section>
  );
};

const BulletItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <span className="mt-[2px] flex h-7 w-7 items-center justify-center rounded-full bg-[#E4F0E5] text-[#3A643B]">
      <CheckCircle2 className="h-3.5 w-3.5" />
    </span>
    <span className="font-['Nunito',sans-serif] text-[14px] leading-relaxed text-[#333333]">
      {children}
    </span>
  </li>
);

export default HerbHeroSection;