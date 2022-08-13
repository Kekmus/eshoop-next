import style from "./Header.module.css";
import MyInput from "../MyInput/MyInput";
import Circle from "../Circle/Circle";
import DropdownToggle from "../DropdownToggle/DropdownToggle";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../../features/productsSlice";
import Link from "next/link";

const Header = () => {
  const favoritesLength = useSelector(
    (state) => state.products.favorites.length
  );
  const cartLength = useSelector((state) => Object.keys(state.products.cart).length);
  const searchQuery = useSelector((state) => state.products.searchQuery);
  const dispatch = useDispatch();

  const cartIcon = (
    <MdOutlineShoppingCart className={style.header__icon}/>
  );

  const favoriteIcon = (
    <MdFavoriteBorder className={style.header__icon}/>
  );

  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <h1 className={style.logo}>
          e-shooop
          <Circle top={0} left={0} size={15} />
        </h1>
        <MyInput
          hasBorder={false}
          placeholder={"Search..."}
          value={searchQuery}
          onChange={(e) => {
            dispatch(setSearchQuery(e.target.value));
          }}
        />
        <div className={style.dropdownToggle__wrapper}>
          <Link href="/wishlist">
            <a className={style.header__link}>
              <DropdownToggle
                text={"Your Wishlist"}
                inner={favoritesLength}
                icon={favoriteIcon}
              />
            </a>
          </Link>
          <Link href="/cart">
            <a className={style.header__link}>
              <DropdownToggle
                text={"Your Cart"}
                inner={cartLength}
                icon={cartIcon}
              />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
