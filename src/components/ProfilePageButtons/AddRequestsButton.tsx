"use client"
import {useEffect} from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { newDispatch } from "@/redux/hooks"
import { onAddRequestsOpen } from "@/redux/features/modalSlice"


export default function AddRequestsButton(){    
    const dispatch = newDispatch();
    const handleClick = () : void  => {
        dispatch(onAddRequestsOpen());
    }

    return(
        <span className="flex flex-row justify-center items-center  "><AiOutlinePlusCircle size={25} className="hover:text-[#DDD0C8] text-[#F5F5F5] cursor-pointer mr-2" onClick={handleClick}/></span>
    )
} 