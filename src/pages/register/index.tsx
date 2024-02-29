import { FormEvent, useState } from "react";
import { loginPhoto } from "../../assets/images";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../../services/auth.service";
import { Roles } from "../../types/roles";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    const emailParts = email.split("@");
    const name = emailParts[0];
    try {
      const addedUser = await addUser({
        name,
        email,
        password,
        id: 0,
        rol: Roles.USER,
        address: "",
        bank: { nameCard: "", cardNumber: 0, expireDate: "", cvv: 0 },
      });
      console.log("Added user:", addedUser);

      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
    }
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
          <form className="mt-10 relative" onSubmit={handleRegister}>
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
              Sign Up
            </button>
          </form>
          <div className="flex gap-3 mt-10 items-center justify-center">
            <p>If you have an account?</p>
            <Link to="/login">
              <p className="underline font-bold">Sign In here</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
