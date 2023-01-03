import { PayloadAction } from "@reduxjs/toolkit";
import random from "lodash.random";
import { IGameState, IPosition } from "../types";
import { hit } from "./cat";

const spawnEnemy = (state: IGameState) => {
  const id = Date.now();
  const degree = random(0, 360);
  state.enemies.push({ id, degree, position: null });
};

const removeEnemy = (state: IGameState, action: PayloadAction<number>) => {
  const idx = state.enemies.map((enemy) => enemy.id).indexOf(action.payload);
  state.enemies.splice(idx, 1);
};

const setEnemyPosition = (
  state: IGameState,
  action: PayloadAction<[number, IPosition]>
) => {
  const [id, position] = action.payload;
  const idx = state.enemies.map((enemy) => enemy.id).indexOf(id);
  state.enemies[idx].position = position;

  if (!state.cat.position) return;

  const { top, bottom, left, right } = position;

  if (state.cat.position.top > bottom) return;
  if (state.cat.position.bottom < top) return;
  if (state.cat.position.left > right) return;
  if (state.cat.position.right < left) return;

  hit(state);
};

export { spawnEnemy, removeEnemy, setEnemyPosition };
