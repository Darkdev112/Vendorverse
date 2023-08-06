import EditButton from "../ProfilePageButtons/EditButton"
import {AiOutlineLinkedin ,AiOutlineTwitter} from 'react-icons/ai'


export default function ProfileBody({fullname, email,occupation,work,location,linkedIn,twitter,phone, position} : {fullname : string | undefined, email : string | undefined, occupation : string | undefined , work : string | undefined, location : number | undefined, linkedIn : string | undefined, twitter : string | undefined, phone : string | undefined, position : string | undefined}){
    return(
        <div className="lg:w-3/4 sm:w-full h-full  rounded-[4rem] bg-[#323232] md:px-8 sm:px-4 py-4">
                        <div className="h-full w-full  ">
                            <div className="flex flex-row">
                                <h1 className="font-changa text-[#DDD0C8] md:text-[3rem] sm:text-[2rem] leading-8 text-center mx-auto">Profile</h1>
                            </div>
                            {!fullname && <div className="text-xl font-rokkitt text-center pt-8 text-[#98AFC7] h-4/5">Please edit your profile</div>}
                            {fullname && <div className="px-4  h-5/6 w-full font-rokkitt flex flex-col overflow-y-scroll no-scrollbar">
                                <div className="my-5  h-auto flex flex-row sm:flex-wrap md:flex-nowrap ">
                                    <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Name<span className="mx-2">:</span></p>
                                    <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem] sm:break-all">{fullname}</p>
                                </div>
                                <div className="my-5  h-auto flex flex-row sm:flex-wrap md:flex-nowrap ">
                                    <div className="md:w-1/2 sm:w-full flex flex-row mr-4">
                                        <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Occupation<span className="mx-2">:</span></p>
                                        <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem] sm:break-all">{occupation}</p>
                                    </div>
                                    <div className="md:w-1/2 sm:w-full flex flex-row">
                                        <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Contact<span className="mx-2">:</span></p>
                                        <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem] sm:break-all">{phone}</p>
                                    </div>
                                </div>
                                <div className="my-5  h-auto flex flex-row sm:flex-wrap md:flex-nowrap ">
                                    <div className="md:w-1/2 sm:w-full flex flex-row mr-4">
                                        <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Position<span className="mx-2">:</span></p>
                                        <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem] sm:break-all">{position}</p>
                                    </div>
                                    <div className="md:w-1/2 sm:w-full flex flex-row">
                                        <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Location<span className="mx-2">:</span></p>
                                        <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem] sm:break-all">{location}</p>
                                    </div>
                                </div>
                                <div className="my-5  h-auto flex flex-row sm:flex-wrap md:flex-nowrap ">
                                    <p className="font-rokkitt text-2xl text-[#DDD0C8] font-bold">Work<span className="mx-2">:</span></p>
                                    <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem] sm:break-all">{work}</p>
                                </div>
                                <div className="my-5  h-auto flex flex-row sm:flex-wrap md:flex-nowrap ">
                                    <div className="md:w-auto sm:w-full flex flex-row mr-4">
                                        <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem] cursor-pointer sm:break-all hover:text-gray-100"><a href={linkedIn} target='_blank'><AiOutlineLinkedin size={30}/></a></p>
                                    </div>
                                    <div className="md:w-auto sm:w-full flex flex-row">
                                        <p className="font-rokkitt text-xl text-[#DDD0C8] ml-2 pt-[0.2rem] cursor-pointer sm:break-all hover:text-gray-100"><a href={twitter} target='_blank'><AiOutlineTwitter size={30}/></a></p>
                                    </div>
                                </div>
                            </div>}
                            <div className=" w-full text-center font-changa text-gray-100 text-lg tracking-wider font-semibold">
                                <EditButton text="Edit" size="medium"/>
                            </div>
                        </div>
                    </div>
    )
}