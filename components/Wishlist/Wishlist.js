import style from "./Wishlist.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const Wishlist = () => {
  const products = useSelector((state) => state.products.products);
  const favorites = useSelector((state) => state.products.favorites);

  const favoritesProducts = useMemo(() => {
    return [...products].filter((a) => {
      return favorites.indexOf(a.id) !== -1;
    });
  }, [favorites, products]);

  return (
    <div className={style.wishlist__wrapper}>
      <div className={style.wishlist__header}>Wishlist</div>
      <div className={style.wishlist__cards__wrapper}>
        {favoritesProducts.map((product) => (
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
    </div>
  );
};

export default Wishlist;
