import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CatDirectionEnum, CatStatusEnum } from "./types";
import { ICatState, CatAccelerationEnum } from "./types";

const ACCELERATION_SPEED = 1;
const BRAKING_SPEED = 2;
const MAX_SPEED = 10;

const slice = createSlice({
  name: "cat",
  initialState: {
    speed: 0,
    accelerationDirection: null,
    degree: 0,
    status: CatStatusEnum.idle,
    direction: CatDirectionEnum.right,
  },
  reducers: {
    move(state: ICatState, action: PayloadAction<CatDirectionEnum>) {
      state.accelerationDirection = CatAccelerationEnum.up;
      state.direction = action.payload;
    },
    stop(state: ICatState) {
      state.accelerationDirection = CatAccelerationEnum.down;
    },
    updateCatLocation(state: ICatState) {
      state.degree += state.speed;

      if (state.accelerationDirection === CatAccelerationEnum.up) {
        if (state.direction === CatDirectionEnum.right) {
          state.speed = Math.min(state.speed + ACCELERATION_SPEED, MAX_SPEED);
        } else {
          state.speed = Math.max(state.speed - ACCELERATION_SPEED, -MAX_SPEED);
        }
      } else if (state.accelerationDirection === CatAccelerationEnum.down) {
        if (state.direction === CatDirectionEnum.right) {
          state.speed = Math.max(state.speed - BRAKING_SPEED, 0);
        } else {
          state.speed = Math.min(state.speed + BRAKING_SPEED, 0);
        }
      }
    },
  },
});

export const { updateCatLocation, move, stop } = slice.actions;
export default slice.reducer;
