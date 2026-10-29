import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : false,
    firstName : '',
    lastName : '',
    email : '',
    userId : ''
}

const userSlice = createSlice({
    name : 'userInfo',
    initialState : {value: {initialState}},
    reducers : {
        login : (state,action) => {

        }
    }
})

export default userSlice.reducer