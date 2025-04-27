import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        checkAuth(state) {
            const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
            const user = JSON.parse(localStorage.getItem('user'));

            state.isAuthenticated = isAuthenticated;
            state.user = user;
        },
        login(state, action) {
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout(state) {
            localStorage.removeItem('isAuthenticated');
            state.isAuthenticated = false;
            state.user = null;
        }
    }
});

export const {checkAuth, login, logout} = authSlice.actions;
export default authSlice.reducer;