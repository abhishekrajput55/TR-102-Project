import React from "react";

const Banner = ({ banner }) => {
  return (
    <div className="w-full h-400 mt-10 mb-10">
      <img src={banner} alt="banner" className="w-full h-full" />
    </div>
  );
};

export default Banner;
