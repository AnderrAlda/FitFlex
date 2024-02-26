import App from "../App";

import { createBrowserRouter } from "react-router-dom";
import ProductPage from "../pages/private/product";
import Login from "../pages/login";
import HomePage from "../pages/private/home";
import CartPage from "../pages/private/cart";

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
