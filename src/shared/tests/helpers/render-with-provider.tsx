import {ReactNode} from "react";
import {Provider} from "react-redux";
import {store} from "@app/store";

export function renderWithProvider(component: ReactNode) {
	return (
		<Provider store={store}>
			{component}
		</Provider>
	)
}