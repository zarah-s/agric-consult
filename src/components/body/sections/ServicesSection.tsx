import React from "react";
import ServiceCard, { IconType } from "../components/ServiceCard";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: 150,
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="container m-auto xl:px-0 lg:px-0 md:px-3 sm:px-3 xs:px-3"
    >
      <div className="flex flex-col items-center my-20">
        <p className="text-3xl">Services</p>
        <p className="text-xl">service from our services to you</p>
      </div>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
        <img
          src="/images/fertile.png"
          className="xl:block lg:block md:block sm:hidden xs:hidden"
          alt=""
        />
        <div className="grid grid-cols-2 xl:gap-5 lg:gap-5 md:gap-4 sm:gap-2 xs:gap-2">
          <ServiceCard
            icon={IconType.Tag}
            title="Product Pricing"
            content="We have favorable discount system for our regular customer."
          />
          <ServiceCard
            icon={IconType.Logistics}
            title="Logistics"
            content="Fast and safe delivery from us with a reliable introduction."
          />
          <ServiceCard
            icon={IconType.Delivery}
            title="Get to market"
            content="WWe have more then 200 thousand Stores."
          />
          <ServiceCard
            icon={IconType.Quality}
            title="Best Quality"
            content="We provide the best service and high quality."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
