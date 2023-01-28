import React from "react";
export interface Props {
  title?: string;
  content?: string;
  style?: string;
}
const TitleContent = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl font-bold text-center">{props.title}</p>
      <p className={`text-[1b1c1e80] my-3 text-center ${props.style}`}>
        {props.content}
      </p>
    </div>
  );
};

export default TitleContent;
