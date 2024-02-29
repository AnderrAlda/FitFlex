import { useNavigate } from "react-router";
import { UserKey, createUser, resetUser } from "../../redux/states/user";
import { getUsers } from "../../services/auth.service";

import { useDispatch } from "react-redux";
import { PrivateRoutes, PublicRoutes } from "../../types/routes";
import { useEffect, useState } from "react";
import { clearLocalStorage } from "../../utils/localStorage";
import { Roles } from "../../types/roles";
import { loginPhoto } from "../../assets/images";
import { Link } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  interface loginData {
    email: string;
    password: string;
  }
  const validateUser = async ({ email, password }: loginData) => {
    try {
      console.log("email:" + email);
      const user = await getUsers(email);
      console.log("return" + user.email + user.password);
      if (user && user.password === password) {
        // Check if user exists and password matches
        console.log("userpass is correct");
        dispatch(createUser(user)); // Dispatch action to store user data

        //replace:true is for instead of /login/private, delete /login and /private
        navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
      } else {
        alert("Incorrect email or password");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      alert("An error occurred. Please try again later.");
    }
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
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              className="block w-full p-2 mb-2 border border-gray-300  rounded-xl"
            />
            <input
              type="password"
              id="password"
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
            <Link to="/register">
              <p className="underline font-bold">Sign Up here</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
