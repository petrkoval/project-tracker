import {render, RenderOptions} from "@testing-library/react";
import {PropsWithChildren, ReactNode} from "react";
import {MemoryRouter} from "react-router-dom";

export function renderWithRouter(component: ReactNode, renderOptions: RenderOptions = {}) {
	function Wrapper({children}: PropsWithChildren<{}>) {
		return (
			<MemoryRouter>
				{children}
			</MemoryRouter>
		)
	}

	return render(component, {wrapper: Wrapper, ...renderOptions});
}