import style from "./Counter.module.css";

const Counter = ({value}) => {
  return (
    <div className={style.counter__wrapper}>
      <div className={style.counter__minus}>-</div>
      <div className={style.counter__value}>{value}</div>
      <div className={style.counter__plus}>+</div>
    </div>
  )
}

export default Counter
