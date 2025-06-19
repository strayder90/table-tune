import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isUserAuthenticated: false,
    isAuthenticationInProgress: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setIsUserAuthenticated: (state, action) => {
            state.isUserAuthenticated = action.payload.isUserAuthenticated;
        },
        setAuthenticationInProgress: (state, action) => {
            state.isAuthenticationInProgress = action.payload;
        },
        clearAuth: (state) => {
            state.user = null;
            state.isUserAuthenticated = false;
        }
    }
});

export const {setUser, setIsUserAuthenticated, setAuthenticationInProgress, clearAuth} = authSlice.actions;
export default authSlice.reducer;