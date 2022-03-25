import post from "../../post";

export const fetchUserRequest = () => {
    return{
        type : 'FETCH_USER_REQUEST',
    }
}

export const fetchUserSuccess = (resp) => {
    return{
        type : 'FETCH_USER_SUCCESS',
        payload : resp
    }
}

export const fetchUserFailure = (resp) => {
    return{
        type : 'FETCH_USER_FAILURE',
        payload : resp
    }
}

export const fetchUserInfo = (jwt) => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        post('http://localhost:8080/auth/user',{
            jwt : jwt
        }).then(resp => {
            if (!resp.data.err){
                dispatch(fetchUserSuccess(resp.data))
            }else{
                console.log(resp)
                dispatch(fetchUserFailure(resp.data))
            }
        }).catch(e=>{
            console.log(e.message)
        })
    }
}
