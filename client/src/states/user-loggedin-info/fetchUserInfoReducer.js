
const iSate = {
    userInfo : {},
    err : '',
    isLoggedIn: false,
    loading : false
}

const fetchUserInfoReducer = (state = iSate,action) => {
    switch (action.type){
        case 'FETCH_USER_REQUEST' :
            return {
                ...state,
                loading : true
            }
        case 'FETCH_USER_SUCCESS' :
            return{
                userInfo: action.payload.userInfo,
                err : '',
                loading: false,
                isLoggedIn: true
            }
        case 'FETCH_USER_FAILURE' :
            return{
                userInfo: {},
                err: action.payload.msg,
                isLoggedIn: false,
                loading: false
            }
        default :
            return state;
    }
}

export default fetchUserInfoReducer;