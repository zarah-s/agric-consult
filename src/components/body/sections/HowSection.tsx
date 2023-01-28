import TitleContent from "@/components/common/TitleContent";
import React from "react";

const HowSection = () => {
  return (
    <div className="">
      <TitleContent
        title="About"
        style="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full"
        content="We are experts adviser and professional problem-solver in the agricultural sector. We work closely with clients to provide solutions to problems "
      />
      <div className="my-10"></div>
      <TitleContent
        title="How it Works"
        style="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full"
        content="Find out how you can easily reach out and work with us"
      />
    </div>
  );
};

export default HowSection;
