import style from "./ProductCard.module.css";
import Image from "next/image";
import MyButton from "../MyButton/MyButton";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import { MdFavoriteBorder } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, addToCart } from "../../features/productsSlice";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";

const ProductCard = ({ category, name, price, image, rating, id }) => {
  const dispatch = useDispatch();

  const fillStarIcon = (
    <IconContext.Provider value={{ color: "#D10024", size: "15px" }}>
      <AiFillStar className={style.icon} />
    </IconContext.Provider>
  );

  const outlineStarIcon = (
    <IconContext.Provider value={{ color: "#D10024", size: "15px" }}>
      <AiOutlineStar className={style.icon} />
    </IconContext.Provider>
  );

  const eyeIcon = (
    <IconContext.Provider value={{ color: "#15161D", size: "30px" }}>
      <FaEye className={style.icon} />
    </IconContext.Provider>
  );
  //   <IconContext.Provider value={{ color: "#15161D", size: "30px" }}>
  //     <MdFavoriteBorder
  //       className={style.icon}
  //       onClick={(e) => {
  //         dispatch(addToFavorites(id));
  //       }}
  //     />
  //   </IconContext.Provider>
  // );

  const stars = [];
  for (let i = 0; i < Math.round(rating); i++) {
    stars.push(fillStarIcon);
  }
  for (let i = 0; i < 5 - Math.round(rating); i++) {
    stars.push(outlineStarIcon);
  }

  return (
    <div className={style.productCard__wrapper}>
      <div>
        <Image
          src={image}
          width="350px"
          height="350px"
          alt={`product ${id}`}
          objectFit="contain"
          layout="fixed"
        />
      </div>
      <div className={style.productCard__body}>
        <p className={style.product__category}>{category}</p>
        <h3 className={style.product__name}>{name}</h3>
        <h4 className={style.product__price}>${price}</h4>
        <div className={style.product__rating}>{stars}</div>
        <div className={style.card__icons__wrapper}>
          <FavoriteIcon
            id={id}
          />
          <MyButton
            text="Add To Card"
            handleClick={(e) => {
              dispatch(addToCart(id));
            }}
          />
          {eyeIcon}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
