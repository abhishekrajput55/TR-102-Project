import React from "react";
import SectionHeadStyle from "./SectionHeadStyle";
import CardGrid from "./CardGridSection";

// Card titles and placeholder images (replace with real images later)
const cardData = [
  { title: "FMCG Product", img: "/assets/indexImg/foodimg1.png" },
  {
    title: "Electronics & Appliances",
    img: "/assets/indexImg/electronicimg2.png",
  },
  {
    title: "Clothing & Accessories",
    img: "/assets/indexImg/clothingimg3.png",
  },
  {
    title: "Electrical",
    img: "/assets/indexImg/electrical4.png",
  },
  {
    title: "Home & Kitchen",
    img: "/assets/indexImg/cookingimg5.png",
  },
  {
    title: "Hardware & Sanitaryware",
    img: "/assets/indexImg/hardwareimg6.png",
  },
  {
    title: "Luggage",
    img: "/assets/indexImg/luggageimg1.png",
  },
  { title: "Footwear", img: "/assets/indexImg/footwearimg9.png" },
];

const Category = () => {
  return (
    <div className="w-full px-4 py-10 mt-8">
      <SectionHeadStyle
        img="/assets/indexImg/style3.png"
        heading="Shop by Categories"
      />
      <CardGrid cardData={cardData} />
    </div>
  );
};

export default Category;
