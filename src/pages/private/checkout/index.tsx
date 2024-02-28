import { useContext, useEffect, useState } from "react";
import DynamicHeader from "../../../components/headers/dynamicHeader";
import ShoppingCartProduct from "../../../components/shoppingCartProduct";
import VerticalScrollLayout from "../../../layouts/verticalScroll";
import { HeaderTypes } from "../../../types/headerTypes";
import { CartContext } from "../../../context/cartContext";
import { Link } from "react-router-dom";
import CheckoutCartProduct from "../../../components/checkoutCartProduct";
import CheckoutModal from "../../../components/checkoutModal";
import { getUsers } from "../../../services/auth.service";

const CheckoutPage = () => {
  const { contextData } = useContext(CartContext);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = async () => {
    setIsModalOpen(false);
    try {
      if (userData && userData.email) {
        // Check if userData and userData.email are not undefined
        const updatedUserData = await getUsers(userData.email); // Fetch updated user data from the API
        localStorage.setItem("user", JSON.stringify(updatedUserData)); // Update user data in local storage
        setUserData(updatedUserData); // Update user data in state
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      // Handle error accordingly
    }
  };
  // State to store user data
  const [userData, setUserData] = useState<User>();

  // Effect to run on component mount
  useEffect(() => {
    // Check if user data exists in local storage
    const storedUserData = localStorage.getItem("user");

    if (storedUserData) {
      // Parse JSON data from local storage
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []); // Empty dependency array means this effect runs only on mount

  return (
    <>
      <DynamicHeader HeaderType={HeaderTypes.Checkout} />

      <div>
        <VerticalScrollLayout height="20rem">
          {contextData.map((cartItem) => (
            <CheckoutCartProduct
              id={cartItem.id}
              key={cartItem.id}
              name={cartItem.name}
              price={cartItem.price}
              image={cartItem.image}
              amount={cartItem.amount}
              stock={cartItem.stock}
            />
          ))}
        </VerticalScrollLayout>

        <div className="mt-20">
          <p className="text-2xl font-bold ml-9">Shipping address</p>

          <div className="flex justify-center gap-10 items-center m-5">
            <div>
              <p>Shipping address</p>
              <p>{userData?.address}</p>
            </div>
            <svg
              className="h-8"
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
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
          </div>
          <button
            onClick={openModal}
            className="bg-gray-300 rounded-lg w-32 h-8 ml-9"
          >
            Change
          </button>
        </div>

        <div className="mt-20">
          <div className="pl-10">
            <p className="text-2xl font-bold">Payment</p>
          </div>
          <Link to="/private/payment">
            <button className="bg-black text-white rounded-xl p-3 ml-12 mt-4 w-72   flex justify-around">
              <p className="font-bold">Proceed</p>
            </button>
          </Link>
        </div>

        <CheckoutModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
};

export default CheckoutPage;
