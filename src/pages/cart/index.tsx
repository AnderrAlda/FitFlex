import React, { useContext } from "react";
import DynamicHeader from "../../components/headers/dynamicHeader";
import { HeaderTypes } from "../../types/headerTypes";

import VerticalScrollLayout from "../../layouts/verticalScroll/index.tsx";
import ShoppingCartProduct from "../../components/shoppingCartProduct/index.tsx";

import { CartContext } from "../../context/cartContext.tsx";
type Props = {};

const CartPage = (props: Props) => {
  const { contextData } = useContext(CartContext); // Destructuring contextData from CartContext
  console.log(contextData);

  const { totalPrice, totalAmount } = useContext(CartContext);
  return (
    <>
      <DynamicHeader HeaderType={HeaderTypes.Cart} />
      <div>
        {contextData.length === 0 ? (
          <div className="h-60 w-60">
            <p className="mt-32 ml-32 w-32">The cart is empty</p>
          </div>
        ) : (
          <div>
            <VerticalScrollLayout height="40rem">
              {contextData.map((cartItem) => (
                <ShoppingCartProduct
                  id={cartItem.id}
                  key={cartItem.id}
                  name={cartItem.name}
                  price={cartItem.price}
                  image={cartItem.image}
                  amount={cartItem.amount}
                  stock={cartItem.stock}
                />
              ))}
            </VerticalScrollLayout>

            <div className="mt-10">
              <div className="flex justify-around">
                <p>Total {totalAmount} items</p>
                <p className="font-bold">USD {totalPrice}</p>
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
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
