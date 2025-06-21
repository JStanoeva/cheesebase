import React from "react";

const CtaSection = React.memo(() => (
  <section id="cta-section" className="py-20 md:py-32 bg-yellow-400 text-gray-900">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Melt Into Our Cheesy Stack?</h2>
      <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto">
        Join thousands of developers building extraordinary, delicious applications with Cheesebase. Don't be a cheeseball, join the party!
      </p>
      <a
        href="#"
        className="font-bold py-4 px-10 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
        style={{ backgroundColor: "#0D0D0D", color: "#FACC15" }}
      >
        Start Building for Free
      </a>
    </div>
  </section>
));

CtaSection.displayName = "CtaSection";
export default CtaSection;
