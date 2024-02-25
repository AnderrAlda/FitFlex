import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Roles } from "../types/roles";
import { Navigate, Outlet } from "react-router";
import { PrivateRoutes } from "../types/routes";

interface Props {
  rol: Roles;
}

function RolGuard({ rol }: Props) {
  const userState = useSelector((store: AppStore) => store.user);

  return userState.rol === rol ? (
    <Outlet />
  ) : (
    <Navigate replace to={PrivateRoutes.PRIVATE} />
  );
}

export default RolGuard;
