import style from "./InfoEyeIcon.module.css";
import { MdRemoveRedEye } from "react-icons/md";

const InfoEyeIcon = () => {
  return (
    <button>
      <MdRemoveRedEye className={style.eye__icon} />
    </button>
  )
}

export default InfoEyeIcon
