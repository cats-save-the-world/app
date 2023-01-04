import { PayloadAction } from "@reduxjs/toolkit";
import random from "lodash.random";
import { IGameState, IPosition, EnemyStatusEnum } from "../types";
import { hit } from "./cat";

const spawnEnemy = (state: IGameState) => {
  const id = Date.now();
  const degree = random(0, 360);
  state.enemies[id] = {
    id,
    degree,
    position: null,
    status: EnemyStatusEnum.alive,
  };
};

const removeEnemy = (state: IGameState, action: PayloadAction<string>) => {
  delete state.enemies[action.payload];
};

const setEnemyPosition = (
  state: IGameState,
  action: PayloadAction<[string, IPosition]>
) => {
  const [id, position] = action.payload;
  state.enemies[id].position = position;

  if (!state.cat.position) return;

  const { top, bottom, left, right } = position;

  if (state.cat.position.top > bottom) return;
  if (state.cat.position.bottom < top) return;
  if (state.cat.position.left > right) return;
  if (state.cat.position.right < left) return;

  hit(state);
  state.enemies[id].status = EnemyStatusEnum.killed;
};

export { spawnEnemy, removeEnemy, setEnemyPosition };
