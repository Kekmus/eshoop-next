import style from "./ProductsSection.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { getProducts } from "../../store/productsSlice";

const ProductsSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products.products);
  const currentPage = useSelector((state) =>
    state.products.currentPage.toLowerCase()
  );
  const searchQuery = useSelector((state) => state.products.searchQuery);

  const sortedProducts = useMemo(() => {
    switch (currentPage) {
      case "home":
        return products;
      case "clothing":
        return [...products].filter((a) => {
          return (
            a.category === "men's clothing" || a.category === "women's clothing"
          );
        });
      default:
        return [...products].filter((a) => {
          return a.category === currentPage;
        });
    }
  }, [currentPage, products]);

  const sortedSerchedproducts = useMemo(() => {
    return sortedProducts.filter((product) => {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery, sortedProducts]);

  return (
    <div className={style.productsSection__wrapper}>
      {sortedSerchedproducts.map((product) => (
        <ProductCard
          category={product.category}
          name={product.title}
          price={product.price}
          key={product.id}
          image={product.image}
          rating={product.rating.rate}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default ProductsSection;
