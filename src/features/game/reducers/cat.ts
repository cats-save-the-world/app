import { PayloadAction } from "@reduxjs/toolkit";
import {
  CatAccelerationEnum,
  CatDirectionEnum,
  IGameState,
  CatStatusEnum,
  IPosition,
} from "../types";

const ACCELERATION_SPEED = 2;
const BRAKING_SPEED = 1;
const MAX_SPEED = 10;

const move = (state: IGameState, action: PayloadAction<CatDirectionEnum>) => {
  state.cat.accelerationDirection = CatAccelerationEnum.up;
  state.cat.direction = action.payload;
};

const stop = (state: IGameState) => {
  state.cat.accelerationDirection = CatAccelerationEnum.down;
};

const hit = (state: IGameState) => {
  if (state.cat.status !== CatStatusEnum.hitting) {
    state.cat.status = CatStatusEnum.hitting;
    state.cat.speed = 0;
  }
};

const setCatPosition = (
  state: IGameState,
  action: PayloadAction<IPosition>
) => {
  state.cat.position = action.payload;
};

const updateCatLocation = (state: IGameState) => {
  state.cat.degree += state.cat.speed;

  if (state.cat.accelerationDirection === CatAccelerationEnum.up) {
    if (state.cat.direction === CatDirectionEnum.right) {
      state.cat.speed = Math.min(
        state.cat.speed + ACCELERATION_SPEED,
        MAX_SPEED
      );
    } else {
      state.cat.speed = Math.max(
        state.cat.speed - ACCELERATION_SPEED,
        -MAX_SPEED
      );
    }
  } else if (state.cat.accelerationDirection === CatAccelerationEnum.down) {
    if (state.cat.direction === CatDirectionEnum.right) {
      state.cat.speed = Math.max(state.cat.speed - BRAKING_SPEED, 0);
    } else {
      state.cat.speed = Math.min(state.cat.speed + BRAKING_SPEED, 0);
    }
  }

  if (state.cat.speed === 0) {
    state.cat.status = CatStatusEnum.idle;
  } else if (Math.abs(state.cat.speed) < 7) {
    state.cat.status = CatStatusEnum.walking;
  } else {
    state.cat.status = CatStatusEnum.running;
  }
};

export { move, stop, hit, setCatPosition, updateCatLocation };
