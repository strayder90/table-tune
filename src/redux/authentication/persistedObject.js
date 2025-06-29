import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['user', 'isUserAuthenticated'] // Only persist these fields
};

export default authPersistConfig;