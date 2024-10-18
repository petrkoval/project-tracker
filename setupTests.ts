import '@testing-library/jest-dom';
import {vi} from "vitest";
import {server} from "./src/app/mocks/node";

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: vi.fn().mockImplementation(query => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(), // deprecated
		removeListener: vi.fn(), // deprecated
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn(),
	})),
});

beforeAll(() => {
	server.listen({ onUnhandledRequest: 'error' });

	const {getComputedStyle} = window;
	window.getComputedStyle = (elt) => getComputedStyle(elt);
});

afterAll(() => server.close());

afterEach(() => server.resetHandlers());