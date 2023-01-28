import Image from "next/image";
import React from "react";
export interface Props {
  imageUrl: any;
  name: string;
  date: string;
  message: string;
}
const BlogCard = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={props.imageUrl}
        className="w-[100%] rounded-md xl:h-96 lg:h-80 mb-5"
        alt=""
      />
      <div>
        <span className="text-[#006723] text-lg">{props.name}</span>
        <span className="text-[#1B1C1E] text-opacity-50"> - {props.date}</span>
      </div>
      <p className="text-[#1B1C1E] font-semibold text-lg text-center">
        {props.message}
      </p>
    </div>
  );
};

export default BlogCard;
