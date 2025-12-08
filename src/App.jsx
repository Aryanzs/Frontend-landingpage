import React from "react";
import { Routes, Route } from "react-router-dom";

import Shop from "./pages/Shop.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";

export default function App() {
  return (
    <Routes>
      {/* main shop page */}
      <Route path="/" element={<Shop />} />

      {/* individual product details */}
      <Route path="/products/:id" element={<ProductDetailsPage />} />
    </Routes>
  );
}
