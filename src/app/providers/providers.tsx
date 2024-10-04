import {ReactNode, StrictMode} from "react";
import {BrowserRouter} from "react-router-dom";
import {ConfigProvider, theme} from "antd";
import {Provider} from "react-redux";
import {store} from "@app/store";
import {darkThemeToken} from "@features/switch-theme";

export function Providers({children}: { children: ReactNode }) {
	return (
		<StrictMode>
			<Provider store={store}>
				<ConfigProvider theme={{
					algorithm: theme.darkAlgorithm,
					token: darkThemeToken
				}}>
					<BrowserRouter>
						{children}
					</BrowserRouter>
				</ConfigProvider>
			</Provider>
		</StrictMode>
	)
}