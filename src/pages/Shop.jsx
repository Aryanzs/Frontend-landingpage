import React from 'react'

import AppDownloadSection from "../components/AppDownloadSection.jsx";
import CategoryFilters from "../components/CategoryFilters.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import ProductCarouselSection from "../components/ProductCarouselSection.jsx";
import StoreHeroSection from "../components/StoreHeroSection.jsx";
import TopBar from "../components/TopBar.jsx";

const Shop = () => {
  return <>
    <TopBar/>
    <Navbar/>
    <StoreHeroSection/>
    <CategoryFilters/>
    <ProductCarouselSection/>
    <ProductCarouselSection />

    <AppDownloadSection/>
    <Footer/>
  </>;  
}

export default Shop