import React from "react";
import { useParams } from "react-router-dom";
import BackLink from "../components/ProductDetailsComponets/BackLink";
import ProductHeroSection from "../components/ProductDetailsComponets/ProductHeroSection";
import KeyIngredientsSection from "../components/ProductDetailsComponets/KeyIngredientsSection";
import ReviewsSection from "../components/ProductDetailsComponets/ReviewsSection";


import { products } from "../data/products";
import { herbs } from "../data/herbs";


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
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 pt-8 pb-16">
      <BackLink />

      <ProductHeroSection product={product} />

      <KeyIngredientsSection herbs={productHerbs} />

      <ReviewsSection
        rating={product.rating}
        reviewCount={product.reviewCount}
        reviews={productReviews}
      />
    </div>
  </main>
);

};

export default ProductDetailsPage;
