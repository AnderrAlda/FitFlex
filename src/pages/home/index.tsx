import DynamicHeader from "../../components/headers/dynamicHeader";
import { HeaderTypes } from "../../types/headerTypes";

type Props = {};

function HomePage({}: Props) {
  return (
    <>
      <div>
        <DynamicHeader HeaderType={HeaderTypes.Home}></DynamicHeader>
      </div>
    </>
  );
}

export default HomePage;
