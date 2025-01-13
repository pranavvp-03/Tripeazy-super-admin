export const setPermissions = (permissions) => ({
    type: "SET_PERMISSIONS",
    payload: { permissions },
    
})

export const getRoles=(Roles)=>({
    type:"Roles",
    payload:{Roles}
})