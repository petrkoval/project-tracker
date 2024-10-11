import {apiSlice} from "@app/store";
import {Project} from "@entities/project";

export const projectApi = apiSlice.injectEndpoints({
	endpoints: builder => ({
		getProjects: builder.query<Project[], void>({
			query: () => 'projects',
			providesTags: ['Projects']
		})
	}),
});