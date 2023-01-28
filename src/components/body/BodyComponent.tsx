import React from "react";
import TitleContent from "../common/TitleContent";
import SummaryGridSection from "./sections/SummaryGridSection";
import CarouselComponent from "./components/CarouselComponent";
import FeedbackSection from "./sections/FeedbackSection";
import ContactSection from "./sections/ContactSection";
import TileSection from "./sections/TileSection";
import HowSection from "./sections/HowSection";
import ProductAndServices from "./sections/ProductAndServices";
import BlogSection from "./sections/BlogSection";
const BodyComponent = () => {
  return (
    <div>
      <div className="container m-auto my-10">
        <HowSection />

        <TileSection />
      </div>
      <ProductAndServices />
      <div className="container m-auto mt-16">
        <TitleContent
          title="Why Choose Us"
          content="More than 50 years of experience in agricultural industry. "
          style="text-lg"
        />

        <SummaryGridSection />

        <div className="flex justify-center my-10">
          <CarouselComponent
            title="Testimonials"
            content="People love the community and are happy with the help we provide"
          />
        </div>
        <div className="my-20">
          <TitleContent
            title="From the Blog"
            content="Latest news and posts about us"
          />
        </div>

        <BlogSection />
      </div>

      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-10 bg-[#1B1C1E05] my-20">
        <div className="w-full xl:m-20 lg:m-20 md:m-20 sm:m-auto xs:m-auto  ">
          <FeedbackSection />
        </div>
        <img
          src="/images/female.png"
          className="xl:h-[calc(100%-20px)] w-full xl:block lg:block md:block sm:hidden xs:hidden"
          alt=""
        />
      </div>
      <div className="container my-20 m-auto">
        <ContactSection />
      </div>
    </div>
  );
};

export default BodyComponent;
