import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {themeReducer, themeSlice} from "@features/switch-theme";
import {apiReducer, apiSlice} from "@app/store/api.ts";

const rootReducer = combineReducers({
	[themeSlice.reducerPath]: themeReducer,
	[apiSlice.reducerPath]: apiReducer
});

export function setupStore(preloadedState?: Partial<RootState>) {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
		devTools: process.env.NODE_ENV === 'development',
	});
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];