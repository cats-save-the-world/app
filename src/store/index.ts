import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../features/game";
import catReducer from "../features/cat";
import enemiesReducer from "../features/enemies";

export default configureStore({
  reducer: {
    game: gameReducer,
    cat: catReducer,
    enemies: enemiesReducer,
  },
});
