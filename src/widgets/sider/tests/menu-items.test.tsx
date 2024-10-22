import {renderWithStoreRouter} from "@shared/tests";
import {Sider} from "@widgets/sider";
import {Links} from "@shared/enums";


describe('menu items', () => {
	test('Моя страница', () => {
		const {getByText} = renderWithStoreRouter(<Sider/>)

		expect(getByText('Моя страница')).toBeInTheDocument();
		expect(getByText('Моя страница')).toHaveAttribute('href', Links.HOME);
	});

	test('Проекты', () => {
		const {getByText} = renderWithStoreRouter(<Sider/>)

		expect(getByText('Проекты')).toBeInTheDocument();
		expect(getByText('Проекты')).toHaveAttribute('href', Links.PROJECTS);
	});

	test('Дашборды', () => {
		const {getByText} = renderWithStoreRouter(<Sider/>)

		expect(getByText('Дашборды')).toBeInTheDocument();
		expect(getByText('Дашборды')).toHaveAttribute('href', Links.DASHBOARDS);
	});

	test('Статистика', () => {
		const {getByText} = renderWithStoreRouter(<Sider/>)

		expect(getByText('Статистика')).toBeInTheDocument();
		expect(getByText('Статистика')).toHaveAttribute('href', Links.STATS);
	});

	test('Задачи', () => {
		const {getByText} = renderWithStoreRouter(<Sider/>)

		expect(getByText('Задачи')).toBeInTheDocument();
		expect(getByText('Задачи')).toHaveAttribute('href', Links.TASKS);
	});

	test('Сообщения', () => {
		const {getByText} = renderWithStoreRouter(<Sider/>)

		expect(getByText('Сообщения')).toBeInTheDocument();
		expect(getByText('Сообщения')).toHaveAttribute('href', Links.MESSAGES);
	});
});