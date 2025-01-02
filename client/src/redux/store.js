import { combineReducers, createStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import roleReducers from "./reducers/roleReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    role: roleReducers,
})

const store = createStore(rootReducer)

export default store;

