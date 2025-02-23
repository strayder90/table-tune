import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './assets/css/reset.css';

import ErrorBoundary from '@appComponents/ErrorBoundary.jsx';

import App from './App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<React.StrictMode>
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    </BrowserRouter>
</React.StrictMode>);
