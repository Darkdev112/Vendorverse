"use client"
import { useForm } from 'react-hook-form'

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
        <form className="" onSubmit={handleSubmit(handleClick)}>
            <div className="">
                <input {...register("username", {
                    required: "Username is required",
                    pattern: {
                        value: /^[a-zA-Z0-9_]{6,30}$/,
                        message: "Email is not valid"
                    }
                })} />
                <p className='text-sm text-rose-500'>{formState.errors.username?.message}</p>
            </div>
            <div className="">
                <input {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Email is not valid"
                    }
                })} />
                <p className='text-sm text-rose-300'>{formState.errors.email?.message}</p>
            </div>
            <div className="">
                <input {...register("password", {
                    required: "Password is required",
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                        message: "Password should contain atleast one uppercase letter, one lowercase letter, one digit, and above 6 characters"
                    }
                })} />
                <p className='text-sm text-rose-300'>{formState.errors.password?.message}</p>
            </div>
            <div className="">
                <input {...register("occupation", {
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
                <p className='text-sm text-rose-300'>{formState.errors.password?.message}</p>
            </div>
            <button >Signup</button>
        </form>
    )
}