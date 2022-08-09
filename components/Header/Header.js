import style from"./Header.module.css"
import MyInput from "../MyInput/MyInput"
import Circle from "../Circle/Circle"
import DropdownToggle from "../DropdownToggle/DropdownToggle"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { IconContext } from "react-icons";
import { MdFavoriteBorder } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux"
import { setSearchQuery } from "../../features/productsSlice"

const Header = () => {
  const favoritesLength = useSelector(state => state.products.favorites.length)
  const cartLength = useSelector(state => state.products.cart.length)
  const searchQuery = useSelector(state => state.products.searchQuery)
  const dispatch = useDispatch()


  const cartIcon = (
    <IconContext.Provider value={{ color: "white", size: "20px"}}>
      <AiOutlineShoppingCart />
    </IconContext.Provider>
  )

  const favoriteIcon = (
    <IconContext.Provider value={{ color: "white", size: "20px"}}>
      <MdFavoriteBorder />
    </IconContext.Provider>
  )

  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <h1 className={style.logo}>
          e-shooop
          <Circle
            top={5}
            left={0}
            size={15}
          />
        </h1>
        <MyInput
          hasBorder={false}
          placeholder={'Search...'}
          value={searchQuery}
          onChange={(e) => {dispatch(
            setSearchQuery(e.target.value)
          )}}
        />
        <div className={style.dropdownToggle__wrapper}>
          <DropdownToggle
            text={'Your Wishlist'}
            inner={favoritesLength}
            icon={favoriteIcon}
          />
          <DropdownToggle
            text={'Your Cart'}
            inner={cartLength}
            icon={cartIcon}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
