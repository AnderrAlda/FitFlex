import { useContext, useState } from "react";
import { logo } from "../../../assets/images";

import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";
import Logout from "../../logout";

type Props = {};

const HomeHeader = (props: Props) => {
  const { totalAmount, contextData } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userData = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();
  const { profilePicture, rol } = userData;
  const handleProfilePictureClick = () => {
    if (rol === "admin") {
      navigate("/dashboard"); // Navigate to /dashboard if the user role is admin
    } else {
      setIsModalOpen(true); // Open the modal otherwise
    }
  };

  return (
    <div>
      <div className="flex justify-center relative">
        <img
          className="h-12 absolute left-5 mt-2"
          src={profilePicture}
          alt="logo image"
          onClick={handleProfilePictureClick}
        />

        <img className="h-12 mt-3  " src={logo} alt="logo image" />

        <Link to="/private/cart">
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

          {contextData.length === 0 ? (
            <div></div>
          ) : (
            <p className="absolute right-4 top-9 bg-slate-500 rounded-lg w-4 text-center">
              {totalAmount}
            </p>
          )}
        </Link>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg absolute top-5 left-5 h-22">
            <div className="mb-5 bg-black rounded-lg">
              <Logout />
            </div>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeHeader;
