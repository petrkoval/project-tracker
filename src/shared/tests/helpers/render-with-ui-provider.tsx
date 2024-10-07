import {PropsWithChildren, ReactNode} from "react";
import {render, RenderOptions} from "@testing-library/react";
import {darkTheme, lightTheme, ThemeNames} from "@features/switch-theme";
import {ConfigProvider, theme} from "antd";

interface ExtendedRenderOptions extends RenderOptions {
	themeName?: ThemeNames;
}

export function renderWithUiProvider(
	component: ReactNode,
	{
		themeName = ThemeNames.dark,
		...renderOptions
	}: ExtendedRenderOptions = {}
) {
	function Wrapper({children}: PropsWithChildren<{}>) {
		return (
			<ConfigProvider theme={{
				...(themeName === ThemeNames.dark ? darkTheme : lightTheme),
				algorithm: themeName === ThemeNames.dark
					? theme.darkAlgorithm
					: theme.defaultAlgorithm
			}}>
				{children}
			</ConfigProvider>
		)
	}

	return render(component, {wrapper: Wrapper, ...renderOptions});
}