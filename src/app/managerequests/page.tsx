import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import RequestBarContainer from "@/components/RequestBarContainer/RequestBarContainer";

export default function ManageRequests(){
    const cookieStore = cookies();
    const session: undefined | { name: string, value: string } = cookieStore.get('session_token');
    if(session){
        return(
            <div className="md:mx-8 sm:mx-2 sm:mt-4 mb-8 flex flex-col items-center justify-center h-[100vh] rounded-md bg-[#323232] bg-clip-padding backdrop-filter bg-opacity-10 border border-gray-100 shadow-md ">
                <div className="border-none h-[50rem] lg:w-1/2 sm:w-full  rounded-lg bg-[#323232] flex flex-col">
                    <div className="text-[#DDD0C8] text-[2rem] m-4 text-center h-1/6 font-changa">Request Box</div>
                    <div className="m-4 h-5/6 mt-[-4rem] overflow-scroll no-scrollbar">
                        <RequestBarContainer/>
                    </div>
                </div>
            </div>
        )
    } 
    else{
        redirect('/login')
    }
}