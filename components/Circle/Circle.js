import style from "./Circle.module.css";

const Circle = ({ top, left, size, inner}) => {
  const positionStyles = {
    top: `${top}px`,
    left: `${left}px`,
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <div className={style.circle} style={positionStyles}>
      <div className={style.circle__wrapper}>
        {inner}
      </div>
    </div>
  );
};

export default Circle;
