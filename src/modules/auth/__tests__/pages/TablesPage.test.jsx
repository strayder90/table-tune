import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {userEvent} from '@testing-library/user-event';

import TablesPage from '@modules/dashboard/pages/TablesPage.jsx';

const mockNavigate = vi.fn();
vi.doMock('react-router-dom', () => ({
    ...vi.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('TablesPage test suite', () => {
    test('renders without crashing', () => {
        const {container} = render(
            <MemoryRouter>
                <TablesPage/>
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();

        const header = screen.getByRole('heading', {name: /Welcome to the Home Page!/i});
        expect(header).toBeInTheDocument();

        const logoutButton = screen.getByRole('button', {name: /Logout/i});
        expect(logoutButton).toBeInTheDocument();
    });

    test('clicking logout button clears localStorage and redirects to login', async () => {
        localStorage.setItem('isAuthenticated', 'true');

        render(
            <MemoryRouter>
                <TablesPage/>
            </MemoryRouter>
        );

        expect(localStorage.getItem('isAuthenticated')).toBe('true');

        const logoutButton = screen.getByRole('button', {name: /Logout/i});

        await userEvent.click(logoutButton);

        expect(localStorage.getItem('isAuthenticated')).toBeNull();
    });
});
