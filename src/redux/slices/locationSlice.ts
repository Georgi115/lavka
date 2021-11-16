import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILocationState } from "../../types";

const initialState: ILocationState = {
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
