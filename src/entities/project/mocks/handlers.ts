import {delay, http, HttpResponse} from "msw";
import {projectsUrl} from "@entities/project";
import {ProjectStatuses} from "@shared/enums";
import {worker} from "@app/mocks";
import {ProjectDTO} from "@entities/project/model/dto.ts";

export const handlers = [
	http.get<never, never, ProjectDTO[], '/projects'>(`/${projectsUrl}`, async () => {
		await delay(1000);

		return HttpResponse.json([
			{
				id: '0',
				title: 'Проект 1',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.new,
				author_id: '123',
				team_id: '123',
				tags: [{id: '0', value: 'новый', color: 'green'}]
			},
			{
				id: '1',
				title: 'Проект 2',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.stopped,
				author_id: '123',
				team_id: '123',
				tags: [{id: '1', value: 'остановлен', color: 'red'}]
			},
			{
				id: '2',
				title: 'Проект 3',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.in_progress,
				author_id: '123',
				team_id: '123',
				tags: [{id: '2', value: 'в работе', color: 'cyan-inverse'}]
			},
		]);
	}),
];

worker.use(...handlers);