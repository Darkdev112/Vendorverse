"use client"
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {FaSmileBeam, FaSadTear} from 'react-icons/fa'
import { addRequest } from '@/api/profile'
import { toast } from 'react-toastify'

export interface AddFollowersInputState {
    email: string
}

export default function AddFollowersInput() {
    const [emoji1, setEmoji1] = useState<boolean>(false)
    const [emoji2, setEmoji2] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")
    const { register, handleSubmit, formState } = useForm<AddFollowersInputState>()

    const handleClick = async (data : AddFollowersInputState) => {
        try {
            const response = await addRequest(data);
            if(response.user){
                setEmoji1(true)
                setMessage("Sent successfully")
            }
            if(response.error){
                setEmoji2(true)
                setMessage(response.error)
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong", {
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

    return (
        <>
            <form className="h-1/4 w-full  flex flex-row px-4 py-2 gap-2" onSubmit={handleSubmit(handleClick)}>
                <div className="w-3/4 ">
                    <input className='w-full h-full rounded-[0.75rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt font-bold tracking-wider text-xl' placeholder='Search...' {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Email is not valid"
                        }
                    })} />
                    <p className='text-sm text-rose-500 m-4'>{formState.errors.email?.message}</p>
                </div>
                <div className="w-1/4  md:block my-auto">
                    <div className='w-fit h-fit mx-auto'>
                        <button className='bg-[#DDD0C8] border border-gray-100 shadow-sm text-black-100 text-[#323232] hover:bg-[#323232] hover:text-[#DDD0C8] sm:w-[4.5rem] md:w-[6rem] sm:h-[2rem] md:h-[2.5rem]  sm:text-sm md:text-lg font-bold rounded-lg font-changa tracking-wide'>Sent</button>
                    </div>
                </div>
            </form>
            <div className="h-3/4 sm:w-full md:w-3/4 md:mx-auto flex flex-row justify-around items-center">
                <div className={`sm:w-[5rem] sm:h-[5rem] md:w-[7rem] md:h-[7rem] border-8  ${emoji1 ? "border-green-400 bg-gray-100" : "border-gray-100 bg-[#DDD0C8]"} rounded-[50%]  flex justify-center items-center`}>
                    <div className='w-1/2 h-1/2 flex flex-row items-center justify-center'>
                        <FaSmileBeam className={`${emoji1 ? "text-green-400 animate-bounce" : "text-gray-100"}`} size={50}/>
                    </div>
                </div>
                <div className={`sm:w-[5rem] sm:h-[5rem] md:w-[7rem] md:h-[7rem] border-8  ${emoji2 ? "border-red-400 bg-gray-100" : "border-gray-100 bg-[#DDD0C8]"} rounded-[50%]  flex justify-center items-center`}>
                    <FaSadTear className={`${emoji2 ? "text-rose-400 animate-pulse" : "text-gray-100"}`} size={50}/>
                </div>
            </div>
            {(emoji1 || emoji2) &&<p className={`w-full text-lg font-bold font-changa tracking-wider ${emoji1 ? "text-green-500" : ""} ${emoji2 ? "text-rose-500" : ""} mt-[-2rem] text-center`}>{message}</p>}
        </>
    )
}