import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from './Profile';
test('verify component', () => {
	render(<Profile />);
	const linkElement = screen.getByText(/Profile/i);
	expect(linkElement).toBeInTheDocument();
});
