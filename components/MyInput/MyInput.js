import style from "./MyInput.module.css"

const MyInput = ({hasBorder, ...props}) => {

  return (
    <div>
      <input
        className={`${style.myInput} ${hasBorder ? '' : style.noBorders}`}
        type="text"
        {...props}
        // placeholder={placeholder}
        // value={value}
        // onChange={onChange}
      />
      <button className={style.search__btn}>Search</button>
    </div>
  )
}


export default MyInput
