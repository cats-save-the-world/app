import { FC } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import style from "./style.module.css";
import { StateType } from "../../../store/types";
import { CatDirectionEnum, CatStatusEnum } from "../../../features/cat/enums";

const Cat: FC = () => {
  const degree = useSelector((state: StateType) => state.cat.degree);
  const status = useSelector((state: StateType) => state.cat.status);
  const direction = useSelector((state: StateType) => state.cat.direction);

  return (
    <div
      className="pb-[180px] transition-transform"
      style={{
        transform: `rotate(${degree}deg)`,
      }}
    >
      <div
        className={classNames(style.cat, {
          [style.running]: status === CatStatusEnum.running,
          [style.left]: direction === CatDirectionEnum.left,
        })}
      ></div>
    </div>
  );
};

export default Cat;
