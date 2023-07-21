"use client"
import { useCallback } from "react"
import { newDispatch } from "@/redux/hooks"
import { onEditOpen } from "@/redux/features/modalSlice"
import Button from "../Button/Button"

interface EditButtonProps{
    size : 'small' | 'medium' | 'large'
    text : string
}

export default function EditButton({size, text} : EditButtonProps){
    const dispatch = newDispatch();
    const handleClick = () : void  => {
        dispatch(onEditOpen());
    }
    return(
        <Button handleClick={handleClick} text={text} size={size} />
    )
} 