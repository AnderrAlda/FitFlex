import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

interface StaticAsset {
  Image: string;
}
type Image = StaticAsset | string;

type Props = {
  id: string;
  name: string;
  price: number;
  amount: number;
  image: Image;
  stock: number;
};

const CheckoutCartProduct = ({
  id,
  name,
  price,
  image,
  amount,
  stock,
}: Props) => {
  let src: string; // Define a variable to hold the src value

  if (typeof image === "string") {
    // If img is a string, directly assign it to src
    src = image;
  } else {
    // If img is an object of type StaticAsset, choose one of its properties as src
    src = image.Image; // You may need to handle other cases here based on your requirements
  }

  return (
    <>
      {" "}
      <div className="flex">
        <img
          className="w-36 h-36 object-cover p-3 rounded-3xl mt-4"
          src={src}
          alt="RogueAlpacaSled"
        />
        <div className="mt-8 ml-3">
          <p>{name}</p>
          <p className="font-bold">USD {price * amount}</p>
          <p className="text-gray-400">Each item price: {price} $</p>
          <p className="text-gray-400">Amount of items: {amount}</p>
        </div>
      </div>
    </>
  );
};

export default CheckoutCartProduct;
