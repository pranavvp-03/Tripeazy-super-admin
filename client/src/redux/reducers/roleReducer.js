const initialState = {
    Permissions: [],   //aray of permissions for the current users
}

const roleReducers = (state= initialState, action)=>{
    switch(action.type){
        case 'SET_PERMISSIONS':
            return {
                ...state,
                Permissions: action.payload.Permissions
            };
            default :
                return state
    }
}
export default roleReducers