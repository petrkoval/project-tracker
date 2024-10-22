import {renderWithStoreRouter} from "@shared/tests";
import {Sider} from "@widgets/sider";
import {userEvent} from "@testing-library/user-event";
import {expect} from "vitest";

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

	describe('local storage', () => {
		test('false by default', () => {
			renderWithStoreRouter(<Sider/>);

			expect(localStorage.getItem('siderCollapsed')).toBe(JSON.stringify(false));
		});

		test('true after first toggle', async () => {
			const {container} = renderWithStoreRouter(<Sider/>);
			const trigger = container.getElementsByClassName('ant-layout-sider-trigger')[0];
			await userEvent.click(trigger);

			expect(localStorage.getItem('siderCollapsed')).toBe(JSON.stringify(true));
		});

		test('false after two toggles', async () => {
			const {container} = renderWithStoreRouter(<Sider/>);
			const trigger = container.getElementsByClassName('ant-layout-sider-trigger')[0];
			await userEvent.click(trigger);
			await userEvent.click(trigger);

			expect(localStorage.getItem('siderCollapsed')).toBe(JSON.stringify(false));
		});
	});
});