import {useEffect, useReducer} from "react";
import {PageWrapper} from "@shared/ui/page-wrapper";
import {useGetProjectsQuery} from "@entities/project";
import {Actions, initialState, projectsPageReducer, setDataSource, Table} from "@pages/projects";

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
			<Actions state={state} dispatch={dispatch} unfilteredData={data}/>

			<Table state={state} isLoading={isLoading}/>
		</PageWrapper>
	)
}