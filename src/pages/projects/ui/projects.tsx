import {PageWrapper} from "@shared/ui/page-wrapper";
import {Project, useGetProjectsQuery} from "@entities/project";
import {useCreateColumns} from "@pages/projects";
import {AutoComplete, AutoCompleteProps, Button, Skeleton, Space, Spin, Table} from "antd";
import React, {useCallback, useEffect, useState} from "react";

import "../style/projects.scss";

export function Projects() {
	const createColumns = useCreateColumns();
	const [dataSource, setDataSource] = useState<Project[]>([]);
	const [titleInput, setTitleInput] = useState('');
	const [titleInputOptions, setTitleInputOptions] = useState<AutoCompleteProps['options']>([]);
	const [filteredDataSource, setFilteredDataSource] = useState<Project[]>([]);
	const [tableKey, setTableKey] = useState(0);

	const {data, isLoading} = useGetProjectsQuery();

	const columns = createColumns();

	useEffect(() => {
		if (data) {
			setDataSource(data);
			setFilteredDataSource(data);
		}
	}, [data]);

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

	const clearFilters = () => {
		setTitleInput('');
		setTitleInputOptions([]);
		setFilteredDataSource(dataSource);

		rerenderTable();
	}

	const rerenderTable = () => {
		setTableKey(prev => prev + 1);
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
				<Button type="default" onClick={clearFilters}>Сбросить фильтры</Button>
			</Space>

			{
				isLoading &&
				<Spin percent="auto" size="large" style={{marginTop: "1rem", display: "block"}}>
					<Skeleton style={{marginTop: "1rem"}}/>
				</Spin>
			}

			{
				data && !isLoading &&
                <Table<Project> dataSource={filteredDataSource}
                                columns={columns}
                                rowKey={record => record.id}
                                showSorterTooltip={false}
                                pagination={{position: ['bottomCenter']}}
                                style={{marginTop: "1rem"}}
                                key={tableKey}
                />
			}
		</PageWrapper>
	)
}