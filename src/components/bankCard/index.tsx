import React from "react";

const BankCard = () => {
  return (
    <>
      <div className="bg-red-400 rounded-2xl w-80 mt-5">
        <p className="ml-10 text-2xl mb-5 text-white">VISA</p>
        <div className="flex gap-3 justify-between mx-10">
          <p className="text-gray-300">●●●●●●●●●●●●●●</p>
          <p className="text-white">3293</p>
        </div>
        <div className="flex justify-between mx-10 mt-5">
          <div>
            <p className="text-xs text-gray-300">Card Holder</p>
            <p className="text-white">Mikel Olariaga</p>
          </div>
          <div>
            <p className="text-xs text-gray-300">Expires</p>
            <p className="text-white mb-5">12/23</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankCard;
