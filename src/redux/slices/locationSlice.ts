import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  viewLocation: boolean;
}
const initialState: IState = {
  viewLocation: false,
};

export const locationSlice = createSlice({
  name: "locationSlice",
  initialState,
  reducers: {
    changeViewLocationBlock(state, action: PayloadAction) {
      state.viewLocation = !state.viewLocation;
    },
  },
});

export const { changeViewLocationBlock } = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
