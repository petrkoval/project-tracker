import {PageWrapper} from "@shared/ui/page-wrapper";
import {Project, useGetProjectsQuery} from "@entities/project";
import {useCreateColumns} from "@pages/projects";
import {AutoComplete, AutoCompleteProps, Button, Space, Spin, Table} from "antd";
import React, {useCallback, useEffect, useState} from "react";
import {SkeletonTable, SkeletonTableColumns} from "@shared/ui/skeleton-table";

import "../style/projects.scss";

export function Projects() {
	const createColumns = useCreateColumns();
	const [filteredDataSource, setFilteredDataSource] = useState<Project[]>([]);
	const [titleInput, setTitleInput] = useState('');
	const [titleInputOptions, setTitleInputOptions] = useState<AutoCompleteProps['options']>([]);
	const [tableKey, setTableKey] = useState(0);

	const {data, isLoading} = useGetProjectsQuery();

	const columns = createColumns()!;
	const rowCount = 3;

	useEffect(() => {
		if (data) {
			setFilteredDataSource(data);
		}
	}, [data]);

	const getTitlesFromDataSource = useCallback((text: string) => {
		if (text) {
			const titles = filteredDataSource.map(record => record.title);
			const titlesIncludingText = titles.filter(title => title.toLowerCase().includes(text.toLowerCase()));

			return titlesIncludingText.map(title => ({value: title}));
		} else return [];
	}, [filteredDataSource]);

	const filterDataSource = useCallback(() => {
		if (data) {
			const filteredDataSource = data.filter(record => record.title.toLowerCase().includes(titleInput.toLowerCase()));

			setFilteredDataSource(filteredDataSource);
		}
	}, [data, titleInput]);

	const handleInputEnterPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') {
			filterDataSource();
		}
	}

	const clearFilters = () => {
		setTitleInput('');
		setTitleInputOptions([]);
		setFilteredDataSource(data!);

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
					onSearch={text => setTitleInputOptions(getTitlesFromDataSource(text))}
					placeholder="Поиск по названию"
					onKeyDown={e => handleInputEnterPress(e)}
				/>

				<Button type="link" onClick={filterDataSource}>Поиск</Button>
				<Button type="default" onClick={clearFilters}>Сбросить фильтры</Button>
				<div></div>
			</Space>

			<Spin percent="auto" size="large" style={{display: "block"}} spinning={isLoading}>
				<SkeletonTable columns={columns as SkeletonTableColumns[]} rowCount={rowCount} loading={isLoading}
							   active={true}>
					<Table<Project> dataSource={filteredDataSource}
									columns={columns}
									rowKey={record => record.id}
									showSorterTooltip={false}
									key={tableKey}
									pagination={{position: ['bottomCenter']}}
					/>
				</SkeletonTable>
			</Spin>
		</PageWrapper>
	)
}