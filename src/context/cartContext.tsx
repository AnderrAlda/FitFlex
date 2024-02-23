import React, { createContext, useState, useEffect } from "react";

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
}

export const CartContext = createContext<ContextValueType>({
  contextData: [],
  addToCart: () => {},
  totalAmount: 0,
});

interface DataContextProviderProps {
  children: React.ReactNode;
}

export const DataContextProvider: React.FC<DataContextProviderProps> = (
  props
) => {
  const [contextData, setContextData] = useState<Cart[]>(() => {
    const storedData = localStorage.getItem("cartData");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(contextData));

    // Calculate total amount
    const newTotalAmount = contextData.reduce((total, item) => {
      return total + item.amount;
    }, 0);

    setTotalAmount(newTotalAmount);
  }, [contextData]);

  const addToCart = (item: Cart) => {
    // Check if the item already exists in the cart
    const existingItemIndex = contextData.findIndex(
      (existingItem) => existingItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // If the item exists, update its amount
      const updatedData = [...contextData];
      updatedData[existingItemIndex].amount += 1;
      setContextData(updatedData);
    } else {
      // If the item does not exist, add it to the cart
      setContextData((prevData: Cart[]) => [...prevData, item]);
    }
  };

  const value: ContextValueType = { contextData, addToCart, totalAmount };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};
