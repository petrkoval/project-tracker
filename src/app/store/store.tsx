import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {themeTokenReducer, themeTokenSlice} from "@features/switch-theme";

const rootReducer = combineReducers({
	[themeTokenSlice.reducerPath]: themeTokenReducer
});

export function setupStore(preloadedState?: Partial<RootState>) {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
		devTools: process.env.NODE_ENV === 'development',
	});
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];