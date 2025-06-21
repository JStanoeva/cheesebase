import React from "react";

const HeroSection = React.memo(() => (
  <section className="text-gray-100 py-24 md:py-40">
    <div className="container mx-auto px-6 text-center">
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        style={{ color: "#f5f5f5" }}
      >
        Craft in a <span className="text-yellow-400">Curd-dash</span>.
        <span className="sm:hidden"> </span>
        <br className="hidden sm:block" />
        Scale to <span className="text-yellow-400">Moo-niverse</span>.
      </h1>
      <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#aaaaaa" }}>
        Cheesebase: the open-source Firebase alternative, now 100% more delicious! Start your project with a delectable database, Gouda Auth, Swiss Storage, and a whole wheel of other wonders!
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="#"
          className="animated-cta-button w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg"
        >
          Start Your Cheesy Project
        </a>
        <a
          href="#grid-features"
          className="animated-cta-button w-full sm:w-auto font-bold py-3 px-8 rounded-lg text-lg"
          style={{ backgroundColor: "#222222", color: "#f5f5f5" }}
        >
          Explore Our Dairy Delights
        </a>
      </div>
    </div>
  </section>
));

HeroSection.displayName = "HeroSection";
export default HeroSection;
