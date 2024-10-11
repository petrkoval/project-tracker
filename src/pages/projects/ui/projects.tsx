import {PageWrapper} from "@shared/ui/page-wrapper";
import {Project} from "@entities/project";
import {ProjectStatuses} from "@shared/enums";
import {useCreateColumns} from "@pages/projects";
import {AutoComplete, AutoCompleteProps, Button, Space, Table} from "antd";
import React, {useCallback, useState} from "react";
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
	const [titleInput, setTitleInput] = useState('');
	const [titleInputOptions, setTitleInputOptions] = useState<AutoCompleteProps['options']>([]);
	const [filteredDataSource, setFilteredDataSource] = useState(dataSource);

	const columns = createColumns();

	const getTitlesFromData = useCallback((text: string) => {
		if (text) {
			const titles = dataSource.map(record => record.title);
			const titlesIncludingText = titles.filter(title => title.toLowerCase().includes(text.toLowerCase()));

			return titlesIncludingText.map(title => ({value: title}));
		} else return [];
	}, [dataSource]);

	const filterDataSource = useCallback(() => {
		const filteredDataSource = dataSource.filter(data => data.title.toLowerCase().includes(titleInput.toLowerCase()));

		setFilteredDataSource(filteredDataSource);
	}, [dataSource, titleInput]);

	const handleInputEnterPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') {
			filterDataSource();
		}
	}

	return (
		<PageWrapper crumbs={[{title: 'Проекты'}]}>
			<Space size="small">
				<AutoComplete
					style={{width: 200}}
					value={titleInput}
					onChange={text => setTitleInput(text)}
					options={titleInputOptions}
					onSearch={text => setTitleInputOptions(getTitlesFromData(text))}
					placeholder="Поиск по названию"
					onKeyDown={e => handleInputEnterPress(e)}
				/>

				<Button type="link" onClick={filterDataSource}>Поиск</Button>
			</Space>

			<Table<Project> dataSource={filteredDataSource}
							columns={columns}
							rowKey={record => record.id}
							showSorterTooltip={false}
							pagination={{position: ['bottomCenter']}}
							style={{marginTop: "1rem"}}
			/>
		</PageWrapper>
	)
}