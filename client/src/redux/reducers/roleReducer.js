const initialState = {
    Permissions: [], 
      Roles:[],
      Admins:[]
}

const roleReducers = (state= initialState, action)=>{
    switch(action.type){
        case 'SET_PERMISSIONS':
            return {
                ...state,
                Permissions: action.payload.Permissions
            };
         case 'Roles':
            return{
                ...state,
                Roles:action.payload.Roles
            }   
         case 'SEARCH_ADMINS':
            return{
                ...state,
                Admins:action.payload.Admins

            }

            default :
                return state 
    }

}
export default roleReducers