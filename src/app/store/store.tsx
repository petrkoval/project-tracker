import {configureStore} from "@reduxjs/toolkit";
import {themeTokenReducer, themeTokenSlice} from "@features/switch-theme";

export const store = configureStore({
	reducer: {
		[themeTokenSlice.reducerPath]: themeTokenReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;