import { FC, useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import Heading from "./Heading";
import Field from "./Field";
import Controls from "./Controls";
import { StateType } from "../../store/types";
import { setLoaded } from "../../features/game";

const GameView: FC = () => {
  const dispatch = useDispatch();
  const loaded = useSelector((state: StateType) => state.game.loaded);
  const [animation, setAnimation] = useState<number>(0);

  useEffect(() => {
    animate(0, 100, {
      duration: 3,
      ease: "linear",
      onUpdate: (latest: number) => {
        setAnimation(Math.trunc(latest));
      },
      onComplete: () => {
        dispatch(setLoaded());
      },
    });
  }, []);

  const opacity = animation / 100;
  const scale = animation / 100;
  const rotate = animation - 100;

  return (
    <>
      {loaded && <Heading>cats, save the world!</Heading>}
      <motion.div
        className="origin-center absolute top-1/2 left-1/2"
        style={{
          opacity,
          transform: `scale(${scale}) rotate(${rotate}deg) translate(-50%, -50%)`,
        }}
      >
        <Field />
      </motion.div>
      {loaded && <Controls />}
    </>
  );
};

export default GameView;
