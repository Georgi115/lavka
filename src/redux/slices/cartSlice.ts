import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartState } from "../../types";

const initialState: ICartState = {
  viewDropCart: false,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    onViewDropCart(state, action: PayloadAction) {
      state.viewDropCart = true;
    },
    offViewDropCart(state, action: PayloadAction) {
      state.viewDropCart = false;
    },
  },
});

export const { onViewDropCart, offViewDropCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
