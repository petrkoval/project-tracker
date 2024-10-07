import {SwitchThemeButton, toggleTheme} from "@features/switch-theme";
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
});