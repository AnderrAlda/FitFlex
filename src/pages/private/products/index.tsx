import React, { useEffect, useState } from "react";
import { HeaderTypes } from "../../../types/headerTypes";
import DynamicHeader from "../../../components/headers/dynamicHeader";
import { getProducts } from "../../../services/auth.service";
import ProductCardVertical from "../../../components/productCardVertical";
import VerticalScrollLayout2x from "../../../layouts/verticalScroll2x";

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductsResponse>();

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

  return (
    <>
      <DynamicHeader HeaderType={HeaderTypes.Products} />

      <div className="mt-5 ml-5">
        <VerticalScrollLayout2x height="50rem">
          {products?.products.map((item) => (
            <ProductCardVertical
              key={item.id}
              name={item.name}
              img={item.image[0]}
              price={item.price}
            />
          ))}
        </VerticalScrollLayout2x>
      </div>
    </>
  );
};

export default ProductsPage;
