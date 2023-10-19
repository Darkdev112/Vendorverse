"use client"

export default function Footer(){
    return (
        <footer className={`w-full md:h-[100px] sm:h-auto flex md:flex-row px-8 py-4 bg-[#323232] border-t-4
        border-gray-100 sm:flex-col sm:items-center`}>
            <div className='w-1/2 h-full flex flex-col justify-center'>
                <div className='text-3xl uppercase font-changa text-zinc-100'>
                    Vendorverse
                </div>
                <div className='text-lg text-zinc-100 font-changa'>
                    Created by Dev Ashrit Behera
                </div>
            </div> 
            <div className='w-1/2 h-full flex flex-col md:p-2 items-center flex-wrap sm:py-4'>
                <div className='text-xl font-changa text-zinc-100 hover:text-[#DDD0C8] cursor-pointer sm:mb-2 md:mb-0'>
                    <a href="https://twitter.com/devashritbehera" target='_blank'>Twitter</a>
                </div>
                <div className='text-xl font-changa text-zinc-100 hover:text-[#DDD0C8] cursor-pointer sm:mb-2 md:mb-0'>
                    <a href="https://github.com/Darkdev112" target='_blank'>Github</a>
                </div>
                <div className='text-xl font-changa text-zinc-100 hover:text-[#DDD0C8] cursor-pointer sm:mb-2 md:mb-0'>
                    <a href="https://discord.com/" target='_blank'>Discord</a>
                </div>
                <div className='text-xl font-changa text-zinc-100 hover:text-[#DDD0C8] cursor-pointer sm:mb-2 md:mb-0'>
                    <a href="https://www.linkedin.com/in/dev-ashrit-behera-19b0b0230" target='_blank'>LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}