import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createRoot} from 'react-dom/client';
import {PersistGate} from 'redux-persist/integration/react';

import './assets/css/reset.css';

import ErrorBoundary from '@appComponents/ErrorBoundary.jsx';
import {store, persistor} from '@/redux/store.js';

import App from './App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<React.StrictMode>
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
        <ErrorBoundary>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App/>
                </PersistGate>
            </Provider>
        </ErrorBoundary>
    </BrowserRouter>
</React.StrictMode>);
