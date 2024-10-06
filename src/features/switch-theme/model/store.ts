import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@app/store";
import {darkThemeToken, lightThemeToken, Themes} from "@features/switch-theme";

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
				default:
					return state;
			}
		}
	}
});

export const selectThemeToken = (state: RootState) => state.themeToken;

export const {toggleThemeToken} = themeTokenSlice.actions;

export const themeTokenReducer = themeTokenSlice.reducer;