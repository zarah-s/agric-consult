import React from "react";
import { IconType } from "react-icons/lib";
export interface Props {
  IconName: IconType;
  label: string;
}
const Tile = (props: Props) => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-[#0067231a] p-3 rounded-full">
        <props.IconName size={20} />
      </div>
      <p>{props.label}</p>
    </div>
  );
};

export default Tile;
