import HomeHeader from "../homeHeader";
import { HeaderTypes } from "../../../types/headerTypes";
import CartHeader from "../cartHeader";
import ProductHeader from "../productHeader";
import CheckoutHeader from "../checkoutHeader";
import PaymentHeader from "../paymentHeader";
import ProductsHeader from "../productsHeader";
import AdminHeader from "../adminHeader";

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
    case HeaderTypes.Payment:
      HeaderComponent = PaymentHeader;
      break;
    case HeaderTypes.Products:
      HeaderComponent = ProductsHeader;
      break;
    case HeaderTypes.Products:
      HeaderComponent = ProductsHeader;
      break;
    case HeaderTypes.Admin:
      HeaderComponent = AdminHeader;
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
