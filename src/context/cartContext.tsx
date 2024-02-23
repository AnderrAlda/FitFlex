import React, { createContext, useState, useEffect } from "react";

interface ContextValueType {
  contextData: number;
  setcontextData: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext = createContext<ContextValueType>({
  contextData: 4,
  setcontextData: () => {},
});

interface DataContextProviderProps {
  children: React.ReactNode;
}

export const DataContextProvider: React.FC<DataContextProviderProps> = (
  props
) => {
  const [contextData, setcontextData] = useState(() => {
    const storedData = localStorage.getItem("cartData");
    return storedData ? JSON.parse(storedData) : 4;
  });

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(contextData));
  }, [contextData]);

  const value: ContextValueType = { contextData, setcontextData };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};
