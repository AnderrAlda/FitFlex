import React from "react";
import DynamicHeader from "../../components/headers/dynamicHeader";
import { HeaderTypes } from "../../types/headerTypes";

import VerticalScrollLayout from "../../layouts/verticalScroll/index.tsx";
import ShoppingCartProduct from "../../components/shoppingCartProduct/index.tsx";

type Props = {};

const CartPage = (props: Props) => {
  return (
    <>
      <DynamicHeader HeaderType={HeaderTypes.Cart} />

      <VerticalScrollLayout height="40rem">
        <ShoppingCartProduct />
        <ShoppingCartProduct />
        <ShoppingCartProduct />
        <ShoppingCartProduct />
        <ShoppingCartProduct />
      </VerticalScrollLayout>
    </>
  );
};

export default CartPage;
