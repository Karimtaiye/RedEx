import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    userRes:[],

    user:{
        name:"",
        email:"",
        id:"",
        token:"",
        login:false,
        profilePicture:"",
        admin:false
    }
}

export const redexReducers = createSlice({
    name:"redex",
    initialState,
    reducers:{
        userStoreData:(state, {payload})=>{
            state.user = payload
        },
        userResData:(state, {payload})=>{
            state.userRes = payload
        }
    }
})
export const {userStoreData, userResData} = redexReducers.actions
export default redexReducers.reducer