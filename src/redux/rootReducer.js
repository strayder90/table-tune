import {combineReducers} from '@reduxjs/toolkit';

import authReducer from '@/redux/authentication/AuthSlice.js';

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;