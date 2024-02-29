import React, { useContext, useEffect, useState } from "react";
import { HeaderTypes } from "../../../types/headerTypes";
import DynamicHeader from "../../../components/headers/dynamicHeader";
import Categories from "../../../components/categories";
import HorizontalScrollLayout from "../../../layouts/horizontalScroll";
import Comment from "../../../components/comment";
import VerticalScrollLayout from "../../../layouts/verticalScroll";
import ProductCardVertical from "../../../components/productCardVertical";

import { CartContext } from "../../../context/cartContext";

import { useParams } from "react-router";
import { getAllUsers, getProducts } from "../../../services/auth.service";

type Props = {};

const ProductPage = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("Overview");

  const [products, setProducts] = useState<ProductsResponse>();
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    // Fetch products when the component mounts
    getProducts()
      .then((data) => {
        setProducts(data); // Update state with fetched products
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once, when the component mounts

  useEffect(() => {
    // Fetch products when the component mounts
    getAllUsers()
      .then((data) => {
        setUsers(data); // Update state with fetched products
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once, when the component mounts

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const { productId } = useParams();
  const product = products?.products.find(
    (product) => product.id === productId
  )!;
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    // Create a new item object
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
      image: product.image[0],
      amount: 1,
    };

    // Call addToCart function to add the item to the cart
    addToCart(newItem);
  };

  return (
    <>
      <DynamicHeader HeaderType={HeaderTypes.Product} />

      <div className="mt-10 ml-5">
        {product && (
          <>
            <p>USD {product.price}</p>
            <p className="font-bold text-3xl">{product.name}</p>
          </>
        )}
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
                src={item}
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
          {products &&
            products?.products &&
            products?.products
              .find((product) => product.id === "64c9faed738507dddfc7c73c")
              ?.reviews.map((review, index) => {
                // Find the user with matching userId
                const user = users?.find((user) => user.id === review.userId);
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
            {products?.products.map((item) => (
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
