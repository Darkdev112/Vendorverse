import { configureStore } from "@reduxjs/toolkit";
import toggleLoginReducer from './features/toggleLoginSlice'
import loadingReducer from './features/loadingSlice'
import sessionReducer from './features/sessionSlice'
import modalReducer from "./features/modalSlice";

export const store = configureStore({
    reducer:{
        toggleLogin : toggleLoginReducer,
        loadingBar : loadingReducer,
        session : sessionReducer,
        modal : modalReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch