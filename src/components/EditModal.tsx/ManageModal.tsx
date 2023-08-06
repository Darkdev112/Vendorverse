"use client"

import useSWR from 'swr'
import {AiOutlineTwitter, AiOutlineLinkedin} from 'react-icons/ai'
import Modal from "../Modal/Modal"
import { newSelector,newDispatch } from "@/redux/hooks"
import { onManageClose } from "@/redux/features/modalSlice"
import { getConnections } from '@/api/profile'

export default function ManageModal(){
    const {isManageOpen} = newSelector((state) => state.modal)
    const dispatch = newDispatch();
    const onClose = () => {
        dispatch(onManageClose())
        mutate()
    }

    const {data, error, isLoading, mutate} = useSWR('/getConnections',getConnections)

    const body : React.ReactElement = (
        <>
            <div className="w-full h-[30rem] rounded-lg border border-gray-100 mb-8 overflow-y-auto no-scrollbar">
                {data?.user.map((u : any) => (
                    <div className="h-auto w-auto rounded-lg bg-[#DDD0C8] border-none m-4 p-4" key={u._id} >
                    <div className="w-full h-auto flex flex-row flex-wrap items-center leading-5">
                        <div className="h-full w-auto text-xl font-rokkitt text-[#323232] flex flex-row justify-center items-center font-bold ">
                            {u.fullname}
                        </div>
                        <div className="h-full w-auto text-lg font-rokkitt text-[#323232] mx-2 flex flex-row justify-center items-center font-semibold">
                            ({u.occupation})
                        </div>
                    </div>
                    <div className="w-full h-auto font-rokkitt text-[#98AFC7] text-sm">
                        {u.location}
                    </div>
                    <div className="w-full h-auto font-rokkitt text-[#323232] text-md my-2 leading-4 font-semibold tracking-tight">
                        {u.work}
                    </div>
                    <div className="w-full h-auto flex flex-row flex-wrap items-center leading-5">
                        <div className="h-full w-auto text-xl font-rokkitt text-[#323232] hover:text-[#98AFC7] cursor-pointer ml-2">
                            <a href={u.linkedIn}><AiOutlineLinkedin size={25}/></a>
                        </div>
                        <div className="h-full w-auto text-lg font-rokkitt text-[#323232] hover:text-[#98AFC7] cursor-pointer ml-2">
                            <a href={u.twitter}><AiOutlineTwitter size={25}/></a>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </>
    )
    
    return(
        <Modal isOpen={isManageOpen} onClose={onClose} onSubmit={onClose} title="Your Connections" text="Close" body={body} hidden={true}/>
    )
}