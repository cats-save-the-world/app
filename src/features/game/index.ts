import { createSlice } from "@reduxjs/toolkit";
import { CatStatusEnum, CatDirectionEnum } from "./types";
import * as catReducers from "./reducers/cat";
import * as enemyReducers from "./reducers/enemy";

const slice = createSlice({
  name: "game",
  initialState: {
    cat: {
      speed: 0,
      accelerationDirection: null,
      degree: 0,
      status: CatStatusEnum.idle,
      direction: CatDirectionEnum.right,
      position: null,
    },
    enemies: [],
  },
  reducers: {
    ...catReducers,
    ...enemyReducers,
  },
});

export const {
  move,
  stop,
  hit,
  setCatPosition,
  updateCatLocation,
  spawnEnemy,
  removeEnemy,
  setEnemyPosition,
} = slice.actions;
export default slice.reducer;
