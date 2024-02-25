import App from "../App";

import { createBrowserRouter } from "react-router-dom";
import ProductPage from "../pages/product";
import CartPage from "../pages/cart";
import Login from "../pages/login";
import HomePage from "../pages/private/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "home", element: <HomePage /> },
      { path: "", element: <Login /> },
      { path: "product/:productId", element: <ProductPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "/", element: <>NOT FOUND</> },
    ],
  },
]);
