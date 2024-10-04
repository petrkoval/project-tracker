import {ReactNode, StrictMode} from "react";
import {BrowserRouter} from "react-router-dom";
import {ConfigProvider, theme} from "antd";
import {Provider, useSelector} from "react-redux";
import {store} from "@app/store";
import {selectThemeToken} from "@features/switch-theme";

export function Providers({children}: { children: ReactNode }) {
	const themeToken = useSelector(selectThemeToken);

	return (
		<StrictMode>
			<Provider store={store}>
				<ConfigProvider theme={{
					algorithm: theme.darkAlgorithm,
					token: themeToken
				}}>
					<BrowserRouter>
						{children}
					</BrowserRouter>
				</ConfigProvider>
			</Provider>
		</StrictMode>
	)
}