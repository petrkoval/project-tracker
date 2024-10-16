import {useEffect, useReducer} from "react";
import {PageWrapper} from "@shared/ui/page-wrapper";
import {useGetProjectsQuery} from "@entities/project";
import {Table} from "@pages/projects/ui/table.tsx";
import {Actions, initialState, projectsPageReducer, setDataSource} from "@pages/projects";

import "../style/projects.scss";

export function ProjectsPage() {
	const {data, isLoading} = useGetProjectsQuery();
	const [state, dispatch] = useReducer(projectsPageReducer, initialState);

	useEffect(() => {
		if (data) {
			dispatch(setDataSource(data));
		}
	}, [data]);

	return (
		<PageWrapper crumbs={[{title: 'Проекты'}]}>
			<Actions state={state} dispatch={dispatch} unfilteredData={data}/>й

			<Table state={state} isLoading={isLoading}/>
		</PageWrapper>
	)
}