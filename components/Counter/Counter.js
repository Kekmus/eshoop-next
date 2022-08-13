import style from "./Counter.module.css";

const Counter = ({value, handleMinus, handlePlus}) => {
  return (
    <div className={style.counter__wrapper}>
      <div className={style.counter__minus} onClick={handleMinus}>-</div>
      <div className={style.counter__value}>{value}</div>
      <div className={style.counter__plus} onClick={handlePlus}>+</div>
    </div>
  )
}

export default Counter
