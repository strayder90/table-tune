import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import {auth} from '../../firebase';

// Register a new user
export const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// Login
export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

// Logout
export const logout = () => {
    return signOut(auth);
};

// Auth state listener
export const onAuthChange = (callback) => {
    return onAuthStateChanged(auth, callback);
};
