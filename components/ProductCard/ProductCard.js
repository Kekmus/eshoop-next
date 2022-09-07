import style from "./ProductCard.module.css";
import Image from "next/image";
import MyButton from "../MyButton/MyButton";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import InfoEyeIcon from "../InfoEyeIcon/InfoEyeIcon"
import { useDispatch} from "react-redux";
import { addToCart } from "../../features/productsSlice";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";

const ProductCard = ({ category, name, price, image, rating, id }) => {
  const dispatch = useDispatch();

  const stars = [];
  for (let i = 0; i < Math.round(rating); i++) {
    stars.push(<AiFillStar className={style.star__icon} key={i}/>);
  }
  for (let i = 5; i > Math.round(rating); i--) {
    stars.push(<AiOutlineStar className={style.star__icon} key={i}/>);
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
            text="Add To Cart"
            handleClick={(e) => {
              dispatch(addToCart(id));
            }}
          />
          <InfoEyeIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
