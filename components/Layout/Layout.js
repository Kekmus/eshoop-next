import style from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const currentPage = router.pathname.slice(1);

  return (
    <div className={style.layout__wrapper}>
      <div>
        <Header />
        <Navigation currentPage={currentPage.toLocaleLowerCase()} />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
