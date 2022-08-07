import style from"./Dropdown.module.css"

const Dropdown = () => {
  return (
    <div className={style.dropdown__wrapper}>
        <div className={style.list}></div>
        <div className={style.summary}></div>
        <div className={style.btns}></div>
    </div>
  )
}

export default Dropdown
