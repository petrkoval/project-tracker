import {delay, http, HttpResponse} from "msw";
import {projectsUrl} from "@entities/project";
import {ProjectStatuses} from "@shared/enums";
import {worker} from "@app/mocks";
import {ProjectDTO} from "@entities/project/model/dto.ts";
import { v4 as uuidv4 } from 'uuid';

export const handlers = [
	http.get<never, never, ProjectDTO[], '/projects'>(`/${projectsUrl}`, async () => {
		await delay(1000);

		return HttpResponse.json([
			{
				id: uuidv4(),
				title: 'Проект 1',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.new,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'новый', color: 'green'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 2',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.stopped,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'остановлен', color: 'red'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 3',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.in_progress,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'в работе', color: 'cyan-inverse'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 1',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.new,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'новый', color: 'green'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 2',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.stopped,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'остановлен', color: 'red'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 3',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.in_progress,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'в работе', color: 'cyan-inverse'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 1',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.new,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'новый', color: 'green'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 2',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.stopped,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'остановлен', color: 'red'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 3',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.in_progress,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'в работе', color: 'cyan-inverse'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 1',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.new,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'новый', color: 'green'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 2',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.stopped,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'остановлен', color: 'red'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 3',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.in_progress,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'в работе', color: 'cyan-inverse'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 1',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.new,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'новый', color: 'green'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 2',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.stopped,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'остановлен', color: 'red'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 3',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.in_progress,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'в работе', color: 'cyan-inverse'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 1',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.new,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'новый', color: 'green'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 2',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.stopped,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'остановлен', color: 'red'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 3',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.in_progress,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'в работе', color: 'cyan-inverse'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 1',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.new,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'новый', color: 'green'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 2',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.stopped,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'остановлен', color: 'red'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 3',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.in_progress,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'в работе', color: 'cyan-inverse'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 1',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.new,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'новый', color: 'green'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 2',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.stopped,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'остановлен', color: 'red'}]
			},
			{
				id: uuidv4(),
				title: 'Проект 3',
				description: 'Новый проект тестовый',
				period: {
					start: Date.now(),
					end: Date.now(),
				},
				status: ProjectStatuses.in_progress,
				author_id: '123',
				team_id: '123',
				tags: [{id: uuidv4(), value: 'в работе', color: 'cyan-inverse'}]
			},
		]);
	}),
];

worker.use(...handlers);