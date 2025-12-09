import React from "react";
import { Routes, Route } from "react-router-dom";

import Shop from "./pages/Shop.jsx";
import IngredientDetailsPage from "./pages/IngredientDetailsPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import QuestionsPage from "./components/QuestionsPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ForumPage from "./pages/ForumPage.jsx";

export default function App() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      {/* main shop page */}
      <Route path="/" element={<Shop />} />
      <Route path="/forum" element={<ForumPage/>} />


  {/* Product detail (from carousel, store list etc.) */}
  <Route path="/products/:id" element={<ProductDetailsPage/>} />

  {/* Herb / ingredient detail – the long Chitrak page  */}
  <Route path="/ingredients/:id" element={<IngredientDetailsPage />} />
    </Routes>
    </>
  );
}
