import React from 'react';
import {prettyDOM, render, screen} from '@testing-library/react';
import FallbackPage from '../../../auth/pages/FallbackPage.jsx';

test('Displays fallback page if no match is found', () => {
    const {container} = render(<FallbackPage />)

    console.log(screen.debug(container));

})