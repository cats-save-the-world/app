import { FC } from "react";
import classNames from "classnames";
import style from "./style.module.css";

interface IProps {
  onTouchStart: () => void;
  onTouchEnd: () => void;
  left?: boolean;
}

const Button: FC<IProps> = ({ onTouchStart, onTouchEnd, left }) => (
  <div
    className={classNames(style.button, {
      [style.left]: left,
    })}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
  ></div>
);

export default Button;
