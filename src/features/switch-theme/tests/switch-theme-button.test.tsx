import {SwitchThemeButton} from "@features/switch-theme";
import {render} from "@testing-library/react";
import {expect} from "vitest";
import {renderWithProvider} from "@shared/tests";

describe("SwitchThemeButton", () => {
	test('renders dark mode icon in dark mode', () => {
		const btn = render(renderWithProvider(<SwitchThemeButton />));

		expect(btn.getByLabelText('dark theme icon')).toBeInTheDocument();
	});
});