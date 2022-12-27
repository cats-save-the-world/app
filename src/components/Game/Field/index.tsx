import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StateType } from "../../../store/types";
import Planet from "./Planet";
import Cat from "./Cat";
import Enemy from "./Enemy";
import { spawnEnemy, removeEnemy } from "../../../features/enemies";
import { IEnemy } from "../../../features/enemies/types";

const ENEMY_SPAWN_INTERVAL = 3000;

const Field: FC = () => {
  const dispatch = useDispatch();
  const loaded = useSelector((state: StateType) => state.game.loaded);
  const enemies = useSelector((state: StateType) => state.enemies);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(spawnEnemy());
    }, ENEMY_SPAWN_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const handleRemove = (id: number) => {
    dispatch(removeEnemy(id));
  };

  return (
    <>
      <Planet />
      <Cat />
      {loaded &&
        enemies.map((enemy: IEnemy) => (
          <Enemy
            key={enemy.id}
            degree={enemy.degree}
            onRemove={() => handleRemove(enemy.id)}
          />
        ))}
    </>
  );
};

export default Field;
