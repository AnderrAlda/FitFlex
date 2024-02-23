import React, { useState } from "react";
import { HeaderTypes } from "../../types/headerTypes";
import DynamicHeader from "../../components/headers/dynamicHeader";
import Categories from "../../components/categories";
import HorizontalScrollLayout from "../../layouts/horizontalScroll";

type Props = {};

const ProductPage = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("Overview");

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <>
      <DynamicHeader HeaderType={HeaderTypes.Product} />

      <div className="mt-10 ml-5">
        <p>USD 431</p>
        <p className="font-bold text-3xl">Rogue Echo Dog Sled</p>
      </div>

      <div className="mt-5">
        <HorizontalScrollLayout>
          <Categories
            name="Overview"
            selected={selectedCategory === "Overview"}
            onClick={handleCategoryClick}
          />
          <Categories
            name="Review"
            selected={selectedCategory === "Review"}
            onClick={handleCategoryClick}
          />
          <Categories
            name="Others"
            selected={selectedCategory === "Others"}
            onClick={handleCategoryClick}
          />
        </HorizontalScrollLayout>
      </div>
    </>
  );
};

export default ProductPage;
