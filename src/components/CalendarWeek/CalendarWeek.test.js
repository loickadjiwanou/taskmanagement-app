import React from 'react';
import { render, screen } from '@testing-library/react';
import CalendarWeek from './CalendarWeek';
test('verify component', () => {
	render(<CalendarWeek />);
	const linkElement = screen.getByText(/CalendarWeek/i);
	expect(linkElement).toBeInTheDocument();
});
