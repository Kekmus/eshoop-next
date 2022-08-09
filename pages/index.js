import Navigation from "../components/Navigation/Navigation";
import HotDeal from "../components/HotDeal/HotDeal";
import Newsletter from "../components/Newsletter/Newsletter";
import ProductsSection from "../components/ProductsSection/ProductsSection";

const Home = () => {

  return (
    <>
      <Navigation
        currentPage={'home'}
      />
      <ProductsSection />
      <HotDeal />
      <Newsletter />
    </>
  );
};

export default Home;
