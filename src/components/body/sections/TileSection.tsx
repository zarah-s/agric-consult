import React from "react";
import Tile from "../components/Tile";
import { BsChatLeftText } from "react-icons/bs";
import { MdScreenSearchDesktop } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { BiWalk } from "react-icons/bi";
import { motion } from "framer-motion";

const TileSection = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="grid xl:grid-cols-4 lg:grid-cols-4 my-20 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-8 xl:px-0 lg:px-0 md:px-0 sm:px-2 xs:px-2"
    >
      <Tile
        IconName={BsChatLeftText}
        label="Send us the problem you want solutions to"
      />
      <Tile
        IconName={MdScreenSearchDesktop}
        label="We Do Intensive Research To Get Your Solutions"
      />
      <Tile IconName={GiReceiveMoney} label="We Send You Actionable Advice" />
      <Tile IconName={BiWalk} label="We Walk You Through The Process" />
    </motion.div>
  );
};

export default TileSection;
