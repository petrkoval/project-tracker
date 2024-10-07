import {PropsWithChildren, ReactNode} from "react";
import {Provider} from "react-redux";
import {render, RenderOptions} from "@testing-library/react";
import {AppStore, RootState, setupStore} from "@app/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: Partial<RootState>;
	store?: AppStore;
}

export function renderWithStoreProvider(
	component: ReactNode,
	{
		preloadedState = {},
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) {
	function Wrapper({children}: PropsWithChildren<{}>) {
		return <Provider store={store}>{children}</Provider>
	}

	return {
		store,
		...render(component, {wrapper: Wrapper, ...renderOptions})
	}
}