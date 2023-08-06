import ProfileConnections from '@/components/ProfileConnections/ProfileConnections'
import ManageButton from "@/components/ProfilePageButtons/ManageButton";
import AddFollowersButton from "@/components/ProfilePageButtons/AddFollowersButton";
import AddRequestsButton from "@/components/ProfilePageButtons/AddRequestsButton";

export default function ProfileSide({user, requests} : { user  : { fullname: string | undefined, email: string, occupation: string, work: string | undefined, profilePic: string | undefined , location : string | undefined , twitter : string | undefined , linkedIn : string | undefined}[], requests : string[]}){
    return (
        <div className="lg:w-1/4 md:w-auto h-full lg:mr-[2rem] sm:mr-0 rounded-[4rem] bg-[#323232] py-4 sm:mt-8 lg:mt-0">
            <div className="h-full w-full flex flex-col">
                <div className="flex flex-row mx-auto w-5/6 h-1/10">
                    <AddFollowersButton>
                        <span className={`absolute top-0 right-[-0.4rem] w-3 h-3 rounded-[50%] bg-rose-700/80 ${requests.length === 0 ? 'hidden' : ''}`}></span>
                    </AddFollowersButton>
                    <h1 className="font-changa text-[#DDD0C8] text-2xl text-center mx-auto">Connections</h1>
                    <AddRequestsButton />
                </div>
                <div className="px-4  h-4/5 w-full font-rokkitt">
                    {user?.length === 0 ? <div className="text-xl font-rokkitt text-center mt-8 text-[#98AFC7] ">No connections to display</div> : user.slice(0, 5).map((connection: { fullname: string | undefined, email: string, occupation: string, work: string | undefined, profilePic: string | undefined }) => {
                        return (
                            <ProfileConnections fullname={connection.fullname} email={connection.email} occupation={connection.occupation} profilePic={connection.profilePic} key={connection.email} />
                        )
                    })}
                </div>
                <div className="w-full h-1/10 text-center font-changa text-gray-100 text-lg tracking-wider font-semibold mt-4">
                    <ManageButton text="Show" size="medium" />
                </div>
            </div>
        </div>
    )
}