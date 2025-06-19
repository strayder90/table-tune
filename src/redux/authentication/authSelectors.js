export const selectUser = (state) => state.auth.user;
export const selectIsUserAuthenticated = (state) => state.auth.isUserAuthenticated;
export const selectIsAuthenticationInProgress = (state) => state.auth.isAuthenticationInProgress;