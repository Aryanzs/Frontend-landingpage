// src/pages/ProductDetailsPage.jsx
import React from "react";
import {useParams} from "react-router-dom";

import BackLink from "../components/IngredientDetailsComponets/BackLink";
import HerbHeroSection from "../components/IngredientDetailsComponets/HerbHeroSection";
import AyurvedicPropertiesSection from "../components/IngredientDetailsComponets/AyurvedicPropertiesSection";
import ImportantFormulationsSection from "../components/IngredientDetailsComponets/ImportantFormulationsSection";
import TherapeuticUsesSection from "../components/IngredientDetailsComponets/TherapeuticUsesSection";
import PlantPartsSection from "../components/IngredientDetailsComponets/PlantPartsSection";
import BestCombinedSection from "../components/IngredientDetailsComponets/BestCombinedSection";
import GeographicalLocationsSection from "../components/IngredientDetailsComponets/GeographicalLocationsSection";

import { herbs } from "../data/herbs";



import ProductCarouselSection from "../components/ProductCarouselSection";
import Navbar from "../components/Navbar";
import StoreHeroSection from "../components/StoreHeroSection";
import Footer from "../components/Footer";

const IngredientDetailsPage = () => {
  const { id } = useParams();
  const numericId = Number(id);
   const herb = herbs.find((h) => h.id === numericId) || herbs[0];

  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar/>
      <StoreHeroSection/>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 pt-8 pb-16">
        <BackLink />

        {/* HERO: image + intro + Why Chitrak */}
        <HerbHeroSection product={herb} />

        {/* RELATED PRODUCTS – reuse your carousel */}
        <section className="mt-12 border-t border-[#E5DCC8] pt-8">
          <ProductCarouselSection
            title={`Products with "Chitrak" as primary ingredient`}
          />
        </section>
        
      </div>
      <Footer/>
    </main>
  );
};


export default IngredientDetailsPage;
