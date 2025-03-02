import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    is_authenticated: false
};

const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        login(state) {
            localStorage.setItem('is_authenticated', 'true');
            state.is_authenticated = true;
        },
        logout(state) {
            localStorage.removeItem('is_authenticated');
            state.is_authenticated = false;
        }
    }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
