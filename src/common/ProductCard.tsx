import React from "react";

export interface Props {
  img: any;
  title: string;
  content: string;
}
const ProductCard = (props: Props) => {
  return (
    <div className="bg-transparent-green  xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full xs:w-full  top-20 rounded-lg xl:my-0 lg:my-0 md:my-0 sm:my-5 xs:my-5 ">
      <div className="bg-[#FFFFFF75] h-full w-full rounded-lg shadow-xl pb-10 px-3 flex flex-col items-center">
        <img src={props.img} className=" w-44 -mt-16 object-cover" alt="" />
        <p className="text-2xl mt-5 text-dark-green font-semibold">
          {props.title}
        </p>
        <p className="text-sm font-[300] text-center mt-2">{props.content}</p>
      </div>
    </div>
  );
};

export default ProductCard;
