import { Link } from "react-router-dom";

type Props = {};

const PaymentHeader = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center relative">
        <Link to="/private/checkout">
          {" "}
          <svg
            className="h-8 absolute left-5 mt-4"
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
              d="M15.75 19.5 8.25 12l7.5-7.5"
            ></path>
          </svg>
        </Link>

        <p className="mt-4 text-xl font-bold">Payment</p>
      </div>
    </div>
  );
};

export default PaymentHeader;
