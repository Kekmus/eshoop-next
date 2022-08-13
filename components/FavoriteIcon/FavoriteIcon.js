import style from "./FavoriteIcon.module.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, delFromFavorites } from "../../features/productsSlice";

const FavoriteIcon = ({ id }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.products.favorites);
  const active = favorites.indexOf(id) != -1

  return (
    <>
      {active ? (
        <MdFavorite
          className={style.active__icon}
          onClick={(e) => {
            dispatch(delFromFavorites(id))
          }}
        />
      ) : (
        <MdFavoriteBorder
          className={style.unactive__icon}
          onClick={(e) => {
            dispatch(addToFavorites(id));
          }}
        />
      )}
    </>
  );
};

export default FavoriteIcon;
