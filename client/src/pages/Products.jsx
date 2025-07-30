import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ProductNavbar from "../components/ProductNavbar";
import SlideBarHero from "../components/SlideBarHero";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import SectionHeadStyle from "../components/SectionHeadStyle";
import CommomFooter from "../components/CommomFooter";
import ProductSection from "../components/ProductSection";
import Banner from "../components/Banner";
const banners = [
  {
    image: "/assets/pageimg/fmcg_slidebaner-img-1.jpg",
    title: "Upgrade Your Wardrobe",
    description: "Shop the latest fashion trends for wholesale prices.",
    buttonText: "Explore Now",
  },
  {
    image: "/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "New Arrivals",
    description: "Catch the latest styles before they're gone!",
    buttonText: "Shop New",
  },
  {
    image: "/assets/pageimg/luggages_slidebaner-img-1.JPG",
    title: "Smart Deals Everyday",
    description: "Save more when you buy more.",
    buttonText: "Grab Deals",
  },
  {
    image: "/assets/pageimg/ece_slidebaner-img-1.JPG",
    title: "Comfort Meets Style",
    description: "Discover comfy fits for everyday wear.",
    buttonText: "Browse Now",
  },
  {
    image: "/assets/pageimg/electrical_slidebaner-img-1.JPG",
    title: "Big Discounts Inside",
    description: "Unbeatable prices on quality apparel.",
    buttonText: "Get Offer",
  },
  {
    image: "/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "Seasonal Collection",
    description: "Fresh picks for every season and occasion.",
    buttonText: "View Collection",
  },
  {
    image: "/assets/pageimg/clothing_slidebaner-img-1.jpg",
    title: "Trusted by Retailers",
    description: "Wholesale clothing trusted by 1000+ retailers.",
    buttonText: "Join Now",
  },
];

const Products = () => {
  const { state } = useLocation();
  const title = state?.title || localStorage.getItem("ownerName") || "User";
  const categoryConfigs = [
    { key: "fmcg", stateKey: "fmcgproduct", url: "fmcgproducts/fmcg" },
    {
      key: "electrical",
      stateKey: "electricalproduct",
      url: "electricalproducts/electrical",
    },
    {
      key: "electronics",
      stateKey: "electronicsproduct",
      url: "electronicsproducts/electronics",
    },
    { key: "cloth", stateKey: "clothproduct", url: "clothproducts/cloth" },
    {
      key: "kitchen",
      stateKey: "kitchenproduct",
      url: "kitchenproducts/kitchen",
    },
    {
      key: "luggage",
      stateKey: "luggageproduct",
      url: "luggageproducts/luggage",
    },
  ];

  const [fmcgproduct, setfmcgProducts] = useState([]);
  const [electricalproduct, setelectricalProducts] = useState([]);
  const [electronicsproduct, setelectronicsProducts] = useState([]);
  const [clothproduct, setclothProducts] = useState([]);
  const [kitchenproduct, setkitchenProducts] = useState([]);
  const [luggageproduct, setluggageProducts] = useState([]);

  const stateSetters = {
    fmcgproduct: setfmcgProducts,
    electricalproduct: setelectricalProducts,
    electronicsproduct: setelectronicsProducts,
    clothproduct: setclothProducts,
    kitchenproduct: setkitchenProducts,
    luggageproduct: setluggageProducts,
  };

  useEffect(() => {
    categoryConfigs.forEach(async ({ stateKey, url }) => {
      try {
        const res = await axios.get(`https://tr-102-project.onrender.com/api/${url}`);
        stateSetters[stateKey](res.data);
      } catch (err) {
        console.error(`Failed to fetch ${stateKey} data`, err);
      }
    });
  }, []);
  return (
    <div className="w-full h-fit">
      <ProductNavbar title={title} />
      <SlideBarHero slide={banners} />
      <Category />
      <ProductSection
        heading="FMCG Products"
        img="/assets/indexImg/style3.png"
        products={fmcgproduct}
        linkTo="FMCG"
      />

      <ProductSection
        heading="Electrical Products"
        img="/assets/indexImg/style3.png"
        products={electricalproduct}
        linkTo="Electrical"
      />

      <ProductSection
        heading="Clothing Products"
        img="/assets/indexImg/style3.png"
        products={clothproduct}
        linkTo="Clothing"
      />

      <ProductSection
        heading="Electronics Products"
        img="/assets/indexImg/style3.png"
        products={electronicsproduct}
        linkTo="Electronics"
      />
      <Banner banner={"/assets/pageimg/ece_bannerimg-2.png"} />

      <ProductSection
        heading="Home and Kitchen Products"
        img="/assets/indexImg/style3.png"
        products={kitchenproduct}
        linkTo="Electronics"
      />
      <Banner banner={"/assets/pageimg/home_slidebaner2.JPG"} />

      <ProductSection
        heading="Luggage and Traveling Products"
        img="/assets/indexImg/style3.png"
        products={luggageproduct}
        linkTo="Electronics"
      />
      <Banner banner={"/assets/pageimg/luggage_slidebaner1 copy.JPG"} />
      <CommomFooter />
    </div>
  );
};
export default Products;
