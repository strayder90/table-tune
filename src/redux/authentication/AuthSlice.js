import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
    isAuthLoading: true,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setIsUserAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.isAuthLoading = false;
        },
        clearAuth: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isAuthLoading = false;
        }
    }
});

export const {setUser, setIsUserAuthenticated, clearAuth} = authSlice.actions;
export default authSlice.reducer;