import App from "../App";

import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import ProductPage from "../pages/product";
import CartPage from "../pages/cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "product/:productId", element: <ProductPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
]);
