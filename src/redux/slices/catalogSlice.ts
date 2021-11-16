import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { catalogDate } from "../../data/catalogData";
import { ICatalogState } from "../../types";

const initialState: ICatalogState = {
  categorys: catalogDate,
  viewDropCatalog: false,
};

export const catalogSlice = createSlice({
  name: "catalogSlice",
  initialState,
  reducers: {
    changeActiveCategory(
      state,
      action: PayloadAction<{ id: number; typeComponent: string }>
    ) {
      const { id, typeComponent } = action.payload;
      console.log(state.categorys[id][typeComponent]);
      if (state.categorys[id][typeComponent]) {
        state.categorys[id][typeComponent] = false;
        return;
      }

      state.categorys.forEach((el) => (el[typeComponent] = false));
      state.categorys[id][typeComponent] = true;
    },
    onViewDropCatalog(state, action: PayloadAction) {
      state.viewDropCatalog = true;
    },
    offViewDropCatalog(state, action: PayloadAction) {
      state.viewDropCatalog = false;
    },
  },
});

export const { changeActiveCategory, onViewDropCatalog, offViewDropCatalog } =
  catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
