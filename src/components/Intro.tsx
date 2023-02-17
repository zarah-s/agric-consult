import PrimaryBtn from "@/common/PrimaryBtn";
import React from "react";
import { motion } from "framer-motion";
const Intro = () => {
  return (
    <div className="container m-auto xl:px-0 lg:px-0 md:px-3 sm:px-3 xs:px-3">
      <div className="flex items-center justify-between my-20">
        <div className="">
          <div className="xl:text-7xl lg:text-7xl md:text-6xl sm:text-3xl xs:text-3xl font-bold">
            <span className="text-[#404040]">Get </span>
            <span className="text-primary-green"> Great</span>
            <br />
            <div className="xl:my-3 lg:my-3 md:my-3 sm:my-0 xs:my-0"></div>

            <span className="text-[#404040]">Farm </span>
            <span className="text-primary-green"> Consultations</span>
          </div>
          <p>
            Information is power and and integrated diaries , we’ve got that in
            abundance.
          </p>
          <PrimaryBtn text="Start today" className="mt-7" />
        </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="xl:bg-transparent-green lg:bg-transparent-green md:bg-transparent rounded-full xl:block lg:block md:block sm:hidden xs:hidden"
        >
          <img src="/images/veges.png" className="w-96 h-96" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
