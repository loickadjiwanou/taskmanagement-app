import React from 'react';
import { render, screen } from '@testing-library/react';
import BottomNav from './BottomNav';
test('verify component', () => {
	render(<BottomNav />);
	const linkElement = screen.getByText(/BottomNav/i);
	expect(linkElement).toBeInTheDocument();
});
