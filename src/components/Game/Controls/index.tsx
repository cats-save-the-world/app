import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { MobileView } from "react-device-detect";
import { move, stop } from "../../../features/game";
import { CatDirectionEnum } from "../../../features/game/types";
import Button from "./Button";

const Controls: FC = () => {
  const dispatch = useDispatch();

  const handleLeft = () => {
    dispatch(move(CatDirectionEnum.left));
  };

  const handleRight = () => {
    dispatch(move(CatDirectionEnum.right));
  };

  const handleStop = () => {
    dispatch(stop());
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "a":
        handleLeft();
        break;
      case "d":
        handleRight();
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleStop);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleStop);
    };
  }, []);

  return (
    <MobileView>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed pb-4 px-4 h-[140px] bottom-0 left-0 right-0 grid grid-cols-2 gap-4"
      >
        <Button onTouchStart={handleLeft} onTouchEnd={handleStop} left />
        <Button onTouchStart={handleRight} onTouchEnd={handleStop} />
      </motion.div>
    </MobileView>
  );
};

export default Controls;
