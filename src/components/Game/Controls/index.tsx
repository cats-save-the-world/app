import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeSpeed, changeDegree } from "../../../features/cat";

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
    <div className="fixed inset-0 grid grid-cols-2">
      <div
        className="col-span-1"
        onTouchStart={handleLeft}
        onTouchEnd={handleStop}
      ></div>
      <div
        className="col-span-1"
        onTouchStart={handleRight}
        onTouchEnd={handleStop}
      ></div>
    </div>
  );
};

export default Controls;
