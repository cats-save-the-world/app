import { configureStore } from "@reduxjs/toolkit";
import catReducer from "../features/cat";

export default configureStore({
  reducer: {
    cat: catReducer,
  },
});
