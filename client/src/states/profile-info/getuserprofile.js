const initialState = {
    userInfo : {},
    err : '',
    isLoggedIn: false,
    loading : false
}

const profileReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case "GET_USER_INFO":
            return action.payload
        default:
            return state
    }
}

export default profileReducer;