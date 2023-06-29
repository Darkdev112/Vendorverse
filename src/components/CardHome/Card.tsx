"use client"
import { StaticImageData } from 'next/image'
import styles from './card.module.css'
import Image from 'next/image'

interface CardProps{
    image : StaticImageData,
    variant : string
}

export default function Card(props : CardProps){
    return (
        <div className={`md:w-[18rem] md:h-[18rem] sm:w-[15rem]  text-[#323232] bg-purple-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-md hover:scale-110 hover:bg-[#323232] hover:text-[#DDD0C8] transition cursor-pointer`}>
            <div className={`flex p-8 pb-2 justify-center items-center`}>
                <Image src={props.image} alt="" width={200} height={200}/>
            </div>
            <div className={`text-2xl flex justify-center items-center font-changa`}>
                <h2>{props.variant}</h2>
            </div>
        </div>
    )
}