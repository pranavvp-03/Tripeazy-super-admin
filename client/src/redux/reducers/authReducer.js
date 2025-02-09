const initialState = {
    isAuthenticated: localStorage.getItem("token") ? true : false,
    user: JSON.parse(localStorage.getItem("userData")) || null,
    token: localStorage.getItem("token") || null,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            localStorage.setItem("userData", JSON.stringify(action.payload.user));
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };

        case 'LOGOUT':
            localStorage.removeItem("userData");
            localStorage.removeItem("token");
            return initialState;

        default:
            return state;
    }
};

export default authReducer;
