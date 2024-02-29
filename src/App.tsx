import { Provider } from "react-redux";
store;
import store from "./redux/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./types/routes";
import AuthGuard from "./guards/auth.guard";
import RoutesWithNotFound from "./utils/routesWithNotFound";
import { Suspense, lazy } from "react";
import RoleGuard from "./guards/rol.guard";
import { Roles } from "./types/roles";
import Dashboard from "./pages/private/dashboard";
import StartPage from "./pages/startPage";
import Register from "./pages/register";

const Login = lazy(() => import("./pages/login"));
const Private = lazy(() => import("./pages/private/index"));

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<>Cargando</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route path={PublicRoutes.START} element={<StartPage />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route path={PublicRoutes.REGISTER} element={<Register />} />
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
              <Route element={<RoleGuard rol={Roles.ADMIN} />}>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              </Route>{" "}
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </Provider>
  );
}

export default App;
