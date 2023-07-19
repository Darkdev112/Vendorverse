import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { RiPassPendingLine } from 'react-icons/ri'
import { BsBoxArrowInRight } from 'react-icons/bs'
import HomeProject from "@/components/HomeProject/HomeProject";
import ProfileConnections from '@/components/ProfileConnections/ProfileConnections'

async function getFunc(link: string) {
    const cookieStore = cookies();
    const session: undefined | { name: string, value: string } = cookieStore.get('session_token');
    const response = await axios.get(`${process.env.TESTING_URL}/${link}`, {
        "withCredentials": true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': session?.value,
        },
    })
    return response.data;
}


export default async function Profile() {
    const projectsDummy = [
        {
            id: 1,
            projectname: "first project",
            link: "/profile",
        },
        {
            id: 2,
            projectname: "second project",
            link: "/profile"
        },
        {
            id: 3,
            projectname: "third project",
            link: "/profile"
        },
        {
            id: 4,
            projectname: "fourth project",
            link: "/profile"
        }
    ]
    const cookieStore = cookies();
    const session: undefined | { name: string, value: string } = cookieStore.get('session_token');
    const response = await getFunc('getProfile');
    const response2 = await getFunc('getConnections')
    const response3 = await getFunc('getUser')
    // console.log(response.user);
    // console.log(response2.user);


    if (session) {
        return (
            <div className="mx-8 mb-8 flex flex-col min-h-auto rounded-md bg-[#323232] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-md">
                <div className="w-auto h-[26rem] mx-[2rem] mt-[2rem] mb-[2rem] rounded-[4rem] flex flex-col p-8 bg-[#323232]">
                    <div className="w-full h-2/3 border border-red-500 flex flex-row justify-around">
                        <div className="w-[35rem] h-full border border-red-500 flex flex-row justify-start">
                            <div className="w-[12rem] h-[12rem] border-4 border-gray-100 rounded-[50%] my-auto mx-2 bg-[#DDD0C8] flex justify-center items-center">
                                {response.user?.profilePic ? <img src="#" alt="iamge"></img> : <div className="h-[10rem] w-[10rem] text-[lg] border border-red-400 font-changa text-[6.5rem] text-center text-[#323232]">{response.user?.email.toUpperCase().slice(0, 1)}</div>}
                            </div>
                            <div className="w-[20rem] h-[10rem] my-auto border border-red-500 flex flex-col justify-center">
                                <div className="h-auto w-full border border-red-500 text-[3rem] tracking-wide text-[#DDD0C8] font-changa text-center">{response3.user?.username}</div>
                                <div className="h-auto w-full border border-red-500 text-[1rem] tracking-wide text-[#DDD0C8] font-changa text-center">{response3.user?.email}</div>
                            </div>
                        </div>
                        <div className="w-[20rem] h-full border border-red-500 flex flex-col">
                            <div className="flex flex-row justify-center items-center">
                                <h1 className="text-[#DDD0C8] font-changa pt-2 text-xl">Projects</h1>
                                <span className="ml-2 pt-2 flex flex-row justify-center items-center"><Link href={response.user ? `/workspace/${response.user?.occupation.toLowerCase().slice(0, 1)}` : "#"}><AiOutlinePlusCircle size={20} className="hover:text-[#DDD0C8] text-[#F5F5F5] " /></Link></span>
                            </div>
                            <div className="w-full flex flex-row flex-wrap m-auto mt-0">
                                {projectsDummy.map((project) => {
                                    return (
                                        <HomeProject project={project} key={project.id} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-1/3 border border-red-500 flex flex-row justify-center">
                        <div className="w-[6rem] h-[6rem] mr-[10vw] border-4 border-gray-100 rounded-[50%] my-auto mx-2 bg-[#DDD0C8] flex flex-col justify-center items-center">
                            <span className="text-[#323232] font-changa text-3xl font-semibold leading-6">{response2.user?.length}</span>
                            <span className="font-rokkitt font-bold">connections</span>
                        </div>
                        <div className="w-[6rem] h-[6rem]  border-4 border-gray-100 rounded-[50%] my-auto mx-2 bg-[#DDD0C8] flex flex-col justify-center items-center">
                            <span className="text-[#323232] font-changa text-3xl font-semibold leading-6">0</span>
                            <span className="font-rokkitt font-bold">projects</span>
                        </div>
                        <div className="w-[6rem] h-[6rem] ml-[10vw] border-4 border-gray-100 rounded-[50%] my-auto mx-2 bg-[#DDD0C8] flex flex-col justify-center items-center">
                            <span className="text-[#323232] font-changa text-3xl font-semibold leading-6">0</span>
                            <span className="font-rokkitt font-bold">stocks</span>
                        </div>
                    </div>
                </div>
                <div className="w-auto h-[30rem] mx-[2rem]  mb-[2rem] rounded-[4rem] flex flex-row">
                    <div className="w-1/4 h-full mr-[2rem] rounded-[4rem] bg-[#323232]  py-4">
                        <div className="h-full w-full border border-red-500">
                            <div className="flex flex-row mx-auto w-5/6">
                                <span className="flex flex-row justify-center items-center relative"><RiPassPendingLine size={25} className="hover:text-[#DDD0C8] text-[#F5F5F5] cursor-pointer ml-2" /><span className={`absolute top-0 right-[-0.4rem] w-3 h-3 rounded-[50%] bg-rose-700/80 ${response.user?.requests.length === 0 ? 'hidden' : ''}`}></span></span>
                                <h1 className="font-changa text-[#DDD0C8] text-2xl text-center mx-auto">Connections</h1>
                                <span className="flex flex-row justify-center items-center  "><AiOutlinePlusCircle size={25} className="hover:text-[#DDD0C8] text-[#F5F5F5] cursor-pointer mr-2" /></span>
                            </div>
                            <div className="px-4 border border-red-500 h-5/6 w-full font-rokkitt">
                                {response2.user?.length === 0 ? <div className="text-xl font-rokkitt text-center mt-8 text-[#98AFC7] ">No connections to display</div> : response2.user.slice(0, 5).map((connection: { fullname: string | undefined, email: string, occupation: string, work: string | undefined, profilePic: string | undefined }) => {
                                    return (
                                        <ProfileConnections fullname={connection.fullname} email={connection.email} occupation={connection.occupation} profilePic={connection.profilePic} key={connection.email} />
                                    )
                                })}
                            </div>
                            <div className="mt-2 w-full border border-red-300 text-center font-changa text-gray-100 text-lg tracking-wider font-semibold ">
                                <span className="hover:text-[#DDD0C8] hover:underline transition cursor-pointer">Manage</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4 h-full  rounded-[4rem] bg-[#323232] px-8 py-4">
                        <div className="h-full w-full border border-red-500 ">
                            <div className="flex flex-row">
                                <h1 className="font-changa text-[#DDD0C8] text-[3rem] leading-8 text-center mx-auto">Profile</h1>
                            </div>
                            <div className="px-4 border border-red-500 h-5/6 w-full font-rokkitt flex flex-col overflow-y-scroll no-scrollbar">
                                <div className="my-5 border border-red-500 h-auto flex flex-row ">
                                    <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Name<span className="mx-2">:</span></p>
                                    <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem]">{response.user?.fullname}</p>
                                </div>
                                <div className="my-5 border border-red-500 h-auto flex flex-row ">
                                    <div className="w-1/2 flex flex-row mr-4">
                                        <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Occupation<span className="mx-2">:</span></p>
                                        <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem]">{response.user?.occupation}</p>
                                    </div>
                                    <div className="w-1/2 flex flex-row">
                                        <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Contact<span className="mx-2">:</span></p>
                                        <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem]">{response.user?.phone}</p>
                                    </div>
                                </div>
                                <div className="my-5 border border-red-500 h-auto flex flex-row ">
                                    <div className="w-1/2 flex flex-row mr-4">
                                        <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Position<span className="mx-2">:</span></p>
                                        <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem]">{response.user?.position}</p>
                                    </div>
                                    <div className="w-1/2 flex flex-row">
                                        <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Location<span className="mx-2">:</span></p>
                                        <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem]">{response.user?.location}</p>
                                    </div>
                                </div>
                                <div className="my-5 border border-red-500 h-auto flex flex-row ">
                                    <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Work<span className="mx-2">:</span></p>
                                    <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem]">{response.user?.work}</p>
                                </div>
                                <div className="my-5 border border-red-500 h-auto flex flex-row ">
                                    <div className="w-1/2 flex flex-row mr-4">
                                        <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">LinkedIn<span className="mx-2">:</span></p>
                                        <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem] cursor-pointer"><a href={response.user?.linkedIn} target='_blank'>{response.user?.linkedIn}</a></p>
                                    </div>
                                    <div className="w-1/2 flex flex-row">
                                        <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Twitter<span className="mx-2">:</span></p>
                                        <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem] cursor-pointer"><a href={response.user?.twitter} target='_blank'>{response.user?.twitter}</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 w-full border border-red-300 text-center font-changa text-gray-100 text-lg tracking-wider font-semibold ">
                                <span className="hover:text-[#DDD0C8] hover:underline transition cursor-pointer">Edit</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[15rem] h-[5rem] rounded-[1rem] border-4 border-gray-100 mb-8 mx-auto flex flex-row justify-center items-center bg-[#DDD0C8] hover:bg-[#323232] text-[#323232] hover:text-[#DDD0C8] cursor-pointer transition">
                         <Link href={`/workspace/${response3.user.occupation.toLowerCase().slice(0,1)}`} ><p className=" font-changa text-[2rem] leading-8 text-center flex flex-row">Workspace<span><BsBoxArrowInRight/></span></p></Link>      
                </div>
            </div>
        )
    }
    else {
        redirect('/login')
    }
}