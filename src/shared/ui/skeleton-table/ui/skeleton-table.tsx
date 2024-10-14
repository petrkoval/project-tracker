import {Skeleton, SkeletonProps, Table} from "antd";
import {ColumnsType} from "antd/es/table";

export interface SkeletonTableColumns {
	key: string;
}

export type SkeletonTableProps = SkeletonProps & {
	columns: ColumnsType<SkeletonTableColumns>;
	rowCount: number;
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
		<Table rowKey="key"
			   pagination={false}
			   dataSource={[...Array(rowCount)].map((_, i) => ({key: `${i}`}))}
			   columns={(columns as { key: number }[]).map(col => ({
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