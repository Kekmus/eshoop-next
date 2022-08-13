import style from "./TotalCartAmount.module.css";
import MyButton from "../MyButton/MyButton";

const TotalCartAmount = ({ totalAmount, totalCount }) => {
  return (
    <div className={style.totalCartAmount__wrapper}>
      <p className={style.countProducts__section}>Items ({totalCount})</p>
      <div className={style.totalAmount_section}>
        <p className={style.totalAmount_section__text}> Subtotal </p>
        <p  className={style.totalAmount_section__price}> {totalAmount} $</p>
      </div>
      <div className={style.totalAmount__button}>
        <MyButton
          text="take delivery"
          handleClick={(e) => {
            console.log(12345678);
          }}
        />
      </div>
    </div>
  );
};

export default TotalCartAmount;
