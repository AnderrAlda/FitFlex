import DynamicHeader from "../../components/headers/dynamicHeader";
import SearchBar from "../../components/searchBar";
import { HeaderTypes } from "../../types/headerTypes";

type Props = {};

function HomePage({}: Props) {
  return (
    <>
      <DynamicHeader HeaderType={HeaderTypes.Home}></DynamicHeader>

      <div className="mt-5 ">
        <p className="font-bold pl-3">Hi, Ander</p>
        <p
          className="font-bold text-4xl leading-27 p-3 pt-0
        "
        >
          What are you looking for today?
        </p>
      </div>

      <SearchBar></SearchBar>
    </>
  );
}

export default HomePage;
