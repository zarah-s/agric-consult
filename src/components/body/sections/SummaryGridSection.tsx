import React from "react";
import SummaryGrid from "../components/SummaryGrid";
import LiveStock from "../../../../public/images/livestock.png";
import Consult from "../../../../public/images/consult.png";
import Research from "../../../../public/images/research.png";
import { motion } from "framer-motion";
import FarmManagement from "../../../../public/images/farm_management.png";

const SummaryGridSection = () => {
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
      className="grid gap-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 my-20 w-full justify-center xl:px-0 lg:px-0 md:px-0 sm:px-2 xs:px-2"
    >
      <SummaryGrid
        imageUrl={FarmManagement}
        title="Farm Management"
        content="We are known by our clients in providing the best advice on the use and management of agricultural land."
      />
      <SummaryGrid
        imageUrl={Consult}
        title="Agriculture Consulting"
        content="We support established and growing farmers, as well as anyone in agricultural business. We help to discover the farming needs and progress rate of a specific region, developing its agricultural sector in the process."
      />
      <SummaryGrid
        imageUrl={LiveStock}
        title="Livestock Care"
        content="We help to conduct studies and implement development projects linked to animal health care, animal welfare, livestock development, food safety and public health."
      />
      <SummaryGrid
        imageUrl={Research}
        title="Research & Sustainability"
        content="We work closely with clients to provide strategic guidance and hands-on delivery support to help them understand sustainability objectives and delivery targets set."
      />
    </motion.div>
  );
};

export default SummaryGridSection;
