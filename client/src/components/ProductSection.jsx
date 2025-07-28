import { Link } from "react-router-dom";
import SectionHeadStyle from "./SectionHeadStyle";
import ProductCard from "./ProductCard";

const ProductSection = ({ heading, img, products, linkTo }) => {
  return (
    <div className="w-full h-fit mt-10">
      <SectionHeadStyle img={img} heading={heading} />
      <div className="grid gap-6 grid-cols-2 sm:[grid-template-columns:repeat(auto-fit,_minmax(280px,_1fr))]">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}

        {/* See More */}
        <div className="min-h-[340px] flex items-center justify-center text-themeColor italic font-bold text-sm border-4 border-dashed rounded-xl p-6">
          <Link to={linkTo}>
            <button className="border-2 cursor-pointer p-5 border-themeColor">
              See More Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
