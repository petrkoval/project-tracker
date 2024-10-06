import {ReactNode, StrictMode} from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "@app/store";
import {UiLibProvider} from "@app/providers/ui-lib-provider.tsx";

export function Providers({children}: { children: ReactNode }) {

	return (
		<StrictMode>
			<Provider store={store}>
				<UiLibProvider>
					<BrowserRouter>
						{children}
					</BrowserRouter>
				</UiLibProvider>
			</Provider>
		</StrictMode>
	)
}