import style from "./Navigation.module.css";
import Link from "next/link";

const Navigation = ({ currentPage }) => {
  return (
    <>
      <hr size="2" width="100%" color="#D10024" />
      <nav className={style.navigation}>
        <Link href="/">
          <a
            className={
              currentPage === "home"
                ? style.navigation__active
                : style.navigation__link
            }
          >
            Home
          </a>
        </Link>
        <Link href="/clothing">
          <a
            className={
              currentPage === "clothing"
                ? style.navigation__active
                : style.navigation__link
            }
          >
            Clothing
          </a>
        </Link>
        <Link href="/jewelery">
          <a
            className={
              currentPage === "jewelery"
                ? style.navigation__active
                : style.navigation__link
            }
          >
            Jewelery
          </a>
        </Link>
        <Link href="/electronics">
          <a
            className={
              currentPage === "electronics"
                ? style.navigation__active
                : style.navigation__link
            }
          >
            Electronics
          </a>
        </Link>
      </nav>
      <hr size="2" width="100%" color="#D9D9D9" />
    </>
  );
};

export default Navigation;
