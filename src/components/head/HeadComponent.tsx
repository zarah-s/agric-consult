import React from "react";
import ContactSection from "../body/sections/ContactSection";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
const HeadComponent = () => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <div>
      <div className="container m-auto my-3">
        <ContactSection />
      </div>
      <div className="bg-[#006723] xl:p-8 lg:p-8 md:p-8 sm:p-3 xs:p-3 xl:block lg:block md:block sm:flex xs:flex sm:justify-end xs:justify-end ">
        <ul className="flex justify-center  gap-10 xl:flex lg:flex md:flex sm:hidden xs:hidden">
          <li className="text-white font-semibold text-sm">Home</li>
          <li className="text-white text-opacity-50 text-sm font-semibold">
            About
          </li>
          <li className="text-white text-opacity-50 text-sm font-semibold">
            Products & Services
          </li>
          <li className="text-white text-opacity-50 text-sm font-semibold">
            Testimonials
          </li>
          <li className="text-white text-opacity-50 text-sm font-semibold">
            Blog
          </li>
          <li className="text-white text-opacity-50 text-sm font-semibold">
            Contact
          </li>
        </ul>
        <button
          onClick={() => setIsActive(!isActive)}
          className="xl:hidden lg:hidden md:hidden sm:block xs:block "
        >
          <RxHamburgerMenu color="white" size={30} />
        </button>
      </div>
      <aside
        id="default-sidebar"
        className={`fixed top-0 xl:hidden lg:hidden md:hidden ${
          isActive ? "sm:fixed xs:fixed " : "sm:hidden xs:hidden"
        } right-0 z-40 w-64 h-screen  `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex justify-end">
            <button onClick={() => setIsActive(false)}>
              <FaTimes />
            </button>
          </div>
          <ul className=" space-y-5 mt-10">
            <li className="p-2 rounded-lg bg-[#3c7b8833]">Home</li>
            <li className="p-2">News</li>
            <li className="p-2">Shop</li>
            <li className="p-2">Contact</li>
          </ul>
        </div>
      </aside>
      <div className="bg-img xl:h-[30rem] lg:h-[28rem] md:h-[24rem] sm:h-44 xs:h-44 object-cover">
        <div className="bg-[#000000] bg-opacity-50 h-[100%] flex justify-center items-center px-2">
          <motion.p
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="font-[500] text-white xl:text-3xl lg:text-3xl md:text-2xl sm:text-md xs:text-md xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full xs:w-full text-center"
          >
            Agriculture is the best solution of world’s starvation
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeadComponent;
