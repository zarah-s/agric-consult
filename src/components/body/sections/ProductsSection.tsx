import ProductCard from "@/common/ProductCard";
import React from "react";
import { motion } from "framer-motion";

const ProductsSection = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: 150,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      id="product_services"
      className="container m-auto xl:px-0 lg:px-0 md:px-3 sm:px-3 xs:px-3"
    >
      <h5 className="text-3xl mb-10 text-center font-[400]">
        Our Products and Sercives
      </h5>

      <div className="my-20">
        <div className="flex justify-center items- xl:flex-nowrap lg:flex-nowrap md:flex-nowrap  sm:flex-wrap xs:flex-wrap gap-5">
          <ProductCard
            img="/images/cattle.png"
            title="Farm Animals"
            content="Only with your smartphone
you can get a food"
          />
          <ProductCard
            img="/images/farmer.png"
            title="Crop Farming"
            content="We can deliver your food
very fast"
          />
          <ProductCard
            img="/images/veges.png"
            title="Farm Produce"
            content="All food label halal and stay
healthy for you"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsSection;
