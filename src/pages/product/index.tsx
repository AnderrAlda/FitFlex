import React from "react";
import { HeaderTypes } from "../../types/headerTypes";
import DynamicHeader from "../../components/headers/dynamicHeader";

type Props = {};

const ProductPage = (props: Props) => {
  return (
    <>
      {" "}
      <DynamicHeader HeaderType={HeaderTypes.Product} />
    </>
  );
};

export default ProductPage;
