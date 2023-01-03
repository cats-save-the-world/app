import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "./types";

const slice = createSlice({
  name: "app",
  initialState: {
    loaded: false,
  },
  reducers: {
    setLoaded(state: IAppState) {
      state.loaded = true;
    },
  },
});

export const { setLoaded } = slice.actions;
export default slice.reducer;
