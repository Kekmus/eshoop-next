import style from "./Navigation.module.css"
import Link from "next/link"
import { useSelector} from "react-redux"

const Navigation = () => {
  const currentPage = useSelector(state => state.products.currentPage)

  return (
    <>
      <hr size="2" width="100%" color="#D10024"/>
      <nav className={style.navigation}>
        <Link href="\"><a className={`${style.navigation__link} ${currentPage === "Home" ? style.navigation__active : ''}`}>Home</a></Link>
        <Link href="\Clothing"><a className={`${style.navigation__link} ${currentPage === "Clothing" ? style.navigation__active : ''}`}>Clothing</a></Link>
        <Link href="\Jewelery"><a className={`${style.navigation__link} ${currentPage === "Jewelery" ? style.navigation__active : ''}`}>Jewelery</a></Link>
        <Link href="\Electronics"><a className={`${style.navigation__link} ${currentPage === "Electronics" ? style.navigation__active : ''}`}>Electronics</a></Link>
      </nav>
      <hr size="2" width="100%" color="#D9D9D9"/>
    </>
  )
}

export default Navigation
