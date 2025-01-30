const initialState = {
    Permissions: [], 
      Roles:[]
}

const roleReducers = (state= initialState, action)=>{
    switch(action.type){
        case 'SET_PERMISSIONS':
            return {
                ...state,
                Permissions: action.payload.permissions
            };
         case 'Roles':
            return{
                ...state,
                Roles:action.payload.Roles
            }   
            default :
                return state 
    }

}
export default roleReducers