import { FC, useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import Heading from "./Heading";
import Cat from "./Cat";
import Planet from "./Planet";
import Controls from "./Controls";

const GameView: FC = () => {
  const [animation, setAnimation] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    animate(0, 100, {
      duration: 3,
      ease: "linear",
      onUpdate: (latest: number) => {
        setAnimation(Math.trunc(latest));
      },
      onComplete: () => {
        setLoaded(true);
      },
    });
  }, []);

  const opacity = animation / 100;
  const scale = animation / 100;
  const rotate = animation - 100;

  return (
    <>
      {loaded && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Heading>cats, save the planet!</Heading>
        </motion.div>
      )}
      <motion.div
        className="origin-center absolute top-1/2 left-1/2"
        style={{
          opacity,
          transform: `scale(${scale}) rotate(${rotate}deg) translate(-50%, -50%)`,
        }}
      >
        <Planet />
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <Cat />
        </div>
      </motion.div>
      {loaded && <Controls />}
    </>
  );
};

export default GameView;