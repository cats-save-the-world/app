import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CatDirectionEnum, CatStatusEnum } from "./enums";
import { ICatState } from "./interfaces";

const slice = createSlice({
  name: "cat",
  initialState: {
    speed: 0,
    direction: CatDirectionEnum.right,
    degree: 0,
    status: CatStatusEnum.idle,
  },
  reducers: {
    changeSpeed(state: ICatState, action: PayloadAction<number>) {
      state.speed = action.payload;

      if (state.speed === 0) {
        state.status = CatStatusEnum.idle;
        return;
      }

      state.status = CatStatusEnum.running;
      state.direction =
        state.speed < 0 ? CatDirectionEnum.left : CatDirectionEnum.right;
    },
    changeDegree(state: ICatState) {
      if (state.speed !== 0) {
        state.degree += state.speed;
      }
    },
  },
});

export const { changeSpeed, changeDegree } = slice.actions;
export default slice.reducer;
