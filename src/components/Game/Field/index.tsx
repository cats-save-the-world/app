import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StateType } from "../../../store/types";
import Planet from "./Planet";
import Cat from "./Cat";
import Enemy from "./Enemy";
import { spawnEnemy } from "../../../features/game";
import { IEnemies } from "../../../features/game/types";

const ENEMY_SPAWN_INTERVAL = 5000;

const Field: FC = () => {
  const dispatch = useDispatch();
  const loaded = useSelector((state: StateType) => state.app.loaded);
  const enemies: IEnemies = useSelector(
    (state: StateType) => state.game.enemies
  );

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(spawnEnemy());
    }, ENEMY_SPAWN_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Planet />
      <Cat />
      {loaded &&
        Object.keys(enemies).map((id: string) => (
          <Enemy key={id} id={id} degree={enemies[id].degree} />
        ))}
    </>
  );
};

export default Field;
