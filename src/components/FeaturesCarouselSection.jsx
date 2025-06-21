import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  Database,
  KeyRound,
  FolderArchive,
  Zap,
  MousePointerClick,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const featuresCarouselData = [
  {
    id: 1,
    icon: Database,
    title: "The Big Cheese Database",
    description:
      "A fully managed Postgres database, as satisfying and complex as a perfectly aged cheddar wheel.",
    linkText: "Taste the Data",
  },
  {
    id: 2,
    icon: KeyRound,
    title: "Gouda Authentication",
    description:
      "Secure user logins smoother than the finest brie. So good, it's almost too Gouda to be true!",
    linkText: "Secure Your Curds",
  },
  {
    id: 3,
    icon: FolderArchive,
    title: "Swiss Storage Solutions",
    description:
      "Store and serve large files with hole-some reliability. No missing pieces here!",
    linkText: "Stack Your Files",
  },
  {
    id: 4,
    icon: Zap,
    title: "Edam Edge Functions",
    description:
      "Run your code closer to your users. Mild, yet surprisingly powerful serverless functions. It's Edam good!",
    linkText: "Function with Flavor",
  },
  {
    id: 5,
    icon: MousePointerClick,
    title: "Realtime Roquefort",
    description:
      'Build real-time apps with a bold, distinctive flavor. Listen to database changes faster than you can say "blue cheese!"',
    linkText: "Get Live Updates",
  },
];

const FeaturesCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const carouselTrackRef = useRef(null);
  const carouselContainerRef = useRef(null);
  const autoScrollIntervalIdRef = useRef(null);

  const calculateSlideWidth = useCallback(
    () =>
      carouselContainerRef.current && featuresCarouselData.length > 0
        ? carouselContainerRef.current.getBoundingClientRect().width / itemsPerPage
        : 0,
    [itemsPerPage]
  );

  const updateItemsPerPage = useCallback(() => {
    const screenWidth = window.innerWidth;
    let newItemsPerPage = 1;
    if (screenWidth >= 1024) newItemsPerPage = 3;
    else if (screenWidth >= 768) newItemsPerPage = 2;
    setItemsPerPage(newItemsPerPage);
  }, []);

  const updateCarouselPosition = useCallback(() => {
    const slideWidth = calculateSlideWidth();
    const maxIndex =
      featuresCarouselData.length > 0
        ? Math.max(0, featuresCarouselData.length - itemsPerPage)
        : 0;
    let newCurrentIndex = currentIndex;
    if (newCurrentIndex > maxIndex) newCurrentIndex = maxIndex;
    if (newCurrentIndex < 0) newCurrentIndex = 0;

    if (carouselTrackRef.current && featuresCarouselData.length > 0) {
      carouselTrackRef.current.style.transform = `translateX(-${slideWidth * newCurrentIndex}px)`;
    }
    if (currentIndex !== newCurrentIndex) {
      setCurrentIndex(newCurrentIndex);
    }
  }, [calculateSlideWidth, currentIndex, itemsPerPage]);

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, [updateItemsPerPage]);

  useEffect(() => {
    updateCarouselPosition();
  }, [currentIndex, itemsPerPage, updateCarouselPosition]);

  const advanceCarousel = useCallback(() => {
    if (featuresCarouselData.length <= itemsPerPage) return;
    const maxIndex = Math.max(0, featuresCarouselData.length - itemsPerPage);
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  }, [itemsPerPage]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollIntervalIdRef.current) clearInterval(autoScrollIntervalIdRef.current);
  }, []);

  const startAutoScroll = useCallback(() => {
    stopAutoScroll();
    if (featuresCarouselData.length > itemsPerPage && carouselContainerRef.current) {
      autoScrollIntervalIdRef.current = setInterval(advanceCarousel, 4000);
    }
  }, [advanceCarousel, itemsPerPage, stopAutoScroll]);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  const handlePrev = useCallback(() => {
    const maxIndex =
      featuresCarouselData.length > 0
        ? Math.max(0, featuresCarouselData.length - itemsPerPage)
        : 0;
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
    startAutoScroll();
  }, [itemsPerPage, startAutoScroll]);

  const handleNext = useCallback(() => {
    const maxIndex =
      featuresCarouselData.length > 0
        ? Math.max(0, featuresCarouselData.length - itemsPerPage)
        : 0;
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    startAutoScroll();
  }, [itemsPerPage, startAutoScroll]);

  const handleDotClick = useCallback(
    (index) => {
      setCurrentIndex(index);
      startAutoScroll();
    },
    [startAutoScroll]
  );

  const numDots =
    featuresCarouselData.length > itemsPerPage
      ? featuresCarouselData.length - itemsPerPage + 1
      : 0;

  return (
    <section id="features" className="py-16 md:py-24 bg-theme-translucent-dark">
      <div className="container mx-auto px-6 md:px-10 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#f5f5f5" }}>
          Even More Ways to <span className="text-yellow-400">Cheesify</span> Your Masterpiece!
        </h2>
        <p className="text-center mb-12 max-w-xl mx-auto" style={{ color: "#aaaaaa" }}>
          Our pantry is stocked! Explore tools designed for udderly delightful development.
        </p>
        <div
          ref={carouselContainerRef}
          className="carousel-container relative"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          <div ref={carouselTrackRef} className="carousel-track">
            {featuresCarouselData.map((feature) => (
              <div
                key={feature.id}
                className="carousel-slide p-4"
                style={{ minWidth: itemsPerPage > 0 ? `${100 / itemsPerPage}%` : "100%" }}
              >
                <div className="feature-card rounded-xl p-8 shadow-lg h-full flex flex-col">
                  <div className="icon-container text-yellow-400 mb-6">
                    <feature.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="mb-4 flex-grow">{feature.description}</p>
                  <a href="#" className="font-semibold group mt-auto">
                    {feature.linkText} <ArrowRight className="inline-block w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          {featuresCarouselData.length > itemsPerPage && (
            <>
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-0 md:-left-4 transform -translate-y-1/2 text-yellow-400 p-3 rounded-full shadow-md focus:outline-none z-10"
                style={{ backgroundColor: "#222222" }}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 md:-right-4 transform -translate-y-1/2 text-yellow-400 p-3 rounded-full shadow-md focus:outline-none z-10"
                style={{ backgroundColor: "#222222" }}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
        {numDots > 0 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: numDots }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-3 h-3 rounded-full focus:outline-none transition-colors hover:bg-yellow-500 ${currentIndex === idx ? "bg-yellow-400" : "bg-gray-700"}`}
                style={{ backgroundColor: currentIndex === idx ? "#FACC15" : "#333333" }}
                aria-label={`Go to slide group ${idx + 1}`}
                aria-current={currentIndex === idx}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

FeaturesCarouselSection.displayName = "FeaturesCarouselSection";
export default FeaturesCarouselSection;
