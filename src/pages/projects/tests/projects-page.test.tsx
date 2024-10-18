import {ProjectsPage} from "@pages/projects";
import {renderWithStoreRouter} from "@shared/tests";

describe('projects-page', () => {
	test('renders proper crumbs', () => {
		const {getByRole, getByText} = renderWithStoreRouter(<ProjectsPage/>);

		expect(getByRole('link', {name: 'home icon'})).toBeInTheDocument();
		expect(getByText(/>/)).toBeInTheDocument();
		expect(getByText(/Проекты/)).toBeInTheDocument();
	});

	test('renders table', () => {
		const {getByRole} = renderWithStoreRouter(<ProjectsPage/>);

		expect(getByRole('table')).toBeInTheDocument();
	});

	test('renders actions', () => {
		const {getByRole, getByText} = renderWithStoreRouter(<ProjectsPage/>);

		expect(getByRole('combobox')).toBeInTheDocument();
		expect(getByText(/Поиск по названию/)).toBeInTheDocument();
		expect(getByRole('button', {name: 'search'})).toBeInTheDocument();
		expect(getByRole('button', {name: 'clear filters'})).toBeInTheDocument();
	});
});