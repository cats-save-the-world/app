import { configureStore } from "@reduxjs/toolkit";
import app from "../features/app";
import game from "../features/game";

export default configureStore({
  reducer: { app, game },
});
