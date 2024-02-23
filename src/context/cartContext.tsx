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
  totalPrice: number;
  removeToCart: (item: Cart) => void;
  removeFromCart: (item: Cart) => void;
  clearCart: () => void; // New function to clear the cart
}

export const CartContext = createContext<ContextValueType>({
  contextData: [],
  addToCart: () => {},
  totalAmount: 0,
  totalPrice: 0,
  removeToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {}, // Default implementation as an empty function
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
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(contextData));

    // Calculate total amount
    const newTotalAmount = contextData.reduce((total, item) => {
      return total + item.amount;
    }, 0);

    // Calculate total Price
    const newTotalPrice = contextData.reduce((total, item) => {
      return total + item.price * item.amount;
    }, 0);
    setTotalAmount(newTotalAmount);
    setTotalPrice(newTotalPrice);
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

      // Check if the updated amount exceeds the stock
      if (
        updatedData[existingItemIndex].amount >
        updatedData[existingItemIndex].stock
      ) {
        // If it does, set the amount back to the stock level
        updatedData[existingItemIndex].amount =
          updatedData[existingItemIndex].stock;
      }

      setContextData(updatedData);
    } else {
      // If the item does not exist, add it to the cart
      // Check if the amount exceeds the stock before adding
      if (item.amount > item.stock) {
        // If it does, set the amount to the stock level
        item.amount = item.stock;
      }

      setContextData((prevData: Cart[]) => [...prevData, item]);
    }
  };

  const removeToCart = (item: Cart) => {
    // Find the index of the item in the cart
    const existingItemIndex = contextData.findIndex(
      (existingItem) => existingItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedData = [...contextData];
      // Decrease the amount of the item
      updatedData[existingItemIndex].amount -= 1;

      // If the amount becomes 0, remove the item from the array
      if (updatedData[existingItemIndex].amount === 0) {
        updatedData.splice(existingItemIndex, 1);
      }

      // Update the context data
      setContextData(updatedData);
    }
  };

  const removeFromCart = (itemToRemove: Cart) => {
    // Filter out the item to remove from the contextData array
    const updatedData = contextData.filter(
      (item) => item.id !== itemToRemove.id
    );
    // Update the context data
    setContextData(updatedData);
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setContextData([]);
  };

  const value: ContextValueType = {
    contextData,
    addToCart,
    totalAmount,
    removeToCart,
    removeFromCart,
    clearCart, // Add clearCart to the context value
    totalPrice,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};
