import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MobileView } from "react-device-detect";
import { changeSpeed, changeDegree } from "../../../features/cat";
import Button from "./Button";

const INTERVAL = 100;

const Controls: FC = () => {
  const dispatch = useDispatch();

  const handleLeft = () => {
    dispatch(changeSpeed(-1));
  };

  const handleRight = () => {
    dispatch(changeSpeed(1));
  };

  const handleStop = () => {
    dispatch(changeSpeed(0));
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

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(changeDegree());
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <MobileView>
      <div className="fixed pb-4 px-4 h-[20vh] bottom-0 left-0 right-0 grid grid-cols-2 gap-4">
        <Button onTouchStart={handleLeft} onTouchEnd={handleStop} left />
        <Button onTouchStart={handleRight} onTouchEnd={handleStop} />
      </div>
    </MobileView>
  );
};

export default Controls;
