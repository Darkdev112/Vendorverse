import AddFollowersInput from "@/components/AddFollowersInput/AddFollowersInput";

export default function ManageRequests() {
    return (
        <div className="md:mx-8 sm:mx-2 sm:mt-4 mb-8 flex flex-col items-center justify-center h-[100vh] rounded-md bg-[#323232] bg-clip-padding backdrop-filter bg-opacity-10 border border-gray-100 shadow-md ">
            <div className="border-none h-[25rem] mt-[-10rem] lg:w-1/2 sm:w-full  rounded-lg bg-[#323232] flex flex-col">
                <div className="text-[#DDD0C8] text-[2rem] m-4 text-center h-1/6 font-changa sm-mb-2">Widen your Connections</div>
                <div className="m-4 h-5/6 overflow-scroll no-scrollbar flex flex-col">
                    <AddFollowersInput />
                </div>
            </div>
        </div>
    )
}