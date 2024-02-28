import { useState, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface User {
  id?: number;
  name?: string;
  password?: string;
  email?: string;
  rol?: string;
  wishlist?: Product[];
  address?: string; // Adding address property to User interface
}

const CheckoutModal = ({ isOpen, onClose }: ModalProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(isOpen);
  const [streetName, setStreetName] = useState<string>("");
  const [streetNumber, setStreetNumber] = useState<string>("");
  const [apartment, setApartment] = useState<string>("");

  // Function to reset input states to initial values
  const resetInputs = () => {
    setStreetName("");
    setStreetNumber("");
    setApartment("");
  };

  const closeModal = () => {
    resetInputs();
    setIsVisible(false);
    onClose();
  };

  // Update isVisible state when isOpen prop changes
  useEffect(() => {
    setIsVisible(isOpen);
    // Reset inputs when modal is closed
    if (!isOpen) {
      resetInputs();
    }
  }, [isOpen]);

  // Load user data from localStorage
  const user: User = JSON.parse(localStorage.getItem("user") || "{}");

  // Function to handle address change
  const handleChangeAddress = () => {
    // Update address in user object
    const updatedUser = {
      ...user,
      address: `${streetName} ${streetNumber} ${apartment}`,
    };
    // Update user data in localStorage
    localStorage.setItem("user", JSON.stringify(updatedUser));
    // Close modal
    closeModal();
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="fixed bottom-0 w-full bg-white rounded-t-3xl p-8 z-50 h-1/2 overflow-y-auto">
            <div className="flex justify-end">
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={closeModal}
              >
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
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="">
              {/* Modal content goes here */}
              <h2 className="text-2xl font-bold mb-4">Change address</h2>
              <p className="text-gray-500">Street name</p>
              <input
                type="text"
                name="StreetName"
                autoComplete="off"
                className="block w-full p-2 mb-2 border border-gray-300  rounded-xl"
                value={streetName}
                onChange={(e) => setStreetName(e.target.value)}
              />
              <p className="text-gray-500">Street number</p>
              <input
                type="text"
                name="StreetNumber"
                autoComplete="off"
                className="block w-full p-2 mb-2 border border-gray-300  rounded-xl"
                value={streetNumber}
                onChange={(e) => setStreetNumber(e.target.value)}
              />
              <p className="text-gray-500">Apartment, Floor, or Door Number</p>
              <input
                type="text"
                name="Apartment"
                autoComplete="off"
                className="block w-full p-2 mb-2 border border-gray-300  rounded-xl"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
              />
              <button
                onClick={handleChangeAddress}
                className="bg-black text-white rounded-xl p-3 ml-4 mt-4 w-72   flex justify-around"
              >
                <p className="font-bold">Change </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutModal;
