import {Header} from "@widgets/header";
import {renderWithRouter} from "@shared/tests";
import {userEvent} from "@testing-library/user-event";

describe('Header', () => {
	test('has logo link', () => {
		const {getByAltText, getByText, getByRole} = renderWithRouter(<Header/>);

		expect(getByRole('link', {name: 'home'})).toBeInTheDocument();
		expect(getByAltText('logo')).toBeInTheDocument();
		expect(getByText('Project Tracker')).toBeInTheDocument();
	});

	test('has action buttons', () => {
		const {getByRole} = renderWithRouter(<Header/>);

		expect(getByRole('button', {name: 'notifications'})).toBeInTheDocument();
		expect(getByRole('button', {name: 'settings'})).toBeInTheDocument();
		expect(getByRole('button', {name: 'account'})).toBeInTheDocument();
	});

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
});