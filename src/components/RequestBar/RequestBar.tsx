"use client"
import {RxCross1} from 'react-icons/rx'
import {BiSelectMultiple} from 'react-icons/bi'

interface RequestBarProps{
    id : string
    email : string
    occupation : string
    fullname?: string 
    work ?: string 
    profilePic ?: string 
    useManageRequest : (id : string, success : "true" | "false") => Promise<void>
}


export default function RequestBar({id , email, occupation, fullname, work, profilePic, useManageRequest} : RequestBarProps){
    console.log(id);
    
    return(
        <>
        <div className="my-5 h-auto">
            <div className="flex flex-row justify-start">
                <div className="md:w-1/6 sm:w-1/4 h-auto flex flex-col justify-center items-center ">
                    <div className="w-[3rem] h-[3rem] border-2  border-gray-100 rounded-[50%]  bg-[#DDD0C8] flex justify-center items-center">
                        <div className="text-lg font-semibold text-center text-[#323232]">
                            {profilePic ? "" : email.toUpperCase().slice(0,1)}
                        </div>
                    </div>
                </div>
                <div className="h-auto my-auto md:w-1/3 sm:w-1/2 flex flex-col justify-center mx-2">
                    <div className="w-full text-lg tracking-wide text-[#DDD0C8] leading-4">{fullname ? fullname :  <span className="text-gray-500">User</span>}<span className="ml-2">({occupation?.toUpperCase().slice(0,1)})</span></div>
                    <p className="w-full text-sm text-[#DDD0C8] break-all">{email}</p>
                </div>
                <div className="h-auto my-auto w-1/3 mx-2 text-[#DDD0C8] break-all sm:hidden md:block">
                    {work?.slice(0,20)}....
                </div>
                <div className="md:w-1/6 sm:w-1/4 h-auto flex flex-row justify-center items-center ">
                    <span className='w-1/2 my-auto text-[#DDD0C8] hover:text-green-300 cursor-pointer'>
                        <BiSelectMultiple size={25} onClick={()=>{useManageRequest(id, "true")}} />
                    </span>
                    <span className='w-1/2 my-auto text-[#DDD0C8] hover:text-red-300 cursor-pointer'>
                        <RxCross1 size={25} onClick={()=>{useManageRequest(id, "false")}}/>
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

