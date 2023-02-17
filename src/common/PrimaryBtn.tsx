import React from "react";

export interface Props {
  text: string;
  onClick?: any;
  className?: string;
}
const PrimaryBtn = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={` bg-primary-green text-white px-5 py-2 rounded-lg shadow-sm  ${props.className}`}
    >
      {props.text}
    </button>
  );
};

export default PrimaryBtn;
