import { RogueAlpacaSled } from "../../assets/images";
import { Link } from "react-router-dom";
type Props = {};

const ProductCardHorizontal = (props: Props) => {
  return (
    <>
      <div className="bg-red-100 mt-10 rounded-2xl flex w-80">
        <div className="  mt-4 mb-4">
          <p className="text-3xl font-bold ml-3">Rogue Dog Slice 1.2</p>
          <Link to="/product/RogueDogSlice1.2">
            <div className="flex gap-3 mt-3 mb-3 align-middle items-center">
              <p className="underline text-center ml-3 ">Shop now</p>
              <svg
                className="w-6 "
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
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
        <img
          className="w-36 h-36 object-cover p-3 rounded-3xl mt-4"
          src={RogueAlpacaSled}
          alt="RogueAlpacaSled"
        />
      </div>
    </>
  );
};

export default ProductCardHorizontal;
