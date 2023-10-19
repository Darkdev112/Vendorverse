"use client"

import { useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Modal from "../Modal/Modal"
import { newSelector, newDispatch } from "@/redux/hooks"
import { onEditClose } from "@/redux/features/modalSlice"
import { updateProfile } from '@/api/profile'

export interface FormFieldsEdit {
    fullname: string,
    // profilePic : string,
    position: string,
    location: string,
    work: string,
    phone: number,
    linkedIn: string
    twitter: string
}

export default function EditModal() {
    const [token,setToken] = useState<string | null>("")
    const { isEditOpen } = newSelector((state) => state.modal)
    const router = useRouter()
    const dispatch = newDispatch();
    const { register, handleSubmit,reset, formState } = useForm<FormFieldsEdit>()

    const onClose = () => {
        dispatch(onEditClose())
        reset()
    }

    const handleClick = async (data: FormFieldsEdit) => {
        try {
            console.log(token);
            const result = await updateProfile(data, token)
            if (!result.error) {
                onClose()
                toast.success('Saved successfully', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                router.push(`/profile/${token}`)
                router.refresh()
            }
        } catch (error) {
            console.log(error);
            toast.error("Could not save", {
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

    const body: React.ReactElement = (
        <>
            <form className="my-4 w-[18rem] h-auto p-2 flex flex-col justify-center items-center mx-auto" onSubmit={handleSubmit(handleClick)}>
                <div className="w-full h-[5rem] mb-1">
                    <input className='w-full h-[3rem] rounded-[0.75rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt font-bold tracking-wider text-xl' placeholder='Fullname' {...register("fullname", {
                        required: "Fullname is required",
                        pattern: {
                            value: /^[A-Za-z\s]{1,30}$/,
                            message: "Fullname is not valid"
                        }
                    })} />
                    <p className='text-sm text-rose-500 text-center'>{formState.errors.fullname?.message}</p>
                </div>
                <div className="w-full h-[5rem] mb-1">
                    <input className='w-full h-[3rem] rounded-[0.75rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt font-bold tracking-wider text-xl' placeholder='Position' {...register("position", {
                        required: "Position is required",
                        validate : {
                            validatePosition : (fieldValue) => {
                                let value : boolean = true; 
                                if(fieldValue.length <= 20){
                                    value = true
                                }
                                else{
                                    value = false
                                }
                                return value || "Enter position concisely"
                            }
                        }
                    })} />
                    <p className='text-sm text-rose-500 text-center'>{formState.errors.position?.message}</p>
                </div>
                <div className="w-full h-[5rem] mb-1">
                    <input className='w-full h-[3rem] rounded-[0.75rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt font-bold tracking-wider text-xl' placeholder='Location' {...register("location", {
                        required: "Location is required",
                        validate : {
                            validatePosition : (fieldValue) => {
                                let value : boolean = true; 
                                if(fieldValue.length <= 20){
                                    value = true
                                }
                                else{
                                    value = false
                                }
                                return value || "Enter location concisely"
                            }
                        }
                    })} />
                    <p className='text-sm text-rose-500 text-center'>{formState.errors.location?.message}</p>
                </div>
                <div className="w-[25rem] h-[7rem] mb-[2rem]">
                    <textarea className='w-full h-[7rem] rounded-[0.75rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt font-bold tracking-wider text-xl' placeholder='Work' {...register("work", {
                        required: "Work is required",
                        validate : {
                            validatePosition : (fieldValue) => {
                                let value : boolean = true; 
                                if(fieldValue.length <= 200){
                                    value = true
                                }
                                else{
                                    value = false
                                }
                                return value || "Keep it within 60 words"
                            }
                        }
                    })} />
                    <p className='text-sm text-rose-500 text-center'>{formState.errors.work?.message}</p>
                </div>
                <div className="w-full h-[5rem] mb-1">
                    <input className='w-full h-[3rem] rounded-[0.75rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt font-bold tracking-wider text-xl' placeholder='Phone' {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                            value: /^\+?[0-9\s-()]{8,20}$/,
                            message: "Fullname is not valid"
                        }
                    })} />
                    <p className='text-sm text-rose-500 text-center'>{formState.errors.phone?.message}</p>
                </div>
                <div className="w-full h-[5rem] mb-1">
                    <input className='w-full h-[3rem] rounded-[0.75rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt font-bold tracking-wider text-xl' placeholder='LinkedIn URL' {...register("linkedIn", {
                        required: "LinkedIn URL is required",
                        validate : {
                            validateURL : (fieldValue) => {
                                let value : boolean = true; 
                                if(fieldValue.startsWith('https://www.linkedin.com/in/')){
                                    value = true
                                }
                                else{
                                    value = false
                                }
                                return value || "Enter valid url"
                            }
                        }
                    })} />
                    <p className='text-sm text-rose-500 text-center'>{formState.errors.linkedIn?.message}</p>
                </div>
                <div className="w-full h-[5rem] mb-1">
                    <input className='w-full h-[3rem] rounded-[0.75rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt font-bold tracking-wider text-xl' placeholder='Twitter URL' {...register("twitter", {
                        required: "Twitter URL is required",
                        validate : {
                            validateURL : (fieldValue) => {
                                let value : boolean = true; 
                                if(fieldValue.startsWith('https://twitter.com/')){
                                    value = true
                                }
                                else{
                                    value = false
                                }
                                return value || "Enter valid url"
                            }
                        }
                    })} />
                    <p className='text-sm text-rose-500 text-center'>{formState.errors.twitter?.message}</p>
                </div>
                <button className='bg-[#DDD0C8] border border-gray-100 shadow-sm  text-black-100 text-[#323232] hover:bg-[#323232] hover:text-[#DDD0C8] w-[6rem] h-[2.5rem] p-2 text-lg font-bold text-black-100 rounded-lg font-rokkitt tracking-wide'>Update</button>
            </form>
        </>
    )

    useEffect(() => {
        if(typeof window !== "undefined"){
            setToken(localStorage.getItem('token'))
        }
    }, [typeof window])
    

    return (
        <Modal isOpen={isEditOpen} onClose={onClose} title="Edit Profile" text="Save" body={body} hidden={true} />
    )
}