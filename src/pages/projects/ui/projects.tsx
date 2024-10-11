import {Table} from "antd";
import {PageWrapper} from "@shared/ui/page-wrapper";
import {Project} from "@entities/project";
import {ProjectStatuses} from "@shared/enums";
import {useCreateColumns} from "@pages/projects";
import {DateTime} from "luxon";

import "../style/projects.scss";

const dataSource: Project[] = [
	{
		id: '0',
		title: 'Проект 1',
		description: 'Новый проект тестовый',
		period: {
			start: DateTime.now(),
			end: DateTime.now(),
		},
		status: ProjectStatuses.NEW,
		authorId: '123',
		teamId: '123',
		tags: [{id: '0', value: 'новый', color: 'green'}]
	},
	{
		id: '1',
		title: 'Проект 2',
		description: 'Новый проект тестовый',
		period: {
			start: DateTime.now().plus({day: 1}),
			end: DateTime.now(),
		},
		status: ProjectStatuses.STOPPED,
		authorId: '123',
		teamId: '123',
		tags: [{id: '1', value: 'остановлен', color: 'red'}]
	},
	{
		id: '2',
		title: 'Проект 3',
		description: 'Новый проект тестовый',
		period: {
			start: DateTime.now().plus({day: 2}),
			end: DateTime.now(),
		},
		status: ProjectStatuses.IN_PROGRESS,
		authorId: '123',
		teamId: '123',
		tags: [{id: '2', value: 'в работе', color: 'cyan-inverse'}]
	},
];

export function Projects() {
	const createColumns = useCreateColumns();

	const columns = createColumns();

	return (
		<PageWrapper crumbs={[{title: 'Проекты'}]}>


			<Table<Project> dataSource={dataSource}
							columns={columns}
							rowKey={record => record.id}
							showSorterTooltip={false}
							pagination={{position: ['bottomCenter']}}
			/>
		</PageWrapper>
	)
}