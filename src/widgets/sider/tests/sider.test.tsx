import {renderWithStoreRouter} from "@shared/tests";
import {Sider} from "@widgets/sider";

describe('Sider', () => {
	test('has menu', () => {
		const {getByRole} = renderWithStoreRouter(<Sider/>);

		expect(getByRole('menu')).toBeInTheDocument();
	});

	test('has menu items and separator', () => {
		const {getAllByRole} = renderWithStoreRouter(<Sider/>);

		expect(getAllByRole('menuitem').length).toBe(6);
		expect(getAllByRole('link').length).toBe(6);
	});

	test('menu has separator', () => {
		const {getByRole, getAllByRole} = renderWithStoreRouter(<Sider/>);

		expect(getByRole('separator')).toBeInTheDocument();
		expect(getAllByRole('separator').length).toBe(1);
	});
});