import React from "react";
import SectionHeadStyle from "./SectionHeadStyle";
import { logos } from "../data/products";

const BrandLogoSlideBar = () => {
  return (
    <div className="w-full bg-white py-6 overflow-hidden">
      <SectionHeadStyle
        img="/assets/indexImg/style3.png"
        heading="Shop from top brands"
      />
      <div className="space-y-4">
        {/* Row 1 */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee gap-10 w-max ">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={`row1-${i}`}
                src={logo}
                alt={`Brand ${i}`}
                className="h-24 object-contain"
              />
            ))}
          </div>
        </div>

        {/* Row 2 - reverse direction */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee-reverse gap-10 w-max">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={`row2-${i}`}
                src={logo}
                alt={`Brand ${i}`}
                className="h-24 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandLogoSlideBar;
