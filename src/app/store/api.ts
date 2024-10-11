import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: '/'
	}),
	tagTypes: [],
	endpoints: () => ({})
});

export const apiReducer = apiSlice.reducer;