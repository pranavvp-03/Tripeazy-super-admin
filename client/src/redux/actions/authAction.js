export const loginSuccess = (user, token, permissions) => ({
    type: "LOGIN_SUCCESS",
    payload: { user, token, permissions }
});

export const logout = () => ({
    type: "LOGOUT"
});
