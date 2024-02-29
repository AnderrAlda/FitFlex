import { Navigate, Route } from "react-router";
import { PrivateRoutes } from "../../types/routes";
import RoutesWithNotFound from "../../utils/routesWithNotFound";
import { lazy } from "react";
import CartPage from "./cart";
import ProductPage from "./product";
import Logout from "../../components/logout";
import CheckoutPage from "./checkout";
import PaymentPage from "./payment";
import OrderedPage from "./ordered";
import ProductsPage from "./products";

const HomePage = lazy(() => import("./home"));

const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />

      <Route path={PrivateRoutes.HOME} element={<HomePage />} />
      <Route path={PrivateRoutes.CART} element={<CartPage />} />
      <Route path={PrivateRoutes.PRODUCT} element={<ProductPage />} />
      <Route path={PrivateRoutes.CHECKOUT} element={<CheckoutPage />} />
      <Route path={PrivateRoutes.PAYMENT} element={<PaymentPage />} />
      <Route path={PrivateRoutes.ORDERED} element={<OrderedPage />} />
      <Route path={PrivateRoutes.PRODUCTS} element={<ProductsPage />} />
    </RoutesWithNotFound>
  );
};

export default Private;
