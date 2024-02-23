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

const ShoppingCartProduct = ({
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
  const { addToCart } = useContext(CartContext);
  const { removeToCart } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);
  const handleIncrement = () => {
    // Call the addToCart function with the updated amount
    addToCart({ id, name, price, image, amount: amount + 1, stock });
  };

  const handleDicrease = () => {
    // Call the addToCart function with the updated amount
    removeToCart({ id, name, price, image, amount: amount + 1, stock });
  };

  const handleRemove = () => {
    // Call the addToCart function with the updated amount
    removeFromCart({ id, name, price, image, amount: amount + 1, stock });
  };

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
          <p className="font-bold">USD {price}</p>
          <div className="flex gap-3 mt-3">
            <button onClick={handleIncrement}>
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
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                ></path>
              </svg>
            </button>
            <p className="text-xl">{amount}</p>
            <button onClick={handleDicrease}>
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
                  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                ></path>
              </svg>
            </button>
            <button onClick={handleRemove}>
              <svg
                className="h-8 ml-12 "
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
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartProduct;
