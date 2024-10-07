import {Logo} from "@shared/logo";
import {render} from "@testing-library/react";

describe('Logo', () => {
	test('has icon', () => {
		const {getByRole} = render(<Logo />);

		expect(getByRole('img')).toBeInTheDocument();
	});

	test('has text', () => {
		const {getByText} = render(<Logo />);

		expect(getByText('Project Tracker')).toBeInTheDocument();
	});
});