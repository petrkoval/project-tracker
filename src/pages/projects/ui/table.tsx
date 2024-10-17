import {Spin, Table as AntdTable} from "antd";
import {SkeletonTable, SkeletonTableColumns} from "@shared/ui/skeleton-table";
import {Project} from "@entities/project";
import {ProjectsPageState, useCreateColumns} from "@pages/projects";

interface Props {
	state: ProjectsPageState;
	isLoading: boolean;
}

export function Table({state, isLoading}: Props) {
	const createColumns = useCreateColumns();

	const columns = createColumns()!;
	const rowCount = 10;

	return (
		<Spin percent="auto" size="large" style={{display: "block"}} spinning={isLoading}>
			<SkeletonTable columns={columns as SkeletonTableColumns[]} rowCount={rowCount} loading={isLoading}
						   active={true}>
				<AntdTable<Project> dataSource={state.dataSource}
									columns={columns}
									rowKey={record => record.id}
									showSorterTooltip={false}
									key={state.tableKey}
									pagination={{position: ['bottomCenter']}}
				/>
			</SkeletonTable>
		</Spin>
	);
}