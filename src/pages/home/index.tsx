// HomePage component
import { useState } from "react";
import DynamicHeader from "../../components/headers/dynamicHeader";
import SearchBar from "../../components/searchBar";
import { HeaderTypes } from "../../types/headerTypes";
import HorizontalScrollLayout from "../../layouts/horizontalScroll/index.tsx";
import Categories from "../../components/categories";
import ProductCardVertical from "../../components/productCardVertical/index.tsx";
import ProductCardHorizontal from "../../components/productCardHorizontal/index.tsx";
import { productsResponse } from "../../data.ts";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Slice Sed");

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

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
            name="Kettelbells"
            selected={selectedCategory === "Kettelbells"}
            onClick={handleCategoryClick}
          />
          <Categories
            name="Dumbbells"
            selected={selectedCategory === "Dumbbells"}
            onClick={handleCategoryClick}
          />
          <Categories
            name="Dumbbells2"
            selected={selectedCategory === "Dumbbells2"}
            onClick={handleCategoryClick}
          />
        </HorizontalScrollLayout>

        <HorizontalScrollLayout>
          {productsResponse.products.map((item) => (
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
          <p className="mt-2">See All</p>
        </div>

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
    </>
  );
};

export default HomePage;
