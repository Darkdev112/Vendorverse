"use client"
import Image from 'next/image'
import folder from '@/assets/images/folder.png'
import Link from 'next/link'

interface HomeProjectState{
    project : {
        id : number,
        projectname : string,
        link : string
    },
    key : number
}

export default function HomeProject({project} : HomeProjectState){
    return(
        <div className=" h-1/2 w-1/2 flex flex-col justify-center items-center my-1 text-[#98AFC7] hover:text-[#DDD0C8] hover:cursor-pointer">
            <Link href={project.link}>
                <Image className='hover:scale-[1.1] transition text-gray-100' src={folder} alt="folder" width={70}/>
                <p className=' font-semibold tracking-wide font-rokkitt'>{project.projectname}</p>
            </Link>
        </div>
    )
}