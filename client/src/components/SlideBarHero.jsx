import React, { useState, useEffect, useRef } from "react";

const SlideBarHero = ({ slide }) => {
  const [current, setCurrent] = useState(0);
  const slideRef = useRef();

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slide.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slide.length) % slide.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slide.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slide.length]);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${current * 100}%)`;
    }
  }, [current]);

  return (
    <section className="w-full h-[450px] overflow-hidden relative mt-[113px]">
      {/* Slides */}
      <div
        ref={slideRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{ width: `${slide.length * 100}%` }}
      >
        {slide.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0 h-[450px] relative">
            <img src={item.image} alt={`Slide ${index + 1}`} />
            {/* Optional Text & Button Overlay */}
            {item.title && (
              <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-start justify-center p-10 text-white">
                <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
                <p className="mb-4">{item.description}</p>
                {item.buttonText && (
                  <button className="bg-themeColor text-bgColor px-4 py-2 rounded hover:bg-opacity-90">
                    {item.buttonText}
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 rounded-full z-10"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 rounded-full z-10"
      >
        &#10095;
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slide.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-themeColor" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default SlideBarHero;
