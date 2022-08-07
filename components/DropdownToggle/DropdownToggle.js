import style from"./DropdownToggle.module.css"
import Circle from "../Circle/Circle"

const DropdownToggle = ({text, inner, icon}) => {
  return (
    <>
      <button className={style.dropdownToggle}>
          {icon}
          <p className={style.dropdownToggle__text}>{text}</p>
          <Circle
            top={-45}
            left={25}
            inner={inner}
            size={20}
          />
      </button>
    </>
  )
}

export default DropdownToggle
