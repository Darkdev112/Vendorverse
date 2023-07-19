"use client"

interface ProfileConnectionsState {
    fullname : string | undefined
    profilePic : string | undefined
    email : string 
    occupation : string 
}

export default function ProfileConnection(props : ProfileConnectionsState) { 
    const profilePic = props.profilePic? "" : props.email.toUpperCase().slice(0,1)
    return (
        <div className="my-5 h-auto">
            <div className="flex flex-row justify-start">
                <div className="w-[3rem] h-[3rem] border-2  border-gray-100 rounded-[50%]  bg-[#DDD0C8] flex justify-center items-center">
                    <div className="text-lg font-semibold text-center text-[#323232]">
                        {profilePic}
                    </div>
                </div>
                <div className="h-auto my-auto flex flex-col justify-center ml-4">
                    <div className="w-full text-lg tracking-wide text-[#DDD0C8] leading-4">{props.fullname ? props.fullname :  <span className="text-gray-500">User</span>}<span className="ml-2">({props.occupation?.toUpperCase().slice(0,1)})</span></div>
                    <p className="w-full text-sm text-[#DDD0C8] break-all">{props.email}</p>
                </div>
            </div>
        </div>
    )
}