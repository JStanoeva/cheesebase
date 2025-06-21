import React from "react";
import GlobalStyles from "./components/GlobalStyles.jsx";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import GridFeaturesSection from "./components/GridFeaturesSection.jsx";
import EatCheeseWithSection from "./components/EatCheeseWithSection.jsx";
import GeminiIdeaGeneratorSection from "./components/GeminiIdeaGeneratorSection.jsx";
import FeaturesCarouselSection from "./components/FeaturesCarouselSection.jsx";
import WhyCheesebaseSection from "./components/WhyCheesebaseSection.jsx";
import ContinuousPartnersSection from "./components/ContinuousPartnersSection.jsx";
import CtaSection from "./components/CtaSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="app-container">
      <GlobalStyles />
      <Header />
      <main>
        <HeroSection />
        <GridFeaturesSection />
        <EatCheeseWithSection />
        <GeminiIdeaGeneratorSection />
        <FeaturesCarouselSection />
        <WhyCheesebaseSection />
        <ContinuousPartnersSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
