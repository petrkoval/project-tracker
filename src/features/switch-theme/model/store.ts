import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@app/store";
import {darkTheme, lightTheme, ThemeNames} from "@features/switch-theme";

export const themeSlice = createSlice({
	name: "theme",
	initialState: darkTheme,
	reducers: {
		toggleTheme: (state) => {
			if (state.themeName === ThemeNames.dark) {
				return lightTheme;
			} else if (state.themeName === ThemeNames.light) {
				return darkTheme;
			} else return state;
		}
	}
});

export const selectTheme = (state: RootState) => state.theme;
export const selectThemeName = (state: RootState) => state.theme.themeName;

export const {toggleTheme} = themeSlice.actions;

export const themeReducer = themeSlice.reducer;