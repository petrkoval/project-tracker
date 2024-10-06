import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@app/store";
import {darkThemeToken, lightThemeToken, Themes} from "@features/switch-theme";

export const themeTokenSlice = createSlice({
	name: "themeToken",
	initialState: darkThemeToken,
	reducers: {
		toggleThemeToken: (state) => {
			if (state.theme === Themes.dark) {
				return lightThemeToken;
			} else if (state.theme === Themes.light) {
				return darkThemeToken;
			} else return state;
		}
	}
});

export const selectThemeToken = (state: RootState) => state.themeToken;
export const selectCurrentTheme = (state: RootState) => state.themeToken.theme;

export const {toggleThemeToken} = themeTokenSlice.actions;

export const themeTokenReducer = themeTokenSlice.reducer;