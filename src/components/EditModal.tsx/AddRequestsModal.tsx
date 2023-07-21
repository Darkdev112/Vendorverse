"use client"

import Modal from "../Modal/Modal"
import { newSelector,newDispatch } from "@/redux/hooks"
import { onAddRequestsClose } from "@/redux/features/modalSlice"

export default function AddRequestsModal(){
    const {isAddRequestsOpen} = newSelector((state) => state.modal)
    const dispatch = newDispatch();
    const onClose = () => {
        dispatch(onAddRequestsClose())
    }

    const body : React.ReactElement = (
        <>
            Add Requests
        </>
    )
    
    return(
        <Modal isOpen={isAddRequestsOpen} onClose={onClose} onSubmit={onClose} title="Widen your network" text="Close" body={body}/>
    )
}