import style from"./TimerCircles.module.css"
import TimerCircle from "../TimerCircle/TimerCircle"

const TimerCircles = () => {
  return (
    <div className={style.timerCircles__wrapper}>
      <TimerCircle
        number={2}
        text={"Days"}
      />
      <TimerCircle
        number={10}
        text={"Hours"}
      />
      <TimerCircle
        number={34}
        text={"Mins"}
      />
      <TimerCircle
        number={59}
        text={"Secs"}
      />
    </div>
  )
}


export default TimerCircles
