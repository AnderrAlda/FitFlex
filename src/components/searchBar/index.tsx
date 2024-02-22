type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="flex justify-center mt-8  ">
      <div className="relative">
        <svg
          className="absolute top-1/2 left-4 transform -translate-y-1/2 w-8 h-8 text-black"
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          ></path>
        </svg>
        <input
          type="text"
          placeholder="Search dumbell"
          className="pl-12 pr-4 py-5 border border-black rounded-2xl text-sm w-80 text-black placeholder-gray"
        />
      </div>
    </div>
  );
};

export default SearchBar;
