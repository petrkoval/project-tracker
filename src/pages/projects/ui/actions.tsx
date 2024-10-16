import {AutoComplete, Button, Space} from "antd";
import React, {Dispatch} from "react";
import {
	compareSearchValues,
	filterDataSource,
	ProjectsPageAction,
	ProjectsPageState,
	resetFilters,
	setSearchInput, setSearchInputOptions
} from "@pages/projects";
import {Project} from "@entities/project";

interface Props {
	state: ProjectsPageState;
	dispatch: Dispatch<ProjectsPageAction>;
	unfilteredData?: Project[];
}

export function Actions({state, dispatch, unfilteredData = []}: Props) {
	const handleInputEnterPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') {
			dispatch(filterDataSource());
		}
	}

	const getTitlesFromDataSource = (text: string) => {
		if (text) {
			const titles = state.dataSource.map(record => record.title);
			const titlesIncludingText = titles.filter(title => compareSearchValues(title, text));

			return titlesIncludingText.map(title => ({value: title}));
		} else return [];
	}

	const clearFilters = () => {
		dispatch(resetFilters(unfilteredData));
	}

	const onSearch = (text: string) => {
		const titles = getTitlesFromDataSource(text);
		dispatch(setSearchInputOptions(titles));
	}

	return (
		<Space size="small" style={{marginBottom: "1rem"}}>
			<AutoComplete
				style={{width: 200}}
				value={state.searchInput}
				onChange={text => dispatch(setSearchInput(text))}
				options={state.searchInputOptions}
				onSearch={onSearch}
				placeholder="Поиск по названию"
				onKeyDown={e => handleInputEnterPress(e)}
			/>

			<Button type="link" onClick={filterDataSource}>Поиск</Button>
			<Button type="default" onClick={clearFilters}>Сбросить фильтры</Button>
		</Space>
	);
}