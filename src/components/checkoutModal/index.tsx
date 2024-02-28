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

  // Update isVisible state when isOpen prop changes
  useEffect(() => {
    setIsVisible(isOpen);
    // Reset inputs when modal is closed
    if (!isOpen) {
      resetInputs();
    }
  }, [isOpen]);

  const closeModal = () => {
    setIsVisible(false);
    onClose();
  };

  // Function to handle processing and clear inputs
  const handleProcess = () => {
    // Add logic to process data here
    // After processing, clear the inputs
    resetInputs();
    // Close the modal
    closeModal();
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

  // Function to update user's address
  const updateUserAddress = async () => {
    try {
      const newAddress = `${streetName}, ${streetNumber}, ${apartment}`;
      // Modify the address property of the user object
      const updatedUser = {
        ...userData,
        address: newAddress,
      };

      const response = await fetch(`http://localhost:3000/data`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ users: [updatedUser] }), // Send the updated user object within the 'users' array
      });
      if (!response.ok) {
        throw new Error("Failed to update user address");
      }
      // Assuming the update was successful, update the user data in state
      setUserData(updatedUser);
      // Close modal after successful update
      handleProcess();
    } catch (error) {
      console.error("Error updating user address:", error);
    }
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
                className="bg-black text-white rounded-xl p-3 ml-4 mt-4 w-72   flex justify-around"
                onClick={updateUserAddress}
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
