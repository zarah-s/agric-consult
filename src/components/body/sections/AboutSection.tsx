import PrimaryBtn from "@/common/PrimaryBtn";
import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
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
      id="about_us"
      className="container m-auto xl:px-0 lg:px-0 md:px-3 sm:px-3 xs:px-3"
    >
      <div className="mt-44"></div>
      <div className="flex justify-between items-center">
        <div className="">
          <p className="text-3xl font-[400] mb-10">About Us</p>
          <p className="w-[80%]">
            we are company engaged in the field dairy products and argic
            consultations with a very wide range throughout Africa. we work
            closely with more than 200+ stores in Africa.
          </p>
          <PrimaryBtn text="Read More" className="shadow-[#1D9C1A80] mt-10" />
        </div>
        <div className="bg-transparent-green rounded-full w-[65%] xl:block lg:block md:block sm:hidden xs:hidden">
          <img src="/images/growth.png" className="w-" alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
