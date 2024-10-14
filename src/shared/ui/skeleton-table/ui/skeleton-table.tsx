import {Skeleton, SkeletonProps, Table} from "antd";
import {ColumnsType} from "antd/es/table";

export interface SkeletonTableColumns {
	key: string;
}

export type SkeletonTableProps = SkeletonProps & {
	columns: ColumnsType<SkeletonTableColumns>;
	rowCount: number;
}

const createEmptyDataSource = (rowCount: number) => {
	const rows = [...Array(rowCount)];
	return rows.map((_, i) => ({key: `${i}`}));
}

export function SkeletonTable({
  loading = false,
  active = false,
  rowCount = 5,
  columns,
  children,
  className
}: SkeletonTableProps): JSX.Element {
	return loading ? (
		<Table rowKey={col => col.key}
			   pagination={false}
			   dataSource={createEmptyDataSource(rowCount)}
			   columns={columns.map(col => ({
				   ...col,
				   render: () => (
					   <Skeleton key={col.key}
								 title
								 paragraph={false}
								 active={active}
								 className={className}
					   />
				   )
			   }))}
		/>
	) : (
		<>
			{children}
		</>
	)
}