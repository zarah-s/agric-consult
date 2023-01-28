import ContactInfo from "@/components/common/ContactInfo";
import React from "react";
import { MdLocationOn } from "react-icons/md";

const ContactSection = () => {
  return (
    <div className="grid grid-cols-3 justify-center xl:px-0 lg:px-0 md:px-0 sm:px-2 xs:px-2">
      <ContactInfo
        IconName={MdLocationOn}
        title="Lagos, Nigeria"
        subtitle="Victoria Island, Fall st., Nigeria"
      />
      <ContactInfo
        IconName={MdLocationOn}
        title="Lagos, Nigeria"
        subtitle="Victoria Island, Fall st., Nigeria"
      />
      <ContactInfo
        IconName={MdLocationOn}
        title="Lagos, Nigeria"
        subtitle="Victoria Island, Fall st., Nigeria"
      />
    </div>
  );
};

export default ContactSection;
