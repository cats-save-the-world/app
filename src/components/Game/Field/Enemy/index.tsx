import { FC, useEffect, useState, useRef } from "react";
import style from "./style.module.css";
import { animate } from "framer-motion";
import { useDispatch } from "react-redux";
import { removeEnemy, setEnemyPosition } from "../../../../features/game";

interface IProps {
  id: number;
  degree: number;
}

const Enemy: FC<IProps> = ({ id, degree }) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState<number>(500);

  const handleRemove = () => {
    dispatch(removeEnemy(id));
  };

  useEffect(() => {
    animate(500, 0, {
      duration: 5,
      ease: "linear",
      onUpdate: (latest: number) => {
        setDistance(Math.trunc(latest));

        if (!ref.current) return;

        const { top, bottom, left, right } =
          ref.current.getBoundingClientRect();

        dispatch(setEnemyPosition([id, { top, bottom, left, right }]));
      },
      onComplete: handleRemove,
    });
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div
        className="transition-transform"
        style={{
          transform: `rotate(${degree}deg)`,
          paddingBottom: `calc(160px + ${distance}px)`,
        }}
      >
        <div ref={ref} className={style.enemy}></div>
      </div>
    </div>
  );
};

export default Enemy;
