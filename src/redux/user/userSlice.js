import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState:{
        user : {
            email:''
        }
    },
    reducers: {
        RegistrAccount: (state,action) => {
            state.user = action.payload
        },
        logOutAccount: (state) => {
            state.user = {
                email: ''
            }
        }
    }
})

export const {RegistrAccount,logOutAccount} = userSlice.actions
export default userSlice.reducer