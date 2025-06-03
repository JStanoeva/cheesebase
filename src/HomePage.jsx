// Cheesebase Website - HomePage.jsx

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Pizza,
  Menu,
  ShieldPlus,
  Terminal,
  Save,
  Network,
  Apple,
  Grape,
  Sandwich,
  CakeSlice,
  Beef,
  Leaf,
  Database,
  KeyRound,
  FolderArchive,
  Zap,
  MousePointerClick,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Smile,
  Rocket,
  ShieldCheck,
  Award,
  Building2,
  Lightbulb,
  Cpu,
  Bot,
  Laptop2,
  PackageCheck,
  BarChartBig,
  DatabaseZap,
  CloudCog,
  Binary,
  AppWindow,
  Lock,
  ServerCrash,
  Twitter,
  Github,
  MessageCircle,
  MousePointer2,
  CheckCircle,
} from "lucide-react";

// GlobalStyles Component: Contains all the custom CSS for the application.
// This ensures consistent styling across all components and provides custom
// elements like the scrollbar and hover effects.
const GlobalStyles = React.memo(() => (
  <style>{`
    /* Ensure html and body take full viewport height and remove default margins */
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        /* Custom cursor: a yellow mouse pointer */
        cursor: url("data:image/svg+xml;utf8,<svg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23FACC15%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%0A%20%20%3Cpath%20d%3D%22M3%203l7.07%2017.07%202.51-7.07%207.07-2.51L3%203z%22%2F%3E%0A%3C%2Fsvg%3E"), auto;
    }

    /* Apply background to a top-level container within the React app */
    .app-container {
        min-height: 100vh; /* Ensure it always covers the viewport height */
        display: flex;
        flex-direction: column;
        background-color: #0D0D0D; 
        background-image: 
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), /* Reverted opacity to original */
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); /* Reverted opacity to original */
        background-size: 24px 24px; 
    }

    /* Main content area should grow to fill available space */
    main {
        flex-grow: 1;
    }

    /* Custom scrollbar for a more modern feel */
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background: #111111; 
    }
    ::-webkit-scrollbar-thumb {
        background: #FACC15; 
        border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #EAB308; 
    }
    html {
        scroll-behavior: smooth; 
    }
    .carousel-container {
        overflow: hidden;
        position: relative;
    }
    .carousel-track {
        display: flex;
        transition: transform 0.5s ease-in-out;
    }
    .carousel-slide {
        min-width: 100%; 
        box-sizing: border-box;
    }
    @media (min-width: 768px) { 
        .carousel-slide {
            min-width: 50%; 
        }
    }
    @media (min-width: 1024px) { 
        .carousel-slide {
            min-width: 33.3333%; 
        }
    }
    .feature-card, .grid-card, .info-card { /* Added .info-card */
        transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease-in-out, background-color 0.3s ease; 
        display: block; 
        border: 2px solid transparent; 
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); 
    }
    .feature-card:hover, .grid-card:hover, .info-card:hover { /* Added .info-card */
        transform: translateY(-8px);
        box-shadow: 0 10px 20px rgba(250, 204, 21, 0.15); 
        border-color: #FACC15; 
    }
    .grid-card:hover .icon-container i, .feature-card:hover .icon-container i, .info-card:hover .icon-container i, /* Added .info-card */
    .grid-card:hover .icon-container svg, .feature-card:hover .icon-container svg, .info-card:hover .icon-container svg { /* Added .info-card */
        transform: scale(1.1) rotate(5deg);
        color: #EAB308; 
    }
    .icon-container i, .icon-container svg { 
        transition: transform 0.3s ease, color 0.3s ease;
    }
    .feature-card, .grid-card, .info-card {  /* Added .info-card */
        background-color: rgba(30, 30, 30, 0.9); 
        color: #cccccc; 
        height: 100%; 
    }
    /* Specific h3 and p for info-card to match original WhyCheesebaseSection card text */
    .info-card h3 { /* Style for InfoCard specifically */
        color: #f5f5f5; /* Matches .feature-card h3, .grid-card h3 */
    }
    .info-card p { /* Style for InfoCard specifically */
        color: #aaaaaa; /* Matches .feature-card p, .grid-card p */
    }
    .feature-card h3, .grid-card h3 {
        color: #f5f5f5; 
    }
    .feature-card p, .grid-card p {
        color: #aaaaaa; 
    }
    .feature-card a { 
        color: #FACC15; 
    }
    .feature-card a:hover {
        color: #EAB308;
    }
    .continuous-carousel-viewport {
        overflow: hidden;
        width: 100%;
        -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
    }
    .continuous-carousel-track {
        display: flex;
        width: fit-content; 
        animation: scrollLeftContinuous 60s linear infinite; 
    }
    .continuous-carousel-container:hover .continuous-carousel-track { 
        animation-play-state: paused; 
    }
    .continuous-carousel-card {
        flex-shrink: 0; 
        width: 200px; 
        height: 100px; 
        background-color: #222222; 
        color: #cccccc; 
        display: flex;
        flex-direction: column; 
        align-items: center;
        justify-content: center;
        text-align: center; 
        margin: 0 0.5rem; 
        padding: 0.5rem; 
        border-radius: 0.5rem; 
        transition: background-color 0.3s ease;
        font-weight: 600; 
    }
    .continuous-carousel-card i, .continuous-carousel-card svg { 
        margin-bottom: 0.5rem; 
    }
    .continuous-carousel-card:hover {
        background-color: #333333; 
    }
    .continuous-carousel-row-2 {
        margin-left: 3rem; 
    }
    @keyframes scrollLeftContinuous {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-50%); 
        }
    }
    .footer-link-column h4 {
        margin-bottom: 0.75rem; 
        font-size: 0.875rem; 
        font-weight: 600; 
        color: #f5f5f5; 
        text-transform: uppercase;
    }
    .footer-link-column ul li a {
        display: inline-block;
        padding: 0.25rem 0; 
        font-size: 0.875rem; 
        color: #cccccc; 
        transition: color 0.2s ease-in-out;
    }
    .footer-link-column ul li a:hover {
        color: #FACC15; 
    }
    .nav-link {
        color: #cccccc; 
        transition: color 0.3s ease-in-out; 
    }
    .nav-link:hover {
        color: #FACC15; 
    }
    #mobileMenu a.nav-link-mobile { 
        color: #cccccc;
        transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out; 
    }
    #mobileMenu a.nav-link-mobile:hover {
        color: #FACC15;
        background-color: #222222; 
    }
    .animated-cta-button {
        border-width: 2px;
        border-color: transparent;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        transition: box-shadow 0.3s ease, border-color 0.3s ease-in-out, background-color 0.3s ease; 
    }
    .animated-cta-button:hover {
        border-color: #FACC15; 
        box-shadow: 0 10px 20px rgba(250, 204, 21, 0.15); 
    }
    .eat-cheese-dynamic-text {
        display: inline-block; 
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        opacity: 1;
    }
    .eat-cheese-dynamic-text.fade-out {
        opacity: 0;
        transform: translateY(10px);
    }
    .eat-cheese-dynamic-text.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    .eat-cheese-icon {
        transition: transform 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out; 
        cursor: pointer;
        padding: 0.75rem; 
        border: 2px solid transparent; 
        border-radius: 0.5rem; 
        color: #CCCCCC; /* Opaque light grey for default state */
    }
    .eat-cheese-icon:hover, .eat-cheese-icon.active {
        transform: scale(1.15);
        color: #FACC15; /* Full yellow on hover */
        border-color: #FACC15; 
    }
    /* IMPORTANT: Set fill to none and stroke to currentColor for outline effect */
    .eat-cheese-icon svg { 
        fill: none; /* No fill */
        stroke: currentColor; /* Outline color matches text color */
        stroke-width: 2; /* Adjust stroke width as needed for visibility */
    }
    .idea-card {
        background-color: rgba(30, 30, 30, 0.9); 
        border: 2px solid #FACC15; 
        min-height: 150px; 
    }
    .loader {
        border: 4px solid #333333; 
        border-top: 4px solid #FACC15; 
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin: 20px auto; 
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    /* Added utility class for common background */
    .bg-theme-translucent-dark {
      background-color: rgba(17, 17, 17, 0.9);
    }
  `}</style>
));
GlobalStyles.displayName = "GlobalStyles";

// Header component: Renders the navigation bar, including the logo,
// desktop navigation links, and a mobile menu toggle.
const Header = React.memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggles the mobile menu open/closed state
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Closes the mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header className="shadow-md sticky top-0 z-50 bg-theme-translucent-dark">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and site title */}
        <a
          href="#"
          className="text-2xl font-bold text-yellow-400 flex items-center"
        >
          <Pizza className="inline-block mr-2" />
          Cheesebase
        </a>
        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#features" className="nav-link">
            Cheesy Features
          </a>
          <a href="#why-cheesebase" className="nav-link">
            Golden Prices
          </a>
          <a href="#continuous-partners" className="nav-link">
            Cheese Scrolls
          </a>
          <a
            href="#cta-section"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors shadow hover:shadow-lg"
          >
            Get Cheesin'
          </a>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="hover:text-yellow-400 focus:outline-none"
            style={{ color: "#cccccc" }}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
      {/* Mobile menu dropdown */}
      <div
        id="mobileMenu"
        className={`md:hidden ${
          isMobileMenuOpen ? "" : "hidden"
        } shadow-lg py-2 bg-theme-translucent-dark`}
      >
        <a
          href="#features"
          className="block px-6 py-2 nav-link-mobile"
          onClick={closeMobileMenu}
        >
          Cheesy Features
        </a>
        <a
          href="#why-cheesebase"
          className="block px-6 py-2 nav-link-mobile"
          onClick={closeMobileMenu}
        >
          Golden Prices
        </a>
        <a
          href="#continuous-partners"
          className="block px-6 py-2 nav-link-mobile"
          onClick={closeMobileMenu}
        >
          Cheese Scrolls
        </a>
        <a
          href="#cta-section"
          className="block px-6 py-2 bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-500 m-2 rounded-md text-center"
          onClick={closeMobileMenu}
        >
          Get Cheesin'
        </a>
      </div>
    </header>
  );
});
Header.displayName = "Header";

// HeroSection component: Displays the main headline and call-to-action buttons.
const HeroSection = React.memo(() => {
  return (
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
        <p
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          style={{ color: "#aaaaaa" }}
        >
          Cheesebase: the open-source Firebase alternative, now 100% more
          delicious! Start your project with a delectable database, Gouda Auth,
          Swiss Storage, and a whole wheel of other wonders!
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
  );
});
HeroSection.displayName = "HeroSection";

// Data for the GridFeaturesSection
const gridFeaturesData = [
  {
    id: 1,
    icon: ShieldPlus,
    title: "Secure & Stretchy Structures",
    description:
      "Combine flexible, stretchable components with finely-grated access control. Build robust and secure foundations for your cheesy applications.",
    span: "md:col-span-8",
  },
  {
    id: 2,
    icon: Terminal,
    title: "Cheddar CLI",
    description:
      "Sharp, powerful, and mature command-line tools to manage your cheesy stack with delightful ease.",
    span: "md:col-span-4",
  },
  {
    id: 3,
    icon: Save,
    title: "Brie Backups",
    description:
      "Smooth, creamy, and reliable data protection. Your precious data, preserved like the finest Brie.",
    span: "md:col-span-4",
  },
  {
    id: 4,
    icon: Network,
    title: "Global Logic & Luscious APIs",
    description:
      "Deploy salty serverless functions worldwide and craft bold, flavorful API queries. Get exactly the data you crave, with global reach.",
    span: "md:col-span-8",
  },
];

// GridCard component: Renders a single feature card within the grid layout.
const GridCard = React.memo(({ icon: Icon, title, description, span }) => (
  <a href="#" className={`grid-card rounded-xl p-8 flex flex-col ${span}`}>
    <div className="icon-container text-yellow-400 mb-6">
      <Icon className="w-10 h-10" />
    </div>
    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
    <p className="mb-4 flex-grow">{description}</p>
  </a>
));
GridCard.displayName = "GridCard";

// GridFeaturesSection component: Displays a grid of key features.
const GridFeaturesSection = React.memo(() => {
  // Memoized as it only depends on constant data
  return (
    <section id="grid-features" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {gridFeaturesData.map((feature) => (
            <GridCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              span={feature.span}
            />
          ))}
        </div>
      </div>
    </section>
  );
});
GridFeaturesSection.displayName = "GridFeaturesSection";

// Data for the EatCheeseWithSection
const foodItems = [
  { text: "crisp apples!", iconName: Apple, dataIconName: "apple" },
  { text: "fine wine!", iconName: Grape, dataIconName: "grape" },
  { text: "crusty bread!", iconName: Sandwich, dataIconName: "sandwich" },
  { text: "sweet honey!", iconName: CakeSlice, dataIconName: "cake-slice" },
  { text: "savory meats!", iconName: Beef, dataIconName: "beef" },
  { text: "fresh figs!", iconName: Leaf, dataIconName: "leaf" },
];
const defaultFoodText = "anything delicious!";

// EatCheeseWithSection component: Features dynamic text that changes based on icon hover.
const EatCheeseWithSection = () => {
  const [dynamicFoodText, setDynamicFoodText] = useState(defaultFoodText);
  const [isFading, setIsFading] = useState(false);
  const [activeIconDataName, setActiveIconDataName] = useState(null);
  const timeoutRef = useRef(null);

  // Handles mouse entering an icon, triggering text fade-out and then fade-in with new text.
  const handleMouseEnterIcon = useCallback((text, dataIconName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsFading(true);
    setActiveIconDataName(dataIconName);
    timeoutRef.current = setTimeout(() => {
      setDynamicFoodText(text);
      setIsFading(false);
    }, 150);
  }, []); // setStates are stable

  // Handles mouse leaving the container, reverting text to default.
  const handleMouseLeaveContainer = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsFading(true);
    setActiveIconDataName(null);
    timeoutRef.current = setTimeout(() => {
      setDynamicFoodText(defaultFoodText);
      setIsFading(false);
    }, 150);
  }, []); // setStates are stable, defaultFoodText is module constant

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section
      id="eat-cheese-with"
      className="eat-cheese-section py-16 md:py-24 bg-theme-translucent-dark"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="eat-cheese-text-container mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
            Eat Cheese with
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-yellow-400 mt-2">
            <span
              className={`eat-cheese-dynamic-text ${
                isFading ? "fade-out" : "fade-in"
              }`}
            >
              {dynamicFoodText}
            </span>
          </p>
        </div>
        <div className="inline-block" onMouseLeave={handleMouseLeaveContainer}>
          <div className="flex justify-center items-center flex-wrap gap-6 md:gap-8">
            {foodItems.map((item) => (
              <div
                key={item.dataIconName}
                className={`eat-cheese-icon ${
                  activeIconDataName === item.dataIconName ? "active" : ""
                }`}
                onMouseEnter={() =>
                  handleMouseEnterIcon(item.text, item.dataIconName)
                }
              >
                <item.iconName className="w-10 h-10 md:w-12 md:h-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
EatCheeseWithSection.displayName = "EatCheeseWithSection";

// GeminiIdeaGeneratorSection component: Allows users to generate cheesy project ideas using the Gemini API.
const GeminiIdeaGeneratorSection = () => {
  const [ideaName, setIdeaName] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResultCard, setShowResultCard] = useState(false);
  const [error, setError] = useState(null);
  // IMPORTANT: The API key is intentionally left blank. In a real application,
  // this would be loaded securely (e.g., from environment variables)
  // and never hardcoded in client-side code. For Canvas, it's automatically provided.
  const apiKey = "";

  // Handles the generation of a new idea by calling the Gemini API.
  const handleGenerateIdea = useCallback(async () => {
    // useCallback in case it were passed down; good practice
    setShowResultCard(false);
    setIsLoading(true);
    setError(null);
    setIdeaName("");
    setIdeaDescription("");
    if (!apiKey) {
      // Check if API key is truly empty
      setIdeaName("API Key Missing!");
      setIdeaDescription(
        "Please provide a valid Gemini API key to use this feature."
      );
      setShowResultCard(true);
      setIsLoading(false);
      return;
    }
    const prompt =
      "Generate a fun and cheesy project idea that could be built using a backend-as-a-service platform. Make it sound exciting and slightly over-the-top. The response should be a JSON object with two keys: 'projectName' (a catchy, cheesy name for the project) and 'projectDescription' (a brief, enticing description of the project, about 2-3 sentences long).";
    const payload = {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            projectName: { type: "STRING" },
            projectDescription: { type: "STRING" },
          },
          required: ["projectName", "projectDescription"],
        },
      },
    };
    // Using gemini-2.0-flash as per instructions for text generation
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `API request failed: ${
            errorData?.error?.message || response.statusText
          }`
        );
      }
      const result = await response.json();
      if (result.candidates?.[0]?.content?.parts?.[0]) {
        const parsedJson = JSON.parse(
          result.candidates[0].content.parts[0].text
        );
        setIdeaName(parsedJson.projectName || "A Cheesy Concoction!");
        setIdeaDescription(
          parsedJson.projectDescription ||
            "Something wonderfully cheesy awaits!"
        );
      } else {
        setIdeaName("Hmm, a cheese-block!");
        setIdeaDescription("Try again for inspiration!");
      }
    } catch (err) {
      setError(err.message);
      setIdeaName("Oops! A Curd-tastrophe!");
      setIdeaDescription(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
      setShowResultCard(true);
    }
  }, [apiKey]); // apiKey is a local const, technically stable per render, but including if it were from props/state

  return (
    <section
      id="gemini-idea-generator"
      className="py-16 md:py-24 bg-theme-translucent-dark"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
          Need a <span className="text-yellow-400">Cheesy Project Idea</span>?
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Let our AI Cheesemonger conjure up a delectable project concept!
        </p>
        <button
          onClick={handleGenerateIdea}
          disabled={isLoading}
          className="animated-cta-button bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg mb-8 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Conjuring..." : "Conjure a Cheesy Idea!"}
        </button>
        {isLoading && <div className="loader"></div>}
        {showResultCard && !isLoading && (
          <div className="idea-card p-6 rounded-lg text-left text-gray-300 max-w-2xl mx-auto">
            <h4 className="text-2xl font-semibold text-yellow-400 mb-3">
              {ideaName}
            </h4>
            <p className="text-gray-400">{ideaDescription}</p>
            {error && <p className="text-red-400 mt-2">Error: {error}</p>}
          </div>
        )}
      </div>
    </section>
  );
};
GeminiIdeaGeneratorSection.displayName = "GeminiIdeaGeneratorSection";

// Data for the FeaturesCarouselSection
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

// FeaturesCarouselSection component: Displays a responsive, auto-scrolling carousel of features.
const FeaturesCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const carouselTrackRef = useRef(null);
  const carouselContainerRef = useRef(null);
  const autoScrollIntervalIdRef = useRef(null);

  // Calculates the width of a single slide based on container width and items per page.
  const calculateSlideWidth = useCallback(
    () =>
      carouselContainerRef.current && featuresCarouselData.length > 0
        ? carouselContainerRef.current.getBoundingClientRect().width /
          itemsPerPage
        : 0,
    [itemsPerPage]
  );

  // Updates the number of items displayed per page based on screen width.
  const updateItemsPerPage = useCallback(() => {
    const screenWidth = window.innerWidth;
    let newItemsPerPage = 1;
    if (screenWidth >= 1024) newItemsPerPage = 3;
    else if (screenWidth >= 768) newItemsPerPage = 2;
    setItemsPerPage(newItemsPerPage);
  }, []);

  // Adjusts the carousel's transform to show the correct slide.
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
      carouselTrackRef.current.style.transform = `translateX(-${
        slideWidth * newCurrentIndex
      }px)`;
    }
    // Update currentIndex state only if it changed to avoid loop, though check might be redundant if setCurrentIndex is smart
    if (currentIndex !== newCurrentIndex) {
      setCurrentIndex(newCurrentIndex);
    }
  }, [calculateSlideWidth, currentIndex, itemsPerPage]); // featuresCarouselData.length is const

  // Effect to update items per page on resize
  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, [updateItemsPerPage]);

  // Effect to update carousel position when currentIndex or itemsPerPage changes
  useEffect(() => {
    updateCarouselPosition();
  }, [currentIndex, itemsPerPage, updateCarouselPosition]);

  // Advances the carousel to the next slide, looping back to the start if at the end.
  const advanceCarousel = useCallback(() => {
    if (featuresCarouselData.length <= itemsPerPage) return; // Don't scroll if not enough items
    const maxIndex = Math.max(0, featuresCarouselData.length - itemsPerPage);
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  }, [itemsPerPage]); // featuresCarouselData.length is const

  // Stops the automatic carousel scrolling.
  const stopAutoScroll = useCallback(() => {
    if (autoScrollIntervalIdRef.current)
      clearInterval(autoScrollIntervalIdRef.current);
  }, []);

  // Starts the automatic carousel scrolling.
  const startAutoScroll = useCallback(() => {
    stopAutoScroll();
    if (
      featuresCarouselData.length > itemsPerPage &&
      carouselContainerRef.current
    ) {
      autoScrollIntervalIdRef.current = setInterval(advanceCarousel, 4000);
    }
  }, [advanceCarousel, itemsPerPage, stopAutoScroll]); // featuresCarouselData.length is const

  // Effect to start auto-scrolling on mount and clean up on unmount.
  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll]);

  // Handles clicking the previous button.
  const handlePrev = useCallback(() => {
    const maxIndex =
      featuresCarouselData.length > 0
        ? Math.max(0, featuresCarouselData.length - itemsPerPage)
        : 0;
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
    startAutoScroll();
  }, [itemsPerPage, startAutoScroll]); // featuresCarouselData.length is const

  // Handles clicking the next button.
  const handleNext = useCallback(() => {
    const maxIndex =
      featuresCarouselData.length > 0
        ? Math.max(0, featuresCarouselData.length - itemsPerPage)
        : 0;
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    startAutoScroll();
  }, [itemsPerPage, startAutoScroll]); // featuresCarouselData.length is const

  // Handles clicking a pagination dot.
  const handleDotClick = useCallback(
    (index) => {
      setCurrentIndex(index);
      startAutoScroll();
    },
    [startAutoScroll]
  );

  // Calculates the number of pagination dots needed.
  const numDots =
    featuresCarouselData.length > itemsPerPage
      ? featuresCarouselData.length - itemsPerPage + 1
      : 0;

  return (
    <section id="features" className="py-16 md:py-24 bg-theme-translucent-dark">
      <div className="container mx-auto px-6 md:px-10 lg:px-12">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ color: "#f5f5f5" }}
        >
          Even More Ways to <span className="text-yellow-400">Cheesify</span>{" "}
          Your Masterpiece!
        </h2>
        <p
          className="text-center mb-12 max-w-xl mx-auto"
          style={{ color: "#aaaaaa" }}
        >
          Our pantry is stocked! Explore tools designed for udderly delightful
          development.
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
                style={{
                  minWidth:
                    itemsPerPage > 0 ? `${100 / itemsPerPage}%` : "100%",
                }}
              >
                <div className="feature-card rounded-xl p-8 shadow-lg h-full flex flex-col">
                  <div className="icon-container text-yellow-400 mb-6">
                    <feature.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="mb-4 flex-grow">{feature.description}</p>
                  <a href="#" className="font-semibold group mt-auto">
                    {feature.linkText}{" "}
                    <ArrowRight className="inline-block w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
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
                className={`w-3 h-3 rounded-full focus:outline-none transition-colors hover:bg-yellow-500 ${
                  currentIndex === idx ? "bg-yellow-400" : "bg-gray-700"
                }`}
                style={{
                  backgroundColor: currentIndex === idx ? "#FACC15" : "#333333",
                }}
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

// Data for the WhyCheesebaseSection
const whyCheesebaseData = [
  {
    id: 1,
    icon: Smile,
    title: "Delightfully Simple (No Kidding!)",
    description:
      "So easy to use, you'll brie-ze through development. Our intuitive APIs make building a pure joy, not a chore.",
  },
  {
    id: 2,
    icon: Rocket,
    title: "Blazingly Feta (Faster than a Crumble!)",
    description:
      'Optimized for speed. Your apps will load faster than you can say "provolone!" Get ready for warp-speed cheesiness.',
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Secure & Scalable (Like a Fortress of Fondue!)",
    description:
      "Robust security and effortless scaling. As dependable as a well-aged Parmesan wheel, ready for any feast.",
  },
];

// InfoCard component: A generic card for displaying an icon, title, and description.
const InfoCard = React.memo(({ icon: Icon, title, description }) => (
  <div className="info-card p-8 rounded-xl flex flex-col">
    <div className="icon-container text-yellow-400 mb-4">
      <Icon className="w-10 h-10" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
));
InfoCard.displayName = "InfoCard";

// WhyCheesebaseSection component: Explains the benefits of using Cheesebase.
const WhyCheesebaseSection = React.memo(() => {
  return (
    <section id="why-cheesebase" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "#f5f5f5" }}
        >
          Why Go <span className="text-yellow-400">Full Cheese</span> with
          Cheesebase?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {whyCheesebaseData.map((item) => (
            <InfoCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
});
WhyCheesebaseSection.displayName = "WhyCheesebaseSection";

// Data for the ContinuousPartnersSection
const partnersRow1 = [
  { id: "p1-1", icon: Award, name: "Parmesan Programmers" },
  { id: "p1-2", icon: Building2, name: "Gouda Group Global" },
  { id: "p1-3", icon: Lightbulb, name: "Brie Brilliant Solutions" },
  { id: "p1-4", icon: ShieldCheck, name: "Cheddar Champions Co." },
  { id: "p1-5", icon: Cpu, name: "Mozzarella Makers" },
  { id: "p1-6", icon: Rocket, name: "Feta Forward Tech" },
  { id: "p1-7", icon: Bot, name: "Roquefort Robotics" },
  { id: "p1-8", icon: Laptop2, name: "Swiss Software Systems" },
];
const partnersRow2 = [
  { id: "p2-1", icon: PackageCheck, name: "Provolone Platforms" },
  { id: "p2-2", icon: BarChartBig, name: "Colby Code Crafters" },
  { id: "p2-3", icon: DatabaseZap, name: "Edam Engineering" },
  { id: "p2-4", icon: CloudCog, name: "Havarti Hosting Hub" },
  { id: "p2-5", icon: Binary, name: "Limburger Logic Ltd." },
  { id: "p2-6", icon: AppWindow, name: "Muenster Microservices" },
  { id: "p2-7", icon: Lock, name: "Ricotta Security Inc." },
  { id: "p2-8", icon: ServerCrash, name: "Asiago APIs" },
];
// Duplicate rows to create the continuous scrolling effect
const duplicatedPartnersRow1 = [...partnersRow1, ...partnersRow1];
const duplicatedPartnersRow2 = [...partnersRow2, ...partnersRow2];

// ContinuousPartnerCard component: Renders a single partner logo/name for the continuous carousel.
const ContinuousPartnerCard = React.memo(({ icon: Icon, name }) => (
  <div className="continuous-carousel-card">
    <Icon className="w-6 h-6" />
    <span>{name}</span>
  </div>
));
ContinuousPartnerCard.displayName = "ContinuousPartnerCard";

// ContinuousPartnersSection component: Displays two rows of continuously scrolling partner logos.
const ContinuousPartnersSection = React.memo(() => {
  return (
    <section
      id="continuous-partners"
      className="py-16 md:py-24 bg-theme-translucent-dark"
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "#f5f5f5" }}
        >
          Proudly Partnered with the{" "}
          <span className="text-yellow-400">Cream of the Crop</span>!
        </h2>
      </div>
      <div className="continuous-carousel-container">
        <div className="continuous-carousel-viewport">
          <div className="continuous-carousel-track">
            {" "}
            {duplicatedPartnersRow1.map((partner, index) => (
              <ContinuousPartnerCard
                key={`${partner.id}-${index}`}
                icon={partner.icon}
                name={partner.name}
              />
            ))}{" "}
          </div>
        </div>
        <div className="continuous-carousel-viewport mt-4">
          <div className="continuous-carousel-track continuous-carousel-row-2">
            {" "}
            {duplicatedPartnersRow2.map((partner, index) => (
              <ContinuousPartnerCard
                key={`${partner.id}-${index}`}
                icon={partner.icon}
                name={partner.name}
              />
            ))}{" "}
          </div>
        </div>
      </div>
    </section>
  );
});
ContinuousPartnersSection.displayName = "ContinuousPartnersSection";

// CtaSection component: A call-to-action section encouraging users to start building.
const CtaSection = React.memo(() => {
  return (
    <section
      id="cta-section"
      className="py-20 md:py-32 bg-yellow-400 text-gray-900"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Melt Into Our Cheesy Stack?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Join thousands of developers building extraordinary, delicious
          applications with Cheesebase. Don't be a cheeseball, join the party!
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
  );
});
CtaSection.displayName = "CtaSection";

// Data for the Footer links
const footerLinks = {
  delights: [
    { href: "#", text: "The Big Cheese DB" },
    { href: "#", text: "Gouda Auth" },
    { href: "#", text: "Swiss Storage" },
    { href: "#", text: "Realtime Roquefort" },
    { href: "#", text: "Edam Edge Functions" },
    { href: "#", text: "Golden Pricing" },
    { href: "#", text: "Curd Week News" },
    { href: "#", text: "AI Cheesemongers" },
  ],
  resources: [
    { href: "#", text: "Support the Curd" },
    { href: "#", text: "System Status" },
    { href: "#", text: "Become a Cheese Partner" },
    { href: "#", text: "Brand Assets / Logos" },
    { href: "#", text: "Security & Compliance" },
    { href: "#", text: "Aged Documentation" },
    { href: "#", text: "FAQ (Fondue Answers Quickly)" },
  ],
  devotees: [
    { href: "#", text: "Cheesebase UI Kit" },
    { href: "#", text: "Changelog (The Crumb Trail)" },
    { href: "#", text: "Open Curd Projects" },
    { href: "#", text: "SupaCheesed Examples" },
    { href: "#", text: "RSS Feed (Fresh Curds)" },
  ],
  creamery: [
    { href: "#", text: "Blog o' Cheese" },
    { href: "#", text: "Careers in Cheese" },
    { href: "#", text: "About Cheesebase" },
    { href: "#", text: "Events & Webinars" },
    { href: "#", text: "Terms of Curdvice" },
    { href: "#", text: "Privacy Policy" },
    { href: "#", text: "Cookie Settings" },
    { href: "#", text: "Our Cheesy Team" },
  ],
};

// FooterLinkColumn component: Renders a column of links for the footer.
const FooterLinkColumn = React.memo(({ title, links }) => (
  <div className="footer-link-column">
    {" "}
    <h4>{title}</h4>{" "}
    <ul>
      {" "}
      {links.map((link) => (
        <li key={link.text}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}{" "}
    </ul>{" "}
  </div>
));
FooterLinkColumn.displayName = "FooterLinkColumn";

// Footer component: Displays copyright information, social links, and various navigation links.
const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="text-gray-400 pt-12"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="border-b" style={{ borderColor: "#111111" }}>
        <div className="container mx-auto px-6 py-3 flex flex-wrap justify-center text-xs space-x-4 sm:space-x-6">
          <span className="inline-flex items-center">
            <ShieldCheck className="w-3 h-3 mr-1.5 text-green-400" /> Your data
            is Gouda with us.{" "}
            <a href="#" className="ml-1 hover:text-yellow-400 underline">
              More on Cheese Security
            </a>
          </span>
          <span className="inline-flex items-center">
            <Award className="w-3 h-3 mr-1.5 text-yellow-400" /> Parmesan
            Privacy Certified
          </span>
          <span className="inline-flex items-center">
            <CheckCircle className="w-3 h-3 mr-1.5 text-blue-400" /> Roquefort
            Reliability Assured
          </span>
        </div>
      </div>
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1 mb-6 md:mb-0 flex flex-col items-start">
            <a
              href="#"
              className="text-2xl font-bold text-yellow-400 flex items-center mb-4"
            >
              <Pizza className="inline-block mr-2" />
              <span>Cheesebase</span>
            </a>{" "}
            {/* Removed -ml-3 and added mr-2 for consistency with header */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <MessageCircle className="w-5 h-5" />{" "}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:col-span-4">
            <FooterLinkColumn
              title="Cheesy Delights"
              links={footerLinks.delights}
            />
            <FooterLinkColumn title="Resources" links={footerLinks.resources} />
            <FooterLinkColumn
              title="For Devotees"
              links={footerLinks.devotees}
            />
            <FooterLinkColumn
              title="The Creamery"
              links={footerLinks.creamery}
            />
          </div>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: "#111111" }}>
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-2 md:mb-0 w-full text-center md:w-auto md:text-left">
            © <span>{currentYear}</span> Cheesebase Inc. All rights reserved.
            <br className="sm:hidden" /> Long live the Cheese Republic!
          </p>
          <p className="w-full text-center md:w-auto md:text-right flex items-center justify-center md:justify-end">
            <span className="mr-2">Powered by pure cheesiness</span>
            <MousePointer2 className="w-5 h-5 text-yellow-400 hidden sm:inline-block" />
          </p>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";

// App component: The root component that renders the entire Cheesebase application.
export default function App() {
  return (
    <div className="app-container">
      {" "}
      {/* New wrapper div with app-container class */}
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
