// HomePage component
import { useEffect, useState } from "react";
import DynamicHeader from "../../../components/headers/dynamicHeader";
import { HeaderTypes } from "../../../types/headerTypes";
import SearchBar from "../../../components/searchBar";
import HorizontalScrollLayout from "../../../layouts/horizontalScroll";
import Categories from "../../../components/categories";
import ProductCardHorizontal from "../../../components/productCardHorizontal";
import ProductCardVertical from "../../../components/productCardVertical";
import {
  getProducts,
  getProductsByCategory,
} from "../../../services/auth.service";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Slice Sed");

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    // Fetch products when the component mounts
    getProductsByCategory(selectedCategory)
      .then((data) => {
        setProducts(data); // Update state with fetched products
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [selectedCategory]); // Empty dependency array ensures this effect runs only once, when the component mounts

  return (
    <>
      <DynamicHeader HeaderType={HeaderTypes.Home} />
      <div className="mt-5">
        <p className="font-bold pl-3">Hi, Ander</p>
        <p className="font-bold text-4xl leading-27 p-3 pt-0">
          What are you looking for today?
        </p>
      </div>

      <SearchBar />
      <div className="flex flex-col h-full mt-10 rounded-3xl p-4 bg-slate-300">
        <HorizontalScrollLayout>
          <Categories
            name="Slice Sed"
            selected={selectedCategory === "Slice Sed"}
            onClick={handleCategoryClick}
          />
          <Categories
            name="Barbells"
            selected={selectedCategory === "Barbells"}
            onClick={handleCategoryClick}
          />
          <Categories
            name="Plates"
            selected={selectedCategory === "Plates"}
            onClick={handleCategoryClick}
          />
        </HorizontalScrollLayout>

        <HorizontalScrollLayout>
          {products?.map((item) => (
            <ProductCardHorizontal
              key={item.id}
              name={item.name}
              img={item.image[0]}
              id={item.id}
            />
          ))}
        </HorizontalScrollLayout>
        <div className="mt-10 flex justify-between mx-3">
          <p className="font-bold text-2xl text-center">Featured products</p>
          <Link to="/private/products">
            <p className="mt-2">See All</p>
          </Link>
        </div>

        <HorizontalScrollLayout>
          {products?.map((item) => (
            <ProductCardVertical
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.image[0]}
              price={item.price}
            />
          ))}
        </HorizontalScrollLayout>
      </div>
    </>
  );
};

export default HomePage;
