export enum CatDirectionEnum {
  left = "left",
  right = "right",
}

export enum CatStatusEnum {
  idle = "idle",
  running = "running",
}

export enum CatAccelerationEnum {
  up = "up",
  down = "down",
}

export interface ICatState {
  speed: number;
  accelerationDirection: CatAccelerationEnum | null;
  degree: number;
  status: CatStatusEnum;
  direction: CatDirectionEnum;
}
