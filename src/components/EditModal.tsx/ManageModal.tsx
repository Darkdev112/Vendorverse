"use client"

import Modal from "../Modal/Modal"
import { newSelector,newDispatch } from "@/redux/hooks"
import { onManageClose } from "@/redux/features/modalSlice"

export default function ManageModal(){
    const {isManageOpen} = newSelector((state) => state.modal)
    const dispatch = newDispatch();
    const onClose = () => {
        dispatch(onManageClose())
    }

    const body : React.ReactElement = (
        <>
            Manage
        </>
    )
    
    return(
        <Modal isOpen={isManageOpen} onClose={onClose} onSubmit={onClose} title="Your Connections" text="Close" body={body}/>
    )
}