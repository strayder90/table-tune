import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createRoot} from 'react-dom/client';

import './assets/css/reset.css';

import ErrorBoundary from '@appComponents/ErrorBoundary.jsx';
import store from '@/redux/store.js';

import App from './App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<React.StrictMode>
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
        <ErrorBoundary>
            <Provider store={store}>
                <App/>
            </Provider>
        </ErrorBoundary>
    </BrowserRouter>
</React.StrictMode>);
