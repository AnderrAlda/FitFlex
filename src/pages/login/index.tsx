import { useNavigate } from "react-router";
import { UserKey, createUser, resetUser } from "../../redux/states/user";
import { getMorty } from "../../services/auth.service";

import { useDispatch } from "react-redux";
import { PrivateRoutes, PublicRoutes } from "../../types/routes";
import { useEffect, useState } from "react";
import { clearLocalStorage } from "../../utils/localStorage";
import { Roles } from "../../types/roles";
import { loginPhoto } from "../../assets/images";

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
    <div className="relative h-screen ">
      <img src={loginPhoto} alt="" className="w-full h-auto" />
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="bg-white p-10 rounded-3xl w-full h-80">
          <div className="justify-center text-center">
            <p className="font-bold text-2xl">Welcome back</p>
            <p className="text-xl">
              Please fill E-mail & password to login your crossfit account
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-10 relative">
            <input
              type="text"
              name="email"
              placeholder="Email"
              autoComplete="off"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              className="block w-full p-2 mb-2 border border-gray-300  rounded-xl"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              className="block w-full p-2 mb-2 border border-gray-300  rounded-xl"
            />
            <button
              type="submit"
              className="block w-full bg-black text-white p-2 rounde mt-10 rounded-xl"
            >
              Log in
            </button>
          </form>
          <div className="flex gap-3 mt-10 items-center justify-center">
            <p>Didnt have any account?</p>
            <p className="underline font-bold">Sign Up here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
