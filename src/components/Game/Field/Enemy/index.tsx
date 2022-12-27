import { FC, useEffect, useState } from "react";
import style from "./style.module.css";
import { animate } from "framer-motion";

interface IProps {
  degree: number;
  onRemove: () => void;
}

const Enemy: FC<IProps> = ({ degree, onRemove }) => {
  const [distance, setDistance] = useState<number>(500);

  useEffect(() => {
    animate(500, 0, {
      duration: 5,
      ease: "linear",
      onUpdate: (latest: number) => {
        setDistance(Math.trunc(latest));
      },
      onComplete: onRemove,
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
        <div className={style.enemy}></div>
      </div>
    </div>
  );
};

export default Enemy;
