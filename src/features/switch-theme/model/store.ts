import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@app/store";
import {
	darkTheme,
	getThemeNameFromLocalStorage,
	lightTheme,
	setThemeNameToLocalStorage,
	ThemeNames
} from "@features/switch-theme";

export const themeSlice = createSlice({
	name: "theme",
	initialState: () => {
		const themeName = getThemeNameFromLocalStorage();
		if (themeName === ThemeNames.dark) {
			return darkTheme;
		} else return lightTheme;
	},
	reducers: {
		toggleTheme: (state) => {
			if (state.themeName === ThemeNames.dark) {
				setThemeNameToLocalStorage(ThemeNames.light);
				return lightTheme;
			} else if (state.themeName === ThemeNames.light) {
				setThemeNameToLocalStorage(ThemeNames.dark);
				return darkTheme;
			} else return state;
		}
	}
});

export const selectTheme = (state: RootState) => state.theme;
export const selectThemeName = (state: RootState) => state.theme.themeName;

export const {toggleTheme} = themeSlice.actions;

export const themeReducer = themeSlice.reducer;