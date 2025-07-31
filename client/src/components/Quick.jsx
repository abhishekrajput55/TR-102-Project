import React from "react";
import SectionHeadStyle from "./SectionHeadStyle";
import CardGrid from "./CardGridSection";
import { Link } from "react-router-dom";
// Sample data array
const quickLinks = [
  {
    title: "Free Delivery",
    img: "/assets/indexImg/why-we-img-1.png",
  },
  {
    title: "Save Money",
    img: "/assets/indexImg/why-we-img-3.png",
  },
  {
    title: "Online Order",
    img: "/assets/indexImg/why-we-img-5.png",
  },
  {
    title: "24/7 Services",
    img: "/assets/indexImg/why-we-img-6.png",
  },
];

const Quick = () => {
  return (
    <div className="w-full px-4 py-10 mt-8">
      <SectionHeadStyle
        img="/assets/indexImg/style4.png"
        heading="Quick Services"
        justify="start" // or "center"
      />

      <CardGrid cardData={quickLinks} />
    </div>
  );
};

export default Quick;
