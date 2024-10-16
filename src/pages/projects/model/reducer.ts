import {
	compareSearchValues, isOptions,
	isProjectArray, isString,
	ProjectsPageAction,
	ProjectsPageActions,
	ProjectsPageState
} from "@pages/projects";

export const initialState: ProjectsPageState = {
	dataSource: [],
	searchInput: '',
	searchInputOptions: [],
	tableKey: 0
};

export const projectsPageReducer = (state: ProjectsPageState, action: ProjectsPageAction): ProjectsPageState => {
	switch (action.type) {
		case ProjectsPageActions.FILTER_DATASOURCE:
			const dataSource = state.dataSource
				.filter(record => compareSearchValues(record.title, state.searchInput));

			return {
				...state,
				dataSource
			};
		case ProjectsPageActions.RESET_FILTERS:
			return {
				...initialState,
				tableKey: state.tableKey + 1,
				dataSource: isProjectArray(action.payload) ? action.payload : state.dataSource
			};
		case ProjectsPageActions.SET_DATASOURCE:
			return {
				...state,
				dataSource: isProjectArray(action.payload) ? action.payload : state.dataSource
			};
		case ProjectsPageActions.SET_SEARCH_INPUT:
			return {
				...state,
				searchInput: isString(action.payload) ? action.payload : state.searchInput
			};
		case ProjectsPageActions.SET_SEARCH_INPUT_OPTIONS:
			return {
				...state,
				searchInputOptions: isOptions(action.payload) ? action.payload : state.searchInputOptions
			};
		default:
			return state;
	}
}