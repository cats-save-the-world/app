import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EnemiesStateType } from "./types";
import random from "lodash.random";

const slice = createSlice({
  name: "enemies",
  initialState: [],
  reducers: {
    spawnEnemy(state: EnemiesStateType) {
      const id = Date.now();
      const degree = random(0, 360);
      state.push({ id, degree });
    },
    removeEnemy(state: EnemiesStateType, action: PayloadAction<number>) {
      const idx = state.map((enemy) => enemy.id).indexOf(action.payload);

      if (idx === -1) return;

      state.splice(idx, 1);
    },
  },
});

export const { spawnEnemy, removeEnemy } = slice.actions;
export default slice.reducer;
