import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import SignupForm from '@/components/SignupForm/SignupForm'
import login2 from '@/assets/images/login2.png'

interface Params {
    params: {
        occupant: string | string[] | undefined
    }
}

export default function Login({ params }: Params) {

    const active = true;
    return (
        <div className='mx-8 my-2 min-h-screen flex flex-col items-center justify-center '>
            <div className='h-[50rem] w-full flex flex-row box-border bg-purple-100 rounded-md bg-clip-padding backdrop-filter bg-opacity-10 border border-gray-100 shadow-md'>
                <div className=' h-full w-1/2 p-2'>
                    <div className='h-full flex flex-col'>
                        <div className='basis-1/6 w-full flex items-center text-[1.6rem] tracking-wide text-[#98AFC7] font-changa my-2'>
                            Vendorverse
                        </div>
                        <div className='basis-2/3 w-full flex flex-col items-center'>
                            <div className='text-[1.8rem] tracking-wide font-semibold text-[#323232] font-changa'>
                                    Welcome Back
                            </div>
                            <div className='text-base font-rokkitt tracking-wide mt-[-0.5rem] text-[#98AFC7] mb-4'>
                                    Welcome Back. Please enter your details.
                            </div>
                            <div className={`h-[3rem] w-[12rem] rounded-lg p-1 flex flex-row gap-1 bg-[#323232] font-changa text-[#98AFC7] `}>
                                <div className={`w-1/2 h-full flex flex-row justify-center items-center rounded-md cursor-pointer ${active ? 'text-[#323232] bg-[#DDD0C8]' : '' }`}>
                                    Login
                                </div>
                                <div className={`w-1/2 h-full flex flex-row justify-center items-center rounded-md cursor-pointer ${!active ? 'text-[#323232] bg-[#DDD0C8]' : '' }`}>
                                    Signup
                                </div> 
                            </div>
                            <SignupForm />
                        </div>
                        <div className='basis-1/6  w-full'>
                            <ul className='text-xl  text-[#98AFC7] font-changa'>
                                <li>Signup/login to get access to your workplace.</li>
                                <li>Make connections easily.</li>
                                <li>You can believe us with your information.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='h-full w-1/2  p-2 flex'>
                    <div className={`${styles.login1}  rounded-md w-full flex flex-row justify-center items-center`}>
                        <div className={`${styles.login2} w-[300px] h-[300px]`}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}