import Navigation from "../components/Navigation/Navigation";
import HotDeal from "../components/HotDeal/HotDeal";
import Newsletter from "../components/Newsletter/Newsletter";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { setCurrentPage } from "../store/productsSlice"


const Jewelery = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCurrentPage("Jewelery"))
  }, [dispatch])

  return (
    <>
      <Navigation />
      <ProductsSection />
      <HotDeal />
      <Newsletter />
    </>
  );
};

export default Jewelery;
