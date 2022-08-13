import style from "./CartProductCard.module.css";
import Image from "next/image";
import { IconContext } from "react-icons";
import { MdFavoriteBorder } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import Counter from "../Counter/Counter"
import { useDispatch } from "react-redux";
import { addToFavorites, reduceCountProductInCart, addToCart, delFromCart } from "../../features/productsSlice";

const CartProductCard = ({ category, name, price, image, id, count }) => {
  const dispatch = useDispatch()

  const eyeIcon = (
    <IconContext.Provider value={{ color: "#15161D", size: "30px" }}>
      <GrClose
        className={style.icon}
        onClick={(e) => {
          dispatch(delFromCart(id));
        }}
      />
    </IconContext.Provider>
  );

  const favoriteIcon = (
    <IconContext.Provider value={{ color: "#15161D", size: "30px" }}>
      <MdFavoriteBorder
        className={style.icon}
        onClick={(e) => {
          dispatch(addToFavorites(id));
        }}
      />
    </IconContext.Provider>
  );

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
            {favoriteIcon}
            {eyeIcon}
          </div>
        </div>
        <div className={style.productCard__price__section}>
          <h4 className={style.product__price}>${price}</h4>
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
