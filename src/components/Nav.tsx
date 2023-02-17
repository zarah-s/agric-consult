import React from "react";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
const Nav = () => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <div className=" my-5 container m-auto xl:px-0 lg:px-0 md:px-3 sm:px-3 xs:px-3">
      {/* DESKTOP VIEW */}
      <div className="xl:block lg:block md:block sm:hidden xs:hidden">
        <ul className="flex items-center justify-between ">
          <li className="text-lg font-[700] text-[#22D11E]">
            <a href="#">Home</a>
          </li>
          <li className="font-[400] text-lg text-[#404040]">
            <a href="#product_services">Product & Services</a>
          </li>
          <li>
            <a href="#">
              <img
                src="/images/logo.png"
                className="w-16 object-contain"
                alt=""
              />
            </a>
          </li>
          <li className="font-[400] text-lg text-[#404040]">
            <a href="#about_us">About Us</a>
          </li>
          <li className="font-[400] text-lg text-[#404040]">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* MOBILE VIEW */}

      <div className="xl:hidden lg:hidden md:hidden sm:block xs:block ">
        <div className="flex items-center justify-between">
          <img src="/images/logo.png" className="w-12" alt="" />
          <button onClick={() => setIsActive(!isActive)}>
            <RxHamburgerMenu size={30} />
          </button>
          {/* <FaBars /> */}
        </div>
      </div>

      <aside
        id="default-sidebar"
        className={`fixed top-0 xl:hidden lg:hidden md:hidden ${
          isActive ? "sm:fixed xs:fixed " : "sm:hidden xs:hidden"
        } right-0 z-40 w-64 h-screen shadow-lg `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex justify-end">
            <button onClick={() => setIsActive(false)}>
              <FaTimes />
            </button>
          </div>
          <ul className=" space-y-5 mt-10">
            <li
              onClick={() => setIsActive(!isActive)}
              className="p-2 rounded-lg bg-[#3c7b8833]"
            >
              <a href="#">Home</a>
            </li>
            <li onClick={() => setIsActive(!isActive)} className="p-2">
              <a href="#product_services">Product & Services</a>
            </li>
            <li onClick={() => setIsActive(!isActive)} className="p-2">
              <a href="#about_us">About Us</a>
            </li>
            <li onClick={() => setIsActive(!isActive)} className="p-2">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Nav;
