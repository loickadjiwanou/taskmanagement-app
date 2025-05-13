import React from 'react';
import { render, screen } from '@testing-library/react';
import Settings from './Settings';
test('verify component', () => {
	render(<Settings />);
	const linkElement = screen.getByText(/Settings/i);
	expect(linkElement).toBeInTheDocument();
});
