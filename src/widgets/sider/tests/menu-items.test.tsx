import {renderWithStoreRouter} from "@shared/tests";
import {Sider} from "@widgets/sider";


describe('menu items has proper names and links', () => {
	test('Моя страница', () => {
		const {getByText} = renderWithStoreRouter(<Sider/>)

		expect(getByText('Моя страница')).toBeInTheDocument();
		expect(getByText('Моя страница')).toHaveAttribute('href', '/');
	});

	test('Проекты', () => {
		const {getByText} = renderWithStoreRouter(<Sider/>)

		expect(getByText('Проекты')).toBeInTheDocument();
		expect(getByText('Проекты')).toHaveAttribute('href', '/projects');
	});

	test('Дашборды', () => {
		const {getByText} = renderWithStoreRouter(<Sider/>)

		expect(getByText('Дашборды')).toBeInTheDocument();
		expect(getByText('Дашборды')).toHaveAttribute('href', '/');
	});

	test('Статистика', () => {
		const {getByText} = renderWithStoreRouter(<Sider/>)

		expect(getByText('Статистика')).toBeInTheDocument();
		expect(getByText('Статистика')).toHaveAttribute('href', '/');
	});

	test('Задачи', () => {
		const {getByText} = renderWithStoreRouter(<Sider/>)

		expect(getByText('Задачи')).toBeInTheDocument();
		expect(getByText('Задачи')).toHaveAttribute('href', '/');
	});

	test('Сообщения', () => {
		const {getByText} = renderWithStoreRouter(<Sider/>)

		expect(getByText('Сообщения')).toBeInTheDocument();
		expect(getByText('Сообщения')).toHaveAttribute('href', '/');
	});
});