import React, { useState } from "react";
import { HeaderTypes } from "../../types/headerTypes";
import DynamicHeader from "../../components/headers/dynamicHeader";
import Categories from "../../components/categories";
import HorizontalScrollLayout from "../../layouts/horizontalScroll";
import Comment from "../../components/comment";
import VerticalScrollLayout from "../../layouts/verticalScroll";
import ProductCardVertical from "../../components/productCardVertical";
import { RogueAlpacaSled } from "../../assets/images";

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

      <div className="mt-5">
        <HorizontalScrollLayout>
          <img
            className="w-72 h-72 object-cover p-3 rounded-3xl mt-4"
            src={RogueAlpacaSled}
            alt="RogueAlpacaSled"
          />
          <img
            className="w-72 h-72 object-cover p-3 rounded-3xl mt-4"
            src={RogueAlpacaSled}
            alt="RogueAlpacaSled"
          />
          <img
            className="w-72 h-72 object-cover p-3 rounded-3xl mt-4"
            src={RogueAlpacaSled}
            alt="RogueAlpacaSled"
          />{" "}
          <img
            className="w-72 h-72 object-cover p-3 rounded-3xl mt-4"
            src={RogueAlpacaSled}
            alt="RogueAlpacaSled"
          />
        </HorizontalScrollLayout>
      </div>

      <button className="bg-black text-white rounded-3xl p-3 ml-28 mt-4 w-40   flex justify-around">
        <p className="font-bold">Add to cart</p>
      </button>

      <div className="mt-10 ml-5">
        <p className="font-bold">Reviews (4)</p>
        <VerticalScrollLayout height="10rem">
          <Comment />
          <Comment />
          <Comment />
        </VerticalScrollLayout>
      </div>

      <div className="mt-10">
        <div className="flex justify-around">
          <p className="font-bold text-2xl">Another products</p>
          <p className="mt-2">See All</p>
        </div>

        <div className="ml-5 mb-5">
          <HorizontalScrollLayout>
            <ProductCardVertical />
            <ProductCardVertical />
            <ProductCardVertical />
          </HorizontalScrollLayout>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
