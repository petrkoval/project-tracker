import {createSlice} from "@reduxjs/toolkit";
import {darkThemeToken, lightThemeToken, Themes} from "@features/switch-theme";
import {RootState} from "@app/store";

export const themeTokenSlice = createSlice({
	name: "themeToken",
	initialState: darkThemeToken,
	reducers: {
		toggleThemeToken: (state) => {
			switch (state.theme) {
				case Themes.dark:
					state = darkThemeToken;
					break;
				case Themes.light:
					state = lightThemeToken;
					break;
			}
		}
	}
});

export const selectThemeToken = (state: RootState) => state.themeToken;

export const {toggleThemeToken} = themeTokenSlice.actions;

export const themeTokenReducer = themeTokenSlice.reducer;