import style from "./CartProductCard.module.css";
import Image from "next/image";
import { IconContext } from "react-icons";
import { MdFavoriteBorder } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Counter from "../Counter/Counter"

const CartProductCard = ({ category, name, price, image, rating, id }) => {
  const eyeIcon = (
    <IconContext.Provider value={{ color: "#15161D", size: "30px" }}>
      <FaEye className={style.icon} />
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
          <Counter value={1}/>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
