import React from 'react';
import { render, screen } from '@testing-library/react';
import CompletedTask from './CompletedTask';
test('verify component', () => {
	render(<CompletedTask />);
	const linkElement = screen.getByText(/CompletedTask/i);
	expect(linkElement).toBeInTheDocument();
});
