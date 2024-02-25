import { useNavigate } from "react-router";
import { UserKey, createUser, resetUser } from "../../redux/states/user";
import { getMorty } from "../../services/auth.service";

import { useDispatch } from "react-redux";
import { PrivateRoutes, PublicRoutes } from "../../types/routes";
import { useEffect } from "react";
import { clearLocalStorage } from "../../utils/localStorage";
import { Roles } from "../../types/roles";

type Props = {};

const Login = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const login = async () => {
    try {
      const result = await getMorty();
      //tiene que ser asi:
      /* dispatch(createUser(result)); */

      //esto es para probar: cambiando de rol
      dispatch(createUser({ ...result, rol: Roles.USER }));

      //replace:true is for instead of /login/private, delete /login and /private
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {}
  };

  return (
    <div>
      <h2>este es un login</h2>
      <button onClick={login}>LOGIN</button>
    </div>
  );
};

export default Login;
