import React from "react";

const ProductAndServices = () => {
  return (
    <div className="">
      <div className="bg-[url('/images/bg.png')] xl:h-[80vh] lg:h-[80vh] md:h-[80vh] sm:h-[48vh] xs:h-[48vh] bg-cover">
        <div className="bg-[#1B1C1E80] bg-opacity-50 h-[100%] p-10">
          <p className="font-bold text-center text-3xl text-white">
            Products & Services
          </p>
          <div className="flex justify-center items-center xl:mt-16 lg:mt-16 md:mt-16 sm:mt-5 xs:mt-5 gap-10">
            <img src="/images/img_1.png" className="w-1/5" alt="" />
            <img src="/images/img_2.png" className="w-1/5" alt="" />
            <img src="/images/img_3.png" className="w-1/5" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAndServices;
