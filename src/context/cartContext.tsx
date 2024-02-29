import React, { createContext, useState, useEffect, useReducer } from "react";

interface StaticAsset {
  Image: string;
}
type Image = StaticAsset | string;

interface Cart {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: Image;
  amount: number;
}

interface ContextValueType {
  contextData: Cart[];
  addToCart: (item: Cart) => void;
  totalAmount: number;
  totalPrice: number;
  removeToCart: (item: Cart) => void;
  removeFromCart: (item: Cart) => void;
  clearCart: () => void;
}

export const CartContext = createContext<ContextValueType>({
  contextData: [],
  addToCart: () => {},
  totalAmount: 0,
  totalPrice: 0,
  removeToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

interface DataContextProviderProps {
  children: React.ReactNode;
}

const cartReducer = (state: Cart[], action: { type: string; payload: any }) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Add item to cart
      return addToCartReducer(state, action.payload);
    case "REMOVE_TO_CART":
      // Remove item from cart
      return removeToCartReducer(state, action.payload);
    case "REMOVE_FROM_CART":
      // Remove item completely from cart
      return state.filter((item) => item.id !== action.payload.id);
    case "CLEAR_CART":
      // Clear entire cart
      return [];
    default:
      return state;
  }
};

const addToCartReducer = (state: Cart[], item: Cart) => {
  const existingItemIndex = state.findIndex(
    (existingItem) => existingItem.id === item.id
  );

  if (existingItemIndex !== -1) {
    const updatedData = [...state];
    updatedData[existingItemIndex].amount += 1;

    if (
      updatedData[existingItemIndex].amount >
      updatedData[existingItemIndex].stock
    ) {
      updatedData[existingItemIndex].amount =
        updatedData[existingItemIndex].stock;
    }

    return updatedData;
  } else {
    if (item.amount > item.stock) {
      item.amount = item.stock;
    }

    return [...state, item];
  }
};

const removeToCartReducer = (state: Cart[], item: Cart) => {
  const existingItemIndex = state.findIndex(
    (existingItem) => existingItem.id === item.id
  );

  if (existingItemIndex !== -1) {
    const updatedData = [...state];
    updatedData[existingItemIndex].amount -= 1;

    if (updatedData[existingItemIndex].amount === 0) {
      updatedData.splice(existingItemIndex, 1);
    }

    return updatedData;
  }

  return state;
};

export const DataContextProvider: React.FC<DataContextProviderProps> = (
  props
) => {
  const [contextData, dispatch] = useReducer(cartReducer, []);

  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(contextData));

    const newTotalAmount = contextData.reduce((total, item) => {
      return total + item.amount;
    }, 0);

    const newTotalPrice = contextData.reduce((total, item) => {
      return total + item.price * item.amount;
    }, 0);
    setTotalAmount(newTotalAmount);
    setTotalPrice(newTotalPrice);
  }, [contextData]);

  const addToCart = (item: Cart) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeToCart = (item: Cart) => {
    dispatch({ type: "REMOVE_TO_CART", payload: item });
  };

  const removeFromCart = (item: Cart) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART", payload: null });
  };

  const value: ContextValueType = {
    contextData,
    addToCart,
    totalAmount,
    removeToCart,
    removeFromCart,
    clearCart,
    totalPrice,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};
