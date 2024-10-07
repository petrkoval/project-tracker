import {Header} from "@widgets/header";
import {renderWithRouter} from "@shared/tests";

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
});