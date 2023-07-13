import { createSlice } from "@reduxjs/toolkit";

interface toggleLoginState{
    active : boolean
}

const initialState : toggleLoginState = {
    active : true
}

const toggleLoginSlice = createSlice({
    name : 'toggleLogin',
    initialState,
    reducers : {
        onLogin : (state) => {
            state.active = true
        },
        onSignup : (state) => {
            state.active = false
        }
    }
})

export const {onLogin, onSignup} = toggleLoginSlice.actions
export default toggleLoginSlice.reducer