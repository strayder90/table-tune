import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        checkAuth(state) {
            state.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        },
        login(state) {
            localStorage.setItem('isAuthenticated', 'true');
            state.isAuthenticated = true;
        },
        logout(state) {
            localStorage.removeItem('isAuthenticated');
            state.isAuthenticated = false;
        }
    }
});

export const {checkAuth, login, logout} = authSlice.actions;
export default authSlice.reducer;