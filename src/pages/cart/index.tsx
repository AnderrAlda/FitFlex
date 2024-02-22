import React from "react";
import DynamicHeader from "../../components/headers/dynamicHeader";
import { HeaderTypes } from "../../types/headerTypes";

import ProductCartHorizontal from "../../components/productCartHorizontal/index.tsx";
import VerticalScrollLayout from "../../layouts/verticalScroll/index.tsx";

type Props = {};

const Cart = (props: Props) => {
  return (
    <>
      <DynamicHeader HeaderType={HeaderTypes.Cart} />

      <VerticalScrollLayout height="40rem">
        <ProductCartHorizontal />
        <ProductCartHorizontal />
        <ProductCartHorizontal />
        <ProductCartHorizontal />
        <ProductCartHorizontal />
      </VerticalScrollLayout>
    </>
  );
};

export default Cart;
