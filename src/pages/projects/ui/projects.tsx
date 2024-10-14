import {PageWrapper} from "@shared/ui/page-wrapper";
import {Project, useGetProjectsQuery} from "@entities/project";
import {useCreateColumns} from "@pages/projects";
import {AutoComplete, AutoCompleteProps, Button, Space, Spin, Table} from "antd";
import React, {useCallback, useEffect, useState} from "react";

import "../style/projects.scss";
import {SkeletonTable, SkeletonTableColumns} from "@shared/ui/skeleton-table";

export function Projects() {
	const createColumns = useCreateColumns();
	const [dataSource, setDataSource] = useState<Project[]>([]);
	const [titleInput, setTitleInput] = useState('');
	const [titleInputOptions, setTitleInputOptions] = useState<AutoCompleteProps['options']>([]);
	const [filteredDataSource, setFilteredDataSource] = useState<Project[]>([]);
	const [tableKey, setTableKey] = useState(0);

	const {data, isLoading} = useGetProjectsQuery();

	const columns = createColumns()!;
	const rowCount = 3;

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
			<Space size="small" style={{marginBottom: "1rem"}}>
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

			<Spin percent="auto" size="large" style={{display: "block"}} spinning={isLoading}>
				<SkeletonTable columns={columns as SkeletonTableColumns[]} rowCount={rowCount} loading={isLoading} active={true}>
					<Table<Project> dataSource={filteredDataSource}
									columns={columns}
									rowKey={record => record.id}
									showSorterTooltip={false}
									pagination={{position: ['bottomCenter']}}
									key={tableKey}
					/>
				</SkeletonTable>
			</Spin>
		</PageWrapper>
	)
}