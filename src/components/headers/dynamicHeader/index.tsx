import HomeHeader from "../homeHeader";
import { HeaderTypes } from "../../../types/headerTypes";
import CartHeader from "../cartHeader";
import ProductHeader from "../productHeader";
import CheckoutHeader from "../checkoutHeader";

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
    case HeaderTypes.Product:
      HeaderComponent = ProductHeader;
      break;
    case HeaderTypes.Checkout:
      HeaderComponent = CheckoutHeader;
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
