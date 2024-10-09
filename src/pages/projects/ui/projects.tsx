import {Table, TableProps} from "antd";
import {PageWrapper} from "@shared/ui/page-wrapper";
import {Project} from "@entities/project";
import {ProjectStatuses} from "@shared/enums";
import {createTableFiltersFromObject} from "@pages/projects";
import {DateTime} from "luxon";
import {useDateFilter} from "@pages/projects/hooks/use-date-filter.tsx";

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
	},
];

export function Projects() {
	const dateFilter = useDateFilter();

	const columns: TableProps<Project>['columns'] = [
		{
			title: 'Название',
			dataIndex: 'title',
			key: 'title',
			sorter: (first, second) => first.title.localeCompare(second.title)
		},
		{
			title: 'Статус',
			dataIndex: 'status',
			key: 'status',
			filters: createTableFiltersFromObject(ProjectStatuses),
			onFilter: (value, record) => record.status === value
		},
		{
			title: 'Автор',
			dataIndex: 'authorId',
			key: 'authorId',
			sorter: (first, second) => first.authorId.localeCompare(second.authorId)
		},
		{
			title: 'Команда',
			dataIndex: 'teamId',
			key: 'teamId',
		},
		{
			title: 'Период',
			dataIndex: 'period',
			key: 'period',
			render: (_, {period}) => (
				<time>
					{period.start.toLocaleString(DateTime.DATE_SHORT)} - {period.end.toLocaleString(DateTime.DATE_SHORT)}
				</time>
			),
		},
		{
			title: 'Начало',
			dataIndex: 'period',
			key: 'period.start',
			sorter: (first, second) => +first.period.start - +second.period.start,
			render: (_, {period}) => (
				<time>
					{period.start.toLocaleString(DateTime.DATE_SHORT)}
				</time>
			),
			...dateFilter('start')
		},
		{
			title: 'Дедлайн',
			dataIndex: 'period',
			key: 'period.end',
			sorter: (first, second) => +first.period.end - +second.period.end,
			render: (_, {period}) => (
				<time>
					{period.end.toLocaleString(DateTime.DATE_SHORT)}
				</time>
			),
			...dateFilter('end')
		}
	];

	return (
		<PageWrapper crumbs={[
			{title: 'Проекты'}
		]}>
			<Table<Project> dataSource={dataSource}
							columns={columns}
							rowKey={record => record.id}
							showSorterTooltip={false}
			/>
		</PageWrapper>
	)
}