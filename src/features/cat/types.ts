export enum CatDirectionEnum {
  left = "left",
  right = "right",
}

export enum CatStatusEnum {
  idle = "idle",
  running = "running",
}

export interface ICatState {
  speed: number;
  direction: CatDirectionEnum;
  degree: number;
  status: CatStatusEnum;
}
