import CategoryFilters from "./components/CategoryFilters.jsx";
import Navbar from "./components/Navbar.jsx";
import ProductCarouselSection from "./components/ProductCarouselSection.jsx";
import StoreHeroSection from "./components/StoreHeroSection.jsx";
import TopBar from "./components/TopBar.jsx";

export default function App() {
  return <>
    <TopBar/>
    <Navbar/>
    <StoreHeroSection/>
    <CategoryFilters/>
    <ProductCarouselSection/>
  </>;
}
