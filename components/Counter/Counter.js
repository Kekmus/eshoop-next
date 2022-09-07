import style from "./Counter.module.css";

const Counter = ({value, handleMinus, handlePlus}) => {
  return (
    <div className={style.counter__wrapper}>
      <button className={style.counter__minus} onClick={handleMinus}>-</button>
      <div className={style.counter__value}>{value}</div>
      <button className={style.counter__plus} onClick={handlePlus}>+</button>
    </div>
  )
}

export default Counter
