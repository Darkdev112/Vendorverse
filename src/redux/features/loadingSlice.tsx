import { createSlice } from "@reduxjs/toolkit";

interface loadingState{
    loading : boolean
}

const initialState : loadingState = {
    loading : false
}

const loadingSlice = createSlice({
    name : 'loadingBar',
    initialState,
    reducers : {
        onLoading : (state) => {
            state.loading = true
        },
        offLoading : (state) => {
            state.loading = false
        }
    }
})

export const {onLoading, offLoading} = loadingSlice.actions
export default loadingSlice.reducer