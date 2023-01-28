import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import InputField from "../components/InputField";
const FeedbackSection = () => {
  return (
    <div className="my-5 flex flex-col xl:w-[calc(100%-5rem)] lg:w-[calc(100%-5rem)] md:w-[calc(100%-5rem)] sm:w-full xs:w-full xl:px-0 lg:px-0 md:px-0 sm:px-2 xs:px-2">
      <div className="flex items-center flex-col mt-10">
        <p className=" text-2xl font-bold">Contact us Today</p>
        <p className="text-[#1b1c1e80] mt-3">
          We will roll out on first come, first serve basis in the next few
          months.
        </p>
      </div>
      <div className="my-5"></div>
      <InputField IconName={FaUserAlt} placeholder="Name" />
      <InputField IconName={BsFillTelephoneFill} placeholder="Phone Nuber" />
      <InputField IconName={MdEmail} placeholder="Email Address" />
      <textarea
        placeholder="Message ..."
        name=""
        id=""
        rows={3}
        className="resize-none my-3  rounded-md bg-[#ffffff4d] border p-3 border-[#1b1c1e1a]"
      ></textarea>
      <button className="bg-[#047C01] my-3 text-white font-[500] w-1/2 rounded-md p-3">
        Send Feedback
      </button>
    </div>
  );
};

export default FeedbackSection;
