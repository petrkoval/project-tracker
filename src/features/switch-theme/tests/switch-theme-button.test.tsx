import {SwitchThemeButton, ThemeNames, themeReducer, toggleTheme} from "@features/switch-theme";
import {expect} from "vitest";
import {renderWithStoreProvider} from "@shared/tests";
import {setupStore} from "@app/store";

afterEach(() => {
	localStorage.clear();
});

describe("SwitchThemeButton", () => {
	test('renders dark mode icon in dark mode', () => {
		const {getByLabelText} = renderWithStoreProvider(<SwitchThemeButton/>);

		expect(getByLabelText('dark theme icon')).toBeInTheDocument();
	});

	test('renders light mode icon in light mode', () => {
		const store = setupStore();
		store.dispatch(toggleTheme());

		const {getByLabelText} = renderWithStoreProvider(<SwitchThemeButton/>, {
			store
		});

		expect(getByLabelText('light theme icon')).toBeInTheDocument();
	});

	test('switches theme in store', () => {
		renderWithStoreProvider(<SwitchThemeButton/>);
		const state = themeReducer(undefined, {type: 'unknown'});

		expect(state).toHaveProperty('themeName', ThemeNames.dark);
		expect(state.token).toHaveProperty('colorPrimary', '#f01879');
		expect(state.components?.Layout).toHaveProperty('siderBg', '#1f1f1f');

		const newState = themeReducer(state, toggleTheme());

		expect(newState).toHaveProperty('themeName', ThemeNames.light);
		expect(newState.token).toHaveProperty('colorPrimary', '#f01879');
		expect(newState.components?.Layout).toHaveProperty('lightSiderBg', '#F8F9FA');
	});

	describe('local storage', () => {
		test('null by default', () => {
			renderWithStoreProvider(<SwitchThemeButton/>);

			expect(localStorage.getItem('theme')).toBe(null);
		});

		test('light after first toggle', () => {
			renderWithStoreProvider(<SwitchThemeButton/>);
			themeReducer(undefined, toggleTheme());

			expect(localStorage.getItem('theme')).toBe(ThemeNames.light);
		});

		test('dark after two toggles', () => {
			renderWithStoreProvider(<SwitchThemeButton/>);
			themeReducer(undefined, toggleTheme());
			themeReducer(undefined, toggleTheme());

			expect(localStorage.getItem('theme')).toBe(ThemeNames.dark);
		});
	});
});