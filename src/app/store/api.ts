import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseUrl = 'http://localhost:5173/';

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl
	}),
	tagTypes: ['Projects'],
	endpoints: () => ({})
});

export const apiReducer = apiSlice.reducer;