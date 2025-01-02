export const loginSuccess = (user, token) => ({
    type: "LOGIN_SUCCESS",
    payload: { user, token }
});

export const logout = () => ({
    type: "LOGOUT"
});
