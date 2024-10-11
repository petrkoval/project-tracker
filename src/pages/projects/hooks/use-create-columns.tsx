import {TableProps, Tag} from "antd";
import {Project} from "@entities/project";
import {createTableFiltersFromEnum, useDateFilter} from "@pages/projects";
import {ProjectStatuses} from "@shared/enums";
import {DateTime} from "luxon";

export function useCreateColumns(): () => TableProps<Project>['columns'] {
	const dateFilter = useDateFilter();

	return function () {
		return [
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
				filters: createTableFiltersFromEnum(ProjectStatuses),
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
			},
			{
				title: 'Теги',
				dataIndex: 'tags',
				key: 'tags',
				render: (_, {tags}) => tags.map(({id, value, color}) => (
					<Tag color={color} key={id}>{value}</Tag>
				)),
			},
		];
	}
}