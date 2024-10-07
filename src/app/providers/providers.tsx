import {ReactNode, StrictMode} from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {UiLibProvider} from "@app/providers/ui-lib-provider.tsx";
import {setupStore} from "@app/store";

export function Providers({children}: { children: ReactNode }) {

	return (
		<StrictMode>
			<Provider store={setupStore()}>
				<UiLibProvider>
					<BrowserRouter>
						{children}
					</BrowserRouter>
				</UiLibProvider>
			</Provider>
		</StrictMode>
	)
}