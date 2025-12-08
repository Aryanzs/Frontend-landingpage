import React from "react";
import { Routes, Route } from "react-router-dom";

import Shop from "./pages/Shop.jsx";
import IngredientDetailsPage from "./pages/IngredientDetailsPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";

export default function App() {
  return (
    <Routes>
      {/* main shop page */}
      <Route path="/" element={<Shop />} />

  {/* Product detail (from carousel, store list etc.) */}
  <Route path="/products/:id" element={<ProductDetailsPage/>} />

  {/* Herb / ingredient detail – the long Chitrak page  */}
  <Route path="/ingredients/:id" element={<IngredientDetailsPage />} />
    </Routes>
  );
}
