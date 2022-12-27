import { FC, useEffect } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import style from "./style.module.css";
import { StateType } from "../../../../store/types";
import {
  CatDirectionEnum,
  CatStatusEnum,
} from "../../../../features/cat/types";
import { useDispatch } from "react-redux";
import { updateCatLocation } from "../../../../features/cat";

const INTERVAL = 100;

const Cat: FC = () => {
  const dispatch = useDispatch();
  const degree = useSelector((state: StateType) => state.cat.degree);
  const status = useSelector((state: StateType) => state.cat.status);
  const direction = useSelector((state: StateType) => state.cat.direction);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateCatLocation());
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div
        className="pb-[180px] transition-transform"
        style={{
          transform: `rotate(${degree}deg)`,
        }}
      >
        <div
          className={classNames(style.cat, {
            [style.walking]: status === CatStatusEnum.walking,
            [style.running]: status === CatStatusEnum.running,
            [style.left]: direction === CatDirectionEnum.left,
          })}
        ></div>
      </div>
    </div>
  );
};

export default Cat;
