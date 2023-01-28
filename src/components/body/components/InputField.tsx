import React, { HtmlHTMLAttributes } from "react";
import { IconType } from "react-icons/lib";
export interface Props {
  onChange?: any;
  IconName: IconType;
  placeholder: any;
}
const InputField = (props: Props) => {
  return (
    <div className="flex my-2 border p-2.5 border-[#1b1c1e1a] items-center gap-3 bg-[#ffffff4d]  rounded-md">
      <props.IconName className="text-[#1b1c1e80]" />
      <input
        onChange={props.onChange}
        type="text"
        placeholder={props.placeholder}
        className="outline-none placeholder:text-[#1b1c1e80] text-sm border-none bg-transparent"
      />
    </div>
  );
};

export default InputField;
