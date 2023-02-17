import PrimaryBtn from "@/common/PrimaryBtn";
import React from "react";
import Input from "../components/Input";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="container m-auto mt-20 xl:px-0 lg:px-0 md:px-3 sm:px-3 xs:px-3"
    >
      <div className="flex flex-col items-center">
        <p className="text-3xl font-[400] mb-2">Contact Us</p>
        <p className="text-xl">service from our services to you</p>
      </div>

      <div className="mt-20 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
        <div className="xl:block lg:block md:block sm:hidden xs:hidden">
          <h3 className="text-[#404040] font-[800] text-5xl">Let’s talk</h3>
          <p className="font-[400] text-xl">Ask us anything or just say hi..</p>
        </div>

        <div className="">
          <div className="grid grid-cols-2 gap-6">
            <Input label="NAME" placeholder="Your Name" />
            <Input label="EMAIL" placeholder="example@email.com" />
          </div>
          <div className=" mt-16 mb-10">
            <Input label="MESSAGE" placeholder="Hi there .." />
          </div>
          <PrimaryBtn
            text="Send"
            className="bg-dark-green px-12 py-3 shadow shadow-[#19653E]"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
