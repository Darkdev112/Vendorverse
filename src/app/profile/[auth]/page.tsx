import axios from "axios";
import { redirect } from "next/navigation";
import Link from "next/link";
import { BsBoxArrowInRight } from 'react-icons/bs'
import ProfileHead from "@/components/ProfileHead/ProfileHead";
import ProfileSide from "@/components/ProfileSide/ProfileSide";
import ProfileBody from "@/components/ProfileBody/ProfileBody";


export default async function Profile({params} : {params : {auth : string}}) {
    const {auth} = params
    const getFunc = async (link: string) => {
        const response = await axios.get(`${process.env.TESTING_URL}/${link}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth}`,
            },
        })
        return response.data;
    }
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

    if (auth) {
        const response = await getFunc('getProfile');
        const response2 = await getFunc('getConnections')            // fix this part using promise.all as you know it
        const response3 = await getFunc('getUser')
        return (
            <div className="md:mx-8 sm:mx-2 sm:mt-4 mb-8 flex flex-col min-h-auto rounded-md bg-[#323232] bg-clip-padding backdrop-filter bg-opacity-10 border border-gray-100 shadow-md">

                <ProfileHead profilePic={response.user?.proflePic} email={response.user?.email} username={response3.user?.username} occupation={response.user?.occupation} length={response2.user?.length} />

                <div className="w-auto lg:h-[30rem] sm:h-auto md:mx-[2rem] mb-[2rem] rounded-[4rem] flex lg:flex-row sm:flex-col-reverse sm:justify-center sm:items-center">
                    <ProfileSide user={response2.user as { fullname: string | undefined, email: string, occupation: string, work: string | undefined, profilePic: string | undefined, location: string | undefined, twitter: string | undefined, linkedIn: string | undefined }[]} requests={response2.requests as string[]} />
                    <ProfileBody fullname={response.user?.fullname} email={response.user?.email} occupation={response.user?.occupation} work={response.user?.work} location={response.user?.location} linkedIn={response.user?.linkedIn} twitter={response.user?.twitter} phone={response.user?.phone} position={response.user?.position}/>
                </div>

                <div className="md:w-[15rem] md:h-[5rem] sm:w-[10rem] sm:h-[4rem] rounded-[1rem] border-4 border-gray-100 mb-8 mx-auto flex flex-row justify-center items-center bg-[#DDD0C8] hover:bg-[#323232] text-[#323232] hover:text-[#DDD0C8] cursor-pointer">
                    <Link href={`/workspace/${response3.user.occupation.toLowerCase().slice(0, 1)}`} ><p className=" font-changa md:text-[2rem] sm:text-[1.5rem] leading-8 text-center flex flex-row">Workspace<span className="pt-1"><BsBoxArrowInRight /></span></p></Link>
                </div>

            </div>
        )
    }
    else {
        redirect('/login')
    }
}