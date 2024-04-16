"use client"
import {useEffect} from 'react'
import { newDispatch, newSelector } from "@/redux/hooks";
import { getVendorpoints } from '@/api/profile';
import { setPoints } from '@/redux/features/pointsSlice';

export default function DispVendorPoints(){
    const { points } = newSelector((state) => state.vendorpoints)
    const dispatch = newDispatch();

    useEffect(() => {
        const dispatchPoints = async () => {
            const token = localStorage.getItem('token')
            const {points} = await getVendorpoints(token);
            dispatch(setPoints(points))
        }
        dispatchPoints()    
    }, [])
    
    return(
        <span className="absolute h-[3rem] w-[10rem] sm:top-[7.5rem] sm:right-[0.6rem] md:top-[2.3rem] md:right-[3.3rem] rounded-md bg-purple-400 bg-opacity-30 backdrop-filter text-xl text-[#DDD0C8] text-center pt-2 font-changa font-extrabold gap-4 ">{points} V</span>
    )
}