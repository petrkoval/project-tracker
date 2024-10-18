import {SkeletonTable} from "@shared/ui/skeleton-table";
import {render} from "@testing-library/react";

describe('SkeletonTable', () => {
	test('renders columns', () => {
		const columnsCount = 5;
		const columns = Array(columnsCount).fill(null).map((_, i) => ({key: `${i}`}));
		const {getAllByRole} = render(<SkeletonTable columns={columns} loading/>);

		expect(getAllByRole('columnheader').length).toBe(columnsCount);
	});

	test('renders children after loaded', async () => {
		const text = 'test text';
		const {rerender, queryByText, getByText} = render(
			<SkeletonTable columns={[{key: `1`}]} loading>
				<div>{text}</div>
			</SkeletonTable>
		);

		expect(queryByText(text)).toBe(null);

		rerender(
			<SkeletonTable columns={[{key: `1`}]}>
				<div>{text}</div>
			</SkeletonTable>
		);

		expect(getByText(text)).toBeInTheDocument();
	});

	test('renders rows', () => {
		const columnsCount = 5;
		const rowCount = 5;
		const columns = Array(columnsCount).fill(null).map((_, i) => ({key: `${i}`}));
		const {getAllByRole} = render(<SkeletonTable columns={columns} rowCount={rowCount} loading/>);

		const rowCountWithHeaderRow = rowCount + 1;
		expect(getAllByRole('row').length).toBe(rowCountWithHeaderRow);
	});

	test('renders skeletons', () => {
		const rowCount = 5;
		const columnsCount = 3;
		const columns = Array(columnsCount).fill(null).map((_, i) => ({key: `${i}`}));
		const {container} = render(<SkeletonTable columns={columns} rowCount={rowCount} loading/>);

		expect(container.getElementsByClassName('ant-skeleton').length).toBe(rowCount * columnsCount);
	});
});