import React from "react";
import { RogueAlpacaSled } from "../../assets/images";

type Props = {};

const ProductCardVertical = (props: Props) => {
  return (
    <>
      {" "}
      <div className="bg-red-100 w-40 h-42 rounded-2xl mt-4">
        <img
          className="w-40 h-40 object-cover p-3 rounded-3xl"
          src={RogueAlpacaSled}
          alt="RogueAlpacaSled"
        />
        <div className="ml-3 mb-2">
          <p>Rogue Alpaca Sled</p>
          <p>USD 312</p>
        </div>
      </div>
    </>
  );
};

export default ProductCardVertical;
