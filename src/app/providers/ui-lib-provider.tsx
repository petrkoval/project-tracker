import {useSelector} from "react-redux";
import {selectThemeToken} from "@features/switch-theme";
import {ConfigProvider, theme} from "antd";
import {ReactNode} from "react";

export function UiLibProvider({children}: { children: ReactNode }) {
	const themeToken = useSelector(selectThemeToken);

	return (
		<ConfigProvider theme={{
			algorithm: theme.darkAlgorithm,
			token: themeToken,
			cssVar: true
		}}>
			{children}
		</ConfigProvider>
	)
}