// HomePage component
import { useState } from "react";
import DynamicHeader from "../../components/headers/dynamicHeader";
import SearchBar from "../../components/searchBar";
import { HeaderTypes } from "../../types/headerTypes";
import HorizontalScrollLayout from "../../layouts/horizontalScroll.tsx/horizontalScroll";
import Categories from "../../components/categories";
import ProductCartHorizontal from "../../components/productCartHorizontal";

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
        <HorizontalScrollLayout gap={10}>
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

        <HorizontalScrollLayout gap={3}>
          <ProductCartHorizontal />
          <ProductCartHorizontal />
          <ProductCartHorizontal />
        </HorizontalScrollLayout>

        <div className="mt-10">
          <p>Featured products</p>
          <p>See All</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
