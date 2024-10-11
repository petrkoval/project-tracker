import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: '/'
	}),
	tagTypes: ['Projects'],
	endpoints: () => ({})
});

export const apiReducer = apiSlice.reducer;