import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const About = () => {
  return (
    <section className="relative w-full bg-bgColor py-16 px-6 md:px-20 text-gray-800 bg-[url('/assets/indexImg/weblogo-2.png')] bg-no-repeat bg-center bg-cover">
      {/* Faded overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* Your actual content */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        {/* Heading */}
        <Link to="/">
          <p className="mb-4 cursor-pointer hover:text-themeColor ">
            <i className="ri-arrow-left-line font-bold ml-1"></i>Home
          </p>
        </Link>
        <h2 className="text-3xl font-bold text-themeColor uppercase text-center">
          Our Story
        </h2>

        {/* Our Story */}
        <p className="text-base leading-relaxed text-justify">
          At <strong>Wholesale Market</strong>, we believe in more than just
          bulk buying — we aim to deliver a streamlined, rewarding experience
          that goes beyond transactions. Our journey began with a simple idea:
          to bring convenience, quality, and affordability together for every
          business owner under one platform.
        </p>

        {/* Who We Are */}
        <div>
          <h3 className="text-xl font-semibold text-themeColor mb-2">
            Who We Are
          </h3>
          <p className="text-base leading-relaxed text-justify">
            <strong>Wholesale Market</strong> is not just a B2B platform — it's
            a growing community of passionate entrepreneurs, retailers, and
            suppliers. We understand the unique challenges small businesses
            face, and we're here to simplify sourcing with trusted vendors and
            efficient logistics.
          </p>
        </div>

        {/* Our Mission */}
        <div>
          <h3 className="text-xl font-semibold text-themeColor mb-2">
            Our Mission
          </h3>
          <p className="text-base leading-relaxed text-justify">
            Our mission is to revolutionize wholesale shopping by providing a
            curated range of reliable products at competitive prices. We empower
            businesses to grow faster, smarter, and more sustainably through
            technology and transparency.
          </p>
        </div>

        {/* What Sets Us Apart */}
        <div>
          <h3 className="text-xl font-semibold text-themeColor mb-2">
            What Sets Us Apart
          </h3>
          <ul className="list-disc pl-6 text-base leading-relaxed space-y-2 text-justify">
            <li>
              <strong>Quality Assurance:</strong> Every product goes through a
              careful quality check to ensure only the best reaches you.
            </li>
            <li>
              <strong>Customer-Centric Approach:</strong> Your success is our
              priority. Our support team is always ready to assist you.
            </li>
            <li>
              <strong>Wide Variety:</strong> From groceries to electronics,
              apparel to appliances — we have everything your store needs.
            </li>
          </ul>
        </div>

        {/* Sustainability */}
        <div>
          <h3 className="text-xl font-semibold text-themeColor mb-2">
            Sustainability
          </h3>
          <p className="text-base leading-relaxed text-justify">
            We are committed to sustainable business practices. From
            eco-conscious packaging to sourcing responsibly, we work to reduce
            our environmental footprint — because progress should be mindful.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10 space-y-2">
          <p className="text-lg font-medium">
            Ready to take your business to the next level?
          </p>
          <p className="text-base">
            Join the <strong>Wholesale Market</strong> community and start
            shopping smart.
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default About;
