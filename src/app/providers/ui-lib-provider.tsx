import {useSelector} from "react-redux";
import {selectTheme, ThemeNames} from "@features/switch-theme";
import {ConfigProvider, theme} from "antd";
import {ReactNode} from "react";

export function UiLibProvider({children}: { children: ReactNode }) {
	const currentTheme = useSelector(selectTheme);

	return (
		<ConfigProvider theme={{
			...currentTheme,
			algorithm: currentTheme.themeName === ThemeNames.dark
				? theme.darkAlgorithm
				: theme.defaultAlgorithm
		}}>
			{children}
		</ConfigProvider>
	)
}