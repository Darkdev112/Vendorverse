"use client"
import { useEffect, useState } from 'react'
import useSWR, { KeyedMutator } from 'swr'
import RequestBar from "../RequestBar/RequestBar"
import { getRequests, manageRequest} from "@/api/profile"
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export interface User{
     _id: string, 
     email: string, 
     occupation: string, 
     fullname: string | undefined, 
     work: string | undefined, 
     profilePic: string | undefined 
}

export default function RequestBarContainer() {
    const [token2, setToken2] = useState<string | null>("")
    const router = useRouter()   
    
    // if(!token2){
    //     router.push('/login')
    // }

    const getSWRRequests = async () => {
        return await getRequests(token2)   //check if this works or not
    }
    
    const {data,isLoading, mutate}  = useSWR<{user : User[]}, KeyedMutator<{user : User[]}>>('/getRequests',getSWRRequests)
    
    const useManageRequest = async (id:string, success : "true" | "false", token : string | null) => {
        try {
            const response = await manageRequest(id , success, token)
            mutate()
            if(response.success === "true"){
                toast.success('Request accepted', {
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
            else{
                toast.error("Request removed", {
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
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(typeof window !== "undefined"){
            setToken2(localStorage.getItem('token'))
        } 
    }, [typeof window])
    
    return (
        <> 
            {isLoading ? <div className='text-xl font-changa font-semibold text-[#98AFC7] w-auto mx-auto text-center m-4'>Loading...</div> : data?.user?.map((request: User) => {
                return (
                    <RequestBar key={request._id} id={request._id} email={request.email} occupation={request.occupation} fullname={request.fullname} work={request.work} profilePic={request.profilePic} useManageRequest={useManageRequest}/>
                )
            })}
            {data?.user.length==0 && <div className='text-xl font-changa font-semibold text-[#98AFC7] w-auto mx-auto text-center m-4'>Box is empty</div>}
        </>
    )
}