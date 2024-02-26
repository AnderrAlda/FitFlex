import { useNavigate } from "react-router";
import { UserKey, createUser, resetUser } from "../../redux/states/user";
import { getMorty } from "../../services/auth.service";

import { useDispatch } from "react-redux";
import { PrivateRoutes, PublicRoutes } from "../../types/routes";
import { useEffect, useState } from "react";
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
      console.log(result);
      //tiene que ser asi:
      /* dispatch(createUser(result)); */

      //esto es para probar: cambiando de rol
      dispatch(createUser({ ...result, rol: Roles.USER }));

      //replace:true is for instead of /login/private, delete /login and /private
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {}
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  interface loginData {
    email: string;
    password: string;
  }
  const validateUser = ({ email, password }: loginData) => {
    if (email === "hola@gmail.com" && password === "test") login();
    else alert("login no correcto");
  };
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    validateUser({ email: email, password: password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
