export enum CatDirectionEnum {
  left = "left",
  right = "right",
}

export enum CatStatusEnum {
  idle = "idle",
  walking = "walking",
  running = "running",
  hitting = "hitting",
}

export enum CatAccelerationEnum {
  up = "up",
  down = "down",
}

export interface IPosition {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface ICatState {
  speed: number;
  accelerationDirection: CatAccelerationEnum | null;
  degree: number;
  status: CatStatusEnum;
  direction: CatDirectionEnum;
  position: IPosition | null;
}

export interface IEnemy {
  id: number;
  degree: number;
  position: IPosition | null;
}

export interface IGameState {
  cat: ICatState;
  enemies: IEnemy[];
}
