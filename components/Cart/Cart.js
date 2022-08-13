import style from "./Cart.module.css";
import CartProductCard from "../CartProductCard/CartProductCard";
import TotalCartAmount from "../TotalCartAmount/TotalCartAmount"
import { useSelector } from "react-redux";
import { useMemo } from "react";

const Cart = () => {
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.products.cart);

  const cartProducts = useMemo(() => {
    return [...products].filter((a) => {
      return cart[a.id];
    });
  }, [cart, products]);

  const totalAmount = useMemo(() => {
    return [...cartProducts].reduce((a, b) => {
        return a + b.price * cart[b.id]
      }, 0)
  }, [cartProducts, cart]);

  const totalCount = useMemo(() => {
    return [...cartProducts].reduce((a, b) => {
        return a + cart[b.id]
      }, 0)
  }, [cartProducts, cart]);


  return (
    <div className={style.cart__wrapper}>
      <div className={style.cart__header}>Cart</div>
      <div className={style.cart__content}>
        <div className={style.cart__card__section}>
          <hr size="2" width="100%" color="#D10024" />
          <div className={style.cart__cards__wrapper}>
            {cartProducts.map((product) => (
              <CartProductCard
                category={product.category}
                name={product.title}
                price={product.price}
                key={product.id}
                image={product.image}
                id={product.id}
                count={cart[product.id]}
              />
            ))}
          </div>
        </div>
        <div className={style.cart__total__section}>
          <TotalCartAmount
            totalAmount={totalAmount.toFixed(1)}
            totalCount={totalCount}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
