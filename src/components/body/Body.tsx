import NewsCard from "@/common/NewsCard";
import PrimaryBtn from "@/common/PrimaryBtn";
import ProductCard from "@/common/ProductCard";
import React from "react";

import ContactSection from "./sections/ContactSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import NewsSection from "./sections/NewsSection";
import ProductsSection from "./sections/ProductsSection";

const Body = () => {
  return (
    <div>
      {/* PRODUCTS AND SERVICES */}
      <ProductsSection />

      {/* NEWS SECTION */}
      <NewsSection />

      {/* VIEW ALL BUTTON */}

      <div className="flex items-center justify-center my-10">
        <PrimaryBtn text="View all" className="px-12 py-3" />
      </div>

      {/* SERVICES SECTION */}

      <ServicesSection />

      {/* ABOUT SECTION */}

      <AboutSection />

      {/* CONTACT US */}

      <ContactSection />
    </div>
  );
};

export default Body;
