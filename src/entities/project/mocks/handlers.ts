import {delay, http, HttpResponse} from "msw";
import {v4 as uuidv4} from 'uuid';
import {PresetColorType} from "antd/es/_util/colors";
import {projectsUrl} from "@entities/project";
import {ProjectStatuses} from "@shared/enums";
import {baseUrl} from "@app/store";

const getRandomValueFromObject = (obj: object) => {
	const values = Object.values(obj);

	return values[Math.floor(Math.random() * values.length)];
}

export const handlers = [
	http.get(`${baseUrl}${projectsUrl}`, async () => {
		await delay(1000);

		const generateProjects = (amount: number) => {
			return Array(amount).fill(null).map((_, i) => ({
				id: uuidv4(),
				title: `Проект ${i + 1}`,
				description: `Новый проект ${i + 1} тестовый`,
				period: {
					start: Date.now() + 1000 * 60 * 60 * 24 * i,
					end: Date.now() + 1000 * 60 * 60 * 24 * (i + 1),
				},
				status: getRandomValueFromObject(ProjectStatuses),
				author_id: `${i}`,
				team_id: `${i}`,
				tags: [{id: uuidv4(), value: 'новый', color: 'green' as PresetColorType}]
			}));
		}

		return HttpResponse.json(generateProjects(24));
	}),
];