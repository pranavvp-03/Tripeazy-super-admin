const initialState = {
    isAuthenticated: localStorage.getItem("token") ? true : false,
    user: JSON.parse(localStorage.getItem("userData")) || null,
    token: localStorage.getItem("token") || null,
    permissions: JSON.parse(localStorage.getItem("permissions")) || null, // Ensure permissions exist in state
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            localStorage.setItem("userData", JSON.stringify(action.payload.user));
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("permissions", JSON.stringify(action.payload.permissions)); // Save permissions
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
                permissions: action.payload.permissions||{} // Store permissions in state
            };

        case 'SET_PERMISSIONS':
            localStorage.setItem("permissions", JSON.stringify(action.payload));
            return {
                ...state,
                permissions: action.payload
            };

        case 'LOGOUT':
            localStorage.removeItem("userData");
            localStorage.removeItem("token");
            localStorage.removeItem("permissions"); // Clear permissions on logout
            return {
                isAuthenticated: false,
                user: null,
                token: null,
                permissions: null // Reset permissions
            };

        default:
            return state;
    }
};

export default authReducer;
