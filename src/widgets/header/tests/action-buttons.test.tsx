import {renderWithRouter} from "@shared/tests";
import {Header} from "@widgets/header";
import {userEvent} from "@testing-library/user-event";


describe('buttons shows tooltips on hover', () => {
	test('notifications button shows tooltip on hover', async () => {
		const {findByText, getByRole} = renderWithRouter(<Header/>);

		await userEvent.hover(getByRole('button', {name: 'notifications'}));

		expect(await findByText('Уведомления')).toBeInTheDocument();
	});

	test('settings button shows tooltip on hover', async () => {
		const {findByText, getByRole} = renderWithRouter(<Header/>);

		await userEvent.hover(getByRole('button', {name: 'settings'}));

		expect(await findByText('Настройки')).toBeInTheDocument();
	});

	test('account button shows tooltip on hover', async () => {
		const {findByText, getByRole} = renderWithRouter(<Header/>);

		await userEvent.hover(getByRole('button', {name: 'account'}));

		expect(await findByText('Учетная запись')).toBeInTheDocument();
	});
});