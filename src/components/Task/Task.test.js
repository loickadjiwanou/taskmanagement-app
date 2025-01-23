import React from 'react';
import { render, screen } from '@testing-library/react';
import Task from './Task';
test('verify component', () => {
	render(<Task />);
	const linkElement = screen.getByText(/Task/i);
	expect(linkElement).toBeInTheDocument();
});
