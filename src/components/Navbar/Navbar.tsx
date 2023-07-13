"use client"
import Image from 'next/image'
import styles from './navbar.module.css'
import Logo from '@/assets/images/logo.png'
import Button from '../Button/Button'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { newDispatch, newSelector } from '@/redux/hooks'
import { onLogin } from '@/redux/features/toggleLoginSlice'
import {removeToken} from '@/redux/features/sessionSlice'
import deleteToken from '@/utils/handleLogout'

export default function Navbar({sessionToken} : {sessionToken : string | undefined}){
    const router = useRouter();
    // const {sessionToken} = newSelector((state) => state.session)
    const dispatch = newDispatch();
    const [profileText, setProfileText] = useState<string>("?");
    console.log("navbar : ", sessionToken);

    const handleLoginClick =() => {
        dispatch(onLogin())
        router.push('/login')
    }

    const handleLogoutClick = () => {
        deleteToken();
        router.push('/')
        router.refresh()
    }

    return (
        <nav className='md:h-[90px] sm:h-[70px] lg:m-8 md:m-8 sm:m-2 sm:mt-8 bg-purple-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-md'>
            <div className='w-full p-2 flex flex-row h-full items-center'>
                <div className='lg:hidden md:flex md:w-1/3  pl-4  sm:w-1/4'>
                    <Image className='mr-2' src={Logo} alt="" width={48} height={48}/>
                    <p className='text-[2rem] tracking-wide font-semibold text-[#323232] font-changa sm:hidden md:block'>VENDORVERSE</p>
                </div>
                <div className='w-1/4 lg:block md:hidden sm:hidden pl-[2rem]  flex'>
                <Link href='/profile'><Image className='cursor-pointer' src={Logo} alt="" width={60} height={60}/></Link>
                </div>
                <div className={`lg:w-1/2 lg:block md:hidden sm:hidden text-center `}>
                    <p className='text-[3rem] tracking-widest font-semibold text-[#323232] font-changa '>VENDORVERSE</p>
                </div>
                <div className='lg:w-1/4 flex flex-row h-full items-center md:pr-[3rem] sm:pr-[0.8rem] md:flex md:w-2/3 md:justify-end sm:ml-auto'>
                    <div className='lg:mr-auto w-3/5 text-end font-rokkitt tracking-wide md:w-auto md:ml-auto md:mr-4 sm:mx-3'>
                        <div className='lg:hidden md:block'><Button size='medium' handleClick={sessionToken ? handleLogoutClick : handleLoginClick} text={sessionToken? "Logout" : "Login"}/></div>
                        <div className='lg:block md:hidden sm:hidden ;'><Button size='large' handleClick={sessionToken ? handleLogoutClick : handleLoginClick} text={sessionToken? "Logout" : "Login"}/></div>
                    </div>
                    <Link href={profileText ==="?" ? '/login' : '/profile'}><div className=' text-center md:pt-[0.3rem] md:text-3xl md:w-[3rem] md:h-[3rem] rounded-[50%] border-2 hover:border-gray-100 border-[#323232] hover:bg-[#323232] bg-[#DDD0C8] sm:w-[2rem] sm:h-[2rem] sm:text-xl sm:pt-[0.05rem] cursor-pointer'>
                        <p className=' font-bold hover:text-[#DDD0C8] text-[#323232] hover: font-changa '>{profileText}</p>
                    </div></Link>
                </div>
            </div>
        </nav>
    )
}