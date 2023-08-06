"use client"
import {useEffect} from 'react'
import Link from 'next/link';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { newDispatch } from "@/redux/hooks"

export default function AddRequestsButton(){    
    const dispatch = newDispatch();
    return(
        <span className="flex flex-row justify-center items-center  "><Link href='/addfollowers'><AiOutlinePlusCircle size={25} className="hover:text-[#DDD0C8] text-[#F5F5F5] cursor-pointer mr-2"/></Link></span>
    )
} 