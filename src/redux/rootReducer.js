import {combineReducers} from '@reduxjs/toolkit';

import authSlice from '@/redux/authentication/AuthSlice.js';

const rootReducer = combineReducers({
    authSlice: authSlice
});

export default rootReducer;