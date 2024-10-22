import {renderWithStoreRouter} from "@shared/tests";
import {Sider} from "@widgets/sider";
import {userEvent} from "@testing-library/user-event";

afterEach(() => {
	localStorage.clear();
})

describe('SiderTrigger', () => {
	test('renders with left icon', () => {
		const {getByRole} = renderWithStoreRouter(<Sider/>);

		expect(getByRole('img', {name: 'left'})).toBeInTheDocument();
	});

	test('changes icon after click', async () => {
		const {getByRole, findByRole} = renderWithStoreRouter(<Sider/>);

		await userEvent.click(getByRole('img', {name: 'left'}));

		expect(await findByRole('img', {name: 'right'})).toBeInTheDocument();
	});

	test('aside changes width on trigger click', async () => {
		const sider = renderWithStoreRouter(<Sider/>);
		const trigger = sider.getByRole('img', {name: 'left'});

		expect(sider.getByRole('complementary')).toHaveStyle({width: '200px'});

		await userEvent.click(trigger);

		expect(sider.getByRole('complementary')).toHaveStyle({width: '80px'});
	});
});