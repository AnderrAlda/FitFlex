import React, { useContext, useState } from "react";
import { HeaderTypes } from "../../types/headerTypes";
import DynamicHeader from "../../components/headers/dynamicHeader";
import Categories from "../../components/categories";
import HorizontalScrollLayout from "../../layouts/horizontalScroll";
import Comment from "../../components/comment";
import VerticalScrollLayout from "../../layouts/verticalScroll";
import ProductCardVertical from "../../components/productCardVertical";

import { CartContext } from "../../context/cartContext";
import { data, productsResponse } from "../../data";
import { useParams } from "react-router";

type Props = {};

const ProductPage = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("Overview");

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const { contextData, setcontextData } = useContext(CartContext);
  const handleAddToCart = () => {
    // Update the context value by incrementing the cart value
    setcontextData(contextData + 1);
  };

  const { productId } = useParams();
  const product = productsResponse.products.find(
    (product) => product.id === productId
  );

  return (
    <>
      <DynamicHeader HeaderType={HeaderTypes.Product} />

      <div className="mt-10 ml-5">
        <p>USD {product?.price}</p>
        <p className="font-bold text-3xl">{product?.name}</p>
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
          {product &&
            product.image.map((item, index) => (
              <img
                key={index} // Unique key prop
                className="w-72 h-72 object-cover p-3 rounded-3xl mt-4"
                src={typeof item === "string" ? item : item.Image}
                alt="RogueAlpacaSled"
              />
            ))}
        </HorizontalScrollLayout>
      </div>

      <button
        className="bg-black text-white rounded-3xl p-3 ml-28 mt-4 w-40   flex justify-around"
        onClick={handleAddToCart}
      >
        <p className="font-bold">Add to cart</p>
      </button>

      <div className="mt-10 ml-5">
        <p className="font-bold">Reviews (4)</p>
        <VerticalScrollLayout height="10rem">
          {productsResponse &&
            productsResponse.products &&
            productsResponse.products
              .find((product) => product.id === "64c9faed738507dddfc7c73c")
              ?.reviews.map((review, index) => {
                // Find the user with matching userId
                const user = data.users.find(
                  (user) => user.id === review.userId
                );
                // Use ternary operator to conditionally render name
                const name = user ? user.name : "Unknown";
                return (
                  <Comment
                    key={index} // Unique key prop
                    name={name}
                    rating={review.rating}
                    date={review.date}
                    comment={review.comment}
                  />
                );
              })}
        </VerticalScrollLayout>
      </div>

      <div className="mt-10">
        <div className="flex justify-around">
          <p className="font-bold text-2xl">Another products</p>
          <p className="mt-2">See All</p>
        </div>

        <div className="ml-5 mb-5">
          <HorizontalScrollLayout>
            {productsResponse.products.map((item) => (
              <ProductCardVertical
                key={item.id}
                name={item.name}
                img={item.image[0]}
                price={item.price}
              />
            ))}
          </HorizontalScrollLayout>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
