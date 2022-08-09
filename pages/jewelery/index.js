import Navigation from "../../components/Navigation/Navigation";
import HotDeal from "../../components/HotDeal/HotDeal";
import Newsletter from "../../components/Newsletter/Newsletter";
import ProductsSection from "../../components/ProductsSection/ProductsSection";

const Jewelery = () => {
  return (
    <>
      <Navigation
        currentPage={'jewelery'}
      />
      <ProductsSection />
      <HotDeal />
      <Newsletter />
    </>
  );
};

export default Jewelery;
