import styles from './page.module.css'
import LoginSignupToggle from '@/components/LoginSignupToggle/LoginSignupToggle'

interface Params {
    params: {
        occupant: string | string[] | undefined
    }
}

export default function Login({ params }: Params) {
    if(typeof params.occupant === "string"){
        
    }
    else if(typeof params.occupant === 'undefined'){

    }
    else{
        params.occupant = params.occupant[0]
    }

    return (
        <div className='md:mx-8 sm:mx-1 my-2 min-h-screen flex flex-col items-center justify-center '>
            <div className='md:h-[50rem] sm:h-[auto] w-full flex md:flex-row sm:flex-col box-border bg-purple-100 rounded-md bg-clip-padding backdrop-filter bg-opacity-10 border border-gray-100 shadow-md'>
                <div className=' h-full md:w-1/2  sm:w-full p-2'>
                    <div className='h-full flex flex-col'>
                        <div className='basis-1/6 w-full flex items-center text-[1.6rem] tracking-wide text-[#98AFC7] font-changa my-2'>
                            Vendorverse
                        </div>
                        <LoginSignupToggle occupant={params.occupant} url={`https://vendorverse-server.onrender.com`}/>
                        <div className='basis-1/6  w-full'>
                            <ul className='text-xl  text-[#98AFC7] font-changa'>
                                <li>Signup/login to get access to your workplace.</li>
                                <li>Make connections easily.</li>
                                <li>You can believe us with your information.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='h-full md:w-1/2   sm:w-full p-2 flex'>
                    <div className={`${styles.login1}  rounded-md w-full flex flex-row justify-center items-center`}>
                        <div className={`${styles.login2} w-[300px] h-[300px]`}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
