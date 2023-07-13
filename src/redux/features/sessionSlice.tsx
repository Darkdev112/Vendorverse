import { createSlice } from "@reduxjs/toolkit";

interface sessionState{
    sessionToken : string
}

const initialState : sessionState = {
    sessionToken : ""
}

const sessionSlice = createSlice({
    name : 'session',
    initialState,
    reducers : {
        setToken : (state, action) => {
            state.sessionToken = action.payload
        },
        removeToken : (state) => {
            state.sessionToken= ""
        }
    }
})

export const {setToken, removeToken} = sessionSlice.actions
export default sessionSlice.reducer