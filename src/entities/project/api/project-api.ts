import {apiSlice} from "@app/store";
import {Project} from "@entities/project";
import {ProjectDTO} from "@entities/project/model/dto.ts";
import {DateTime} from "luxon";

export const projectsUrl = 'projects';

export const projectApi = apiSlice.injectEndpoints({
	endpoints: builder => ({
		getProjects: builder.query<Project[], void>({
			query: () => projectsUrl,
			transformResponse: (response: ProjectDTO[]) => {
				return response.map(project => ({
					...project,
					authorId: project.author_id,
					teamId: project.team_id,
					period: {
						start: DateTime.fromMillis(project.period.start),
						end: DateTime.fromMillis(project.period.end)
					}
				}));
			},
			providesTags: ['Projects']
		})
	}),
});

export const {
	useGetProjectsQuery
} = projectApi;