import React from "react";
import PrimaryBtn from "./PrimaryBtn";

const NewsCard = () => {
  return (
    <div className="inline-block px-3">
      <div className="w-80  max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img className="rounded-t-lg" src="/images/meal.png" alt="" />
        <div className="p-5 flex flex-col">
          <h5 className="mb-2 text-2xl font-[500] tracking-tight text-[#3C7B88]">
            Farmfresh vanilla flavour
          </h5>
          <small className="mb-3 font-normal text-[#1B1C1E] dark:text-gray-400">
            I absolutely love the Farmfresh vanilla flavour, would come back for
            more.....
          </small>
          <div className="flex justify-between items-center mt-3">
            <div className="flex flex-col">
              <small className="text-dark-green">FarmFresh</small>
              <small className="text-sm text-[#1B1C1E]">20 Jan, 2022</small>
            </div>
            <div className="">
              <PrimaryBtn text="Read More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
