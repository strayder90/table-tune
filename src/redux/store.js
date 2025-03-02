import {configureStore} from '@reduxjs/toolkit';

import rootReducer from '@/redux/rootReducer.js';

const store = configureStore({
    reducer: rootReducer,
});

export default store;
