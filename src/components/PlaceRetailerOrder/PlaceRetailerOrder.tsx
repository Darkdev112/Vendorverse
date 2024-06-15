"use client"
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {toast} from 'react-toastify'
import { FiMoreVertical } from "react-icons/fi";
import { placeRetailerOrder } from '@/api/profile';

export interface PlaceRetailerOrderProps {
    product_name: string,
    product_quantity: number,
    product_description: string,
    email: string,
}

export default function PlaceRetailerOrder() {
    const [token, setToken] = useState<string | null>("")
    const { register, handleSubmit, reset, formState } = useForm<PlaceRetailerOrderProps>()

    const handleClick = async (data : PlaceRetailerOrderProps) => {
        try {
            data.product_quantity = Number(data.product_quantity)
            console.log(data);
            const result = await placeRetailerOrder(data, token)
            if (!result.error) {
                toast.success(`Order placed successfully`, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                reset()
            }
            else{
                toast.error(`${result.error}`, {
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
        } catch (error) {
            console.log(error);
            toast.error("Could not place order", {
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
        if (typeof window !== "undefined") {
            setToken(localStorage.getItem('token'))
        }
    }, [typeof window])

    return (
        <form className="lg:mx-[5rem] sm:px-[2rem] my-[5rem] lg:w-3/4 sm:w-full p-2 flex flex-col" onSubmit={handleSubmit(handleClick)}>
            <div className="w-full flex flex-row gap-4 lg:mb-[8rem] sm:mb-[6rem]">
                <p className="lg:text-2xl md:text-xl sm:text-lg sm:leading-5 text-[#DDD0C8] font-changa w-1/3 flex items-center">Mention your distributor <span className="ml-[1rem]"><FiMoreVertical color="#DDD0C8" /></span></p>
                <div className="w-2/3 flex flex-col justify-center items-center">
                    <input className='w-full md:h-[3rem] md:rounded-[0.75rem] sm:h-[2rem] sm:rounded-[0.5rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt font-bold tracking-wider text-xl' placeholder='Distributor' {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "Email is not valid"
                        }
                    })} />
                </div>
                <p className='text-sm sm:hidden md:flex md:leading-5 text-rose-500 items-center text-center'>{formState.errors.email?.message}</p>
            </div>
            <div className="w-full flex flex-row lg:gap-8 sm:gap-4 lg:mb-[4rem] sm:mb-[2rem]">
                <div className="w-1/2 flex flex-col gap-2">
                    <p className="lg:text-2xl md:text-xl sm:text-lg sm:leading-5 text-[#DDD0C8] font-changa flex items-center ml-1">Product Name</p>
                    <div className="flex flex-col gap-2">
                        <input className='w-full md:h-[3rem] md:rounded-[0.75rem] sm:h-[2rem] sm:rounded-[0.5rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt font-bold tracking-wider text-xl' placeholder='Product Name' {...register("product_name", {
                            required: "Required"
                        })} />
                        <p className='text-sm sm:hidden md:flex md:leading-5 text-rose-500 ml-4'>{formState.errors.product_name?.message}</p>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                    <p className="lg:text-2xl md:text-xl sm:text-lg sm:leading-5 text-[#DDD0C8] font-changa flex items-center ml-1">Product Quantity</p>
                    <div className="flex flex-col gap-2">
                        <input className='w-full md:h-[3rem] md:rounded-[0.75rem] sm:h-[2rem] sm:rounded-[0.5rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt font-bold tracking-wider text-xl' placeholder='Product Quantity' type='number' {...register("product_quantity", {
                            required: "Required"
                        })}/>
                        <p className='text-sm sm:hidden md:flex md:leading-5 text-rose-500 ml-4'>{formState.errors.product_quantity?.message}</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row justify-center items-center lg:mb-[8rem] sm:mb-[6rem]">
                <div className="w-1/2 flex flex-col gap-2">
                    <p className="lg:text-2xl md:text-xl sm:text-lg sm:leading-5 text-[#DDD0C8] font-changa flex items-center ml-1">Product Description</p>
                    <div className="flex flex-col gap-2">
                        <input className='w-full md:h-[3rem] md:rounded-[0.75rem] sm:h-[2rem] sm:rounded-[0.5rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt font-bold tracking-wider text-xl' placeholder='Product Description' {...register("product_description")}/>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row justify-center items-center">
                <button className='bg-[#DDD0C8] border border-gray-100 shadow-sm text-black-100 text-[#323232] hover:bg-[#323232] hover:text-[#DDD0C8] lg:w-[10rem] lg:h-[3rem] sm:w-[6rem] sm:h-[2.5rem] p-2 lg:text-2xl md:text-xl sm:text-lg font-bold text-black-100 rounded-lg font-changa tracking-wide'>Order</button>
            </div>
        </form>
    )
}