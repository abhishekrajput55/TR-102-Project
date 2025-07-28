import React from "react";
import SectionHeadStyle from "./SectionHeadStyle";
import Button from "./Button";
const steps = [
  {
    img: "/assets/indexImg/tradeimg1.png",
    title: "Create an account",
    desc: "Register using your mobile number. Enter your Name, Shop name and Pincode",
  },
  {
    img: "/assets/indexImg/tradeimg2.png",
    title: "Complete shop KYC",
    desc: "Upload any one of shop's KYC documents like GSTIN, Shop & Establishment Licence ",
  },
  {
    img: "/assets/indexImg/tradeimg3.png",
    title: "Start Ordering",
    desc: "Browse and order products for your shop from sellers & brands ",
  },
];

const StartTradingSection = () => {
  return (
    <div className="w-full h-fit py-10 mt-9 mb-9">
      <SectionHeadStyle
        img="/assets/indexImg/style3.png"
        heading="Start Trading in 3 Simple Steps"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8 mt-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-center text-center px-4"
          >
            <img src={step.img} alt={step.title} className="h-48 mb-4" />
            <h1 className="text-lg font-semibold text-textColor mb-2">
              {step.title}
            </h1>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Button />
      </div>
    </div>
  );
};

export default StartTradingSection;
