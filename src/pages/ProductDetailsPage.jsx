// src/pages/ProductDetailsPage.jsx
import React from "react";
import {useParams} from "react-router-dom";

import BackLink from "../components/ProductDetailsComponets/BackLink";
import HerbHeroSection from "../components/ProductDetailsComponets/HerbHeroSection";
import PrakritiImpactSection from "../components/ProductDetailsComponets/PrakritiImpactSection";

import BenefitsSection from "../components/ProductDetailsComponets/BenefitsSection";
import AyurvedicPropertiesSection from "../components/ProductDetailsComponets/AyurvedicPropertiesSection";
import ImportantFormulationsSection from "../components/ProductDetailsComponets/ImportantFormulationsSection";
import TherapeuticUsesSection from "../components/ProductDetailsComponets/TherapeuticUsesSection";
import PlantPartsSection from "../components/ProductDetailsComponets/PlantPartsSection";
import BestCombinedSection from "../components/ProductDetailsComponets/BestCombinedSection";
import GeographicalLocationsSection from "../components/ProductDetailsComponets/GeographicalLocationsSection";




import { products } from "../data/products";
import ProductCarouselSection from "../components/ProductCarouselSection";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const product = products.find((p) => p.id === numericId) || products[0];

  return (
    <main className="min-h-screen bg-brand-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 pt-8 pb-16">
        <BackLink />

        {/* HERO: image + intro + Why Chitrak */}
        <HerbHeroSection product={product} />

        {/* PRAKRITI IMPACT */}
        <PrakritiImpactSection />

        {/* BENEFITS GRID */}
        <BenefitsSection />

        {/* AYURVEDIC PROPERTIES */}
        <AyurvedicPropertiesSection />

        {/* IMPORTANT FORMULATIONS */}
        <ImportantFormulationsSection />

        {/* THERAPEUTIC USES */}
        <TherapeuticUsesSection />

        {/* PLANT PARTS & PURPOSE */}
        <PlantPartsSection />

        {/* BEST COMBINED WITH */}
        <BestCombinedSection />

        {/* GEO LOCATIONS */}
        <GeographicalLocationsSection />

        {/* RELATED PRODUCTS – reuse your carousel */}
        <section className="mt-12 border-t border-[#E5DCC8] pt-8">
          <ProductCarouselSection
            title={`Products with "Chitrak" as primary ingredient`}
          />
        </section>
      </div>
    </main>
  );
};


export default ProductDetailsPage;
