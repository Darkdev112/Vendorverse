import { createSlice } from "@reduxjs/toolkit";

interface EditState{
    isEditOpen : boolean
    isManageOpen : boolean
    isAddFollowersOpen : boolean
    isAddRequestsOpen : boolean
}

const initialState : EditState = {
    isEditOpen : false,
    isManageOpen : false,
    isAddFollowersOpen : false,
    isAddRequestsOpen : false
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
        onAddFollowersOpen : (state) => {
            state.isAddFollowersOpen = true
        },
        onAddFollowersClose : (state) => {
            state.isAddFollowersOpen = false
        },
        onAddRequestsOpen : (state) => {
            state.isAddRequestsOpen = true
        },
        onAddRequestsClose : (state) => {
            state.isAddRequestsOpen = false
        }
    } 
})

export const {onEditClose, onEditOpen, onManageOpen, onManageClose, onAddFollowersOpen,onAddFollowersClose,onAddRequestsOpen, onAddRequestsClose} = EditSlice.actions

export default EditSlice.reducer