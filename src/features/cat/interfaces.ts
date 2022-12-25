import { CatDirectionEnum, CatStatusEnum } from "./enums";

export interface ICatState {
  speed: number;
  direction: CatDirectionEnum;
  degree: number;
  status: CatStatusEnum;
}
