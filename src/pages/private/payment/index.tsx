import { useState } from "react";
import DynamicHeader from "../../../components/headers/dynamicHeader";
import { HeaderTypes } from "../../../types/headerTypes";
import { Link } from "react-router-dom";
import HorizontalScrollLayout from "../../../layouts/horizontalScroll";
import BankCard from "../../../components/bankCard";
import PaymentModal from "../../../components/paymentModal";

const PaymentPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <DynamicHeader HeaderType={HeaderTypes.Payment} />

      <div>
        <div className="mt-10">
          <p className="text-2xl font-bold ml-9">Shipping address</p>

          <div className="flex justify-center gap-10 items-center m-5">
            <div>
              <p>Shipping address</p>
              <p>Endaia plaza 3 1.izq</p>
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
            <HorizontalScrollLayout>
              <BankCard />
              <BankCard />
              <BankCard />
            </HorizontalScrollLayout>
          </div>
        </div>

        <div className="mt-12 flex justify-around">
          <div>
            <p className="text-gray-500">Order</p>
            <p className="text-gray-500 text-lg">Delivery</p>
            <p className="text-gray-500 text-xl">Summary</p>
          </div>
          <div>
            <p className="text-gray-500">580.00$</p>
            <p className="text-gray-500 text-lg">7.20$</p>
            <p className="text-gray-500 text-xl">587.20$</p>
          </div>
        </div>

        <div className="mt-20">
          <div className="pl-10">
            <p className="text-2xl font-bold">Payment</p>
          </div>
          <Link to="/private/checkout">
            <button className="bg-black text-white rounded-xl p-3 ml-12 mt-4 w-72   flex justify-around">
              <p className="font-bold">Proceed</p>
            </button>
          </Link>
        </div>

        <PaymentModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
};

export default PaymentPage;
