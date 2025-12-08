import React from "react";
import { useParams } from "react-router-dom";
import BackLink from "../components/ProductDetailsComponets/BackLink";
import ProductHeroSection from "../components/ProductDetailsComponets/ProductHeroSection";
import ReviewsSection from "../components/ProductDetailsComponets/ReviewsSection";
import ProductCarouselSection from "../components/ProductCarouselSection"

import { products } from "../data/products";
import { herbs } from "../data/herbs";
import MeetOurExpertsSection from "../components/MeetOurExpertsSection";
import AppDownloadSection from "../components/AppDownloadSection";
import Footer from "../components/Footer";
import CategoryFilters from "../components/CategoryFilters";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import StoreHeroSection from "../components/StoreHeroSection";


const ProductDetailsPage = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const product = products.find((p) => p.id === numericId) || products[0];

    const productReviews = product.reviews || [];
  const productHerbs =
    (product.ingredients || []).map((herbId) =>
      herbs.find((h) => h.id === herbId)
    ).filter(Boolean);

return (
  <main className="min-h-screen bg-brand-cream">
    <TopBar/>
    <Navbar/>
    <StoreHeroSection/>
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 pt-8 pb-16">
      <BackLink />

      <ProductHeroSection product={product} herbs={productHerbs} />


      <ReviewsSection
        rating={product.rating}
        reviewCount={product.reviewCount}
        reviews={productReviews}
      />
              <section className="mt-12 border-t border-[#E5DCC8] pt-8">
          <ProductCarouselSection
              title="People also bought"
  titleAlign="center"

          />
        </section>
    </div>
            <MeetOurExpertsSection/>
            <AppDownloadSection/>
            <Footer/>

  </main>
);

};

export default ProductDetailsPage;
