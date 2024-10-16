import {PageWrapper} from "@shared/ui/page-wrapper";
import {renderWithRouter} from "@shared/tests";
import {Links} from "@shared/enums";
import {Link} from "react-router-dom";

describe('PageWrapper', () => {
	test('has home link', () => {
		const {getByRole} = renderWithRouter(<PageWrapper/>);

		expect(getByRole('link')).toBeInTheDocument();
		expect(getByRole('link')).toHaveAttribute('href', Links.HOME);
	});

	test('has home crumb icon', () => {
		const {getByLabelText} = renderWithRouter(<PageWrapper/>);

		expect(getByLabelText(/home icon/)).toBeInTheDocument();
	});

	test('renders crumb for current location', () => {
		const currentCrumbText = 'Проекты';
		const {getByText} = renderWithRouter(<PageWrapper crumbs={[{title: currentCrumbText}]}/>);

		expect(getByText(currentCrumbText)).toBeInTheDocument();
		expect(getByText(currentCrumbText)).not.toHaveAttribute('href');
	});

	test('renders more crumbs', () => {
		const {getByText} = renderWithRouter(<PageWrapper crumbs={[
			{title: <Link to='/pages'>Страницы</Link>},
			{title: <Link to='/projects'>Проекты</Link>},
			{title: 'Дашборды'},
		]}/>);

		expect(getByText(/Страницы/)).toBeInTheDocument();
		expect(getByText(/Страницы/)).toHaveAttribute('href', '/pages');

		expect(getByText(/Проекты/)).toBeInTheDocument();
		expect(getByText(/Проекты/)).toHaveAttribute('href', '/projects');

		expect(getByText(/Дашборды/)).toBeInTheDocument();
		expect(getByText(/Дашборды/)).not.toHaveAttribute('href');
	});

	test('renders separators', () => {
		const {getAllByText} = renderWithRouter(<PageWrapper crumbs={[
			{title: 'Дашборды'},
			{title: 'Дашборды'},
			{title: 'Дашборды'},
		]}/>);

		expect(getAllByText(/>/).length).toBe(3);
	});

	test('renders children', () => {
		const {getByText} = renderWithRouter(<PageWrapper><div>child</div></PageWrapper>);

		expect(getByText(/child/)).toBeInTheDocument();
	});
});