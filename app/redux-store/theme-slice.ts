import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { LIGHT_THEME } from "../constant";

export interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: LIGHT_THEME,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
