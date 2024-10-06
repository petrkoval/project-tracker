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
			cssVar: true,
			components: {
				Layout: {
					siderBg: '#1f1f1f',
					triggerBg: '#1f1f1f',
					headerBg: '#1f1f1f',
					footerBg: '#1f1f1f',
				},
				Menu: {
					darkItemBg: '#1f1f1f',
				}
			}
		}}>
			{children}
		</ConfigProvider>
	)
}