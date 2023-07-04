"use client"
import { useForm } from 'react-hook-form'
import styles from './signupform.module.css'

interface FormFields {
    username: string,
    email: string,
    password: string,
    occupation: string
}

export default function LoginForm() {

    const { register, handleSubmit, formState } = useForm<FormFields>()
    const handleClick = (data: FormFields) => {
        console.log(data);
    }
    return (
        <form className="my-8 w-[18rem] h-auto p-2 flex flex-col justify-center items-center" onSubmit={handleSubmit(handleClick)}>
            <div className="w-full h-[5rem] mb-1">
                <input className='w-full h-[3rem] rounded-[0.75rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt tracking-wide font-bold tracking-wider text-xl' placeholder='Username'{...register("username", {
                    required: "Username is required",
                    pattern: {
                        value: /^[a-zA-Z0-9_]{6,30}$/,
                        message: "Username should be greater than 6"
                    }
                })} />
                <p className='text-sm text-rose-500 text-center'>{formState.errors.username?.message}</p>
            </div>
            <div className="w-full h-[5rem] mb-1">
                <input className='w-full h-[3rem] rounded-[0.75rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt tracking-wide font-bold tracking-wider text-xl' placeholder='Email' {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Email is not valid"
                    }
                })} />
                <p className='text-sm text-rose-500 text-center'>{formState.errors.email?.message}</p>
            </div>
            <div className="w-full h-[5rem] mb-1">
                <input className='w-full h-[3rem] rounded-[0.75rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt tracking-wide font-bold tracking-wider text-xl' placeholder='Password' {...register("password", {
                    required: "Password is required",
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                        message: "Password should contain atleast one uppercase letter, one lowercase letter, one digit, and above 6 characters"
                    }
                })} />
                <p className='text-sm text-rose-500 text-center'>{formState.errors.password?.message}</p>
            </div>
            <div className="w-full h-[5rem] mb-1">
                <input className='w-full h-[3rem] rounded-[0.75rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt tracking-wide font-bold tracking-wider text-xl' placeholder='Occupation' {...register("occupation", {
                    required: "Occupation is required",
                    validate : {
                        validateOccupation : (fieldValue) => {
                            let value : boolean = true; 
                            if(fieldValue === 'Manufacturer' || fieldValue === 'Distributor' || fieldValue === 'Retailer'){
                                value = true
                            }
                            else{
                                value = false
                            }
                            return value || "Enter either Manufacturer or Distributor or Retailer"
                        }
                    }
                })} />
                <p className='text-sm text-rose-500 text-center'>{formState.errors.occupation?.message}</p>
            </div>
            <button className='bg-[#DDD0C8] border border-gray-100 shadow-sm  text-black-100 text-[#323232] hover:bg-[#323232] hover:text-[#DDD0C8] w-[6rem] h-[2.5rem] p-2 text-lg font-bold text-black-100 rounded-lg font-rokkitt tracking-wide'>Signup</button>
        </form>
    )
}