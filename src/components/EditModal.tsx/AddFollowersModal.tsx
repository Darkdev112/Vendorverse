"use client"

import Modal from "../Modal/Modal"
import { newSelector,newDispatch } from "@/redux/hooks"
import { onAddFollowersClose } from "@/redux/features/modalSlice"

export default function AddFollowersModal(){
    const {isAddFollowersOpen} = newSelector((state) => state.modal)
    const dispatch = newDispatch();
    const onClose = () => {
        dispatch(onAddFollowersClose())
    }

    const body : React.ReactElement = (
        <>
            AddFollowers
        </>
    )
    
    return(
        <Modal isOpen={isAddFollowersOpen} onClose={onClose} onSubmit={onClose} title="Request List" text="Close" body={body}/>
    )
}