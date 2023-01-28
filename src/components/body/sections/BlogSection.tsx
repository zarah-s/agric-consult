import React from "react";
import BlogCard from "../components/BlogCard";
import BlogImg1 from "../../../../public/images/bg.png";
import BlogImg2 from "../../../../public/images/field.png";
import { motion } from "framer-motion";
const BlogSection = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: 100,
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-10 xl:px-0 lg:px-0 md:px-0 sm:px-2 xs:px-2"
    >
      <BlogCard
        name="By Lee"
        message="Spiritual farming: a way to sustainable holistic farming."
        date="20 January, 2023"
        imageUrl={BlogImg1}
      />
      <BlogCard
        name="By Lee"
        message="Spiritual farming: a way to sustainable holistic farming."
        date="20 January, 2023"
        imageUrl={BlogImg2}
      />
    </motion.div>
  );
};

export default BlogSection;
