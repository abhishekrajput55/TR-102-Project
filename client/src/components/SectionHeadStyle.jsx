import React from "react";

const SectionHeadStyle = ({ img, heading, justify = "center" }) => {
  const justifyClass = {
    center: "justify-center items-center text-center",
    start: "justify-start items-start text-left",
  };

  return (
    <div
      className={`px-5 pt-2 flex flex-col ${
        justifyClass[justify] || justifyClass.center
      }`}
    >
      <img src={img} alt="head-style-Image" className="w-20 h-6" />
      <h2 className="text-2xl font-bold capitalize mb-8">{heading}</h2>
    </div>
  );
};

export default SectionHeadStyle;
