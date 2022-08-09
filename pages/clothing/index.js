import Navigation from "../../components/Navigation/Navigation";
import HotDeal from "../../components/HotDeal/HotDeal";
import Newsletter from "../../components/Newsletter/Newsletter";
import ProductsSection from "../../components/ProductsSection/ProductsSection";

const Clothing = () => {
  return (
    <>
      <Navigation
        currentPage={'clothing'}
      />
      <ProductsSection />
      <HotDeal />
      <Newsletter />
    </>
  );
};

export default Clothing;
