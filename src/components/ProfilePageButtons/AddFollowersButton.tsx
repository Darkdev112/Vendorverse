"use client"
import React from 'react'
import { RiPassPendingLine } from 'react-icons/ri'
import { newDispatch } from "@/redux/hooks"
import { onAddFollowersOpen } from "@/redux/features/modalSlice"

interface AddFollowersButtonProps{
    children : React.ReactNode
}

export default function AddFollowersButton({children} : AddFollowersButtonProps){
    const dispatch = newDispatch();
    const handleClick = () : void  => {
        dispatch(onAddFollowersOpen());
    }
    return(
        <span className="flex flex-row justify-center items-center relative">
            <RiPassPendingLine size={25} className="hover:text-[#DDD0C8] text-[#F5F5F5] cursor-pointer ml-2" onClick={handleClick}/>
            {children}
        </span>
    )
} 