import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    // <div className="w-full h-screen flex justify-center items-center bg-themeColor px-5 py-4">
    //   <div className="text-bgColor w-full text-center h-full flex flex-col justify-end items-center pb-32 gap-6 bg hero">
    //     {/* Text Content */}
    //     <div className=" w-fit flex flex-col gap-2">
    //       <h2 className="text-5xl font-bold">Trade-in-offer</h2>
    //       <h1 className="text-3xl font-bold">India's eB2B Platform for</h1>
    //       <h1 className="text-5xl font-bold">businesses & shop-owners</h1>
    //       <p className="font-bold">Save more with coupons & upto 70% off!</p>
    //     </div>

    //     {/* Button */}
    //     <Button />
    //   </div>
    // </div>
    <div className="relative w-full h-screen flex justify-center items-center px-5 py-4 bg-themeColor overflow-hidden ">
      {/* SVG Shape Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 rotate-180">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 940 540"
          preserveAspectRatio="none"
        >
          <path
            fill="#0F172A" // dark blue shade or match bg-themeColor
            d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,96C672,75,768,85,864,117.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160V0H0Z"
          />
        </svg>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-white w-full text-center h-full flex flex-col justify-end items-center pb-32 gap-6">
        {/* Text Content */}
        <div className="w-fit flex flex-col gap-2">
          <h2 className="text-5xl font-bold">Trade-in-offer</h2>
          <h1 className="text-3xl font-bold">India's eB2B Platform for</h1>
          <h1 className="text-5xl font-bold">businesses & shop-owners</h1>
          <p className="font-bold">Save more with coupons & upto 70% off!</p>
        </div>

        {/* Button */}
        <Button />
      </div>
    </div>
  );
};

export default HeroSection;
