import {SwitchThemeButton, ThemeNames, themeTokenReducer, toggleTheme} from "@features/switch-theme";
import {expect} from "vitest";
import {renderWithStoreProvider} from "@shared/tests";
import {setupStore} from "@app/store";

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
		const state = themeTokenReducer(undefined, {type: 'unknown'});

		expect(state).toHaveProperty('themeName', ThemeNames.dark);
		expect(state.token).toHaveProperty('colorPrimary', '#f01879');
		expect(state.components?.Layout).toHaveProperty('siderBg', '#1f1f1f');

		const newState = themeTokenReducer(state, toggleTheme());

		expect(newState).toHaveProperty('themeName', ThemeNames.light);
		expect(newState.token).toHaveProperty('colorPrimary', '#f01879');
		expect(newState.components?.Layout).toHaveProperty('lightSiderBg', '#F8F9FA');
	});
});