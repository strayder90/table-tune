import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

import authReducer from '@/redux/authentication/AuthSlice';
import authPersistConfig from '@/redux/authentication/persistedObject.js';

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer)
});

export default rootReducer;