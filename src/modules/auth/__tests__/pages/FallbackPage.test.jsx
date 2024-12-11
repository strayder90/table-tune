import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import FallbackPage from '@modules/dashboard/pages/FallbackPage.jsx';

test('Displays fallback page if no match is found', () => {
    const {container} = render(<FallbackPage/>);
    expect(container).toMatchSnapshot();

    const header = screen.getByRole('heading', {name: /404 - Page Not Found/i});
    const message = screen.getByText(/The page you're looking for does not exist./i);

    expect(message).toBeInTheDocument();
    expect(header).toBeInTheDocument();
});