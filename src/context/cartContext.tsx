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
}

interface ContextValueType {
  contextData: Cart[];
  addToCart: (item: Cart) => void;
}

export const CartContext = createContext<ContextValueType>({
  contextData: [],
  addToCart: () => {},
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

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(contextData));
  }, [contextData]);

  const addToCart = (item: Cart) => {
    setContextData((prevData: Cart[]) => [...prevData, item]);
  };

  const value: ContextValueType = { contextData, addToCart };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};
