import {Project} from "@entities/project";
import {ProjectsPageActions} from "@pages/projects";
import {AutoCompleteProps} from "antd";

export function filterDataSource() {
	return {
		type: ProjectsPageActions.FILTER_DATASOURCE
	};
}

export function resetFilters(payload: Project[]) {
	return {
		type: ProjectsPageActions.RESET_FILTERS,
		payload
	};
}

export function setDataSource(payload: Project[]) {
	return {
		type: ProjectsPageActions.SET_DATASOURCE,
		payload
	};
}

export function setSearchInput(payload: string) {
	return {
		type: ProjectsPageActions.SET_SEARCH_INPUT,
		payload
	};
}

export function setSearchInputOptions(payload: AutoCompleteProps['options']) {
	return {
		type: ProjectsPageActions.SET_SEARCH_INPUT_OPTIONS,
		payload
	};
}