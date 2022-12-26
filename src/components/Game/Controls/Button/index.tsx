import { FC } from "react";
import classNames from "classnames";
import style from "./style.module.css";

interface IProps {
  onTouchStart: () => void;
  onTouchEnd: () => void;
  left?: boolean;
}

const Button: FC<IProps> = ({ onTouchStart, onTouchEnd, left }) => (
  <button
    className={classNames(style.button, {
      [style.left]: left,
    })}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
  ></button>
);

export default Button;
