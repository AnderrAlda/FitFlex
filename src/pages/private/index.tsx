import { Navigate, Route } from "react-router";
import { PrivateRoutes } from "../../types/routes";
import RoutesWithNotFound from "../../utils/routesWithNotFound";
import { lazy } from "react";
import CartPage from "./cart";
import ProductPage from "./product";

const HomePage = lazy(() => import("./home"));

const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />

      <Route path={PrivateRoutes.HOME} element={<HomePage />} />
      <Route path={PrivateRoutes.CART} element={<CartPage />} />
      <Route path={PrivateRoutes.PRODUCT} element={<ProductPage />} />
    </RoutesWithNotFound>
  );
};

export default Private;
