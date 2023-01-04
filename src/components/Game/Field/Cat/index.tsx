import { FC, useEffect, useRef } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import style from "./style.module.css";
import { StateType } from "../../../../store/types";
import {
  CatDirectionEnum,
  CatStatusEnum,
} from "../../../../features/game/types";
import { useDispatch } from "react-redux";
import { setCatPosition, updateCatLocation } from "../../../../features/game";
import { preloadImage } from "./helpers";

const INTERVAL = 100;

const Cat: FC = () => {
  const dispatch = useDispatch();
  const degree = useSelector((state: StateType) => state.game.cat.degree);
  const status = useSelector((state: StateType) => state.game.cat.status);
  const direction = useSelector((state: StateType) => state.game.cat.direction);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateCatLocation());
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    preloadImage("/src/components/Game/Field/Cat/assets/cat_walking.gif");
    preloadImage("/src/components/Game/Field/Cat/assets/cat_running.gif");
    preloadImage("/src/components/Game/Field/Cat/assets/cat_hitting.gif");
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    const { top, bottom, left, right } = ref.current.getBoundingClientRect();
    dispatch(
      setCatPosition({
        top,
        bottom,
        left,
        right,
      })
    );
  }, [ref.current, degree]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div
        className="pb-[165px] transition-transform"
        style={{
          transform: `rotate(${degree}deg)`,
        }}
      >
        <div
          ref={ref}
          className={classNames(style.cat, {
            [style.walking]: status === CatStatusEnum.walking,
            [style.running]: status === CatStatusEnum.running,
            [style.hitting]: status === CatStatusEnum.hitting,
            [style.left]: direction === CatDirectionEnum.left,
          })}
        ></div>
      </div>
    </div>
  );
};

export default Cat;
