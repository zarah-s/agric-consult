import React from "react";
import { IconType } from "react-icons";
export interface Props {
  IconName: IconType;
  title: string;
  subtitle: string;
}
const ContactInfo = (props: Props) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <props.IconName className="text-[#006723]" />
      <div className="flex flex-col">
        <small className="text-[#1B1C1E]">{props.title}</small>
        <small className="text-[#1B1C1E]">
          <small>{props.subtitle}</small>
        </small>
      </div>
    </div>
  );
};

export default ContactInfo;
