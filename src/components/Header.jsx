import React, { useState, useCallback } from "react";
import { Pizza, Menu } from "lucide-react";

const Header = React.memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header className="shadow-md sticky top-0 z-50 bg-theme-translucent-dark">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-yellow-400 flex items-center">
          <Pizza className="inline-block mr-2" />
          Cheesebase
        </a>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#features" className="nav-link">Cheesy Features</a>
          <a href="#why-cheesebase" className="nav-link">Golden Prices</a>
          <a href="#continuous-partners" className="nav-link">Cheese Scrolls</a>
          <a
            href="#cta-section"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors shadow hover:shadow-lg"
          >
            Get Cheesin'
          </a>
        </div>
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
      <div
        id="mobileMenu"
        className={`md:hidden ${isMobileMenuOpen ? "" : "hidden"} shadow-lg py-2 bg-theme-translucent-dark`}
      >
        <a href="#features" className="block px-6 py-2 nav-link-mobile" onClick={closeMobileMenu}>
          Cheesy Features
        </a>
        <a href="#why-cheesebase" className="block px-6 py-2 nav-link-mobile" onClick={closeMobileMenu}>
          Golden Prices
        </a>
        <a href="#continuous-partners" className="block px-6 py-2 nav-link-mobile" onClick={closeMobileMenu}>
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
export default Header;
