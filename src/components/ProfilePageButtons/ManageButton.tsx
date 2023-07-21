"use client"
import { newDispatch } from "@/redux/hooks"
import { onManageOpen } from "@/redux/features/modalSlice"
import Button from "../Button/Button"

interface ManageButtonProps{
    size : 'small' | 'medium' | 'large'
    text : string
}

export default function ManageButton({size, text} : ManageButtonProps){
    const dispatch = newDispatch();
    const handleClick = () : void  => {
        dispatch(onManageOpen());
    }
    return(
        <Button handleClick={handleClick} text={text} size={size} />
    )
} 