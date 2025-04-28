import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setIsUserAuthenticated(state, action) {
            state.isAuthenticated = action.payload.isAuthenticated;
        },
        clearAuth(state) {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
});

export const {setUser, setIsUserAuthenticated, clearAuth} = authSlice.actions;
export default authSlice.reducer;