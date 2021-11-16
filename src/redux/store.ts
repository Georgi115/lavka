import { configureStore } from "@reduxjs/toolkit";
import { catalogReducer, locationReducer, cartReducer } from "./slices";

export const store = configureStore({
  reducer: { catalogReducer, locationReducer, cartReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
