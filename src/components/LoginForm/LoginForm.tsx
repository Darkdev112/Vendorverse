"use client"
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import {toast} from 'react-toastify'
export interface FormFieldsLogin {
    email: string,
    password: string,
    username?: string,
    occupation?: string
}

export default function LoginForm(props: {url : string}) {
    const router = useRouter()
    const { register, handleSubmit, formState } = useForm<FormFieldsLogin>()
    const handleClick = async (data: FormFieldsLogin) => {
        try {
            const response = await axios.post(`${props.url}/login`, data, {
                headers:{
                    "Content-Type" : "application/json",
                },
            })

            if(!response.data.error){
                toast.success('Logged in', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                localStorage.setItem('token', response.data.token)
                router.push(`/profile/${response.data.token}`);
                router.refresh();
            }
        } catch (error) {
            console.log(error);
            toast.error("Could not login", {
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
        <form className="my-8 w-[18rem] h-auto p-2 flex flex-col justify-center items-center" onSubmit={handleSubmit(handleClick)}>
            <div className="w-full h-[5rem] mb-1">
                <input className='w-full h-[3rem] rounded-[0.75rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt font-bold tracking-wider text-xl' placeholder='Email' {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Email is not valid"
                    }
                })} />
                <p className='text-sm text-rose-500 text-center'>{formState.errors.email?.message}</p>
            </div>
            <div className="w-full h-[5rem] mb-1">
                <input className='w-full h-[3rem] rounded-[0.75rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt font-bold tracking-wider text-xl' placeholder='Password' {...register("password", {
                    required: "Password is required",
                })} />
                <p className='text-sm text-rose-500 text-center'>{formState.errors.password?.message}</p>
            </div>
            <button className='bg-[#DDD0C8] border border-gray-100 shadow-sm  text-black-100 text-[#323232] hover:bg-[#323232] hover:text-[#DDD0C8] w-[6rem] h-[2.5rem] p-2 text-lg font-bold text-black-100 rounded-lg font-rokkitt tracking-wide'>Login</button>
        </form>
    )
}