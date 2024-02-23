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

      <div className="mt-10">
        <div className="flex justify-around">
          <p>Total 2 items</p>
          <p className="font-bold">USD 750</p>
        </div>
        <button className="bg-black text-white rounded-3xl p-3 ml-12 mt-2 w-72   flex justify-around">
          <p className="font-bold">Proceed to checkout</p>
          <svg
            className="h-6"
            data-slot="icon"
            data-darkreader-inline-stroke=""
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default CartPage;
