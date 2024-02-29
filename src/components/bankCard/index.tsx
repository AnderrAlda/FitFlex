import React from "react";

interface Props {
  name: string;
  number: number;
  expireDate: string;
}

const BankCard = ({ name, number, expireDate }: Props) => {
  // Check if any of the props are undefined, and provide default values if needed
  name = name || "";
  number = number || 0;
  expireDate = expireDate || "";

  return (
    <>
      <div className="bg-red-400 rounded-2xl w-80 mt-5">
        <p className="ml-10 text-2xl mb-5 text-white">VISA</p>
        <div className="flex gap-3 justify-between mx-10">
          <p className="text-gray-300">●●●●●●●●●●●●●●</p>
          <p className="text-white">{String(number).slice(-4)}</p>
        </div>
        <div className="flex justify-between mx-10 mt-5">
          <div>
            <p className="text-xs text-gray-300">Card Holder</p>
            <p className="text-white">{name}</p>
          </div>
          <div>
            <p className="text-xs text-gray-300">Expires</p>
            <p className="text-white mb-5">{expireDate}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankCard;
