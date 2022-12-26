import { createSlice } from "@reduxjs/toolkit";
import { IGameState } from "./interfaces";

const slice = createSlice({
  name: "game",
  initialState: {
    loaded: false,
  },
  reducers: {
    setLoaded(state: IGameState) {
      state.loaded = true;
    },
  },
});

export const { setLoaded } = slice.actions;
export default slice.reducer;
