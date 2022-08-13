import style from"./HotDeal.module.css"
import Image from "next/image"
import TimerCircles from "../TimerCircles/TimerCircles"
import MyButton from "../MyButton/MyButton"

const HotDeal = () => {
  return (
    <div className={style.hotDeal__wrapper}>
      <div className={style.bgWrap}>
        <Image
          alt="Hotdeal"
          src="/hotdeal.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className={style.hotDeal__content__wrapper}>
        <TimerCircles />
        <h2 className={style.hotDeal__heading}>hot deal this week</h2>
        <p className={style.hotDeal__text}>New Collection Up to 50% OFF</p>
        <MyButton
          text = {'Shop now'}
        />
      </div>
    </div>
  )
}

export default HotDeal
