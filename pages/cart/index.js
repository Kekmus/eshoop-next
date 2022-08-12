import Navigation from "../../components/Navigation/Navigation";
import HotDeal from "../../components/HotDeal/HotDeal";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cart from "../../components/Cart/Cart";

const CartPage = () => {
  return (
    <>
      <Navigation
        currentPage={''}
      />
      <Cart />
    </>
  );
};

export default CartPage;
