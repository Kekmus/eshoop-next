import style from"./TimerCircle.module.css"
import Circle from "../Circle/Circle"

const TimerCircle = ({number, text}) => {
  return (
    <Circle
      top = {0}
      left = {0}
      size = {100}
      inner = {
        <>
          <strong>{number}</strong>
          <div>{text}</div>
        </>
      }
    />
  )
}

export default TimerCircle
