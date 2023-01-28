import React from "react";
import { motion } from "framer-motion";

export interface Props {
  title: string;
  content: string;
}
const CarouselComponent = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: 100,
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className=" flex flex-col items-center xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full xl:px-0 lg:px-0 md:px-0 sm:px-2 xs:px-2"
    >
      <div className="flex flex-col items-center">
        <p className="text-2xl font-bold">{props.title}</p>
        <p className="text-[1b1c1e80] my-5 text-center">{props.content}</p>
      </div>
      <img src="/images/avatar.png" className="w-20" />
      <small className="text-[#1B1C1E] text-center mt-5">
        Working with you was extremely helpful and we worked together
        wonderfully. Everything discussed was followed up by email straight away
        - this was ideal as several of my team were able to contribute at the
        same time. We are very happy with your service.
      </small>
      <div className="my-5">
        <span className="text-[#006723] font-bold">Patrick Ken,</span>
        <span className="text-[#1b1c1e80] text-sm"> Company Manager</span>
      </div>
      <div className="flex gap-2 mt-4">
        <div className="bg-[#006723] w-3 h-3 rounded-full"></div>
        <div className="bg-[#1b1c1e1a] w-3 h-3 rounded-full"></div>
        <div className="bg-[#1b1c1e1a] w-3 h-3 rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default CarouselComponent;
