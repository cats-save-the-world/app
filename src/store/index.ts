import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../features/game";
import catReducer from "../features/cat";

export default configureStore({
  reducer: {
    game: gameReducer,
    cat: catReducer,
  },
});
