import NewsCard from "@/common/NewsCard";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const NewsSection = () => {
  const scrollRef = React.useRef(null);

  const sideScroll = (
    element: any,
    speed: number,
    distance: number,
    step: number
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };
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
      className="container m-auto"
    >
      <h5 className="text-3xl text-center font-[400]">News</h5>
      <div className="py-10">
        <div className="flex flex-col relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll  hide-scroll-bar"
          >
            <div
              //   initial={{ y: 100, opacity: 0 }}
              //   whileInView={{ y: 0, opacity: 1 }}
              //   transition={{ duration: 0.5 }}
              className="flex flex-nowrap  "
            >
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />

              <div className="xl:block lg:block md:block sm:hidden xs:hidden">
                <button
                  onClick={() => {
                    sideScroll(scrollRef.current, 25, 100, 100);
                  }}
                  className="flex absolute -right-10 top-[40%]  p-5 rounded-full shadow-2xl bg-white"
                >
                  <IoIosArrowForward size={25} />
                </button>

                <button
                  onClick={() => {
                    sideScroll(scrollRef.current, 25, 100, -100);
                  }}
                  className="flex absolute -left-10 top-[40%]  p-5 rounded-full shadow-2xl bg-white"
                >
                  <IoIosArrowBack size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsSection;
