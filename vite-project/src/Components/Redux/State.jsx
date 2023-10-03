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
    },
    expToken:true
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
        },
        userTokenExp:(state, {payload})=>{
            state.expToken = payload
        }
    }
})
export const {userStoreData, userResData, userTokenExp} = redexReducers.actions
export default redexReducers.reducer