import TitleContent from "@/components/common/TitleContent";
import Image from "next/image";
import React from "react";
export interface Props {
  reversed?: boolean;
  title: string;
  content: string;
  imageUrl: any;
}
const SummaryGrid = (props: Props) => {
  return (
    <div className=" bg-white shadow-lg rounded-lg">
      <Image alt="" src={props.imageUrl} className="w-[100%] object-cover" />
      <div className="p-5">
        <TitleContent title={props.title} content={props.content} />
      </div>
    </div>
  );
};

export default SummaryGrid;
