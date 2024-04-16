"use client"
import { addVendorpoints } from '@/api/profile'
import { setPoints } from '@/redux/features/pointsSlice'
import { newDispatch } from '@/redux/hooks'
import {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export interface PointsFormState {
    points: number
}

export default function AddVendorpoints() {
    const [token,setToken] = useState<string|null>("")
    const { register, handleSubmit, formState, reset } = useForm<PointsFormState>()
    const dispatch = newDispatch();

    const handleClick = async (data: PointsFormState) => {
        try {
            data.points = Number(data.points)
            console.log(data);
            const result = await addVendorpoints(data, token)
            if (!result.error) {
                toast.success(`${data.points} points added`, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                dispatch(setPoints(result.workspace.vendorPoints))
                reset()
            }
        } catch (error) {
            console.log(error);
            toast.error("Could not add points", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    useEffect(() => {
        if(typeof window !== "undefined"){
            setToken(localStorage.getItem('token'))
        }
    }, [typeof window])

    return (
        <form className="mb-4 lg:w-[18rem] md:w-[16rem] h-auto p-2 flex flex-col justify-center items-center mx-auto" onSubmit={handleSubmit(handleClick)}>
            <div className="w-full lg:h-[5rem] md:h-[4rem] sm:h-[3rem] mb-1">
                <input className='w-full lg:h-[3rem] sm:h-[2.5rem] lg:rounded-[0.75rem] sm:rounded-[0.5rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt font-bold tracking-wider text-xl' placeholder='Add points here...' type='number' {...register("points", {
                    required: "Points are required",
                })} />
                <p className='text-sm text-rose-500 text-center'>{formState.errors.points?.message}</p>
            </div>
            <button className='bg-[#DDD0C8] border border-gray-100 shadow-sm  text-black-100 text-[#323232] hover:bg-[#323232] hover:text-[#DDD0C8] w-[6rem] h-[2.5rem] p-2 text-lg font-bold text-black-100 rounded-lg font-rokkitt tracking-wide'>Add</button>
        </form>
    )
}