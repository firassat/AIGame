import { createSlice } from "@reduxjs/toolkit";
import GameLevel from "./GameLevel";

const gamemodel = new GameLevel();
const initialState = {
  value: gamemodel.level1(),
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGame: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGame } = gameSlice.actions;

export default gameSlice.reducer;
