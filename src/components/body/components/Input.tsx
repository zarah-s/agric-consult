import React from "react";
export interface Props {
  label: string;
  placeholder: string;
  onChange?: any;
}
const Input = (props: Props) => {
  return (
    <div className="">
      <label className="text-[#404040]" htmlFor="">
        {props.label}
      </label>
      <br />
      <input
        type="text"
        className="outline-none placeholder:text-sm placeholder:text-[#A5A5A5] border-b-2 w-full border-[#A5A5A5] mt-1"
        placeholder={props.placeholder}
        name=""
        id=""
      />
    </div>
  );
};

export default Input;
