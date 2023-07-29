import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import { AiOutlinePlusCircle, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'
import { BsBoxArrowInRight } from 'react-icons/bs'
import HomeProject from "@/components/HomeProject/HomeProject";
import ProfileConnections from '@/components/ProfileConnections/ProfileConnections'
import EditButton from "@/components/ProfilePageButtons/EditButton";
import ManageButton from "@/components/ProfilePageButtons/ManageButton";
import AddFollowersButton from "@/components/ProfilePageButtons/AddFollowersButton";
import AddRequestsButton from "@/components/ProfilePageButtons/AddRequestsButton";

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
            <div className="md:mx-8 sm:mx-2 sm:mt-4 mb-8 flex flex-col min-h-auto rounded-md bg-[#323232] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-md">

                
                <div className="md:w-auto sm:w-full lg:h-[26rem] sm:h-auto md:mx-[2rem] sm:mx-0 mt-[2rem] mb-[2rem] rounded-[4rem] flex flex-col md:p-8 sm:p-4 bg-[#323232]">
                    <div className="w-full lg:h-2/3 sm:h-full  flex lg:flex-row lg:justify-around sm:flex-col sm:items-center ">
                        <div className="md:w-[35rem] sm:w-full h-full  flex flex-row md:justify-start sm:justify-center">
                            <div className="md:w-[12rem] md:h-[12rem] sm:w-auto sm:h-auto border-4 border-gray-100 rounded-[50%] my-auto mx-2 bg-[#DDD0C8] flex justify-center items-center">
                                {response.user?.profilePic ? <img src="#" alt="image"></img> : <div className="md:h-[10rem] md:w-[10rem] sm:h-[5rem] sm:w-[5rem]  font-changa md:text-[6.5rem] sm:text-[3rem] text-center text-[#323232]">{response.user?.email?.toUpperCase().slice(0, 1)}</div>}
                            </div>
                            <div className="md:w-[20rem] sm:w-auto h-[10rem] my-auto sm:ml-2  flex flex-col justify-center">
                                <div className="h-auto w-full  md:text-[3rem] sm:text-[2.2rem] tracking-wide text-[#DDD0C8] font-changa text-center">{response3.user?.username}</div>
                                <div className="h-auto w-full  text-[1rem] tracking-wide text-[#DDD0C8] font-changa text-center">{response3.user?.email}</div>
                            </div>
                        </div>
                        <div className="md:w-[20rem] sm:w-auto h-full  flex flex-col lg:my-0 md:my-4">
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
                    <div className="w-full h-1/3  flex flex-row justify-center lg:my-0 sm:mt-4">
                        <div className="md:w-[6rem] md:h-[6rem] sm:w-[5rem] sm:h-[5rem] md:mr-[10vw] sm:mr-2 border-4 border-gray-100 rounded-[50%] my-auto mx-2 bg-[#DDD0C8] flex flex-col justify-center items-center">
                            <span className="text-[#323232] font-changa text-3xl font-semibold leading-6">{response2.user?.length}</span>
                            <span className="font-rokkitt font-bold sm:text-sm">connections</span>
                        </div>
                        <div className="md:w-[6rem] md:h-[6rem] sm:w-[5rem] sm:h-[5rem] border-4 border-gray-100 rounded-[50%] my-auto mx-2 bg-[#DDD0C8] flex flex-col justify-center items-center">
                            <span className="text-[#323232] font-changa text-3xl font-semibold leading-6">0</span>
                            <span className="font-rokkitt font-bold sm:text-sm">projects</span>
                        </div>
                        <div className="md:w-[6rem] md:h-[6rem] sm:w-[5rem] sm:h-[5rem] md:ml-[10vw] sm:ml-2 border-4 border-gray-100 rounded-[50%] my-auto mx-2 bg-[#DDD0C8] flex flex-col justify-center items-center">
                            <span className="text-[#323232] font-changa text-3xl font-semibold leading-6">0</span>
                            <span className="font-rokkitt font-bold sm:text-sm">stocks</span>
                        </div>
                    </div>
                </div>


                <div className="w-auto lg:h-[30rem] sm:h-auto md:mx-[2rem] mb-[2rem] rounded-[4rem] flex lg:flex-row sm:flex-col-reverse sm:justify-center sm:items-center">

                    <div className="lg:w-1/4 md:w-auto h-full lg:mr-[2rem] sm:mr-0 rounded-[4rem] bg-[#323232] py-4 sm:mt-8 lg:mt-0">
                        <div className="h-full w-full flex flex-col">
                            <div className="flex flex-row mx-auto w-5/6 h-1/10">
                                <AddFollowersButton>
                                    <span className={`absolute top-0 right-[-0.4rem] w-3 h-3 rounded-[50%] bg-rose-700/80 ${response.user?.requests.length === 0 ? 'hidden' : ''}`}></span>
                                </AddFollowersButton>
                                <h1 className="font-changa text-[#DDD0C8] text-2xl text-center mx-auto">Connections</h1>
                                <AddRequestsButton/>
                            </div>
                            <div className="px-4  h-4/5 w-full font-rokkitt">
                                {response2.user?.length === 0 ? <div className="text-xl font-rokkitt text-center mt-8 text-[#98AFC7] ">No connections to display</div> : response2.user?.slice(0, 5).map((connection: { fullname: string | undefined, email: string, occupation: string, work: string | undefined, profilePic: string | undefined }) => {
                                    return (
                                        <ProfileConnections fullname={connection.fullname} email={connection.email} occupation={connection.occupation} profilePic={connection.profilePic} key={connection.email} />
                                    )
                                })}
                            </div>
                            <div className="w-full h-1/10 text-center font-changa text-gray-100 text-lg tracking-wider font-semibold mt-4">
                                <ManageButton text="Show" size="medium"/>
                            </div>
                        </div>
                    </div>



                    <div className="lg:w-3/4 sm:w-full h-full  rounded-[4rem] bg-[#323232] md:px-8 sm:px-4 py-4">
                        <div className="h-full w-full  ">
                            <div className="flex flex-row">
                                <h1 className="font-changa text-[#DDD0C8] md:text-[3rem] sm:text-[2rem] leading-8 text-center mx-auto">Profile</h1>
                            </div>
                            {!response.user.fullname && <div className="text-xl font-rokkitt text-center pt-8 text-[#98AFC7] h-4/5">Please edit your profile</div>}
                            {response.user.fullname && <div className="px-4  h-5/6 w-full font-rokkitt flex flex-col overflow-y-scroll no-scrollbar">
                                <div className="my-5  h-auto flex flex-row sm:flex-wrap md:flex-nowrap ">
                                    <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Name<span className="mx-2">:</span></p>
                                    <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem] sm:break-all">{response.user?.fullname}</p>
                                </div>
                                <div className="my-5  h-auto flex flex-row sm:flex-wrap md:flex-nowrap ">
                                    <div className="md:w-1/2 sm:w-full flex flex-row mr-4">
                                        <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Occupation<span className="mx-2">:</span></p>
                                        <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem] sm:break-all">{response.user?.occupation}</p>
                                    </div>
                                    <div className="md:w-1/2 sm:w-full flex flex-row">
                                        <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Contact<span className="mx-2">:</span></p>
                                        <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem] sm:break-all">{response.user?.phone}</p>
                                    </div>
                                </div>
                                <div className="my-5  h-auto flex flex-row sm:flex-wrap md:flex-nowrap ">
                                    <div className="md:w-1/2 sm:w-full flex flex-row mr-4">
                                        <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Position<span className="mx-2">:</span></p>
                                        <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem] sm:break-all">{response.user?.position}</p>
                                    </div>
                                    <div className="md:w-1/2 sm:w-full flex flex-row">
                                        <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Location<span className="mx-2">:</span></p>
                                        <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem] sm:break-all">{response.user?.location}</p>
                                    </div>
                                </div>
                                <div className="my-5  h-auto flex flex-row sm:flex-wrap md:flex-nowrap ">
                                    <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Work<span className="mx-2">:</span></p>
                                    <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem] sm:break-all">{response.user?.work}</p>
                                </div>
                                <div className="my-5  h-auto flex flex-row sm:flex-wrap md:flex-nowrap ">
                                    <div className="md:w-auto sm:w-full flex flex-row mr-4">
                                        <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem] cursor-pointer sm:break-all hover:text-gray-100"><a href={response.user?.linkedIn} target='_blank'><AiOutlineLinkedin size={30}/></a></p>
                                    </div>
                                    <div className="md:w-auto sm:w-full flex flex-row">
                                        <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem] cursor-pointer sm:break-all hover:text-gray-100"><a href={response.user?.twitter} target='_blank'><AiOutlineTwitter size={30}/></a></p>
                                    </div>
                                </div>
                            </div>}
                            <div className=" w-full text-center font-changa text-gray-100 text-lg tracking-wider font-semibold">
                                <EditButton text="Edit" size="medium"/>
                            </div>
                        </div>
                    </div>

                </div>



                <div className="md:w-[15rem] md:h-[5rem] sm:w-[10rem] sm:h-[4rem] rounded-[1rem] border-4 border-gray-100 mb-8 mx-auto flex flex-row justify-center items-center bg-[#DDD0C8] hover:bg-[#323232] text-[#323232] hover:text-[#DDD0C8] cursor-pointer">
                         <Link href={`/workspace/${response3.user.occupation.toLowerCase().slice(0,1)}`} ><p className=" font-changa md:text-[2rem] sm:text-[1.5rem] leading-8 text-center flex flex-row">Workspace<span className="pt-1"><BsBoxArrowInRight/></span></p></Link>      
                </div>


            </div>
        )
    }
    else {
        redirect('/login')
    }
}