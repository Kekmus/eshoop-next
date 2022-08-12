import Navigation from "../../components/Navigation/Navigation";
import HotDeal from "../../components/HotDeal/HotDeal";
import Newsletter from "../../components/Newsletter/Newsletter";
import Wishlist from "../../components/Wishlist/Wishlist";

const WishlistPage = () => {
  return (
    <>
      <Navigation
        currentPage={''}
      />
      <Wishlist />
    </>
  );
};

export default WishlistPage;
