import { Navigate, Route } from "react-router";
import { PrivateRoutes } from "../../types/routes";
import RoutesWithNotFound from "../../utils/routesWithNotFound";
import { lazy } from "react";

const Dashboard = lazy(() => import("./dashboard"));
const HomePage = lazy(() => import("./home"));

const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<HomePage />} />
    </RoutesWithNotFound>
  );
};

export default Private;
