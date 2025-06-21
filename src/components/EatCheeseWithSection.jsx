import React, { useState, useRef, useCallback, useEffect } from "react";
import { Apple, Grape, Sandwich, CakeSlice, Beef, Leaf } from "lucide-react";

const foodItems = [
  { text: "crisp apples!", iconName: Apple, dataIconName: "apple" },
  { text: "fine wine!", iconName: Grape, dataIconName: "grape" },
  { text: "crusty bread!", iconName: Sandwich, dataIconName: "sandwich" },
  { text: "sweet honey!", iconName: CakeSlice, dataIconName: "cake-slice" },
  { text: "savory meats!", iconName: Beef, dataIconName: "beef" },
  { text: "fresh figs!", iconName: Leaf, dataIconName: "leaf" },
];
const defaultFoodText = "anything delicious!";

const EatCheeseWithSection = () => {
  const [dynamicFoodText, setDynamicFoodText] = useState(defaultFoodText);
  const [isFading, setIsFading] = useState(false);
  const [activeIconDataName, setActiveIconDataName] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnterIcon = useCallback((text, dataIconName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsFading(true);
    setActiveIconDataName(dataIconName);
    timeoutRef.current = setTimeout(() => {
      setDynamicFoodText(text);
      setIsFading(false);
    }, 150);
  }, []);

  const handleMouseLeaveContainer = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsFading(true);
    setActiveIconDataName(null);
    timeoutRef.current = setTimeout(() => {
      setDynamicFoodText(defaultFoodText);
      setIsFading(false);
    }, 150);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section id="eat-cheese-with" className="eat-cheese-section py-16 md:py-24 bg-theme-translucent-dark">
      <div className="container mx-auto px-6 text-center">
        <div className="eat-cheese-text-container mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Eat Cheese with</h2>
          <p className="text-3xl md:text-4xl font-bold text-yellow-400 mt-2">
            <span className={`eat-cheese-dynamic-text ${isFading ? "fade-out" : "fade-in"}`}>{dynamicFoodText}</span>
          </p>
        </div>
        <div className="inline-block" onMouseLeave={handleMouseLeaveContainer}>
          <div className="flex justify-center items-center flex-wrap gap-6 md:gap-8">
            {foodItems.map((item) => (
              <div
                key={item.dataIconName}
                className={`eat-cheese-icon ${activeIconDataName === item.dataIconName ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnterIcon(item.text, item.dataIconName)}
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
export default EatCheeseWithSection;
