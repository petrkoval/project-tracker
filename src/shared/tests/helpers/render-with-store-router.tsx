import {render, RenderOptions} from "@testing-library/react";
import {AppStore, RootState, setupStore} from "@app/store";
import {PropsWithChildren, ReactNode} from "react";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: Partial<RootState>;
	store?: AppStore;
}

export function renderWithStoreRouter(
	component: ReactNode,
	{
		preloadedState = {},
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) {
	function Wrapper({children}: PropsWithChildren<{}>) {
		return (
			<MemoryRouter>
				<Provider store={store}>
					{children}
				</Provider>
			</MemoryRouter>
		)
	}

	return {
		store,
		...render(component, {wrapper: Wrapper, ...renderOptions})
	}
}