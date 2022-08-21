import style from "./Footer.module.css";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <a
        className={style.github__link}
        target="_blank"
        href="https://github.com/Kekmus/eshoop-next"
        rel="noreferrer"
      >
        <AiFillGithub className={style.github__icon} />
        <p className={style.github__text}>
          Github
        </p>
      </a>
    </footer>
  );
};

export default Footer;
