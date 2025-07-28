import React from "react";
import SectionHeadStyle from "./SectionHeadStyle";

const WelcomeSection = () => {
  return (
    <div className="w-full h-fit mt-9 mb-9 bg-red-50 rounded-md">
      <SectionHeadStyle
        img="/assets/indexImg/style4.png"
        heading="Welcome to Wholesale B2B Market"
        justify="start" // or "center"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 py-10">
        {/* Left Column: Heading + Video */}
        <div className="flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-themeColor mb-4">
            BUY STOCKS FOR YOUR SHOP/BUSINESS EASILY
          </h1>
          <div className="aspect-video rounded overflow-hidden shadow-md">
            <video
              src="/assets/indexImg/WelcomeVideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right Column: Steps with alternating alignment */}
        <div className="flex flex-col gap-6">
          {[
            {
              title: "Quick doorstep delivery ",
              desc: "Get delivery of your orders at your doorstep",
            },
            {
              title: "Wide range from top sellers & brands",
              desc: "Shop from 25,000 top sellers across India ",
            },
            {
              title: "Credit Facility Avaliable ",
              desc: "Avail best prices on top quality products ",
            },
            {
              title: "Great wholesale prices",
              desc: "Avail best prices on top quality products",
            },
            {
              title: "Smart returns",
              desc: "Enjoy simple & hassle-free returns process ",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="bg-bgColor border-l-4 border-themeColor p-4 rounded-md shadow w-full max-w-md">
                <h2 className="font-bold text-lg text-themeColor mb-1">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
