import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';

import rootReducer from '@/redux/rootReducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

export const persistor = persistStore(store);
