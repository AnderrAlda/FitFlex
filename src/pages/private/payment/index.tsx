import { useContext, useEffect, useState } from "react";
import DynamicHeader from "../../../components/headers/dynamicHeader";
import { HeaderTypes } from "../../../types/headerTypes";
import { Link } from "react-router-dom";
import HorizontalScrollLayout from "../../../layouts/horizontalScroll";
import BankCard from "../../../components/bankCard";
import PaymentModal from "../../../components/paymentModal";
import { CartContext } from "../../../context/cartContext";

const initialBankCard: Bank = {
  nameCard: "",
  cardNumber: 0,
  expireDate: "",
  cvv: 0,
};

const PaymentPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [shippingAddress, setShippingAddress] = useState<string>("");
  const [bankCards, setbankCards] = useState<Bank>(initialBankCard);

  const { totalPrice } = useContext(CartContext);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Reload user information from local storage
    const userDataString = localStorage.getItem("user");
    if (userDataString !== null) {
      const userData = JSON.parse(userDataString);
      if (userData && userData.Bank) {
        // Update the bankCards state
        setbankCards(userData.Bank);
      }
    }
    // Close the modal
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Retrieve user information from local storage
    const userDataString = localStorage.getItem("user");
    if (userDataString !== null) {
      const userData = JSON.parse(userDataString);
      if (userData && userData.Bank) {
        // Extract the address from user information
        setShippingAddress(userData.address);
        setbankCards(userData.Bank);
      }
    }
  }, []);

  return (
    <>
      <DynamicHeader HeaderType={HeaderTypes.Payment} />

      <div>
        <div className="mt-5">
          <p className="text-2xl font-bold ml-9">Shipping address</p>

          <div className="flex justify-center gap-10 items-center m-5">
            <div>
              <p>Shipping address</p>
              <p>{shippingAddress}</p>
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

        <div className="mt-10">
          <div className="flex relative">
            <p className="text-2xl font-bold ml-9">Payment</p>

            <button className="mb-5" onClick={openModal}>
              <p className="absolute right-5  text-gray-400">Add new card</p>
              <svg
                className="h-6 absolute right-32  text-gray-400"
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
                  d="M12 4.5v15m7.5-7.5h-15"
                ></path>
              </svg>
            </button>
          </div>

          <div className="ml-9 mt-5">
            <BankCard
              name={bankCards.nameCard}
              number={bankCards.cardNumber}
              expireDate={bankCards.expireDate}
            />
          </div>
        </div>

        <div className="mt-12 flex justify-around">
          <div>
            <p className="text-gray-500">Order</p>
            <p className="text-gray-500 text-lg">Delivery</p>
            <p className="text-gray-500 text-xl">Summary</p>
          </div>
          <div>
            <p className="text-gray-500">{totalPrice}$</p>
            <p className="text-gray-500 text-lg">7.20$</p>
            <p className="text-gray-500 text-xl">{totalPrice + 7.2}$</p>
          </div>
        </div>

        <div className="mt-20">
          <div className="pl-10">
            <p className="text-2xl font-bold">Payment</p>
          </div>
          <Link to="/private/ordered">
            <button className="bg-black text-white rounded-xl p-3 ml-12 mt-4 w-72   flex justify-around">
              <p className="font-bold">Pay</p>
            </button>
          </Link>
        </div>

        <PaymentModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
};

export default PaymentPage;
