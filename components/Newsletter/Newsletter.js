import style from "./Newsletter.module.css"
import MyInput from "../MyInput/MyInput"


const Newsletter = () => {
  return (
    <>
      <hr size="8" width="100%" color="#D10024"/>
      <div className={style.Newsletter__wrapper}>
        <p className={style.Newsletter__text}>Sign Up for the <strong>NEWSLETTER</strong></p>
        <MyInput
          hasBorder={true}
          placeholder={'Enter Your Email'}
        />
      </div>
      <hr size="8" width="100%" color="#D10024"/>
    </>
  )
}

export default Newsletter
