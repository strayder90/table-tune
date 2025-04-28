import {setUser, setIsUserAuthenticated, clearAuth} from '@/redux/authentication/AuthSlice.js';

function safeParse(json) {
    try {
        return JSON.parse(json);
    } catch {
        return null;
    }
}

export const registerUser = (user) => (dispatch) => {
    localStorage.setItem('user', JSON.stringify(user));

    dispatch(setUser(user));
};

export const checkAuth = () => (dispatch) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const user = safeParse(localStorage.getItem('user'));

    dispatch(setIsUserAuthenticated({isAuthenticated}));
    dispatch(setUser(user));
};

export const login = () => (dispatch) => {
    localStorage.setItem('isAuthenticated', 'true');

    dispatch(setIsUserAuthenticated({isAuthenticated: true}));
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');

    dispatch(clearAuth());
};
