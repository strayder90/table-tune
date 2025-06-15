import {toast} from 'react-toastify';

import {setUser, setIsUserAuthenticated, clearAuth} from '@/redux/authentication/AuthSlice.js';

import {
    register,
    login as firebaseLogin,
    logout as firebaseLogout,
    onAuthChange
} from '../../firebase/helpers/authorization/authService.js';

export const registerUser = (email, password) => async (dispatch) => {
    try {
        const userCredential = await register(email, password);

        dispatch(setUser({
            id: userCredential.uid,
            email: userCredential.email
        }));

        dispatch(setIsUserAuthenticated({isAuthenticated: true}));
    } catch (error) {
        const message = extractFirebaseError(error);

        toast.error(`Registration failed: ${message}`);
    }
};

export const loginUser = (email, password) => async (dispatch) => {
    try {
        const userCredential = await firebaseLogin(email, password);

        dispatch(setUser({
            id: userCredential.uid,
            email: userCredential.email
        }));

        dispatch(setIsUserAuthenticated({isAuthenticated: false}));
    } catch (error) {
        const message = extractFirebaseError(error);

        toast.error(`Login failed: ${message}`);
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        await firebaseLogout();

        dispatch(clearAuth());
    } catch (error) {
        const message = extractFirebaseError(error);

        toast.error(`Logout failed: ${message}`);
    }
};

const processLoggedOutUser = (dispatch) => {
    dispatch(clearAuth());
};

const processLoggedInUser = (dispatch, user) => {
    dispatch(setUser({
        id: user.uid,
        email: user.email
    }));

    dispatch(setIsUserAuthenticated({isAuthenticated: true}));
};

const handleUserAuthChange = (dispatch, user) => {
    user ? processLoggedInUser(dispatch, user) : processLoggedOutUser(dispatch, user);
};

// Listen to auth state changes (optional on app load)
export const observeAuthState = () => (dispatch) => {
    onAuthChange((user) => (handleUserAuthChange(dispatch, user)));
};

function extractFirebaseError(error) {
    if (!error || !error.code) return 'An unknown error occurred.';

    const errorMap = {
        'auth/email-already-in-use': 'Email is already registered.',
        'auth/invalid-email': 'Invalid email format.',
        'auth/weak-password': 'Password should be at least 6 characters.',
        'auth/user-not-found': 'User not found.',
        'auth/wrong-password': 'Incorrect password.',
        'auth/too-many-requests': 'Too many attempts. Try again later.',
        'auth/invalid-credential': 'Email or password is wrong.'
    };

    return errorMap[error.code] || error.message || 'An error occurred.';
}