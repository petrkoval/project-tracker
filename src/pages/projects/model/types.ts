import {Project} from "@entities/project";
import {AutoCompleteProps} from "antd";

export interface ProjectsPageState {
	dataSource: Project[];
	searchInput: string;
	searchInputOptions: AutoCompleteProps['options'];
	tableKey: number;
}

export interface ProjectsPageAction {
	type: ProjectsPageActions;
	payload?: Project[] | string | AutoCompleteProps['options'];
}

export enum ProjectsPageActions {
	FILTER_DATASOURCE,
	RESET_FILTERS,
	SET_DATASOURCE,
	SET_SEARCH_INPUT,
	SET_SEARCH_INPUT_OPTIONS,
}

export function isProjectArray(data: Project[] | string | AutoCompleteProps['options']): data is Project[] {
	return Array.isArray(data) && 'id' in data[0] && 'title' in data[0] && 'description' in data[0];
}

export function isString(data: Project[] | string | AutoCompleteProps['options']): data is string {
	return typeof data === 'string';
}

export function isOptions(data: Project[] | string | AutoCompleteProps['options']): data is AutoCompleteProps['options'] {
	return Array.isArray(data) && 'value' in data[0];
}