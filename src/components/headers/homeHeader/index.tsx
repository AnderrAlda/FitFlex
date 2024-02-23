import { useContext } from "react";
import { logo } from "../../../assets/images";

import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";
type Props = {};

const HomeHeader = (props: Props) => {
  const { contextData } = useContext(CartContext);
  return (
    <div>
      <div className="flex justify-center relative">
        <img className="h-12 mt-3  " src={logo} alt="logo image" />

        <Link to="/cart">
          <svg
            className="h-8 absolute right-5 mt-4"
            data-slot="icon"
            data-darkreader-inline-stroke=""
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            ></path>
          </svg>
          <p className="absolute right-4 top-9 bg-slate-500 rounded-lg w-4 text-center">
            {contextData}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
