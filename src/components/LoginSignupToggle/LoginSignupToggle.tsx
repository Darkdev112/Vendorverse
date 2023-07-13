"use client"
import SignupForm from '@/components/SignupForm/SignupForm'
import LoginForm from '@/components/LoginForm/LoginForm'
import { newSelector, newDispatch } from '@/redux/hooks'
import { onLogin, onSignup } from '@/redux/features/toggleLoginSlice'

interface LoginSignupToggleState {
    occupant: string | undefined,
    url: string
}

export default function LoginSignupToggle({ occupant, url }: LoginSignupToggleState) {
    const { active } = newSelector((state) => state.toggleLogin)
    const dispatch = newDispatch();
    return (
        <div className='basis-2/3 w-full flex flex-col items-center'>
            <div className='text-[1.8rem] tracking-wide font-semibold text-[#323232] font-changa'>
                Welcome Back
            </div>
            <div className='text-base font-rokkitt tracking-wide mt-[-0.5rem] text-[#98AFC7] mb-4'>
                Welcome Back. Please enter your details.
            </div>
            <div className={`h-[3rem] w-[12rem] rounded-lg p-1 flex flex-row gap-1 bg-[#323232] font-changa text-[#98AFC7] `}>
                <div className={`w-1/2 h-full flex flex-row justify-center items-center rounded-md cursor-pointer ${active ? 'text-[#323232] bg-[#DDD0C8] transition' : ''}`} onClick={() => dispatch(onLogin())}>
                    Login
                </div>
                <div className={`w-1/2 h-full flex flex-row justify-center items-center rounded-md cursor-pointer ${!active ? 'text-[#323232] bg-[#DDD0C8] transition' : ''}`} onClick={() => dispatch(onSignup())}>
                    Signup
                </div>
            </div>
            <div className='h-[30rem] w-auto'>
                {active ? <LoginForm url={url}/> : <SignupForm occupant={occupant} url={url}/>}
            </div>
        </div>
    )
} 