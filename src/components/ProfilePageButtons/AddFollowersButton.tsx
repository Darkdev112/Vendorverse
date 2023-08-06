"use client"
import React from 'react'
import Link from 'next/link'
import { RiPassPendingLine } from 'react-icons/ri'
import { newDispatch } from "@/redux/hooks"
interface AddFollowersButtonProps{
    children : React.ReactNode
}

export default function AddFollowersButton({children} : AddFollowersButtonProps){
    const dispatch = newDispatch();
    return(
        <span className="flex flex-row justify-center items-center relative">
            <Link href='/managerequests'>
                <RiPassPendingLine size={25} className="hover:text-[#DDD0C8] text-[#F5F5F5] cursor-pointer ml-2"/>
                {children}
            </Link>
        </span>
    )
} 