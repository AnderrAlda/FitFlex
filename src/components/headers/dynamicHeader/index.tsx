import HomeHeader from "..";
import { HeaderTypes } from "../../../types/headerTypes";
import CartHeader from "../cartHeader";

type Props = {
  HeaderType: HeaderTypes;
};

const DynamicHeader = (props: Props) => {
  let HeaderComponent: React.ComponentType<any>;

  switch (props.HeaderType) {
    case HeaderTypes.Home:
      HeaderComponent = HomeHeader;
      break;
    case HeaderTypes.Cart:
      HeaderComponent = CartHeader;
      break;
    default:
      HeaderComponent = HomeHeader;
  }

  return (
    <div>
      <HeaderComponent HeaderTypes={props.HeaderType}></HeaderComponent>
    </div>
  );
};

export default DynamicHeader;
