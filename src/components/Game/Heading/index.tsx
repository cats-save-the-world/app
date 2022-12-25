import { FC } from "react";
import classNames from "classnames";
import style from "./style.module.css";

interface IProps {
  children: string;
}

const Heading: FC<IProps> = ({ children }) => (
  <h1
    className={classNames(
      "text-3xl",
      "text-white",
      "text-center",
      style.heading
    )}
  >
    {children}
  </h1>
);

export default Heading;
