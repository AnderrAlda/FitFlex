import React, { useEffect, useState } from "react";
import DynamicHeader from "../../../components/headers/dynamicHeader";
import { HeaderTypes } from "../../../types/headerTypes";
import Logout from "../../../components/logout";
import { changeDiscount, getDiscount } from "../../../services/auth.service";

const Dashboard = () => {
  const [discount, setDiscount] = useState<number>(0);

  const handleDiscountChange = async () => {
    try {
      await changeDiscount(discount);
      alert("Discount updated successfully!");
    } catch (error) {
      console.error("Error updating discount:", error);
      alert("Failed to update discount. Please try again.");
    }
  };

  // Define an async function to fetch the discount
  const fetchDiscount = async () => {
    try {
      // Call getDiscount function to fetch the discount
      const discountData = await getDiscount();
      // Set the discount state with the fetched discount value
      setDiscount(discountData);
    } catch (error) {
      console.error("Error fetching discount:", error);
    }
  };

  // Call fetchDiscount function when the component mounts
  useEffect(() => {
    fetchDiscount();
  }, []);

  return (
    <>
      <DynamicHeader HeaderType={HeaderTypes.Admin} />

      <div className="bg-black rounded-lg w-40 flex justify-center items-center mt-10 ml-5">
        <Logout />
      </div>
      <div className="mt-40">
        <h2 className="text-2xl font-bold mb-4">Change Discount</h2>
        <p className="text-gray-500">Discount:</p>
        <input
          type="text"
          name="StreetName"
          autoComplete="off"
          className="block   p-2 mb-2 border border-gray-300  rounded-xl  ml-20"
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
        />

        <button
          className="bg-black text-white rounded-xl p-3 ml-12 mt-4 w-72   flex justify-around"
          onClick={handleDiscountChange}
        >
          <p className="font-bold">Change</p>
        </button>
      </div>
    </>
  );
};

export default Dashboard;
