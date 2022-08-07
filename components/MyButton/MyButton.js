import style from"./MyButton.module.css"

const MyButton = ({text, handleClick}) => {
  return (
    <button
      className={style.button}
      onClick={handleClick}
    >{text}</button>
  )
}

export default MyButton
