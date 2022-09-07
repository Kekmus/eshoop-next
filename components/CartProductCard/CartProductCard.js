import style from "./CartProductCard.module.css";
import Image from "next/image";
import { MdClear } from "react-icons/md";
import Counter from "../Counter/Counter";
import { useDispatch } from "react-redux";
import {
  reduceCountProductInCart,
  addToCart,
  delFromCart,
} from "../../features/productsSlice";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";

const CartProductCard = ({ category, name, price, image, id, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.productCard__wrapper}>
      <div className={style.productCard__content__wrapper}>
        <div className={style.productCard__image__section}>
          <Image
            src={image}
            width="120px"
            height="120px"
            alt={`product ${id}`}
            objectFit="contain"
            layout="fixed"
          />
        </div>
        <div className={style.productCard__info__section}>
          <div>
            <p className={style.product__name}>{name}</p>
            <p className={style.product__category}>{category}</p>
          </div>
          <div className={style.card__icons__wrapper}>
            <FavoriteIcon id={id} />
            <MdClear
              className={style.cross__icon}
              onClick={(e) => {
                dispatch(delFromCart(id));
              }}
            />
          </div>
        </div>
        <div className={style.productCard__price__section}>
          <div className={style.onlyPrice__section}>
            <p className={style.product__totalPrice}>${(price * count).toFixed(1)}</p>
            <p className={style.product__price}>${price}/per one item</p>
          </div>
          <Counter
            value={count}
            handleMinus={(e) => {
              dispatch(reduceCountProductInCart(id));
            }}
            handlePlus={(e) => {
              dispatch(addToCart(id));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
