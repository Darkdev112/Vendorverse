import { createSlice } from "@reduxjs/toolkit";

interface EditState{
    isEditOpen : boolean
    isManageOpen : boolean
}

const initialState : EditState = {
    isEditOpen : false,
    isManageOpen : false,
}

const EditSlice = createSlice({
    name : "modal",
    initialState,
    reducers : {
        onEditOpen : (state) => {
            state.isEditOpen = true
        },
        onEditClose : (state) => {
            state.isEditOpen = false
        },
        onManageOpen : (state) => {
            state.isManageOpen = true
        },
        onManageClose : (state) => {
            state.isManageOpen = false
        },
    } 
})

export const {onEditClose, onEditOpen, onManageOpen, onManageClose} = EditSlice.actions

export default EditSlice.reducer