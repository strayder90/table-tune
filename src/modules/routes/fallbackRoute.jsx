import FallbackPage from '@modules/dashboard/pages/FallbackPage.jsx';

export const getFallbackRoute = () => [
    {
        path: '*',
        element: <FallbackPage/>
    }
];
