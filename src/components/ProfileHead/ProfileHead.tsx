import {AiOutlinePlusCircle} from 'react-icons/ai'
import Link from 'next/link'
import HomeProject from '../HomeProject/HomeProject'


export default function ProfileHead({username, email, occupation, profilePic, length} : {username : string | undefined, email : string | undefined, occupation : string | undefined , profilePic : string | undefined, length : number | undefined}){
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
    return(
        <div className="md:w-auto sm:w-full lg:h-[26rem] sm:h-auto md:mx-[2rem] sm:mx-0 mt-[2rem] mb-[2rem] rounded-[4rem] flex flex-col md:p-8 sm:p-4 bg-[#323232]">
                    <div className="w-full lg:h-2/3 sm:h-full  flex lg:flex-row lg:justify-around sm:flex-col sm:items-center ">
                        <div className="md:w-[35rem] sm:w-full h-full  flex flex-row md:justify-start sm:justify-center">
                            <div className="md:w-[12rem] md:h-[12rem] sm:w-auto sm:h-auto border-4 border-gray-100 rounded-[50%] my-auto mx-2 bg-[#DDD0C8] flex justify-center items-center">
                                {profilePic ? <img src="#" alt="image"></img> : <div className="md:h-[10rem] md:w-[10rem] sm:h-[5rem] sm:w-[5rem]  font-changa md:text-[6.5rem] sm:text-[3rem] text-center text-[#323232]">{email?.toUpperCase().slice(0, 1)}</div>}
                            </div>
                            <div className="md:w-[20rem] sm:w-auto h-[10rem] my-auto sm:ml-2  flex flex-col justify-center">
                                <div className="h-auto w-full  md:text-[3rem] sm:text-[2.2rem] tracking-wide text-[#DDD0C8] font-changa text-center">{username}</div>
                                <div className="h-auto w-full  text-[1rem] tracking-wide text-[#DDD0C8] font-changa text-center">{email}</div>
                            </div>
                        </div>
                        <div className="md:w-[20rem] sm:w-auto h-full  flex flex-col lg:my-0 md:my-4">
                            <div className="flex flex-row justify-center items-center">
                                <h1 className="text-[#DDD0C8] font-changa pt-2 text-xl">Projects</h1>
                                <span className="ml-2 pt-2 flex flex-row justify-center items-center"><Link href={email ? `/workspace/${occupation?.toLowerCase().slice(0, 1)}` : "#"}><AiOutlinePlusCircle size={20} className="hover:text-[#DDD0C8] text-[#F5F5F5] " /></Link></span>
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
                            <span className="text-[#323232] font-changa text-3xl font-semibold leading-6">{length}</span>
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
    )
}